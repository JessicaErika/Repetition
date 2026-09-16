// DOM-element
const tab30 = document.getElementById('tab30');
const tab60 = document.getElementById('tab60');
const content30 = document.getElementById('content30');
const content60 = document.getElementById('content60');

// Flik 1: 30-dagars
tab30.addEventListener('click', function() {
  tab30.classList.add('active');
  tab60.classList.remove('active');
  content30.classList.add('active');
  content60.classList.remove('active');
});

// Förbättrat: Rättad logik för Flik 2 (60-dagars)
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
  // Förbättrat: Använder .trim() för att ta bort tomma tecken i början/slutet
  const query = searchInput.value.trim();

  // Förbättrat: Döljer feedback helt om fältet är tomt
  if (query === '') {
    searchFeedback.style.display = 'none';
    searchFeedback.className = 'search-feedback';
  } else if (query.length < 3) {
    searchFeedback.textContent = 'Skriv minst 3 tecken för att söka...';
    searchFeedback.className = 'search-feedback warning';
  } else {
    searchFeedback.textContent = 'Söker efter deltagare: "' + query + '"...';
    searchFeedback.className = 'search-feedback success';
  }
});