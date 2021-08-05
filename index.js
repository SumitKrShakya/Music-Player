const music = document.querySelector('audio');
const image = document.getElementById('img-js')
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const perv = document.getElementById('perv');
const next = document.getElementById('next');
const glow = document.getElementById('boxx');
// const play = document.getElementById('play');

const songs = [{
        name: "Rockabye",
        title: "Rockabye",
        artist: "Clean Bandit"
    },
    {
        name: "barish",
        title: "Baarish Ki Jaaye",
        artist: "B Praak"

    },
    {
        name: "b2s",
        title: "Born To Shine",
        artist: "Diljit Dosanjh"
    },
    {
        name: "havana",
        title: "Havana",
        artist: "Camila Cabello"
    },

    {
        name: "friends",
        title: "FRIENDS",
        artist: "Marshmello & Anne-Marie"
    }
];

let isPlaying = false;

const playMusic = () => {
    music.play();
    isPlaying = true;
    play.classList.replace('fa-play', 'fa-pause');
    glow.classList.add('pulsee');
    // glow.classList.add('transition');

    glow.classList.remove('here-box');
    image.classList.add('anime');

};
// pause functionality
const pauseMusic = () => {
    music.pause();
    isPlaying = false;
    glow.classList.remove('pulsee');
    // glow.classList.add('pulseee');
    // music.currentTime = 0;
    glow.classList.add('here-box');
    play.classList.replace('fa-pause', 'fa-play');
    image.classList.remove('anime');
};

play.addEventListener("click", () => {
    // if (isPlaying) {
    //     pauseMusic();
    // } else {
    //     playMusic();
    // }

    isPlaying ? pauseMusic() : playMusic();

});

// title.addEventListener("mouseover", () => {
//     title.classList.add('trans');

// });

const loadsongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    image.src = "images/" + songs.name + ".jpg";
};



songindex = 0;

const nextsong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsongs(songs[songindex]);
    playMusic();

};
music.addEventListener('ended', () => {
    nextsong();
});
const pervsong = () => {
    // songindex = (songindex ? songindex : songs.length);
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadsongs(songs[songindex]);
    playMusic();
};

next.addEventListener("click", nextsong);
perv.addEventListener("click", pervsong);