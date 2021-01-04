const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/maenda/repos/tutorials/master-gatsby-frontend/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/maenda/repos/tutorials/master-gatsby-frontend/src/pages/404.js"))),
  "component---src-pages-beers-js": hot(preferDefault(require("/Users/maenda/repos/tutorials/master-gatsby-frontend/src/pages/beers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/maenda/repos/tutorials/master-gatsby-frontend/src/pages/index.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/Users/maenda/repos/tutorials/master-gatsby-frontend/src/pages/order.js"))),
  "component---src-pages-pizzas-js": hot(preferDefault(require("/Users/maenda/repos/tutorials/master-gatsby-frontend/src/pages/pizzas.js"))),
  "component---src-pages-slicemasters-js": hot(preferDefault(require("/Users/maenda/repos/tutorials/master-gatsby-frontend/src/pages/slicemasters.js")))
}

