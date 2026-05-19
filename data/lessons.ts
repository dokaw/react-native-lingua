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
