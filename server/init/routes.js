import * as feedController from '../controllers/feed';

export default (app) => {
  app.get('/api/feeds/:id', feedController.all);
};
