(function () {
  const quizContent = document.getElementById("quiz-content");

  if (!quizContent) return;

  const quizSteps = [
    {
      question: "Quelle expérience vous attire le plus ?",
      options: [
        { label: "Un grand moment historique et élégant", scores: { paris1889: 2, florence1504: 1, cretace65m: 0 } },
        { label: "Une aventure brute, sauvage et spectaculaire", scores: { paris1889: 0, florence1504: 0, cretace65m: 2 } },
        { label: "Une immersion dans l'art et le génie humain", scores: { paris1889: 1, florence1504: 2, cretace65m: 0 } }
      ]
    },
    {
      question: "Quel décor vous fait le plus rêver ?",
      options: [
        { label: "Les boulevards, salons et merveilles techniques", scores: { paris1889: 2, florence1504: 1, cretace65m: 0 } },
        { label: "Une jungle primitive dominée par des titans", scores: { paris1889: 0, florence1504: 0, cretace65m: 2 } },
        { label: "Des ateliers, palais et chefs-d'œuvre de la Renaissance", scores: { paris1889: 0, florence1504: 2, cretace65m: 0 } }
      ]
    },
    {
      question: "Quel mot vous correspond le mieux ?",
      options: [
        { label: "Raffinement", scores: { paris1889: 2, florence1504: 1, cretace65m: 0 } },
        { label: "Instinct", scores: { paris1889: 0, florence1504: 0, cretace65m: 2 } },
        { label: "Création", scores: { paris1889: 0, florence1504: 2, cretace65m: 0 } }
      ]
    }
  ];

  let currentStep = 0;
  let scores = {
    paris1889: 0,
    florence1504: 0,
    cretace65m: 0
  };

  function renderStep() {
    const step = quizSteps[currentStep];

    quizContent.innerHTML = `
      <div class="metadata" style="margin-bottom: var(--space-xs); color: var(--c-glow);">
        CALIBRATION ${currentStep + 1} / ${quizSteps.length}
      </div>
      <h3 class="quiz-question">${step.question}</h3>
      <div class="quiz-options">
        ${step.options
          .map(
            (option, index) => `
              <button class="quiz-btn" data-index="${index}">
                ${option.label}
              </button>
            `
          )
          .join("")}
      </div>
    `;

    const buttons = quizContent.querySelectorAll(".quiz-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const optionIndex = Number(this.dataset.index);
        handleAnswer(step.options[optionIndex]);
      });
    });
  }

  function handleAnswer(option) {
    Object.keys(option.scores).forEach((key) => {
      scores[key] += option.scores[key];
    });

    currentStep += 1;

    if (currentStep < quizSteps.length) {
      renderStep();
      return;
    }

    renderResult();
  }

  function getBestDestination() {
    let bestKey = "paris1889";

    Object.keys(scores).forEach((key) => {
      if (scores[key] > scores[bestKey]) {
        bestKey = key;
      }
    });

    return TIME_DESTINATIONS[bestKey];
  }

  function renderResult() {
    const destination = getBestDestination();

    quizContent.innerHTML = `
      <div class="metadata" style="margin-bottom: var(--space-xs); color: var(--c-glow);">
        DESTINATION RECOMMANDÉE
      </div>
      <h3 class="quiz-question" style="font-family: var(--f-serif); font-style: italic;">
        ${destination.title}
      </h3>
      <p style="text-align:center; color: var(--c-text-dim); margin-bottom: var(--space-md);">
        ${destination.description}
      </p>
      <p style="text-align:center; color: var(--c-glow); margin-bottom: var(--space-md);">
        Ambiance recommandée : ${destination.mood}
      </p>
      <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
        <button class="btn-engage" style="opacity:1;" id="quiz-chat-btn">
          Contacter le Concierge
        </button>
        <button class="btn-engage" style="opacity:1;" id="quiz-restart-btn">
          Refaire le test
        </button>
      </div>
    `;

    const chatBtn = document.getElementById("quiz-chat-btn");
    const restartBtn = document.getElementById("quiz-restart-btn");

    if (chatBtn) {
      chatBtn.addEventListener("click", function () {
        const assistantSection = document.getElementById("assistant");
        if (assistantSection) {
          assistantSection.scrollIntoView({ behavior: "smooth" });
        }

        const input = document.getElementById("chat-input");
        if (input) {
          input.value = `Je voudrais en savoir plus sur ${destination.title}.`;
        }
      });
    }

    if (restartBtn) {
      restartBtn.addEventListener("click", restartQuiz);
    }
  }

  function restartQuiz() {
    currentStep = 0;
    scores = {
      paris1889: 0,
      florence1504: 0,
      cretace65m: 0
    };

    renderStep();
  }

  window.nextQuiz = function () {
    renderStep();
  };

  renderStep();
})();