'use strict';

const thumbsContainer = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsContainer.addEventListener('click', function (e) {
  const link = e.target.closest('a');

  if (link) {
    e.preventDefault();

    const href = link.getAttribute('href');
    const title = link.getAttribute('title');

    largeImg.src = href;
    largeImg.alt = title;
  }
});
