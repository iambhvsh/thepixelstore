const gamesData = require('../data/games.json');
const appsData = require('../data/apps.json');

const games = gamesData.map((game) => {
  if (game.icon) game.icon = `static/apps-images/${game.icon}`;

  game.screenshots = game.screenshots.map((fileName) => `static/apps-images/${fileName}`);

  // Directly use the thumbnail field if it exists
  if (game.thumbnail) game.thumbnail = `static/apps-images/${game.thumbnail}`;

  return game;
});

const apps = appsData.map((app) => {
  if (app.icon) app.icon = `static/apps-images/${app.icon}`;

  app.screenshots = app.screenshots.map((fileName) => `static/apps-images/${fileName}`);

  // Directly use the thumbnail field if it exists
  if (app.thumbnail) app.thumbnail = `static/apps-images/${app.thumbnail}`;

  return app;
});

export { games, apps };
