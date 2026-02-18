// ============================================================
//  PhiloSophia Quiz — script.js
//  Simple & readable JavaScript
// ============================================================


// ============================================================
//  QUESTION BANK
//  Each question is an object with these fields:
//    cat        — category: western / indian / chinese / identify / ethics / metaphysics
//    difficulty — easy / medium / hard
//    question   — the question text
//    options    — array of 4 answer choices
//    answer     — index of correct answer (0,1,2,3)
//    explanation— short fact shown after answering
//
//  For "identify" type questions you also add:
//    type           — set to "identify"
//    emoji          — fallback emoji shown in the circle (e.g. "🏛️")
//    hint           — era / clue text shown under the photo
//    imageSrc       — PATH TO YOUR IMAGE (see instructions below)
//
// ── HOW TO ADD PHILOSOPHER IMAGES ──────────────────────────
//  1. Create a folder called  images/  next to index.html
//  2. Save your image there   e.g.  images/socrates.jpg
//  3. On the question below, uncomment the imageSrc line
//     and change the filename to match your image.
//  The image will appear inside the round circle card
//  automatically when that question loads!
// ────────────────────────────────────────────────────────────

var questions = [

  // ── WESTERN ──────────────────────────────────────
  {
    cat: "western", difficulty: "easy",
    question: "Who is considered the 'Father of Western Philosophy'?",
    options: ["Plato", "Socrates", "Aristotle", "Pythagoras"],
    answer: 1,
    explanation: "Socrates (470–399 BC) pioneered the method of questioning known as the Socratic method."
  },
  {
    cat: "western", difficulty: "easy",
    question: "Plato's book containing the 'Allegory of the Cave' is called:",
    options: ["Nicomachean Ethics", "The Republic", "Meditations", "Symposium"],
    answer: 1,
    explanation: "The Republic (380 BC) uses the cave allegory to explain Plato's theory of knowledge."
  },
  {
    cat: "western", difficulty: "medium",
    question: "'Cogito, ergo sum' (I think, therefore I am) was said by:",
    options: ["Kant", "Hume", "Descartes", "Locke"],
    answer: 2,
    explanation: "Descartes wrote this in 'Discourse on the Method' (1637) — the foundation of Western rationalism."
  },
  {
    cat: "western", difficulty: "medium",
    question: "Kant's moral principle that says act only by rules you'd want everyone to follow is called:",
    options: ["Categorical Imperative", "Veil of Ignorance", "Utilitarian Calculus", "Golden Rule"],
    answer: 0,
    explanation: "The Categorical Imperative (1785) is Kant's central ethical principle."
  },
  {
    cat: "western", difficulty: "hard",
    question: "Nietzsche introduced the concept of the 'Übermensch' in which book?",
    options: ["Beyond Good and Evil", "The Birth of Tragedy", "Thus Spoke Zarathustra", "The Will to Power"],
    answer: 2,
    explanation: "Thus Spoke Zarathustra (1883) introduced the Übermensch as the next step for humanity."
  },
  {
    cat: "western", difficulty: "medium",
    question: "Which philosopher said 'existence precedes essence'?",
    options: ["Camus", "Heidegger", "Sartre", "de Beauvoir"],
    answer: 2,
    explanation: "Sartre's existentialism: humans exist first, then create their own meaning."
  },
  {
    cat: "western", difficulty: "easy",
    question: "John Locke called the mind at birth a blank slate, or:",
    options: ["Tabula Rasa", "A Priori", "Res Cogitans", "Eudaimonia"],
    answer: 0,
    explanation: "Locke's 'Tabula Rasa' — we are shaped entirely by our experiences."
  },

  // ── INDIAN ───────────────────────────────────────
  {
    cat: "indian", difficulty: "easy",
    question: "The concept of 'Dharma' in Hinduism means:",
    options: ["Cosmic order and duty", "Cycle of rebirth", "Ultimate liberation", "Sacred texts"],
    answer: 0,
    explanation: "Dharma covers moral duty, righteousness, and cosmic order in Hindu philosophy."
  },
  {
    cat: "indian", difficulty: "medium",
    question: "Buddhism's Four Noble Truths begin with the recognition of:",
    options: ["Impermanence", "Suffering (Dukkha)", "No-self", "Nirvana"],
    answer: 1,
    explanation: "The First Noble Truth: life contains Dukkha (suffering/dissatisfaction)."
  },
  {
    cat: "indian", difficulty: "medium",
    question: "Adi Shankaracharya taught that Brahman and Atman (soul and universe) are:",
    options: ["Entirely separate", "Identical — non-dual", "Complementary opposites", "Unknowable"],
    answer: 1,
    explanation: "Advaita Vedanta: 'non-duality' — the individual soul and ultimate reality are one."
  },
  {
    cat: "indian", difficulty: "easy",
    question: "The Yoga Sutras, the classical yoga philosophy text, were written by:",
    options: ["Valmiki", "Patanjali", "Vyasa", "Nagarjuna"],
    answer: 1,
    explanation: "Patanjali compiled the Yoga Sutras (~400 CE), systematizing yoga philosophy."
  },
  {
    cat: "indian", difficulty: "hard",
    question: "Jainism's supreme ethical principle of 'Ahimsa' means:",
    options: ["Non-attachment", "Non-violence to all beings", "Truthfulness", "Self-discipline"],
    answer: 1,
    explanation: "Ahimsa (non-violence) is central to Jainism and later influenced Gandhi."
  },
  {
    cat: "indian", difficulty: "hard",
    question: "Nagarjuna's concept of 'Śūnyatā' (Emptiness) means all things:",
    options: ["Do not exist", "Lack independent existence", "Are mind-created illusions", "Exist forever"],
    answer: 1,
    explanation: "Sunyata: things arise interdependently and have no fixed, inherent essence."
  },

  // ── CHINESE ──────────────────────────────────────
  {
    cat: "chinese", difficulty: "easy",
    question: "The Tao Te Ching, the foundational Taoist text, was written by:",
    options: ["Confucius", "Mencius", "Laozi", "Zhuangzi"],
    answer: 2,
    explanation: "Laozi (6th century BC) authored the Tao Te Ching, the cornerstone of Taoism."
  },
  {
    cat: "chinese", difficulty: "medium",
    question: "The Confucian virtue of 'Ren (仁)' means:",
    options: ["Ritual (Li)", "Benevolence / Humaneness", "Righteousness (Yi)", "Wisdom (Zhi)"],
    answer: 1,
    explanation: "Ren is the highest Confucian virtue — loving others and acting with humanity."
  },
  {
    cat: "chinese", difficulty: "medium",
    question: "The Taoist idea 'Wu Wei' means:",
    options: ["Complete stillness", "Effortless action with nature", "Rigid rule-following", "Passive resistance"],
    answer: 1,
    explanation: "Wu Wei — act in harmony with the natural flow, without forcing or straining."
  },
  {
    cat: "chinese", difficulty: "easy",
    question: "'The Art of War', blending military strategy with philosophy, was written by:",
    options: ["Confucius", "Sun Tzu", "Laozi", "Mencius"],
    answer: 1,
    explanation: "Sun Tzu (~5th century BC) wrote this timeless guide to strategy and wisdom."
  },
  {
    cat: "chinese", difficulty: "hard",
    question: "Mencius believed human nature is fundamentally:",
    options: ["Evil, needing strict control", "Good, needing cultivation", "Neutral, shaped by society", "A mystery"],
    answer: 1,
    explanation: "Mencius: humans are born good — moral failure comes from neglecting that goodness."
  },

  // ── IDENTIFY THE PHILOSOPHER ─────────────────────
  {
    cat: "identify", difficulty: "easy",
    type: "identify",
    emoji: "🏛️",
    hint: "Ancient Greece • 'Know thyself' • Died by hemlock • 470–399 BC",
    // ── IMAGE: uncomment the line below and set your image path ──
    // imageSrc: "images/socrates.jpg",
    question: "He never wrote anything. His student Plato recorded all his ideas. He was executed in Athens for 'corrupting youth'. Who is he?",
    options: ["Plato", "Socrates", "Diogenes", "Heraclitus"],
    answer: 1,
    explanation: "Socrates invented the method of dialogue-based thinking we still call the 'Socratic method'."
  },
  {
    cat: "identify", difficulty: "medium",
    type: "identify",
    emoji: "🌿",
    hint: "Germany • 'God is dead' • 1844–1900 • Beyond Good and Evil",
    // ── IMAGE: uncomment the line below and set your image path ──
    // imageSrc: "images/nietzsche.jpg",
    question: "This German philosopher declared 'God is dead', invented the Übermensch, and went mad in his final years. Who?",
    options: ["Karl Marx", "Schopenhauer", "Friedrich Nietzsche", "Hegel"],
    answer: 2,
    explanation: "Nietzsche's ideas on power, morality and culture changed modern philosophy forever."
  },
  {
    cat: "identify", difficulty: "medium",
    type: "identify",
    emoji: "🪷",
    hint: "Ancient India • Born a prince • Enlightened under Bodhi tree • ~563–483 BC",
    // ── IMAGE: uncomment the line below and set your image path ──
    // imageSrc: "images/buddha.jpg",
    question: "He was born a prince, gave up all wealth after seeing suffering, and founded one of the world's great philosophical traditions. Who?",
    options: ["Mahavira", "Siddhartha Gautama", "Shankaracharya", "Nagarjuna"],
    answer: 1,
    explanation: "Siddhartha became the Buddha ('the Awakened One') and taught the path to end suffering."
  },
  {
    cat: "identify", difficulty: "hard",
    type: "identify",
    emoji: "📜",
    hint: "Ancient China • Analects • Filial piety • 551–479 BC",
    // ── IMAGE: uncomment the line below and set your image path ──
    // imageSrc: "images/confucius.jpg",
    question: "This Chinese thinker believed good governance flows from personal virtue, and shaped East Asian culture for thousands of years. Who?",
    options: ["Laozi", "Mencius", "Confucius", "Mozi"],
    answer: 2,
    explanation: "Confucius' ethical teachings, recorded in the Analects, became the foundation of Chinese society."
  },
  {
    cat: "identify", difficulty: "hard",
    type: "identify",
    emoji: "🦋",
    hint: "Taoist master • China • Dream of being a butterfly • ~369–286 BC",
    // ── IMAGE: uncomment the line below and set your image path ──
    // imageSrc: "images/zhuangzi.jpg",
    question: "This philosopher dreamed he was a butterfly, then woke and wondered — was he a man who dreamed of a butterfly, or a butterfly dreaming of being a man?",
    options: ["Laozi", "Zhuangzi", "Han Fei", "Xunzi"],
    answer: 1,
    explanation: "Zhuangzi's Butterfly Dream is one of philosophy's greatest meditations on identity."
  },

  // ── ETHICS ───────────────────────────────────────
  {
    cat: "ethics", difficulty: "easy",
    question: "The theory that the right action is whatever produces the most happiness is called:",
    options: ["Deontology", "Utilitarianism", "Virtue Ethics", "Nihilism"],
    answer: 1,
    explanation: "Utilitarianism (developed by Bentham and Mill) judges actions by their outcomes."
  },
  {
    cat: "ethics", difficulty: "medium",
    question: "Aristotle's 'Eudaimonia' is best translated as:",
    options: ["Pleasure", "Duty", "Flourishing / well-being", "Justice"],
    answer: 2,
    explanation: "Eudaimonia is the highest human good — living and doing well through virtuous action."
  },
  {
    cat: "ethics", difficulty: "medium",
    question: "John Rawls' fairness test — imagining you don't know your place in society — is called:",
    options: ["The Trolley Problem", "The Veil of Ignorance", "The Prisoner's Dilemma", "The Original Position"],
    answer: 1,
    explanation: "Rawls' Veil of Ignorance (1971): design a fair society without knowing your role in it."
  },
  {
    cat: "ethics", difficulty: "hard",
    question: "Which theory judges actions purely by their consequences, not intentions?",
    options: ["Deontology", "Virtue Ethics", "Consequentialism", "Divine Command"],
    answer: 2,
    explanation: "Consequentialism: the ends can justify the means — only outcomes matter."
  },

  // ── METAPHYSICS ───────────────────────────────────
  {
    cat: "metaphysics", difficulty: "medium",
    question: "Plato's Theory of Forms says the physical world is:",
    options: ["The only true reality", "A perfect reflection of ideas", "A shadow of perfect eternal Forms", "A divine illusion"],
    answer: 2,
    explanation: "For Plato, material things are imperfect copies of perfect, eternal Forms."
  },
  {
    cat: "metaphysics", difficulty: "medium",
    question: "In Hindu philosophy, 'Maya' refers to:",
    options: ["The universal soul", "Cosmic illusion hiding true reality", "Sacred rituals", "Time cycles"],
    answer: 1,
    explanation: "Maya is the illusion that makes the physical world seem ultimate, hiding Brahman."
  },
  {
    cat: "metaphysics", difficulty: "hard",
    question: "Leibniz called the fundamental units of reality (non-physical, mind-like) his:",
    options: ["Atoms", "Qualia", "Monads", "Phenomena"],
    answer: 2,
    explanation: "Leibniz's Monadology (1714): the universe is made of windowless, conscious monads."
  }

];


// ============================================================
//  GAME SETTINGS
// ============================================================
var TIME_LIMIT  = { easy: 40, medium: 30, hard: 20 };
var BASE_POINTS = { easy: 80, medium: 100, hard: 150 };
// Bonus points for keeping a streak (index = streak count)
var STREAK_BONUS = [0, 0, 20, 40, 60, 100];


// ============================================================
//  GAME STATE  (simple variables, easy to read)
// ============================================================
var pool       = [];   // questions for this game session
var qIndex     = 0;    // current question number
var score      = 0;
var streak     = 0;
var bestStreak = 0;
var correct    = 0;
var answered   = false;
var timer      = null;
var timeLeft   = 30;
var timeTotal  = 30;
var userLog    = [];   // stores { question, chosen, isCorrect }
var selCat     = "all";
var selDiff    = "medium";


// ============================================================
//  SHORTCUT: get element by id
// ============================================================
function el(id) { return document.getElementById(id); }


// ============================================================
//  SHOW / HIDE SCREENS
// ============================================================
function showScreen(id) {
  // hide all screens
  document.querySelectorAll(".screen").forEach(function(s) {
    s.classList.remove("active");
  });
  // show the target screen (re-trigger animation)
  var target = el(id);
  target.classList.add("active");
  target.style.animation = "none";
  target.offsetHeight;           // force browser reflow
  target.style.animation = "";
}


// ============================================================
//  CATEGORY PILLS — click to select
// ============================================================
document.querySelectorAll(".pill").forEach(function(pill) {
  pill.addEventListener("click", function() {
    document.querySelectorAll(".pill").forEach(function(p) { p.classList.remove("active"); });
    pill.classList.add("active");
    selCat = pill.dataset.cat;
  });
});


// ============================================================
//  DIFFICULTY BUTTONS — click to select
// ============================================================
document.querySelectorAll(".diff").forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".diff").forEach(function(b) { b.classList.remove("active"); });
    btn.classList.add("active");
    selDiff = btn.dataset.diff;
  });
});


// ============================================================
//  START GAME
// ============================================================
el("startBtn").addEventListener("click", startGame);

function startGame() {
  // Filter questions by chosen category and difficulty
  pool = questions.filter(function(q) {
    var catOk  = (selCat === "all") || (q.cat === selCat);
    var diffOk = (selDiff === "all") || (q.difficulty === selDiff);
    return catOk && diffOk;
  });

  // If we got too few questions, drop the difficulty filter
  if (pool.length < 5) {
    pool = questions.filter(function(q) {
      return (selCat === "all") || (q.cat === selCat);
    });
  }
  // Last resort — use all questions
  if (pool.length < 5) pool = questions.slice();

  // Shuffle and take 10
  pool = shuffle(pool).slice(0, 10);

  // Reset state
  qIndex     = 0;
  score      = 0;
  streak     = 0;
  bestStreak = 0;
  correct    = 0;
  userLog    = [];

  showScreen("gameScreen");
  loadQuestion();
}


// ============================================================
//  LOAD A QUESTION
// ============================================================
function loadQuestion() {
  var q = pool[qIndex];
  answered = false;

  // Update HUD
  el("scoreVal").textContent = score;
  updateStreak();
  updateProgress();

  // Reset timer
  clearInterval(timer);
  timeTotal = TIME_LIMIT[selDiff] || 30;
  timeLeft  = timeTotal;
  el("timerNum").textContent = timeLeft;
  updateTimerRing();
  timer = setInterval(tickTimer, 1000);

  // Badges
  el("qNum").textContent = "📚 Q" + (qIndex + 1);
  var catName = {
    western:    "🏛️ Western",
    indian:     "🪷 Indian",
    chinese:    "🀄 Chinese",
    identify:   "🔍 Identify",
    ethics:     "⚖️ Ethics",
    metaphysics:"🌌 Metaphysics"
  };
  el("qCat").textContent = catName[q.cat] || "🌍 Philosophy";

  // ── PHILOSOPHER CARD (only for "identify" questions) ──────
  var philCard    = el("philCard");
  var philImgWrap = el("philImgWrap");
  var philHint    = el("philHint");

  if (q.type === "identify") {
    philCard.classList.remove("hidden");
    philHint.textContent = q.hint || "Who is this philosopher?";

    // Clear previous content
    philImgWrap.innerHTML = "";

    if (q.imageSrc) {
      // ── REAL IMAGE PATH is set on this question ────────────
      // This is where your Pinterest/Google image appears!
      // The image fills the round circle in the card.
      var img = document.createElement("img");
      img.src = q.imageSrc;
      img.alt = "philosopher";
      philImgWrap.appendChild(img);
      // ─────────────────────────────────────────────────────
    } else {
      // No image → show animated emoji blob instead
      var blob = document.createElement("div");
      blob.className   = "emoji-blob";
      blob.textContent = q.emoji || "❓";
      philImgWrap.appendChild(blob);
    }
  } else {
    philCard.classList.add("hidden");
  }
  // ─────────────────────────────────────────────────────────

  // Question text
  el("qText").textContent = q.question;

  // Build answer buttons
  var optionsEl = el("options");
  optionsEl.innerHTML = "";
  var letters = ["A", "B", "C", "D"];

  q.options.forEach(function(opt, i) {
    var btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.innerHTML =
      '<span class="opt-letter">' + letters[i] + '</span>' +
      '<span>' + opt + '</span>';

    // Stagger the appearance of each button
    btn.style.opacity   = "0";
    btn.style.transform = "translateY(16px)";
    btn.style.transition = "opacity 0.35s ease " + (i * 0.07) + "s, transform 0.35s ease " + (i * 0.07) + "s";

    btn.addEventListener("click", function() { selectAnswer(i, btn); });
    optionsEl.appendChild(btn);

    // Trigger animation
    requestAnimationFrame(function() {
      btn.style.opacity   = "1";
      btn.style.transform = "translateY(0)";
    });
  });

  // Hide feedback and next button
  el("feedback").className = "feedback hidden";
  el("nextBtn").className  = "btn-next hidden";
}


// ============================================================
//  TIMER
// ============================================================
function tickTimer() {
  timeLeft--;
  el("timerNum").textContent = timeLeft;
  updateTimerRing();
  if (timeLeft <= 0) {
    clearInterval(timer);
    handleTimeout();
  }
}

function updateTimerRing() {
  var circumference = 125;
  var fraction = timeLeft / timeTotal;
  el("ringCircle").style.strokeDashoffset = circumference * (1 - fraction);
  // Change color as time runs low
  if (timeLeft > 10)      el("ringCircle").style.stroke = "var(--yellow)";
  else if (timeLeft > 5)  el("ringCircle").style.stroke = "var(--pink)";
  else                    el("ringCircle").style.stroke = "var(--red)";
}

function handleTimeout() {
  if (answered) return;
  answered = true;

  var q    = pool[qIndex];
  var btns = el("options").querySelectorAll(".opt-btn");
  btns[q.answer].classList.add("correct");
  btns.forEach(function(b) { b.disabled = true; });

  streak = 0;
  updateStreak();
  userLog.push({ q: q, chosen: -1, isCorrect: false });
  showFeedback("timeout", "⏰ Time's up!", "Correct: " + q.options[q.answer] + " • " + q.explanation);
  showNextBtn();
}


// ============================================================
//  SELECT AN ANSWER
// ============================================================
function selectAnswer(index, clickedBtn) {
  if (answered) return;
  answered = true;
  clearInterval(timer);

  var q    = pool[qIndex];
  var btns = el("options").querySelectorAll(".opt-btn");

  // Disable all buttons
  btns.forEach(function(b) { b.disabled = true; b.classList.add("faded"); });
  clickedBtn.classList.remove("faded");

  var isCorrect = (index === q.answer);

  if (isCorrect) {
    clickedBtn.classList.add("correct");
    streak++;
    correct++;
    if (streak > bestStreak) bestStreak = streak;

    // Calculate points
    var base    = BASE_POINTS[selDiff] || 100;
    var timePts = Math.floor(timeLeft * 2);
    var bonusPts= STREAK_BONUS[Math.min(streak, 5)];
    var total   = base + timePts + bonusPts;
    score += total;
    el("scoreVal").textContent = score;

    if (streak >= 2) showCombo(streak);
    launchConfetti(6);
    showFeedback("correct", pickCorrectMsg(), "+" + total + " pts • " + q.explanation);

  } else {
    clickedBtn.classList.add("wrong");
    btns[q.answer].classList.remove("faded");
    btns[q.answer].classList.add("correct");
    streak = 0;
    showFeedback("wrong", pickWrongMsg(), "Answer: " + q.options[q.answer] + " • " + q.explanation);
  }

  updateStreak();
  userLog.push({ q: q, chosen: index, isCorrect: isCorrect });
  showNextBtn();
}


// ============================================================
//  PROGRESS BAR & STREAK DOTS
// ============================================================
function updateProgress() {
  var total = pool.length;
  var pct   = Math.round((qIndex / total) * 100);
  el("progFill").style.width  = pct + "%";
  el("progLabel").textContent = "Q" + (qIndex + 1) + " of " + total;
  el("progPct").textContent   = pct + "%";
}

function updateStreak() {
  for (var i = 0; i < 5; i++) {
    var dot = el("d" + i);
    if (i < streak) dot.classList.add("on");
    else             dot.classList.remove("on");
  }
}


// ============================================================
//  FEEDBACK BAR
// ============================================================
function showFeedback(type, title, sub) {
  var fb = el("feedback");
  fb.className  = "feedback " + type;
  el("fbEmoji").textContent = type === "correct" ? "🎉" : type === "wrong" ? "💡" : "⏰";
  el("fbTitle").textContent = title;
  el("fbSub").textContent   = sub;
}

function showNextBtn() {
  var btn = el("nextBtn");
  btn.className   = "btn-next";
  btn.textContent = (qIndex + 1 >= pool.length) ? "See Results 🎯" : "Next Question →";
}

el("nextBtn").addEventListener("click", function() {
  qIndex++;
  if (qIndex >= pool.length) showResults();
  else loadQuestion();
});


// ============================================================
//  COMBO TOAST
// ============================================================
function showCombo(n) {
  el("comboNum").textContent = n;
  el("comboToast").classList.add("show");
  setTimeout(function() { el("comboToast").classList.remove("show"); }, 2000);
}


// ============================================================
//  CONFETTI
// ============================================================
function launchConfetti(count) {
  var colors = ["#7c3aed","#ec4899","#fbbf24","#22c55e","#3b82f6","#f97316"];
  var box    = el("confetti");
  for (var i = 0; i < count; i++) {
    var p = document.createElement("div");
    p.className              = "c-piece";
    p.style.left             = Math.random() * 100 + "vw";
    p.style.width            = (7 + Math.random() * 9) + "px";
    p.style.height           = (7 + Math.random() * 9) + "px";
    p.style.background       = colors[Math.floor(Math.random() * colors.length)];
    p.style.borderRadius     = Math.random() > 0.5 ? "50%" : "3px";
    p.style.animationDuration= (1.5 + Math.random() * 2) + "s";
    p.style.animationDelay   = Math.random() * 0.5 + "s";
    box.appendChild(p);
    setTimeout(function() { if (p.parentNode) p.parentNode.removeChild(p); }, 4000);
  }
}


// ============================================================
//  RESULTS SCREEN
// ============================================================
function showResults() {
  clearInterval(timer);

  var total    = pool.length;
  var accuracy = Math.round((correct / total) * 100);

  el("stScore").textContent   = score;
  el("stCorrect").textContent = correct + "/" + total;
  el("stAcc").textContent     = accuracy + "%";

  // Pick rank based on accuracy
  var trophy, title, desc;
  if      (accuracy >= 90) { trophy = "🏆"; title = "Grand Philosopher!";  desc = "Socrates himself would bow!"; }
  else if (accuracy >= 70) { trophy = "🥇"; title = "Sage of the Ages";    desc = "Deep wisdom flows through you!"; }
  else if (accuracy >= 50) { trophy = "🥈"; title = "Curious Seeker";      desc = "The unexamined life is worth examining!"; }
  else if (accuracy >= 30) { trophy = "🥉"; title = "The Apprentice";       desc = "Every philosopher starts somewhere!"; }
  else                      { trophy = "📜"; title = "The Initiate";         desc = "Begin your journey into the examined life!"; }

  el("trophyIcon").textContent = trophy;
  el("overTitle").textContent  = title;
  el("overSub").textContent    = desc;
  el("rankEmoji").textContent  = trophy;
  el("rankTitle").textContent  = title;
  el("rankDesc").textContent   = "Accuracy: " + accuracy + "% • Best Streak: " + bestStreak;

  // Build review list
  var list = el("reviewList");
  list.innerHTML = "";
  userLog.forEach(function(entry) {
    var q          = entry.q;
    var isCorrect  = entry.isCorrect;
    var chosenText = entry.chosen === -1 ? "Timed out" : q.options[entry.chosen];

    var div = document.createElement("div");
    div.className = "review-item " + (isCorrect ? "ok" : "bad");

    var answerLine = isCorrect
      ? 'Your answer: <b style="color:var(--green)">' + chosenText + '</b>'
      : 'Your answer: <b style="color:var(--red)">' + chosenText + '</b> → Correct: <b style="color:var(--green)">' + q.options[q.answer] + '</b>';

    div.innerHTML =
      '<span class="review-icon">' + (isCorrect ? "✅" : "❌") + '</span>' +
      '<div>' +
        '<p class="review-q">' + q.question.substring(0, 62) + (q.question.length > 62 ? "..." : "") + '</p>' +
        '<p class="review-a">' + answerLine + '</p>' +
      '</div>';

    list.appendChild(div);
  });

  showScreen("overScreen");
  if (accuracy >= 70) launchConfetti(28);
}



//  RESTART & HOME BUTTONS

el("againBtn").addEventListener("click", startGame);
el("homeBtn").addEventListener("click", function() { showScreen("startScreen"); });



//  HELPER FUNCTIONS

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function pickCorrectMsg() {
  var msgs = [
    "Brilliant! Socrates approves!",
    "Correct! Your wisdom grows!",
    "Outstanding! The Oracle speaks!",
    "Perfect! You think like a sage!",
    "Magnificent! Pure enlightenment!"
  ];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

function pickWrongMsg() {
  var msgs = [
    "Not quite! But questioning is wisdom...",
    "Even Socrates got stumped sometimes!",
    "The path to truth has many turns!",
    "Learn and grow, young philosopher!",
    "Seek deeper — truth awaits!"
  ];
  return msgs[Math.floor(Math.random() * msgs.length)];
}
