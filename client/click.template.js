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
        Session.set('score', Session.get('score') + (1 * Session.get('rate')));
      }, Session.get('timeInterval'));
    }
    Session.set('score', Session.get('score') + (1 * Session.get('rate')));
  }
});
