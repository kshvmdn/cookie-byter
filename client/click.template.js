Template.byte.helpers({
  score: function () {
    return Session.get('score');
  }
});

var interval;

Template.byte.events({
  'click button': function () {
    if (interval === undefined) {
      interval = Meteor.setInterval(function () {
      Session.setPersistent('score', Session.get('score') + Session.get('boostrate'));
      }, Session.get('timeInterval'));
    }
    Session.setPersistent('score', Session.get('score') + Session.get('clickrate'));
  }
});
