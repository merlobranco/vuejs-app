'use strict';

var app = new Vue({
	el: '#app',
  	data: {
  		title: 'Hello World!'
  	},
  	methods: {
  		changeTitle: function (event) { // Using vanilla.js (pure javascript)
    		this.title = event.target.value;
    	}
  	}
});