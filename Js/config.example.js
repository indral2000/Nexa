// Salin menjadi config.js. Jangan pernah memasukkan Spotify Client Secret ke browser.
export const CONFIG = {
  // Spotify Developer Dashboard > Create App > Client ID
  SPOTIFY_CLIENT_ID: "ISI_CLIENT_ID_SPOTIFY",
  // YouTube Data API v3 API key. Batasi key berdasarkan HTTP referrer di Google Cloud.
  YOUTUBE_API_KEY: "ISI_YOUTUBE_DATA_API_KEY",
  // Redirect URI harus sama persis dengan yang didaftarkan di Spotify Dashboard.
  SPOTIFY_REDIRECT_URI: "http://127.0.0.1:5500/"
};