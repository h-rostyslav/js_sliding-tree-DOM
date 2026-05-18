'use strict';

const tree = document.querySelector('.tree');

if (tree) {
  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const parentLi = e.target.closest('li');
      const list = parentLi ? parentLi.querySelector('ul') : null ;

      if (list) {
        if (list.style.display === 'none') {
          list.style.display = '';
        } else {
          list.style.display = 'none';
        }
      }
    }
  });
}
