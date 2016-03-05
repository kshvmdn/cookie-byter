Template.byte.helpers({
  score: function () {
    return Session.get('score');
  },
  binary: function () {
    return Session.get('score').toString(2);
  },
  text: function () {
    var score = Session.get('score');
    var conversionFactor, byteType;
    if (score >= 1099511627776) {
      conversionFactor = 1099511627776;
      byteType = 'Terabyte(s)';
    } else if (score >= 1073741824) {
      conversionFactor = 1073741824;
      byteType = 'Gigabyte(s)';
    } else if (score >= 1048576) {
      conversionFactor = 1048576;
      byteType = 'Megabyte(s)';
    } else if (score >= 1024) {
      conversionFactor = 1024;
      byteType = 'Kilobyte(s)';
    } else {
      conversionFactor = 1;
      byteType = 'Byte(s)';
    }

    var num = (score / conversionFactor).toFixed(2)
    if (num.slice(-2) == '00')
      num = num.slice(0, -3);
    return num + ' ' + byteType;
  }
});

Template.byte.events({
  'click button': function () {
    Session.setPersistent('score', Session.get('score') + Session.get('clickrate'));
  }
});
