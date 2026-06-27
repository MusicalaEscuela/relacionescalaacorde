const SHARP_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLAT_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const ROOTS = [
  { name: "C", pc: 0, pref: "sharp" },
  { name: "Db", pc: 1, pref: "flat" },
  { name: "C#", pc: 1, pref: "sharp" },
  { name: "D", pc: 2, pref: "sharp" },
  { name: "Eb", pc: 3, pref: "flat" },
  { name: "D#", pc: 3, pref: "sharp" },
  { name: "E", pc: 4, pref: "sharp" },
  { name: "F", pc: 5, pref: "flat" },
  { name: "Gb", pc: 6, pref: "flat" },
  { name: "F#", pc: 6, pref: "sharp" },
  { name: "G", pc: 7, pref: "sharp" },
  { name: "Ab", pc: 8, pref: "flat" },
  { name: "G#", pc: 8, pref: "sharp" },
  { name: "A", pc: 9, pref: "sharp" },
  { name: "Bb", pc: 10, pref: "flat" },
  { name: "A#", pc: 10, pref: "sharp" },
  { name: "B", pc: 11, pref: "sharp" }
];

const SCALE_TYPES = {
  major: {
    label: "Mayor / Jónico",
    short: "Mayor",
    intervals: [0, 2, 4, 5, 7, 9, 11],
    degrees: ["1", "2", "3", "4", "5", "6", "7"],
    formula: "1 2 3 4 5 6 7",
    mood: "mayor, estable, luminoso, punto de partida tonal",
    use: "Acordes maj7, progresiones tonales mayores, melodías pop, música académica básica."
  },
  dorian: {
    label: "Dórico",
    short: "Dórico",
    intervals: [0, 2, 3, 5, 7, 9, 10],
    degrees: ["1", "2", "♭3", "4", "5", "6", "♭7"],
    formula: "1 2 ♭3 4 5 6 ♭7",
    mood: "menor abierto, menos triste, con brillo por la sexta mayor",
    use: "Acordes m7 cuando quieres color menor luminoso, funk, jazz modal, rock suave."
  },
  phrygian: {
    label: "Frigio",
    short: "Frigio",
    intervals: [0, 1, 3, 5, 7, 8, 10],
    degrees: ["1", "♭2", "♭3", "4", "5", "♭6", "♭7"],
    formula: "1 ♭2 ♭3 4 5 ♭6 ♭7",
    mood: "menor oscuro, español, tenso por la segunda bemol",
    use: "Sonidos flamencos, metal, música modal oscura, tensión expresiva."
  },
  lydian: {
    label: "Lidio",
    short: "Lidio",
    intervals: [0, 2, 4, 6, 7, 9, 11],
    degrees: ["1", "2", "3", "#4", "5", "6", "7"],
    formula: "1 2 3 #4 5 6 7",
    mood: "mayor flotante, cinematográfico, brillante por la #11",
    use: "Acordes maj7 cuando quieres evitar la 11 natural y sonar más abierto."
  },
  mixolydian: {
    label: "Mixolidio",
    short: "Mixolidio",
    intervals: [0, 2, 4, 5, 7, 9, 10],
    degrees: ["1", "2", "3", "4", "5", "6", "♭7"],
    formula: "1 2 3 4 5 6 ♭7",
    mood: "dominante, abierto, bluesero si se combina con lenguaje popular",
    use: "Acordes 7, V7 en tonalidad mayor, rock, blues, jazz básico."
  },
  aeolian: {
    label: "Menor natural / Eólico",
    short: "Menor natural",
    intervals: [0, 2, 3, 5, 7, 8, 10],
    degrees: ["1", "2", "♭3", "4", "5", "♭6", "♭7"],
    formula: "1 2 ♭3 4 5 ♭6 ♭7",
    mood: "menor natural, melancólico, estable dentro del modo menor",
    use: "Acordes m7, progresiones menores, pop, rock, composición modal."
  },
  locrian: {
    label: "Locrio",
    short: "Locrio",
    intervals: [0, 1, 3, 5, 6, 8, 10],
    degrees: ["1", "♭2", "♭3", "4", "♭5", "♭6", "♭7"],
    formula: "1 ♭2 ♭3 4 ♭5 ♭6 ♭7",
    mood: "inestable, disminuido, pide resolver",
    use: "Acordes m7♭5, función semidisminuida, iiø en menor."
  },
  harmonicMinor: {
    label: "Menor armónica",
    short: "Menor armónica",
    intervals: [0, 2, 3, 5, 7, 8, 11],
    degrees: ["1", "2", "♭3", "4", "5", "♭6", "7"],
    formula: "1 2 ♭3 4 5 ♭6 7",
    mood: "menor con sensible fuerte, dramática, tensión clásica",
    use: "Tonalidad menor, dominante V7 en menor, cadencias con sensación dramática."
  },
  melodicMinor: {
    label: "Menor melódica",
    short: "Menor melódica",
    intervals: [0, 2, 3, 5, 7, 9, 11],
    degrees: ["1", "2", "♭3", "4", "5", "6", "7"],
    formula: "1 2 ♭3 4 5 6 7",
    mood: "menor sofisticado, flexible, muy usado en jazz",
    use: "Acordes mMaj7, sonidos menores modernos, material para modos alterados."
  },
  majorPent: {
    label: "Pentatónica mayor",
    short: "Pentatónica mayor",
    intervals: [0, 2, 4, 7, 9],
    degrees: ["1", "2", "3", "5", "6"],
    formula: "1 2 3 5 6",
    mood: "simple, clara, cantable, evita choques fuertes",
    use: "Melodías, improvisación inicial, pop, folk, gospel, guitarra y voz."
  },
  minorPent: {
    label: "Pentatónica menor",
    short: "Pentatónica menor",
    intervals: [0, 3, 5, 7, 10],
    degrees: ["1", "♭3", "4", "5", "♭7"],
    formula: "1 ♭3 4 5 ♭7",
    mood: "menor directa, rockera, flexible",
    use: "Blues, rock, pop, improvisación inicial sobre acordes menores o dominantes."
  },
  blues: {
    label: "Blues",
    short: "Blues",
    intervals: [0, 3, 5, 6, 7, 10],
    degrees: ["1", "♭3", "4", "♭5", "5", "♭7"],
    formula: "1 ♭3 4 ♭5 5 ♭7",
    mood: "expresiva, cruda, con nota blues",
    use: "Blues, rock, jazz, funk. Funciona por lenguaje, no por obedecer un reglamento medieval."
  },
  altered: {
    label: "Alterada / Superlocria",
    short: "Alterada",
    intervals: [0, 1, 3, 4, 6, 8, 10],
    degrees: ["1", "♭9", "#9", "3", "♭5/#11", "♭13", "♭7"],
    formula: "1 ♭9 #9 3 ♭5 ♭13 ♭7",
    mood: "dominante muy tensa, pide resolución con urgencia existencial",
    use: "Acordes 7alt, dominantes secundarios, cadencias jazz hacia acordes mayores o menores."
  },
  diminishedWH: {
    label: "Disminuida tono-semitono",
    short: "Disminuida T-S",
    intervals: [0, 2, 3, 5, 6, 8, 9, 11],
    degrees: ["1", "2", "♭3", "4", "♭5", "♭6", "6", "7"],
    formula: "1 2 ♭3 4 ♭5 ♭6 6 7",
    mood: "simétrica, tensa, misteriosa",
    use: "Acordes disminuidos y pasajes de tensión simétrica."
  },
  diminishedHW: {
    label: "Disminuida semitono-tono",
    short: "Disminuida S-T",
    intervals: [0, 1, 3, 4, 6, 7, 9, 10],
    degrees: ["1", "♭9", "#9", "3", "#11", "5", "13", "♭7"],
    formula: "1 ♭9 #9 3 #11 5 13 ♭7",
    mood: "dominante simétrica, llena de tensión controlada",
    use: "Acordes 7♭9, 13♭9, dominantes con color disminuido."
  }
};

const CHORD_TYPES = {
  maj: { label: "Mayor", symbol: "", intervals: [0, 4, 7], formula: "1 3 5", family: "major", use: "Triada mayor: estabilidad básica." },
  maj7: { label: "Maj7", symbol: "maj7", intervals: [0, 4, 7, 11], formula: "1 3 5 7", family: "major", use: "Mayor con séptima mayor. Color elegante y estable." },
  six: { label: "6", symbol: "6", intervals: [0, 4, 7, 9], formula: "1 3 5 6", family: "major", use: "Mayor con sexta. Sonido cálido y clásico." },
  add9: { label: "add9", symbol: "add9", intervals: [0, 4, 7, 2], formula: "1 3 5 9", family: "major", use: "Mayor con novena agregada. Pop, gospel, color abierto." },
  min: { label: "Menor", symbol: "m", intervals: [0, 3, 7], formula: "1 ♭3 5", family: "minor", use: "Triada menor: base de sonido menor." },
  min7: { label: "m7", symbol: "m7", intervals: [0, 3, 7, 10], formula: "1 ♭3 5 ♭7", family: "minor", use: "Menor con séptima menor. Dórico, eólico o frigio según color." },
  min6: { label: "m6", symbol: "m6", intervals: [0, 3, 7, 9], formula: "1 ♭3 5 6", family: "minor", use: "Menor con sexta mayor. Sonido dórico o menor melódico." },
  minMaj7: { label: "mMaj7", symbol: "mMaj7", intervals: [0, 3, 7, 11], formula: "1 ♭3 5 7", family: "minorMajor", use: "Menor con séptima mayor. Tenso, cinematográfico, menor melódico." },
  dom7: { label: "7 dominante", symbol: "7", intervals: [0, 4, 7, 10], formula: "1 3 5 ♭7", family: "dominant", use: "Dominante clásico. Pide resolución o se queda en blues feliz de su caos." },
  nine: { label: "9 dominante", symbol: "9", intervals: [0, 4, 7, 10, 2], formula: "1 3 5 ♭7 9", family: "dominant", use: "Dominante con novena. Jazz, funk, soul." },
  thirteen: { label: "13 dominante", symbol: "13", intervals: [0, 4, 7, 10, 2, 9], formula: "1 3 5 ♭7 9 13", family: "dominant", use: "Dominante extendido con 13. Color sofisticado y funcional." },
  sus2: { label: "sus2", symbol: "sus2", intervals: [0, 2, 7], formula: "1 2 5", family: "sus", use: "Suspendido sin tercera, color abierto." },
  sus4: { label: "sus4", symbol: "sus4", intervals: [0, 5, 7], formula: "1 4 5", family: "sus", use: "Suspendido con cuarta, espera resolver o sostener color modal." },
  sevenSus4: { label: "7sus4", symbol: "7sus4", intervals: [0, 5, 7, 10], formula: "1 4 5 ♭7", family: "sus", use: "Dominante suspendido. Mixolidio sus, pentatónica menor relativa, gospel." },
  dim: { label: "Disminuido", symbol: "dim", intervals: [0, 3, 6], formula: "1 ♭3 ♭5", family: "diminished", use: "Triada inestable. Pide movimiento." },
  halfDim: { label: "m7♭5", symbol: "m7♭5", intervals: [0, 3, 6, 10], formula: "1 ♭3 ♭5 ♭7", family: "halfDiminished", use: "Semidisminuido. Locrio o locrio ♮2 según contexto." },
  dim7: { label: "dim7", symbol: "dim7", intervals: [0, 3, 6, 9], formula: "1 ♭3 ♭5 𝄫7", family: "diminished", use: "Disminuido completo. Simétrico, dramático, útil para paso cromático." },
  aug: { label: "Aumentado", symbol: "aug", intervals: [0, 4, 8], formula: "1 3 #5", family: "augmented", use: "Triada aumentada. Color inestable, cinematográfico." },
  dom7b9: { label: "7♭9", symbol: "7♭9", intervals: [0, 4, 7, 10, 1], formula: "1 3 5 ♭7 ♭9", family: "dominant", use: "Dominante con tensión ♭9. Muy útil en tonalidad menor." },
  dom7sharp9: { label: "7#9", symbol: "7#9", intervals: [0, 4, 7, 10, 3], formula: "1 3 5 ♭7 #9", family: "dominant", use: "Dominante con #9. Blues, rock, jazz tenso." },
  alt: { label: "7alt", symbol: "7alt", intervals: [0, 4, 10], formula: "1 3 ♭7 + alteraciones", family: "altered", use: "Dominante alterado. Usualmente trabaja con ♭9, #9, ♭5/#11 y ♭13." }
};

const PROGRESSIONS = {
  iiVI: {
    label: "ii–V–I mayor",
    description: "Ruta tonal clásica. Cada acorde hereda un modo de la escala mayor.",
    steps: [
      { degree: "ii", chord: "min7", offset: 2, scale: "dorian" },
      { degree: "V", chord: "dom7", offset: 7, scale: "mixolydian" },
      { degree: "I", chord: "maj7", offset: 0, scale: "major" }
    ],
    practice: "Practica terceras y séptimas: en ii–V–I suelen guiar la resolución con movimientos pequeños."
  },
  IviIVV: {
    label: "I–vi–IV–V pop",
    description: "Progresión muy común en pop. Mantiene una escala madre mayor casi todo el tiempo.",
    steps: [
      { degree: "I", chord: "maj7", offset: 0, scale: "major" },
      { degree: "vi", chord: "min7", offset: 9, scale: "aeolian" },
      { degree: "IV", chord: "maj7", offset: 5, scale: "lydian" },
      { degree: "V", chord: "dom7", offset: 7, scale: "mixolydian" }
    ],
    practice: "Primero toca solo notas de cada acorde. Luego usa notas comunes entre acordes para conectar frases."
  },
  minorCadence: {
    label: "iiø–V7–i menor",
    description: "Cadencia menor con tensión fuerte antes de resolver.",
    steps: [
      { degree: "iiø", chord: "halfDim", offset: 2, scale: "locrian" },
      { degree: "V7", chord: "dom7b9", offset: 7, scale: "diminishedHW" },
      { degree: "i", chord: "minMaj7", offset: 0, scale: "melodicMinor" }
    ],
    practice: "Escucha cómo la ♭9 del V7 empuja hacia la tónica menor. Esa nota no está de adorno, está haciendo drama útil."
  },
  blues: {
    label: "Blues I7–IV7–V7",
    description: "Tres dominantes en una misma tonalidad. Funciona por lenguaje blues, no por diatonismo puro.",
    steps: [
      { degree: "I7", chord: "dom7", offset: 0, scale: "blues" },
      { degree: "IV7", chord: "dom7", offset: 5, scale: "mixolydian" },
      { degree: "V7", chord: "dom7", offset: 7, scale: "mixolydian" },
      { degree: "I7", chord: "dom7", offset: 0, scale: "minorPent" }
    ],
    practice: "Mezcla pentatónica menor y notas del acorde. La fricción entre 3 mayor y ♭3 blues es parte del idioma."
  },
  modalDorian: {
    label: "Vamp dórico i–IV",
    description: "Movimiento modal menor con sexta mayor. Ideal para improvisar sin tanta presión funcional.",
    steps: [
      { degree: "i", chord: "min7", offset: 0, scale: "dorian" },
      { degree: "IV", chord: "dom7", offset: 5, scale: "mixolydian" },
      { degree: "i", chord: "min7", offset: 0, scale: "dorian" },
      { degree: "IV", chord: "dom7", offset: 5, scale: "mixolydian" }
    ],
    practice: "Resalta la 6 natural del acorde menor. Esa nota es el brillo dórico, no la ignores como correo institucional."
  }
};

const INTERVAL_NAMES = {
  0: "1", 1: "♭9", 2: "9", 3: "♭3/#9", 4: "3", 5: "11", 6: "♭5/#11", 7: "5", 8: "#5/♭13", 9: "6/13", 10: "♭7", 11: "7"
};

const MODE_FROM_MAJOR_DEGREES = [
  { degree: "I", triad: "maj", seventh: "maj7", mode: "major" },
  { degree: "ii", triad: "min", seventh: "min7", mode: "dorian" },
  { degree: "iii", triad: "min", seventh: "min7", mode: "phrygian" },
  { degree: "IV", triad: "maj", seventh: "maj7", mode: "lydian" },
  { degree: "V", triad: "maj", seventh: "dom7", mode: "mixolydian" },
  { degree: "vi", triad: "min", seventh: "min7", mode: "aeolian" },
  { degree: "vii°", triad: "dim", seventh: "halfDim", mode: "locrian" }
];

/* ------------------------------------------------------------------ *
 * Audio: síntesis ligera con Web Audio API (cero dependencias, cero
 * red). Convierte clases de altura (pitch classes 0–11) en frecuencias
 * y las suena como acorde (simultáneo) o escala (secuencia ascendente).
 * ------------------------------------------------------------------ */
const Synth = (() => {
  let ctx = null;
  let enabled = localStorage.getItem("musimapaSound") !== "off";

  function context() {
    if (!ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      ctx = new Ctx();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  // Despliega clases de altura a notas MIDI siempre ascendentes.
  function ascending(pcs, baseOctave) {
    const out = [];
    let octave = baseOctave;
    let prev = -1;
    for (const p of pcs) {
      if (p <= prev) octave += 1;
      out.push(12 * (octave + 1) + p);
      prev = p;
    }
    return out;
  }

  const midiToFreq = midi => 440 * Math.pow(2, (midi - 69) / 12);

  function voice(freq, start, duration, peak) {
    const ac = context();
    if (!ac) return;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    const t0 = ac.currentTime + start;
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.linearRampToValueAtTime(peak, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(gain).connect(ac.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.05);
  }

  return {
    get enabled() { return enabled; },
    get supported() { return Boolean(window.AudioContext || window.webkitAudioContext); },
    setEnabled(value) {
      enabled = value;
      localStorage.setItem("musimapaSound", value ? "on" : "off");
    },
    note(pcValue, octave = 4, duration = 0.7) {
      if (!enabled) return;
      voice(midiToFreq(12 * (octave + 1) + pcValue), 0, duration, 0.2);
    },
    chord(pcs, octave = 4, duration = 1.6) {
      if (!enabled || !pcs.length) return;
      ascending(pcs, octave).forEach(m => voice(midiToFreq(m), 0, duration, 0.13));
    },
    sequence(pcs, octave = 4, step = 0.26, duration = 0.32) {
      if (!enabled || !pcs.length) return;
      const midis = ascending(pcs, octave);
      midis.push(midis[0] + 12); // cierra la escala en la octava
      midis.forEach((m, i) => voice(midiToFreq(m), i * step, duration, 0.16));
    }
  };
})();

const els = {};
let currentQuiz = null;
let score = Number(localStorage.getItem("musimapaScore") || 0);
let streak = Number(localStorage.getItem("musimapaStreak") || 0);

function pc(n) {
  return ((n % 12) + 12) % 12;
}

function noteName(notePc, pref = "sharp") {
  return pref === "flat" ? FLAT_NAMES[pc(notePc)] : SHARP_NAMES[pc(notePc)];
}

function noteSet(rootPc, intervals) {
  return intervals.map(i => pc(rootPc + i));
}

function unique(arr) {
  return [...new Set(arr)];
}

function rootByName(name) {
  return ROOTS.find(r => r.name === name) || ROOTS[0];
}

function chordSymbol(root, chordKey) {
  const chord = CHORD_TYPES[chordKey];
  return `${root.name}${chord.symbol}`;
}

function scaleSymbol(root, scaleKey) {
  return `${root.name} ${SCALE_TYPES[scaleKey].short}`;
}

function intervalFromRoot(notePc, rootPc) {
  return pc(notePc - rootPc);
}

function getSelectValue(select, fallback) {
  return select && select.value ? select.value : fallback;
}

function optionHTML(options, selected) {
  return options.map(opt => `<option value="${opt.value}" ${opt.value === selected ? "selected" : ""}>${opt.label}</option>`).join("");
}

// Botón de reproducción reutilizable. kind: "chord" | "scale" | "note".
function playButton(kind, pcs, label) {
  if (!Synth.supported) return "";
  const icon = kind === "scale" ? "♫" : "▶";
  return `<button type="button" class="play-btn" data-play="${kind}" data-notes="${pcs.join(",")}" aria-label="${label}" title="${label}">${icon}</button>`;
}

function populateSelects() {
  const toOptions = (entries, labelKey) => entries.map(([value, item]) => ({ value, label: item[labelKey] }));
  const rootOptions = ROOTS.map(r => ({ value: r.name, label: r.name }));
  const chordOptions = toOptions(Object.entries(CHORD_TYPES), "label");
  const scaleOptions = toOptions(Object.entries(SCALE_TYPES), "label");
  const progressionOptions = toOptions(Object.entries(PROGRESSIONS), "label");

  const defaults = {
    chordRoot: "C", scaleRoot: "C", compareRoot: "C", diatonicRoot: "C", progressionRoot: "C",
    chordType: "maj7", compareChordType: "dom7",
    scaleType: "lydian", diatonicScale: "major",
    progressionType: "iiVI"
  };
  const fill = (ids, options) => ids.forEach(id => { els[id].innerHTML = optionHTML(options, defaults[id]); });

  fill(["chordRoot", "scaleRoot", "compareRoot", "diatonicRoot", "progressionRoot"], rootOptions);
  fill(["chordType", "compareChordType"], chordOptions);
  fill(["scaleType", "diatonicScale"], scaleOptions);
  fill(["progressionType"], progressionOptions);
}

function classifyNote(notePc, chordRootPc, chordKey, scaleRootPc, scaleKey) {
  const chord = CHORD_TYPES[chordKey];
  const scale = SCALE_TYPES[scaleKey];
  const chordNotes = new Set(noteSet(chordRootPc, chord.intervals));
  const scaleNotes = new Set(noteSet(scaleRootPc, scale.intervals));
  const int = intervalFromRoot(notePc, chordRootPc);

  if (chordNotes.has(notePc)) {
    return { type: "chord", label: "Nota del acorde", css: "chord-tone", detail: `Funciona como ${INTERVAL_NAMES[int]} del acorde.` };
  }
  if (!scaleNotes.has(notePc)) {
    return { type: "outside", label: "Nota externa", css: "outside-tone", detail: "No pertenece a la escala elegida. Puede usarse como cromatismo, pero no como nota base del color." };
  }

  const tension = tensionProfile(chord.family, int, chordKey);
  return tension;
}

function tensionProfile(family, int, chordKey) {
  const available = { type: "tension", label: "Tensión disponible", css: "tension-tone", detail: `Aporta color como ${INTERVAL_NAMES[int]} sin destruir el acorde. Qué civilizado.` };
  const strong = { type: "tension", label: "Tensión fuerte", css: "tension-tone", detail: `Color intenso como ${INTERVAL_NAMES[int]}. Úsala con intención y resolución.` };
  const caution = { type: "caution", label: "Nota de cuidado", css: "caution-tone", detail: `Puede chocar como ${INTERVAL_NAMES[int]}. No está prohibida, solo pide criterio, esa cosa escasa.` };

  if (family === "major") {
    if ([2, 6, 9].includes(int)) return available;
    if (int === 5) return caution;
    if ([1, 3, 8, 10].includes(int)) return strong;
  }
  if (family === "minor") {
    if ([2, 5, 9].includes(int)) return available;
    if ([1, 8, 11].includes(int)) return caution;
    if ([4, 6].includes(int)) return strong;
  }
  if (family === "minorMajor") {
    if ([2, 5, 9].includes(int)) return available;
    if ([1, 8, 10].includes(int)) return caution;
  }
  if (family === "dominant" || family === "altered") {
    if ([2, 6, 9].includes(int)) return available;
    if ([1, 3, 8].includes(int)) return strong;
    if (int === 5 && chordKey !== "sevenSus4") return caution;
  }
  if (family === "sus") {
    if ([2, 5, 9, 10].includes(int)) return available;
    if ([3, 4, 11].includes(int)) return strong;
  }
  if (family === "halfDiminished") {
    if ([1, 2, 5, 8].includes(int)) return available;
    if ([4, 9, 11].includes(int)) return caution;
  }
  if (family === "diminished") {
    if ([2, 5, 8, 9, 11].includes(int)) return available;
  }
  if (family === "augmented") {
    if ([2, 6, 10, 11].includes(int)) return available;
    if ([5, 9].includes(int)) return caution;
  }
  return caution;
}

function compatibility(chordRootPc, chordKey, scaleRootPc, scaleKey) {
  const chordNotes = noteSet(chordRootPc, CHORD_TYPES[chordKey].intervals);
  const scaleNotes = new Set(noteSet(scaleRootPc, SCALE_TYPES[scaleKey].intervals));
  const matched = chordNotes.filter(n => scaleNotes.has(n));
  const pct = Math.round((unique(matched).length / unique(chordNotes).length) * 100);
  return { pct, matched: unique(matched), missing: unique(chordNotes).filter(n => !scaleNotes.has(n)) };
}

function renderNoteChips(scaleRoot, scaleKey, chordRoot, chordKey) {
  const scale = SCALE_TYPES[scaleKey];
  const scalePcs = noteSet(scaleRoot.pc, scale.intervals);
  return scalePcs.map((n, idx) => {
    const c = classifyNote(n, chordRoot.pc, chordKey, scaleRoot.pc, scaleKey);
    const playable = Synth.supported ? ` data-play="note" data-notes="${n}" role="button" tabindex="0"` : "";
    return `<span class="note-chip ${c.css}"${playable} title="${c.label}: ${c.detail}">
      ${noteName(n, scaleRoot.pref)}
      <small>${scale.degrees[idx]}</small>
    </span>`;
  }).join("");
}

function groupClassifications(scaleRoot, scaleKey, chordRoot, chordKey) {
  const scalePcs = noteSet(scaleRoot.pc, SCALE_TYPES[scaleKey].intervals);
  const groups = { chord: [], tension: [], caution: [], outside: [] };
  scalePcs.forEach(n => {
    const c = classifyNote(n, chordRoot.pc, chordKey, scaleRoot.pc, scaleKey);
    groups[c.type].push(`${noteName(n, scaleRoot.pref)} (${INTERVAL_NAMES[intervalFromRoot(n, chordRoot.pc)]})`);
  });
  return groups;
}

function renderExplorer() {
  const chordRoot = rootByName(getSelectValue(els.chordRoot, "C"));
  const scaleRoot = rootByName(getSelectValue(els.scaleRoot, "C"));
  const chordKey = getSelectValue(els.chordType, "maj7");
  const scaleKey = getSelectValue(els.scaleType, "lydian");
  const chord = CHORD_TYPES[chordKey];
  const scale = SCALE_TYPES[scaleKey];
  const comp = compatibility(chordRoot.pc, chordKey, scaleRoot.pc, scaleKey);
  const groups = groupClassifications(scaleRoot, scaleKey, chordRoot, chordKey);
  const badgeClass = comp.pct === 100 ? "good" : comp.pct >= 70 ? "warn" : "bad";
  const badgeText = comp.pct === 100 ? "Compatible" : comp.pct >= 70 ? "Parcial" : "Choca bastante";
  const chordPcs = noteSet(chordRoot.pc, chord.intervals);
  const scalePcs = noteSet(scaleRoot.pc, scale.intervals);
  const chordNotes = chordPcs.map(n => noteName(n, chordRoot.pref)).join(" · ");
  const scaleNotes = scalePcs.map(n => noteName(n, scaleRoot.pref)).join(" · ");

  els.explorerResult.innerHTML = `
    <div class="result-title">
      <div>
        <h3>${chordSymbol(chordRoot, chordKey)} sobre ${scaleSymbol(scaleRoot, scaleKey)}</h3>
        <p>${scale.mood}.</p>
        <div class="play-row">
          ${playButton("chord", chordPcs, "Escuchar el acorde")}
          ${playButton("scale", scalePcs, "Escuchar la escala")}
          <span class="play-hint">Toca el acorde y recorre la escala. También puedes pulsar cada nota.</span>
        </div>
      </div>
      <span class="badge ${badgeClass}">${badgeText} · ${comp.pct}%</span>
    </div>

    <strong>Notas de la escala clasificadas</strong>
    <div class="note-row">${renderNoteChips(scaleRoot, scaleKey, chordRoot, chordKey)}</div>

    <div class="legend">
      <span><i class="dot chord"></i>Nota del acorde</span>
      <span><i class="dot tension"></i>Tensión / color</span>
      <span><i class="dot caution"></i>Cuidado</span>
      <span><i class="dot outside"></i>Externa</span>
    </div>

    <div class="info-grid">
      <div class="info-box">
        <strong>Acorde</strong>
        <p>${chordSymbol(chordRoot, chordKey)} = ${chordNotes}</p>
        <div class="kbd-line"><span class="kbd">${chord.formula}</span><span class="kbd">${chord.family}</span></div>
      </div>
      <div class="info-box">
        <strong>Escala</strong>
        <p>${scaleSymbol(scaleRoot, scaleKey)} = ${scaleNotes}</p>
        <div class="kbd-line"><span class="kbd">${scale.formula}</span></div>
      </div>
      <div class="info-box">
        <strong>Tensiones disponibles</strong>
        <p>${groups.tension.length ? groups.tension.join(" · ") : "No aparecen tensiones disponibles claras en esta combinación."}</p>
      </div>
      <div class="info-box">
        <strong>Notas de cuidado</strong>
        <p>${groups.caution.length ? groups.caution.join(" · ") : "No hay notas de cuidado evidentes dentro de la escala."}</p>
      </div>
    </div>

    <div class="info-box" style="margin-top: 14px;">
      <strong>¿Por qué funciona?</strong>
      <p>${buildWhyText(comp, chordRoot, chordKey, scaleRoot, scaleKey)}</p>
      <p><strong>Práctica:</strong> toca primero las notas del acorde (${chordNotes}). Luego agrega una tensión a la vez. Termina frases en notas del acorde para sonar intencional, no como accidente con buena actitud.</p>
    </div>
  `;
}

function buildWhyText(comp, chordRoot, chordKey, scaleRoot, scaleKey) {
  const missing = comp.missing.map(n => noteName(n, chordRoot.pref));
  const chord = chordSymbol(chordRoot, chordKey);
  const scale = scaleSymbol(scaleRoot, scaleKey);
  if (comp.pct === 100) {
    return `${scale} contiene todas las notas estructurales de ${chord}. Por eso puedes usar la escala como territorio melódico y el acorde como puntos de reposo.`;
  }
  if (comp.pct >= 70) {
    return `${scale} contiene buena parte de ${chord}, pero faltan ${missing.join(" · ")}. Puede servir como color parcial o recurso externo, pero no como escala base sin ajustar esas notas.`;
  }
  return `${scale} no contiene suficientes notas de ${chord}. Faltan ${missing.join(" · ")}. Puede usarse como efecto externo, pero para explicar relación escala–acorde no es la pareja más amable.`;
}

function suggestScalesForChord(chordKey) {
  const family = CHORD_TYPES[chordKey].family;
  const map = {
    major: ["major", "lydian", "majorPent"],
    minor: ["dorian", "aeolian", "minorPent", "phrygian", "blues"],
    minorMajor: ["melodicMinor", "harmonicMinor"],
    dominant: ["mixolydian", "blues", "minorPent", "altered", "diminishedHW"],
    altered: ["altered", "diminishedHW", "mixolydian"],
    sus: ["mixolydian", "dorian", "minorPent"],
    halfDiminished: ["locrian", "dorian", "aeolian"],
    diminished: ["diminishedWH", "locrian"],
    augmented: ["melodicMinor", "lydian"]
  };
  return map[family] || ["major", "dorian", "mixolydian"];
}

function renderCompare() {
  const root = rootByName(getSelectValue(els.compareRoot, "C"));
  const chordKey = getSelectValue(els.compareChordType, "dom7");
  const scaleKeys = unique([...suggestScalesForChord(chordKey), "major", "minorPent", "blues"]);
  const chordPcs = noteSet(root.pc, CHORD_TYPES[chordKey].intervals);
  els.compareGrid.innerHTML = scaleKeys.map(scaleKey => {
    const scale = SCALE_TYPES[scaleKey];
    const comp = compatibility(root.pc, chordKey, root.pc, scaleKey);
    const noteChips = renderNoteChips(root, scaleKey, root, chordKey);
    const scalePcs = noteSet(root.pc, scale.intervals);
    return `
      <article class="compare-card">
        <span class="badge ${comp.pct === 100 ? "good" : comp.pct >= 70 ? "warn" : "bad"}">${comp.pct}% compatible</span>
        <h3>${scaleSymbol(root, scaleKey)}</h3>
        <p>${scale.mood}.</p>
        <div class="compat-meter"><span style="width:${comp.pct}%"></span></div>
        <div class="note-row">${noteChips}</div>
        <div class="play-row">
          ${playButton("chord", chordPcs, "Escuchar el acorde")}
          ${playButton("scale", scalePcs, "Escuchar esta escala")}
        </div>
        <p><strong>Uso:</strong> ${scale.use}</p>
      </article>
    `;
  }).join("");
}

function identifyTriad(intervals) {
  const sorted = [...intervals].sort((a, b) => a - b).join(",");
  const map = {
    "0,4,7": "maj",
    "0,3,7": "min",
    "0,3,6": "dim",
    "0,4,8": "aug",
    "0,5,7": "sus4",
    "0,2,7": "sus2"
  };
  return map[sorted] || "maj";
}

function identifySeventh(intervals) {
  const sorted = [...intervals].sort((a, b) => a - b).join(",");
  const map = {
    "0,4,7,11": "maj7",
    "0,4,7,10": "dom7",
    "0,3,7,10": "min7",
    "0,3,7,11": "minMaj7",
    "0,3,6,10": "halfDim",
    "0,3,6,9": "dim7",
    "0,4,8,10": "aug"
  };
  return map[sorted] || identifyTriad(intervals.slice(0, 3));
}

function buildDiatonicRows(root, scaleKey) {
  const scale = SCALE_TYPES[scaleKey];
  const notes = noteSet(root.pc, scale.intervals);
  const degreeLabels = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  return notes.map((startPc, idx) => {
    const triadNotes = [notes[idx], notes[(idx + 2) % notes.length], notes[(idx + 4) % notes.length]];
    const seventhNotes = [notes[idx], notes[(idx + 2) % notes.length], notes[(idx + 4) % notes.length], notes[(idx + 6) % notes.length]];
    const triadIntervals = triadNotes.map(n => intervalFromRoot(n, startPc));
    const seventhIntervals = seventhNotes.map(n => intervalFromRoot(n, startPc));
    const triadKey = identifyTriad(triadIntervals);
    const seventhKey = identifySeventh(seventhIntervals);
    const localRoot = { ...root, name: noteName(startPc, root.pref), pc: startPc };
    return {
      degree: degreeLabels[idx] || `${idx + 1}`,
      note: noteName(startPc, root.pref),
      triad: chordSymbol(localRoot, triadKey),
      triadNotes: triadNotes.map(n => noteName(n, root.pref)).join(" · "),
      seventh: chordSymbol(localRoot, seventhKey),
      seventhNotes: seventhNotes.map(n => noteName(n, root.pref)).join(" · ")
    };
  });
}

function renderDiatonic() {
  const root = rootByName(getSelectValue(els.diatonicRoot, "C"));
  const scaleKey = getSelectValue(els.diatonicScale, "major");
  const scale = SCALE_TYPES[scaleKey];
  const rows = buildDiatonicRows(root, scaleKey);
  els.diatonicResult.innerHTML = `
    <h3>${scaleSymbol(root, scaleKey)}</h3>
    <p><strong>Fórmula:</strong> ${scale.formula}. <strong>Color:</strong> ${scale.mood}.</p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Grado</th><th>Nota raíz</th><th>Triada</th><th>Notas triada</th><th>Séptima</th><th>Notas séptima</th></tr>
        </thead>
        <tbody>
          ${rows.map(r => `<tr><td>${r.degree}</td><td>${r.note}</td><td><strong>${r.triad}</strong></td><td>${r.triadNotes}</td><td><strong>${r.seventh}</strong></td><td>${r.seventhNotes}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p>Lectura pedagógica: cada acorde nace usando notas alternas de la escala. Si luego improvisas, las notas del acorde son reposo y el resto de la escala funciona como color o paso.</p>
  `;
}

function renderProgression() {
  const root = rootByName(getSelectValue(els.progressionRoot, "C"));
  const progKey = getSelectValue(els.progressionType, "iiVI");
  const prog = PROGRESSIONS[progKey];
  const steps = prog.steps.map(step => {
    const localRootPc = pc(root.pc + step.offset);
    const localRoot = { ...root, name: noteName(localRootPc, root.pref), pc: localRootPc };
    const chord = chordSymbol(localRoot, step.chord);
    const scale = scaleSymbol(localRoot, step.scale);
    const chordPcs = noteSet(localRootPc, CHORD_TYPES[step.chord].intervals);
    const scalePcs = noteSet(localRootPc, SCALE_TYPES[step.scale].intervals);
    const notes = chordPcs.map(n => noteName(n, root.pref)).join(" · ");
    return { ...step, localRoot, chord, scale, notes, chordPcs, scalePcs };
  });

  els.progressionResult.innerHTML = `
    <h3>${prog.label} en ${root.name}</h3>
    <p>${prog.description}</p>
    <div class="progression-steps">
      ${steps.map(s => `
        <div class="step-card">
          <span class="degree">${s.degree}</span>
          <h3>${s.chord}</h3>
          <p><strong>Escala sugerida:</strong><br>${s.scale}</p>
          <p><strong>Notas guía:</strong><br>${s.notes}</p>
          <div class="play-row">
            ${playButton("chord", s.chordPcs, "Escuchar el acorde")}
            ${playButton("scale", s.scalePcs, "Escuchar la escala")}
          </div>
        </div>
      `).join("")}
    </div>
    <div class="info-box" style="margin-top:16px;">
      <strong>Cómo practicarla</strong>
      <p>${prog.practice}</p>
      <p>Ruta de 5 minutos: 1) toca solo notas del acorde, 2) agrega una tensión disponible, 3) conecta la última nota de un acorde con la primera del siguiente por paso cercano.</p>
    </div>
  `;
}

function makeQuiz() {
  const generators = [quizClassifyNote, quizScaleContainsChord, quizDiatonicChord, quizBestColor, quizFormula];
  if (Synth.supported) generators.push(quizHearChord);
  currentQuiz = generators[Math.floor(Math.random() * generators.length)]();
  renderQuiz(false);
  if (currentQuiz.audio) playQuizAudio();
}

function quizClassifyNote() {
  const root = randomRoot();
  const chordKey = randomFrom(["maj7", "min7", "dom7", "halfDim", "sevenSus4"]);
  const scaleKey = randomFrom(suggestScalesForChord(chordKey));
  const scaleNotes = noteSet(root.pc, SCALE_TYPES[scaleKey].intervals);
  const notePc = randomFrom(scaleNotes);
  const cls = classifyNote(notePc, root.pc, chordKey, root.pc, scaleKey);
  const choices = ["Nota del acorde", "Tensión disponible", "Tensión fuerte", "Nota de cuidado", "Nota externa"];
  const correctLabel = cls.label === "Tensión fuerte" ? "Tensión fuerte" : cls.label;
  return {
    question: `Sobre ${chordSymbol(root, chordKey)} usando ${scaleSymbol(root, scaleKey)}, ¿qué función cumple ${noteName(notePc, root.pref)}?`,
    choices,
    correct: choices.indexOf(correctLabel),
    explanation: `${noteName(notePc, root.pref)} es ${INTERVAL_NAMES[intervalFromRoot(notePc, root.pc)]} del acorde. ${cls.detail}`
  };
}

function quizScaleContainsChord() {
  const root = randomRoot();
  const chordKey = randomFrom(["maj7", "min7", "dom7", "halfDim", "minMaj7"]);
  const suggested = suggestScalesForChord(chordKey);
  const fullyCompatible = suggested.filter(s => compatibility(root.pc, chordKey, root.pc, s).pct === 100);
  const correctScale = randomFrom(fullyCompatible.length ? fullyCompatible : suggested);
  const distractors = unique(Object.keys(SCALE_TYPES).filter(s => s !== correctScale)).sort(() => Math.random() - .5).slice(0, 3);
  const choices = shuffle([correctScale, ...distractors]).map(s => SCALE_TYPES[s].label);
  const correct = choices.indexOf(SCALE_TYPES[correctScale].label);
  return {
    question: `¿Cuál escala contiene completo el acorde ${chordSymbol(root, chordKey)}?`,
    choices,
    correct,
    explanation: `${scaleSymbol(root, correctScale)} contiene las notas de ${chordSymbol(root, chordKey)}. Por eso sirve como territorio melódico base.`
  };
}

function quizDiatonicChord() {
  const root = randomRoot();
  const degreeIndex = Math.floor(Math.random() * 7);
  const row = MODE_FROM_MAJOR_DEGREES[degreeIndex];
  const localPc = pc(root.pc + SCALE_TYPES.major.intervals[degreeIndex]);
  const localRoot = { ...root, name: noteName(localPc, root.pref), pc: localPc };
  const correct = chordSymbol(localRoot, row.seventh);
  const choices = shuffle(unique([correct, ...Object.keys(CHORD_TYPES).sort(() => Math.random() - .5).slice(0, 4).map(k => chordSymbol(localRoot, k))])).slice(0, 4);
  if (!choices.includes(correct)) choices[0] = correct;
  return {
    question: `En la escala de ${root.name} mayor, ¿qué acorde de séptima aparece en el grado ${row.degree}?`,
    choices,
    correct: choices.indexOf(correct),
    explanation: `El grado ${row.degree} de ${root.name} mayor es ${localRoot.name}. Al apilar terceras aparece ${correct}, relacionado con el modo ${SCALE_TYPES[row.mode].label}.`
  };
}

function quizBestColor() {
  const root = randomRoot();
  const prompts = [
    { chord: "min7", target: "un color menor luminoso", scale: "dorian" },
    { chord: "maj7", target: "un color mayor flotante y cinematográfico", scale: "lydian" },
    { chord: "dom7", target: "un dominante clásico sin alteraciones pesadas", scale: "mixolydian" },
    { chord: "dom7", target: "un dominante muy tenso que quiere resolver", scale: "altered" },
    { chord: "halfDim", target: "un sonido semidisminuido funcional", scale: "locrian" }
  ];
  const item = randomFrom(prompts);
  const choicesKeys = shuffle(unique([item.scale, ...Object.keys(SCALE_TYPES).sort(() => Math.random() - .5).slice(0, 4)])).slice(0, 4);
  if (!choicesKeys.includes(item.scale)) choicesKeys[0] = item.scale;
  const choices = choicesKeys.map(s => SCALE_TYPES[s].label);
  return {
    question: `Quieres improvisar sobre ${chordSymbol(root, item.chord)} con ${item.target}. ¿Qué escala elegirías?`,
    choices,
    correct: choices.indexOf(SCALE_TYPES[item.scale].label),
    explanation: `${scaleSymbol(root, item.scale)} da ${SCALE_TYPES[item.scale].mood}. No es magia: son intervalos haciendo su trabajo sin pedir aplausos.`
  };
}

function quizFormula() {
  const scaleKey = randomFrom(Object.keys(SCALE_TYPES));
  const correct = SCALE_TYPES[scaleKey].formula;
  const choices = shuffle(unique([correct, ...Object.values(SCALE_TYPES).map(s => s.formula).sort(() => Math.random() - .5).slice(0, 4)])).slice(0, 4);
  if (!choices.includes(correct)) choices[0] = correct;
  return {
    question: `¿Cuál es la fórmula de la escala ${SCALE_TYPES[scaleKey].label}?`,
    choices,
    correct: choices.indexOf(correct),
    explanation: `${SCALE_TYPES[scaleKey].label}: ${correct}. Su carácter: ${SCALE_TYPES[scaleKey].mood}.`
  };
}

function quizHearChord() {
  const root = randomRoot();
  const options = ["maj7", "min7", "dom7", "minMaj7", "halfDim", "dim7", "aug"];
  const correctKey = randomFrom(options);
  const distractors = shuffle(options.filter(k => k !== correctKey)).slice(0, 3);
  const keys = shuffle([correctKey, ...distractors]);
  const choices = keys.map(k => CHORD_TYPES[k].label);
  return {
    question: "Escucha el acorde y di de qué tipo es (la tónica no importa aquí).",
    choices,
    correct: keys.indexOf(correctKey),
    explanation: `Era un acorde ${CHORD_TYPES[correctKey].label} (${CHORD_TYPES[correctKey].formula}). ${CHORD_TYPES[correctKey].use}`,
    audio: { kind: "chord", pcs: noteSet(root.pc, CHORD_TYPES[correctKey].intervals) }
  };
}

function renderQuiz(answered, selectedIndex = null) {
  const replay = currentQuiz.audio && Synth.supported
    ? `<button class="secondary" id="replayQuizBtn" type="button">🔊 Reproducir de nuevo</button>`
    : "";
  els.quizCard.innerHTML = `
    <p class="eyebrow">Pregunta</p>
    <h3 class="question">${currentQuiz.question}</h3>
    <div class="answer-grid">
      ${currentQuiz.choices.map((choice, idx) => {
        let cls = "answer-btn";
        if (answered && idx === currentQuiz.correct) cls += " correct";
        if (answered && idx === selectedIndex && idx !== currentQuiz.correct) cls += " wrong";
        return `<button type="button" class="${cls}" data-answer="${idx}" ${answered ? "disabled" : ""}>${choice}</button>`;
      }).join("")}
    </div>
    <div class="feedback ${answered ? "show" : ""}">
      <strong>${answered && selectedIndex === currentQuiz.correct ? "Correcto" : answered ? "Casi, pero no" : ""}</strong>
      <p>${answered ? currentQuiz.explanation : ""}</p>
    </div>
    <div class="quiz-actions">
      <button class="primary" id="nextQuizBtn" type="button">Nueva pregunta</button>
      ${replay}
      <button class="secondary" id="explainQuizBtn" type="button">Mostrar explicación</button>
    </div>
  `;

  els.quizCard.querySelectorAll("[data-answer]").forEach(btn => {
    btn.addEventListener("click", () => checkAnswer(Number(btn.dataset.answer)));
  });
  document.getElementById("nextQuizBtn").addEventListener("click", makeQuiz);
  document.getElementById("explainQuizBtn").addEventListener("click", () => renderQuiz(true, null));
  const replayBtn = document.getElementById("replayQuizBtn");
  if (replayBtn) replayBtn.addEventListener("click", playQuizAudio);
}

function playQuizAudio() {
  if (!currentQuiz || !currentQuiz.audio) return;
  const { kind, pcs } = currentQuiz.audio;
  if (kind === "scale") Synth.sequence(pcs);
  else Synth.chord(pcs);
}

function checkAnswer(idx) {
  if (idx === currentQuiz.correct) {
    score += 10;
    streak += 1;
  } else {
    streak = 0;
  }
  saveStats();
  renderStats();
  renderQuiz(true, idx);
}

function renderStats() {
  els.scoreValue.textContent = score;
  els.streakValue.textContent = streak;
}

function saveStats() {
  localStorage.setItem("musimapaScore", String(score));
  localStorage.setItem("musimapaStreak", String(streak));
}

function resetStats() {
  score = 0;
  streak = 0;
  saveStats();
  renderStats();
}

function renderLibrary() {
  const q = els.librarySearch.value.trim().toLowerCase();
  const scaleItems = Object.entries(SCALE_TYPES).map(([key, s]) => ({
    type: "Escala",
    title: s.label,
    body: `${s.formula} · ${s.mood}. ${s.use}`,
    tags: [key, s.label, s.formula, s.mood, s.use].join(" ").toLowerCase(),
    play: playButton("scale", noteSet(0, s.intervals), `Escuchar ${s.label} en C`)
  }));
  const chordItems = Object.entries(CHORD_TYPES).map(([key, c]) => ({
    type: "Acorde",
    title: c.label,
    body: `${c.formula} · ${c.use}`,
    tags: [key, c.label, c.formula, c.family, c.use].join(" ").toLowerCase(),
    play: playButton("chord", noteSet(0, c.intervals), `Escuchar ${c.label} en C`)
  }));
  const items = [...scaleItems, ...chordItems].filter(item => !q || item.tags.includes(q));
  els.libraryGrid.innerHTML = items.length ? items.map(item => `
    <article class="library-item">
      <span class="library-type">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      ${item.play ? `<div class="play-row">${item.play}</div>` : ""}
    </article>
  `).join("") : `<div class="empty-state">No encontré nada con ese término. La teoría musical también tiene límites, increíble.</div>`;
}

function randomRoot() {
  return randomFrom(ROOTS.filter(r => !r.name.includes("#") || ["C#", "F#"].includes(r.name)));
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function bindEvents() {
  document.querySelectorAll("[data-tab-link]").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = e.currentTarget.dataset.tabLink;
      if (!id || id === "inicio") return;
      switchTab(id);
    });
  });

  els.menuToggle.addEventListener("click", () => {
    const open = els.navLinks.classList.toggle("open");
    els.menuToggle.setAttribute("aria-expanded", String(open));
  });

  // Reproducción de notas / acordes / escalas (delegación + teclado)
  document.addEventListener("click", handlePlayTrigger);
  document.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches?.("[data-play]")) {
      e.preventDefault();
      handlePlayTrigger(e);
    }
  });

  els.themeToggle.addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
  els.soundToggle.addEventListener("click", () => {
    Synth.setEnabled(!Synth.enabled);
    syncSoundUI();
  });
  els.heroDemoBtn?.addEventListener("click", () => {
    Synth.chord(noteSet(0, CHORD_TYPES.maj7.intervals));
    setTimeout(() => Synth.sequence(noteSet(0, SCALE_TYPES.lydian.intervals)), 1700);
  });

  [els.chordRoot, els.chordType, els.scaleRoot, els.scaleType].forEach(el => el.addEventListener("change", renderExplorer));
  els.sameRootBtn.addEventListener("click", () => {
    els.scaleRoot.value = els.chordRoot.value;
    renderExplorer();
  });
  els.randomExploreBtn.addEventListener("click", () => {
    const root = randomRoot();
    const chordKey = randomFrom(Object.keys(CHORD_TYPES));
    const scaleKey = randomFrom(suggestScalesForChord(chordKey));
    els.chordRoot.value = root.name;
    els.scaleRoot.value = root.name;
    els.chordType.value = chordKey;
    els.scaleType.value = scaleKey;
    renderExplorer();
  });

  els.buildCompareBtn.addEventListener("click", renderCompare);
  [els.compareRoot, els.compareChordType].forEach(el => el.addEventListener("change", renderCompare));
  els.buildDiatonicBtn.addEventListener("click", renderDiatonic);
  [els.diatonicRoot, els.diatonicScale].forEach(el => el.addEventListener("change", renderDiatonic));
  els.buildProgressionBtn.addEventListener("click", renderProgression);
  [els.progressionRoot, els.progressionType].forEach(el => el.addEventListener("change", renderProgression));
  els.resetStatsBtn.addEventListener("click", resetStats);
  els.librarySearch.addEventListener("input", renderLibrary);
  els.clearSearchBtn.addEventListener("click", () => {
    els.librarySearch.value = "";
    renderLibrary();
  });
}

function handlePlayTrigger(e) {
  const trigger = e.target.closest("[data-play]");
  if (!trigger) return;
  const kind = trigger.dataset.play;
  const pcs = trigger.dataset.notes.split(",").map(Number);
  if (kind === "note") Synth.note(pcs[0]);
  else if (kind === "scale") Synth.sequence(pcs);
  else Synth.chord(pcs);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("musimapaTheme", theme);
  els.themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  els.themeToggle.querySelector("[data-theme-icon]").textContent = theme === "dark" ? "🌙" : "☀️";
}

function syncSoundUI() {
  const on = Synth.enabled;
  els.soundToggle.setAttribute("aria-pressed", String(on));
  els.soundToggle.querySelector("[data-sound-icon]").textContent = on ? "🔊" : "🔇";
}

function switchTab(id) {
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
  document.querySelectorAll("[data-tab-link][role='tab']").forEach(btn => {
    btn.classList.remove("active");
    btn.setAttribute("aria-selected", "false");
  });
  const panel = document.getElementById(id);
  if (panel) {
    panel.classList.add("active");
    panel.focus({ preventScroll: true });
    window.scrollTo({ top: document.querySelector("main").offsetTop - 12, behavior: "smooth" });
  }
  document.querySelectorAll(`[data-tab-link="${id}"]`).forEach(btn => {
    btn.classList.add("active");
    if (btn.getAttribute("role") === "tab") btn.setAttribute("aria-selected", "true");
  });
  els.navLinks.classList.remove("open");
  els.menuToggle.setAttribute("aria-expanded", "false");
}

function cacheEls() {
  [
    "menuToggle", "navLinks", "themeToggle", "soundToggle", "heroDemoBtn",
    "chordRoot", "chordType", "scaleRoot", "scaleType", "sameRootBtn", "randomExploreBtn",
    "explorerResult", "compareRoot", "compareChordType", "buildCompareBtn", "compareGrid", "diatonicRoot",
    "diatonicScale", "buildDiatonicBtn", "diatonicResult", "progressionRoot", "progressionType", "buildProgressionBtn",
    "progressionResult", "quizCard", "scoreValue", "streakValue", "resetStatsBtn", "librarySearch", "clearSearchBtn", "libraryGrid"
  ].forEach(id => els[id] = document.getElementById(id));
}

function init() {
  cacheEls();
  setTheme(localStorage.getItem("musimapaTheme") || "light"); // claro por defecto
  syncSoundUI();
  populateSelects();
  bindEvents();
  renderExplorer();
  renderCompare();
  renderDiatonic();
  renderProgression();
  renderStats();
  makeQuiz();
  renderLibrary();
}

document.addEventListener("DOMContentLoaded", init);
