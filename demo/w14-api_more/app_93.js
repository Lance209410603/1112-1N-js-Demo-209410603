const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url = 'https://theaudiodb.com/api/v1/json/2/album.php?i=112024';//注意要打上http://


try {
	const response = await fetch(url);
	const data = await response.json();
	console.log('data', data.album);
  displayItems(data.album);
} catch (error) {
	console.error(error);
}
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strAlbum } = item;
      return `<p>${strAlbum}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
