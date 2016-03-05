Template.byte.helpers({
  score: function () {
    return Session.get('score');
  }
});

Template.byte.events({
  'click button': function () {
    Session.setPersistent('score', Session.get('score') + Session.get('clickrate'));
  }
});
