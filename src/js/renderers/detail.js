module.exports = function DetailView (view, data) {
  var self;

  self = {};

  self.render = function () {
    var specs;
    view.querySelector('h1').innerHTML = data.name;
    view.querySelector('section[role=note] p').innerHTML = data.description;
    specs = view.querySelector('section[role=definition]');

    data.specs.forEach(function (spec) {
      var li = document.createElement('li');
      li.innerHTML = spec;
      specs.querySelector('ul').appendChild(li);
    });

    return view;
  };

  return self;
};
