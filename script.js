

const ALL_QUESTIONS = [

  
  // WESTERN PHILOSOPHY

  {
    cat: "western", difficulty: "easy",
    question: "Who is considered the 'Father of Western Philosophy'?",
    options: ["Plato", "Socrates", "Aristotle", "Pythagoras"],
    answer: 1,
    explanation: "Socrates (470–399 BC) pioneered the Socratic method and is the foundational figure of Western thought."
  },
  {
    cat: "western", difficulty: "easy",
    question: "Plato's most famous work that contains the 'Allegory of the Cave' is called:",
    options: ["Nicomachean Ethics", "The Republic", "Meditations", "Symposium"],
    answer: 1,
    explanation: "The Republic (c. 380 BC) contains the famous allegory in Book VII, illustrating the nature of reality."
  },
  {
    cat: "western", difficulty: "medium",
    question: "René Descartes' declaration 'Cogito, ergo sum' translates to:",
    options: ["I doubt, therefore I exist", "I think, therefore I am", "I feel, therefore I live", "I know, therefore I wonder"],
    answer: 1,
    explanation: "The phrase from 'Discourse on the Method' (1637) is the foundational element of Western rationalism."
  },
  {
    cat: "western", difficulty: "medium",
    question: "Immanuel Kant's moral principle requiring acting only according to universal laws is called the:",
    options: ["Categorical Imperative", "Veil of Ignorance", "Utilitarian Calculus", "Golden Rule"],
    answer: 0,
    explanation: "The Categorical Imperative from 'Groundwork of the Metaphysics of Morals' (1785) is Kant's central ethical principle."
  },
  {
    cat: "western", difficulty: "hard",
    question: "Nietzsche's concept of the 'Übermensch' was introduced in which work?",
    options: ["Beyond Good and Evil", "The Birth of Tragedy", "Thus Spoke Zarathustra", "The Will to Power"],
    answer: 2,
    explanation: "Thus Spoke Zarathustra (1883–85) introduced the Übermensch as the goal humanity should set for itself."
  },
  {
    cat: "western", difficulty: "hard",
    question: "The 'Ship of Theseus' paradox primarily explores the concept of:",
    options: ["Temporal logic", "Personal identity and persistence", "Free will vs determinism", "The nature of causality"],
    answer: 1,
    explanation: "The paradox questions what makes an object 'the same object' over time — fundamental to identity philosophy."
  },
  {
    cat: "western", difficulty: "medium",
    question: "Which philosopher argued that 'existence precedes essence'?",
    options: ["Albert Camus", "Martin Heidegger", "Jean-Paul Sartre", "Simone de Beauvoir"],
    answer: 2,
    explanation: "Sartre's existentialist position holds that humans first exist and then define themselves through choices."
  },
  {
    cat: "western", difficulty: "easy",
    question: "John Locke described the mind at birth as a blank slate, or:",
    options: ["Tabula Rasa", "A Priori", "Res Cogitans", "Eudaimonia"],
    answer: 0,
    explanation: "Tabula Rasa ('blank slate') is central to Locke's empiricist theory in 'An Essay Concerning Human Understanding'."
  },


  // INDIAN PHILOSOPHY  

  {
    cat: "indian", difficulty: "easy",
    question: "The concept of 'Dharma' in Hinduism primarily refers to:",
    options: ["Cosmic order and moral duty", "The cycle of rebirth", "Ultimate liberation", "Sacred texts"],
    answer: 0,
    explanation: "Dharma encompasses cosmic order, righteousness, and one's moral duty in Hindu philosophy."
  },
  {
    cat: "indian", difficulty: "medium",
    question: "Buddhism's 'Four Noble Truths' begin with the recognition of:",
    options: ["Impermanence (Anicca)", "Suffering (Dukkha)", "No-self (Anatta)", "Nirvana"],
    answer: 1,
    explanation: "The First Noble Truth identifies Dukkha (suffering/unsatisfactoriness) as an intrinsic part of existence."
  },
  {
    cat: "indian", difficulty: "hard",
    question: "Nagarjuna's philosophical concept of 'Śūnyatā' (Emptiness) means that all phenomena:",
    options: ["Do not exist at all", "Lack inherent independent existence", "Are illusions of the mind", "Exist eternally unchanged"],
    answer: 1,
    explanation: "Śūnyatā doesn't mean nothingness — it means phenomena arise dependently and lack intrinsic essence."
  },
  {
    cat: "indian", difficulty: "medium",
    question: "In Advaita Vedanta, Adi Shankaracharya's central teaching is that Brahman and Atman are:",
    options: ["Entirely separate", "Identical — non-dual", "Complementary opposites", "Unknowable"],
    answer: 1,
    explanation: "Advaita ('non-duality') holds that the individual soul (Atman) and ultimate reality (Brahman) are one and the same."
  },
  {
    cat: "indian", difficulty: "easy",
    question: "The 'Yoga Sutras', the classical text on yoga philosophy, were composed by:",
    options: ["Valmiki", "Patanjali", "Vyasa", "Nagarjuna"],
    answer: 1,
    explanation: "Patanjali compiled the Yoga Sutras (~400 CE), systematizing the philosophy and practice of yoga."
  },
  {
    cat: "indian", difficulty: "hard",
    question: "Jainism's core ethical principle of 'Ahimsa' means:",
    options: ["Non-attachment", "Non-violence towards all living beings", "Truthfulness", "Self-discipline"],
    answer: 1,
    explanation: "Ahimsa (non-violence) is the supreme Jain ethical principle — it influenced Mahatma Gandhi's philosophy."
  },
  {
    cat: "indian", difficulty: "medium",
    question: "The Upanishads are primarily concerned with:",
    options: ["Ritual sacrifices", "The nature of Brahman and Atman", "Political governance", "Grammar and linguistics"],
    answer: 1,
    explanation: "The Upanishads (800–200 BCE) are philosophical texts exploring the relationship between the individual soul and ultimate reality."
  },

  
  // CHINESE PHILOSOPHY  
 
  {
    cat: "chinese", difficulty: "easy",
    question: "The Tao Te Ching, the foundational text of Taoism, was written by:",
    options: ["Confucius", "Mencius", "Laozi", "Zhuangzi"],
    answer: 2,
    explanation: "Laozi (6th century BC) is the legendary author of the Tao Te Ching, the cornerstone of Taoist philosophy."
  },
  {
    cat: "chinese", difficulty: "medium",
    question: "Confucius placed supreme importance on which virtue, meaning 'benevolence' or 'humaneness'?",
    options: ["Li (礼)", "Ren (仁)", "Yi (义)", "Zhi (智)"],
    answer: 1,
    explanation: "Ren (仁), often translated as benevolence or humaneness, is the central virtue in Confucian ethics."
  },
  {
    cat: "chinese", difficulty: "medium",
    question: "In Taoism, 'Wu Wei' literally means 'non-action' and represents:",
    options: ["Complete inactivity", "Effortless action aligned with nature", "Rigid rule-following", "Passive resistance"],
    answer: 1,
    explanation: "Wu Wei means acting in harmony with the natural flow of the universe — not forcing, but flowing."
  },
  {
    cat: "chinese", difficulty: "hard",
    question: "The Zen Buddhist concept of sudden enlightenment through paradoxical riddles is called:",
    options: ["Satori", "Koan", "Zazen", "Mondo"],
    answer: 1,
    explanation: "Koans are paradoxical anecdotes used in Rinzai Zen to break conceptual thinking and trigger enlightenment."
  },
  {
    cat: "chinese", difficulty: "easy",
    question: "Which Chinese philosopher wrote 'The Art of War', blending military strategy with philosophical wisdom?",
    options: ["Confucius", "Sun Tzu", "Laozi", "Mencius"],
    answer: 1,
    explanation: "'The Art of War' by Sun Tzu (~5th century BC) is both a military treatise and a philosophical guide to strategy."
  },
  {
    cat: "chinese", difficulty: "hard",
    question: "Mencius, the successor to Confucius, argued that human nature is fundamentally:",
    options: ["Evil, requiring strict rules", "Good, needing cultivation", "Neutral, shaped by environment", "Unknowable"],
    answer: 1,
    explanation: "Mencius held that humans are born good and that moral failure comes from neglecting this innate goodness."
  },
  {
    cat: "chinese", difficulty: "medium",
    question: "Zhuangzi's famous 'Butterfly Dream' questions the nature of:",
    options: ["Time and memory", "Identity and reality", "Good and evil", "Life and death"],
    answer: 1,
    explanation: "Zhuangzi dreamed he was a butterfly and pondered: was he a man who dreamed of being a butterfly, or vice versa?"
  },


  // IDENTIFY THE PHILOSOPHER  

  {
    cat: "identify", difficulty: "easy",
    type: "identify",
    philosopherEmoji: "🏛️",
    philosopherHint: "Ancient Greek • 'Know thyself' • Executed by hemlock in 399 BC",
     imageSrc: "sukrat.jpg",
    question: "This ancient Greek philosopher believed in questioning everything and never wrote a single word. His student Plato documented his teachings. Who is he?",
    options: ["Plato", "Socrates", "Diogenes", "Heraclitus"],
    answer: 1,
    explanation: "Socrates' method of questioning (the Socratic Method) laid the groundwork for critical thinking."
  },
  {
    cat: "identify", difficulty: "medium",
    type: "identify",
    philosopherEmoji: "🌿",
    philosopherHint: "German • 'God is dead' • Works: Beyond Good and Evil, Zarathustra • 1844–1900",
     imageSrc: "Fedrich.jpg",
    question: "This German philosopher championed the 'will to power,' critiqued Christian morality, and envisioned the Übermensch. Who is he?",
    options: ["Karl Marx", "Arthur Schopenhauer", "Friedrich Nietzsche", "Georg Hegel"],
    answer: 2,
    explanation: "Nietzsche's radical ideas about morality, religion, and human potential made him one of the most influential modern philosophers."
  },
  {
    cat: "identify", difficulty: "medium",
    type: "identify",
    philosopherEmoji: "🪷",
    philosopherHint: "Ancient India • Born prince • Attained enlightenment under Bodhi tree • ~563–483 BC",
     imageSrc: "buddha.jpg",
    question: "Born into royalty, this thinker abandoned wealth after witnessing suffering, meditated for years, and founded one of the world's great philosophical traditions. Who?",
    options: ["Mahavira", "Siddhartha Gautama", "Adi Shankaracharya", "Nagarjuna"],
    answer: 1,
    explanation: "Siddhartha Gautama became the Buddha ('the Awakened One') and taught the Dharma, founding Buddhism."
  },
  {
    cat: "identify", difficulty: "hard",
    type: "identify",
    philosopherEmoji: "📜",
    philosopherHint: "Ancient China • Virtue-based governance • The Analects • 551–479 BC",
     imageSrc: "confucisas.jpg",
    question: "This Chinese thinker emphasized social harmony, filial piety, and virtuous governance. His teachings shaped East Asian civilizations for millennia. Who is he?",
    options: ["Laozi", "Mencius", "Confucius", "Mozi"],
    answer: 2,
    explanation: "Confucius' social and ethical philosophy, recorded in the Analects, profoundly shaped Chinese culture."
  },
  {
    cat: "identify", difficulty: "hard",
    type: "identify",
    philosopherEmoji: "🦋",
    philosopherHint: "Taoist master • Dream of being a butterfly • Relativism • ~369–286 BC",
    imageSrc: "zhuangji.jpg",
    question: "This Taoist philosopher once dreamt he was a butterfly and questioned whether he was a man dreaming of being a butterfly, or vice versa. Who?",
    options: ["Laozi", "Zhuangzi", "Han Fei", "Xunzi"],
    answer: 1,
    explanation: "Zhuangzi's 'Butterfly Dream' is one of philosophy's most famous meditations on identity and reality."
  },


  // ETHICS  

  {
    cat: "ethics", difficulty: "easy",
    question: "Utilitarianism, the ethical theory that actions are right if they maximize happiness, was developed by:",
    options: ["Immanuel Kant", "John Stuart Mill", "Aristotle", "David Hume"],
    answer: 1,
    explanation: "John Stuart Mill refined Jeremy Bentham's utilitarianism in his 1863 work 'Utilitarianism.'"
  },
  {
    cat: "ethics", difficulty: "medium",
    question: "Aristotle's concept of 'Eudaimonia' is best translated as:",
    options: ["Pleasure", "Duty", "Flourishing / happiness", "Virtue"],
    answer: 2,
    explanation: "Eudaimonia — the highest human good — means a life well-lived through virtuous activity, not mere pleasure."
  },
  {
    cat: "ethics", difficulty: "medium",
    question: "John Rawls' theory of justice uses a thought experiment called:",
    options: ["The Trolley Problem", "The Veil of Ignorance", "The Prisoner's Dilemma", "The Original Position"],
    answer: 1,
    explanation: "The Veil of Ignorance (from 'A Theory of Justice', 1971) asks us to choose principles without knowing our place in society."
  },
  {
    cat: "ethics", difficulty: "hard",
    question: "Which ethical theory holds that the morality of an action depends entirely on its consequences?",
    options: ["Deontology", "Virtue Ethics", "Consequentialism", "Divine Command Theory"],
    answer: 2,
    explanation: "Consequentialism judges actions solely by their outcomes — the ends can justify the means."
  },


  // METAPHYSICS  

  {
    cat: "metaphysics", difficulty: "medium",
    question: "Plato's 'Theory of Forms' suggests that the physical world is:",
    options: ["The only true reality", "A perfect reflection of ideas", "A mere shadow of the world of perfect Forms", "An illusion created by the gods"],
    answer: 2,
    explanation: "For Plato, the material world is an imperfect copy of the perfect, eternal realm of Forms (Ideas)."
  },
  {
    cat: "metaphysics", difficulty: "medium",
    question: "In Hindu philosophy, the concept of 'Maya' refers to:",
    options: ["The universal soul", "Illusion — the veil hiding true reality", "Sacred ritual", "Cosmic time cycles"],
    answer: 1,
    explanation: "Maya is the cosmic illusion that makes the phenomenal world appear as ultimate reality, veiling Brahman."
  },
  {
    cat: "metaphysics", difficulty: "hard",
    question: "Leibniz proposed that the universe is made of fundamental, indivisible units of consciousness called:",
    options: ["Atoms", "Qualia", "Monads", "Phenomena"],
    answer: 2,
    explanation: "Leibniz's Monadology (1714) described monads as ultimate elements of the universe — non-spatial, conscious units."
  },
  {
    cat: "metaphysics", difficulty: "hard",
    question: "Heidegger's fundamental question 'Why is there something rather than nothing?' explores:",
    options: ["Ethics of existence", "The question of Being (Seinsfrage)", "Linguistic philosophy", "Political theory"],
    answer: 1,
    explanation: "The Seinsfrage (question of Being) is the central concern of Heidegger's 'Being and Time' (1927)."
  }

];


// GAME STATE

const state = {
  questions: [],
  current: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  correct: 0,
  answered: false,
  timer: null,
  timeLeft: 30,
  timeTotal: 30,
  selectedCat: 'all',
  selectedDiff: 'medium',
  userAnswers: [],
  difficulty: 'medium'
};

const TIME_BY_DIFF   = { easy: 40, medium: 30, hard: 20 };
const POINTS_BY_DIFF = { easy: 80, medium: 100, hard: 150 };
const STREAK_BONUS   = [0, 0, 20, 40, 60, 100]; // bonus at streak 0–5+


// DOM HELPERS

const $ = id => document.getElementById(id);

const startScreen    = $('startScreen');
const gameScreen     = $('gameScreen');
const gameoverScreen = $('gameoverScreen');


// SCREEN TRANSITIONS

function showScreen(id) {
  [startScreen, gameScreen, gameoverScreen].forEach(s => s.classList.remove('active'));
  const target = $(id);
  target.classList.add('active');
  // Re-trigger animation
  target.style.animation = 'none';
  target.offsetHeight; // reflow
  target.style.animation = '';
}


// CATEGORY PILLS

document.querySelectorAll('.cat-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('selected'));
    pill.classList.add('selected');
    state.selectedCat = pill.dataset.cat;
  });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.selectedDiff = btn.dataset.diff;
  });
});


// START GAME

$('startBtn').addEventListener('click', startGame);

function startGame() {
 
  let pool = ALL_QUESTIONS.filter(q => {
    const catOk  = state.selectedCat === 'all' || q.cat === state.selectedCat;
    const diffOk = state.selectedDiff === 'all' || q.difficulty === state.selectedDiff;
    return catOk && diffOk;
  });

 
  if (pool.length < 5) {
    pool = ALL_QUESTIONS.filter(q =>
      state.selectedCat === 'all' || q.cat === state.selectedCat
    );
  }
  if (pool.length < 5) pool = [...ALL_QUESTIONS];

  state.questions  = shuffle(pool).slice(0, 10);
  state.current    = 0;
  state.score      = 0;
  state.streak     = 0;
  state.maxStreak  = 0;
  state.correct    = 0;
  state.userAnswers = [];
  state.difficulty  = state.selectedDiff;

  showScreen('gameScreen');
  loadQuestion();
}


// LOAD QUESTION

function loadQuestion() {
  const q = state.questions[state.current];
  state.answered = false;

  // HUD update
  $('scoreDisplay').textContent = state.score;
  updateStreak();
  updateProgress();

  // Timer
  state.timeTotal = TIME_BY_DIFF[state.difficulty] || 30;
  state.timeLeft  = state.timeTotal;
  $('timerDisplay').textContent = state.timeLeft;
  updateTimerCircle();
  clearInterval(state.timer);
  state.timer = setInterval(tickTimer, 1000);

  // Badges
  $('qBadge').textContent = `📚 Q${state.current + 1}`;
  const catLabels = {
    western:    '🏛️ Western',
    indian:     '🪷 Indian',
    chinese:    '🀄 Chinese',
    identify:   '🔍 Identify',
    ethics:     '⚖️ Ethics',
    metaphysics:'🌌 Metaphysics'
  };
  $('qCatBadge').textContent = catLabels[q.cat] || '🌍 Philosophy';

  // Philosopher card 
  const card = $('philosopherCard');
  if (q.type === 'identify') {
    card.classList.add('visible');
    const imgWrap = $('philosopherImg');
    if (q.imageSrc) {
      imgWrap.className = '';
      imgWrap.innerHTML = `<img src="${q.imageSrc}" alt="philosopher" class="philosopher-img">`;
    } else {
      imgWrap.className = 'mystery-blob';
      imgWrap.textContent = q.philosopherEmoji || '❓';
    }
    $('philosopherHint').textContent = q.philosopherHint || 'Who is this great thinker?';
  } else {
    card.classList.remove('visible');
  }

  // Question text
  $('questionText').textContent = q.question;

  // Options
  const grid = $('optionsGrid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i, btn));
    // Stagger reveal
    btn.style.opacity   = '0';
    btn.style.transform = 'translateY(20px)';
    btn.style.transition = `all 0.4s ease ${i * 0.08}s`;
    grid.appendChild(btn);
    requestAnimationFrame(() => {
      btn.style.opacity   = '1';
      btn.style.transform = 'translateY(0)';
    });
  });

  // Hide feedback & next button
  $('feedbackBar').className = 'feedback-bar';
  $('nextBtn').className     = 'next-btn';
}

// =========================================
// TIMER
// =========================================
function tickTimer() {
  state.timeLeft--;
  $('timerDisplay').textContent = state.timeLeft;
  updateTimerCircle();
  if (state.timeLeft <= 0) {
    clearInterval(state.timer);
    timeOut();
  }
}

function updateTimerCircle() {
  const circumference = 138;
  const fraction = state.timeLeft / state.timeTotal;
  $('timerCircle').style.strokeDashoffset = circumference * (1 - fraction);
  $('timerCircle').style.stroke =
    state.timeLeft > 10 ? 'var(--yellow)' :
    state.timeLeft > 5  ? 'var(--pink)'   : 'var(--red)';
}

function timeOut() {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.current];
  const btns = $('optionsGrid').querySelectorAll('.option-btn');
  btns[q.answer].classList.add('correct');
  btns.forEach(b => b.disabled = true);

  state.streak = 0;
  updateStreak();
  state.userAnswers.push({ q, chosen: -1, correct: false });
  showFeedback(false, "⏰ Time's up!", `The answer was: ${q.options[q.answer]}`, q.explanation);
  showNextBtn();
}

// SELECT ANSWER

function selectAnswer(index, btn) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);

  const q    = state.questions[state.current];
  const btns = $('optionsGrid').querySelectorAll('.option-btn');

  btns.forEach(b => { b.disabled = true; b.classList.add('disabled-fade'); });
  btn.classList.remove('disabled-fade');

  const isCorrect = index === q.answer;

  if (isCorrect) {
    btn.classList.add('correct');
    state.streak++;
    state.correct++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;

    const basePoints  = POINTS_BY_DIFF[state.difficulty] || 100;
    const timeBonus   = Math.floor(state.timeLeft * 2);
    const streakBonus = STREAK_BONUS[Math.min(state.streak, 5)];
    const total       = basePoints + timeBonus + streakBonus;
    state.score += total;
    $('scoreDisplay').textContent = state.score;

    if (state.streak >= 2) showComboToast(state.streak);
    launchConfetti(6);
    showFeedback(true, randomCorrectMsg(),
      `+${total} pts (Base ${basePoints} + Time ${timeBonus} + Streak ${streakBonus})`,
      q.explanation);
  } else {
    btn.classList.add('wrong');
    btns[q.answer].classList.remove('disabled-fade');
    btns[q.answer].classList.add('correct');
    state.streak = 0;
    showFeedback(false, randomWrongMsg(), `The answer was: ${q.options[q.answer]}`, q.explanation);
  }

  updateStreak();
  state.userAnswers.push({ q, chosen: index, correct: isCorrect });
  showNextBtn();
}


// PROGRESS & STREAK

function updateProgress() {
  const total = state.questions.length;
  const pct   = Math.round((state.current / total) * 100);
  $('progressBar').style.width      = pct + '%';
  $('qProgress').textContent        = `Question ${state.current + 1} of ${total}`;
  $('qPercent').textContent         = pct + '%';
}

function updateStreak() {
  for (let i = 0; i < 5; i++) {
    const dot = $('sd' + i);
    if (i < state.streak) dot.classList.add('lit');
    else                   dot.classList.remove('lit');
  }
}


// FEEDBACK

function showFeedback(correct, title, sub, explanation) {
  const bar = $('feedbackBar');
  bar.className            = 'feedback-bar show ' + (correct ? 'correct-fb' : 'wrong-fb');
  $('feedbackEmoji').textContent = correct ? '🎉' : '💡';
  $('feedbackText').textContent  = title;
  $('feedbackSub').textContent   = sub + (explanation ? ` • ${explanation}` : '');
}

function showNextBtn() {
  const nb   = $('nextBtn');
  nb.className = 'next-btn visible';
  nb.textContent = (state.current + 1 >= state.questions.length)
    ? 'See Results 🎯'
    : 'Next Question →';
}

$('nextBtn').addEventListener('click', () => {
  state.current++;
  if (state.current >= state.questions.length) showResults();
  else loadQuestion();
});


// COMBO TOAST

function showComboToast(streak) {
  const toast = $('comboToast');
  $('comboNum').textContent = streak;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}


// CONFETTI

function launchConfetti(count) {
  const container = $('confettiContainer');
  const colors    = ['#7c3aed','#ec4899','#fbbf24','#22c55e','#3b82f6','#f97316'];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className              = 'confetti-piece';
    piece.style.left             = Math.random() * 100 + 'vw';
    piece.style.background       = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius     = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.width            = (6 + Math.random() * 10) + 'px';
    piece.style.height           = (6 + Math.random() * 10) + 'px';
    piece.style.animationDuration = (1.5 + Math.random() * 2) + 's';
    piece.style.animationDelay   = Math.random() * 0.5 + 's';
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 4000);
  }
}


// RESULTS SCREEN

function showResults() {
  clearInterval(state.timer);
  const total    = state.questions.length;
  const accuracy = Math.round((state.correct / total) * 100);

  $('finalScore').textContent    = state.score;
  $('finalCorrect').textContent  = `${state.correct}/${total}`;
  $('finalAccuracy').textContent = accuracy + '%';

  let trophy, title, desc;
  if      (accuracy >= 90) { trophy = '🏆'; title = 'Grand Philosopher!';  desc = 'Socrates himself would bow!'; }
  else if (accuracy >= 70) { trophy = '🥇'; title = 'Sage of the Ages';    desc = 'Deep wisdom flows through you!'; }
  else if (accuracy >= 50) { trophy = '🥈'; title = 'Curious Seeker';      desc = 'The unexamined life is worth examining!'; }
  else if (accuracy >= 30) { trophy = '🥉'; title = 'The Apprentice';       desc = 'Every philosopher starts somewhere!'; }
  else                      { trophy = '📜'; title = 'The Initiate';         desc = 'Begin your journey into the examined life!'; }

  $('trophyEmoji').textContent    = trophy;
  $('gameoverTitle').textContent  = title;
  $('gameoverSub').textContent    = desc;
  $('rankEmoji').textContent      = trophy;
  $('rankTitle').textContent      = title;
  $('rankDesc').textContent       = `Accuracy: ${accuracy}% • Best Streak: ${state.maxStreak}`;

  // Answer review list
  const list = $('reviewList');
  list.innerHTML = '';
  state.userAnswers.forEach(({ q, chosen, correct }) => {
    const div        = document.createElement('div');
    div.className    = 'review-item ' + (correct ? 'correct-r' : 'wrong-r');
    const chosenText = chosen === -1 ? 'Time out' : q.options[chosen];
    div.innerHTML = `
      <div class="review-icon">${correct ? '✅' : '❌'}</div>
      <div>
        <div class="review-q">${q.question.substring(0, 60)}${q.question.length > 60 ? '...' : ''}</div>
        <div class="review-a">
          ${correct
            ? `Your answer: <span style="color:var(--green)">${chosenText}</span>`
            : `Your answer: <span style="color:var(--red)">${chosenText}</span> • Correct: <span style="color:var(--green)">${q.options[q.answer]}</span>`}
        </div>
      </div>`;
    list.appendChild(div);
  });

  showScreen('gameoverScreen');
  if (accuracy >= 70) launchConfetti(30);
}


// RESTART / HOME

$('restartBtn').addEventListener('click', startGame);
$('homeBtn').addEventListener('click', () => showScreen('startScreen'));


// HELPERS

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function randomCorrectMsg() {
  const msgs = [
    '🎉 Brilliant! Socrates approves!',
    '✨ Correct! Your wisdom grows!',
    '🔥 Outstanding! The Oracle speaks!',
    '💫 Perfect! You think like a sage!',
    '⚡ Magnificent! Pure enlightenment!'
  ];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

function randomWrongMsg() {
  const msgs = [
    '💭 Not quite! But questioning is wisdom...',
    '🤔 Even Socrates got stumped sometimes!',
    '📖 The path to truth has many turns!',
    '🌱 Learn and grow, young philosopher!',
    '🔍 Seek deeper — truth awaits!'
  ];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

// Sprinkle twinkling stars in background
(function spawnStars() {
  const bg = document.querySelector('.bg-canvas');
  for (let i = 0; i < 20; i++) {
    const star = document.createElement('div');
    star.className             = 'star';
    star.style.left            = Math.random() * 100 + '%';
    star.style.top             = Math.random() * 100 + '%';
    star.style.animationDelay  = Math.random() * 3 + 's';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    bg.appendChild(star);
  }
})();
