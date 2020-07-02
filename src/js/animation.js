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

  /* Анимация бегущей строки */
  let ticker_yellow = document.querySelector('.ticker_yellow')

  if (ticker_yellow) {
    // Общая ширина строки
    let width_ticker = ticker_yellow.children.length * ticker_yellow.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_yellow.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_yellow.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }

  /* Анимация бегущей строки */
  let ticker_orange = document.querySelector('.ticker_orange')

  if (ticker_orange) {
    // Общая ширина строки
    let width_ticker = ticker_orange.children.length * ticker_orange.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_orange.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_orange.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }

  let ticker_pink = document.querySelector('.ticker_pink')

  if (ticker_pink) {
    // Общая ширина строки
    let width_ticker = ticker_pink.children.length * ticker_pink.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_pink.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_pink.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }

  let ticker_blue = document.querySelector('.ticker_blue')

  if (ticker_blue) {
    // Общая ширина строки
    let width_ticker = ticker_blue.children.length * ticker_blue.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_blue.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_blue.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }

  let ticker_biruza = document.querySelector('.ticker_biruza')

  if (ticker_biruza) {
    // Общая ширина строки
    let width_ticker = ticker_biruza.children.length * ticker_biruza.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_biruza.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_biruza.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }

  let ticker_purple = document.querySelector('.ticker_purple')

  if (ticker_purple) {
    // Общая ширина строки
    let width_ticker = ticker_purple.children.length * ticker_purple.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_purple.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_purple.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }

  let ticker_limon = document.querySelector('.ticker_limon')

  if (ticker_limon) {
    // Общая ширина строки
    let width_ticker = ticker_limon.children.length * ticker_limon.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_limon.style.transform = 'translateX(-' + count + 'px)'
      count = count + 15
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_limon.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 40)
  }


  /* ticker smile */
  let ticker_smile = document.querySelector('.ticker-smile')

  if (ticker_smile) {
    // Общая ширина строки
    let width_ticker = ticker_smile.children.length * ticker_smile.children[0].offsetWidth

    let count = 0
    setInterval(() => {
      ticker_smile.style.transform = 'translateX(-' + count + 'px)'
      count = count + 5
      // Если строка закончилась, то сбрасываю сдвиг влево
      if (count > (width_ticker - document.body.clientWidth)) {
        count = 0
        ticker_smile.style.transform = 'translateX(-' + count + 'px)'
      }
    }, 45)
  }
})