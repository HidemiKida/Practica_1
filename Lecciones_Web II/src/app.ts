import { eliminarElementoPorID } from './funciones/funciones';
import { gastos } from './funciones/objetos';


console.log(gastos);
// Ejemplo de uso:

const idAEliminar = 2; // ID del elemento a eliminar
eliminarElementoPorID(gastos, idAEliminar, (elementoEliminado) => {
    if (elementoEliminado) {
        console.log('Elemento eliminado:', elementoEliminado);
    } else {
        console.log('Elemento no encontrado.');
    }
});
console.log('Gastos actualizados:', gastos);
import { fetchCities } from './funciones/funciones';
fetchCities('Tokyo')
    .then(cities => {
        console.log('Ciudades obtenidas:', cities);
    })
    .catch(error => {
        console.error('Se produjo un error:', error);
    });