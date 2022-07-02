import express from 'express';
import {Coordinator} from './routes.js.js';
import CoordinatorController from './Coordinator.controller.js';
const router=express.Router();

router.get(
Coordinator.get,
CoordinatorController.get
)

router.post(
  Coordinator.set,
  CoordinatorController.set
)

export default router;