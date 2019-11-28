'use strict';

new Vue({
	el: '#app',
  	data: {
  		title: 'Hello World!',
  		link: 'http://google.com',
  		finishedLink: '<a href="http://google.com">Google</a>'
  	},
  	methods: {
  		changeTitle: function (event) { // Using vanilla.js (pure javascript)
    		this.title = event.target.value;
    	},
    	sayHello: function () {
    		this.title = 'Hello!';
      		return this.title;
    	}
  	}
});