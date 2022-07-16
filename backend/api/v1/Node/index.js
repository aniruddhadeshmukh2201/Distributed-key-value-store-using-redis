import express from 'express';
import {Node} from '../endpoints.js';
import NodeController from './Node.controller.js';
const router=express.Router();

router.get(
Node.get,
NodeController.get
)

router.post(
  Node.set,
  NodeController.set
)

export default router;