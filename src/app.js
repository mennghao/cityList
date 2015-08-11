var Vue = require('vue');

var app = new Vue(require('./app.vue')).$mount('#app');

function route () {
  app.page = window.location.hash.slice(1) || 'welcome';
}

window.addEventListener('hashchange', route)
window.addEventListener('load', route)