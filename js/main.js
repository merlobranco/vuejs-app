'use strict';

new Vue({
	el: '#app',
  	data: {
  		title: 'Hello World!',
  		link: 'http://google.com',
  		finishedLink: '<a href="http://google.com">Google</a>',
  		counter: 0,
  		x: 0,
    	y: 0,
      name: 'Brais',
      result: ''
  	},
  	methods: {
  		changeTitle: function (event) { // Using vanilla.js (pure javascript)
    		this.title = event.target.value;
    	},
    	sayHello: function () {
    		this.title = 'Hello!';
      		return this.title;
    	},
    	increase: function() {
	    	this.counter++;
        this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5';
	    },
      decrease: function() {
        this.counter--;
        this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5';
      },
	    updateCoordinates: function(event) {
	   		this.x = event.clientX;
	      this.y = event.clientY;
	    }
  	}
});