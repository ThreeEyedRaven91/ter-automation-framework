import express from 'express';
import {
  TestCaseRepository,
} from '../repositories';

const router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  const allFiles = TestCaseRepository.get({
    path: '/',
  });

  res.json(allFiles);
});

router.get('/byPath', function (req, res) {
  const content = TestCaseRepository.getByPath({ sourcePath: req.query.path });
  res.json(content);
});

export default router;
