var interval;
var ppl = {
  'waterloo': {
    'boostrate': -1,
    'price': 1,
    'numberOwned': 0
  },
  'ryerson': {
    'boostrate': -1,
    'price': 2,
    'numberOwned': 0
  },
  'student': {
    'boostrate': 1,
    'price': 64,
    'numberOwned': 0
  }
};

var init = function () {
  Session.setDefault('clickrate', 1.0);
  Session.setDefault('boostrate', 0);
  Session.setDefault('score', 0);
  Session.setDefault('timeInterval', 1000);
  Session.setDefault('people', ppl);
  Session.setDefault('interval', undefined);

  var interval = Session.get('interval');

  if (interval === undefined) {
    interval = Meteor.setInterval(function () {
      Session.setPersistent('score', Session.get('score') + Session.get('boostrate'));
    }, Session.get('timeInterval'));
    Session.setPersistent('interval', interval);
  }
}

Template.body.onRendered = function () {
  if (!this._rendered) {
    this._rendered = true;
    init();
  }
}

Template.body.events({
  'click .reset': function () {
    Session.clear();
    init();
  }
});
