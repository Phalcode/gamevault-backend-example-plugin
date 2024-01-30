/*
 * Chuck Norris Joke Fetcher
 *
 * This plugin shows how to run arbitrary JavaScript code plugins in a gamevault-backend.
 * It will get executet as soon as the plugin is loaded.
 *
 * This plugin fetches a random Chuck Norris joke from the Chuck Norris API and logs it to the console.
 * It uses the native JavaScript `fetch` API to make a network request to the Chuck Norris API endpoint.
 * The fetched joke is then extracted from the API response and logged to the console.
 * Error handling is implemented to deal with network issues or problems with the API response.
 *
 */

export const meta = {
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
      console.log("A Chuck Norris Joke to cheer you up:", data.value);
    })
    .catch((error) => {
      console.error("Error fetching Chuck Norris joke:", error.message);
    });
}

fetchChuckNorrisJoke();
