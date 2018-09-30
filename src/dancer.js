// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();  
  this.name = "notBB8";
  this.left = left;
};


MakeDancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}


MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

MakeDancer.prototype.lineUp = function() {
  var lineUpStyle = {
    top: "300px",
    left: "100px",  
    position: "relative"
  }
  this.$node.css(lineUpStyle);
}


