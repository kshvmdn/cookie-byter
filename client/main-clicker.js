var inc = 1.0;
var ppl = {
  'student': {
    'rate': 1.15,
    'price': 100,
    'numberOwned': 0
  },
  'intern': {
    'rate': 1.25,
    'price': 150,
    'numberOwned': 0
  },
  'programmer': {
    'rate': 1.35,
    'price': 200,
    'numberOwned': 0
  }
};
Session.setDefault('rate', 1.0);
Session.setDefault('score', 0);
Session.setDefault('time', 0);

var interval = Meteor.setInterval(function () {
  return null;
}, 1000);

Template.cookie.helpers({
  score: function () {
    return Session.get('score');
  }
});

Template.cookie.events({
  'click button': function () {
    Session.set('score', Session.get('score') + (inc * Session.get('rate')));
  }
});

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
