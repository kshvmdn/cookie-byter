Template.worker.helpers({
  people: function () {
    people = []
    _.forEach(Session.get('people'), function(person, key) {
      person.class_ = key;
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
