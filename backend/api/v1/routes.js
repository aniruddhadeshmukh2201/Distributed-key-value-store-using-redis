import express from "express"
import {Node, Coordinator} from "./endpoints.js"
import node from './Node/index.js'
import coordinator from './Coordinator/index.js'

const router = express.Router()

router.use(Node.prefix, node)
router.use(Coordinator.prefix, coordinator)



export default router;