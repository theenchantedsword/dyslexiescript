function init() {
  let button = document.createElement('button');
  button.id = 'dyslexieToggle';
  button.onclick = enableDyslexie;
  button.innerHTML = "Enable Dyslexia-friendly font!";

  let style = document.createElement('style');
  let dyslexieFont = false;

  let dyslexieStyle = `
    textarea {
      font-family: 'Dyslexie' !important;
      }
      html{
        font-family: 'Dyslexie' !important;
      }
      button{
        font-family: 'Dyslexie' !important;
      }
      p{
        font-family: 'Dyslexie' !important;
      }
      a{
        font-family: 'Dyslexie' !important;
      }
      
      @font-face {
        font-family: 'Dyslexie';
        src: url("https://scripts.the-enchanteden.repl.co/Dyslexie.ttf") format('truetype');
      }
  `;

  document.body.appendChild(button);
  style.innerHTML = `
  @font-face {
    font-family: 'Dyslexie';
    src: url("https://scripts.the-enchanteden.repl.co/Dyslexie.ttf") format('truetype');
    }
  #dyslexieToggle{
    font-family: 'Dyslexie' !important;
    }
  `
  document.head.appendChild(style);

  function enableDyslexie() {
    if (dyslexieFont === false) {
      style.innerHTML = dyslexieStyle;
      dyslexieFont = true;
    } else if (dyslexieFont === true) {
      style.innerHTML = '';
      dyslexieFont = false;
    }
  }
};
const dyslexie = {
  init: function() {
    init()
  },
  info: function() {
    console.log(
  "%cHello! If this is showing up, you used \"dyslexie.info()\" for help with the dyslexie font script. %cYou simply use \"dyslexie.init()\" for it to start, you can customize the button's style because it has the id \"dyslexieToggle\".",
  "font-size: 30px;",
  "font-size: 20px;"
);

  }
};
