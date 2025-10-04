const overLap = document.getElementById('overlapping-element');
const container= document.getElementById('footer-container');
const topelm = document.getElementById('top-element');
const resizeObserver = new ResizeObserver(
  entries => {
    for ( let entry of entries){
      let height = overLap.offsetHeight;
      let width = entry.contentRect.width;
      console.log(width)
      let elmWidth = (a) => {
        if (a >= 768) {
           let roundWidth = Math.floor(a)
          overLap.style.width = `${roundWidth}px`;
        } else {
          let roundWidth = Math.floor(a)
          console.log(roundWidth)
          overLap.style.width = `${roundWidth}px`;
        }
      }
      elmWidth(width);
      overLap.style.top = `-${height/2}px`;
      let topelmMargin = (width) => {
        if (width <= 768){
          topelm.style.marginBottom= `${height/2+76}px`;
          container.style.paddingTop = `${height/2+112}px`;
        } else {
          topelm.style.marginBottom= `${height/2+100}px`;
          container.style.paddingTop = `${height/2+140}px`;
        }
      }
      topelmMargin(width);
    }
  }
);
resizeObserver.observe(container)