import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();

router.get('/clientes', async (req, res) => {
    try {
      const clientes = await prisma.cliente.findMany();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Crear un nuevo cliente
router.post('/clientes', async (req, res) => {
    const { nombre, identificacion } = req.body;
    try {
      const cliente = await prisma.cliente.create({
        data: {
          nombre,
          identificacion,
        },
      });
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Obtener un cliente por ID
router.get('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const cliente = await prisma.cliente.findUnique({
        where: { id: parseInt(id) },
      });
      if (cliente) {
        res.json(cliente);
      } else {
        res.status(404).json({ error: 'Cliente no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Actualizar un cliente por ID
router.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, identificacion, estado } = req.body;
    try {
      const cliente = await prisma.cliente.update({
        where: { id: parseInt(id) },
        data: {
          nombre,
          identificacion,
          estado,
        },
      });
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  router.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const cliente = await prisma.cliente.update({
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