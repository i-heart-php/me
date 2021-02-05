module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"start_url":"/me","background_color":"#fffff","display":"standalone","icon":"src/img/favicon-32x32.png","icons":[{"src":"src/img/mstile-150x150.png","sizes":"150x150","type":"image/png"},{"src":"src/img/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"src/img/android-chrome-384x384","sizes":"384x384","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e85fc407aa88d8529b0335693142571d"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/mike/Desktop/~Dev/i-heart-php"},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
