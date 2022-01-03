setInterval( function () {

	let redValue = document.querySelector('#redInput').value;
	let greenValue = document.querySelector('#greenInput').value;
	let blueValue = document.querySelector('#blueInput').value;

	document.querySelector("#circle").style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
	document.querySelector("#colorResult").innerHTML = `rgb(${redValue}, ${greenValue}, ${blueValue})`; //muda o texto de acordo com o valor dos inputs
}, 60)

window.onload = function () {
	
  const date = new Date ();
  const newDate = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
  var hora = date.getHours();
  var minuto = date.getMinutes();
  
  document.getElementById('date').innerHTML = newDate+' ' + hora +':' + minuto

}