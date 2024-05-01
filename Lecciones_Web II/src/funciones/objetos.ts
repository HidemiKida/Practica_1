//objeto cliente
const cliente: ICliente = {
    ID: 1,
    Nombre: 'Hidemi Kida',
    Identificacion: '1315967388'
};
//objeto concepto
const concepto: IConcepto = {
    ID: 1,
    Descripcion: 'Descripción del concepto'
};
//objeto gasto
const gasto: IGasto = {
    ID: 1,
    IDCliente: cliente.ID,
    IDConcepto: concepto.ID,
    Fecha: new Date('2024-04-30'), // Asegúrate de usar la fecha correcta
    Hora: '15:22', // Formato de 24 horas HH:mm
    ValorDelGasto: 100.00 // Asegúrate de usar el valor correcto
};
//interfaces de cada objeto
interface ICliente {
    ID: number;
    Nombre: string;
    Identificacion: string;
}

interface IConcepto {
    ID: number;
    Descripcion: string;
}

export interface IGasto {
    ID: number;
    IDCliente: number;
    IDConcepto: number;
    Fecha: Date;
    Hora: string;
    ValorDelGasto: number;
}
//Crear un arreglo de objetos basándose en la entidad transaccional con por lo menos 3 elementos
export const gastos: IGasto[] = [
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
export interface ICity {
    id: number;
    wikiDataId: string;
    type: string;
    city: string;
    name: string;
    country: string;
    countryCode: string;
    region: string;
    regionCode: string;
    latitude: number;
    longitude: number;
}