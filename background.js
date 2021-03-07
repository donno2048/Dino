window.addEventListener('load', function () {
  var script = document.createElement('script')
  script.appendChild(document.createTextNode("window['Runner'].prototype.gameOver=function(){}"))
  document.body.appendChild(script)
})
