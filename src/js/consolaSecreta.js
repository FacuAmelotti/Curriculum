const consoleBox = document.getElementById("secretConsole");
const consoleOutput = document.getElementById("consoleOutput");
const consoleInput = document.getElementById("consoleInput");

    const techFacts = [
    "La vida es muy simple, pero insistimos en hacerla complicada. — Confucio",
    "La verdadera sabiduría está en reconocer la propia ignorancia. — Sócrates",
    "El sabio puede cambiar de opinión. El necio, nunca. — Immanuel Kant",
    "La paciencia es la compañera de la sabiduría. — San Agustín",
    "La sabiduría comienza en la maravilla. — Sócrates",
    "La educación es el encendido de una llama, no el llenado de un recipiente. — Sócrates",
    "Donde hay amor, hay vida. — Mahatma Gandhi",
    "No basta tener buen ingenio; lo principal es aplicarlo bien. — René Descartes",
    "La sabiduría es evitar todos los pensamientos que nos debilitan. — Wayne Dyer",
    "Aprender sin reflexionar es malgastar energía. — Confucio",
    "Conócete a ti mismo. — Templo de Apolo en Delfos",
    "La sabiduría no viene por edad, sino por entendimiento. — William Shakespeare",
    "No se trata de saber mucho, sino de comprender bien. — Demócrito",
    "El conocimiento habla, pero la sabiduría escucha. — Jimi Hendrix",
    "Piensa como un sabio, pero habla como la gente común. — W. B. Yeats",
    "La humildad es la base de toda verdadera grandeza. — James Allen",
    "Vive como si fueras a morir mañana. Aprende como si fueras a vivir siempre. — Mahatma Gandhi",
    "La duda es el principio de la sabiduría. — Aristóteles",
    "Saber y saberlo demostrar es valer dos veces. — Baltasar Gracián",
    "El ignorante afirma, el sabio duda y reflexiona. — Aristóteles",
    "Nadie es más esclavo que quien se cree libre sin serlo. — Goethe",
    "El que tiene imaginación sin instrucción tiene alas sin pies. — Joseph Joubert",
    "Solo sé que no sé nada. — Sócrates",
    "No hay camino hacia la verdad, la verdad es el camino. — Mahatma Gandhi",
    "Un libro abierto es un cerebro que habla. — Proverbio árabe",
    "El sentido común no es tan común. — Voltaire",
    "La mente es como un paracaídas: solo funciona si se abre. — Albert Einstein",
    "La sabiduría viene de escuchar, no de hablar. — Proverbio japonés",
    "Quien domina a otros es fuerte; quien se domina a sí mismo es poderoso. — Lao Tsé",
    "No hay riqueza como el conocimiento, ni pobreza como la ignorancia. — Ali ibn Abi Talib",
    "Pensar es fácil, actuar es difícil, y poner los pensamientos en acción es lo más difícil del mundo. — Goethe",
    "El arte de ser sabio es saber qué pasar por alto. — William James",
    "El sabio no dice todo lo que piensa, pero siempre piensa todo lo que dice. — Aristóteles",
    "El alma que hablar puede con los ojos, también puede besar con la mirada. — Gustavo A. Bécquer",
    "Escoge una ocupación que ames y no tendrás que trabajar ni un día de tu vida. — Confucio",
    "Hay más sabiduría en una lágrima sincera que en mil palabras vacías. — Anónimo",
    "La reflexión es el camino hacia la inmortalidad; la falta de reflexión, el camino hacia la muerte. — Buda",
    "La experiencia no es lo que te sucede, sino lo que haces con lo que te sucede. — Aldous Huxley",
    "No hay camino para la paz, la paz es el camino. — Mahatma Gandhi",
    "Lo esencial es invisible a los ojos. — Antoine de Saint-Exupéry",
    "La disciplina es la parte más importante del éxito. — Truman Capote",
    "El silencio es un amigo que nunca traiciona. — Confucio",
    "La libertad no consiste en tener un buen amo, sino en no tener ninguno. — Cicerón",
    "El hombre sabio no acumula. Cuanto más ayuda a los demás, más se beneficia él. — Lao Tsé",
    "El que busca la verdad corre el riesgo de encontrarla. — Manuel Vicent",
    "La sabiduría es saber cuál es el siguiente paso; la virtud es llevarlo a cabo. — David Starr Jordan",
    "No es pobre el que tiene poco, sino el que mucho desea. — Séneca",
    "Haz lo que puedas, con lo que tengas, donde estés. — Theodore Roosevelt",
    "Cuando el sabio señala la luna, el necio mira el dedo. — Proverbio chino",
    "La verdad se corrompe tanto con la mentira como con el silencio. — Cicerón",
    "El sentido de la vida es darle sentido a la vida. — Viktor Frankl",
    "No llores porque terminó, sonríe porque sucedió. — Dr. Seuss",
    "La mente lo es todo. En lo que piensas, te conviertes. — Buda",
    "La felicidad no es algo hecho. Proviene de tus propias acciones. — Dalai Lama",
    "El pasado no se puede cambiar. El futuro aún está en tu poder. — Mary Pickford",
    "No cuentes los días, haz que los días cuenten. — Muhammad Ali",
    "El hombre que se conquista a sí mismo es más grande que quien conquista a mil hombres en batalla. — Buda",
    "No vemos las cosas como son, las vemos como somos. — Anaïs Nin",
    "El conocimiento es poder. — Francis Bacon",
    "No se puede desatar un nudo sin saber cómo está hecho. — Aristóteles",
    "El mayor enemigo del conocimiento no es la ignorancia, sino la ilusión del conocimiento. — Stephen Hawking",
    "Cuando cambias la forma en que miras las cosas, las cosas que miras cambian. — Wayne Dyer",
    "Un viaje de mil millas comienza con un solo paso. — Lao Tsé",
    "No hay mayor riqueza que una mente tranquila. — Anónimo",
     "Sé tú el cambio que quieres ver en el mundo. — Mahatma Gandhi",
    "El que no puede cambiar su mente no puede cambiar nada. — George Bernard Shaw",
    "Quien en verdad sabe de qué habla, no encuentra razones para levantar la voz. — Leonardo da Vinci",
    "El tiempo es el mejor maestro, desgraciadamente mata a todos sus alumnos. — Louis Hector Berlioz",
    "Prefiero molestar con la verdad que complacer con adulaciones. — Séneca",
    "Nada en la vida debe ser temido, solo comprendido. — Marie Curie",
    "El sabio no enseña con palabras, sino con actos. — Lao Tsé",
    "La libertad es el derecho de hacer lo que no perjudica a los demás. — Montesquieu",
    "Una vida sin reflexión no merece ser vivida. — Sócrates",
    "No esperes por una crisis para descubrir lo que es importante en tu vida. — Platón",
    "La imaginación es más importante que el conocimiento. — Albert Einstein",
    "La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento. — Maya Angelou",
    "Un hombre con una idea nueva es un loco hasta que la idea triunfa. — Mark Twain",
    "El mayor poder es el dominio de uno mismo. — Séneca",
    "La recompensa del trabajo bien hecho es la oportunidad de hacer más trabajo bien hecho. — Jonas Salk",
    "No hay viento favorable para el que no sabe a dónde va. — Séneca",
    "La sabiduría es hija de la experiencia. — Leonardo da Vinci",
    "El conocimiento te dará poder, pero el carácter te dará respeto. — Bruce Lee",
    "Cuida tus pensamientos, se convierten en palabras. — Lao Tsé",
    "Es mejor encender una vela que maldecir la oscuridad. — Proverbio chino",
    "La adversidad no construye el carácter, lo revela. — James Lane Allen",
    "Solo quienes se arriesgan a ir demasiado lejos pueden descubrir qué tan lejos se puede llegar. — T. S. Eliot",
    "No busques los errores, busca un remedio. — Henry Ford",
    "La verdadera inteligencia consiste en saber que no se sabe nada. — Sócrates",
    "La lectura es para la mente lo que el ejercicio es para el cuerpo. — Joseph Addison",
     "El sabio no se sienta para lamentarse, sino que se pone alegremente a su tarea de reparar el daño. — William Shakespeare",
    "No hay nada repartido de modo más equitativo que la razón: todo el mundo está convencido de tener suficiente. — René Descartes",
    "Es mejor ser odiado por lo que eres que amado por lo que no eres. — André Gide",
    "La madurez es tener el coraje de vivir la vida según tus propios valores. — Ayn Rand",
    "La lectura nos regala mucha compañía, libertad para ser de otra manera y ser más. — Pedro Laín Entralgo",
    "No hay que apagar la luz del otro para lograr que brille la nuestra. — Mahatma Gandhi",
    "Ningún copo de nieve cae jamás en el lugar equivocado. — Proverbio japonés",
    "La sabiduría consiste en saber cuál es el siguiente paso; la virtud, en llevarlo a cabo. — David Starr Jordan",
    "La gente olvidará lo que dijiste, pero nunca cómo los hiciste sentir. — Maya Angelou",
    "No es el más fuerte de las especies el que sobrevive, ni el más inteligente, sino el que responde mejor al cambio. — Charles Darwin",
    "La mente que se abre a una nueva idea jamás vuelve a su tamaño original. — Albert Einstein",
    "Solo en la oscuridad puedes ver las estrellas. — Martin Luther King Jr.",
    "La confianza en uno mismo es el primer secreto del éxito. — Ralph Waldo Emerson",
       "Divide y vencerás. — Julio César",
    "Piensa menos, siente más. — Anónimo",
    "Actúa, no reacciones. — Anónimo",
    "Domina tus miedos o ellos te dominarán. — Anónimo",
    "Escucha más de lo que hablas. — Proverbio popular",
    "Hazlo simple. — Leonardo da Vinci",
    "Menos es más. — Ludwig Mies van der Rohe",
    "Primero lo difícil, luego lo imposible. — Anónimo",
    "Lo que no se mide, no se mejora. — Peter Drucker",
    "Conócelo todo, pero aférrate a lo esencial. — Voltaire",
    "El poder real es autocontrol. — Marco Aurelio",
    "Primero ordena tu mente, luego el mundo. — Anónimo",
    "No luches contra el río, aprende a fluir. — Lao Tsé",
     "La felicidad de tu vida depende de la calidad de tus pensamientos. — Marco Aurelio",
    "Lo que perturba al hombre no son los hechos, sino la opinión que tiene de ellos. — Epicteto",
    "Elige no ser dañado, y no lo serás. — Marco Aurelio",
    "El primer paso hacia la grandeza es ser honesto con uno mismo. — Séneca",
    "La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad. — Séneca",
    "Aquel que teme la muerte nunca hará nada digno de un hombre vivo. — Séneca",
    "No es que tengamos poco tiempo, sino que perdemos mucho. — Séneca",
    "El valor no es la ausencia del miedo, sino el juicio de que hay algo más importante que el miedo. — Marco Aurelio",
    "El que no ha aprendido a obedecer no puede ser un buen comandante. — Aristóteles",
    "La victoria pertenece al más perseverante. — Napoleón Bonaparte",
    "No hay imposibles, solo hombres débiles. — Alejandro Magno",
    "Un líder es un comerciante de esperanza. — Napoleón Bonaparte",
    "El miedo es el enemigo de la lógica. — Alejandro Magno",
    "La voluntad es el poder supremo del alma. — Platón",
    "No se puede enseñar nada a un hombre; solo se le puede ayudar a encontrar la respuesta dentro de sí mismo. — Galileo Galilei",
    "No hay deber que descuidemos tanto como el deber de ser felices. — Robert Louis Stevenson",
    "Las palabras son como hojas; cuando abundan, poco fruto hay entre ellas. — Alexander Pope",
    "El conocimiento no es suficiente, debemos aplicarlo. — Johann W. Goethe",
    "La virtud no habita en la soledad: debe tener vecinos. — Confucio",
    "El mundo es un libro y aquellos que no viajan leen solo una página. — San Agustín",
    "Prefiero los errores del entusiasmo que la indiferencia de la sabiduría. — Anatole France",
    "Un día sin risa es un día perdido. — Charles Chaplin",
    "La libertad es el oxígeno del alma. — Moshe Dayan",
    "La sabiduría es la recompensa que obtienes por una vida de escucha. — Doug Larson",
    "Un objetivo sin un plan es solo un deseo. — Antoine de Saint-Exupéry",
    "El verdadero viaje del descubrimiento no consiste en buscar nuevos paisajes, sino en tener nuevos ojos. — Marcel Proust",
     "La libertad comienza donde termina la ignorancia. — Víctor Hugo",
    "Pensar es difícil, por eso la mayoría prefiere juzgar. — Carl Gustav Jung",
    "La imaginación gobierna el mundo. — Napoleón Bonaparte",
    "El futuro pertenece a quienes creen en la belleza de sus sueños. — Eleanor Roosevelt",
    "No esperes por una señal, sé la señal. — Anónimo",
    "La acción es la clave fundamental para todo éxito. — Pablo Picasso",
    "El entusiasmo mueve el mundo. — Arthur Balfour",
    "El conocimiento habla, pero la sabiduría escucha. — Jimi Hendrix",
    "El fracaso es la oportunidad de comenzar de nuevo con más inteligencia. — Henry Ford",
    "Sé como el agua: adáptate, fluye, sé fuerte o suave según se requiera. — Bruce Lee",
    "El hombre que mueve montañas comienza cargando pequeñas piedras. — Confucio",
    "No hay revolución sin evolución interior. — Krishnamurti",
    "Cuando no se puede lograr lo que se quiere, mejor cambiar de actitud. — Terencio",
    "No tomar una decisión ya es una decisión. — William James",
    "En cada momento estás decidiendo quién eres. — Neale Donald Walsch",
    "El sabio no dice todo lo que piensa, pero siempre piensa todo lo que dice. — Aristóteles",
    "El mayor error es no hacer nada porque solo puedes hacer un poco. — Edmund Burke",
    "La vida es la suma de todas tus decisiones. — Albert Camus",
    "Una buena decisión se basa en conocimiento, no en números. — Platón",
    "Decidir no arriesgarse ya es un riesgo. — Anónimo",
    "Los sabios son los que buscan la sabiduría; los necios piensan haberla encontrado. — Napoleón Bonaparte",
    "Quien tiene por qué vivir puede soportar casi cualquier cómo. — Friedrich Nietzsche",
    "No hay viento favorable para el que no sabe a qué puerto va. — Séneca",
    "Tu mente es tu arma más poderosa; aprende a usarla bien. — Anónimo",
    "A veces el silencio es la decisión más sabia. — Anónimo",
    "La claridad viene con la acción, no con la espera. — Marie Forleo",
     "El sabio habla porque tiene algo que decir; el necio, porque tiene que decir algo. — Platón",
    "No se puede cruzar el mar simplemente mirando el agua. — Rabindranath Tagore",
    "El sentido común no es tan común. — Voltaire",
    "Una mente tranquila trae fuerza interior y confianza en uno mismo. — Dalái Lama",
    "Si quieres conocer a una persona, no escuches sus palabras, observa su comportamiento. — Dalái Lama",
    "Quien tiene un porqué para vivir puede soportar casi cualquier cómo. — Friedrich Nietzsche",
    "Solo los que se atreven a tener grandes fracasos terminan logrando grandes éxitos. — Robert F. Kennedy",
    "El árbol más fuerte crece en el viento más fuerte. — Anónimo",
    "El río alcanza sus metas porque ha aprendido a sortear los obstáculos. — Proverbio zen",
    "El conocimiento te da poder, pero el carácter te da respeto. — Bruce Lee",
    "La inteligencia consiste no solo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica. — Aristóteles",
    "No cuentes los días, haz que los días cuenten. — Muhammad Ali",
    "El que domina a otros es fuerte; el que se domina a sí mismo es poderoso. — Lao Tsé",
     "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. — Albert Schweitzer",
    "El mayor descubrimiento de todos los tiempos es que una persona puede cambiar su futuro cambiando su actitud. — Oprah Winfrey",
    "La única forma de hacer un gran trabajo es amar lo que haces. — Steve Jobs",
    "No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. — John D. Rockefeller",
    "El arte de ser sabio es saber qué pasar por alto. — William James",
    "La disciplina es el puente entre metas y logros. — Jim Rohn",
    "No busques errores, busca soluciones. — Henry Ford",
    "Haz lo que puedas, con lo que tengas, donde estés. — Theodore Roosevelt",
    "La libertad es nada más que una oportunidad para ser mejor. — Albert Camus",
    "Cuanto más sudes en el entrenamiento, menos sangrarás en la batalla. — Proverbio espartano",
    "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. — Winston Churchill",
    "El destino mezcla las cartas, pero tú las juegas. — Jean-Paul Sartre",
    "Nada en la vida debe ser temido, solo comprendido. — Marie Curie",
    "La ciencia no es solo conocimiento, es una manera de pensar. — Carl Sagan",
    "Lo importante es no dejar de hacerse preguntas. — Albert Einstein",
    "Pienso, luego existo. — René Descartes",
    "Lo que sabemos es una gota de agua; lo que ignoramos es el océano. — Isaac Newton",
    "El mayor enemigo del conocimiento no es la ignorancia, sino la ilusión del conocimiento. — Stephen Hawking",
    "La ciencia es el gran antídoto contra el veneno del entusiasmo y la superstición. — Adam Smith",
    "La curiosidad es más importante que el conocimiento. — Albert Einstein",
    "No hay nada en la vida que deba ser temido, solo comprendido. — Marie Curie",
    "Prefiero una pregunta que no se pueda responder que una respuesta que no se pueda cuestionar. — Richard Feynman",
    "Toda verdad pasa por tres etapas: se ridiculiza, se opone violentamente, y luego se acepta como evidente. — Arthur Schopenhauer",
    "La naturaleza nunca se apresura, pero todo se logra. — Lao Tsé",
    "La ciencia sin religión está coja, la religión sin ciencia está ciega. — Albert Einstein",
    "La física es como el sexo: seguro que tiene alguna utilidad, pero no es por eso que lo hacemos. — Richard Feynman",
     "No le temo a la muerte; simplemente no quiero estar allí cuando suceda. — Woody Allen",
    "La muerte no es el opuesto de la vida, sino una parte de ella. — Haruki Murakami",
    "Vivir es nacer a cada instante. — Erich Fromm",
    "No morimos el día que dejamos de respirar, sino cuando dejamos de ser recordados. — Anónimo",
    "La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento. — Maya Angelou",
    "La vida es una obra teatral que no importa cuánto haya durado, sino lo bien que haya sido representada. — Séneca",
    "La muerte es dulce cuando la vida ha sido amarga. — Johann W. Goethe",
    "El miedo a la muerte nace del miedo a la vida. — Mark Twain",
    "Morir no es nada; no vivir es aterrador. — Victor Hugo",
    "El día que comprendí que morir es parte de vivir, dejé de temer. — Jorge Luis Borges",
    "Solo se muere cuando se olvida. — Anónimo",
    "Cada hombre muere. No todos viven realmente. — William Wallace",
    "La vida es un relámpago entre dos oscuridades. — Platón",
     "La fortuna favorece a los audaces. — Julio César",
    "La guerra es el arte de destruir hombres. — Napoleón Bonaparte",
    "Un ejército marcha sobre su estómago. — Napoleón Bonaparte",
    "Prefiero la gloria en la batalla a una vida larga y aburrida. — Alejandro Magno",
    "El valor sin estrategia es un ruido antes de la derrota. — Sun Tzu",
    "Los obstáculos no pueden detenerme. Cada obstáculo se convierte en una oportunidad para mejorar mi habilidad. — Bruce Lee",
    "La disciplina es la alma de un ejército. — George Washington",
    "Si quieres paz, prepárate para la guerra. — Vegetius",
    "El que no sabe conquistar a sí mismo nunca conquistará a otros. — Napoleón Bonaparte",
    "La rapidez es la esencia de la guerra. — Napoleón Bonaparte",
    "El arte de la guerra es de vital importancia para el Estado. — Sun Tzu",
    "Más vale ser temido que amado, si no puedes ser ambos. — Maquiavelo",
    "La única manera de manejar la guerra es hacerla corta. — Napoleón Bonaparte",
     "El liderazgo es la capacidad de transformar la visión en realidad. — Warren Bennis",
    "Un líder es mejor cuando la gente apenas sabe que existe. — Lao Tsé",
    "El poder no corrompe; el miedo corrompe. — John Steinbeck",
    "La innovación distingue a un líder de un seguidor. — Steve Jobs",
    "El arte de la comunicación es el lenguaje del liderazgo. — James Humes",
    "No sigas donde el camino te pueda llevar. Ve donde no hay camino y deja un rastro. — Ralph Waldo Emerson",
    "La grandeza no consiste en recibir honores, sino en merecerlos. — Aristóteles",
    "Un buen líder lleva a la gente donde quieren ir. Un gran líder lleva a la gente donde no necesariamente quieren ir, pero deberían estar. — Rosalynn Carter",
    "El liderazgo es acción, no posición. — Donald McGannon",
    "El éxito de un líder se mide por el éxito de sus seguidores. — John C. Maxwell",
    "Un líder es un comerciante de esperanza. — Napoleón Bonaparte",
    "El poder reside en la gente, no en la autoridad. — Abraham Lincoln",
     "Un líder lleva a la gente donde quiere ir. Un gran líder lleva a la gente donde no necesariamente quieren ir, pero deberían estar. — Rosalynn Carter",
    "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. — Winston Churchill",
    "Quien conquista a otros es fuerte; quien se conquista a sí mismo es poderoso. — Lao Tsé",
    "El que quiere permanentemente 'llegar más alto' tiene que contar con que algún día le invadirá el vértigo. — Milan Kundera",
    "La guerra es la continuación de la política por otros medios. — Carl von Clausewitz",
    "En la batalla, como en la vida, quien persevera alcanza la gloria. — Alejandro Magno",
    "El hombre valiente conquista primero sus miedos, luego a sus enemigos. — Publilio Siro",
    "Quien controla el presente, controla el pasado. Quien controla el pasado, controla el futuro. — George Orwell",
    "Nadie ha ganado una batalla siendo cobarde. — Anónimo",
    "Los grandes líderes no se imponen, se inspiran. — Anónimo",
    "La estrategia sin tácticas es el camino más lento hacia la victoria. — Sun Tzu",
    "Prefiero morir de pie que vivir siempre arrodillado. — Emiliano Zapata"
    ];

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
      "Mis superpoderes incluyen: detectar palabras clave, contar chistes, dar información sobre programación, y ser tu compañero de charla virtual. ¡Escribí '/help' para ver todo lo que puedo hacer!",
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
  help: "📜 LISTA COMPLETA DE COMANDOS:\n\n🔹 INFORMACIÓN BÁSICA:\n• /help - Mostrar ayuda principal\n• /info - Información detallada sobre mí\n• /clear - Limpiar la consola\n• /clima - Info meteorológica (simulada)\n• /mapa - Abrir mapa interactivo de Argentina\n• /changemode - Cambiar entre tema claro/oscuro\n• /version - Ver mi versión\n• /creator - Info sobre Facundo\n• /estado - Estado del sistema\n\n🔹 TIEMPO Y FECHA:\n• /hora - Ver la hora actual\n• /fecha - Ver fecha y hora completas\n• /dia - Saber qué día es hoy\n• /uptime - Tiempo que llevo activo\n\n🔹 DIVERSIÓN Y JUEGOS:\n• /saludo - Recibir un saludo amigable\n• /chiste - Escuchar un chiste de programación\n• /dado - Tirar un dado (1-6)\n• /moneda - Tirar una moneda (cara/cruz)\n• /pregunta - Respuesta mágica tipo 8-ball\n• /random - Generar número aleatorio\n• /fxeffect - Crea un efecto visual aleatorio\n\n",

  info: "👋 ¡Hola! Soy F4.K1.T0 (Fakito)\n🧠 ChatBot semi-inteligente.\n👨💻 Fui creado por: Facundo Ezequiel Amelotti\n🌟 Versión: 2.0 (Sigo en desarrollo!)\n💬 Lenguaje: JavaScript puro\n\n¡Pregúntame lo que quieras! 🚀",
  
  comandos_avanzados: "🔹 UTILIDADES AVANZADAS\n• /memoria - Ver uso actual de memoria\n• /ip - Obtener tu IP pública\n• /ping - Obtener ping de respuesta\n• /navegador - Info de tu navegador\n• /pantalla - Resolución de pantalla\n• /ubicacion - Obtiene una aproximacion a tu ubicacion\n• /rendimiento - Obtiene una lista de capacidades del navegador\n• /monitor - Tiempos de navegación detallados\n• /seguridad - Verifica HTTPS, CSP, cookies seguras, etc.",
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

monitor: () => {
  const perf = performance;
  const timing = perf.timing;
  const nav = perf.navigation;
  
  return `🌡️ MONITOR DEL SISTEMA:
• Tipo de navegación: ${nav.type === 0 ? 'Navegación normal' : nav.type === 1 ? 'Recarga' : 'Navegación desde caché'}
• Redirecciones: ${nav.redirectCount}
• Tiempo de DNS: ${timing.domainLookupEnd - timing.domainLookupStart}ms
• Tiempo de conexión: ${timing.connectEnd - timing.connectStart}ms
• Tiempo de respuesta: ${timing.responseEnd - timing.responseStart}ms
• Tiempo DOM ready: ${timing.domContentLoadedEventEnd - timing.navigationStart}ms`;
},

seguridad: () => {
  const isHTTPS = location.protocol === 'https:';
  const hasCSP = !!document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  const mixedContent = !isHTTPS && document.querySelectorAll('img[src^="https"], script[src^="https"]').length > 0;
  
  return `🔒 ANÁLISIS DE SEGURIDAD:
• Conexión: ${isHTTPS ? '🔒 HTTPS Segura' : '⚠️ HTTP No segura'}
• Content Security Policy: ${hasCSP ? '✅ Presente' : '❌ Ausente'}
• Contenido mixto: ${mixedContent ? '⚠️ Detectado' : '✅ No detectado'}
• Cookies seguras: ${document.cookie.includes('Secure') ? '✅ Sí' : '❌ No'}
• SameSite cookies: ${document.cookie.includes('SameSite') ? '✅ Configurado' : '❌ No configurado'}
• Referrer Policy: ${document.querySelector('meta[name="referrer"]')?.content || 'No especificada'}`;
},

rendimiento: () => {
  const perf = performance;
  const memoria = perf.memory;
  const conexion = navigator.connection;
  
  let info = `⚡ RENDIMIENTO:
• Tiempo de carga: ${Math.round(perf.timing.loadEventEnd - perf.timing.navigationStart)}ms
• Tiempo hasta primer byte: ${Math.round(perf.timing.responseStart - perf.timing.requestStart)}ms`;

  if (memoria) {
    info += `
• Memoria JS usada: ${Math.round(memoria.usedJSHeapSize / 1048576)}MB
• Memoria JS total: ${Math.round(memoria.totalJSHeapSize / 1048576)}MB
• Límite de memoria: ${Math.round(memoria.jsHeapSizeLimit / 1048576)}MB`;
  }

  if (conexion) {
    info += `
• Tipo de conexión: ${conexion.effectiveType || 'Desconocido'}
• Velocidad estimada: ${conexion.downlink || 'N/A'} Mbps`;
  }

  return info;
},

  ubicacion: () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const idioma = navigator.language;
  
  // Mapeo básico de zonas horarias a regiones
  const regiones = {
    'America/Argentina/Buenos_Aires': '🇦🇷 Argentina (Buenos Aires)',
    'America/Sao_Paulo': '🇧🇷 Brasil (São Paulo)',
    'America/New_York': '🇺🇸 Estados Unidos (Costa Este)',
    'America/Los_Angeles': '🇺🇸 Estados Unidos (Costa Oeste)',
    'Europe/Madrid': '🇪🇸 España',
    'Europe/London': '🇬🇧 Reino Unido',
    'Asia/Tokyo': '🇯🇵 Japón',
    'Australia/Sydney': '🇦🇺 Australia'
  };
  
  const region = regiones[timezone] || `🌍 ${timezone}`;
  
  return `📍 UBICACIÓN APROXIMADA:
• Región: ${region}
• Zona horaria: ${timezone}
• Idioma del navegador: ${idioma}
• Configuración regional: ${Intl.DateTimeFormat().resolvedOptions().locale}`;
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

  frase: () => {
  const index = Math.floor(Math.random() * techFacts.length);
  return `🧠 "${techFacts[index]}"`;
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
        resolve(`📡 Ping: ~${latencia}ms`);
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
  "🤔 mmm... no estoy seguro de cómo responder a eso. ¿Podés ser más específico?\n[Escribe /help ante cualquier duda]",
  "Disculpa... ¡No capto! 😅\n[Probá escribiendo '/help']",
  "Me perdí ahí... ¿podrías explicarme mejor?\n[Escribe /help ante cualquier duda]",
];

// Función auxiliar para obtener respuesta aleatoria
function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Función para cerrar consola
function closeConsole() {
  consoleBox.classList.add("console-hidden");
  document.getElementById('consoleOverlay').style.display = 'none';
}

// Función para mostrar/abrir la consola
function showConsole() {
  // Remover la clase que oculta la consola
  consoleBox.classList.remove("console-hidden");
  document.getElementById('consoleOverlay').style.display = 'block';
  
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
async function botResponse(input) {
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
    const result = commands[command]();
    
    // Si el resultado es una promesa, manejarlo de forma especial
    if (result instanceof Promise) {
      return await result;
    }
    
    return result;
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
async function sendConsoleCommand() {
  const input = consoleInput.value;
  if (!input.trim()) return;
  
  appendToConsole(input, true);
  
  // Detectar comandos asíncronos y mostrar loading
  const command = input.trim().toLowerCase().replace('/', '');
  const asyncCommands = ['ip', 'ping', 'bateria'];
  
  if (asyncCommands.includes(command)) {
    showLoading("⏳ Obteniendo información...");
    try {
      const response = await botResponse(input);
      if (response) {
        updateLastMessage(response);
      }
    } catch (error) {
      updateLastMessage("❌ Error al procesar el comando");
    }
  } else {
    const response = await botResponse(input);
    if (response) appendToConsole(response);
  }
  
  consoleInput.value = '';
}

// Función para ejecutar comandos desde los botones de navegación
async function executeNavCommand(command) {
  // Mostrar la consola si está oculta
  if (consoleBox.classList.contains("console-hidden")) {
    showConsole();
  }
  
  // Agregar el comando como mensaje del usuario
  appendToConsole('/' + command, true);
  
  // Detectar comandos asíncronos
  const asyncCommands = ['ip', 'ping', 'bateria'];
  
  if (asyncCommands.includes(command)) {
    showLoading("⏳ Obteniendo información...");
    try {
      const response = await botResponse('/' + command);
      if (response) {
        updateLastMessage(response);
      }
    } catch (error) {
      updateLastMessage("❌ Error al procesar el comando");
    }
  } else {
    const response = await botResponse('/' + command);
    if (response) appendToConsole(response);
  }
}

// Función auxiliar para mostrar "Cargando..." mientras se procesa un comando asíncrono
function showLoading(message = "⏳ Procesando...") {
  appendToConsole(message);
}

// Función auxiliar para actualizar el último mensaje de la consola
function updateLastMessage(newText) {
  const messages = consoleOutput.querySelectorAll('.bot-message');
  if (messages.length > 0) {
    const lastMessage = messages[messages.length - 1];
    lastMessage.textContent = " " + newText;
  }
}

// Event listeners
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    consoleBox.classList.toggle("console-hidden");
      document.getElementById('consoleOverlay').style.display = 'none';
    if (!consoleBox.classList.contains("console-hidden")) {
        document.getElementById('consoleOverlay').style.display = 'block';
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