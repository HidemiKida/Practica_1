import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();

router.get('/gastos', async (req, res) => {
    try {
      const gastos = await prisma.gasto.findMany({
        include: {
          cliente: true,
          concepto: true,
        },
      });
      res.json(gastos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Crear un nuevo gasto
  router.post('/gastos', async (req, res) => {
    const { clienteId, conceptoId, fecha, hora, valorgasto } = req.body;
    try {
      const gasto = await prisma.gasto.create({
        data: {
          clienteId,
          conceptoId,
          fecha: new Date(fecha),
          hora,
          valorgasto,
        },
      });
      res.json(gasto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Obtener un gasto por ID
  router.get('/gastos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const gasto = await prisma.gasto.findUnique({
        where: { id: parseInt(id) },
        include: {
          cliente: true,
          concepto: true,
        },
      });
      if (gasto) {
        res.json(gasto);
      } else {
        res.status(404).json({ error: 'Gasto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Actualizar un gasto por ID
  router.put('/gastos/:id', async (req, res) => {
    const { id } = req.params;
    const { clienteId, conceptoId, fecha, hora, valorgasto, estado } = req.body;
    try {
      const gasto = await prisma.gasto.update({
        where: { id: parseInt(id) },
        data: {
          clienteId,
          conceptoId,
          fecha: new Date(fecha),
          hora,
          valorgasto,
          estado,
        },
      });
      res.json(gasto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  router.delete('/gastos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const gasto = await prisma.gasto.update({
        where: { id: parseInt(id) },
        data: {
          estado: 'Inactivo',
        },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  export default router;