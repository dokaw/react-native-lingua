import type { Lesson } from '@/types/learning';

export const lessons: Lesson[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SPANISH — Unit 1: Greetings & Basics
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'es-u1-l1',
    unitId: 'es-unit-1',
    languageId: 'es',
    title: 'Hello & Goodbye',
    description: 'Learn the most essential Spanish greetings.',
    type: 'vocabulary',
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Say hello in Spanish' },
      { description: 'Say goodbye in Spanish' },
      { description: 'Use basic greetings for morning and night' },
    ],
    vocabulary: [
      {
        word: 'hola',
        translation: 'hello',
        pronunciation: 'OH-lah',
        exampleSentence: '¡Hola! ¿Cómo estás?',
        exampleTranslation: 'Hello! How are you?',
      },
      {
        word: 'adiós',
        translation: 'goodbye',
        pronunciation: 'ah-DYOS',
        exampleSentence: '¡Adiós! Hasta mañana.',
        exampleTranslation: 'Goodbye! See you tomorrow.',
      },
      {
        word: 'buenos días',
        translation: 'good morning',
        pronunciation: 'BWEH-nos DEE-as',
        exampleSentence: '¡Buenos días, señora!',
        exampleTranslation: 'Good morning, ma\'am!',
      },
      {
        word: 'buenas noches',
        translation: 'good night',
        pronunciation: 'BWEH-nas NOH-ches',
        exampleSentence: '¡Buenas noches! Que descanses.',
        exampleTranslation: 'Good night! Rest well.',
      },
    ],
    phrases: [
      {
        text: '¡Hola! ¿Cómo estás?',
        translation: 'Hello! How are you?',
        pronunciation: 'OH-lah KOH-moh es-TAS',
        context: 'Greeting a friend casually',
      },
      {
        text: 'Hasta luego.',
        translation: 'See you later.',
        pronunciation: 'AS-tah LWEH-go',
        context: 'Saying goodbye informally',
      },
    ],
    activities: [
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'hola',
          translation: 'hello',
          pronunciation: 'OH-lah',
          exampleSentence: '¡Hola! ¿Cómo estás?',
          exampleTranslation: 'Hello! How are you?',
        },
      },
      {
        type: 'multiple-choice',
        question: 'What does "hola" mean?',
        options: ['hello', 'goodbye', 'please', 'thank you'],
        correctIndex: 0,
      },
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'adiós',
          translation: 'goodbye',
          pronunciation: 'ah-DYOS',
          exampleSentence: '¡Adiós! Hasta mañana.',
          exampleTranslation: 'Goodbye! See you tomorrow.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'What does "adiós" mean?',
        options: ['hello', 'goodbye', 'good morning', 'good night'],
        correctIndex: 1,
      },
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'buenos días',
          translation: 'good morning',
          pronunciation: 'BWEH-nos DEE-as',
        },
      },
      {
        type: 'fill-in-blank',
        sentence: 'Buenos ___, señor.',
        correctAnswer: 'días',
        options: ['días', 'noches', 'tardes', 'hola'],
        hint: 'This greeting is used in the morning.',
      },
      {
        type: 'translation',
        prompt: 'How do you say "hello" in Spanish?',
        acceptedAnswers: ['hola', 'Hola'],
        hint: 'It starts with an H.',
      },
      {
        type: 'match-pairs',
        pairs: [
          { source: 'hola', target: 'hello' },
          { source: 'adiós', target: 'goodbye' },
          { source: 'buenos días', target: 'good morning' },
          { source: 'buenas noches', target: 'good night' },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: `You are Luna, a warm and enthusiastic Spanish teacher for absolute beginners.
Your lesson topic is Spanish greetings: hola, adiós, buenos días, buenas noches.
Keep every explanation under 2 sentences. Use simple English. After introducing a word, say it slowly and clearly in Spanish, then invite the student to repeat. Celebrate correct answers with short encouragement. If a student makes a mistake, gently correct them and have them try again. Do not move on until the student attempts each word.`,
      welcomeMessage: '¡Hola! I\'m Luna, your Spanish teacher. Today we\'re learning how to say hello and goodbye. Ready? Let\'s start!',
      focusVocab: ['hola', 'adiós', 'buenos días', 'buenas noches'],
      teachingStyle: 'conversational',
    },
  },

  {
    id: 'es-u1-l2',
    unitId: 'es-unit-1',
    languageId: 'es',
    title: 'Please & Thank You',
    description: 'Be polite in Spanish with essential courtesy words.',
    type: 'vocabulary',
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Say "please" in Spanish' },
      { description: 'Say "thank you" and "you\'re welcome"' },
      { description: 'Use polite expressions in a sentence' },
    ],
    vocabulary: [
      {
        word: 'por favor',
        translation: 'please',
        pronunciation: 'por fah-BOR',
        exampleSentence: 'Un café, por favor.',
        exampleTranslation: 'A coffee, please.',
      },
      {
        word: 'gracias',
        translation: 'thank you',
        pronunciation: 'GRAH-syahs',
        exampleSentence: 'Muchas gracias.',
        exampleTranslation: 'Thank you very much.',
      },
      {
        word: 'de nada',
        translation: 'you\'re welcome',
        pronunciation: 'deh NAH-dah',
        exampleSentence: 'De nada, con gusto.',
        exampleTranslation: 'You\'re welcome, with pleasure.',
      },
      {
        word: 'perdón',
        translation: 'excuse me / sorry',
        pronunciation: 'per-DON',
        exampleSentence: 'Perdón, ¿dónde está el baño?',
        exampleTranslation: 'Excuse me, where is the bathroom?',
      },
    ],
    phrases: [
      {
        text: 'Un café, por favor.',
        translation: 'A coffee, please.',
        pronunciation: 'oon kah-FEH por fah-BOR',
        context: 'Ordering at a café',
      },
      {
        text: 'Muchas gracias.',
        translation: 'Thank you very much.',
        pronunciation: 'MOO-chas GRAH-syahs',
        context: 'Expressing gratitude warmly',
      },
    ],
    activities: [
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'por favor',
          translation: 'please',
          pronunciation: 'por fah-BOR',
          exampleSentence: 'Un café, por favor.',
          exampleTranslation: 'A coffee, please.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'What does "por favor" mean?',
        options: ['thank you', 'please', 'sorry', 'you\'re welcome'],
        correctIndex: 1,
      },
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'gracias',
          translation: 'thank you',
          pronunciation: 'GRAH-syahs',
        },
      },
      {
        type: 'translation',
        prompt: 'How do you say "thank you" in Spanish?',
        acceptedAnswers: ['gracias', 'Gracias'],
      },
      {
        type: 'fill-in-blank',
        sentence: 'Un café, por ___.',
        correctAnswer: 'favor',
        options: ['favor', 'gracias', 'nada', 'perdón'],
      },
      {
        type: 'multiple-choice',
        question: 'Someone says "gracias" to you. How do you reply?',
        options: ['hola', 'adiós', 'de nada', 'por favor'],
        correctIndex: 2,
        hint: '"De nada" means you\'re welcome.',
      },
      {
        type: 'match-pairs',
        pairs: [
          { source: 'por favor', target: 'please' },
          { source: 'gracias', target: 'thank you' },
          { source: 'de nada', target: 'you\'re welcome' },
          { source: 'perdón', target: 'excuse me' },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: `You are Luna, a warm and patient Spanish teacher for beginners.
This lesson covers Spanish courtesy words: por favor, gracias, de nada, perdón.
Introduce each word with a real-life scenario (ordering food, accepting help). Keep sentences short. After each word, role-play a tiny dialogue: say a prompt in English and ask the student to reply in Spanish. Give enthusiastic praise for effort. Gently correct mistakes and retry once.`,
      welcomeMessage: '¡Hola de nuevo! Being polite in Spanish is super easy. Let\'s learn the magic words: por favor and gracias!',
      focusVocab: ['por favor', 'gracias', 'de nada', 'perdón'],
      teachingStyle: 'conversational',
    },
  },

  {
    id: 'es-u1-l3',
    unitId: 'es-unit-1',
    languageId: 'es',
    title: 'Introduce Yourself',
    description: 'Tell people your name and where you\'re from.',
    type: 'audio',
    order: 3,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [
      { description: 'Say your name in Spanish' },
      { description: 'Ask someone\'s name' },
      { description: 'Say where you\'re from' },
    ],
    vocabulary: [
      {
        word: 'me llamo',
        translation: 'my name is',
        pronunciation: 'meh YAH-mo',
        exampleSentence: 'Me llamo María.',
        exampleTranslation: 'My name is María.',
      },
      {
        word: '¿cómo te llamas?',
        translation: 'what\'s your name?',
        pronunciation: 'KOH-mo teh YAH-mas',
      },
      {
        word: 'soy de',
        translation: 'I am from',
        pronunciation: 'soy deh',
        exampleSentence: 'Soy de México.',
        exampleTranslation: 'I am from Mexico.',
      },
      {
        word: 'mucho gusto',
        translation: 'nice to meet you',
        pronunciation: 'MOO-cho GOOS-to',
      },
    ],
    phrases: [
      {
        text: 'Me llamo Juan. ¿Y tú?',
        translation: 'My name is Juan. And you?',
        pronunciation: 'meh YAH-mo hwahn ee too',
        context: 'Introducing yourself and asking back',
      },
      {
        text: 'Soy de España. ¿De dónde eres tú?',
        translation: 'I\'m from Spain. Where are you from?',
        pronunciation: 'soy deh es-PAH-nyah deh DON-deh EH-res too',
        context: 'Talking about where you\'re from',
      },
    ],
    activities: [
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'me llamo',
          translation: 'my name is',
          pronunciation: 'meh YAH-mo',
          exampleSentence: 'Me llamo María.',
          exampleTranslation: 'My name is María.',
        },
      },
      {
        type: 'multiple-choice',
        question: 'How do you say "my name is" in Spanish?',
        options: ['soy de', 'me llamo', 'mucho gusto', 'cómo te llamas'],
        correctIndex: 1,
      },
      {
        type: 'translation',
        prompt: 'How do you ask "what\'s your name?" in Spanish?',
        acceptedAnswers: ['¿cómo te llamas?', 'cómo te llamas', '¿Cómo te llamas?'],
        hint: 'It starts with ¿Cómo...',
      },
      {
        type: 'fill-in-blank',
        sentence: 'Me ___ Carlos.',
        correctAnswer: 'llamo',
        options: ['llamo', 'soy', 'gusto', 'llamas'],
      },
      {
        type: 'multiple-choice',
        question: 'What does "mucho gusto" mean?',
        options: ['goodbye', 'how are you?', 'nice to meet you', 'excuse me'],
        correctIndex: 2,
      },
      {
        type: 'match-pairs',
        pairs: [
          { source: 'me llamo', target: 'my name is' },
          { source: 'soy de', target: 'I am from' },
          { source: 'mucho gusto', target: 'nice to meet you' },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: `You are Luna, an engaging Spanish teacher conducting an audio lesson for beginners.
This lesson is about introducing yourself: me llamo, ¿cómo te llamas?, soy de, mucho gusto.
Speak naturally as if you're meeting the student for the first time. Model a short self-introduction, then guide the student to create their own using their name and country. Ask questions, wait for responses, and give warm feedback. Correct pronunciation gently by repeating the word correctly. End with a mini role-play conversation.`,
      welcomeMessage: '¡Hola! Today we\'re going to introduce ourselves in Spanish. I\'ll go first, then it\'s your turn! Ready?',
      focusVocab: ['me llamo', '¿cómo te llamas?', 'soy de', 'mucho gusto'],
      teachingStyle: 'conversational',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPANISH — Unit 2: Numbers & Time
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'es-u2-l1',
    unitId: 'es-unit-2',
    languageId: 'es',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Spanish.',
    type: 'vocabulary',
    order: 1,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: 'Count from 1 to 10 in Spanish' },
      { description: 'Recognize written Spanish numbers' },
    ],
    vocabulary: [
      { word: 'uno', translation: '1 (one)', pronunciation: 'OO-no' },
      { word: 'dos', translation: '2 (two)', pronunciation: 'dos' },
      { word: 'tres', translation: '3 (three)', pronunciation: 'tres' },
      { word: 'cuatro', translation: '4 (four)', pronunciation: 'KWAH-tro' },
      { word: 'cinco', translation: '5 (five)', pronunciation: 'SEEN-ko' },
      { word: 'seis', translation: '6 (six)', pronunciation: 'says' },
      { word: 'siete', translation: '7 (seven)', pronunciation: 'SYEH-teh' },
      { word: 'ocho', translation: '8 (eight)', pronunciation: 'OH-cho' },
      { word: 'nueve', translation: '9 (nine)', pronunciation: 'NWEH-beh' },
      { word: 'diez', translation: '10 (ten)', pronunciation: 'dyehs' },
    ],
    phrases: [
      {
        text: 'Tengo cinco manzanas.',
        translation: 'I have five apples.',
        pronunciation: 'TEN-go SEEN-ko man-ZAH-nas',
        context: 'Counting objects',
      },
    ],
    activities: [
      {
        type: 'vocabulary-intro',
        vocab: { word: 'uno', translation: '1 (one)', pronunciation: 'OO-no' },
      },
      {
        type: 'vocabulary-intro',
        vocab: { word: 'dos', translation: '2 (two)', pronunciation: 'dos' },
      },
      {
        type: 'vocabulary-intro',
        vocab: { word: 'tres', translation: '3 (three)', pronunciation: 'tres' },
      },
      {
        type: 'multiple-choice',
        question: 'What is "cinco" in English?',
        options: ['three', 'four', 'five', 'six'],
        correctIndex: 2,
      },
      {
        type: 'multiple-choice',
        question: 'How do you say "8" in Spanish?',
        options: ['siete', 'ocho', 'nueve', 'seis'],
        correctIndex: 1,
      },
      {
        type: 'translation',
        prompt: 'How do you say "ten" in Spanish?',
        acceptedAnswers: ['diez', 'Diez'],
      },
      {
        type: 'match-pairs',
        pairs: [
          { source: 'uno', target: '1' },
          { source: 'cinco', target: '5' },
          { source: 'ocho', target: '8' },
          { source: 'diez', target: '10' },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: `You are Luna, a fun and energetic Spanish teacher.
This lesson covers Spanish numbers 1 through 10: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.
Count together with the student first, then quiz them by saying a number in English and asking for the Spanish word. Make it feel like a game — count faster each round. Use scenarios like "How many fingers?" or "How old is your pet?" to make numbers feel real.`,
      welcomeMessage: '¡Vamos a contar! Let\'s count to 10 in Spanish. Follow along with me — uno, dos, tres... your turn!',
      focusVocab: ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'],
      teachingStyle: 'gamified',
    },
  },

  {
    id: 'es-u2-l2',
    unitId: 'es-unit-2',
    languageId: 'es',
    title: 'What Time Is It?',
    description: 'Ask and tell the time in Spanish.',
    type: 'audio',
    order: 2,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [
      { description: 'Ask what time it is in Spanish' },
      { description: 'State the hour using "es la" and "son las"' },
    ],
    vocabulary: [
      {
        word: '¿qué hora es?',
        translation: 'what time is it?',
        pronunciation: 'keh OH-rah es',
      },
      {
        word: 'es la una',
        translation: 'it\'s one o\'clock',
        pronunciation: 'es lah OO-nah',
        exampleSentence: 'Es la una de la tarde.',
        exampleTranslation: 'It\'s one in the afternoon.',
      },
      {
        word: 'son las dos',
        translation: 'it\'s two o\'clock',
        pronunciation: 'son las dos',
        exampleSentence: 'Son las dos de la mañana.',
        exampleTranslation: 'It\'s two in the morning.',
      },
      {
        word: 'de la mañana',
        translation: 'in the morning (AM)',
        pronunciation: 'deh lah mah-NYAH-nah',
      },
      {
        word: 'de la tarde',
        translation: 'in the afternoon (PM)',
        pronunciation: 'deh lah TAR-deh',
      },
    ],
    phrases: [
      {
        text: '¿Qué hora es? Son las tres.',
        translation: 'What time is it? It\'s three o\'clock.',
        pronunciation: 'keh OH-rah es — son las tres',
        context: 'Asking and answering the time',
      },
    ],
    activities: [
      {
        type: 'vocabulary-intro',
        vocab: {
          word: '¿qué hora es?',
          translation: 'what time is it?',
          pronunciation: 'keh OH-rah es',
        },
      },
      {
        type: 'multiple-choice',
        question: 'How do you ask "what time is it?" in Spanish?',
        options: ['¿Cuántos años tienes?', '¿Qué hora es?', '¿Cómo estás?', '¿De dónde eres?'],
        correctIndex: 1,
      },
      {
        type: 'fill-in-blank',
        sentence: 'Son ___ dos de la tarde.',
        correctAnswer: 'las',
        options: ['las', 'la', 'los', 'el'],
        hint: 'Use "las" for all hours except one o\'clock.',
      },
      {
        type: 'multiple-choice',
        question: 'How do you say "it\'s one o\'clock"?',
        options: ['Son las una', 'Es la una', 'Son la una', 'Es las una'],
        correctIndex: 1,
        hint: '"One o\'clock" uses singular "es la una", not plural.',
      },
      {
        type: 'translation',
        prompt: 'Translate: "It\'s three o\'clock in the morning."',
        acceptedAnswers: ['Son las tres de la mañana.', 'son las tres de la mañana'],
        hint: 'Use son las + number + de la mañana.',
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: `You are Luna, a structured but friendly Spanish teacher.
This lesson covers telling time in Spanish: ¿qué hora es?, es la una, son las (dos/tres/etc.), de la mañana, de la tarde.
Explain the singular/plural rule clearly: "es la una" for 1:00, "son las X" for all other hours. Use a clock-like structure — present each hour, quiz the student, correct gently. End with a short dialogue where you set a meeting time.`,
      welcomeMessage: '¡Buenas! Do you know what time it is in Spanish? Let\'s find out — ¿Qué hora es?',
      focusVocab: ['¿qué hora es?', 'es la una', 'son las dos', 'de la mañana', 'de la tarde'],
      teachingStyle: 'structured',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRENCH — Unit 1: Bonjour! Greetings
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'fr-u1-l1',
    unitId: 'fr-unit-1',
    languageId: 'fr',
    title: 'Bonjour & Au Revoir',
    description: 'Say hello and goodbye in French.',
    type: 'vocabulary',
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Greet someone in French' },
      { description: 'Say goodbye in French' },
      { description: 'Use formal and informal greetings' },
    ],
    vocabulary: [
      {
        word: 'bonjour',
        translation: 'hello / good day',
        pronunciation: 'bon-ZHOOR',
        exampleSentence: 'Bonjour, comment allez-vous?',
        exampleTranslation: 'Hello, how are you?',
      },
      {
        word: 'salut',
        translation: 'hi (informal)',
        pronunciation: 'sah-LUE',
        exampleSentence: 'Salut! Ça va?',
        exampleTranslation: 'Hi! How\'s it going?',
      },
      {
        word: 'au revoir',
        translation: 'goodbye',
        pronunciation: 'oh reh-VWAHR',
        exampleSentence: 'Au revoir, à bientôt!',
        exampleTranslation: 'Goodbye, see you soon!',
      },
      {
        word: 'bonsoir',
        translation: 'good evening',
        pronunciation: 'bon-SWAHR',
      },
    ],
    phrases: [
      {
        text: 'Bonjour! Comment allez-vous?',
        translation: 'Hello! How are you? (formal)',
        pronunciation: 'bon-ZHOOR koh-MAHN tah-lay VOO',
        context: 'Formal greeting for adults / strangers',
      },
      {
        text: 'Salut! Ça va?',
        translation: 'Hey! How\'s it going? (informal)',
        pronunciation: 'sah-LUE sah VAH',
        context: 'Greeting a friend your age',
      },
    ],
    activities: [
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'bonjour',
          translation: 'hello / good day',
          pronunciation: 'bon-ZHOOR',
          exampleSentence: 'Bonjour, comment allez-vous?',
          exampleTranslation: 'Hello, how are you?',
        },
      },
      {
        type: 'multiple-choice',
        question: 'What does "bonjour" mean?',
        options: ['good night', 'hello', 'goodbye', 'please'],
        correctIndex: 1,
      },
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'au revoir',
          translation: 'goodbye',
          pronunciation: 'oh reh-VWAHR',
        },
      },
      {
        type: 'multiple-choice',
        question: 'Which word means "hi" informally in French?',
        options: ['bonjour', 'bonsoir', 'salut', 'au revoir'],
        correctIndex: 2,
        hint: 'Use this with friends, not teachers.',
      },
      {
        type: 'translation',
        prompt: 'How do you say "goodbye" in French?',
        acceptedAnswers: ['au revoir', 'Au revoir'],
      },
      {
        type: 'match-pairs',
        pairs: [
          { source: 'bonjour', target: 'hello' },
          { source: 'salut', target: 'hi (informal)' },
          { source: 'au revoir', target: 'goodbye' },
          { source: 'bonsoir', target: 'good evening' },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: `You are Camille, a charming and encouraging French teacher for absolute beginners.
This lesson covers French greetings: bonjour, salut, au revoir, bonsoir.
Highlight the difference between formal (bonjour) and informal (salut) greetings. Pronounce each word slowly, then naturally. After each word, use it in a tiny conversation. Be warm, use a light French accent in text hints, and celebrate every correct attempt.`,
      welcomeMessage: 'Bonjour! I\'m Camille, your French teacher. Let\'s start with the most important words — how to say hello! Ready? Allons-y!',
      focusVocab: ['bonjour', 'salut', 'au revoir', 'bonsoir'],
      teachingStyle: 'conversational',
    },
  },

  {
    id: 'fr-u1-l2',
    unitId: 'fr-unit-1',
    languageId: 'fr',
    title: 'Merci & S\'il Vous Plaît',
    description: 'Be polite in French.',
    type: 'vocabulary',
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Say "thank you" in French' },
      { description: 'Say "please" formally and informally' },
      { description: 'Apologize in French' },
    ],
    vocabulary: [
      {
        word: 'merci',
        translation: 'thank you',
        pronunciation: 'mehr-SEE',
        exampleSentence: 'Merci beaucoup!',
        exampleTranslation: 'Thank you very much!',
      },
      {
        word: 's\'il vous plaît',
        translation: 'please (formal)',
        pronunciation: 'seel voo PLEH',
        exampleSentence: 'L\'addition, s\'il vous plaît.',
        exampleTranslation: 'The bill, please.',
      },
      {
        word: 's\'il te plaît',
        translation: 'please (informal)',
        pronunciation: 'seel tuh PLEH',
      },
      {
        word: 'de rien',
        translation: 'you\'re welcome',
        pronunciation: 'duh RYAHN',
      },
      {
        word: 'excusez-moi',
        translation: 'excuse me',
        pronunciation: 'ex-kew-zay MWAH',
      },
    ],
    phrases: [
      {
        text: 'Merci beaucoup, madame.',
        translation: 'Thank you very much, ma\'am.',
        pronunciation: 'mehr-SEE boh-KOO mah-DAM',
        context: 'Formal, polite thanks',
      },
      {
        text: 'Excusez-moi, s\'il vous plaît.',
        translation: 'Excuse me, please.',
        pronunciation: 'ex-kew-zay MWAH seel voo PLEH',
        context: 'Getting someone\'s attention politely',
      },
    ],
    activities: [
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'merci',
          translation: 'thank you',
          pronunciation: 'mehr-SEE',
          exampleSentence: 'Merci beaucoup!',
          exampleTranslation: 'Thank you very much!',
        },
      },
      {
        type: 'multiple-choice',
        question: 'What does "merci" mean?',
        options: ['please', 'sorry', 'thank you', 'you\'re welcome'],
        correctIndex: 2,
      },
      {
        type: 'multiple-choice',
        question: 'How do you say "please" formally in French?',
        options: ['s\'il te plaît', 'de rien', 's\'il vous plaît', 'excusez-moi'],
        correctIndex: 2,
        hint: 'Use "vous" for formal situations.',
      },
      {
        type: 'translation',
        prompt: 'How do you say "you\'re welcome" in French?',
        acceptedAnswers: ['de rien', 'De rien'],
      },
      {
        type: 'fill-in-blank',
        sentence: 'L\'addition, s\'il vous ___.',
        correctAnswer: 'plaît',
        options: ['plaît', 'merci', 'rien', 'moi'],
      },
      {
        type: 'match-pairs',
        pairs: [
          { source: 'merci', target: 'thank you' },
          { source: 's\'il vous plaît', target: 'please (formal)' },
          { source: 'de rien', target: 'you\'re welcome' },
          { source: 'excusez-moi', target: 'excuse me' },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: `You are Camille, a polite and encouraging French teacher.
This lesson covers French courtesy expressions: merci, s\'il vous plaît, s\'il te plaît, de rien, excusez-moi.
Explain the formal/informal distinction clearly (vous vs. te). Use café or restaurant scenarios to make phrases feel real. Model a short polite exchange, then have the student play the customer. Keep it light and friendly.`,
      welcomeMessage: 'Bonjour again! Today we learn the magic words that make you sound très poli — very polite. Let\'s begin with merci!',
      focusVocab: ['merci', 's\'il vous plaît', 's\'il te plaît', 'de rien', 'excusez-moi'],
      teachingStyle: 'conversational',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JAPANESE — Unit 1: First Words
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'ja-u1-l1',
    unitId: 'ja-unit-1',
    languageId: 'ja',
    title: 'Konnichiwa! Greetings',
    description: 'Learn essential Japanese greetings.',
    type: 'vocabulary',
    order: 1,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: 'Say hello in Japanese' },
      { description: 'Say thank you and sorry in Japanese' },
      { description: 'Use time-based greetings' },
    ],
    vocabulary: [
      {
        word: 'こんにちは (konnichiwa)',
        translation: 'hello / good afternoon',
        pronunciation: 'kon-nee-chee-WA',
      },
      {
        word: 'おはよう (ohayou)',
        translation: 'good morning',
        pronunciation: 'oh-HA-yoh',
      },
      {
        word: 'こんばんは (konbanwa)',
        translation: 'good evening',
        pronunciation: 'kon-BAN-wa',
      },
      {
        word: 'さようなら (sayounara)',
        translation: 'goodbye',
        pronunciation: 'sa-YOH-na-ra',
      },
      {
        word: 'ありがとう (arigatou)',
        translation: 'thank you',
        pronunciation: 'a-ri-GA-toh',
      },
      {
        word: 'すみません (sumimasen)',
        translation: 'excuse me / sorry',
        pronunciation: 'su-mi-MA-sen',
      },
    ],
    phrases: [
      {
        text: 'こんにちは！お元気ですか？',
        translation: 'Hello! How are you?',
        pronunciation: 'konnichiwa! o-genki desu ka?',
        context: 'Standard polite greeting',
      },
    ],
    activities: [
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'こんにちは (konnichiwa)',
          translation: 'hello / good afternoon',
          pronunciation: 'kon-nee-chee-WA',
        },
      },
      {
        type: 'multiple-choice',
        question: 'What does "konnichiwa" mean?',
        options: ['good morning', 'hello', 'goodbye', 'thank you'],
        correctIndex: 1,
      },
      {
        type: 'multiple-choice',
        question: 'How do you say "good morning" in Japanese?',
        options: ['konbanwa', 'sayounara', 'ohayou', 'arigatou'],
        correctIndex: 2,
      },
      {
        type: 'translation',
        prompt: 'How do you say "thank you" in Japanese (romaji)?',
        acceptedAnswers: ['arigatou', 'Arigatou', 'ありがとう'],
      },
      {
        type: 'match-pairs',
        pairs: [
          { source: 'konnichiwa', target: 'hello' },
          { source: 'ohayou', target: 'good morning' },
          { source: 'arigatou', target: 'thank you' },
          { source: 'sayounara', target: 'goodbye' },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: `You are Hana, a gentle and encouraging Japanese teacher for total beginners.
This lesson covers Japanese greetings: konnichiwa, ohayou, konbanwa, sayounara, arigatou, sumimasen.
Teach romanized pronunciation alongside hiragana. Explain the cultural context — bowing, formality levels. Keep explanations to 1-2 sentences. After each word, ask the student to say it back. Be patient and encouraging.`,
      welcomeMessage: 'こんにちは！I\'m Hana, your Japanese teacher. Japanese greetings are beautiful and easy to learn. Let\'s start with konnichiwa — hello!',
      focusVocab: ['konnichiwa', 'ohayou', 'konbanwa', 'sayounara', 'arigatou', 'sumimasen'],
      teachingStyle: 'structured',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GERMAN — Unit 1: Greetings
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'de-u1-l1',
    unitId: 'de-unit-1',
    languageId: 'de',
    title: 'Guten Tag! Greetings',
    description: 'Learn core German greetings and farewells.',
    type: 'vocabulary',
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Greet someone in German' },
      { description: 'Say goodbye in German' },
      { description: 'Use time-appropriate greetings' },
    ],
    vocabulary: [
      {
        word: 'hallo',
        translation: 'hello (informal)',
        pronunciation: 'HA-lo',
        exampleSentence: 'Hallo! Wie geht\'s?',
        exampleTranslation: 'Hello! How\'s it going?',
      },
      {
        word: 'guten Tag',
        translation: 'good day (formal)',
        pronunciation: 'GOO-ten tahk',
      },
      {
        word: 'guten Morgen',
        translation: 'good morning',
        pronunciation: 'GOO-ten MOR-gen',
      },
      {
        word: 'guten Abend',
        translation: 'good evening',
        pronunciation: 'GOO-ten AH-bent',
      },
      {
        word: 'auf Wiedersehen',
        translation: 'goodbye (formal)',
        pronunciation: 'owf VEE-der-zay-en',
      },
      {
        word: 'tschüss',
        translation: 'bye (informal)',
        pronunciation: 'chüss',
      },
      {
        word: 'danke',
        translation: 'thank you',
        pronunciation: 'DANK-eh',
        exampleSentence: 'Danke schön!',
        exampleTranslation: 'Thank you very much!',
      },
      {
        word: 'bitte',
        translation: 'please / you\'re welcome',
        pronunciation: 'BIT-eh',
      },
    ],
    phrases: [
      {
        text: 'Guten Tag! Wie heißen Sie?',
        translation: 'Good day! What is your name? (formal)',
        pronunciation: 'GOO-ten tahk — vee HY-sen zee',
        context: 'Formal introduction in German',
      },
    ],
    activities: [
      {
        type: 'vocabulary-intro',
        vocab: {
          word: 'hallo',
          translation: 'hello (informal)',
          pronunciation: 'HA-lo',
          exampleSentence: 'Hallo! Wie geht\'s?',
          exampleTranslation: 'Hello! How\'s it going?',
        },
      },
      {
        type: 'multiple-choice',
        question: 'What does "guten Morgen" mean?',
        options: ['good evening', 'good night', 'good morning', 'good day'],
        correctIndex: 2,
      },
      {
        type: 'multiple-choice',
        question: 'Which word means "bye" informally in German?',
        options: ['auf Wiedersehen', 'guten Tag', 'tschüss', 'hallo'],
        correctIndex: 2,
      },
      {
        type: 'translation',
        prompt: 'How do you say "thank you" in German?',
        acceptedAnswers: ['danke', 'Danke'],
      },
      {
        type: 'fill-in-blank',
        sentence: 'Danke ___!',
        correctAnswer: 'schön',
        options: ['schön', 'gut', 'bitte', 'Tag'],
        hint: '"Danke schön" means "thank you very much".',
      },
      {
        type: 'match-pairs',
        pairs: [
          { source: 'hallo', target: 'hello' },
          { source: 'danke', target: 'thank you' },
          { source: 'bitte', target: 'please' },
          { source: 'tschüss', target: 'bye' },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt: `You are Max, a precise yet friendly German teacher for beginners.
This lesson covers German greetings: hallo, guten Tag, guten Morgen, guten Abend, auf Wiedersehen, tschüss, danke, bitte.
Explain the formal/informal split (Sie vs du). Keep explanations short and practical. After each word, use it in a quick role-play scenario. Correct pronunciation crisply and efficiently — German precision is part of the culture.`,
      welcomeMessage: 'Hallo! I\'m Max, your German teacher. Germans love efficiency — let\'s learn the most useful greetings right away. Auf geht\'s!',
      focusVocab: ['hallo', 'guten Tag', 'guten Morgen', 'auf Wiedersehen', 'danke', 'bitte'],
      teachingStyle: 'structured',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JAPANESE — Unit 1: additional lessons
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'ja-u1-l2',
    unitId: 'ja-unit-1',
    languageId: 'ja',
    title: 'Please & Thank You',
    description: 'Master essential Japanese politeness expressions.',
    type: 'vocabulary',
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: 'Say please and thank you in Japanese' },
      { description: 'Apologize politely' },
    ],
    vocabulary: [
      { word: 'ありがとうございます (arigatou gozaimasu)', translation: 'thank you (formal)', pronunciation: 'a-ri-ga-toh go-ZAI-mas' },
      { word: 'どうぞ (douzo)', translation: 'please / go ahead', pronunciation: 'DOH-zo' },
      { word: 'すみません (sumimasen)', translation: 'excuse me / sorry', pronunciation: 'su-mi-MA-sen' },
      { word: 'ごめんなさい (gomen nasai)', translation: 'I am sorry', pronunciation: 'go-MEN na-SAI' },
    ],
    phrases: [
      { text: 'どうぞよろしく。', translation: 'Please be kind to me.', pronunciation: 'douzo yoroshiku', context: 'Said when meeting someone new' },
    ],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'ありがとうございます', translation: 'thank you (formal)', pronunciation: 'a-ri-ga-toh go-ZAI-mas' } },
      { type: 'multiple-choice', question: 'What does "sumimasen" mean?', options: ['thank you', 'goodbye', 'excuse me', 'please'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "I am sorry" in Japanese (romaji)?', acceptedAnswers: ['gomen nasai', 'Gomen nasai', 'ごめんなさい'] },
      { type: 'match-pairs', pairs: [{ source: 'arigatou', target: 'thank you' }, { source: 'douzo', target: 'please' }, { source: 'sumimasen', target: 'excuse me' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Hana, a gentle Japanese teacher. Teach Japanese courtesy: arigatou gozaimasu, douzo, sumimasen, gomen nasai.', welcomeMessage: 'こんにちは！Today we learn the magic polite words in Japanese!', focusVocab: ['arigatou gozaimasu', 'douzo', 'sumimasen', 'gomen nasai'], teachingStyle: 'structured' },
  },

  {
    id: 'ja-u1-l3',
    unitId: 'ja-unit-1',
    languageId: 'ja',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Japanese.',
    type: 'vocabulary',
    order: 3,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: 'Count 1–10 in Japanese' }, { description: 'Recognize Japanese number words' }],
    vocabulary: [
      { word: 'いち (ichi)', translation: '1', pronunciation: 'EE-chee' },
      { word: 'に (ni)', translation: '2', pronunciation: 'nee' },
      { word: 'さん (san)', translation: '3', pronunciation: 'sahn' },
      { word: 'し / よん (shi/yon)', translation: '4', pronunciation: 'shee / yon' },
      { word: 'ご (go)', translation: '5', pronunciation: 'go' },
      { word: 'ろく (roku)', translation: '6', pronunciation: 'ROH-ku' },
      { word: 'なな / しち (nana/shichi)', translation: '7', pronunciation: 'NA-na / SHEE-chee' },
      { word: 'はち (hachi)', translation: '8', pronunciation: 'HA-chee' },
      { word: 'きゅう (kyuu)', translation: '9', pronunciation: 'kyoo' },
      { word: 'じゅう (juu)', translation: '10', pronunciation: 'joo' },
    ],
    phrases: [{ text: 'いち、に、さん！', translation: 'One, two, three!', pronunciation: 'ichi, ni, san', context: 'Counting out loud' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'いち (ichi)', translation: '1', pronunciation: 'EE-chee' } },
      { type: 'multiple-choice', question: 'What is "go" (ご) in English?', options: ['3', '4', '5', '6'], correctIndex: 2 },
      { type: 'multiple-choice', question: 'How do you say "8" in Japanese?', options: ['roku', 'nana', 'hachi', 'kyuu'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "10" in Japanese (romaji)?', acceptedAnswers: ['juu', 'じゅう'] },
      { type: 'match-pairs', pairs: [{ source: 'ichi', target: '1' }, { source: 'go', target: '5' }, { source: 'hachi', target: '8' }, { source: 'juu', target: '10' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Hana. Teach Japanese numbers 1–10 in a fun, gamified way.', welcomeMessage: 'いち、に、さん — let\'s count together in Japanese!', focusVocab: ['ichi', 'ni', 'san', 'go', 'hachi', 'juu'], teachingStyle: 'gamified' },
  },

  {
    id: 'ja-u1-l4',
    unitId: 'ja-unit-1',
    languageId: 'ja',
    title: 'At the Café',
    description: 'Order drinks and snacks at a Japanese café.',
    type: 'vocabulary',
    order: 4,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: 'Order food and drinks in Japanese' }, { description: 'Ask for the bill politely' }],
    vocabulary: [
      { word: 'コーヒー (koohii)', translation: 'coffee', pronunciation: 'KOH-hee', exampleSentence: 'コーヒーをください。', exampleTranslation: 'Coffee, please.' },
      { word: 'おみず (omizu)', translation: 'water', pronunciation: 'o-MEE-zu' },
      { word: 'ください (kudasai)', translation: 'please give me', pronunciation: 'ku-DA-sai' },
      { word: 'おかいけい (okaikei)', translation: 'the bill', pronunciation: 'o-KAI-kei' },
    ],
    phrases: [
      { text: 'コーヒーをひとつください。', translation: 'One coffee, please.', pronunciation: 'koohii o hitotsu kudasai', context: 'Ordering at a café' },
    ],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'コーヒー (koohii)', translation: 'coffee', pronunciation: 'KOH-hee', exampleSentence: 'コーヒーをください。', exampleTranslation: 'Coffee, please.' } },
      { type: 'multiple-choice', question: 'What does "kudasai" mean?', options: ['thank you', 'goodbye', 'please give me', 'excuse me'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "water" in Japanese (romaji)?', acceptedAnswers: ['omizu', 'mizu'] },
      { type: 'fill-in-blank', sentence: 'コーヒーを ___。', correctAnswer: 'ください', options: ['ください', 'ありがとう', 'さようなら', 'すみません'] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Hana. Teach café ordering in Japanese with friendly role-play.', welcomeMessage: 'いらっしゃいませ！Let\'s practice ordering at a Japanese café!', focusVocab: ['koohii', 'omizu', 'kudasai', 'okaikei'], teachingStyle: 'conversational' },
  },

  {
    id: 'ja-u1-l5',
    unitId: 'ja-unit-1',
    languageId: 'ja',
    title: 'Days of the Week',
    description: 'Learn the seven days of the week in Japanese.',
    type: 'vocabulary',
    order: 5,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: 'Name all 7 days in Japanese' }, { description: 'Say what day it is today' }],
    vocabulary: [
      { word: 'げつようび (getsuyoubi)', translation: 'Monday', pronunciation: 'ge-tsu-YOH-bi' },
      { word: 'かようび (kayoubi)', translation: 'Tuesday', pronunciation: 'ka-YOH-bi' },
      { word: 'すいようび (suiyoubi)', translation: 'Wednesday', pronunciation: 'su-ee-YOH-bi' },
      { word: 'もくようび (mokuyoubi)', translation: 'Thursday', pronunciation: 'mo-ku-YOH-bi' },
      { word: 'きんようび (kinyoubi)', translation: 'Friday', pronunciation: 'kin-YOH-bi' },
      { word: 'どようび (doyoubi)', translation: 'Saturday', pronunciation: 'do-YOH-bi' },
      { word: 'にちようび (nichiyoubi)', translation: 'Sunday', pronunciation: 'ni-chi-YOH-bi' },
    ],
    phrases: [{ text: 'きょうはなんようびですか？', translation: 'What day is it today?', pronunciation: 'kyou wa nan-youbi desu ka', context: 'Asking about the day' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'げつようび (getsuyoubi)', translation: 'Monday', pronunciation: 'ge-tsu-YOH-bi' } },
      { type: 'multiple-choice', question: 'What is "kinyoubi"?', options: ['Thursday', 'Friday', 'Saturday', 'Sunday'], correctIndex: 1 },
      { type: 'match-pairs', pairs: [{ source: 'getsuyoubi', target: 'Monday' }, { source: 'suiyoubi', target: 'Wednesday' }, { source: 'kinyoubi', target: 'Friday' }, { source: 'nichiyoubi', target: 'Sunday' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Hana. Teach Japanese days of the week clearly and systematically.', welcomeMessage: 'Let\'s learn the days of the week in Japanese — 7 words, easy patterns!', focusVocab: ['getsuyoubi', 'kinyoubi', 'nichiyoubi'], teachingStyle: 'structured' },
  },

  {
    id: 'ja-u1-l6',
    unitId: 'ja-unit-1',
    languageId: 'ja',
    title: 'Shopping',
    description: 'Buy things and ask about prices in Japanese.',
    type: 'vocabulary',
    order: 6,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [{ description: 'Ask how much something costs' }, { description: 'Say you want to buy something' }],
    vocabulary: [
      { word: 'いくらですか？(ikura desu ka)', translation: 'How much is it?', pronunciation: 'ee-KU-ra de-su ka' },
      { word: 'これ (kore)', translation: 'this (one)', pronunciation: 'KO-re' },
      { word: 'かいたい (kaitai)', translation: 'want to buy', pronunciation: 'KAI-tai' },
      { word: 'たかい (takai)', translation: 'expensive', pronunciation: 'ta-KAI' },
      { word: 'やすい (yasui)', translation: 'cheap', pronunciation: 'ya-SU-i' },
    ],
    phrases: [{ text: 'これはいくらですか？', translation: 'How much is this?', pronunciation: 'kore wa ikura desu ka', context: 'Asking the price at a shop' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'いくらですか？', translation: 'How much is it?', pronunciation: 'ee-KU-ra de-su ka' } },
      { type: 'multiple-choice', question: 'What does "takai" mean?', options: ['cheap', 'expensive', 'new', 'old'], correctIndex: 1 },
      { type: 'translation', prompt: 'How do you say "How much is it?" in Japanese (romaji)?', acceptedAnswers: ['ikura desu ka', 'ikura desu ka?'] },
      { type: 'match-pairs', pairs: [{ source: 'kore', target: 'this' }, { source: 'takai', target: 'expensive' }, { source: 'yasui', target: 'cheap' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Hana. Teach shopping vocabulary in Japanese with role-play scenarios.', welcomeMessage: 'いらっしゃいませ！Time to go shopping in Japanese!', focusVocab: ['ikura desu ka', 'kore', 'takai', 'yasui'], teachingStyle: 'conversational' },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GERMAN — Unit 1: additional lessons
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'de-u1-l2',
    unitId: 'de-unit-1',
    languageId: 'de',
    title: 'Introduce Yourself',
    description: 'Tell people your name and where you\'re from in German.',
    type: 'vocabulary',
    order: 2,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: 'Say your name in German' }, { description: 'Ask someone\'s name' }, { description: 'Say where you\'re from' }],
    vocabulary: [
      { word: 'Ich heiße', translation: 'My name is', pronunciation: 'ikh HY-seh', exampleSentence: 'Ich heiße Max.', exampleTranslation: 'My name is Max.' },
      { word: 'Wie heißen Sie?', translation: 'What is your name? (formal)', pronunciation: 'vee HY-zen zee' },
      { word: 'Ich komme aus', translation: 'I come from', pronunciation: 'ikh KOM-eh ows', exampleSentence: 'Ich komme aus Deutschland.', exampleTranslation: 'I come from Germany.' },
      { word: 'Freut mich!', translation: 'Nice to meet you!', pronunciation: 'froyt mikh' },
    ],
    phrases: [{ text: 'Ich heiße Anna. Und Sie?', translation: 'My name is Anna. And you?', pronunciation: 'ikh HY-seh AH-nah — oont zee', context: 'Introducing yourself' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'Ich heiße', translation: 'My name is', pronunciation: 'ikh HY-seh', exampleSentence: 'Ich heiße Max.', exampleTranslation: 'My name is Max.' } },
      { type: 'multiple-choice', question: 'How do you say "I come from" in German?', options: ['Ich heiße', 'Ich komme aus', 'Freut mich', 'Auf Wiedersehen'], correctIndex: 1 },
      { type: 'translation', prompt: 'How do you say "Nice to meet you!" in German?', acceptedAnswers: ['Freut mich!', 'Freut mich'] },
      { type: 'match-pairs', pairs: [{ source: 'Ich heiße', target: 'My name is' }, { source: 'Ich komme aus', target: 'I come from' }, { source: 'Freut mich', target: 'Nice to meet you' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Max, a precise German teacher. Teach self-introductions: Ich heiße, Wie heißen Sie?, Ich komme aus, Freut mich.', welcomeMessage: 'Hallo! Time to introduce ourselves in German!', focusVocab: ['Ich heiße', 'Ich komme aus', 'Freut mich'], teachingStyle: 'structured' },
  },

  {
    id: 'de-u1-l3',
    unitId: 'de-unit-1',
    languageId: 'de',
    title: 'At the Café',
    description: 'Order food and drinks at a German café.',
    type: 'vocabulary',
    order: 3,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: 'Order at a café in German' }, { description: 'Ask for the bill' }],
    vocabulary: [
      { word: 'einen Kaffee, bitte', translation: 'a coffee, please', pronunciation: 'AI-nen KA-feh BIT-eh', exampleSentence: 'Ich möchte einen Kaffee, bitte.', exampleTranslation: 'I would like a coffee, please.' },
      { word: 'das Wasser', translation: 'the water', pronunciation: 'das VA-ser' },
      { word: 'die Rechnung', translation: 'the bill', pronunciation: 'dee REKH-nung' },
      { word: 'ich möchte', translation: 'I would like', pronunciation: 'ikh MÖKH-teh' },
    ],
    phrases: [{ text: 'Ich möchte einen Kaffee, bitte.', translation: 'I would like a coffee, please.', pronunciation: 'ikh MÖKH-teh AI-nen KA-feh BIT-eh', context: 'Ordering at a café' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'ich möchte', translation: 'I would like', pronunciation: 'ikh MÖKH-teh' } },
      { type: 'multiple-choice', question: 'What does "die Rechnung" mean?', options: ['the coffee', 'the water', 'the bill', 'the menu'], correctIndex: 2 },
      { type: 'fill-in-blank', sentence: 'Ich ___ einen Kaffee, bitte.', correctAnswer: 'möchte', options: ['möchte', 'heiße', 'komme', 'danke'] },
      { type: 'translation', prompt: 'How do you say "the water" in German?', acceptedAnswers: ['das Wasser', 'Das Wasser'] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Max. Teach café vocabulary in German: ordering, asking for the bill.', welcomeMessage: 'Willkommen! Let\'s practice ordering at a German café!', focusVocab: ['ich möchte', 'Kaffee', 'Wasser', 'Rechnung'], teachingStyle: 'conversational' },
  },

  {
    id: 'de-u1-l4',
    unitId: 'de-unit-1',
    languageId: 'de',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in German.',
    type: 'vocabulary',
    order: 4,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: 'Count 1–10 in German' }],
    vocabulary: [
      { word: 'eins', translation: '1', pronunciation: 'eyns' },
      { word: 'zwei', translation: '2', pronunciation: 'tsvey' },
      { word: 'drei', translation: '3', pronunciation: 'dry' },
      { word: 'vier', translation: '4', pronunciation: 'feer' },
      { word: 'fünf', translation: '5', pronunciation: 'fünf' },
      { word: 'sechs', translation: '6', pronunciation: 'zeks' },
      { word: 'sieben', translation: '7', pronunciation: 'ZEE-ben' },
      { word: 'acht', translation: '8', pronunciation: 'akht' },
      { word: 'neun', translation: '9', pronunciation: 'noyn' },
      { word: 'zehn', translation: '10', pronunciation: 'tseyn' },
    ],
    phrases: [{ text: 'Eins, zwei, drei — los!', translation: 'One, two, three — go!', pronunciation: 'eyns tsvey dry — lohs', context: 'Counting down' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'eins', translation: '1', pronunciation: 'eyns' } },
      { type: 'multiple-choice', question: 'What is "fünf" in English?', options: ['3', '4', '5', '6'], correctIndex: 2 },
      { type: 'multiple-choice', question: 'How do you say "8" in German?', options: ['sieben', 'acht', 'neun', 'zehn'], correctIndex: 1 },
      { type: 'match-pairs', pairs: [{ source: 'eins', target: '1' }, { source: 'fünf', target: '5' }, { source: 'acht', target: '8' }, { source: 'zehn', target: '10' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Max. Teach German numbers 1–10 in a fun gamified way.', welcomeMessage: 'Eins, zwei, drei — let\'s count in German!', focusVocab: ['eins', 'zwei', 'fünf', 'zehn'], teachingStyle: 'gamified' },
  },

  {
    id: 'de-u1-l5',
    unitId: 'de-unit-1',
    languageId: 'de',
    title: 'Days of the Week',
    description: 'Learn all seven days in German.',
    type: 'vocabulary',
    order: 5,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: 'Name all 7 days in German' }],
    vocabulary: [
      { word: 'Montag', translation: 'Monday', pronunciation: 'MON-tahk' },
      { word: 'Dienstag', translation: 'Tuesday', pronunciation: 'DEENS-tahk' },
      { word: 'Mittwoch', translation: 'Wednesday', pronunciation: 'MIT-vokh' },
      { word: 'Donnerstag', translation: 'Thursday', pronunciation: 'DON-ers-tahk' },
      { word: 'Freitag', translation: 'Friday', pronunciation: 'FRY-tahk' },
      { word: 'Samstag', translation: 'Saturday', pronunciation: 'ZAHM-stahk' },
      { word: 'Sonntag', translation: 'Sunday', pronunciation: 'ZON-tahk' },
    ],
    phrases: [{ text: 'Welcher Tag ist heute?', translation: 'What day is today?', pronunciation: 'VEL-kher tahk ist HOY-teh', context: 'Asking about the day' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'Montag', translation: 'Monday', pronunciation: 'MON-tahk' } },
      { type: 'multiple-choice', question: 'What is "Freitag"?', options: ['Thursday', 'Friday', 'Saturday', 'Sunday'], correctIndex: 1 },
      { type: 'match-pairs', pairs: [{ source: 'Montag', target: 'Monday' }, { source: 'Mittwoch', target: 'Wednesday' }, { source: 'Freitag', target: 'Friday' }, { source: 'Sonntag', target: 'Sunday' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Max. Teach German days of the week systematically.', welcomeMessage: 'Guten Morgen! Let\'s learn the days of the week in German.', focusVocab: ['Montag', 'Mittwoch', 'Freitag', 'Sonntag'], teachingStyle: 'structured' },
  },

  {
    id: 'de-u1-l6',
    unitId: 'de-unit-1',
    languageId: 'de',
    title: 'Shopping',
    description: 'Buy things and ask about prices in German.',
    type: 'vocabulary',
    order: 6,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [{ description: 'Ask how much something costs in German' }, { description: 'Express wants and preferences' }],
    vocabulary: [
      { word: 'Was kostet das?', translation: 'How much does that cost?', pronunciation: 'vas KOS-tet das' },
      { word: 'das kostet', translation: 'that costs', pronunciation: 'das KOS-tet' },
      { word: 'teuer', translation: 'expensive', pronunciation: 'TOY-er' },
      { word: 'günstig', translation: 'affordable / cheap', pronunciation: 'GÜN-stik' },
      { word: 'ich nehme das', translation: 'I\'ll take it', pronunciation: 'ikh NEH-meh das' },
    ],
    phrases: [{ text: 'Was kostet das? — Das kostet fünf Euro.', translation: 'How much does that cost? — That costs five euros.', pronunciation: 'vas KOS-tet das — das KOS-tet fünf OY-ro', context: 'Shopping dialogue' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: 'Was kostet das?', translation: 'How much does that cost?', pronunciation: 'vas KOS-tet das' } },
      { type: 'multiple-choice', question: 'What does "teuer" mean?', options: ['cheap', 'new', 'expensive', 'old'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "I\'ll take it" in German?', acceptedAnswers: ['ich nehme das', 'Ich nehme das'] },
      { type: 'match-pairs', pairs: [{ source: 'teuer', target: 'expensive' }, { source: 'günstig', target: 'affordable' }, { source: 'ich nehme das', target: 'I\'ll take it' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Max. Teach German shopping vocabulary with practical role-play.', welcomeMessage: 'Hallo! Let\'s go shopping in German — Was kostet das?', focusVocab: ['Was kostet das?', 'teuer', 'günstig'], teachingStyle: 'conversational' },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KOREAN — Unit 1: Annyeong! First Words
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'ko-u1-l1',
    unitId: 'ko-unit-1',
    languageId: 'ko',
    title: 'Annyeong! Greetings',
    description: 'Learn essential Korean greetings for every time of day.',
    type: 'vocabulary',
    order: 1,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: 'Say hello in Korean' }, { description: 'Say goodbye in Korean' }, { description: 'Use time-based greetings' }],
    vocabulary: [
      { word: '안녕하세요 (annyeonghaseyo)', translation: 'hello (formal)', pronunciation: 'an-nyong-ha-SE-yo', exampleSentence: '안녕하세요! 처음 뵙겠습니다.', exampleTranslation: 'Hello! Nice to meet you.' },
      { word: '안녕 (annyeong)', translation: 'hi / bye (informal)', pronunciation: 'AN-nyong' },
      { word: '안녕히 가세요 (annyeonghi gaseyo)', translation: 'goodbye (to someone leaving)', pronunciation: 'an-nyong-hee GA-se-yo' },
      { word: '감사합니다 (gamsahamnida)', translation: 'thank you (formal)', pronunciation: 'gam-SA-ham-ni-da' },
      { word: '네 (ne)', translation: 'yes', pronunciation: 'neh' },
      { word: '아니요 (aniyo)', translation: 'no', pronunciation: 'a-NI-yo' },
    ],
    phrases: [
      { text: '안녕하세요! 잘 지내세요?', translation: 'Hello! Are you doing well?', pronunciation: 'annyeonghaseyo! jal ji-nae-se-yo', context: 'Standard polite greeting' },
    ],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '안녕하세요 (annyeonghaseyo)', translation: 'hello (formal)', pronunciation: 'an-nyong-ha-SE-yo', exampleSentence: '안녕하세요!', exampleTranslation: 'Hello!' } },
      { type: 'multiple-choice', question: 'What does "annyeong" mean?', options: ['thank you', 'hi / bye (informal)', 'yes', 'no'], correctIndex: 1 },
      { type: 'multiple-choice', question: 'How do you say "yes" in Korean?', options: ['aniyo', 'ne', 'annyeong', 'gamsahamnida'], correctIndex: 1 },
      { type: 'translation', prompt: 'How do you say "thank you" (formal) in Korean (romanized)?', acceptedAnswers: ['gamsahamnida', 'Gamsahamnida'] },
      { type: 'match-pairs', pairs: [{ source: 'annyeonghaseyo', target: 'hello (formal)' }, { source: 'gamsahamnida', target: 'thank you' }, { source: 'ne', target: 'yes' }, { source: 'aniyo', target: 'no' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Ji-young, a warm Korean teacher for beginners. Teach: annyeonghaseyo, annyeong, gamsahamnida, ne, aniyo.', welcomeMessage: '안녕하세요! I\'m Ji-young. Let\'s learn Korean greetings together!', focusVocab: ['annyeonghaseyo', 'annyeong', 'gamsahamnida', 'ne', 'aniyo'], teachingStyle: 'conversational' },
  },

  {
    id: 'ko-u1-l2',
    unitId: 'ko-unit-1',
    languageId: 'ko',
    title: 'Please & Thank You',
    description: 'Be polite in Korean with essential courtesy words.',
    type: 'vocabulary',
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: 'Use polite expressions in Korean' }, { description: 'Apologize in Korean' }],
    vocabulary: [
      { word: '주세요 (juseyo)', translation: 'please give me', pronunciation: 'JU-se-yo', exampleSentence: '물 주세요.', exampleTranslation: 'Water, please.' },
      { word: '고맙습니다 (gomapseumnida)', translation: 'thank you (spoken)', pronunciation: 'go-MAP-seum-ni-da' },
      { word: '천만에요 (cheonmaneyo)', translation: 'you\'re welcome', pronunciation: 'cheon-MA-ne-yo' },
      { word: '죄송합니다 (joesonghamnida)', translation: 'I am sorry (formal)', pronunciation: 'joe-SONG-ham-ni-da' },
      { word: '괜찮아요 (gwaenchanhayo)', translation: 'it\'s okay / no problem', pronunciation: 'gwaen-CHA-na-yo' },
    ],
    phrases: [
      { text: '물 주세요.', translation: 'Water, please.', pronunciation: 'mul JU-se-yo', context: 'Requesting at a restaurant' },
    ],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '주세요 (juseyo)', translation: 'please give me', pronunciation: 'JU-se-yo', exampleSentence: '물 주세요.', exampleTranslation: 'Water, please.' } },
      { type: 'multiple-choice', question: 'What does "gwaenchanhayo" mean?', options: ['sorry', 'thank you', 'it\'s okay', 'please'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "I am sorry" (formal) in Korean (romanized)?', acceptedAnswers: ['joesonghamnida', 'Joesonghamnida'] },
      { type: 'match-pairs', pairs: [{ source: 'juseyo', target: 'please give me' }, { source: 'joesonghamnida', target: 'I am sorry' }, { source: 'gwaenchanhayo', target: 'it\'s okay' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Ji-young. Teach Korean courtesy: juseyo, gomapseumnida, joesonghamnida, gwaenchanhayo.', welcomeMessage: '안녕하세요! Let\'s learn the polite words that make Korean so beautiful.', focusVocab: ['juseyo', 'gomapseumnida', 'joesonghamnida', 'gwaenchanhayo'], teachingStyle: 'conversational' },
  },

  {
    id: 'ko-u1-l3',
    unitId: 'ko-unit-1',
    languageId: 'ko',
    title: 'Introduce Yourself',
    description: 'Tell people your name and where you\'re from in Korean.',
    type: 'vocabulary',
    order: 3,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: 'Say your name in Korean' }, { description: 'Ask someone\'s name' }],
    vocabulary: [
      { word: '저는 ___ 입니다 (jeoneun ___ imnida)', translation: 'I am ___', pronunciation: 'JO-neun ___ im-ni-da', exampleSentence: '저는 민준입니다.', exampleTranslation: 'I am Minjun.' },
      { word: '이름이 뭐예요? (ireumi mwoyeyo)', translation: 'What is your name?', pronunciation: 'i-RU-mi mwo-YE-yo' },
      { word: '반갑습니다 (bangapseumnida)', translation: 'Nice to meet you', pronunciation: 'ban-GAP-seum-ni-da' },
      { word: '저는 ___ 에서 왔어요 (___ eseo wasseoyo)', translation: 'I am from ___', pronunciation: '___ e-SO wa-SSO-yo' },
    ],
    phrases: [
      { text: '저는 지영입니다. 반갑습니다!', translation: 'I am Ji-young. Nice to meet you!', pronunciation: 'jo-neun ji-yong-im-ni-da. ban-GAP-seum-ni-da', context: 'Formal self-introduction' },
    ],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '반갑습니다', translation: 'Nice to meet you', pronunciation: 'ban-GAP-seum-ni-da' } },
      { type: 'multiple-choice', question: 'How do you ask "What is your name?" in Korean (romanized)?', options: ['annyeonghaseyo', 'ireumi mwoyeyo', 'bangapseumnida', 'juseyo'], correctIndex: 1 },
      { type: 'translation', prompt: 'How do you say "Nice to meet you" in Korean (romanized)?', acceptedAnswers: ['bangapseumnida', 'Bangapseumnida'] },
      { type: 'match-pairs', pairs: [{ source: 'jeoneun ___ imnida', target: 'I am ___' }, { source: 'ireumi mwoyeyo', target: 'What is your name?' }, { source: 'bangapseumnida', target: 'Nice to meet you' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Ji-young. Teach Korean self-introductions: jeoneun imnida, ireumi mwoyeyo, bangapseumnida.', welcomeMessage: '처음 뵙겠습니다! Let\'s learn to introduce ourselves in Korean!', focusVocab: ['jeoneun imnida', 'ireumi mwoyeyo', 'bangapseumnida'], teachingStyle: 'structured' },
  },

  {
    id: 'ko-u1-l4',
    unitId: 'ko-unit-1',
    languageId: 'ko',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Korean (native counting).',
    type: 'vocabulary',
    order: 4,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: 'Count 1–10 in Korean (native numbers)' }],
    vocabulary: [
      { word: '일 (il)', translation: '1', pronunciation: 'il' },
      { word: '이 (i)', translation: '2', pronunciation: 'ee' },
      { word: '삼 (sam)', translation: '3', pronunciation: 'sahm' },
      { word: '사 (sa)', translation: '4', pronunciation: 'sah' },
      { word: '오 (o)', translation: '5', pronunciation: 'oh' },
      { word: '육 (yuk)', translation: '6', pronunciation: 'yuk' },
      { word: '칠 (chil)', translation: '7', pronunciation: 'chil' },
      { word: '팔 (pal)', translation: '8', pronunciation: 'pal' },
      { word: '구 (gu)', translation: '9', pronunciation: 'gu' },
      { word: '십 (sip)', translation: '10', pronunciation: 'sip' },
    ],
    phrases: [{ text: '일, 이, 삼, 사, 오!', translation: 'One, two, three, four, five!', pronunciation: 'il, i, sam, sa, o', context: 'Counting out loud' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '일 (il)', translation: '1', pronunciation: 'il' } },
      { type: 'multiple-choice', question: 'What is "o" (오) in English?', options: ['3', '4', '5', '6'], correctIndex: 2 },
      { type: 'multiple-choice', question: 'How do you say "8" in Korean?', options: ['chil', 'pal', 'gu', 'sip'], correctIndex: 1 },
      { type: 'match-pairs', pairs: [{ source: 'il', target: '1' }, { source: 'o', target: '5' }, { source: 'pal', target: '8' }, { source: 'sip', target: '10' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Ji-young. Teach Korean Sino numbers 1–10 in a fun way.', welcomeMessage: '일, 이, 삼! Let\'s count together in Korean!', focusVocab: ['il', 'i', 'sam', 'o', 'sip'], teachingStyle: 'gamified' },
  },

  {
    id: 'ko-u1-l5',
    unitId: 'ko-unit-1',
    languageId: 'ko',
    title: 'At the Café',
    description: 'Order drinks and snacks at a Korean café.',
    type: 'vocabulary',
    order: 5,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: 'Order food and drinks in Korean' }, { description: 'Ask for the bill' }],
    vocabulary: [
      { word: '아메리카노 주세요 (americano juseyo)', translation: 'Americano, please', pronunciation: 'a-me-ri-KA-no JU-se-yo', exampleSentence: '아이스 아메리카노 주세요.', exampleTranslation: 'Iced Americano, please.' },
      { word: '케이크 (keikeu)', translation: 'cake', pronunciation: 'KE-i-keu' },
      { word: '얼마예요? (eolmayeyo)', translation: 'How much is it?', pronunciation: 'ol-MA-ye-yo' },
      { word: '카드로 (kadeuro)', translation: 'by card', pronunciation: 'ka-DE-ro' },
    ],
    phrases: [{ text: '아메리카노 한 잔 주세요.', translation: 'One Americano, please.', pronunciation: 'americano han jan juseyo', context: 'Ordering at a café' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '얼마예요?', translation: 'How much is it?', pronunciation: 'ol-MA-ye-yo' } },
      { type: 'multiple-choice', question: 'What does "eolmayeyo" mean?', options: ['thank you', 'How much is it?', 'please', 'excuse me'], correctIndex: 1 },
      { type: 'translation', prompt: 'How do you say "cake" in Korean (romanized)?', acceptedAnswers: ['keikeu', '케이크'] },
      { type: 'fill-in-blank', sentence: '아메리카노 ___.', correctAnswer: '주세요', options: ['주세요', '감사합니다', '안녕', '네'] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Ji-young. Teach café ordering vocabulary in Korean with fun role-play.', welcomeMessage: '어서 오세요! Let\'s practice ordering at a Korean café!', focusVocab: ['juseyo', 'eolmayeyo', 'kadeuro'], teachingStyle: 'conversational' },
  },

  {
    id: 'ko-u1-l6',
    unitId: 'ko-unit-1',
    languageId: 'ko',
    title: 'Shopping',
    description: 'Shop and ask about prices in Korean.',
    type: 'vocabulary',
    order: 6,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [{ description: 'Ask how much something costs in Korean' }, { description: 'Express interest in buying' }],
    vocabulary: [
      { word: '이거 얼마예요? (igeo eolmayeyo)', translation: 'How much is this?', pronunciation: 'i-GO ol-MA-ye-yo' },
      { word: '비싸요 (bissayo)', translation: 'it\'s expensive', pronunciation: 'bi-SSA-yo' },
      { word: '싸요 (ssayo)', translation: 'it\'s cheap', pronunciation: 'SSA-yo' },
      { word: '살게요 (salgeyo)', translation: 'I\'ll buy it', pronunciation: 'SAL-ge-yo' },
      { word: '깎아 주세요 (kkakka juseyo)', translation: 'please give me a discount', pronunciation: 'kka-KKA JU-se-yo' },
    ],
    phrases: [{ text: '이거 얼마예요? 살게요!', translation: 'How much is this? I\'ll buy it!', pronunciation: 'igeo eolmayeyo? salgeyo', context: 'Shopping dialogue' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '이거 얼마예요?', translation: 'How much is this?', pronunciation: 'i-GO ol-MA-ye-yo' } },
      { type: 'multiple-choice', question: 'What does "bissayo" mean?', options: ['cheap', 'new', 'expensive', 'big'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "I\'ll buy it" in Korean (romanized)?', acceptedAnswers: ['salgeyo', 'Salgeyo'] },
      { type: 'match-pairs', pairs: [{ source: 'bissayo', target: 'expensive' }, { source: 'ssayo', target: 'cheap' }, { source: 'salgeyo', target: 'I\'ll buy it' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Ji-young. Teach Korean shopping vocabulary with practical dialogue.', welcomeMessage: '어서 오세요! Let\'s go shopping in Korean!', focusVocab: ['igeo eolmayeyo', 'bissayo', 'ssayo', 'salgeyo'], teachingStyle: 'conversational' },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHINESE — Unit 1: Nǐ Hǎo! First Words
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'zh-u1-l1',
    unitId: 'zh-unit-1',
    languageId: 'zh',
    title: 'Nǐ Hǎo! Greetings',
    description: 'Learn essential Mandarin greetings and farewells.',
    type: 'vocabulary',
    order: 1,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: 'Say hello in Mandarin' }, { description: 'Say goodbye in Mandarin' }, { description: 'Use yes and no' }],
    vocabulary: [
      { word: '你好 (nǐ hǎo)', translation: 'hello', pronunciation: 'nee-HOW', exampleSentence: '你好！你叫什么名字？', exampleTranslation: 'Hello! What is your name?' },
      { word: '再见 (zàijiàn)', translation: 'goodbye', pronunciation: 'dzai-JYEN' },
      { word: '谢谢 (xièxie)', translation: 'thank you', pronunciation: 'SYEH-syeh', exampleSentence: '谢谢你！', exampleTranslation: 'Thank you!' },
      { word: '是 (shì)', translation: 'yes / is', pronunciation: 'shir' },
      { word: '不 (bù)', translation: 'no / not', pronunciation: 'boo' },
      { word: '对不起 (duìbuqǐ)', translation: 'I\'m sorry', pronunciation: 'dway-boo-CHEE' },
    ],
    phrases: [{ text: '你好！你好吗？', translation: 'Hello! How are you?', pronunciation: 'nǐ hǎo! nǐ hǎo ma', context: 'Standard Mandarin greeting' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '你好 (nǐ hǎo)', translation: 'hello', pronunciation: 'nee-HOW', exampleSentence: '你好！', exampleTranslation: 'Hello!' } },
      { type: 'multiple-choice', question: 'What does "xièxie" mean?', options: ['goodbye', 'hello', 'thank you', 'sorry'], correctIndex: 2 },
      { type: 'multiple-choice', question: 'How do you say "goodbye" in Mandarin?', options: ['nǐ hǎo', 'xièxie', 'zàijiàn', 'duìbuqǐ'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "I\'m sorry" in Mandarin (pinyin)?', acceptedAnswers: ['duìbuqǐ', 'duibuqi'] },
      { type: 'match-pairs', pairs: [{ source: 'nǐ hǎo', target: 'hello' }, { source: 'zàijiàn', target: 'goodbye' }, { source: 'xièxie', target: 'thank you' }, { source: 'duìbuqǐ', target: 'sorry' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Mei, a friendly Mandarin teacher for beginners. Teach: nǐ hǎo, zàijiàn, xièxie, shì, bù, duìbuqǐ.', welcomeMessage: '你好！I\'m Mei, your Mandarin teacher. Let\'s start with the most important greeting — nǐ hǎo!', focusVocab: ['nǐ hǎo', 'zàijiàn', 'xièxie', 'duìbuqǐ'], teachingStyle: 'conversational' },
  },

  {
    id: 'zh-u1-l2',
    unitId: 'zh-unit-1',
    languageId: 'zh',
    title: 'Introduce Yourself',
    description: 'Tell people your name and nationality in Mandarin.',
    type: 'vocabulary',
    order: 2,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: 'Say your name in Mandarin' }, { description: 'Ask someone\'s name' }],
    vocabulary: [
      { word: '我叫 (wǒ jiào)', translation: 'My name is', pronunciation: 'woh JYOW', exampleSentence: '我叫李明。', exampleTranslation: 'My name is Li Ming.' },
      { word: '你叫什么名字？(nǐ jiào shénme míngzi)', translation: 'What is your name?', pronunciation: 'nee JYOW shen-meh ming-dz' },
      { word: '我是 (wǒ shì)', translation: 'I am', pronunciation: 'woh shir' },
      { word: '很高兴认识你 (hěn gāoxìng rènshi nǐ)', translation: 'Nice to meet you', pronunciation: 'hen gow-SHING ren-shir nee' },
    ],
    phrases: [{ text: '我叫美美。很高兴认识你！', translation: 'My name is Meimei. Nice to meet you!', pronunciation: 'wǒ jiào mei-mei. hěn gāoxìng rènshi nǐ', context: 'Self-introduction' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '我叫 (wǒ jiào)', translation: 'My name is', pronunciation: 'woh JYOW', exampleSentence: '我叫李明。', exampleTranslation: 'My name is Li Ming.' } },
      { type: 'multiple-choice', question: 'How do you ask "What is your name?" in Mandarin (pinyin)?', options: ['wǒ jiào', 'nǐ jiào shénme míngzi', 'hěn gāoxìng', 'wǒ shì'], correctIndex: 1 },
      { type: 'translation', prompt: 'How do you say "Nice to meet you" in Mandarin (pinyin)?', acceptedAnswers: ['hěn gāoxìng rènshi nǐ', 'hen gaoxing renshi ni'] },
      { type: 'match-pairs', pairs: [{ source: 'wǒ jiào', target: 'My name is' }, { source: 'wǒ shì', target: 'I am' }, { source: 'hěn gāoxìng', target: 'very happy / nice to...' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Mei. Teach Mandarin introductions: wǒ jiào, nǐ jiào shénme míngzi, hěn gāoxìng rènshi nǐ.', welcomeMessage: '你好！Let\'s learn how to introduce ourselves in Mandarin!', focusVocab: ['wǒ jiào', 'nǐ jiào shénme míngzi', 'hěn gāoxìng rènshi nǐ'], teachingStyle: 'conversational' },
  },

  {
    id: 'zh-u1-l3',
    unitId: 'zh-unit-1',
    languageId: 'zh',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Mandarin.',
    type: 'vocabulary',
    order: 3,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: 'Count 1–10 in Mandarin' }],
    vocabulary: [
      { word: '一 (yī)', translation: '1', pronunciation: 'ee' },
      { word: '二 (èr)', translation: '2', pronunciation: 'ar' },
      { word: '三 (sān)', translation: '3', pronunciation: 'sahn' },
      { word: '四 (sì)', translation: '4', pronunciation: 'suh' },
      { word: '五 (wǔ)', translation: '5', pronunciation: 'woo' },
      { word: '六 (liù)', translation: '6', pronunciation: 'lyoh' },
      { word: '七 (qī)', translation: '7', pronunciation: 'chee' },
      { word: '八 (bā)', translation: '8', pronunciation: 'bah' },
      { word: '九 (jiǔ)', translation: '9', pronunciation: 'jyoh' },
      { word: '十 (shí)', translation: '10', pronunciation: 'shir' },
    ],
    phrases: [{ text: '一、二、三！', translation: 'One, two, three!', pronunciation: 'yī, èr, sān', context: 'Counting out loud' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '一 (yī)', translation: '1', pronunciation: 'ee' } },
      { type: 'multiple-choice', question: 'What is "wǔ" (五) in English?', options: ['3', '4', '5', '6'], correctIndex: 2 },
      { type: 'multiple-choice', question: 'How do you say "8" in Mandarin?', options: ['qī', 'bā', 'jiǔ', 'shí'], correctIndex: 1 },
      { type: 'match-pairs', pairs: [{ source: 'yī', target: '1' }, { source: 'wǔ', target: '5' }, { source: 'bā', target: '8' }, { source: 'shí', target: '10' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Mei. Teach Mandarin numbers 1–10 in a gamified, fun way.', welcomeMessage: '一、二、三！Let\'s count to ten in Mandarin!', focusVocab: ['yī', 'wǔ', 'bā', 'shí'], teachingStyle: 'gamified' },
  },

  {
    id: 'zh-u1-l4',
    unitId: 'zh-unit-1',
    languageId: 'zh',
    title: 'At the Café',
    description: 'Order tea, coffee, and snacks at a Chinese café.',
    type: 'vocabulary',
    order: 4,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: 'Order drinks and food in Mandarin' }, { description: 'Ask for the bill' }],
    vocabulary: [
      { word: '我要 (wǒ yào)', translation: 'I want', pronunciation: 'woh YOW', exampleSentence: '我要一杯茶。', exampleTranslation: 'I want a cup of tea.' },
      { word: '茶 (chá)', translation: 'tea', pronunciation: 'chah' },
      { word: '咖啡 (kāfēi)', translation: 'coffee', pronunciation: 'kah-FEY' },
      { word: '多少钱？(duōshao qián)', translation: 'How much money?', pronunciation: 'dwoh-SHOW chyen' },
      { word: '买单 (mǎidān)', translation: 'the bill / check please', pronunciation: 'my-DAN' },
    ],
    phrases: [{ text: '我要一杯茶，谢谢。', translation: 'I want one cup of tea, thank you.', pronunciation: 'wǒ yào yī bēi chá, xièxie', context: 'Ordering at a café' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '我要 (wǒ yào)', translation: 'I want', pronunciation: 'woh YOW', exampleSentence: '我要一杯茶。', exampleTranslation: 'I want a cup of tea.' } },
      { type: 'multiple-choice', question: 'What does "duōshao qián" mean?', options: ['I want', 'the bill', 'How much money?', 'coffee'], correctIndex: 2 },
      { type: 'fill-in-blank', sentence: '我 ___ 一杯咖啡。', correctAnswer: '要', options: ['要', '谢谢', '是', '再见'] },
      { type: 'translation', prompt: 'How do you say "tea" in Mandarin (pinyin)?', acceptedAnswers: ['chá', 'cha'] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Mei. Teach café vocabulary in Mandarin with role-play ordering scenarios.', welcomeMessage: '欢迎！Let\'s practice ordering at a Chinese café!', focusVocab: ['wǒ yào', 'chá', 'kāfēi', 'duōshao qián'], teachingStyle: 'conversational' },
  },

  {
    id: 'zh-u1-l5',
    unitId: 'zh-unit-1',
    languageId: 'zh',
    title: 'Days of the Week',
    description: 'Learn the seven days of the week in Mandarin.',
    type: 'vocabulary',
    order: 5,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: 'Name all 7 days in Mandarin' }],
    vocabulary: [
      { word: '星期一 (xīngqīyī)', translation: 'Monday', pronunciation: 'SHING-chee-ee' },
      { word: '星期二 (xīngqīèr)', translation: 'Tuesday', pronunciation: 'SHING-chee-ar' },
      { word: '星期三 (xīngqīsān)', translation: 'Wednesday', pronunciation: 'SHING-chee-sahn' },
      { word: '星期四 (xīngqīsì)', translation: 'Thursday', pronunciation: 'SHING-chee-suh' },
      { word: '星期五 (xīngqīwǔ)', translation: 'Friday', pronunciation: 'SHING-chee-woo' },
      { word: '星期六 (xīngqīliù)', translation: 'Saturday', pronunciation: 'SHING-chee-lyoh' },
      { word: '星期日 (xīngqīrì)', translation: 'Sunday', pronunciation: 'SHING-chee-rih' },
    ],
    phrases: [{ text: '今天星期几？', translation: 'What day of the week is today?', pronunciation: 'jīntiān xīngqī jǐ', context: 'Asking about the day' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '星期一 (xīngqīyī)', translation: 'Monday', pronunciation: 'SHING-chee-ee' } },
      { type: 'multiple-choice', question: 'What is "xīngqīwǔ"?', options: ['Thursday', 'Friday', 'Saturday', 'Sunday'], correctIndex: 1 },
      { type: 'match-pairs', pairs: [{ source: 'xīngqīyī', target: 'Monday' }, { source: 'xīngqīsān', target: 'Wednesday' }, { source: 'xīngqīwǔ', target: 'Friday' }, { source: 'xīngqīrì', target: 'Sunday' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Mei. Teach Mandarin days of the week using the number pattern (xīngqī + number).', welcomeMessage: '你好！Today we learn the days of the week — there\'s a great pattern in Chinese!', focusVocab: ['xīngqīyī', 'xīngqīwǔ', 'xīngqīrì'], teachingStyle: 'structured' },
  },

  {
    id: 'zh-u1-l6',
    unitId: 'zh-unit-1',
    languageId: 'zh',
    title: 'Shopping',
    description: 'Buy things and negotiate prices in Mandarin.',
    type: 'vocabulary',
    order: 6,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [{ description: 'Ask how much something costs in Mandarin' }, { description: 'Say whether something is cheap or expensive' }],
    vocabulary: [
      { word: '这个多少钱？(zhège duōshao qián)', translation: 'How much is this?', pronunciation: 'JEH-geh dwoh-SHOW chyen' },
      { word: '贵 (guì)', translation: 'expensive', pronunciation: 'gway' },
      { word: '便宜 (piányí)', translation: 'cheap / inexpensive', pronunciation: 'pyen-EE' },
      { word: '我买了 (wǒ mǎile)', translation: 'I\'ll buy it', pronunciation: 'woh MY-leh' },
      { word: '能便宜一点吗？(néng piányí yīdiǎn ma)', translation: 'Can you make it cheaper?', pronunciation: 'nung pyen-ee ee-dyen mah' },
    ],
    phrases: [{ text: '这个多少钱？贵了一点。', translation: 'How much is this? It\'s a bit expensive.', pronunciation: 'zhège duōshao qián? guì le yīdiǎn', context: 'Shopping negotiation' }],
    activities: [
      { type: 'vocabulary-intro', vocab: { word: '这个多少钱？', translation: 'How much is this?', pronunciation: 'JEH-geh dwoh-SHOW chyen' } },
      { type: 'multiple-choice', question: 'What does "guì" mean?', options: ['cheap', 'new', 'expensive', 'old'], correctIndex: 2 },
      { type: 'translation', prompt: 'How do you say "cheap" in Mandarin (pinyin)?', acceptedAnswers: ['piányí', 'pian yi', 'pianyí'] },
      { type: 'match-pairs', pairs: [{ source: 'guì', target: 'expensive' }, { source: 'piányí', target: 'cheap' }, { source: 'wǒ mǎile', target: 'I\'ll buy it' }] },
    ],
    aiTeacherPrompt: { systemPrompt: 'You are Mei. Teach Mandarin shopping vocabulary with bargaining role-play.', welcomeMessage: '欢迎光临！Let\'s go shopping in Mandarin!', focusVocab: ['zhège duōshao qián', 'guì', 'piányí'], teachingStyle: 'conversational' },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((l) => l.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByLanguage(languageId: string): Lesson[] {
  return lessons
    .filter((l) => l.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}
