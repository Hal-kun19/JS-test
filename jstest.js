function clickingButton() {
  msg.innerText = getTbox.value
}

let getTbox = document.getElementById('tbox')
let getMsg = document.getElemenyById('msg')
let checkButton = document.getElementById('button')

checkButton.addEventListener('click', clickingButton)
