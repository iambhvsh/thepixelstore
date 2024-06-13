const games = require('../data/games.json');
const apps = require('../data/apps.json');

[apps, games].flat().forEach((app) => {
  if (app.icon) app.icon = `static/apps-images/${app.icon}`;
  if (app.screenshots) {
    app.screenshots = app.screenshots.map((fileName) => `static/apps-images/${fileName}`);
  } else {
    app.screenshots = [];
  }
  if (app.thumbnail) app.thumbnail = `static/apps-images/${app.thumbnail}`;
});

export { games, apps };