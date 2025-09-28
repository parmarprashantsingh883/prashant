const url = 'https://jsonplaceholder.typicode.com/photos';
const container = document.getElementById('cards-container');

fetch(url)
  .then(res => res.json())
  .then(photos => {
    // Optional: limit to first 20 photos
    photos.slice(0, 20).forEach(photo => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img url="${url.thumbnailUrl}" alt="${photo.title}" style="width:100%; border-radius:5px;">
        <h3>${photo.title}</h3>
        <p><strong>Photo ID:</strong> ${photo.id}</p>
        <p><strong>Album ID:</strong> ${photo.albumId}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));
