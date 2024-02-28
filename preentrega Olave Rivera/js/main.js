function calcularIVA(monto, porcentaje) {
    return monto * (porcentaje / 100);
}

function calcularPrecioConIVA(monto, porcentaje){
    return monto + calcularIVA(monto, porcentaje)
}

let continuar = true;

while (continuar){

    let montoSinIVA = parseFloat(prompt("Ingrese el monto sin impuestos"));
    let porcentajeIVA = parseFloat(prompt("Ingrese el porcentaje de IVA"));
    
    if (isNaN(montoSinIVA) || isNaN(porcentajeIVA)){
        alert("Ingrese por favor números válidos.");
    } else {

        const montoConIVA = calcularPrecioConIVA(montoSinIVA, porcentajeIVA);
        alert("Monto sin IVA: $" + montoSinIVA +
            "\nPorcentaje de IVA: " + porcentajeIVA + "%" +
            "\nMonto con IVA: $" + montoConIVA);
    }
    const respuesta = prompt("¿Desea calcular el IVA para otro monto? (s/n)").toLowerCase();
    if (respuesta !== "s") {
        continuar = false;
    }
    }