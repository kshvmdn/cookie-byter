Template.stats.helpers({
  totalClicks: function () {
    return Session.get('totalClicks');
  },
  totalBytes: function () {
    return Session.get('totalBytes');
  },
  minSpent: function () {
    return (Session.get('time') / 60).toFixed(2);
  },
  avgScorePerMin: function () {
    return (Session.get('score') / (Session.get('time') / 60)).toFixed(2);
  },
  avgClickPerMin: function () {
    return (Session.get('totalClicks') / (Session.get('time') / 60)).toFixed(2);
  }
});
