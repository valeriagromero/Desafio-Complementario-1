let entrada =  prompt("SELECCIONAR DECADA DE 1950 A 1980");
while (entrada != 'esc') {
    switch (entrada) {
        case "1950":
            alert("No puede solicitar ciudadania Italiana");
            break;
        case "1960":
            alert("Puede solicitar ciudadania Italiana por via judicial");
            break;
        case "1970":
            alert("Puede solicitar ciudadania Italiana por via judicial");
            break;
        case "1980":
            alert("Puede solicitar ciudadania Italiana contactenos");
            break;
        default:
            alert("La decada seleccionada no pertenece al parametro");
            break;
    }
    entrada = prompt("SELECCIONAR DECADA DE 1950 A 1980");
}