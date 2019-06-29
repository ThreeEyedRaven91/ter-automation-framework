import express from "express";
import TestCaseController from './testcase';
import ModuleController from './module';
import TemplateController from './template';

const router = express.Router();

router.use('/test_case', TestCaseController);
router.use('/module', ModuleController);
router.use('/template', TemplateController);

export default router;