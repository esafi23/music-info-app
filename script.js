
document.addEventListener('DOMContentLoaded', () => {
    
    // artist dropdown and album info div
    const artistSelect = document.getElementById('artistSelect');
    const albumInfo = document.getElementById('albumInfo');

    // my LastFM API key
    const apiKey = 'ee43b0c9046c4433cdb47f8aa7308b30'; 

    // event listener to artist selection
    artistSelect.addEventListener('change', () => {
        const selectedArtist = artistSelect.value;
        if (selectedArtist) {
            fetchArtistInfo(selectedArtist);
        } else {
            albumInfo.innerHTML = '';
        }
    });

    // Function to fetch artist info
    function fetchArtistInfo(artist) {
        // API call to LastFM
        fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${apiKey}&format=json`)
            .then(response => response.json()) // Convert the response to JSON
            .then(data => {
                displayAlbums(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Function to display albums on the page
    function displayAlbums(data) {
        albumInfo.innerHTML = ''; // Clear previous content

        if (data.topalbums && data.topalbums.album) {
            data.topalbums.album.forEach(album => {
                const albumDiv = document.createElement('div');
                albumDiv.classList.add('album');

                albumDiv.innerHTML = `
                    <h3>${album.name}</h3>
                    <img src="${album.image[2]['#text']}" alt="Album Cover">
                `;

                albumInfo.appendChild(albumDiv);
            });
        } else {
            albumInfo.innerHTML = '<p>No albums found.</p>';
        }
    }
});
