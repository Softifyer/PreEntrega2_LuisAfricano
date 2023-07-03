// Array de países y provincias (ejemplo)
var paises = {
    "Argentina": ["Buenos Aires", "Córdoba", "Santa Fe"],
    "Brasil": ["Sao Paulo", "Río de Janeiro", "Brasilia"],
    "Chile": ["Santiago", "Valparaíso", "Concepción"]
    // Añade más países y provincias aquí
};

// Obtener referencias a los elementos select
var paisSelect = document.getElementById("pais");
var provinciaSelect = document.getElementById("provincia");

// Cargar la lista de países al cargar la página
window.onload = function() {
    // Agregar las opciones de países
    for (var pais in paises) {
        var opcion = document.createElement("option");
        opcion.text = pais;
        opcion.value = pais;
        paisSelect.add(opcion);
    }

    // Escuchar el evento onchange del select de país
    paisSelect.addEventListener("change", cargarProvincias);
};

// Función para cargar las provincias según el país seleccionado
function cargarProvincias() {
    var pais = paisSelect.value;

    // Limpiar la lista de provincias
    provinciaSelect.innerHTML = '<option value="">Seleccione una provincia</option>';

    if (pais !== "") {
        var provincias = paises[pais];

        // Agregar las opciones de provincias
        for (var i = 0; i < provincias.length; i++) {
            var opcion = document.createElement("option");
            opcion.text = provincias[i];
            opcion.value = provincias[i];
            provinciaSelect.add(opcion);
        }
    }
}