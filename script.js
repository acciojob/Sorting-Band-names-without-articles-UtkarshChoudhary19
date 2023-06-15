//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticle(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(' ');
}
touristSpots.sort((a, b) => {
  const nameA = removeArticle(a);
  const nameB = removeArticle(b);
  return nameA.localeCompare(nameB);
});
const ulElement = document.getElementById('band');
touristSpots.forEach(spot => {
  const li = document.createElement('li');
  li.textContent = spot;
  ulElement.appendChild(li);
});


