Template.worker.helpers({
  people: function () {
    people = []
    _.forEach(Session.get('people'), function(person, key) {
      person.class_ = key;
      var p = person.price;
      var conversionFactor, byteType;
      if (p >= 1099511627776) {
        conversionFactor = 1099511627776;
        byteType = 'TB';
      } else if (p >= 1073741824) {
        conversionFactor = 1073741824;
        byteType = 'GB';
      } else if (p >= 1048576) {
        conversionFactor = 1048576;
        byteType = 'MB';
      } else if (p >= 1024) {
        conversionFactor = 1024;
        byteType = 'KB';
      } else {
        conversionFactor = 1;
        byteType = 'B';
      }
      var n =  (p / conversionFactor).toFixed(2);
      if (n.slice(-2) == '00')
        n = n.slice(0, -3);
      person.priceText = n + ' ' + byteType;
      people.push(person);
    });
    return people;
  }
});

Template.worker.events({
  'click button': function (event) {
    var people = Session.get('people');
    var person = people[event.target.id];
    if (Session.get('score') >= person.price) {
      Session.setPersistent({
        score: Session.get('score') - person.price,
        boostrate: Session.get('boostrate') + person.boostrate,
      });

      person.numberOwned += 1;
      person.price *= 1.2
      person.price = Math.ceil(person.price);
      people[event.target.id] = person;
      Session.setPersistent('people', people);
    }
  }
});
