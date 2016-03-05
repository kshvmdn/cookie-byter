Template.upgrade.helpers({
  upgrades: function () {
    upgrades = []
    _.forEach(Session.get('upgrades'), function(upgrade, key) {
      upgrade.disabled = upgrade.owned ? 'disabled' : '';
      upgrade.class_ = key;
      upgrades.push(upgrade);
    });
    return upgrades;
  }
});

Template.upgrade.events({
  'click button': function (event) {
    var upgrades = Session.get('upgrades');
    var upgrade = upgrades[event.target.id];
    if (Session.get('score') >= upgrade.price && upgrade.owned === false) {
      Session.setPersistent({
        score: Session.get('score') - upgrade.price,
        clickrate: Session.get('clickrate') + upgrade.clickrate,
      });
      upgrade.owned = true
      upgrades[event.target.id] = upgrade;
      Session.setPersistent('upgrades', upgrades);
    }
  }
});
