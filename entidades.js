const leer =require("prompt-sync")()
const Escribir =console
//Operacion aritmetica
class Entidades{
    operacionAritmetica(){
    let a,b,c
    let resultado;
	a= leer ("Digite el valor de a:");
	b= leer ("Digite el valor de b:");
	c=leer ("Digite el valor de c:");
	resultado= (-b + Math.sqrt (b**2) - 4 *a * c)/ (2 * a);
	Escribir.log ("el resultado es:", resultado);
	
    }
	operacionLog(){
    let a,b;
	let resultado;
	a= leer ("digite el valor de a:");
	b= leer ("digite el valor de b:");
	resultado = ((3 + 5*8) <3 && ((-6/3 *4) +2<2)) || (a>b);
	Escribir.log ("el resultado es:", resultado);
	}
	//Ejercicio: Intercambiar el valor de 2 variables
	intercambiarValor(){
    let a,b,aux;
    a= leer ("digite el valor de a:");
	b= leer ("digite el valor de b:");
	aux = a;
	a = b;
	b = aux;
	Escribir.log ("el nuevo valor de a es:",a);
	Escribir.log ("el nuevo valor de b es:",b);
	}

}
const entidades = new Entidades()
//entidades.operacionAritmetica()
//entidades.operacionLog()
//entidades.intercambiarValor()
