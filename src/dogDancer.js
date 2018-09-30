var MakeDogDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.attr('class', 'dancer dogDancer');
    this.setPosition(top, left)
    this.name = "notBB8"
    this.left = left;
}

MakeDogDancer.prototype = Object.create(MakeDancer.prototype);
MakeDogDancer.prototype.constructor = MakeDogDancer;

MakeDogDancer.prototype.step = function() {
    MakeDancer.prototype.step.call(this);
}
