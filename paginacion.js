document.getElementById('jsAnterior').addEventListener('click', function() {
  var paginacion = document.getElementById('paginacion');
  paginacion.value = parseInt(paginacion.value) - 1;
  paginarElementos(false);
});

document.getElementById('jsSiguiente').addEventListener('click', function() {
  var paginacion = document.getElementById('paginacion');
  paginacion.value = parseInt(paginacion.value) + 1;
  paginarElementos(true);
});

function paginarElementos(siguiente) {
  var filas = document.getElementById('contenedorCuerpoTabla').children;
  for (var i = 0; i < filas.length; i++) {
    filas[i].classList.add('d-none');
  }
  var tamanoElementos = document.querySelectorAll('.contenedorPerfil');
  var paginacion = parseInt(document.getElementById('paginacion').value);
  if (paginacion === 1) {
    document.getElementById('jsAnterior').classList.add('d-none');
  } else {
    document.getElementById('jsAnterior').classList.remove('d-none');
  }
  var cantidadParaMostrar = 10;
  var columnaUsuariosMostrados = paginacion * cantidadParaMostrar;
  var conteoElementosMostrados = 0;
  conteoElementosMostrados = parseInt(
    document.getElementById('conteoElementosMostrados').value
  );
  if (siguiente) {
    document.getElementById('anterior').value = conteoElementosMostrados;
  } else {
    conteoElementosMostrados = parseInt(
      document.getElementById('anterior').value
    );
    document.getElementById('conteoElementosMostrados').value = (
      conteoElementosMostrados
    );
  }
  for (
    var i = columnaUsuariosMostrados - 10;
    i < columnaUsuariosMostrados;
    i++
  ) {
    var elementosParaMostrar = 0;
    if (siguiente) {
      elementosParaMostrar = (
        conteoElementosMostrados + tamanoElementos[i].rowSpan
      );

      while (conteoElementosMostrados < elementosParaMostrar) {
        filas[conteoElementosMostrados].classList.remove('d-none');
        conteoElementosMostrados++;
      }
    } else {
      elementosParaMostrar = (
        conteoElementosMostrados - tamanoElementos[i].rowSpan
      );

      while (conteoElementosMostrados > elementosParaMostrar) {
        conteoElementosMostrados--;
        filas[conteoElementosMostrados].classList.remove('d-none');
      }
    }
  }
  if (siguiente) {
    document.getElementById('conteoElementosMostrados').value = (
      conteoElementosMostrados
    );
  } else {
    document.getElementById('anterior').value = conteoElementosMostrados;
  }
}

paginarElementos(true);
