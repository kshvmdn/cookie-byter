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
  },
  'intern': {
    'boostrate': 3,
    'price': 256,
    'numberOwned': 0
  },
  'softwareengineer': {
    'boostrate': 5,
    'price': 2048,
    'numberOwned': 0
  }
};

var init = function () {
  Session.set('clickrate', 1.0);
  Session.set('boostrate', 0);
  Session.set('score', 0);
  Session.set('timeInterval', 1000);
  Session.set('people', ppl);

  var interval = Meteor.setInterval(function () {
    Session.setPersistent('score', Session.get('score') + Session.get('boostrate'));
  }, Session.get('timeInterval'));
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
