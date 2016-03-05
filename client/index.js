var interval;
var ppl = {
  'student': {
    'rate': 2,
    'price': 64,
    'numberOwned': 0
  },
  'intern': {
    'rate': 3,
    'price': 128,
    'numberOwned': 0
  },
  'programmer': {
    'rate': 4,
    'price': 256,
    'numberOwned': 0
  }
};

Session.setDefault('rate', 1.0);
Session.setDefault('score', 0);
Session.setDefault('time', 0);
Session.setDefault('timeInterval', 1000);
Session.setDefault('people', ppl);
