function takeValue(x) {
	document.getElementById('inputwindow').value += x;
}

function clearInput(x) {
	document.getElementById('inputwindow').value = x;
}


function calculateResult() {
	let x = eval(document.getElementById('inputwindow').value);
	document.getElementById('inputwindow').value = x;
}



document.addEventListener("DOMContentLoaded", function () {





	/*CANVI DEL VALOR DELS ELEMENTS D'UN CODI HTML*/


	//Canvia el text del paràgraf amb el id especificat (Troba l'element amb l'id especificat)
	/*
	document.getElementById("paragraphid").innerHTML ="Ha canviat el text";
	*/

	//Recupera el text de tots els paràgrafs del document html
	/*
	let parrafos = document.getElementsByTagName("p");
	for(let i=0; i<parrafos.length; i++){
		console.log(parrafos[i].innerHTML);
	}
	*/

	//Canvia a un altre color el valor de tots els paràgrafs del document html
	/*
	let parrafos = document.getElementsByTagName("p");
	for(let i=0; i<parrafos.length; i++){
		console.log(parrafos[i].innerHTML);
		parrafos[i].style.color="green";
	}
	*/

	//Canvia a un altre color tots els elements amb la classe especificada
	/*
	let parrafos = document.getElementsByClassName("classparagraph");
	for(let i=0; i<parrafos.length; i++){
		console.log(parrafos[i].innerHTML);
		parrafos[i].style.color="blue";
	}
	*/



	/*AFEGIR I ELIMINAR ELEMENTS DINS D'UN DOCUMENT HTML*/
	//Afegir un nou paràgraf al document HTML (Al final)

	/*
	let para = document.createElement("p");
	para.style.color="yellow";
	let node = document.createTextNode("Nou Element Afegit");
	para.appendChild(node);

	let element = document.getElementById("midiv");
	element.appendChild(para);	//Afegeix element després de l'últim fill del pare
	*/


	//Afegir un nou paràgraf al document HTML (Al principi)
	/*
		let para = document.createElement("p");
		para.style.color="yellow";
		let node = document.createTextNode("Nou element 2 afegit.");
		para.appendChild(node);
	
		let element = document.getElementById("midiv");
		let child = document.getElementById("paragraphid");
		element.insertBefore(para, child);	//Inserta abans de l'element indicat
	*/


	//Eliminar un element del document HTML.
	/*
	let elmnt = document.getElementById("paragraphid");
	elmnt.remove();	//Elimina del document l'element indicat
	*/

	//Canviar un element existent per un de nou
	/*
	let para = document.createElement("p");
	para.style.color="turquoise";
	let node = document.createTextNode("Paràgraf amb text canviat");
	para.appendChild(node);

	let parent = document.getElementById("midiv");
	let child = document.getElementById("paragraphid");
	parent.replaceChild(para, child);
*/



	//Modificació del atributs d'un element mitjançant una funció JavaScript
	/*
		let elmnt = document.getElementById("ocell");
		elmnt.setAttribute("width", "100px");
	*/

	//Modificació del atributs d'un element mitjançant accés directe a la propietat de l'element
	/*
		let elmnt = document.getElementById("ocell");
		elmnt.width = 300;
	*/



	//ACCÉS A PROPIETATS MITJANÇANT PROPIETATS RELATIVES DE PARENTS.

	//Accés a elements mitjançant la propietat "parentNode" (pare)
	/*
	let elmnt = document.getElementById("paragraphid");
	console.log(elmnt.parentNode.id);
	console.log(elmnt.parentNode.parentNode.tagName);
	*/

	//Accés a elements mitjançant la propietat "childNodes" (fills)
	/*
	let elmnt = document.getElementById("midiv");
	console.log(elmnt.childNodes[1].textContent);
	console.log(elmnt.childNodes[3].textContent);
	console.log(elmnt.childNodes[5].textContent);
	console.log(elmnt.childNodes[7].textContent);
*/

	//Accés a elements mitjançant la propietat "fisrtChild" (fill)
	/*
	let elmnt = document.getElementById("paragraphid");
	console.log(elmnt.firstChild.nodeValue);
*/
	
	//Acces a elements mitjançant nextSibling i previousSibling
/*
	let elmnt = document.getElementsByTagName("p");
	console.log(elmnt[0].nextSibling.nextSibling.textContent);
	console.log(elmnt[3].previousSibling.previousSibling.textContent);
*/

});



/*
document.getElementById("clear").addEventListener("click", () => {
	for (var i = 1; i <= 10; i++) {
		
		clearInput(i.toString());
		console.log(document.getElementById('inputwindow').value);
		
		
		//this line is to watch the result in console , you can remove it later	
		
		sleep(2000);
		var container = document.getElementById("inputwindow");
		var content = container.innerHTML;
		container.innerHTML= content; 
		console.log("Refreshed");
	}
	clearInput("");
});
*/