export function scroll(direction) {
    if (direction === 'up') {
      window.scrollBy(0, -window.innerHeight);
    } else {
      window.scrollBy(0, window.innerHeight);
    }
  }
