import express from 'express';
import {
  TemplateRepository,
} from '../repositories';

const router = express.Router();

router.get('/', function (req, res) {
  const allTemplates = TemplateRepository.get({
    path: '/',
  });

  res.json(allTemplates);
});

export default router;
