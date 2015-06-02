var ListRenderer = require('../../src/js/renderers/list');

describe('list renderer', function () {
  var renderer, li, firstElement, secondElement;

  beforeEach(function () {
    li = document.createElement('li');
    firstElement = document.createElement('div');
    secondElement = document.createElement('div');
    firstElement.id = 'first-item-id';
    secondElement.id = 'second-item-id';
    li.id = 'list-id';
    document.querySelector('body').appendChild(li);
    document.querySelector('body').appendChild(firstElement);
    document.querySelector('body').appendChild(secondElement);
  });

  afterEach(function () {
    document.querySelector('body').removeChild(li);
    document.querySelector('body').removeChild(firstElement);
    document.querySelector('body').removeChild(secondElement);
  })

  it('throws if no element id is passed', function () {
    function creation() {
      renderer = new ListRenderer();
    }

    expect(creation).toThrow(new Error('no list element to render'));
  });

  it('throws if no data is passed', function () {
    function creation() {
      renderer = new ListRenderer('list-id');
    }

    expect(creation).toThrow(new Error('no items to render into list'));
  });

  it('renders the list', function () {
    renderer = new ListRenderer('list-id', [
      { id: 'first-item-id', name: 'First' },
      { id: 'second-item-id', name:'Second'}
    ]);

    renderer.render();

    var list = document.getElementById('list-id');
    expect(list.childNodes.length).toEqual(2);
    expect(list.querySelector('li:first-child a').innerHTML).toEqual('First');
    expect(list.querySelector('li:first-child a')['href']).toContain('#first-item-id');
    expect(list.querySelector('li:last-child a').innerHTML).toEqual('Second');
    expect(list.querySelector('li:last-child a')['href']).toContain('#second-item-id');
  });
});
