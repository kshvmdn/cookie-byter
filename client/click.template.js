Template.byte.helpers({
  score: function () {
    return Session.get('score');
  },
  binary: function () {
    return Session.get('score').toString(2);
  },
  boost: function() {
    var boostrate = Session.get('boostrate');
    var conversionFactor, byteType;
    if (boostrate >= 1099511627776) {
      conversionFactor = 1099511627776;
      byteType = 'Terabyte';
    } else if (boostrate >= 1073741824) {
      conversionFactor = 1073741824;
      byteType = 'Gigabyte';
    } else if (boostrate >= 1048576) {
      conversionFactor = 1048576;
      byteType = 'Megabyte';
    } else if (boostrate >= 1024) {
      conversionFactor = 1024;
      byteType = 'Kilobyte';
    } else {
      conversionFactor = 1;
      byteType = 'Byte';
    }

    var num = boostrate / conversionFactor;
    if (num == 1){
      num = num.toFixed(2);
      if (num.slice(-2) == '00')
        num = num.slice(0, -3);
      return num + ' ' + byteType + ' / sec';
    }
    num = num.toFixed(2);
    if (num.slice(-2) == '00')
      num = num.slice(0, -3);
    return num + ' ' + byteType + 's / sec';
  },
  text: function () {
    var score = Session.get('score');
    var conversionFactor, byteType;
    if (score >= 1099511627776) {
      conversionFactor = 1099511627776;
      byteType = 'Terabyte';
    } else if (score >= 1073741824) {
      conversionFactor = 1073741824;
      byteType = 'Gigabyte';
    } else if (score >= 1048576) {
      conversionFactor = 1048576;
      byteType = 'Megabyte';
    } else if (score >= 1024) {
      conversionFactor = 1024;
      byteType = 'Kilobyte';
    } else {
      conversionFactor = 1;
      byteType = 'Byte';
    }

    var num = score / conversionFactor;
    if (num == 1){
      num = num.toFixed(2);
      if (num.slice(-2) == '00')
        num = num.slice(0, -3);
      return num + ' ' + byteType;
    }
    num = num.toFixed(2);
    if (num.slice(-2) == '00')
      num = num.slice(0, -3);
    return num + ' ' + byteType + 's';
  }
});

Template.byte.events({
  'click button': function () {
    Session.setPersistent({
      'score': Session.get('score') + Session.get('clickrate'),
      'totalClicks': Session.get('totalClicks') + 1,
      'totalBytes': Session.get('totalBytes') + Session.get('clickrate')
    });
  }
});
