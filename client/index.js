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
    'boostrate': 4,
    'price': 256,
    'numberOwned': 0
  },
  'softwareengineer': {
    'boostrate': 10,
    'price': 2048,
    'numberOwned': 0
  },
  'srsoftwareengineer': {
    'boostrate': 25,
    'price': 8192,
    'numberOwned': 0
  },
  'cto': {
    'boostrate': 75,
    'price': 32768,
    'numberOwned': 0
  },
  'billgates': {
    'boostrate': 200,
    'price': 131072,
    'numberOwned': 0
  },
  'alanturing': {
    'boostrate': 500,
    'price': 524288,
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
