import server  from 'express';
import { clienteRouter, conceptoRouter, gastoRouter } from './router';

const app = server();

app.use(server.json());
app.use(server.urlencoded({ extended: true }));

// Rutas para Cliente
app.use('/clientes', clienteRouter);

// Rutas para Concepto
app.use('/conceptos', conceptoRouter);

// Rutas para Gasto
app.use('/gastos', gastoRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});