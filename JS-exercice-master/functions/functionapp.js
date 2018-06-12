function mafonction(){
		return true;
}

function mafonction2(string){
	var mavar = "hello";
	
	alert(mavar);	
		return mavar;
}

function mafonction3(string){
	var chaine1 = "Hello";
	var chaine2 = "world";

	alert(chaine1 + chaine2);
		return chaine1 + chaine2;
}



function mafonction4(nbr, nbr2){
var nbr = prompt("choisi un nombre");
var nbr2 = prompt("choisi un deuxieme nombre");

	if(nbr<nbr2){
		
		alert("le premier nombre et plus petit");
	} 
	else if(nbr>nbr2){
		alert("le premier nombre et plus grand");
	}
	else if(nbr=nbr2){
		alert("les deux nombres sont identiques");
	}
}

function mafonction5(NBR, MOT){
	var NBR = 3;
	var MOT = "salut";

	alert(NBR + MOT);
	return NBR + MOT;
}

function mafonction6(NOM, PRENOM, AGE){
	var NOM = prompt("Entré votre nom");
	var PRENOM = prompt("Entré votre prenom");
	var AGE = prompt("Entré votre age");

	alert("Bonjour, " + NOM + " " + PRENOM + " ,tu as" + " " + AGE + " ans.");
}

function mafonction7(age, sexe){
	var age = prompt("Entrée votre age");
	var sexe = prompt("Entré votre sexe (homme ou femme)");

	if(age<18 && sexe == "homme"){
		alert("Vous êtes un homme et vous êtes mineur");
	}
	else if(age >= 18 && sexe == "homme"){
		alert("Vous êtes un homme et vous êtes majeur");
	}
	else if(age<18 && sexe == "femme"){
		alert("vous êtes une femme et vous êtes mineur");
	}
	else if(age >= 18 && sexe == "femme"){
		alert("Vous êtes une femme et vous êtes majeur");
	}
}

function mafonction8(NB1, NB2, NB3){
	var NB1 = prompt("Entré un nombre");
	var NB2 = prompt("Entré un deuxième nombre");
	var NB3 = prompt("Entré un troisième nombre");

		alert(Number(NB1) + Number(NB2) + Number(NB3));
}