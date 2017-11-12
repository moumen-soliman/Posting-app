// create a new express router
const express      = require('express'),
  router           = express.Router(),
  homeController   = require('./controllers/home.controller'),
  postController = require('./controllers/post.controller');

// export router
module.exports = router;

// define routes
// main routes
router.get('/', homeController.showHome);

// post routes
router.get('/create',       postController.createPost);

