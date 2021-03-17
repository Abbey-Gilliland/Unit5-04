document.getElementById('change-image').addEventListener('click', image)
document.getElementById('change-text').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('bg').addEventListener('click', backgroundcolor)
// This code above me explains what each function will be named. Each button id has it's own function.
function image () {
  document.getElementById('budgies').src = 'images/PaintAndArt.jpg'
}
// This code above me changes the picture of budgies into a picture of a paint palette.
function text () {
  document.getElementById('text').innerHTML = 'What a nice photo!'
}
// This code above me changes the text by changing the innerHTML.
function hide () {
  document.getElementById('text').style.display = 'none'
}
// This code above me hides the text if it hasn't already been hidden.
function show () {
  document.getElementById('text').style.display = 'block'
}
// This code above shows the text it is hidden and gives it its own line.
function backgroundcolor () {
  document.body.style.backgroundColor = 'mediumpurple'
}
// This code above me changes the color to medium purple.
