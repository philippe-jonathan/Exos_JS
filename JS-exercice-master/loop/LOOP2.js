function var1(){
	var nbr = 0;
		while(nbr < 10){
			alert(nbr);
			nbr++;
		}
}



function var2(){
	var NBR = 0;
	var NBR2 = 2;
		for(NBR = 0; NBR<20; NBR++){
			var NBR = NBR * NBR2;
			alert(NBR);
		}
}



function var3(){
	var num = 100;
	var num2 = 23;
		for(num = 100; num>=10; num--){
			var result = num * num2;
			alert(result);
		}
}



function var4(){
	var NUM = 1;
	while(NUM < 10){
		alert(NUM);
		NUM += NUM / 2;
	}
}



function var5(){
	var OK = 1;
		while(OK < 15){
			alert(OK);
			OK++;

			if(OK < 15){
				alert("on y arrive presque");
			} 
		}
}



function var6(){
	var OK = 20;
		while(OK > 0){
			alert(OK + " c'est presque bon");
			OK--;
 			if (OK == 0) {
 				alert("!! BOOM !!");
 			}
		}
}



function var7(){
	var jojo = 1;
	while(jojo < 100){
		alert(jojo);
		jojo += 15;

		if(jojo < 100){
			alert("On tien le bon bout")
		}
	}
}



function var8(){
	var JOJO = 200;
		while(JOJO > 0){
			alert(JOJO + " Enfin !!!!");
			JOJO-= 12;
 			if (JOJO == 0) {
 				alert("!! BOOM !!");
 			}
		}
}