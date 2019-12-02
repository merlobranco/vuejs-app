'use strict';

new Vue({
	el: '#app',
  	data: {
  		title: 'Hello World!',
  		link: 'http://google.com',
  		finishedLink: '<a href="http://google.com">Google</a>',
  		counter: 0,
  		x: 0,
    	y: 0 
  	},
  	methods: {
  		changeTitle: function (event) { // Using vanilla.js (pure javascript)
    		this.title = event.target.value;
    	},
    	sayHello: function () {
    		this.title = 'Hello!';
      		return this.title;
    	},
    	increment: function(value, event) {
	    	this.counter+= value;
	    },
	    updateCoordinates: function(event) {
	   		this.x = event.clientX;
	      this.y = event.clientY;
	    }
  	}
});