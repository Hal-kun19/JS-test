function clickingButton() {
  msg.innerText = tbox.value
}

let tbox = document.getElementById('tbox')
let msg = document.getElemenyById('msg')
let checkButton = document.getElementById('button')

checkButton.addEventListener('click', clickingButton)
