//vamos a ocupar parte de ceesar


const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
'x', 'y', 'z'];

//llave

let key ="";
let mess="";

//bienvenidos a interpretar codigo

$(document).ready(function(){
    //vamos hacer una funcion para poder cifrar con viggener
    // ci es el boton

    $('#ci').click(function(){

        /*para cifrar vamos a utilizar una funcion de modulo la cual es
        y = (x+z) mod27 */


        //vamos a traer los datos de la llave

        key = document.getElementById('llave').value;

        key = key.replace(/ /g,'');

        //tenemos que verificar la llave

        mess = document.getElementById('mess').value;

        mess = mess.replace(/ /g,'');

        let newMess = "";
        let keyCompleta = "";

        //para aplicar el algoritmo debemos crear una funcion que se encargue de revisar las condiciones del mismo

        if(revision(mess,key)){

            /* vamos primero por aplicar y obtener la posicion de la longitud del mensaje 
             y emparejarlo contra la llave */

            for(let i= 0; i < mess.length ; i++){

                keyCompleta += key.charAt((i%Number(key.length)));
            }
           

            //tengo que vol

            for(let i =0 ; i< mess.length; i++){

                let charr = mess.charAt(i);
                //debemos crear una funcion para obtener la posicion del caracter
                let posm = getPosicion(charr);

                //aplicacion a la llave

                charr= keyCompleta.charAt(i);

                //obtenemos la posicion 
                let posk = getPosicion(charr);

                //tenemos que ejecutar el cifrado

                let newValores = cifrado(posm,posk);

                newMess += abc[newValores];

            }
            //imprimir elemento

            document.getElementById('rs').innerHTML = "Cifrado: "+ newMess+ " "+ "Llave: "+ keyCompleta;
           
        } else{
                alert("No sirve la llave")
                
            }

    });

    $('#de').click(function(){
         /*para cifrar vamos a utilizar una funcion de modulo la cual es
        y = (x+z) mod27 */

        //vamos a traer los datos de la llave

        key = document.getElementById('llave').value;

        key = key.replace(/ /g,'');

        //tenemos que verificar la llave

        mess = document.getElementById('mess').value;

        mess = mess.replace(/ /g,'');

        let newMess = "";
        let keyCompleta = "";

        //para aplicar el algoritmo debemos crear una funcion que se encargue de revisar las condiciones del mismo

        if(revision(mess,key)){

            /* vamos primero por aplicar y obtener la posicion de la longitud del mensaje 
             y emparejarlo contra la llave */

            for(var i= 0; i < mess.length ; i++){

                keyCompleta += key.charAt((i%Number(key.length)));
            }
            alert(keyCompleta);

            //tengo que vol

            for(var i =0 ; i< mess.length; i++){

                let charr = mess.charAt(i);
                //debemos crear una funcion para obtener la posicion del caracter
                let posm = getPosicion(charr);

                //aplicacion a la llave

                charr= keyCompleta.charAt(i);

                //obtenemos la posicion 
                let posk = getPosicion(charr);

                //tenemos que ejecutar el cifrado

                let newValores = descifrar(posm,posk);

                newMess += abc[newValores];

            }
            //imprimir elemento

            document.getElementById('rs').innerHTML = "Descifrado: "+ newMess
           
        } else{
                alert("No sirve la llave")
                
            }

       

    })

    
})

// funcion de cifrado

function cifrado(posm,posk){
    //tengo que aplicar la formula
    let y = (posm + posk)%27
    return y
}

// funcion de descifrado o desifrar

function descifrar(posm,posk){

    let val = 0;

    if((posm-posk)>=0){

        val = (posm-posk)%27;

    }else{

        val =(posm-posk+27)%27;
    }
    return val;
}

//funcion de la posicion

function getPosicion(letra){
    let posicion = abc.indexOf(letra);
    return posicion;
}

//funcion de la revison

function revision(mess, desp){
    //primero hay que validar la entrada de los datos a partir de una expresion regular

    var expresion = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/

    var aceptado = true;

    //evaluar la expresion

    if(!expresion.test(mess)){
        alert("El texto que ingreso no ha sido aceptado, ingrese solo minusulas y evite numeros y simbolos");
        aceptado=false;
    }

    if(!expresion.test(desp)){
        alert("la clave ingresada es incorrecta,no cumple con las normas de solo minusculas y no usra numeros y/o simbolos");
        aceptado=false;
    }
    if(desp.length > mess.length){
        alert("la clave no puede ser mayor que el mensaje");
        aceptado= false;
    }
    return aceptado
}

