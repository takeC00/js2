'use strict'


function reset(num){
	document.querySelector('input').value = nu;
	console.log(nu)
}

function add(nu){
	document.querySelector('input').value += nu
}

function calc(){
	const v = document.querySelector('input').value
	const f = new Function ('return + v')
	console.log(v);
	console.log (f);
	
}