Template.byte.helpers({
  score: function () {
    return Session.get('score');
  },
  binary: function () {
    return Session.get('score').toString(2);
  }
});

Template.byte.events({
  'click button': function () {
    Session.setPersistent('score', Session.get('score') + Session.get('clickrate'));
  }
});
