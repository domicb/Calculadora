//podriamos crear una clase agenda aunque solo tendremos una

function mostrar()
{
    var contactos = new Array(99);
    var datos = new Array(4);

    contactos[0]='Primer registro';
    datos[0]='nombre';
    datos[1]='apellidos';
    datos[2]='telefono';
    datos[3]='fecha';

    for (var i = contactos.length ; i++) 
    {
         document.write(contactos[i]);
        for (var a = datos.length; a++) 
        {
            document.write(datos[a]);
        }
    }
}