'use strict';

const tree = document.querySelector('.tree');

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') return;
      const parentLi = e.target.closest('li');
      if (!parentLi) return;
    
    const list = parentLi.querySelector(':scope > ul');

      if (!list) return;
      list.hidden = !list.hidden;
  });
