/* ── helpers ── */
function makeImg(src, alt, cls) {
  const img = document.createElement('img');
  img.src = src; img.alt = alt; img.className = cls; img.loading = 'lazy';
  img.onerror = () => {
    const ph = document.createElement('div');
    ph.className = cls + '-placeholder';
    ph.innerHTML = SILHOUETTE;
    img.replaceWith(ph);
  };
  return img;
}

function makePlaceholder(cls) {
  const ph = document.createElement('div');
  ph.className = cls + '-placeholder';
  ph.innerHTML = SILHOUETTE;
  return ph;
}

/* ── CARD ── */
function buildCard(pose, opts = {}) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = pose.id;

  card.appendChild(pose.img ? makeImg(pose.img, pose.sl, 'card-img') : makePlaceholder('card-img'));

  const body = document.createElement('div');
  body.className = 'card-body';
  body.innerHTML = `
    <div class="card-sl">${pose.sl}</div>
    ${pose.en ? `<div class="card-en">${pose.en}</div>` : ''}
    ${pose.sa ? `<div class="card-sa">${pose.sa}</div>` : ''}
  `;
  card.appendChild(body);

  if (opts.onClick) card.addEventListener('click', () => opts.onClick(pose));
  return card;
}

/* ═══════════════════════════════════════
   BROWSE VIEW  (search + filter + modal)
═══════════════════════════════════════ */
(function initBrowse() {
  let query = '';
  let activeSection = 'all';

  const searchInput = document.getElementById('browse-search');
  const resultsWrap = document.getElementById('browse-results');
  const sectionsWrap = document.getElementById('browse-sections');
  const chips = document.querySelectorAll('.filter-chip');

  function render() {
    const q = query.trim().toLowerCase();
    const filtered = POSES.filter(p => {
      const matchSection = activeSection === 'all' || p.section === activeSection;
      const matchQuery = !q ||
        p.sl.toLowerCase().includes(q) ||
        p.en.toLowerCase().includes(q) ||
        p.sa.toLowerCase().includes(q);
      return matchSection && matchQuery;
    });

    if (q || activeSection !== 'all') {
      sectionsWrap.style.display = 'none';
      resultsWrap.style.display = 'block';
      resultsWrap.innerHTML = '';

      if (!filtered.length) {
        resultsWrap.innerHTML = '<div class="no-results">Nobene asane ni bilo najdene · No poses found</div>';
        return;
      }
      const grid = document.createElement('div');
      grid.className = 'grid';
      filtered.forEach(p => grid.appendChild(buildCard(p, { onClick: openModal })));
      resultsWrap.appendChild(grid);
    } else {
      sectionsWrap.style.display = 'block';
      resultsWrap.style.display = 'none';
    }
  }

  searchInput.addEventListener('input', e => { query = e.target.value; render(); });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeSection = chip.dataset.section;
      render();
    });
  });

  /* render default section grids */
  Object.keys(SECTIONS).forEach(key => {
    const grid = document.getElementById('section-' + key);
    if (!grid) return;
    POSES.filter(p => p.section === key)
         .forEach(p => grid.appendChild(buildCard(p, { onClick: openModal })));
  });
})();

/* ═══════════════════════════════════════
   MODAL
═══════════════════════════════════════ */
const overlay = document.getElementById('modal-overlay');
const modalImg          = document.getElementById('modal-img');
const modalSectionBadge = document.getElementById('modal-section-badge');
const modalSl           = document.getElementById('modal-sl');
const modalEn           = document.getElementById('modal-en');
const modalSa           = document.getElementById('modal-sa');
const modalDesc         = document.getElementById('modal-desc');
const modalAddBtn       = document.getElementById('modal-add-btn');

function openModal(pose) {
  modalImg.innerHTML = '';
  modalImg.appendChild(pose.img ? makeImg(pose.img, pose.sl, 'modal-img') : makePlaceholder('modal-img'));

  modalSectionBadge.textContent = SECTIONS[pose.section]?.sl + ' · ' + SECTIONS[pose.section]?.en;
  modalSl.textContent   = pose.sl;
  modalEn.textContent   = pose.en  || '';
  modalSa.textContent   = pose.sa  || '';
  modalDesc.innerHTML = '';
  if (pose.descSl) {
    const sl = document.createElement('div');
    sl.className = 'modal-desc-sl';
    sl.textContent = pose.descSl;
    modalDesc.appendChild(sl);
  }
  if (pose.descEn) {
    const en = document.createElement('div');
    en.className = 'modal-desc-en';
    en.textContent = pose.descEn;
    modalDesc.appendChild(en);
  }

  const inSeq = sequence.includes(pose.id);
  modalAddBtn.textContent = inSeq ? '− Odstrani iz zaporedja' : '+ Dodaj v zaporedje';
  modalAddBtn.className   = 'btn ' + (inSeq ? 'btn-danger' : 'btn-primary');
  modalAddBtn.onclick = () => {
    if (sequence.includes(pose.id)) removeFromSequence(pose.id);
    else addToSequence(pose.id);
    openModal(pose);
  };

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-close-btn').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ═══════════════════════════════════════
   SEQUENCE BUILDER
═══════════════════════════════════════ */
let sequence = JSON.parse(localStorage.getItem('yoga-sequence') || '[]');

function saveSequence() {
  localStorage.setItem('yoga-sequence', JSON.stringify(sequence));
}

function addToSequence(id) {
  if (!sequence.includes(id)) {
    sequence.push(id);
    saveSequence();
    renderSequencePanel();
    updateSequenceCards();
  }
}

function removeFromSequence(id) {
  sequence = sequence.filter(x => x !== id);
  saveSequence();
  renderSequencePanel();
  updateSequenceCards();
}

function moveInSequence(id, dir) {
  const i = sequence.indexOf(id);
  const j = i + dir;
  if (j < 0 || j >= sequence.length) return;
  [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
  saveSequence();
  renderSequencePanel();
}

function updateSequenceCards() {
  document.querySelectorAll('.card[data-id]').forEach(card => {
    card.classList.toggle('in-sequence', sequence.includes(card.dataset.id));
  });
}

function renderSequencePanel() {
  const list = document.getElementById('seq-list');
  const count = document.getElementById('seq-count');
  count.textContent = sequence.length + (sequence.length === 1 ? ' asana' : ' asan');

  list.innerHTML = '';
  if (!sequence.length) {
    list.innerHTML = '<div class="sequence-empty">Zaporedje je prazno · Add poses below</div>';
    return;
  }

  sequence.forEach((id, i) => {
    const pose = POSES.find(p => p.id === id);
    if (!pose) return;

    const item = document.createElement('div');
    item.className = 'seq-item';
    item.innerHTML = `
      <span class="seq-item-num">${i + 1}</span>
      <div class="seq-item-name">
        <div class="sl">${pose.sl}</div>
        <div class="en">${pose.en}</div>
      </div>
      <button class="seq-move" data-id="${id}" data-dir="-1" title="Premakni gor" ${i === 0 ? 'disabled' : ''}>↑</button>
      <button class="seq-move" data-id="${id}" data-dir="1"  title="Premakni dol" ${i === sequence.length - 1 ? 'disabled' : ''}>↓</button>
      <button class="seq-item-remove" data-id="${id}" title="Odstrani">×</button>
    `;

    // thumbnail
    const thumb = pose.img
      ? makeImg(pose.img, pose.sl, 'seq-item-img')
      : makePlaceholder('seq-item-img');
    item.insertBefore(thumb, item.querySelector('.seq-item-name'));

    list.appendChild(item);
  });

  list.querySelectorAll('.seq-item-remove').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); removeFromSequence(btn.dataset.id); });
  });
  list.querySelectorAll('.seq-move').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); moveInSequence(btn.dataset.id, Number(btn.dataset.dir)); });
  });
}

/* sequence browse grid */
(function initSequenceBrowse() {
  const searchEl = document.getElementById('seq-browse-search');
  const grid = document.getElementById('seq-browse-grid');

  function renderSeqBrowse(q) {
    q = (q || '').trim().toLowerCase();
    grid.innerHTML = '';
    POSES
      .filter(p => !q || p.sl.toLowerCase().includes(q) || p.en.toLowerCase().includes(q) || p.sa.toLowerCase().includes(q))
      .forEach(p => {
        const card = buildCard(p, {
          onClick: (pose) => {
            if (sequence.includes(pose.id)) removeFromSequence(pose.id);
            else addToSequence(pose.id);
          }
        });
        if (sequence.includes(p.id)) card.classList.add('in-sequence');
        grid.appendChild(card);
      });
  }

  searchEl.addEventListener('input', e => renderSeqBrowse(e.target.value));
  renderSeqBrowse();
  document.addEventListener('sequence-updated', () => renderSeqBrowse(searchEl.value));
})();

/* export as printable HTML with images */
document.getElementById('seq-export-btn').addEventListener('click', () => {
  if (!sequence.length) return;
  const poses = sequence.map(id => POSES.find(x => x.id === id)).filter(Boolean);
  const date = new Date().toLocaleDateString('sl-SI', { year:'numeric', month:'long', day:'numeric' });

  const cards = poses.map((p, i) => `
    <div class="pose">
      <div class="pose-num">${i + 1}</div>
      ${p.img ? `<img src="${p.img}" alt="${p.sl}" onerror="this.style.display='none'">` : '<div class="pose-no-img"></div>'}
      <div class="pose-info">
        <div class="pose-sl">${p.sl}</div>
        ${p.en ? `<div class="pose-en">${p.en}</div>` : ''}
        ${p.sa ? `<div class="pose-sa">${p.sa}</div>` : ''}
        ${(p.descSl || p.descEn) ? `<div class="pose-desc">
          ${p.descSl ? `<div class="pose-desc-sl">${p.descSl}</div>` : ''}
          ${p.descEn ? `<div class="pose-desc-en">${p.descEn}</div>` : ''}
        </div>` : ''}
      </div>
    </div>`).join('');

  const html = `<!DOCTYPE html>
<html lang="sl">
<head>
<meta charset="UTF-8">
<title>Moje zaporedje · My Yoga Sequence</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
  :root { --cream:#f7f3ee; --warm:#e8dfd3; --sage:#8a9e88; --terra:#c07a5a; --deep:#2d2620; --mid:#6b5c52; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:var(--cream); color:var(--deep); font-family:'Jost',sans-serif; font-weight:300; padding:40px 20px; }
  header { text-align:center; margin-bottom:40px; padding-bottom:28px; border-bottom:1px solid var(--warm); }
  h1 { font-family:'Cormorant Garamond',serif; font-size:3rem; font-weight:300; letter-spacing:0.2em; }
  h1 em { display:block; font-size:1.2rem; color:var(--sage); margin-top:6px; letter-spacing:0.15em; }
  .date { margin-top:10px; font-size:0.75rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--mid); }
  .poses { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:24px; max-width:1100px; margin:0 auto; }
  .pose { background:#fff; border-radius:4px; overflow:hidden; box-shadow:0 2px 10px rgba(45,38,32,0.08); display:flex; flex-direction:column; }
  .pose-num { background:var(--deep); color:var(--cream); text-align:center; padding:7px; font-size:0.72rem; letter-spacing:0.2em; }
  .pose img { width:100%; aspect-ratio:3/4; object-fit:contain; display:block; background:var(--warm); padding:8px; }
  .pose-no-img { width:100%; aspect-ratio:3/4; background:var(--warm); }
  .pose-info { padding:14px 16px 18px; flex:1; display:flex; flex-direction:column; gap:4px; }
  .pose-sl { font-family:'Cormorant Garamond',serif; font-size:1.1rem; font-weight:600; line-height:1.2; }
  .pose-en { font-size:0.68rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--terra); margin-top:2px; }
  .pose-sa { font-size:0.72rem; color:var(--mid); font-style:italic; font-family:'Cormorant Garamond',serif; }
  .pose-desc { margin-top:8px; border-top:1px solid var(--warm); padding-top:8px; display:flex; flex-direction:column; gap:5px; }
  .pose-desc-sl { font-size:0.75rem; color:var(--deep); line-height:1.55; }
  .pose-desc-en { font-size:0.72rem; color:var(--mid); line-height:1.55; font-style:italic; }
  @media print {
    body { background:#fff; padding:20px; }
    .pose { box-shadow:none; border:1px solid #ddd; break-inside:avoid; }
  }
</style>
</head>
<body>
<header>
  <h1>ASANE<em>Jogijski položaji</em></h1>
  <div class="date">Moje zaporedje · My Sequence · ${date} · ${poses.length} asan</div>
</header>
<div class="poses">${cards}</div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    download: 'yoga-zaporedje.html'
  });
  a.click();
});

document.getElementById('seq-export-btn-2').addEventListener('click', () => document.getElementById('seq-export-btn').click());

document.getElementById('seq-clear-btn').addEventListener('click', () => {
  if (!sequence.length) return;
  if (confirm('Počisti celotno zaporedje? / Clear the entire sequence?')) {
    sequence = [];
    saveSequence();
    renderSequencePanel();
    updateSequenceCards();
  }
});

/* initial render */
renderSequencePanel();
updateSequenceCards();

/* ═══════════════════════════════════════
   QUIZ
═══════════════════════════════════════ */
(function initQuiz() {
  let mode = 'img-to-sl';   // 'img-to-sl' | 'img-to-en' | 'img-to-sa' | 'name-to-img'
  let total = 10;
  let pool, current, choices, answered, correct, questionNum;

  const setup    = document.getElementById('quiz-setup');
  const quizCard = document.getElementById('quiz-card');
  const result   = document.getElementById('quiz-result');

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getLabel(pose) {
    if (mode === 'img-to-sl') return pose.sl;
    if (mode === 'img-to-en') return pose.en || pose.sl;
    if (mode === 'img-to-sa') return pose.sa || pose.sl;
    return pose.sl;
  }

  function startQuiz() {
    const validPoses = POSES.filter(p => {
      if (mode === 'img-to-sa') return p.sa;
      if (mode === 'img-to-en') return p.en;
      return true;
    });
    pool = shuffle(validPoses).slice(0, Math.min(total, validPoses.length));
    questionNum = 0; correct = 0; answered = false;
    setup.style.display = 'none';
    result.style.display = 'none';
    quizCard.style.display = 'block';
    nextQuestion();
  }

  function nextQuestion() {
    answered = false;
    if (questionNum >= pool.length) { showResult(); return; }
    current = pool[questionNum];

    const wrongPool = POSES.filter(p => p.id !== current.id);
    const wrongs = shuffle(wrongPool).slice(0, 3);
    choices = shuffle([current, ...wrongs]);

    document.getElementById('quiz-q-num').textContent = questionNum + 1;
    document.getElementById('quiz-q-total').textContent = pool.length;
    document.getElementById('quiz-score').textContent = correct + ' / ' + questionNum;
    const fill = document.getElementById('quiz-progress-fill');
    fill.style.width = (questionNum / pool.length * 100) + '%';

    // question area
    const questionEl = document.getElementById('quiz-question');
    questionEl.innerHTML = '';

    const imgWrap = document.createElement('div');
    if (current.img) {
      imgWrap.appendChild(makeImg(current.img, current.sl, 'quiz-pose-img'));
    } else {
      const ph = document.createElement('div');
      ph.className = 'quiz-pose-img-placeholder';
      ph.innerHTML = SILHOUETTE;
      imgWrap.appendChild(ph);
    }
    questionEl.appendChild(imgWrap);

    const prompt = document.createElement('div');
    prompt.className = 'quiz-prompt';
    if (mode === 'img-to-sl') prompt.textContent = 'Kako se imenuje ta asana v slovenščini?';
    else if (mode === 'img-to-en') prompt.textContent = 'What is the English name of this pose?';
    else if (mode === 'img-to-sa') prompt.textContent = 'What is the Sanskrit name of this pose?';
    questionEl.appendChild(prompt);

    const choicesEl = document.createElement('div');
    choicesEl.className = 'quiz-choices';
    choices.forEach(pose => {
      const btn = document.createElement('button');
      btn.className = 'quiz-choice';
      btn.textContent = getLabel(pose);
      btn.addEventListener('click', () => checkAnswer(pose, btn, choicesEl));
      choicesEl.appendChild(btn);
    });
    questionEl.appendChild(choicesEl);

    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-feedback').className = 'quiz-feedback';
    document.getElementById('quiz-next-btn').style.display = 'none';
  }

  function checkAnswer(chosen, btn, choicesEl) {
    if (answered) return;
    answered = true;
    const isCorrect = chosen.id === current.id;
    if (isCorrect) correct++;

    choicesEl.querySelectorAll('.quiz-choice').forEach(b => {
      b.disabled = true;
      if (b.textContent === getLabel(current)) b.classList.add('correct');
      else if (b === btn && !isCorrect) b.classList.add('wrong');
    });

    const fb = document.getElementById('quiz-feedback');
    if (isCorrect) {
      fb.textContent = 'Odlično! · Correct!';
      fb.className = 'quiz-feedback correct';
    } else {
      fb.textContent = `Napačno · Incorrect — ${current.sl}${current.en ? ' · ' + current.en : ''}`;
      fb.className = 'quiz-feedback wrong';
    }

    document.getElementById('quiz-score').textContent = correct + ' / ' + (questionNum + 1);
    document.getElementById('quiz-next-btn').style.display = 'block';
    questionNum++;
  }

  function showResult() {
    quizCard.style.display = 'none';
    result.style.display = 'block';
    document.getElementById('quiz-final-score').textContent = correct + ' / ' + pool.length;
    const pct = Math.round(correct / pool.length * 100);
    let msg;
    if (pct === 100) msg = 'Popolno! Perfect! 🌸';
    else if (pct >= 80) msg = 'Odlično! Excellent!';
    else if (pct >= 60) msg = 'Dobro! Good job!';
    else msg = 'Vadite naprej · Keep practising!';
    document.getElementById('quiz-result-msg').textContent = msg;
  }

  /* mode toggles */
  document.querySelectorAll('.quiz-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quiz-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mode = btn.dataset.mode;
    });
  });

  /* count toggles */
  document.querySelectorAll('.quiz-count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quiz-count-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      total = Number(btn.dataset.count);
    });
  });

  document.getElementById('quiz-start-btn').addEventListener('click', startQuiz);
  document.getElementById('quiz-next-btn').addEventListener('click', nextQuestion);
  document.getElementById('quiz-restart-btn').addEventListener('click', startQuiz);
  document.getElementById('quiz-back-btn').addEventListener('click', () => {
    quizCard.style.display = 'none';
    result.style.display = 'none';
    setup.style.display = 'block';
  });
})();

/* ═══════════════════════════════════════
   NAV TABS
═══════════════════════════════════════ */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('view-' + btn.dataset.view).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
