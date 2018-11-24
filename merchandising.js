  function cambiarImagen(articulo, tipoImagen){
    var imagen = articulo.getElementsByTagName("img");
    var n=tipoImagen.localeCompare('color');
    if(n==0){
      imagen[0].src=imagen[0].src.replace("Gris", "Color");
    }
    else{
      imagen[0].src=imagen[0].src.replace("Color", "Gris");
    }
      escribirLog(articulo,tipoImagen);
  }

  function seleccionarProducto(articulo, cajaCheck){
    if(cajaCheck.checked){
      articulo.className="seleccionado";
    }
    else{
      articulo.className="";
    }
    escribirLog(articulo,'seleccion');
  }

  function escribirLog(articulo, tipoMensaje){
  var registro = document.getElementById('log');
  if(tipoMensaje=='seleccion'){
    var entradas =articulo.getElementsByTagName("input");
      for(var i=0;i<entradas.length;i++){
        if(articulo.className=="seleccionado"&&entradas[i].type=="radio"&&entradas[i].checked){
          registro.value+="Se ha seleccionado "+ articulo.id +" en "+ entradas[i].value+"\n";
        }
        if(articulo.className==""&&entradas[i].type=="radio"&&entradas[i].checked) {
          registro.value+="Se ha borrado " + articulo.id +"\n";
        }
     }
   }
   if(tipoMensaje=='color'&&articulo.className=="seleccionado"){
    registro.value+="Se ha modificado a la version en color de " + articulo.id+"\n"
   }
   if(tipoMensaje=='gris'&&articulo.className=="seleccionado"){
    registro.value+="Se ha modificado a la version en blanco y negro de " + articulo.id+"\n"
   }
   if(tipoMensaje=='l'&&articulo.className=="seleccionado"){
       registro.value+="Se ha elegido el tamaño 13x18 de " + articulo.id+"\n";
   }
   if(tipoMensaje=='s'&&articulo.className=="seleccionado"){
       registro.value+="Se ha elegido el tamaño 10x15 de " + articulo.id+"\n"
   }
   actualizarCarrito();
  }

  function seleccionarProductoImagen(articulo, cajaCheck){
    if(cajaCheck.checked){
      cajaCheck.checked=false;

    }
    else{
      articulo.className="";
      cajaCheck.checked=true;
    }
    seleccionarProducto(articulo, cajaCheck);
  }

  function borrarLog(registro){
    registro.value="";
  }

  function comprobarTelefono(elemento){
    var ok=true;
    if(elemento.length!=9||elemento.isNaN)
      ok=false;
    else{
      var primerNumero=elemento.toString().charAt(0);
      if(ok&&primerNumero=="6"||primerNumero=="9"||primerNumero=="7")
          ok=true;
      else
          ok=false;
    }
      return ok;
  }

  function comprobarCadena(cadena, min, max){
    var ok=true;
    if(cadena.length>=min&&cadena.length<=max){
      ok=true;
    }
    else{
      ok=false;
    }
    return ok;
  }

  function comprobarNumero(numero, minimo, maximo){
    var ok=false;
    if(isNaN(numero)){
      ok=false
    }
    else{
      ok=comprobarCadena(numero, minimo, maximo);
    }
    return ok;
  }

  function comprobarFormatoArchivo(nombreArchivo, formato){
    var ok=false;
    if(nombreArchivo.endsWith(".jpg")){
      ok=true;
    }
    return ok;
    }

  function validarEmail(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  function comprobarCaptcha(obtenido, esperado){
    var ok=false;
    if(obtenido==esperado){
      ok=true;
    }
    return ok;
  }
