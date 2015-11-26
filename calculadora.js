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
var contactos = new Array();
var datos = new Array(4);

    contactos[0]='Primero';
    datos[0]='Domingo';
    datos[1]='Carrasco Bueno';
    datos[2]='603781212';
    datos[3]='24/12/1987';

function resumen()
{
    for (var i= 0;i < contactos.length ; i++) 
    {
        document.write('Registro '+contactos[i]);
        document.write('<br>');
        for (var a= 0;a < datos.length; a++) 
        {
            document.write(datos[a]);
            document.write('<br>');
        }
    }
}

function mostrarContacto(con)
{
        document.write('Registro '+contactos[con]);
        document.write('<br>');
        for (var a= 0;a < datos.length; a++) 
        {
            document.write(datos[a]);
            document.write('<br>');
        }
}

/*
function insertar()
{
    var longitud = contactos.length;
    var nuevo = new Array(4);

    nuevo[0] = getElementById contenodor nombre..
    nuevo[1] = getElementById contenedor formulario..
    nuevo[2] = getElementById
    nuevo[3] = getElementById

    contactos.push(nuevo);//lo metemos al final

    //mostramos el fin de la agenda
    document.getElementById('final')=.innerHTML= contactos.length;
}*/