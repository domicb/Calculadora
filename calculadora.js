/*********************************
 Autor: Carrasco Bueno Domingo
 Fecha creación: 24/10/2015
 Última modificación: 08/11/2015
 Versión: x.xx
***********************************/

//capuramos la entrada del teclado y la filtramos
function fil(e)
{
	var key=e.keycode || e.which;
	texto=String.fromCharCode(key);

	validos='0123456789'
	//añadimos especiales para poder usar back space y cursor
	especiales='8-37-39-46';
	//un boleano para filtrar los simbolos especiales
	simbolos=false;
	for(var i in especiales)
	{
		if(key==especiales[i])
		{//si encuentra alguno especial lo aceptamos
			simbolos=true;
		}

		if(validos.indexOf(texto)==-1 && ! simbolos)
		{//si no es una tecla valida denegamos
			return false;
		} 		
	}
}

//campuramos en la vista el value y lo retornamos al texarea "metafora de pantalla"
function setNumero(num)
{
	var anterior=fo.entrada.value;
	//cojemos el anterior y le concatenamos el siguiente
	document.getElementById('entrada').value=anterior+num;
}

//funcion que devolvera la raiz cuadrada
function raiz()
{
	var valor=fo.entrada.value;
	var re=Math.sqrt(valor);
	document.getElementById('entrada').value=re;
}

//eliminamos el ultimo valor
function eliminar()
{
    var anterior=document.fo.entrada.value;
    var nuevovalor=anterior.substring(0,anterior.length-1);
    document.getElementById('entrada').value=nuevovalor;
}

//dejamos el campo de entrada vacio
function limpiar()
{
	document.getElementById('entrada').value="";
}

//filtramos los signos introducidos para utilizar eval
function operacion(signo)
{
var anterior = document.fo.entrada.value;
if(anterior=="")
{//si está vacio lo dejamos tal cual
	document.fo.entrada.value="";
}
else
{//sino cojemos el ultimo valor y le sumamos el signo
	var anterior = document.fo.entrada.value;
	document.getElementById('entrada').value=anterior+signo;
	campo=document.fo.entrada.value;

	record = 0;
	igual = 1;
	var letraRecor;
	var b=0;
	var letra="";
	//ahora averiguamos cual es el signo introducido
	for (var i = 1; i < campo.length; i++) 
	{
		if(campo.charAt(i)=="+" || campo.charAt(i)=="-" || campo.charAt(i)=="*" || campo.charAt(i)=="/" )
		{
			igual=igual+1;
			//guardamos en letra el signo encontrado
			letra=campo.charAt(i);
		}
		else
		{//si no encuentra ningun signo

			if(igual>record)
			{
				record=igual;
				letraRecor=letra;
				igual=1;
			}
			b=i;//guardamos la posicion
		}
	}
	if(igual>record)
	{
		record=igual;
		letraRecor=letra;
	}

	if(record>2)
	{
		var anterior = campo;
		var nuevovalor = anterior.substring(0,anterior.length-1);
		document.getElementById('entrada').value=nuevovalor;
		record=0;
		b=0;
		igual=1;
		letra="";
		letraRecor="";
	}
	}

    mostrar();
}

//pasamos el valor al input de arriva y lo borramos de abajo
function mostrar()
{
    var ten = document.fo.entrada.value; //= document.fo.entrada.value;
    var mos = document.fo.arriva.value;
    document.fo.arriva.value=mos+ten;
    limpiar();
}

//limpia todo
function todo()
{
    document.getElementById('arriva').value="";
    document.getElementById('entrada').value="";
}
//operamos el contenido del texarea
function operar()
{
    var tiene = document.fo.arriva.value;
    var cuenta = tiene + document.fo.entrada.value;
	var resultado = eval(cuenta);
    todo();//limpiamos antes de mostrar el resultado
	document.fo.entrada.value=resultado;
}

//divide 1 entre el numero
function div()
{
	var resultado = 1;
	var numero = document.fo.entrada.value;
	res = resultado/numero;
   	document.fo.entrada.value=res;
}

function elevado()
{
    var operando = document.fo.entrada.value;
    var operador = operando*2;
    document.fo.entrada.value = eval(operador);
}

//cambiamos el signo
function cambia()
{
	var valor=document.fo.entrada.value;
	if(valor>0)
	{
		var menos="-";	
		var salida = menos+valor;
		document.fo.entrada.value=salida;
	}
	else
	{
		var salida1 = valor.substring(1,valor.length);
		document.fo.entrada.value=salida1;
	}
}

function porcentaje()
{
	var cantidad = document.fo.entrada.value;
	var por = cantidad / 100 ;
	var porce = por * cantidad;
	document.fo.entrada.value=por;
}




//            ****************         AGENDA          *********

//algunas variables
var agenda = new Array();
var contactos = new Array();

function resumen()
{
	for(var i = 0; i < agenda.length; i++) {
		// Creamos nodos de tipo Element 
	    var tr = document.createElement("tr"); 
	    var td = document.createElement("td"); 	
		var id = document.createTextNode(i + 1); // Crear nodo de tipo Text con el id

		td.appendChild(id); // Añadimos al td el id
		tr.appendChild(td); //Añadimos al tr el td

		for(var j = 0; j < 4; j++){ //Recorre cada Contacto
			
			var contacto = agenda[i];	
			var td = document.createElement("td"); 

			// Crear nodo de tipo Text 
			var contenido = document.createTextNode(contacto[j]); 

			// Añadir el nodo Text como hijo del nodo 	Element 
			td.appendChild(contenido); 

			tr.appendChild(td); 

			// Añadir el nodo Element como hijo de la pagina 
			document.getElementById('resumen').appendChild(tr);
		}
		
	}
}

function mostrarContacto()
{
	//recojemos el id a mostrar
	var pos = document.getElementById('con').value - 1; 

	if(pos >= 0 && pos < agenda.length){//existe la posición en el array

		document.getElementById('inicio').innerHTML = pos + 1;
		var contacto = new Array(4);
		contacto = agenda[pos];//recuperamos el contacto del array
		
		//Pasamos el contacto al formulario
		document.getElementById('nombre').value = contacto[0];
		document.getElementById('apellidos').value = contacto[1];
		document.getElementById('telefono').value = contacto[2];
		document.getElementById('nacimiento').value = contacto[3];
	}
	else{
		document.getElementById('con').value = "";
		alert("El contacto introducido no tiene una referencia válida");
	}	
}

function cargaPrimeros()
{
		contactos = new Array('Cristina', 'Nuñez Gil', '666333777', '11/09/1993');		
		guardar(contactos);
		contactos = new Array('Carmen', 'Alvarez Gallardo', '777333555', '13/02/1990');		
		guardar(contactos);
		contactos = new Array('Carlos', 'Carrasco Bueno', '666222146', '08/01/1986');
		guardar(contactos);
		contactos = new Array('Juan', 'Garcia Perez', '959313114', '01/08/1996');
		guardar(contactos);
		contactos = new Array('Pepito', 'Perez Lopez', '959387489', '27/09/1931');	
		guardar(contactos);
		contactos = new Array('Ignacio', 'Gutierrez Silva', '777333222', '22/11/1987');
		guardar(contactos);
		document.getElementById('inicio').innerHTML = 1;
		document.getElementById('fin').innerHTML = agenda.length;
		resumen();//mostramos los datos en la tabla
}

//guarda el contacto al final del array
function guardar(variable)
{
	agenda.push(variable);
}

function mostrarRegistro(cont)
{
	var pos = cont -1 ;//en el array es una posición menos
	var contacto = new Array(4);
	contacto = agenda[pos];//recuperamos el contacto del array
	
	//Pasamos el contacto al formulario
	document.getElementById('nombre').value = contacto[0];
	document.getElementById('apellidos').value = contacto[1];
	document.getElementById('telefono').value = contacto[2];
	document.getElementById('nacimiento').value = contacto[3];
}

function mas()
{
	var posi = document.getElementById('inicio').innerHTML + 1;

	if(posi <= agenda.length)
	{
		document.getElementById('inicio').innerHTML = posi;
		mostrarRegistro(posi);
	}
}

function menos()
{
	var pos = document.getElementById('inicio').innerHTML - 1;//posición anterior

	if(pos > 0){
		document.getElementById('inicio').innerHTML = pos;
		mostrarRegistro(pos);
	}
}

function vaciar()
{
	document.getElementById('nombre').value = "";
	document.getElementById('apellidos').value = "";
	document.getElementById('telefono').value = "";
	document.getElementById('nacimiento').value = "";
}

function nuevo()
{
	//hay que filtrar los datos
	Contacto = new Array(4);

	Contacto[0] = document.getElementById('nombre').value;
	Contacto[1] = document.getElementById('apellidos').value;
	Contacto[2] = document.getElementById('telefono').value;
	Contacto[3] = document.getElementById('nacimiento').value;
	
	agenda.push(Contacto);
	document.getElementById('fin').innerHTML = agenda.length;
	resumen();
}