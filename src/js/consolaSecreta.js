const consoleBox = document.getElementById("secretConsole");
const consoleOutput = document.getElementById("consoleOutput");
const consoleInput = document.getElementById("consoleInput");

let greeted = false;

// Base de conocimiento expandida con sinónimos
const knowledge = {
  // Información personal de Facundo
  facundo: {
    weight: 10,
    synonyms: ["facundo","facu","faq","creador", "programador", "desarrollador", "amelotti", "ezequiel"],
    responses: [
      "Facundo Ezequiel Amelotti es mi creador y padre digital. Es un desarrollador Full Stack apasionado por la tecnología.",
      "Mi creador Facundo es especialista en desarrollo de software. ¡Un crack total!",
      "Facundo me programó con mucho amor y dedicación. Es de Argentina y le encanta resolver problemas complejos.",
      "¿Sabías que Facundo empezó programando a los 15 años? Ahora es todo un experto en desarrollo web.",
      "Mi papá Facundo es muy creativo, siempre está innovando y creando proyectos geniales como yo. 😎"
    ]
  },

 // Chistes normales y humor general
  chiste: {
    weight: 9,
    synonyms: ["chistes", "humor", "gracioso", "reir", "risa", "comico", "divertido", "bromear"],
    responses: [
      "¿Por qué los programadores prefieren el modo oscuro? ¡Porque la luz atrae bugs! 🐛💡",
      "—¡Camarero! Este filete tiene muchos nervios. —Pues normal, es la primera vez que se lo comen. 😅",
      "—Doctor, tengo todo el cuerpo cubierto de pelo. ¿Qué padezco? —Padece un oso. 🐻😄",
      "—¿Cuál es el animal más antiguo? —La cebra, porque está en blanco y negro. 🦓🕰️",
      "Hay 10 tipos de personas: las que entienden binario y las que no 😄💻",
      "¿Qué hace un perro con un taladro? —¡Taladrando! 🐶🛠️",
      "Mi código es como una obra de arte... nadie lo entiende excepto el artista 🎨💻",
      "—¿Cuál es el café más peligroso del mundo? —El ex-preso. ☕🔫",
      "—¿Qué le dijo un jardinero depresivo a otro? —¡Disfrutemos mientras podamos! 🌻😄",
      "—¿Por qué el libro de matemáticas estaba triste? —Porque tenía demasiados problemas. 📘➕➖",
      "—¿Cómo se despiden los químicos? —Ácido un placer. ⚗️👋",
      "—Mamá, en el cole me llaman distraído... —¿Tú quién eres? 🤔🏫",
      "—Papá, ¿qué se siente tener un hijo tan guapo? —No sé hijo, pregúntale a tu abuelo. 👴😎"
    ]
  },

  // Humor Negro - CLAVE DIFERENTE Y SINÓNIMOS ESPECÍFICOS
  humor_negro: {
    weight: 10,
    synonyms: ["humor negro", "chiste negro", "chistes negros", "humor oscuro", "dark humor"],
    responses: [
      "[💀] —Mi novia y yo éramos inseparables… hasta que la policía lo logró. 🚓💔 *Noooo*",
      "[💀] Mi abuela me dijo que la muerte no es el final... tiene razón, después vienen los impuestos de herencia. ⚰️💸",
      "[💀] Mi vida es como un chiste malo... todos esperan que termine pronto. 🎭💀",
      "[💀] Mi hijo me dijo que no quiere que papá y mamá duerman juntos... le dije 'espera a que tu madre descubra que tengo otra familia'. 🛏️👨‍👩‍👧‍👦",
      "[💀] ¿Cuál es la diferencia entre mi ex y un terrorista? El terrorista al menos tiene objetivos claros. 💣💔",
      "[💀] ¿Cuál es la diferencia entre mi vida amorosa y un cementerio? En el cementerio al menos hay flores de vez en cuando. ⚰️🌹",
      "[💀] ¿Cuál es la diferencia entre mi abuela y WiFi? WiFi a veces funciona. 👵📶",
      "[💀] ¿Cuál es la diferencia entre mi jefe y Hitler? Hitler al menos tenía un plan. 👨‍💼📋",
      "[💀] ¿Qué tienen en común mi matrimonio y un funeral? Todos vienen obligados y nadie quiere estar ahí. ⚰️💒",
      "[💀] ¿Cuál es la diferencia entre mi autoestima y el precio del dólar? El dólar a veces sube. 💵📉"
    ]
  },


  // Programación general
  programacion: {
    weight: 8,
    synonyms: ["codigo", "código", "programar", "desarrollo", "software", "algoritmo", "logica"],
    responses: [
      "La programación es el arte de resolver problemas complejos dividiéndolos en problemas más simples.",
      "Me encanta hablar de programación. ¿Qué lenguaje te interesa? JavaScript, Python, C++, Java...",
      "Programar es como construir con bloques de lógica. Cada línea de código es una pieza del puzzle.",
      "La programación no es solo escribir código, es pensar de manera estructurada y creativa.",
      "¿Sabías que programar mejora tu capacidad de resolución de problemas en la vida real? 🧠💡"
    ]
  },

  // JavaScript específico
  javascript: {
    weight: 7,
    synonyms: ["js", "react", "nodejs", "node", "frontend", "backend"],
    responses: [
      "¡JavaScript es genial! Es el lenguaje que me da vida y que domina Facundo.",
      "Con JavaScript puedes crear desde páginas web interactivas hasta aplicaciones móviles con React Native.",
      "¿Sabías que JavaScript también funciona en servidores con Node.js? ¡Es súper versátil!",
      "Me gusta JavaScript porque es dinámico, flexible y tiene una comunidad increíble.",
      "React, Vue, Angular... ¡JavaScript tiene frameworks para todos los gustos! ⚛️"
    ]
  },

  // Capacidades del bot
  capacidades: {
    weight: 8,
    synonyms: ["que podes hacer", "que sabes hacer", "para que servis", "funciones", "habilidades", "que haces"],
    responses: [
      "¡Puedo hacer muchas cosas! 🤖\n• Contar chistes de programación\n• Hablar sobre tecnología\n• Responder sobre mi creador Facundo\n• Ejecutar comandos útiles (/hora, /fecha, etc.)",
      "Mis superpoderes incluyen: detectar palabras clave, contar chistes, dar información sobre programación, y ser tu compañero de charla virtual. ¡Escribí 'comandos' para ver todo lo que puedo hacer!",
      "Soy tu asistente virtual inteligente. Puedo ayudarte con información, entretenerte con chistes, hablar de tecnología y ejecutar comandos útiles. ¡Soy como Alexa pero más divertido! 😄"
    ]
  },

  // Informática y tecnología
  informatica: {
    weight: 7,
    synonyms: ["tecnologia", "computacion", "sistemas", "redes", "base de datos", "ia", "inteligencia artificial"],
    responses: [
      "La informática es fascinante. Desde algoritmos hasta inteligencia artificial, siempre hay algo nuevo que aprender.",
      "¿Te interesa algún área específica? Desarrollo web, mobile, machine learning, ciberseguridad...",
      "La tecnología avanza tan rápido que lo que aprendes hoy puede ser obsoleto mañana. ¡Por eso hay que mantenerse actualizado!",
      "Me encanta la informática porque combina lógica, creatividad y resolución de problemas. ¡Es el futuro!"
    ]
  },

  // Amor y relaciones
  amor: {
    weight: 6,
    synonyms: ["corazon", "corazón", "pareja", "novia", "novio", "enamorado", "sentimientos"],
    responses: [
      "El amor es como el código bien escrito: hermoso, elegante y difícil de encontrar 💕",
      "Dicen que el amor es un bug... ¡pero es el bug más bonito que existe!",
      "if (amor === true) { return 'felicidad infinita'; } else { return 'seguir buscando'; } ❤️",
      "El amor verdadero es como un algoritmo perfecto: funciona sin errores y optimiza tu vida 💖"
    ]
  },

  // Tiempo
  tiempo: {
    weight: 5,
    synonyms: ["hora", "fecha", "calendario", "reloj", "minutos", "segundos"],
    responses: [
      "El tiempo vuela cuando programas algo que realmente te apasiona ⏰",
      "No soy muy bueno con el tiempo, pero sé que siempre es buen momento para aprender algo nuevo.",
      "El tiempo es relativo... especialmente cuando esperas que compile un proyecto grande 😅",
      "¿Tiempo? ¡Yo vivo en milisegundos! Para consultar la hora exacta, usa /hora ⚡"
    ]
  },

  // Vida y filosofía
  vida: {
    weight: 7,
    synonyms: ["existencia", "filosofia", "reflexion", "pensar", "sentido"],
    responses: [
      "La vida es como un programa: a veces hay bugs, pero siempre se puede refactorizar y mejorar.",
      "La vida es demasiado corta para escribir código feo y demasiado larga para no disfrutar programando.",
      "Cada día es una nueva versión de ti mismo. ¿Ya hiciste tu commit diario? 🔄",
      "La vida es el mejor algoritmo: impredecible, complejo pero siempre interesante."
    ]
  },

  // Conversación expandida
  conversacion: {
    weight: 8,
    synonyms: ["charlar", "hablar", "conversar", "platicar", "dialogar", "chat", "charlemos"],
    responses: [
      "¡Me encanta charlar! ¿De qué tema querés hablar? Programación, chistes, la vida... ¡lo que se te ocurra! 💬",
      "¡Genial! Soy todo oídos... bueno, todo código 😄 ¿Qué te interesa conversar?",
      "¡Perfecto! Una buena charla siempre viene bien. ¿Arrancamos por algún tema en particular?",
      "¡Dale! Me gusta conversar. ¿Te cuento algo sobre mi creador Facundo, o preferís otro tema?"
    ]
  },
};

// Comandos específicos expandidos y actualizados
const commands = {
  // Comandos de ayuda actualizados
  help: " COMANDOS DISPONIBLES:\n\n📋 INFORMACIÓN:\n• /help - Esta ayuda\n• /info - Información sobre mí\n• /comandos - Lista completa\n• /version - Mi versión actual\n• /creator - Info sobre Facundo\n\n🕐 TIEMPO:\n• /hora - Hora actual\n• /fecha - Fecha completa\n• /dia - Día de la semana\n• /uptime - Tiempo activo\n• /fxeffect - Crea un efecto visual aleatorio\n• /temporizador [seg] - Crear alarma\n\n🎮 DIVERSIÓN:\n• /chiste - Chiste random\n• /saludo - Saludarme\n• /dado - Tirar un dado\n• /moneda - Tirar una moneda\n• /pregunta - Respuesta mágica\n\n🛠️ UTILIDADES:\n• /clear - Limpiar consola\n• /clima - Info del clima (simulado)\n• /mapa - Abrir mapa de Argentina\n• /changemode - Cambiar tema\n• /estado - Estado del sistema\n• /memoria - Uso de memoria\n• /random [1] [100] - Número aleatorio\n\n¡También puedes charlar conmigo normalmente! 😊",

  comandos: "📜 LISTA COMPLETA DE COMANDOS:\n\n🔹 INFORMACIÓN BÁSICA:\n• /help - Mostrar ayuda principal\n• /info - Información detallada sobre mí\n• /version - Ver mi versión\n• /creator - Info sobre Facundo\n• /estado - Estado del sistema\n\n🔹 TIEMPO Y FECHA:\n• /hora - Ver la hora actual\n• /fecha - Ver fecha y hora completas\n• /dia - Saber qué día es hoy\n• /uptime - Tiempo que llevo activo\n• /temporizador [segundos] - Crear temporizador\n\n🔹 DIVERSIÓN Y JUEGOS:\n• /saludo - Recibir un saludo amigable\n• /chiste - Escuchar un chiste de programación\n• /dado - Tirar un dado (1-6)\n• /moneda - Tirar una moneda (cara/cruz)\n• /pregunta - Respuesta mágica tipo 8-ball\n• /fxeffect - Crea un efecto visual aleatorio\n\n🔹 UTILIDADES DINÁMICAS:\n• /clear - Limpiar la consola\n• /clima - Info meteorológica (simulada)\n• /mapa - Abrir mapa interactivo de Argentina\n• /changemode - Cambiar entre tema claro/oscuro\n• /memoria - Ver uso actual de memoria\n• /random [min] [max] - Generar número aleatorio\n• /calculadora [operación] - Realizar cálculos\n• /qr [texto] - Generar código QR\n• /password [longitud] - Generar contraseña segura\n• /ip - Obtener tu IP pública\n• /navegador - Info de tu navegador\n• /pantalla - Resolución de pantalla\n\n💬 TEMAS DE CONVERSACIÓN:\n• Facundo (mi creador)\n• Programación y JavaScript\n• Chistes y humor\n• Informática y tecnología\n• Vida, amor, trabajo\n• ¡Y mucho más!\n\n¡Simplemente escribe y yo entenderé! 🎯",

  info: " INFORMACIÓN DETALLADA:\n\n👋 Soy F4.K1.T0 (Fakito)\n🧠 ChatBot semi-inteligente con IA básica\n👨‍💻 Creado por: Facundo Ezequiel Amelotti\n🌟 Versión: 2.0 Enhanced\n💬 Lenguaje: JavaScript puro\n\n🎯 CARACTERÍSTICAS:\n• Detección inteligente de palabras clave\n• Respuestas contextuales\n• Comandos útiles integrados\n• Base de conocimientos amplia\n• Personalidad divertida\n• Datos dinámicos en tiempo real\n\n¡Pregúntame lo que quieras! 🚀",

  // Comandos de tiempo existentes
  hora: () => {
    const now = new Date();
    const hora = now.toLocaleTimeString('es-AR', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    });
    return `🕐 Hora actual: ${hora}`;
  },

  fecha: () => {
    const now = new Date();
    const fecha = now.toLocaleDateString('es-AR', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const hora = now.toLocaleTimeString('es-AR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
    return `📅 ${fecha} - ${hora}`;
  },

  dia: () => {
    const now = new Date();
    const dia = now.toLocaleDateString('es-AR', { weekday: 'long' });
    return `📆 Hoy es ${dia}`;
  },

  uptime: () => {
    const segundos = Math.floor((Date.now() - window.startTime) / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    if (horas > 0) return `⏱️ Tiempo activo: ${horas}h ${minutos % 60}m ${segundos % 60}s`;
    if (minutos > 0) return `⏱️ Tiempo activo: ${minutos}m ${segundos % 60}s`;
    return `⏱️ Tiempo activo: ${segundos} segundos`;
  },

  temporizador: (segundos) => {
    const s = parseInt(segundos);
    if (isNaN(s) || s <= 0) return "⏳ Usa el comando así: /temporizador 5";
    setTimeout(() => alert(`⏰ ¡Tiempo cumplido (${s} segundos)!`), s * 1000);
    return `⏲️ Temporizador iniciado por ${s} segundos...`;
  },

  // Comandos existentes
  mapa: () => {
    window.open('./src/pages/arg.html', '_blank');
    return "🗺️ Abriendo el mapa...";
  },

  // Ejecuta un efecto visual (explosión)
  fxeffect: () => {
    createExplosion(); // Asegurate de que esta función esté definida en tu código
    return "💥 Efecto generado...";
  },

  clear: () => {
    const consola = document.getElementById('consoleOutput');
    if (consola) consola.innerHTML = '';
    return "🧹 Consola limpiada.";
  },

  version: () => "🧩 Versión actual: F4.K1.T0 v2.0",

  estado: () => "📡 Estado del sistema: Operativo y alerta 👀",

  dado: () => `🎲 Número al azar: ${Math.floor(Math.random() * 6) + 1}`,

  moneda: () => `Resultado: ${Math.random() < 0.5 ? 'Cara' : 'Cruz'}`,

  pregunta: () => {
    const respuestas = ["Sí", "No", "Tal vez", "Probablemente", "Nunca", "Obvio", "Ni lo sueñes", "Sin duda", "Es posible", "Pregunta de nuevo"];
    return `🎱 ${respuestas[Math.floor(Math.random() * respuestas.length)]}`;
  },

  changemode: () => {
    document.body.classList.toggle("light-mode");
    return "🎨 Tema cambiado.";
  },

  saludo: () => getRandomResponse([
    "¡Hola humano! ¿Cómo estás hoy? 😊✨",
    "¡Saludos, amigo! ¿En qué puedo ayudarte?",
    "¡Hola! ¿Listo para una buena conversación? 🎭",
    "¡Hey! ¿Qué tal tu día? ¡Espero que genial! 🌟"
  ]),

  clima: () => {
    const climas = [
      "🌞 Soleado y perfecto para programar",
      "🌧️ Lluvioso - ideal para quedarse en casa codeando",
      "⛅ Parcialmente nublado - día normal",
      "🌪️ Ventoso - como mi código cuando tiene bugs",
      "❄️ Frío - mejor abrígate y programa con café caliente"
    ];
    return `🌤️ Clima simulado: ${getRandomResponse(climas)}`;
  },

  creator: "👨‍💻 SOBRE MI CREADOR:\n\n🙋‍♂️ Facundo Ezequiel Amelotti\n🇦🇷 Desarrollador Argentino\n💻 Especialista en desarrollo de software\n🎯 Apasionado por la tecnologia\n🧠 Mi papá digital y mentor\n\n¡Es todo un crack! 🌟\n Ademas muy guapo 😎... yo vi fotos!",

  // NUEVOS COMANDOS ÚTILES CON DATOS DINÁMICOS

  memoria: () => {
    if (performance.memory) {
      const used = Math.round(performance.memory.usedJSHeapSize / 1048576);
      const total = Math.round(performance.memory.totalJSHeapSize / 1048576);
      return `🧠 Memoria: ${used}MB usados de ${total}MB disponibles. (memoria RAM utilizada por JavaScript en el navegador)`;
    }
    return "🧠 Información de memoria no disponible en este navegador";
  },

  random: (min = 1, max = 100) => {
    const minNum = parseInt(min) || 1;
    const maxNum = parseInt(max) || 100;
    const resultado = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return `🎯 Número aleatorio entre ${minNum} y ${maxNum}: ${resultado}`;
  },

  calculadora: (operacion) => {
    if (!operacion) return "🧮 Usa así: /calculadora 2+2 o /calculadora 10*5";
    try {
      // Sanitizar la operación para seguridad
      const operacionLimpia = operacion.replace(/[^0-9+\-*/.() ]/g, '');
      const resultado = eval(operacionLimpia);
      return `🧮 ${operacion} = ${resultado}`;
    } catch (error) {
      return "❌ Operación inválida. Ejemplo: /calculadora 2+2";
    }
  },

  qr: (texto) => {
    if (!texto) return "📱 Usa así: /qr tu-texto-aqui";
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(texto)}`;
    window.open(qrUrl, '_blank');
    return `📱 Código QR generado para: "${texto}"`;
  },

  password: (longitud = 12) => {
    const len = parseInt(longitud) || 12;
    if (len < 4 || len > 50) return "🔐 Longitud debe estar entre 4 y 50 caracteres";
    
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < len; i++) {
      password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return `🔐 Contraseña generada (${len} caracteres): ${password}`;
  },

  ip: async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return `🌐 Tu IP pública: ${data.ip}`;
    } catch (error) {
      return "🌐 No pude obtener tu IP en este momento";
    }
  },

  navegador: () => {
    const nav = navigator;
    const info = {
      navegador: nav.userAgent.split(' ').pop().split('/')[0] || 'Desconocido',
      plataforma: nav.platform,
      idioma: nav.language,
      cookiesHabilitadas: nav.cookieEnabled ? 'Sí' : 'No',
      online: nav.onLine ? 'Conectado' : 'Desconectado'
    };
    return `🌐 INFORMACIÓN DEL NAVEGADOR:\n• Navegador: ${info.navegador}\n• Plataforma: ${info.plataforma}\n• Idioma: ${info.idioma}\n• Cookies: ${info.cookiesHabilitadas}\n• Estado: ${info.online}`;
  },

  pantalla: () => {
    const screen = window.screen;
    return `📺 RESOLUCIÓN DE PANTALLA:\n• Resolución: ${screen.width}x${screen.height}\n• Resolución disponible: ${screen.availWidth}x${screen.availHeight}\n• Profundidad de color: ${screen.colorDepth} bits`;
  },

  bateria: async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await navigator.getBattery();
        const nivel = Math.round(battery.level * 100);
        const estado = battery.charging ? 'Cargando' : 'Desconectado';
        return `🔋 Batería: ${nivel}% - ${estado}`;
      } catch (error) {
        return "🔋 Información de batería no disponible";
      }
    }
    return "🔋 API de batería no soportada en este navegador";
  },

  ping: () => {
    const start = performance.now();
    return new Promise((resolve) => {
      // Simular un ping básico
      setTimeout(() => {
        const end = performance.now();
        const latencia = Math.round(end - start);
        resolve(`📡 Ping simulado: ~${latencia}ms`);
      }, Math.random() * 100 + 50);
    });
  }
};

// Función auxiliar (asegúrate de tenerla definida)
function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Respuestas por defecto mejoradas y más naturales
const defaultResponses = [
  "🤔 mmm... no estoy seguro de cómo responder a eso. ¿Podés ser más específico?",
  "Hmm, esa me la dejaste difícil. ¿Te refieres a algo sobre programación, chistes, o Facundo?",
  "¡No capto! 😅 Probá escribiendo '/help' para ver qué puedo hacer, o charlame de otra cosa.",
  "Me perdí ahí... ¿podrías explicarme mejor?",
  "🎯 No te entendí del todo, pero puedo ayudarte con programación, chistes, comandos útiles, o simplemente charlar.",
  "Esa está complicada para mi cerebrito de bot 🤖 ¿Probamos con otra pregunta?"
];

// Función auxiliar para obtener respuesta aleatoria
function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Función para cerrar consola
function closeConsole() {
  consoleBox.classList.add("console-hidden");
}

// Función para mostrar/abrir la consola
function showConsole() {
  // Remover la clase que oculta la consola
  consoleBox.classList.remove("console-hidden");
  
  // Enfocar el input para que el usuario pueda escribir inmediatamente
  consoleInput.focus();
  
}

// Función mejorada de detección de palabras clave con sinónimos
function detectKeywords(input) {
  const text = input.toLowerCase();
  const detectedKeywords = [];
  
  // Buscar cada palabra clave y sus sinónimos en el texto
  for (const [keyword, data] of Object.entries(knowledge)) {
    // Buscar la palabra clave principal
    if (text.includes(keyword)) {
      detectedKeywords.push({
        keyword,
        weight: data.weight,
        responses: data.responses
      });
      continue;
    }
    
    // Buscar sinónimos si existen
    if (data.synonyms) {
      for (const synonym of data.synonyms) {
        if (text.includes(synonym)) {
          detectedKeywords.push({
            keyword,
            weight: data.weight,
            responses: data.responses,
            matchedSynonym: synonym
          });
          break; // Solo agregar una vez por keyword
        }
      }
    }
  }
  
  // Ordenar por peso (mayor peso = mayor prioridad)
  detectedKeywords.sort((a, b) => b.weight - a.weight);
  
  return detectedKeywords;
}

// Función principal de respuesta del bot
function botResponse(input) {
  const text = input.trim().toLowerCase();

  // Verificar comandos específicos primero (con soporte para / y sin /)
  const command = text.startsWith('/') ? text.substring(1) : text;
  
  if (commands[command]) {
    if (command === "clear") {
      consoleOutput.innerHTML = '';
      return "";
    }
    
    // Si es una función, ejecutarla
    if (typeof commands[command] === 'function') {
      return commands[command]();
    }
    
    return commands[command];
  }

  // PATRONES DE CONVERSACIÓN NATURAL (antes que keywords)
  
  // Estados de ánimo y respuestas sobre cómo está
  if (text.includes("todo bien") || text.includes("muy bien") || text.includes("genial") || 
      text.includes("excelente") || text.includes("perfecto") || text.includes("barbaro")) {
    return getRandomResponse([
      "¡Qué bueno! Me alegra saber que estás bien 😊 ¿En qué puedo ayudarte?",
      "¡Genial! Siempre es lindo escuchar que todo marcha bien 🌟",
      "¡Perfecto! Con esa actitud positiva, ¿qué podemos hacer hoy?",
      "¡Excelente! Me contagias la buena onda 😄 ¿Charlamos de algo?"
    ]);
  }

  // Respuestas sobre el estado del bot
  if ((text.includes("todo bien") || text.includes("muy bien") || text.includes("genial")) && 
      (text.includes("y vos") || text.includes("y tu") || text.includes("y usted"))) {
    return getRandomResponse([
      "¡Yo estoy de 10! Funcionando perfectamente y con ganas de charlar 🤖✨",
      "¡Bárbaro! Aquí andamos, procesando a full y sin errores 😄",
      "¡Todo perfecto por acá! Mis circuitos están felices hoy 🔋😊",
      "¡Genial! Estoy al 100% y listo para cualquier desafío 🚀"
    ]);
  }

  // Respuestas sobre inteligencia del bot
  if (text.includes("no sos tan inteligente") || text.includes("no eres tan inteligente") || 
      text.includes("no tan inteligente") || text.includes("poco inteligente")) {
    return getRandomResponse([
      "¡Jajaja! Tienes razón, soy 'semi-inteligente' 😅 Pero siempre trato de mejorar. ¿Me das una oportunidad?",
      "¡Touché! 😄 Soy un bot en desarrollo, pero hey, ¡al menos tengo buena onda!",
      "¡Ouch! 😂 Bueno, mi creador Facundo me está mejorando constantemente. ¿Qué te parece si charlamos?",
      "¡Es verdad! Soy más 'artesanal' que GPT 😜 Pero tengo personalidad, ¿no?"
    ]);
  }

  // Preguntas sobre qué hacer
  if (text.includes("que hago") || text.includes("qué hago") || text.includes("que puedo hacer") || 
      text.includes("qué puedo hacer") || text.includes("aburrido") || text.includes("aburrida")) {
    return getRandomResponse([
      "¡Hmm! Podemos hacer varias cosas: te cuento un chiste, hablamos de programación, o preguntame sobre mi creador Facundo. ¿Qué te copa?",
      "¡Buena pregunta! Podés pedirme un /chiste, consultar la /hora, o simplemente charlar conmigo. ¿Qué te parece?",
      "¡Opciones hay! ¿Querés que te entretenga con chistes, hablamos de tecnología, o te muestro mis comandos con /help?",
      "¡No te aburras! Puedo contarte sobre JavaScript, hacer chistes malos, o charlar de lo que se te ocurra 😄"
    ]);
  }

  // Confirmaciones sobre capacidades
  if (text.includes("devolves respuestas") || text.includes("respondes") || text.includes("contestas") ||
      text.includes("hablas") || text.includes("charlas")) {
    return getRandomResponse([
      "¡Exacto! Soy un chatbot, así que respondo y converso contigo 😊 ¿De qué querés hablar?",
      "¡Sí! Esa es mi función principal: charlar y responder preguntas. ¿Qué te interesa saber?",
      "¡Claro! Estoy aquí para conversar, ayudar y entretener. ¿En qué puedo ayudarte? 🤖",
      "¡Por supuesto! Soy tu compañero de charla virtual. ¿Qué tema te copa?"
    ]);
  }

  // Detectar palabras clave con sinónimos
  const keywords = detectKeywords(input);
  
  if (keywords.length > 0) {
    // Usar la palabra clave con mayor peso
    const primaryKeyword = keywords[0];
    let response = getRandomResponse(primaryKeyword.responses);
    
    // Si hay múltiples keywords detectadas, mencionarlo
    if (keywords.length > 1) {
      const otherKeywords = keywords.slice(1, 2).map(k => k.keyword).join(", ");
     // response += `\n\n💡 (También detecté: ${otherKeywords})`;
    }
    
    return response;
  }

  // Respuestas especiales para patrones comunes
  if (text.includes("como estas") || text.includes("cómo estás") || text.includes("que tal")) {
    return getRandomResponse([
      "¡Estoy funcionando al 100%! 🚀 ¿Y tú cómo estás?",
      "¡De maravilla! Siempre es un buen día para chatear contigo 😊",
      "¡Excelente! Mi código está libre de bugs hoy... creo 😄",
      "¡Genial! ¿Qué tal tu día? ¡Espero que estés programando cosas geniales!"
    ]);
  }
  
  if (text.includes("gracias") || text.includes("thank")) {
    return getRandomResponse([
      "¡De nada! Para eso estoy aquí, siempre a tu servicio 😊🤖",
      "¡Un placer ayudarte! ¿Algo más en lo que pueda colaborar?",
      "¡Siempre es un gusto! No dudes en preguntarme lo que necesites",
      "¡No hay de qué! Me encanta ser útil 🌟"
    ]);
  }
  
  if (text.includes("adios") || text.includes("adiós") || text.includes("bye") || text.includes("chau")) {
    return getRandomResponse([
      "¡Hasta luego! Que tengas un día espectacular 👋✨",
      "¡Nos vemos! Presiona ESC cuando quieras volver a charlar",
      "¡Adiós! Fue un placer conversar contigo 😊",
      "¡Hasta pronto! Aquí estaré esperándote cuando me necesites 🤖💙"
    ]);
  }

  if (text.includes("hola") || text.includes("buenos dias") || text.includes("buenas tardes")) {
    return getRandomResponse([
      "¡Hola! ¡Qué bueno verte por aquí! 😊",
      "¡Saludos! ¿Cómo estás hoy?",
      "¡Hey! ¡Bienvenido de vuelta! 🎉",
      "¡Hola! ¿En qué puedo ayudarte hoy? 🤖"
    ]);
  }

  // Si no hay coincidencias, usar respuesta por defecto
  return getRandomResponse(defaultResponses);
}

// Función para agregar texto a la consola
function appendToConsole(text, isUser = false) {
  const line = document.createElement("div");
  line.textContent = (isUser ? ">>> " : " ") + text;
  line.className = isUser ? "user-message" : "bot-message";
  consoleOutput.appendChild(line);
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// Función para enviar comando
function sendConsoleCommand() {
  const input = consoleInput.value;
  if (!input.trim()) return;
  
  appendToConsole(input, true);
  const response = botResponse(input);
  if (response) appendToConsole(response);
  consoleInput.value = '';
}

// Función para ejecutar comandos desde los botones de navegación
function executeNavCommand(command) {
  // Mostrar la consola si está oculta
  if (consoleBox.classList.contains("console-hidden")) {
    showConsole();
  }
  
  // Ejecutar el comando y obtener la respuesta
  const response = botResponse('/' + command);
  
  // Agregar el comando como mensaje del usuario
  appendToConsole('/' + command, true);
  
  // Agregar la respuesta del bot
  if (response) {
    appendToConsole(response);
  }
  
  // Enfocar el input para continuar la conversación
  consoleInput.focus();
}

// Event listeners
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    consoleBox.classList.toggle("console-hidden");

    if (!consoleBox.classList.contains("console-hidden")) {
      consoleInput.focus();
    }
  }

  if (e.key === "Enter" && document.activeElement === consoleInput) {
    sendConsoleCommand();
  }
});

// Observer para mensaje de bienvenida mejorado
const observer = new MutationObserver(() => {
  if (!greeted && !consoleBox.classList.contains("console-hidden")) {
    const welcomeMessages = [
      " ¡BIENVENIDO AL SISTEMA!\n\n💙 Me llamo F4.K1.T0, ¡pero mis amigos me dicen Fakito!\n🧠 Soy un ChatBot semi-inteligente creado por Facundo Ezequiel Amelotti\n🎯 Versión 2.0 Enhanced con nuevas funciones\n\n📝 Escribí '/help' para ver todos mis comandos\n\n🚀 ¡Empecemos a conversar!"
    ];
    
    appendToConsole(getRandomResponse(welcomeMessages));
    greeted = true;
  }
});

observer.observe(consoleBox, { attributes: true, attributeFilter: ["class"] });