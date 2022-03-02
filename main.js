'use strict'

//ディスプレイ更新
function update(num){
	document.querySelector('input').value = num;
	//演算子のクリック無効を解除
	$('#calbtn').css({
		"pointer-events": "",
		"background-color": ""
	})	
}

//表示の数字の右側に数字足す
function add(num){
	if(document.querySelector('input').value==0){
		update('');
	}
	document.querySelector('input').value += num
	//演算子のクリック無効を解除
	$('#calbtn').css({
		"pointer-events": "",
		"background-color": ""
	})
	
	//最後の文字が演算子の場合演算子をクリックできないようにする
	let ope = document.querySelector('input').value.slice(-1);
	console.log(ope);
	if(ope=='+'||'-'||'*'||'/'){
		$('#calbtn').css({
			"pointer-events": "none",
			"background-color": "darkgrey"
		})
	}
}
//0を最初に押せなくする
function add0(num){
	if(document.querySelector('input').value!=0){
		document.querySelector('input').value += num
	}
}


	

//計算する
function calc(){
	const v = document.querySelector( 'input' ).value
	const f = new Function( 'return ' + v )
	console.log('V='+v)
	console.log('F='+f)

	//文字列を計算
  update( f().toString() )
}