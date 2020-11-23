document.querySelector("#slider").addEventListener(
  "wheel",
  (event) => {
    if (event.deltaY > 0) {
      event.target.scrollBy(160, 0);
    } else {
      event.target.scrollBy(-150, 0);
    }
  },
  { passive: true }
);
