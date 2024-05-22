import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();

router.get('/conceptos', async (req, res) => {
    try {
      const conceptos = await prisma.concepto.findMany();
      res.json(conceptos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Crear un nuevo concepto
  router.post('/conceptos', async (req, res) => {
    const { descripcion } = req.body;
    try {
      const concepto = await prisma.concepto.create({
        data: {
          descripcion,
        },
      });
      res.json(concepto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Obtener un concepto por ID
  router.get('/conceptos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const concepto = await prisma.concepto.findUnique({
        where: { id: parseInt(id) },
      });
      if (concepto) {
        res.json(concepto);
      } else {
        res.status(404).json({ error: 'Concepto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Actualizar un concepto por ID
  router.put('/conceptos/:id', async (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    try {
      const concepto = await prisma.concepto.update({
        where: { id: parseInt(id) },
        data: {
          descripcion,
        },
      });
      res.json(concepto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  router.delete('/conceptos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const concepto = await prisma.concepto.update({
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