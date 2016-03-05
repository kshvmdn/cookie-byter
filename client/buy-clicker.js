Template.buy.events({
  'click button': function (event) {
    var person = ppl[event.target.id];
    if (Session.get('score') >= person.price) {
      Session.set('score', Session.get('score') - person.price);
      Session.set('rate', Session.get('rate') * person.rate);
      person.numberOwned += 1;
    }
  }
})