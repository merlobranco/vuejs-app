'use strict';

var app = new Vue({
	el: '#app',
  	data: {
  		title: 'Hello World!',
  		link: 'http://google.com'
  	},
  	methods: {
  		changeTitle: function (event) { // Using vanilla.js (pure javascript)
    		this.title = event.target.value;
    	},
    	sayHello: function () {
    		return this.title;
    	}
  	}
});