const auth_clear_ms = 300000; // 30 minutes

var authenticated = { };

setInterval(function() {
  authenticated = { };
}, auth_clear_ms);

exports.hasAuth = function(id) {
  return authenticated[id] != undefined;
};

exports.add = function(id) {
  authenticated[id] = id;
};

exports.remove = function(id) {
  delete authenticated[id];
};

exports.clear = function() {
  authenticated = { };
};
