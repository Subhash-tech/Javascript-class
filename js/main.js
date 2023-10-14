console.log('DOM is ready')
console.log('Starting JS execution')

const counterContainer = document.getElementById('counter')
const upBtn = document.getElementById('counter-btn-up')
const downBtn = document.getElementById('counter-btn-down')
const resetBtn = document.getElementById('counter-btn-reset')
let counterValue = counterContainer.innerText

console.log({ counterValue: Number(counterValue) })
console.log({ counterContainer, upBtn, downBtn, resetBtn })

upBtn.onclick = function () {
  console.log('+')
  counterValue = Number(counterValue) + 1
  counterContainer.innerText = counterValue
}
console.log('onclick:upBtn', upBtn.onclick)

downBtn.onclick = function () {
  console.log('-')
  counterValue = Number(counterValue) - 1
  counterContainer.innerText = counterValue
}
console.log('onclick:downBtn', downBtn.onclick)

resetBtn.onclick = function () {
  console.log('reset')
  counterContainer.innerText = 0
}
console.log('onclick:resetBtn', downBtn.onclick)


console.log('Ending JS execution')