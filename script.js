(function () {
  "use strict";

  var screenMenu = document.getElementById("screen-menu");
  var screenGame = document.getElementById("screen-game");
  var themeListEl = document.getElementById("theme-list");
  var themeTitleEl = document.getElementById("theme-title");
  var cardCounterEl = document.getElementById("card-counter");
  var carouselEl = document.getElementById("carousel");
  var revealBtn = document.getElementById("reveal-btn");
  var answerBox = document.getElementById("answer-box");
  var playBtn = document.getElementById("play-btn");
  var playIcon = document.getElementById("play-icon");
  var progressFill = document.getElementById("progress-fill");
  var progressLimit = document.getElementById("progress-limit");
  var progressBar = document.getElementById("progress-bar");
  var currentTimeEl = document.getElementById("current-time");
  var totalTimeEl = document.getElementById("total-time");
  var prevBtn = document.getElementById("prev-btn");
  var nextBtn = document.getElementById("next-btn");
  var backBtn = document.getElementById("back-btn");
  var audioError = document.getElementById("audio-error");

  var audio = new Audio();
  var currentTheme = null;
  var currentThemeKey = null;
  var currentIndex = 0;
  var revealed = false;
  var limitReached = false;

  var ICON_PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
  var ICON_PAUSE = '<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';

  function formatTime(sec) {
    if (!isFinite(sec) || sec < 0) sec = 0;
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function buildMenu() {
    var keys = Object.keys(THEMES);
    themeListEl.innerHTML = "";
    keys.forEach(function (key) {
      var btn = document.createElement("button");
      btn.textContent = THEMES[key].title;
      btn.addEventListener("click", function () {
        openTheme(key);
      });
      themeListEl.appendChild(btn);
    });
  }

  function openTheme(key) {
    if (!THEMES[key]) return;
    currentThemeKey = key;
    currentTheme = THEMES[key];
    currentIndex = 0;
    themeTitleEl.textContent = currentTheme.title;

    var url = new URL(window.location.href);
    url.searchParams.set("theme", key);
    window.history.replaceState({}, "", url);

    buildCarousel();
    screenMenu.classList.add("hidden");
    screenGame.classList.add("active");
    loadTrack(0);
  }

  function backToMenu() {
    audio.pause();
    screenGame.classList.remove("active");
    screenMenu.classList.remove("hidden");
    var url = new URL(window.location.href);
    url.searchParams.delete("theme");
    window.history.replaceState({}, "", url);
  }

  function buildCarousel() {
    carouselEl.innerHTML = "";
    currentTheme.tracks.forEach(function (track, i) {
      var disc = document.createElement("button");
      disc.className = "disc";
      disc.type = "button";
      disc.textContent = i + 1;
      disc.setAttribute("aria-label", "Musique " + (i + 1));
      disc.addEventListener("click", function () {
        loadTrack(i);
      });
      carouselEl.appendChild(disc);
    });
  }

  function updateDiscs() {
    var discs = carouselEl.querySelectorAll(".disc");
    discs.forEach(function (d, i) {
      d.classList.toggle("active", i === currentIndex);
    });
    var active = discs[currentIndex];
    if (active) {
      active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  function loadTrack(index) {
    if (!currentTheme) return;
    var tracks = currentTheme.tracks;
    if (index < 0 || index >= tracks.length) return;

    audio.pause();
    currentIndex = index;
    revealed = false;
    limitReached = false;

    var track = tracks[index];

    updateDiscs();
    cardCounterEl.textContent = (index + 1) + " / " + tracks.length;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === tracks.length - 1;

    revealBtn.disabled = false;
    revealBtn.classList.remove("revealed");
    revealBtn.textContent = "Afficher la réponse";
    renderAnswerBox();

    audioError.classList.remove("visible");
    audio.src = track.audio;
    audio.currentTime = 0;
    progressFill.style.width = "0%";
    progressFill.classList.remove("over-limit");
    currentTimeEl.textContent = "0:00";
    totalTimeEl.textContent = "0:00";
    playIcon.innerHTML = ICON_PLAY;

    var limitPct = 0;
    audio.addEventListener("loadedmetadata", function onMeta() {
      totalTimeEl.textContent = formatTime(audio.duration);
      limitPct = Math.min(100, (track.limit / audio.duration) * 100);
      progressLimit.style.left = limitPct + "%";
      audio.removeEventListener("loadedmetadata", onMeta);
    });
  }

  function renderAnswerBox() {
    var track = currentTheme.tracks[currentIndex];

    if (limitReached) {
      // Temps écoulé : réponse + titre + artiste affichés automatiquement
      answerBox.innerHTML =
        '<div class="answer-main">' + escapeHtml(track.answer) + '</div>' +
        '<div class="answer-sub">' + escapeHtml(track.title) + ' — ' + escapeHtml(track.artist) + '</div>';
      revealBtn.textContent = "Réponse dévoilée";
      revealBtn.classList.add("revealed");
      revealBtn.disabled = true;
    } else if (revealed) {
      // Révélation manuelle par l'arbitre : uniquement la réponse attendue
      answerBox.innerHTML = '<div class="answer-main">' + escapeHtml(track.answer) + '</div>';
      revealBtn.textContent = "Masquer la réponse";
      revealBtn.classList.add("revealed");
    } else {
      answerBox.innerHTML = '<span class="placeholder">Réponse masquée</span>';
      revealBtn.textContent = "Afficher la réponse";
      revealBtn.classList.remove("revealed");
    }
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : str;
    return div.innerHTML;
  }

  function toggleReveal() {
    if (limitReached) return; // déjà tout dévoilé, le bouton est désactivé
    revealed = !revealed;
    renderAnswerBox();
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play().catch(function () {
        audioError.textContent = "Impossible de lire le fichier audio : " + currentTheme.tracks[currentIndex].audio;
        audioError.classList.add("visible");
      });
    } else {
      audio.pause();
    }
  }

  audio.addEventListener("play", function () {
    playIcon.innerHTML = ICON_PAUSE;
  });
  audio.addEventListener("pause", function () {
    playIcon.innerHTML = ICON_PLAY;
  });
  audio.addEventListener("ended", function () {
    playIcon.innerHTML = ICON_PLAY;
  });
  audio.addEventListener("error", function () {
    audioError.textContent = "Fichier audio introuvable : " + currentTheme.tracks[currentIndex].audio;
    audioError.classList.add("visible");
  });
  audio.addEventListener("timeupdate", function () {
    if (!audio.duration) return;
    var pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = pct + "%";
    currentTimeEl.textContent = formatTime(audio.currentTime);
    var limit = currentTheme.tracks[currentIndex].limit;
    var isOver = audio.currentTime >= limit;
    progressFill.classList.toggle("over-limit", isOver);
    if (isOver && !limitReached) {
      limitReached = true;
      renderAnswerBox();
    }
  });

  function seek(evt) {
    if (!audio.duration) return;
    var rect = progressBar.getBoundingClientRect();
    var clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    var ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  }

  progressBar.addEventListener("click", seek);

  revealBtn.addEventListener("click", toggleReveal);
  playBtn.addEventListener("click", togglePlay);
  prevBtn.addEventListener("click", function () { loadTrack(currentIndex - 1); });
  nextBtn.addEventListener("click", function () { loadTrack(currentIndex + 1); });
  backBtn.addEventListener("click", backToMenu);

  // Balayage (swipe) sur la carte pour naviguer entre les musiques
  (function enableSwipe() {
    var card = document.querySelector(".player-card");
    var startX = null;
    card.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    card.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var endX = e.changedTouches[0].clientX;
      var diff = endX - startX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) loadTrack(currentIndex + 1);
        else loadTrack(currentIndex - 1);
      }
      startX = null;
    });
  })();

  // ---------- Démarrage ----------
  buildMenu();
  var params = new URLSearchParams(window.location.search);
  var themeParam = params.get("theme");
  if (themeParam && THEMES[themeParam]) {
    openTheme(themeParam);
  }
})();
