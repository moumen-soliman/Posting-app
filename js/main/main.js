var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2W_mpTQsIMr0sb5k1Behf3dYqOHMTkq0",
    authDomain: "moumensoliman-99862.firebaseapp.com",
    databaseURL: "https://moumensoliman-99862.firebaseio.com",
    projectId: "moumensoliman-99862",
    storageBucket: "moumensoliman-99862.appspot.com",
    messagingSenderId: "28653494085"
  };
  
  firebase.initializeApp(config);

var userPost = firebase.database().ref('users');

// create Vue app
var app = new Vue({
  // element to mount to
  el: '#app',
  // initial data
  data: {
    newPost: {
      name: '',
      post: '',
      email: ''
    }
  },
  firebase: {
    users: userPost
  },
  computed: {
    validation: function () {
      return {
        name: !!this.newPost.name.trim(),
        post: !!this.newPost.post.trim(),
        email: emailRE.test(this.newPost.email)
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  // methods
  methods: {
    addPost: function () {
      if (this.isValid) {
        userPost.push(this.newPost)
        this.newPost.name = ''
        this.newPost.post = ''
        this.newPost.email = ''
      }
    },
    removeUser: function (user) {
      userPost.child(user['.key']).remove()
    }
  }
})


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/sw/index.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}

const polyfillsNeeded = [];

if (!('Promise' in self)) polyfillsNeeded.push('/js/polyfills/promise.js');

try {
  new URL('b', 'http://a');
}
catch (e) {
  polyfillsNeeded.push('/js/polyfills/url.js');
}

loadScripts(polyfillsNeeded, function() {
  new IndexController(document.querySelector('.main'));
});