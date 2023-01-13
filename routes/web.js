import express from "express";
import StudendCont from "../controllers/studentCont.js";

const router = express();

router.get('/', StudendCont.getAllDoc)
router.post('/', StudendCont.createDoc)
router.get('/edit/:id', StudendCont.editDoc)
router.post('/update/:id', StudendCont.updateDocById)
router.get('/delete/:id', StudendCont.deleteDocById)

export default router;