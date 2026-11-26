(function () {
  var grid = document.getElementById("grid");
  var count = document.getElementById("count");

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function buildMedia(video) {
    var media = el("div", "media");

    if (video.file) {
      var player = document.createElement("video");
      player.controls = true;
      player.preload = "metadata";
      player.src = video.file;
      media.appendChild(player);
    } else if (video.youtube) {
      // O iframe só é criado ao clicar, para a página carregar rápido.
      var btn = el("button", "play", "▶ Assistir");
      btn.type = "button";
      btn.setAttribute("aria-label", "Assistir: " + video.title);
      btn.style.background = "url(https://i.ytimg.com/vi/" + video.youtube + "/hqdefault.jpg) center/cover";
      btn.addEventListener("click", function () {
        var frame = document.createElement("iframe");
        frame.src = "https://www.youtube-nocookie.com/embed/" + video.youtube + "?autoplay=1";
        frame.title = video.title;
        frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        frame.allowFullscreen = true;
        media.replaceChildren(frame);
      });
      media.appendChild(btn);
    } else {
      media.appendChild(el("div", "placeholder", "Vídeo em breve"));
    }
    return media;
  }

  VIDEOS.forEach(function (video) {
    var card = el("article", "card");
    var info = el("div", "info");
    info.appendChild(el("span", "date", video.date));
    info.appendChild(el("h3", "", video.title));
    info.appendChild(el("p", "", video.description));
    card.appendChild(buildMedia(video));
    card.appendChild(info);
    grid.appendChild(card);
  });

  count.textContent = String(VIDEOS.length).padStart(2, "0") + " projetos";
  document.getElementById("year").textContent = new Date().getFullYear();
})();
