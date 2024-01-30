/*
 * Chuck Norris Joke Fetcher
 *
 * This plugin shows how to run arbitrary JavaScript code plugins in a gamevault-backend.
 * It will get executed as soon as the plugin is loaded.
 *
 * This plugin fetches a random Chuck Norris joke from the Chuck Norris API and logs it to the GameVault logger.
 * It uses the native JavaScript `fetch` API to make a network request to the Chuck Norris API endpoint.
 * The fetched joke is then extracted from the API response and logged to the GameVault logger.
 * Error handling is implemented to deal with network issues or problems with the API response.
 *
 */

const meta = {
  schemaVersion: 1,
  name: "Chuck Norris Joke Fetcher",
  description: "Fetches a random Chuck Norris joke and logs it to the console.",
  version: "1.0.0",
  author: "Alfagun74",
};

function fetchChuckNorrisJoke() {
  const apiUrl = "https://api.chucknorris.io/jokes/random";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      logger.log("A Chuck Norris Joke to cheer you up:", data.value);
    })
    .catch((error) => {
      logger.error("Error fetching Chuck Norris joke:", error.message);
    });
}

fetchChuckNorrisJoke();

module.exports = { meta, fetchChuckNorrisJoke };
