var MakeCircleDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.attr('class', 'dancer circleDancer');
    this.setPosition(top, left);
    this.name = "bb8";
    this.left = left;
}

MakeCircleDancer.prototype = Object.create(MakeDancer.prototype);
MakeCircleDancer.prototype.constructor = MakeCircleDancer;

MakeCircleDancer.prototype.step = function() {
    MakeDancer.prototype.step.call(this);
}



  