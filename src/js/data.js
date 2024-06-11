/* eslint-disable */
const gamesData = require('../data/games.json');
const appsData = require('../data/apps.json');

const games = gamesData.map((game) => {
  if (game.icon) game.icon = `static/apps-images/${game.icon}`;
  game.screenshots = game.screenshots.map((fileName) => `static/apps-images/${fileName}`);
  game.screenshotsThumbs = game.screenshots.map((fileName) => fileName.replace('.jpg', '-thumb.jpg'));
  return game;
});

const apps = appsData.map((app) => {
  if (app.icon) app.icon = `static/apps-images/${app.icon}`;
  app.screenshots = app.screenshots.map((fileName) => `static/apps-images/${fileName}`);
  app.screenshotsThumbs = app.screenshots.map((fileName) => fileName.replace('.jpg', '-thumb.jpg'));
  return app;
});

export { games, apps };

