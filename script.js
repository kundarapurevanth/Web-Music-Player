const songs = [
  { title: "Peaceful Mind",
     artist: "Nature Beats",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
       bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", 
       color: "#1abc9c" },

  { title: "Relax Waves",
     artist: "Ocean Sounds",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
       bg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        color: "#3498db" },

  { title: "Morning Light",
     artist: "Sunrise Tunes",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
       bg: "https://res.cloudinary.com/dyverf4kj/image/upload/v1766824786/Screenshot_2025-12-27_141306_doilzj.png",
        color: "#f39c12" },

  { title: "Forest Whisper",
     artist: "Calm Nature",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
       bg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", 
       color: "#2ecc71" },

  { title: "Deep Focus",
     artist: "Study Beats",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
       bg: "https://res.cloudinary.com/dyverf4kj/image/upload/v1766824690/Screenshot_2025-12-27_141121_gro9ar.png",
        color: "#9b59b6" },

  { title: "Night Rain",
     artist: "Ambient Sounds",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
       bg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        color: "#34495e" },
  { title: "Gentle Breeze",
     artist: "Relaxation",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", 
      bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
       color: "#e67e22" },

  { title: "City Lights",
     artist: "Night Vibes",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
       bg: "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
        color: "#95a5a6" },

  { title: "Ocean Depths",
     artist: "Deep Waves",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
       bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        color: "#16a085" },

  { title: "Sunny Afternoon",
     artist: "Happy Tunes",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
       bg: "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc",
        color: "#f1c40f" },
  // Add more songs similarly with bg and color
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const searchInput = document.getElementById("search");
const playerContainer = document.querySelector(".player-container");
const body = document.body;

let currentIndex = 0;

// Load song
function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  playerContainer.style.background = `url('${song.bg}') no-repeat center center`;
  playerContainer.style.backgroundSize = 'cover';
  body.style.backgroundColor = song.color; // change outer background color
}

// Play & Pause
function playAudio() {
  audio.play();
  playBtn.textContent = "⏸";
}
function pauseAudio() {
  audio.pause();
  playBtn.textContent = "▶️";
}
playBtn.addEventListener("click", () => {
  audio.paused ? playAudio() : pauseAudio();
});

// Next & Previous
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playAudio();
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playAudio();
});

// Search
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  const foundIndex = songs.findIndex(s => s.title.toLowerCase().includes(filter) || s.artist.toLowerCase().includes(filter));
  if (foundIndex !== -1) {
    currentIndex = foundIndex;
    loadSong(currentIndex);
    playAudio();
  }
});

// Auto next when song ends
audio.addEventListener("ended", () => {
  nextBtn.click();
});

// Initialize
loadSong(currentIndex);






