'use strict';

const spans = document.querySelectorall('span');

spans.forEach((span) => {
  span.addEventListner('click', () => {
    const ul = span.nextElementSibling;

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  });
});
