import pages from './data/data.js';

const container = document.querySelector('.container');

function setUI(pages) {
  container.innerHTML = pages
    .map((page) => {
      const { name, netlify, github, img } = page;
      return `
         <div class="single-item">
        <h3 class="single-title">${name}</h3>
        <a href="${netlify}" target="_blank">
          <img
            src="${img}"
            alt="${name}-preview-img"
            class="proj-img"
          />
        </a>

        <div class="btns">
          <a href="${github}" class="link-btn" target="_blank">
            <span><i class="fab fa-github-square"></i></span>
            code
          </a>
          <a href="${netlify}" class="link-btn" target="_blank">
            <span><i class="fas fa-globe"></i></span>
            live project
          </a>
        </div>
      </div>
    `;
    })
    .join('');
}

window.addEventListener('DOMContentLoaded', () => {
  setUI(pages);
});
