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


tab60.addEventListener('click', function() {
  tab30.classList.add('active'); 
  tab60.classList.remove('active'); 
  content30.classList.add('active'); 
  content60.classList.remove('active');
});

// Sökfältsvalidering
const searchInput = document.getElementById('searchInput');
const searchFeedback = document.getElementById('searchFeedback');

searchInput.addEventListener('input', function() {
  const query = searchInput.value; 

  
  if (query.length < 3) {
    searchFeedback.textContent = 'Skriv minst 3 tecken för att söka...';
    searchFeedback.className = 'search-feedback warning';
  } else {
    searchFeedback.textContent = 'Söker efter deltagare: "' + query + '"...';
    searchFeedback.className = 'search-feedback success';
  }
});