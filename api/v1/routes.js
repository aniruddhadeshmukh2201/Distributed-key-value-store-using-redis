import express from "express"
import moment from "moment"
import * as packageJson from "../../package.json"
import { deployParamName } from "../../helpers/constants.js"


import {Node, Coordinator} from "./endpoints.js"
import node from './Node/index.js'
import coordinator from './Coordinator/index.js'

const router = express.Router()

router.use(Node.prefix, nodes)
router.use(Coordinator.prefix, coordinator)



export default router;