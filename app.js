const overLap = document.getElementById('overlapping-element');
const container = document.getElementById('footer-container');
const topelm = document.getElementById('top-element');

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {

    let height = overLap.getBoundingClientRect().height;
    let width = entry.contentRect.width;

    let roundWidth = Math.floor(width);
    overLap.style.width = `${roundWidth}px`;

    overLap.style.top = `-${height / 2}px`;

    if (width <= 768) {
      topelm.style.marginBottom = `${height / 2 + 76}px`;
      container.style.paddingTop = `${height / 2 + 112}px`;
    } else {
      topelm.style.marginBottom = `${height / 2 + 100}px`;
      container.style.paddingTop = `${height / 2 + 140}px`;
    }
  }
});

window.addEventListener("load", () => {
  resizeObserver.observe(container);
});
