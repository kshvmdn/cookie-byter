Template.worker.events({
  'click button': function (event) {
    var people = Session.get('people');
    var person = people[event.target.id];
    if (Session.get('score') >= person.price) {
      person.numberOwned += 1;
      people[event.target.id] = person;

      Session.setPersistent({
        score: Session.get('score') - person.price,
        boostrate: Session.get('boostrate') + person.boostrate,
        people: people
      });
    }
  }
});
