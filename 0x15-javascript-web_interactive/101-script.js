#!/usr/bin/node
document.addEventListener('DOMContentLoaded', () => {
  const items = ['Item'];
  const myList = document.querySelector('.my_list');

  function render () {
    myList.innerHTML = '';
    items.forEach(itemText => {
      const li = document.createElement('li');
      li.textContent = itemText;
      myList.appendChild(li);
    });
  }

  document.querySelector('#add_item').addEventListener('click', () => {
    items.push('Item');
    render();
  });

  document.querySelector('#remove_item').addEventListener('click', () => {
    if (items.length > 0) {
      items.pop();
      render();
    }
  });

  document.querySelector('#clear_list').addEventListener('click', () => {
    items.length = 0;
    render();
  });

  render();
});
