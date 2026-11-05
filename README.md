# Music Info App

A small web app that fetches an artist's **top albums from the Last.fm API** and shows them as a grid of album covers.
Built with **vanilla JavaScript** and the Fetch API.

**Live demo:** https://esafi23.github.io/music-info-app/

## Features

- Pick an artist from the dropdown (Coldplay, Adele, Drake, Eminem)
- Live request to the Last.fm `artist.gettopalbums` endpoint
- Album names and cover art rendered dynamically
- Friendly message when no albums are found, and errors logged to the console

## What it demonstrates

- Calling a REST API with `fetch()` and handling JSON responses
- Building UI from API data with DOM manipulation
- Handling error and empty states

## Run locally

```bash
git clone https://github.com/esafi23/music-info-app.git
cd music-info-app
open index.html     # or double-click the file
```

The app uses a Last.fm API key in `script.js`. To use your own, create one at https://www.last.fm/api/account/create and replace `apiKey`.

## Files

```
index.html   # artist dropdown and album container
style.css    # album grid styling
script.js    # API call and rendering
```

## Author

**Eshaq Safi**, Full-Stack Developer (frontend focus) · [GitHub](https://github.com/esafi23) · [LinkedIn](https://www.linkedin.com/in/eshaq-safi)
