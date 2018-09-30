var MakeKickDancer = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.attr('class', 'dancer kickDancer');

    this.setPosition(top, left);
    this.name = "notBB8";
    this.left = left;
}

MakeKickDancer.prototype = Object.create(MakeDancer.prototype);
MakeKickDancer.prototype.constructor = MakeKickDancer;

MakeKickDancer.prototype.step = function() {
    MakeDancer.prototype.step.call(this);
}