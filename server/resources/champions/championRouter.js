const championRouter = require('express').Router();
const championController = require('./championController');
const { validateId } = require('./championUtils');

championRouter.param('id', validateId);

championRouter.route('/')
  .post(championController.createOne)
  .get(championController.retrieve)
  .put(championController.update)
  .delete(championController.delete);

championRouter.route('/:id')
  .get(championController.retrieveOne)
  .put(championController.updateOne)
  .delete(championController.deleteOne);

module.exports = championRouter;
