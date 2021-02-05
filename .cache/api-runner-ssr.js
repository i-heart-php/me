var plugins = [{
      plugin: require('/Users/mike/Desktop/~Dev/i-heart-php/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"start_url":"/me","background_color":"#fffff","display":"standalone","icon":"src/img/favicon-32x32.png","icons":[{"src":"src/img/mstile-150x150.png","sizes":"150x150","type":"image/png"},{"src":"src/img/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"src/img/android-chrome-384x384","sizes":"384x384","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e85fc407aa88d8529b0335693142571d"},
    },{
      plugin: require('/Users/mike/Desktop/~Dev/i-heart-php/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/mike/Desktop/~Dev/i-heart-php"},
    },{
      plugin: require('/Users/mike/Desktop/~Dev/i-heart-php/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mike/Desktop/~Dev/i-heart-php/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
