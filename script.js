// DOM-element
const tab30 = document.getElementById('tab30');
const tab60 = document.getElementById('tab60');
const content30 = document.getElementById('content30');
const content60 = document.getElementById('content60');


tab30.addEventListener('click', function() {
  tab30.classList.add('active');
  tab60.classList.remove('active');
  content30.classList.add('active');
  content60.classList.remove('active');
});

// Rättat så att rätt program visas när 60-dagarsknappen klickas
tab60.addEventListener('click', function() {
  tab60.classList.add('active');
  tab30.classList.remove('active');
  content60.classList.add('active');
  content30.classList.remove('active');
});

// Sökfältsvalidering
const searchInput = document.getElementById('searchInput');
const searchFeedback = document.getElementById('searchFeedback');

searchInput.addEventListener('input', function() { 
  // Tar bort extra mellanslag i början och slutet av sökningen
const query = searchInput.value.trim();
 
// Hanterar tomt sökfält och ger rätt meddelande till användaren
if (query === '') {
  searchFeedback.className = 'search-feedback';
} else if (query.length < 3) {
  searchFeedback.style.display = 'block';
  searchFeedback.textContent = 'Skriv minst 3 tecken för att söka...';
  searchFeedback.className = 'search-feedback warning';
} else {
  searchFeedback.textContent = 'Söker efter deltagare: "' + query + '"...';
  searchFeedback.className = 'search-feedback success';
}
});