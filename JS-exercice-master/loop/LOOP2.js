window.onload = function onclick(){
	document.getElementById("demo1").addEventListener("click", function var1(){
		var nbr = 0;
		while(nbr < 10){
			alert(nbr);
			nbr++;
		}
	});
}

window.onload = function onclick2(){
	document.getElementById("demo2").addEventListener("click", function var2(){
		var NBR = 0;
		var NBR2 = 2;
		for(NBR = 0; NBR<20; NBR++){
				var NBR = NBR * NBR2;
				alert(NBR);
		}
	})
}

window.onload = function onclick3(){
	document.getElementById("demo3").addEventListener("click", function var3(){
		var num = 100;
		var num2 = 23;
		for(num = 100; num>=10; num--){
			var result = num * num2;
			alert(result);
		}
	})
}



window.onload = function onclick4(){
	document.getElementById("demo4").addEventListener("click", function var4(){
		var NUM = 1;
		while(NUM < 10){
			alert(NUM);
			NUM += NUM / 2;
		}
	})
}


window.onload = function onclick5(){
	document.getElementById("demo5").addEventListener("click", function var5(){
	var OK = 1;
		while(OK < 15){
			alert(OK);
			OK++;

			if(OK < 15){
				alert("on y arrive presque");
			} 
		}
})
}

window.onload = function onclick6(){
	document.getElementById("demo6").addEventListener("click", function var6(){
	var OK = 20;
		while(OK > 0){
			alert(OK + " c'est presque bon");
			OK--;
 			if (OK == 0) {
 				alert("!! BOOM !!");
 			}
		}
})
}

window.onload = function onclick7(){
	document.getElementById("demo7").addEventListener("click", function var7(){
	var jojo = 1;
	while(jojo < 100){
		alert(jojo);
		jojo += 15;

		if(jojo < 100){
			alert("On tien le bon bout")
		}
	}
})
}

window.onload = function onclick8(){
	document.getElementById("demo8").addEventListener("click", function var8(){
	var JOJO = 200;
		while(JOJO > 0){
			alert(JOJO + " Enfin !!!!");
			JOJO-= 12;
 			if (JOJO == 0) {
 				alert("!! BOOM !!");
 			}
		}
})
}