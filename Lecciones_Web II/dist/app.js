"use strict";
//objeto cliente
const cliente = {
    ID: 1,
    Nombre: 'Hidemi Kida',
    Identificacion: '1315967388'
};
//objeto concepto
const concepto = {
    ID: 1,
    Descripcion: 'Descripción del concepto'
};
//objeto gasto
const gasto = {
    ID: 1,
    IDCliente: cliente.ID,
    IDConcepto: concepto.ID,
    Fecha: new Date('2024-04-30'), // Asegúrate de usar la fecha correcta
    Hora: '15:22', // Formato de 24 horas HH:mm
    ValorDelGasto: 100.00 // Asegúrate de usar el valor correcto
};
//Crear un arreglo de objetos basándose en la entidad transaccional con por lo menos 3 elementos
const gastos = [
    {
        ID: 1,
        IDCliente: 1,
        IDConcepto: 1,
        Fecha: new Date('2024-04-30T08:00:00Z'),
        Hora: '08:00',
        ValorDelGasto: 150.00
    },
    {
        ID: 2,
        IDCliente: 2,
        IDConcepto: 2,
        Fecha: new Date('2024-04-30T09:00:00Z'),
        Hora: '09:00',
        ValorDelGasto: 200.00
    },
    {
        ID: 3,
        IDCliente: 3,
        IDConcepto: 3,
        Fecha: new Date('2024-04-30T10:00:00Z'),
        Hora: '10:00',
        ValorDelGasto: 250.00
    }
];
