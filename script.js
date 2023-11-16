document.addEventListener("DOMContentLoaded", function() { /*Animação durante o carregamento da página*/
    var loader = document.getElementById("loader");
    loader.style.display = "flex";
    document.body.style.overflow = "hidden"

    setTimeout(function() {
        loader.style.display = "none";
        document.body.style.overflow = "visible";
    }, 1000);
})

const hamburger = document.querySelector(".hamburger"); /*Navbar responsiva*/
const navbarLink = document.querySelector(".navbar-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarLink.classList.toggle("active");
})

const login = document.querySelector("#login"); /*Popup contendo formulário de login e cadastro*/
const loginContainer = document.querySelector(".login-container");
const navbarBtn = document.querySelector(".navbar-btn");
const loginIconClose = document.querySelector(".login-btn-close");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

navbarBtn.addEventListener("click", () => {
    login.classList.add("active");
});

loginIconClose.addEventListener("click", () => {
    login.classList.remove("active");
});

navbarBtn.addEventListener("click", () => {
    loginContainer.classList.add("popup");
});

loginIconClose.addEventListener("click", () => {
    loginContainer.classList.remove("popup");
});

registerLink.addEventListener("click", () => {
    loginContainer.classList.add("toogle");
});

loginLink.addEventListener("click", () => {
    loginContainer.classList.remove("toogle");
});

const music = new Audio("./assets/audio/song1.mp3"); /*Reprodução da musica atual com animação acompanhando seu estado*/
let play = document.getElementById("play");
let wave = document.querySelectorAll(".wave");

play.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        wave.forEach(wave => {
            wave.classList.add("active");
        });
    } else {
        music.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        wave.forEach(wave => {
            wave.classList.remove("active");
        });
    }
})

const songs = [ /*Array contendo informações de ids, títulos, subtítulos, imagens e musicas*/
    {
        id:"1",
        songTitle:"Little Wing",
        songSubTitle:"Jimi Hendrix",
        songImage: "./assets/cover1.jpg",
        songAudio: "./assets/audio/song1.mp3"
    },
    {
        id:"2",
        songTitle:"How Many More Times",
        songSubTitle:"Led Zeppelin",
        songImage: "./assets/cover2.jpg",
        songAudio: "./assets/audio/song2.mp3"
    },
    {
        id:"3",
        songTitle:"A Cultura",
        songSubTitle:"Sabotage",
        songImage: "./assets/cover3.jpg",
        songAudio: "./assets/audio/song3.mp3"
    },
    {
        id:"4",
        songTitle:"Menina Mulher da Pele Preta",
        songSubTitle:"Jorge Ben Jor",
        songImage: "./assets/cover4.jpg",
        songAudio: "./assets/audio/song4.mp3"
    },
    {
        id:"5",
        songTitle:"The Thrill is Gone",
        songSubTitle:"B.B. King",
        songImage: "./assets/cover5.jpg",
        songAudio: "./assets/audio/song5.mp3"
    },
    {
        id:"6",
        songTitle:"I Want You",
        songSubTitle:"The Beatles",
        songImage: "./assets/cover6.jpg",
        songAudio: "./assets/audio/song6.mp3"
    },
    {
        id:"7",
        songTitle:"Capítulo 4, Versículo 3",
        songSubTitle:"Racionais MCs",
        songImage: "./assets/cover7.jpg",
        songAudio: "./assets/audio/song7.mp3"
    },
    {
        id:"8",
        songTitle:"Samurai (feat. Stevie Wonder)",
        songSubTitle:"Djavan, Stevie Wonder",
        songImage: "./assets/cover8.jpg",
        songAudio: "./assets/audio/song8.mp3"
    },
    {
        id:"9",
        songTitle:"Remember the Time",
        songSubTitle:"Michael Jackson",
        songImage: "./assets/cover9.jpg",
        songAudio: "./assets/audio/song9.mp3"
    },
    {
        id:"10",
        songTitle:"Take the Power Back",
        songSubTitle:"Rage Against the Machine",
        songImage: "./assets/cover10.jpg",
        songAudio: "./assets/audio/song10.mp3"
    },
    {
        id:"11",
        songTitle:"Champanhe e Água Benta",
        songSubTitle:"Charlie Brown Jr.",
        songImage: "./assets/cover11.jpg",
        songAudio: "./assets/audio/song11.mp3"
    },
    {
        id:"12",
        songTitle:"Who Dat Boy (feat. A$AP Rocky)",
        songSubTitle:"Tyler, The Creator, A$AP Rocky",
        songImage: "./assets/cover12.jpg",
        songAudio: "./assets/audio/song12.mp3"
    },
    {
        id:"13",
        songTitle:"Esquimó",
        songSubTitle:"Djonga",
        songImage: "./assets/cover13.jpg",
        songAudio: "./assets/audio/song13.mp3"
    },
    {
        id:"14",
        songTitle:"Money Trees",
        songSubTitle:"Kendrick Lamar",
        songImage: "./assets/cover14.jpg",
        songAudio: "./assets/audio/song14.mp3"
    },
    {
        id:"15",
        songTitle:"Jamming",
        songSubTitle:"Bob Marley & The Wailers",
        songImage: "./assets/cover15.jpg",
        songAudio: "./assets/audio/song15.mp3"
    }
]

let index = 0; /*Atualização das informações da seção 'masterplay' de acordo com o clique em uma musica ou nos botões de controle*/
let masterPlayImg = document.getElementById("masterplay-img");
let songTitleMasterPlay = document.getElementById("song-title");
let songSubTitleMasterPlay = document.getElementById("song-subtitle");
let click = Array.from(document.getElementsByClassName("click"));
let back = document.getElementById("back");
let next = document.getElementById("next");

function updatePlayer() {
    masterPlayImg.src = songs[index - 1].songImage;
    music.src = songs[index - 1].songAudio;
    music.play();

    songTitleMasterPlay.innerHTML = songs[index - 1].songTitle;
    songSubTitleMasterPlay.innerHTML = songs[index - 1].songSubTitle;

    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    wave.forEach(wave => {
        wave.classList.add("active");
    });

    music.addEventListener("ended", () => {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        wave.forEach(wave => {
            wave.classList.remove("active");
        });
    });
}

click.forEach((element) => {
    element.addEventListener("click", (e) => {
        index = e.target.id;
        updatePlayer();
    });
});

back.addEventListener("click", () => {
    index -= 1;
    if (index < 1) {
        index = click.length;
    }
    updatePlayer();
});

next.addEventListener("click", () => {
    index += 1;
    if (index > click.length) {
        index = 1;
    }
    updatePlayer();
});

let currentStart = document.getElementById("current-start"); /*Indicadores de duração da musica*/
let currentEnd = document.getElementById("current-end");
let timerBarInput = document.getElementById("timer-bar-input");
let timerBar = document.getElementById("bar1");

music.addEventListener("timeupdate", () => {
    let musicCurrentTime = music.currentTime;
    let musicDuration = music.duration;

    let min = Math.floor(musicDuration / 60);
    let sec = Math.floor(musicDuration % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `0${min}:${sec}`;

    let min1 = Math.floor(musicCurrentTime / 60);
    let sec1 = Math.floor(musicCurrentTime % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `0${min1}:${sec1}`;

    let progressBar = parseInt((music.currentTime / music.duration) * 100);
    timerBarInput.value = progressBar;
    let timerBarInputBar = timerBarInput.value;
    timerBar.style.width = `${timerBarInputBar}%`;
})

timerBarInput.addEventListener("change", () => {
    music.currentTime = timerBarInput.value * music.duration / 100;
})

music.addEventListener("ended", () => {
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    wave.forEach(wave => {
        wave.classList.remove("active");
    });
})

let isMuted = false; /*Indicadores de volume da musica*/
let volumeBtn = document.getElementById("volume-btn");
let volumeBarInput = document.getElementById("volume-bar-input");
let volumeBar = document.getElementById("bar2");

volumeBarInput.addEventListener("change", () => {
    if(volumeBarInput.value == 0) {
        volumeBtn.classList.remove("fa-volume-low");
        volumeBtn.classList.add("fa-volume-xmark");
        volumeBtn.classList.remove("fa-volume-high");
    }
    if(volumeBarInput.value > 0) {
        volumeBtn.classList.add("fa-volume-low");
        volumeBtn.classList.remove("fa-volume-xmark");
        volumeBtn.classList.remove("fa-volume-high");
    }
    if(volumeBarInput.value > 50) {
        volumeBtn.classList.remove("fa-volume-low");
        volumeBtn.classList.remove("fa-volume-xmark");
        volumeBtn.classList.add("fa-volume-high");
    }

    let volume = volumeBarInput.value;
    volumeBar.style.width = `${volume}%`;
    music.volume = volume / 100;
})

volumeBtn.addEventListener("click", () => {
    if(isMuted) {
        music.volume = 1;
        isMuted = false;
        volumeBtn.classList.remove("fa-volume-xmark");
        volumeBtn.classList.add("fa-volume-high");
        volumeBar.style.width = "100%";
    } else {
        music.volume = 0;
        isMuted = true;
        volumeBtn.classList.add("fa-volume-xmark");
        volumeBtn.classList.remove("fa-volume-high");
        volumeBar.style.width = "0%";
    }
})

document.addEventListener("DOMContentLoaded", () => {
    music.volume = 1;
    volumeBar.style.width = "100%";
});

const leftScroll = document.getElementById("left-scroll1"); /*Botões de controle dos carrosséis*/
const rightScroll = document.getElementById("right-scroll1");
const leftScroll1 = document.getElementById("left-scroll2");
const rightScroll1 = document.getElementById("right-scroll2");

leftScroll.onclick = () => {
  document.getElementsByClassName("popular-song-list")[0].scrollLeft -= 160;
};

rightScroll.onclick = () => {
  document.getElementsByClassName("popular-song-list")[0].scrollLeft += 160;
};

leftScroll1.onclick = () => {
  document.getElementsByClassName("popular-artists-list")[0].scrollLeft -= 200;
};

rightScroll1.onclick = () => {
  document.getElementsByClassName("popular-artists-list")[0].scrollLeft += 200;
};