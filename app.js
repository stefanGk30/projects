import pages from './data/data.js';

const container = document.querySelector('.container');

function setUI(pages) {
  container.innerHTML = pages
    .map((page) => {
      const { name, netlify, github, img, info } = page;
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
        <div class="info">
        ${info
          .map((item) => {
            return `<span class="info-icon">${item}</span>`;
          })
          .join('')}

        </div>
        <div class="btns">
          <a href="${github}" class="link-btn" target="_blank">
            <span><i class="fab fa-github-square"></i></span>
            see the code
          </a>
          <a href="${netlify}" class="link-btn" target="_blank">
            <span><i class="fas fa-globe"></i></span>
            see the project
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
