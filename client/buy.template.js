Template.buy.events({
  'click button': function (event) {
    var person = Session.get('people')[event.target.id];
    if (Session.get('score') >= person.price) {
      Session.set('score', Session.get('score') - person.price);
      Session.set('boostrate', Session.get('boostrate') + person.boostrate);
      person.numberOwned += 1;
    }
  }
});
