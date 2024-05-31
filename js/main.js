const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (this.scrollY > 1) {
    console.log('покрутили вниз')
  } else {
    console.log('нет прокрутики')
  }
})