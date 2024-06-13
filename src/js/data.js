// Import your JSON data directly
const games = require('../data/games.json');
const apps = require('../data/apps.json');

// Function to ensure URLs are used directly and handle variable number of screenshots
const useDirectURL = (data) => {
  return data.map((app) => ({
    ...app,
    icon: app.icon || '', // Keep icon URL as is, ensuring it exists or default to empty string
    screenshots: Array.isArray(app.screenshots) ? app.screenshots.map((screenshot) => screenshot) : [], // Keep all screenshot URLs as is, ensure it's an array
    thumbnail: app.thumbnail || '' // Keep thumbnail URL as is, ensuring it exists or default to empty string
  }));
};

// Apply the function to apps and games
const processedApps = useDirectURL(apps);
const processedGames = useDirectURL(games);

// Export the modified arrays
export { processedGames as games, processedApps as apps };
