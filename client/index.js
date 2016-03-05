var ppl = {
  'waterloo': {
    'name': 'WATERLOO STUDENT',
    'boostrate': -1,
    'price': 1,
    'numberOwned': 0
  },
  'ryerson': {
    'name': 'RYERSON STUDENT',
    'boostrate': -1,
    'price': 2,
    'numberOwned': 0
  },
  'student': {
    'name': 'COMPETENT CS STUDENT',
    'boostrate': 1,
    'price': 64,
    'numberOwned': 0
  },
  'intern': {
    'name': 'INTERN',
    'boostrate': 4,
    'price': 256,
    'numberOwned': 0
  },
  'softwareengineer': {
    'name': 'SOFTWARE ENGINEER',
    'boostrate': 10,
    'price': 2048,
    'numberOwned': 0
  },
  'srsoftwareengineer': {
    'name': 'SENIOR SOFTWARE ENGINEER',
    'boostrate': 25,
    'price': 8192,
    'numberOwned': 0
  },
  'cto': {
    'name': 'CTO',
    'boostrate': 75,
    'price': 32768,
    'numberOwned': 0
  },
  'billgates': {
    'name': 'A BILL GATES',
    'boostrate': 200,
    'price': 131072,
    'numberOwned': 0
  },
  'alanturing': {
    'name': 'THE ALAN TURING',
    'boostrate': 500,
    'price': 524288,
    'numberOwned': 0
  },
  'uoft': {
    'name': 'UOFT CS STUDENT',
    'boostrate': 5000,
    'price': 4194304,
    'numberOwned': 0
  }
};

var upg = {
  'parents': {
    'clickrate': 1,
    'price': 128,
    'owned': False
  },
  'ownplace': {
    'clickrate': 5,
    'price': 1024,
    'owned': False
  },
  'startup': {
    'clickrate': 10,
    'price': 4096,
    'owned': False
  },
  'office': {
    'clickrate': 50,
    'price': 16384,
    'numberOwned': 0
  },
  'building': {
    'clickrate': 200,
    'price': 131072,
    'numberOwned': 0
  },
  'city': {
    'clickrate': 1000,
    'price': 1048576,
    'numberOwned': 0
  },
  'country': {
    'clickrate': 7777,
    'price': 8388608,
    'numberOwned': 0
  },
  'world': {
    'clickrate': 20000,
    'price': 134217728,
    'numberOwned': 0
  },

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
