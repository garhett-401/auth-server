'use strict';

const express = require('express');
const router = express.Router();
// const getModel = require('../middleware/modelFinder.js')


async function getAll(req, res) {
  const result = await req.model.get()
  res.send(result)
}

async function createOne(req, res)  {
  const result = await req.model.create(req.body)
  res.send('You created a thing')
}

async function getById(req, res)  {
  const result = await req.model.update(req.params.id, req.body)
  res.send(`Updated this ${result.id}`)
}

async function deleteById(req, res) {
  const result = await req.model.delete(req.params.id)
  res.send(`Deleted this: ${result}`);
}

// router.param('model', getModel);

router.get('/:model', getAll);
router.post('/:model', createOne);
router.put('/:model/:id', getById);
router.delete('/:model/:id', deleteById);

module.exports = router;