const searchInput = document.getElementById("song-search");
const resultsList = document.getElementById("searchResults");

// Array of songs/albums with links to their HTML pages
const songs = [
  { name: "Lover", link: "lover.html" },
  { name: "1989", link: "1989.html" },
  { name: "Fearless", link: "fearless.html" },
  { name: "Reputation", link: "reputation.html" },
  { name: "Red", link: "red.html" },
  { name: "Speak Now", link: "speaknow.html" },
  { name: "Debut", link: "debut.html" },
  { name: "TTPD", link: "ttpd.html" },
  { name: "Showgirl", link: "lifepfashowgirl.html" },
  { name: "Midhnights", link: "midnights.html" },
  { name: "Evermore", link: "evermore.html" },
  { name: "Folklore", link: "folklore.html" },
  // Add all other songs/albums here
];

// Function to display search results dynamically
function displayResults(filteredSongs) {
  resultsList.innerHTML = ""; // Clear previous results
  filteredSongs.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.name;
    a.href = item.link;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
}

// Initially show nothing
displayResults([]);

// Search functionality
searchInput.addEventListener("keyup", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = songs.filter(item => item.name.toLowerCase().includes(query));
  displayResults(filtered);
});
