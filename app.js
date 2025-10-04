const overLap = document.getElementById('overlapping-element');
const container = document.getElementById('footer-container');
const topelm = document.getElementById('top-element');

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {

    let height = overLap.getBoundingClientRect().height;
    let width = entry.contentRect.width;

    let roundWidth = Math.floor(width);
    overLap.style.width = `${roundWidth}px`;

    let elementHeightValue = height / 2;

    overLap.style.top = `-${elementHeightValue}px`;

    let smMargin = (elementHeightValue + 76) / 16;
    let mdMargin = (elementHeightValue + 100) / 16;
    
    let smPadding = (elementHeightValue + 112) / 16;
    let mdPadding = (elementHeightValue + 140) / 16;

    if (width <= 768) {
      topelm.style.marginBottom = `${smMargin}rem`;
      container.style.paddingTop = `${smPadding}rem`;
    } else {
      topelm.style.marginBottom = `${mdMargin}rem`;
      container.style.paddingTop = `${mdPadding}rem`;
    }
  }
});

window.addEventListener("load", () => {
  resizeObserver.observe(container);
});

