// JS for Toggle Button
var cbToggleBtn = document.getElementById('cbToggleBtn');
var offcanvasNavbar = document.getElementById('offcanvasNavbar');

// Event OffCanvas shown    
offcanvasNavbar.addEventListener('show.bs.offcanvas', function () {
  // Fix button on unexpected exit
  cbToggleBtn.checked = true;
});

// OffCanvas hidden
offcanvasNavbar.addEventListener('hide.bs.offcanvas', function () {
  // Fix button on unexpected exit
  cbToggleBtn.checked = false;
});

// JS for buttons image change
var btnClose = document.getElementById('btnClose');
var btnMinimize = document.getElementById('btnMinimize');
var btnZoom = document.getElementById('btnZoom');

btnClose.addEventListener('mouseover', () => {
  btnClose.style.backgroundImage = 'url("images/traffic_on/Close_Button_on.png")';
  btnMinimize.style.backgroundImage = 'url("images/traffic_on/Minimize_Button_on.png")';
  btnZoom.style.backgroundImage = 'url("images/traffic_on/Maximize_Button_on.png")';
});

btnClose.addEventListener('mouseout', () => {
  btnClose.style.backgroundImage = 'url("images/traffic_off/Close_Button_off.png")';
  btnMinimize.style.backgroundImage = 'url("images/traffic_off/Minimize_Button_off.png")';
  btnZoom.style.backgroundImage = 'url("images/traffic_off/Maximize_Button_off.png")';
});

btnMinimize.addEventListener('mouseover', () => {
  btnClose.style.backgroundImage = 'url("images/traffic_on/Close_Button_on.png")';
  btnMinimize.style.backgroundImage = 'url("images/traffic_on/Minimize_Button_on.png")';
  btnZoom.style.backgroundImage = 'url("images/traffic_on/Maximize_Button_on.png")';
});

btnMinimize.addEventListener('mouseout', () => {
  btnClose.style.backgroundImage = 'url("images/traffic_off/Close_Button_off.png")';
  btnMinimize.style.backgroundImage = 'url("images/traffic_off/Minimize_Button_off.png")';
  btnZoom.style.backgroundImage = 'url("images/traffic_off/Maximize_Button_off.png")';
});

btnZoom.addEventListener('mouseover', () => {
  btnClose.style.backgroundImage = 'url("images/traffic_on/Close_Button_on.png")';
  btnMinimize.style.backgroundImage = 'url("images/traffic_on/Minimize_Button_on.png")';
  btnZoom.style.backgroundImage = 'url("images/traffic_on/Maximize_Button_on.png")';
});

btnZoom.addEventListener('mouseout', () => {
  btnClose.style.backgroundImage = 'url("images/traffic_off/Close_Button_off.png")';
  btnMinimize.style.backgroundImage = 'url("images/traffic_off/Minimize_Button_off.png")';
  btnZoom.style.backgroundImage = 'url("images/traffic_off/Maximize_Button_off.png")';
});

var macoswindow = document.getElementById('macos-window');
var glitch = document.getElementById('glitch');
var navbar = document.getElementById('navbar');

btnClose.addEventListener('click', () => {
  macoswindow.classList.add('closed');
  setTimeout(() => {
    glitch.style.display = 'initial';
    setTimeout(() => {
      glitch.style.display = 'none';
      navbar.style.display = 'initial';
      document.getElementById('body').style.backgroundImage = 'none';
      document.getElementById('body').style.backgroundColor = '#20232A';
      document.getElementById('body').classList.remove('overflow-y-hidden');

      document.getElementById('aboutpage').classList.remove('closed');
      document.getElementById('aboutBtn').classList.add('active');
    }, 500);
  }, 500);
});

btnMinimize.addEventListener('click', () => {
  macoswindow.classList.add('minimized');
  setTimeout(() => {
    glitch.style.display = 'initial';
    setTimeout(() => {
      glitch.style.display = 'none';
      navbar.style.display = 'initial';
      document.getElementById('body').style.backgroundImage = 'none';
      document.getElementById('body').style.backgroundColor = '#20232A';
      document.getElementById('body').classList.remove('overflow-y-hidden');

      document.getElementById('aboutpage').classList.remove('closed');
      document.getElementById('aboutBtn').classList.add('active');
    }, 500);
  }, 500);
});

/* Test */

const palabras = ['para Móviles.', 'de Escritorio.', 'Web.'];

let index = 0;
let currentWord = '';
let startWord = 'Me encargo de desarrollar apps ';
let deleting = false;

function escribirPalabra() {
  const word = palabras[index % palabras.length];
  if (deleting) {
    currentWord = currentWord.substring(0, currentWord.length - 1);
  } else {
    currentWord = word.substring(0, currentWord.length + 1);
  }
  document.getElementById('animatedText').textContent = startWord + currentWord;

  if (!deleting && currentWord === word) {
    deleting = true;
    setTimeout(escribirPalabra, 1500); // Esperar antes de borrar
  } else if (deleting && currentWord === '') {
    deleting = false;
    index++;
    setTimeout(escribirPalabra, 500); // Esperar antes de escribir la siguiente palabra
  } else {
    setTimeout(escribirPalabra, 50); // Velocidad de escritura/borrado
  }
}

window.onload = () => {
  const texto = document.getElementById('animatedText');
  escribirPalabra(); // Comenzar el proceso
};

function reOpenWindow() {
  document.getElementById('aboutpage').classList.add('closed');
  document.getElementById('projectspage').classList.add('closed');
  document.getElementById('edupage').classList.add('closed');
  document.getElementById('experiencepage').classList.add('closed');
  document.getElementById('skillspage').classList.add('closed');

  document.getElementById('skillsBtn').classList.remove('active');
  document.getElementById('experienceBtn').classList.remove('active');
  document.getElementById('eduBtn').classList.remove('active');
  document.getElementById('projectsBtn').classList.remove('active');
  document.getElementById('aboutBtn').classList.remove('active');
  setTimeout(() => {
    navbar.style.display = 'none';
    glitch.style.display = 'initial';
    setTimeout(() => {
      glitch.style.display = 'none';
      document.getElementById('body').style.backgroundImage = 'url(images/backgroud/background_main.jpg)';
      document.getElementById('body').style.backgroundColor = 'none';
      document.getElementById('body').classList.add('overflow-y-hidden');
      macoswindow.classList.remove('minimized');
      macoswindow.classList.remove('closed');
    }, 500);
  }, 500);
}

function pageLoad(tipo) {
  macoswindow.classList.add('minimized');
  setTimeout(() => {
    glitch.style.display = 'initial';
    setTimeout(() => {
      glitch.style.display = 'none';
      navbar.style.display = 'initial';
      document.getElementById('body').style.backgroundImage = 'none';
      document.getElementById('body').style.backgroundColor = '#20232A';
      document.getElementById('body').classList.remove('overflow-y-hidden');

      switch (tipo) {
        case 1:
          document.getElementById('aboutpage').classList.remove('closed');
          document.getElementById('aboutBtn').classList.add('active');
          break;
        case 2:
          document.getElementById('projectspage').classList.remove('closed');
          document.getElementById('projectsBtn').classList.add('active');
          break;
        case 3:
          document.getElementById('edupage').classList.remove('closed');
          document.getElementById('eduBtn').classList.add('active');
          break;
        case 4:
          document.getElementById('experiencepage').classList.remove('closed');
          document.getElementById('experienceBtn').classList.add('active');
          break;
        case 5:
          document.getElementById('skillspage').classList.remove('closed');
          document.getElementById('skillsBtn').classList.add('active');
          break;
      }

    }, 500);
  }, 500);
}

function pageLoadNavBar(tipo) {

  switch (tipo) {
    case 1:
      document.getElementById('skillspage').classList.add('closed');
      document.getElementById('skillsBtn').classList.remove('active');

      document.getElementById('experiencepage').classList.add('closed');
      document.getElementById('experienceBtn').classList.remove('active');

      document.getElementById('edupage').classList.add('closed');
      document.getElementById('eduBtn').classList.remove('active');

      document.getElementById('projectspage').classList.add('closed');
      document.getElementById('projectsBtn').classList.remove('active');

      document.getElementById('aboutpage').classList.remove('closed');
      document.getElementById('aboutBtn').classList.add('active');
      break;
    case 2:
      document.getElementById('skillspage').classList.add('closed');
      document.getElementById('skillsBtn').classList.remove('active');

      document.getElementById('experiencepage').classList.add('closed');
      document.getElementById('experienceBtn').classList.remove('active');

      document.getElementById('edupage').classList.add('closed');
      document.getElementById('eduBtn').classList.remove('active');

      document.getElementById('aboutpage').classList.add('closed');
      document.getElementById('aboutBtn').classList.remove('active');

      document.getElementById('projectspage').classList.remove('closed');
      document.getElementById('projectsBtn').classList.add('active');
      break;
    case 3:
      document.getElementById('skillspage').classList.add('closed');
      document.getElementById('skillsBtn').classList.remove('active');

      document.getElementById('experiencepage').classList.add('closed');
      document.getElementById('experienceBtn').classList.remove('active');

      document.getElementById('projectspage').classList.add('closed');
      document.getElementById('projectsBtn').classList.remove('active');

      document.getElementById('aboutpage').classList.add('closed');
      document.getElementById('aboutBtn').classList.remove('active');

      document.getElementById('edupage').classList.remove('closed');
      document.getElementById('eduBtn').classList.add('active');
      break;
    case 4:
      document.getElementById('skillspage').classList.add('closed');
      document.getElementById('skillsBtn').classList.remove('active');

      document.getElementById('edupage').classList.add('closed');
      document.getElementById('eduBtn').classList.remove('active');

      document.getElementById('projectspage').classList.add('closed');
      document.getElementById('projectsBtn').classList.remove('active');

      document.getElementById('aboutpage').classList.add('closed');
      document.getElementById('aboutBtn').classList.remove('active');

      document.getElementById('experiencepage').classList.remove('closed');
      document.getElementById('experienceBtn').classList.add('active');
      break;
    case 5:
      document.getElementById('experiencepage').classList.add('closed');
      document.getElementById('experienceBtn').classList.remove('active');

      document.getElementById('edupage').classList.add('closed');
      document.getElementById('eduBtn').classList.remove('active');

      document.getElementById('projectspage').classList.add('closed');
      document.getElementById('projectsBtn').classList.remove('active');

      document.getElementById('aboutpage').classList.add('closed');
      document.getElementById('aboutBtn').classList.remove('active');

      document.getElementById('skillspage').classList.remove('closed');
      document.getElementById('skillsBtn').classList.add('active');
      break;
  }
}

function a() {
  document.getElementById('aboutpage').classList.add('closed');
}


const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
  });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 };

const elements = document.querySelectorAll('.item-load');
elements.forEach(el => {
  observer.observe(el, options);
});

function downloadFile(url) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      // Crear un objeto URL para el blob
      var blobURL = URL.createObjectURL(blob);

      // Crear un enlace temporal
      var link = document.createElement('a');
      link.href = blobURL;
      link.download = 'Sergio_Bataneros_Sanchez_Resume.pdf';

      // Hacer clic en el enlace para iniciar la descarga
      link.click();

      // Liberar el objeto URL
      URL.revokeObjectURL(blobURL);
    })
    .catch(error => {
      console.error('Error al descargar el archivo:', error);
    });
}

document.getElementById('offcanvasNavbar').addEventListener('show.bs.offcanvas', function () {
  document.getElementById('navbar-container').style.backdropFilter = 'none';
  document.getElementById('navbar-container').style['-webkit-backdrop-filter'] = 'none';
});

document.getElementById('offcanvasNavbar').addEventListener('hidden.bs.offcanvas', function () {
  document.getElementById('navbar-container').style.backdropFilter = 'blur(10px)';
  document.getElementById('navbar-container').style['-webkit-backdrop-filter'] = 'blur(10px)';
});