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
      attachRed: false,
      attachGreen: false,
      attachBlue: false,
      color: 'gray',
      width: 100,
      show: true
  	},
  	methods: {
  		changeTitle: function (event) { // Using vanilla.js (pure javascript)
    		this.title = event.target.value;
    	},
    	sayHello: function () {
    		this.title = 'Hello!';
      		return this.title;
    	},
	    updateCoordinates: function(event) {
	   		this.x = event.clientX;
	      this.y = event.clientY;
	    }
  	},
    computed: {
      result: function() {
        return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
      },
      divClasses: function() {
        return {
          red: this.attachRed,
          blue: !this.attachRed
        }
      },
      myStyle: function() {
        return {
          backgroundColor: this.color,
          width: this.width + 'px'
        }
      }
    },
    watch: {
      counter: function(value) {
        let vm = this;
        setTimeout(() => { vm.counter = 0; }, 2000);
      }
    }
});