Template.upgrade.helpers({
  upgrades: function () {
    upgrades = []
    _.forEach(Session.get('upgrades'), function(upgrade, key) {
      upgrade.disabled = upgrade.owned ? 'disabled' : '';
      upgrade.class_ = key;
      var p = upgrade.price;
      var factor, byteType;
      if (p >= 1099511627776) {
        factor = 1099511627776;
        byteType = 'TB';
      } else if (p >= 1073741824) {
        factor = 1073741824;
        byteType = 'GB';
      } else if (p >= 1048576) {
        factor = 1048576;
        byteType = 'MB';
      } else if (p >= 1024) {
        factor = 1024;
        byteType = 'KB';
      } else {
        factor = 1;
        byteType = 'B';
      }

      var n = (p / factor).toFixed(2);
      if (n.slice(-2) == '00')
        n = n.slice(0, -3);
      upgrade.priceText = n + ' ' + byteType;
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
