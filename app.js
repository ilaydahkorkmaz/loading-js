const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(bluring, 30)

function bluring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }
  //console.log(load)

  // 'loadText' elementinin içeriği 'load' değişkeninin yüzde değerine ayarlanıyor.
  loadText.innerText = `${load}%`
  // 'loadText' elementinin opaklığı, 'load' değişkeninin yüzde değerine göre ayarlanıyor.
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
   // 'bg' elementinin arka planına uygulanan blur efekti, 'load' değişkeninin yüzde değerine göre ayarlanıyor.
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
// Verilen aralıklarda bir değeri başka bir aralığa dönüştüren 'scale' fonksiyonu tanımlanıyor.
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}