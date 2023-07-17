 * Completa la función 'henryParty' a continuación.
 *
 * La función debe retornar una QUEUE.
 * La función recibe un ARREGLO DE OBJETOS por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function henryParty(arr) {
    // Tu código aquí
    let validos = new Queue();
    
    for(let i=0; i<arr.length;i++){
        if(arr[i].ticket=='VIP' && arr[i].estado=='Conocido'){
            validos.enqueue(arr[i]);
        }
    }
    if(validos.size()>0){
        return validos;
    }
    else{
        return false;
    }
    
}


=======================================================================
/*
 * Completa el método 'prepararMenu' a continuación.
 *
 * La función debe retornar un OBJETO.
 * La función recibe por parámetro:
 *  - un ARREGLO DE STRINGS 'tragos'.
 *  - un ARREGLO DE ENTEROS 'tiempos'.
 *  - un NÚMERO 'tiempoLimite'.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function prepararMenu(tragos, tiempos, tiempoLimite) {
    // Tu código aquí
    let _tragos = new Stack();
    let _tiempos = new Stack();

for(let i=tragos.length;i>=0;i--){
    if(tiempos[i]<=tiempoLimite){
        _tragos.push(tragos[i]);
        _tiempos.push(tiempos[i]);
    }
}
return {
    tragos: _tragos, 
    tiempos: _tiempos
}
}
============================================================
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Completa la función 'pelisEstrenos' a continuación.
 *
 * La función 'pelisEstrenos' debe retornar una FUNCIÓN. Ésta, a su vez, recibe un ARREGLO DE STRINGS por parámetro, y retorna un ARREGLO DE OBJETOS ó un STRING.
 * La función 'pelisEstrenos' recibe un ARREGLO DE OBJETOS 'listaDePeliculas' por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function pelisEstrenos(listaDePeliculas) {
    // Tu código aquí
    
    return function(estrenos) {
    var peliculasEncontradas = 0;

    for (var i = 0; i < estrenos.length; i++) {
      var nombreEstreno = estrenos[i].toLowerCase();

      for (var j = 0; j < listaDePeliculas.length; j++) {
        var nombrePelicula = listaDePeliculas[j].nombre.toLowerCase();

        if (nombreEstreno === nombrePelicula) {
          listaDePeliculas[j].estreno = true;
          peliculasEncontradas++;
          break;
        }
      }
    }

    if (peliculasEncontradas === estrenos.length) {
      return listaDePeliculas;
    } else {
      return "No se encontro alguna de esas peliculas en nuestro catalogo";
    }
  };

}

==============================================================

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let length;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    length = inputString.length;

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Completa la función 'encontrarTaquilleras' a continuación.
 *
 * La función deberá retornar un ARREGLO DE OBJETOS ó un STRING.
 * La función recibe un ARREGLO DE OBJETOS 'cartelera' por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 *
 * TIP: Puedes agregar default parameters a la función.
 */

function encontrarTaquilleras(cartelera) {
    //Tu código aquí:

if (cartelera.length === 0) {
    return "No se encontraron películas taquilleras";
  }

  if (cartelera.length === 1) {
    if (cartelera[0].taquillera) {
      return cartelera;
    } else {
       return "No se encontraron películas taquilleras";
    }
  }

  const primeraPelicula = cartelera[0];

  if (primeraPelicula.taquillera) {
    const peliculasRestantes = encontrarTaquilleras(cartelera.slice(1));
    return [primeraPelicula, ...peliculasRestantes];
  } else {
    return encontrarTaquilleras(cartelera.slice(1));
  }

}


================================================================================

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let length;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    length = inputString.length;

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Completa la función 'atenderClientes' a continuación.
 *
 * La función debe retornar un OBJETO.
 * La función recibe un OBJETO 'clientes' por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 *
 * TIP: Puedes agregar default parameters a la función.
 */

function atenderClientes(clientes) {
    // Tu código aquí:

  const cliente = Object.keys(clientes);
  
  cliente.forEach((cl) => {
    delete clientes[cl];
  });
  
  if (Object.keys(clientes).length === 0) {
    return clientes;
  }
 
  return atenderClientes(clientes);


}

=======================================================

function ordenarRopa(prendas) {
    // Tu código aquí:
  const largo = prendas.length;
  for (let i = 0; i < largo - 1; i++) {
    for (let j = 0; j < largo - i - 1; j++) {
      if (prendas[j].precio < prendas[j + 1].precio) {
        
       var temporal = prendas[j]
        prendas[j] = prendas[j+1];
        prendas[j+1] = temporal;
        
      }
    }
  }
  return prendas;

}

=================================================================
LinkedList.prototype.encontrarPeliculas = function (estanteria) {
    // Tu código aquí:
    
const encontradas = new LinkedList();
    let current = this.head;

    while (current) {
      if (current.value === estanteria) {
        encontradas.add(current.value);
      }
      current = current.next;
    }

    if (!encontradas.head) {
      return "No tenemos peliculas de la estanteria indicada";
    }

    return encontradas;
  
  }
  =================================================================
  





