'use strict';

document.getElementById('thumbs').addEventListener('click', function (e) {
  const target = e.target;
  const link = target.closest('a');

  if (link) {
    const largeImg = document.getElementById('largeImg');
    const href = link.getAttribute('href');
    const title = link.getAttribute('title');

    largeImg.src = href;
    largeImg.alt = title;
  }
});
