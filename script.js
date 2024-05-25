(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());

document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("typing-text");
  const text = textElement.textContent;
  textElement.textContent = "";
  
  let index = 0;
  
  function type() {
      if (index < text.length) {
          textElement.textContent += text[index];
          index++;
          setTimeout(type, 100);
      }
  }
  
  type();
});

document.addEventListener("DOMContentLoaded", function() {
  var cardInside = document.getElementById("card-inside");
  cardInside.classList.add("fade-in"); // Tambahkan kelas "fade-in" untuk memulai animasi saat halaman dimuat
});


var audio = document.getElementById("audio");
        var button = document.getElementById("toggleButton");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                button.textContent = "Pause";
            } else {
                audio.pause();
                button.textContent = "Play";
            }
        }


