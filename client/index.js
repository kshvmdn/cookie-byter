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

Session.setDefault('clickrate', 1.0);
Session.setDefault('boostrate', 0);
Session.setDefault('score', 0);
Session.setDefault('timeInterval', 1000);
Session.setDefault('people', ppl);
