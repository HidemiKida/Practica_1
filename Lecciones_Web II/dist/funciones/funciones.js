"use strict";
function eliminarElementoPorID(arr, id) {
    const index = arr.findIndex((element) => element.ID === id);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}
const idAEliminar = 2; // ID del elemento a eliminar
const gastosActualizados = eliminarElementoPorID(gastos, idAEliminar);
