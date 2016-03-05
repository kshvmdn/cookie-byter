if (Meteor.isClient) {
  var interval;
  var inc = 1.0;
  var ppl = {
    'student': {
      'rate': 2,
      'price': 256,
      'numberOwned': 0
    },
    'intern': {
      'rate': 3,
      'price': 512,
      'numberOwned': 0
    },
    'programmer': {
      'rate': 4,
      'price': 1024,
      'numberOwned': 0
    }
  };
  Session.setDefault('rate', 1.0);
  Session.setDefault('score', 0);
  Session.setDefault('time', 0);
  Session.setDefault('timeInterval', 1000);

  Template.cookie.helpers({
    score: function () {
      return Session.get('score');
    }
  });

  Template.cookie.events({
    'click button': function () {
      if (interval === undefined) {
        interval = Meteor.setInterval(function () {
          Session.set('score', Session.get('score') + (inc * Session.get('rate')));
        }, Session.get('timeInterval'));
      }
      Session.set('score', Session.get('score') + (inc * Session.get('rate')));
    }
  });

  Template.buy.events({
    'click button': function (event) {
      var person = ppl[event.target.id];
      if (Session.get('score') >= person.price) {
        Session.set('score', Session.get('score') - person.price);
        Session.set('rate', Session.get('rate') * person.rate);
        person.numberOwned += 1;
      }
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
