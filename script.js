/* =========================
   REVEAL AU SCROLL
========================= */
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
  const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  };

  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
  revealElements.forEach((el) => revealObserver.observe(el));
}

/* =========================
   NAVIGATION
========================= */
function smoothTo(e, id) {
  if (e) e.preventDefault();

  const target = document.getElementById(id);
  const header = document.querySelector("header");

  if (!target || !header) return;

  const headerH = header.offsetHeight;
  const top = target.getBoundingClientRect().top + window.scrollY - headerH;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

function toggleNav() {
  const toggle = document.getElementById("navToggle");
  const overlay = document.getElementById("navOverlay");

  if (!toggle || !overlay) return;

  toggle.classList.toggle("open");
  overlay.classList.toggle("open");
  document.body.style.overflow = overlay.classList.contains("open") ? "hidden" : "";
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (!header) return;

  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
   QUIZ
========================= */
function nextQuiz(selection) {
  const content = document.getElementById("quiz-content");
  if (!content) return;

  content.innerHTML = `
    <div class="metadata" style="margin-bottom: var(--space-xs); color: var(--c-glow);">
      ANALYSE COMPLÈTE
    </div>
    <h3 class="quiz-question" style="font-family: var(--f-serif); font-style: italic;">
      "${selection}"
    </h3>
    <p style="text-align:center; color: var(--c-text-dim); margin-bottom: var(--space-md);">
      Vos coordonnées ont été ajustées. Notre concierge va prendre le relais.
    </p>
    <div style="text-align:center;">
      <button
        class="btn-engage"
        style="opacity:1;"
        onclick="document.getElementById('assistant').scrollIntoView({behavior: 'smooth'})"
      >
        Contacter le Concierge
      </button>
    </div>
  `;
}

/* =========================
   DESTINATIONS / MODAL
========================= */
const DEST_DATA = {
  "belle-epoque": {
    img: "assets/images/paris.png",
    year: "1889",
    tag: "COORDONNÉES VERROUILLÉES // T-135 ANS",
    title: "LA BELLE<br>ÉPOQUE",
    subtitle: "Paris, Exposition Universelle — L'aube du monde moderne.",
    body:
      "L'effervescence d'un Paris électrisé par l'innovation. La Tour Eiffel vient d'être érigée, les rues s'illuminent au gaz, les salons bruissent de génies. La quintessence de l'élégance occidentale à son apogée.",
    coords: "LAT 48.8566<br>LON 2.3522<br>T -135 YRS",
    specs: [
      ["LATITUDE", "48.8566° N"],
      ["LONGITUDE", "2.3522° E"],
      ["DELTA TEMPOREL", "−135 ANS"],
      ["INDICE PARADOXE", "0.003 %"],
      ["DURÉE SÉJOUR", "72H SUBJECTIVES"],
      ["DIFFICULTÉ", "NIVEAU I — INITIÉ"],
    ],
  },
  renaissance: {
    img: "assets/images/italie.png",
    year: "1504",
    tag: "COORDONNÉES VERROUILLÉES // T-520 ANS",
    title: "LA<br>RENAISSANCE",
    subtitle: "Florence, Italie — Au cœur du génie artistique.",
    body:
      "Marchez dans les rues de Florence à l'instant précis où l'humanité a redéfini la beauté et la science. Rencontrez les ateliers des maîtres, assistez à l'émergence de la pensée moderne dans ses salons dorés.",
    coords: "LAT 43.7695<br>LON 11.2558<br>T -520 YRS",
    specs: [
      ["LATITUDE", "43.7695° N"],
      ["LONGITUDE", "11.2558° E"],
      ["DELTA TEMPOREL", "−520 ANS"],
      ["INDICE PARADOXE", "0.008 %"],
      ["DURÉE SÉJOUR", "96H SUBJECTIVES"],
      ["DIFFICULTÉ", "NIVEAU II — AVANCÉ"],
    ],
  },
  aube: {
    img: "assets/images/prehistoire.png",
    year: "−65M",
    tag: "COORDONNÉES PARTIELLES // T-65 000 000 ANS",
    title: "L'AUBE<br>DU MONDE",
    subtitle: "Crétacé supérieur — La force primordiale de la Terre.",
    body:
      "Une expédition safari ultra-sécurisée dans les jungles brumeuses du Crétacé. Observez les titans de la Terre dans leur habitat originel, sous la protection de notre bouclier holographique de classe Omega.",
    coords: "LAT UNKNOWN<br>LON UNKNOWN<br>T -65M YRS",
    specs: [
      ["LATITUDE", "INCONNUE"],
      ["LONGITUDE", "INCONNUE"],
      ["DELTA TEMPOREL", "−65 000 000 ANS"],
      ["INDICE PARADOXE", "0.000 %"],
      ["DURÉE SÉJOUR", "48H SUBJECTIVES"],
      ["DIFFICULTÉ", "NIVEAU V — EXPÉDITIONNAIRE"],
    ],
  },
};

function openDestModal(e, id) {
  if (e) e.stopPropagation();

  const modal = document.getElementById("dest-modal");
  const data = DEST_DATA[id];

  if (!modal || !data) return;

  const modalImg = document.getElementById("modal-img");
  const modalYear = document.getElementById("modal-year");
  const modalTag = document.getElementById("modal-tag");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalBody = document.getElementById("modal-body");
  const modalCoords = document.getElementById("modal-coords-display");
  const modalSpecs = document.getElementById("modal-specs");
  const tl = document.getElementById("modal-timeline-fill");

  if (!modalImg || !modalYear || !modalTag || !modalTitle || !modalSubtitle || !modalBody || !modalCoords || !modalSpecs || !tl) {
    return;
  }

  modalImg.src = data.img;
  modalImg.alt = data.subtitle;
  modalYear.textContent = data.year;
  modalTag.textContent = data.tag;
  modalTitle.innerHTML = data.title;
  modalSubtitle.textContent = data.subtitle;
  modalBody.textContent = data.body;
  modalCoords.innerHTML = data.coords;

  modalSpecs.innerHTML = data.specs
    .map(
      ([k, v]) => `
        <div class="modal-spec-row">
          <span class="spec-key">${k}</span>
          <span class="spec-val">${v}</span>
        </div>
      `
    )
    .join("");

  modal.classList.remove("closing");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  tl.style.width = "0";
  setTimeout(() => {
    tl.style.width = "100%";
  }, 80);
}

function closeDestModal() {
  const modal = document.getElementById("dest-modal");
  if (!modal || !modal.classList.contains("open")) return;

  modal.classList.add("closing");

  setTimeout(() => {
    modal.classList.remove("open", "closing");
    document.body.style.overflow = "";
  }, 600);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDestModal();
  }
});

/* =========================
   CHATBOT IA
   -> nécessite server.js lancé sur port 3000
========================= */
const chatHistory = [];

function addChatMessage(content, type = "assistant") {
  const messages = document.getElementById("chat-messages");
  if (!messages) return;

  const message = document.createElement("div");
  message.className = type === "user" ? "message user" : "message";

  if (type === "assistant") {
    message.innerHTML = `
      <span class="msg-icon"></span>
      <span>${content}</span>
    `;
  } else {
    message.innerHTML = `
      <span>${content}</span>
      <span class="msg-icon"></span>
    `;
  }

  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function addTypingIndicator() {
  const messages = document.getElementById("chat-messages");
  if (!messages) return;

  const typing = document.createElement("div");
  typing.className = "message typing";
  typing.id = "chat-typing";
  typing.innerHTML = `
    <span class="msg-icon"></span>
    <div style="display:flex;gap:4px;align-items:center">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;

  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById("chat-typing");
  if (typing) typing.remove();
}

async function sendChat() {
  const input = document.getElementById("chat-input");
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  addChatMessage(text, "user");
  chatHistory.push({ role: "user", content: text });
  input.value = "";

  addTypingIndicator();

  try {
    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
        history: chatHistory.slice(-8),
      }),
    });

    const data = await response.json();
    removeTypingIndicator();

    if (!response.ok) {
      addChatMessage(
        "Une turbulence temporelle perturbe actuellement la liaison avec le Concierge.",
        "assistant"
      );
      return;
    }

    const reply =
      data.reply ||
      "Une anomalie subtile traverse le continuum. Reformulez votre question.";

    addChatMessage(reply, "assistant");
    chatHistory.push({ role: "assistant", content: reply });
  } catch (error) {
    removeTypingIndicator();
    addChatMessage(
      "Connexion impossible au portail conversationnel. Vérifiez que le serveur du chatbot est bien lancé.",
      "assistant"
    );
  }
}

function handleChat(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendChat();
  }
}

/* =========================
   WEBGL / THREE.JS
========================= */
function initWebGL() {
  const container = document.getElementById("canvas-container");
  if (!container || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x060c11, 0.001);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = 1000;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;

  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(117, 188, 195, 0.8)");
  gradient.addColorStop(0.5, "rgba(27, 54, 63, 0.2)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 32, 32);

  const texture = new THREE.CanvasTexture(canvas);

  const geometry = new THREE.BufferGeometry();
  const particlesCount = 1500;
  const posArray = new Float32Array(particlesCount * 3);
  const scales = new Float32Array(particlesCount);

  for (let i = 0; i < particlesCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 2500;
    posArray[i + 1] = (Math.random() - 0.5) * 2000;
    posArray[i + 2] = (Math.random() - 0.5) * 2000;
    scales[i / 3] = Math.random();
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
  geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color(0x75bcc3) },
      pointTexture: { value: texture },
    },
    vertexShader: `
      attribute float scale;
      uniform float time;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float pulse = sin(position.z * 0.01 + time) * 0.5 + 0.5;
        gl_PointSize = scale * (30.0 * pulse) * (1000.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform sampler2D pointTexture;
      void main() {
        gl_FragColor = vec4(color, 1.0) * texture2D(pointTexture, gl_PointCoord);
      }
    `,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
  });

  const particlesMesh = new THREE.Points(geometry, material);
  scene.add(particlesMesh);

  const wireMaterial = new THREE.LineBasicMaterial({
    color: 0x3b747e,
    transparent: true,
    opacity: 0.1,
  });

  const geo1 = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(200, 1));
  const sphereLine = new THREE.LineSegments(geo1, wireMaterial);
  sphereLine.position.set(400, 0, -500);
  scene.add(sphereLine);

  let mouseX = 0;
  let mouseY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX - windowHalfX) * 0.5;
    mouseY = (event.clientY - windowHalfY) * 0.5;
  });

  const clock = new THREE.Clock();

  const animate = () => {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.x += 0.0002;

    const positions = particlesMesh.geometry.attributes.position.array;
    for (let i = 1; i < particlesCount * 3; i += 3) {
      positions[i] += 0.5;
      if (positions[i] > 1000) positions[i] = -1000;
    }
    particlesMesh.geometry.attributes.position.needsUpdate = true;

    material.uniforms.time.value = elapsedTime;

    camera.position.x += (mouseX - camera.position.x) * 0.02;
    camera.position.y += (-mouseY - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    sphereLine.rotation.x += 0.001;
    sphereLine.rotation.y += 0.002;

    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

if (window.innerWidth > 768) {
  initWebGL();
}

/* =========================
   LOADING SCREEN / INTRO
========================= */
function initIntroLoader() {
  const introOverlay = document.getElementById("intro-overlay");
  const bootLines = document.getElementById("boot-lines");
  const bootFill = document.getElementById("boot-fill");
  const bootPct = document.getElementById("boot-pct");
  const introFlash = document.getElementById("intro-flash");

  if (!introOverlay || !bootLines || !bootFill || !bootPct) return;

  const steps = [
    "INITIALISATION DU NOYAU CHRONOS",
    "SYNCHRONISATION DES COORDONNÉES",
    "STABILISATION DES FLUX TEMPORELS",
    "OUVERTURE DES ARCHIVES HISTORIQUES",
    "ALIGNEMENT DES RÉSONANCES",
    "CALIBRATION DES PASSERELLES",
    "SÉCURISATION DES PARADOXES",
    "CONNEXION AU CONCIERGE TEMPOREL",
  ];

  let progress = 0;
  let currentStep = 0;

  function addBootLine(text, ok = false) {
    const line = document.createElement("div");
    line.className = `boot-line${ok ? " ok" : ""}`;
    line.textContent = text;
    bootLines.appendChild(line);

    if (bootLines.children.length > 8) {
      bootLines.removeChild(bootLines.children[0]);
    }
  }

  function updateProgress(value) {
    progress = value;
    bootFill.style.width = `${progress}%`;
    bootPct.textContent = `${progress}%`;
  }

  function spawnStreaks() {
    for (let i = 0; i < 12; i++) {
      const streak = document.createElement("div");
      streak.className = "streak";
      streak.style.left = `${Math.random() * 100}%`;
      streak.style.top = `${-20 - Math.random() * 80}px`;
      streak.style.height = `${60 + Math.random() * 120}px`;
      streak.style.animationDuration = `${0.8 + Math.random() * 1.4}s`;
      streak.style.animationDelay = `${Math.random() * 0.4}s`;
      introOverlay.appendChild(streak);

      setTimeout(() => streak.remove(), 2500);
    }
  }

  addBootLine("LANCEMENT DE LA SÉQUENCE D'AMORÇAGE");

  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      addBootLine(steps[currentStep], true);
      currentStep++;
    }

    const increment = Math.floor(Math.random() * 12) + 6;
    let nextValue = progress + increment;

    if (nextValue >= 100) nextValue = 100;
    updateProgress(nextValue);

    if (nextValue >= 100) {
      clearInterval(interval);

      addBootLine("ACCÈS AUTORISÉ // PORTAIL OUVERT", true);
      spawnStreaks();

      if (introFlash) {
        introFlash.classList.add("flash");
      }

      setTimeout(() => {
        introOverlay.classList.add("fade-out");
      }, 500);

      setTimeout(() => {
        introOverlay.style.display = "none";
      }, 1700);
    }
  }, 450);
}

window.addEventListener("DOMContentLoaded", () => {
  initIntroLoader();
});