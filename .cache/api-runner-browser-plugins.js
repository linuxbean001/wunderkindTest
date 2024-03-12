module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"includeInDevelopment":true,"defaultDataLayer":null,"routeChangeEventName":"gatsby-route-change"},
    },{
      plugin: require('../node_modules/gatsby-plugin-react-helmet-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://wdk-synced-staging.netlify.app/"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gdpr-cookies/gatsby-browser.js'),
      options: {"plugins":[],"googleAnalytics":{"cookieName":"gatsby-gdpr-google-analytics","anonymize":true,"allowAdFeatures":false}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
