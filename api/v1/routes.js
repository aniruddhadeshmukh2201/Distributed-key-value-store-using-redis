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


router.get(`/health`, (req, res) => {
  const deployment = req.app.get(deployParamName);
  res.json({
    name: packageJson.name,
    description: packageJson.description,
    version: packageJson.version,
    timestamp: moment().unix(),
    deployment
  });
});


export default router;