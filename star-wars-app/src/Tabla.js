function crearTabla(datosTabla) {
    var tabla = document.createElement('table');
    var cuerpoTabla = document.createElement('tbody');
  
    datosTabla.forEach(function(datosFilas) {
      var fila = document.createElement('tr');
  
      datosFilas.forEach(function(datosCeldas) {
        var celda = document.createElement('td');
        celda.appendChild(document.createTextNode(datosCeldas));
        fila.appendChild(celda);
      });
  
      cuerpoTabla.appendChild(fila);
    });
  
    tabla.appendChild(cuerpoTabla);
    document.body.appendChild(tabla);
  }
  <button onclick="crearTabla([['10001500', 'Benito', 'benito.com', 'C/Falsa123'], ['10047500', 'Dianita', 'dianita.com', 'C/Verdadera789']]);">Crear Tabla</button>