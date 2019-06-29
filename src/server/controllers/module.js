import express from 'express';
import {
  ModuleRepository,
} from '../repositories';

const router = express.Router();

router.get('/', function (req, res) {
  const allFiles = ModuleRepository.get({
    path: '/',
  });

  res.json(allFiles);
});

router.get('/byPath', function (req, res) {
  const content = ModuleRepository.getByPath({ sourcePath: req.query.path });
  res.json(content);
});

router.put(`/setTitle`, (req, res) => {
  const { title } = req.body;
  const { sourcePath } = req.query;
  ModuleRepository.updateTitle({ sourcePath, title });

  const content = ModuleRepository.getByPath({ sourcePath: req.query.path });
  res.json(content);
});

export default router;
