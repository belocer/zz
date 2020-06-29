window.addEventListener('load', () => {

  /* Анимация бегущей строки */
  let ticker = document.querySelector('.ticker')

  if (ticker) {
    // Общая ширина строки
    let width_ticker = ticker.children.length * ticker.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }


  /* Анимация бегущей строки */
  let ticker_violet = document.querySelector('.ticker_violet')

  if (ticker_violet) {
    // Общая ширина строки
    let width_ticker = ticker_violet.children.length * ticker_violet.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_violet.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_violet.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }

  /* Анимация бегущей строки */
  let ticker_green = document.querySelector('.ticker_green')

  if (ticker_green) {
    // Общая ширина строки
    let width_ticker = ticker_green.children.length * ticker_green.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_green.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_green.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }

  /* Анимация бегущей строки */
  let ticker_darkblue = document.querySelector('.ticker_darkblue')

  if (ticker_darkblue) {
    // Общая ширина строки
    let width_ticker = ticker_darkblue.children.length * ticker_darkblue.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_darkblue.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_darkblue.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }
})