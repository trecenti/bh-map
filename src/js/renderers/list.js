function addHighlighListeners(link, svg) {
  link.addEventListener('mouseover', function () {
    svg.classList.add('highlight');
  });

  link.addEventListener('mouseleave', function () {
    svg.classList.remove('highlight');
  });

  svg.addEventListener('mouseover', function () {
    link.classList.add('highlight');
    svg.classList.add('highlight');
  });

  svg.addEventListener('mouseleave', function () {
    link.classList.remove('highlight');
    svg.classList.remove('highlight');
  });
}

module.exports = function ListView (id, items) {
  var self, ul;

  self = {};
  ul = document.getElementById(id);

  if (!ul) {
    throw new Error('no list element to render');
  }

  if (!items) {
    throw new Error('no items to render into list');
  }

  self.render = function () {
    items.forEach(function (item) {
      var li, a, svg;

      li = document.createElement('li');
      a = document.createElement('a');
      svg = document.getElementById(item.id);

      a.href = '#' + item.id;
      a.innerHTML = item.name;
      li.appendChild(a);
      ul.appendChild(li);
      svg.classList.add(id);

      addHighlighListeners(a, svg);
    });
  };

  return self;
};

