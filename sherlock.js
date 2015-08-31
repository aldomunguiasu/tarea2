//Input Example

//_INPUT = "2\n3 9\n17 25";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/
_INPUT = "6\n3 10\n1 25\n0 16\n1 8\n2 50\n1 8";  //prueba random

//expected Output
/*
2

*/
//----- Start your code here -------
div = _INPUT.split('\n');
for(i=1;i<div.length;i++) //for contando pares de grupos
{
	valor = div[i].split(" "); //separa el par de numeros en otro array
	cont_sqrt(parseInt(valor[0]), parseInt(valor[1]));

}

function cont_sqrt(a, b){
	res_positivos=0;  //reinicia los numeros que son cuadrados perfectos
	for(a;a<=b;a++)
	{
		raiz=Math.sqrt(a); //saca la raiz del numero en turno
		if(raiz % 1 == 0) //si el residuo del numero es 0 es cuadrado perfecto
		{  
			res_positivos++;
		}	
	}
	console.log(res_positivos); //imprime
}


