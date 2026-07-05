const searchInput = document.getElementById("song-search");
const resultsList = document.getElementById("searchResults");

// Array of songs/albums with links to their HTML pages
const songs = [
  { name: "Lover", link: "albums/lover.html" },
  { name: "1989", link: "albums/1989.html" },
  { name: "Fearless", link: "albums/fearless.html" },
  { name: "Reputation", link: "albums/reputation.html" },
  { name: "Red", link: "albums/red.html" },
  { name: "Speak Now", link: "albums/speaknow.html" },
  { name: "Debut", link: "albums/debut.html" },
  { name: "TTPD", link: "albums/ttpd.html" },
  { name: "Showgirl", link: "albums/lifepfashowgirl.html" },
  { name: "Midhnights", link: "albums/midnights.html" },
  { name: "Evermore", link: "albums/evermore.html" },
  { name: "Folklore", link: "albums/folklore.html" },
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
