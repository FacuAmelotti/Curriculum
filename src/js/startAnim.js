// startAnim.js - Animación de introducción épica y elegante
function startAnim() {
    // Array de frases tecnológicas aleatorias
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
    
    // Seleccionar frase aleatoria
    const randomFact = techFacts[Math.floor(Math.random() * techFacts.length)];
    
    // Crear overlay principal con efecto de cristal
    const overlay = document.createElement('div');
    overlay.id = 'intro-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: radial-gradient(ellipse at center, rgba(15, 15, 15, 0.95) 0%, #0c0c0c 100%);
        backdrop-filter: blur(20px);
        z-index: 10000;
        pointer-events: none;
        transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    `;
    
    // Crear múltiples capas de grid animadas
    const gridLayers = document.createElement('div');
    gridLayers.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    `;
    
    // Grid principal con efecto de escaneo
    const gridPattern = document.createElement('div');
    gridPattern.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 120%;
        height: 120%;
        background-image: 
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
        background-size: 60px 60px;
        animation: gridScan 2s ease-in-out infinite alternate, gridSlide 8s linear infinite;
        transform: translate(-10%, -10%);
    `;
    
    // Grid secundario con movimiento diagonal
    const gridPattern2 = document.createElement('div');
    gridPattern2.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 120%;
        height: 120%;
        background-image: 
            linear-gradient(45deg, rgba(160, 160, 160, 0.03) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(160, 160, 160, 0.03) 1px, transparent 1px);
        background-size: 40px 40px;
        animation: gridRotate 6s linear infinite;
        transform: translate(-10%, -10%);
    `;
    
    // Crear starburst de partículas
    const starburst = document.createElement('div');
    starburst.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 2px;
        transform: translate(-50%, -50%);
        opacity: 0%;
    `;
    
    // Generar rayos de luz radiales
    for (let i = 0; i < 24; i++) {
        const ray = document.createElement('div');
        ray.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 300px;
            background: linear-gradient(to bottom, 
                rgba(255, 255, 255, 0.8) 0%, 
                rgba(255, 255, 255, 0.3) 20%, 
                transparent 100%);
            transform-origin: bottom center;
            transform: rotate(${i * 15}deg) translateY(-300px);
            animation: rayExpand 0.8s ease-out ${i * 0.02}s forwards, rayPulse 2s ease-in-out ${0.8 + i * 0.02}s infinite;
            opacity: 0;
        `;
        starburst.appendChild(ray);
    }
    
    // Crear constelación de puntos brillantes
    const constellation = document.createElement('div');
    constellation.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `;
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1;
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: starTwinkle ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 2}s infinite,
                       starFloat ${Math.random() * 20 + 10}s linear infinite;
            box-shadow: 0 0 ${size * 4}px rgba(255, 255, 255, 0.5);
        `;
        constellation.appendChild(star);
    }
    
    // Crear el logo/texto central con efecto holográfico
    const centerContent = document.createElement('div');
    centerContent.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        opacity: 0;
        animation: centerReveal 1s ease-out 0.3s forwards;
        max-width: 90vw;
    `;
    
    const logoText = document.createElement('div');
    logoText.textContent = 'CARGANDO';
    logoText.style.cssText = `
        font-family: 'JetBrains Mono', monospace;
        font-size: clamp(2rem, 6vw, 4rem);
        font-weight: 700;
        letter-spacing: 8px;
        background: linear-gradient(135deg, 
            #ffffff 0%, 
            #f8fafc 25%, 
            #ffffff 50%, 
            #e2e8f0 75%, 
            #ffffff 100%);
        background-size: 200% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: holographicShimmer 2s ease-in-out infinite,
                   textGlow 3s ease-in-out infinite alternate;
        filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
        margin-bottom: 20px;
    `;
    
    const subtitle = document.createElement('div');
    subtitle.textContent = randomFact;
    subtitle.style.cssText = `
        font-family: 'Inter', sans-serif;
        font-size: clamp(11px, 2.5vw, 14px);
        font-weight: 300;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 20px;
        animation: subtitleFade 1s ease-out 0.8s forwards;
        opacity: 0;
        line-height: 1.4;
        max-width: 80vw;
        margin-left: auto;
        margin-right: auto;
    `;
    
    // Crear barra de progreso futurista
    const progressContainer = document.createElement('div');
    progressContainer.style.cssText = `
        position: relative;
        width: min(300px, 80vw);
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        margin: 30px auto 0;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    `;
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.8) 50%, 
            transparent 100%);
        animation: progressFlow 0.6s ease-out 0.4s forwards;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
    `;
    
    const progressGlow = document.createElement('div');
    progressGlow.style.cssText = `
        position: absolute;
        top: -2px;
        left: -10px;
        width: 20px;
        height: 8px;
        background: radial-gradient(ellipse, rgba(255, 255, 255, 0.8) 0%, transparent 100%);
        border-radius: 50%;
        animation: progressGlowMove 0.6s ease-out 0.4s forwards;
        filter: blur(2px);
    `;
    
    // Añadir todos los estilos de animación
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        @keyframes gridScan {
            0% { filter: brightness(1) contrast(1); }
            50% { filter: brightness(1.2) contrast(1.1) hue-rotate(10deg); }
            100% { filter: brightness(1) contrast(1); }
        }
        
        @keyframes gridSlide {
            0% { transform: translate(-10%, -10%); }
            100% { transform: translate(-5%, -5%); }
        }
        
        @keyframes gridRotate {
            0% { transform: translate(-10%, -10%) rotate(0deg); }
            100% { transform: translate(-10%, -10%) rotate(360deg); }
        }
        
        @keyframes rayExpand {
            0% { 
                opacity: 0; 
                transform: rotate(var(--rotation)) translateY(-300px) scaleY(0);
            }
            50% {
                opacity: 1;
            }
            100% { 
                opacity: 0.8; 
                transform: rotate(var(--rotation)) translateY(-300px) scaleY(1);
            }
        }
        
        @keyframes rayPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
        }
        
        @keyframes starTwinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes starFloat {
            0% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(120deg); }
            66% { transform: translateY(5px) rotate(240deg); }
            100% { transform: translateY(0px) rotate(360deg); }
        }
        
        @keyframes centerReveal {
            0% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.8) rotateY(45deg);
                filter: blur(10px);
            }
            100% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1) rotateY(0deg);
                filter: blur(0px);
            }
        }
        
        @keyframes holographicShimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes textGlow {
            0% { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)); }
            100% { filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.6)); }
        }
        
        @keyframes subtitleFade {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes progressFlow {
            0% { width: 0; }
            100% { width: 100%; }
        }
        
        @keyframes progressGlowMove {
            0% { left: -10px; opacity: 1; }
            100% { left: 300px; opacity: 0; }
        }
        
        @keyframes elementSlideUp {
            0% { 
                opacity: 0; 
                transform: translateY(50px) scale(0.95);
                filter: blur(5px);
            }
            100% { 
                opacity: 1; 
                transform: translateY(0) scale(1);
                filter: blur(0px);
            }
        }
        
        @keyframes matrixReveal {
            0% { 
                opacity: 0;
                transform: translateZ(-100px) rotateX(30deg);
            }
            100% { 
                opacity: 1;
                transform: translateZ(0px) rotateX(0deg);
            }
        }
    `;
    
    document.head.appendChild(animationStyles);
    
    // Ensamblar toda la estructura
    gridLayers.appendChild(gridPattern);
    gridLayers.appendChild(gridPattern2);
    
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressGlow);
    
    centerContent.appendChild(logoText);
    centerContent.appendChild(subtitle);
    centerContent.appendChild(progressContainer);
    
    overlay.appendChild(gridLayers);
    overlay.appendChild(constellation);
    overlay.appendChild(starburst);
    overlay.appendChild(centerContent);
    
    document.body.appendChild(overlay);
    
    // Ocultar contenido principal con estilo
    const mainElements = document.querySelectorAll('.header, .hero, .section, .footer');
    mainElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.98)';
        el.style.filter = 'blur(3px)';
    });
    
    // Secuencia de animación épica
    setTimeout(() => {
        // Fase 1: Explosión de desvanecimiento del overlay
        overlay.style.opacity = '0';
        overlay.style.transform = 'scale(1.1)';
        overlay.style.filter = 'blur(10px)';
        
        // Fase 2: Revelación dramática de elementos
        mainElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
                el.style.filter = 'blur(0px)';
                
                // Efecto de onda en cada elemento
                el.style.animation = `matrixReveal 0.8s ease-out`;
            }, index * 150);
        });
        
        // Fase 3: Activar partículas y efectos ambientales
        setTimeout(() => {
            const particles = document.querySelector('.particles');
            if (particles) {
                particles.style.opacity = '1';
                particles.style.animation = 'elementSlideUp 1s ease-out';
            }
            
        }, 400);
        
        // Limpieza final
        setTimeout(() => {
            overlay.remove();
            animationStyles.remove();
        }, 1200);
        
    }, 4500); // Duración total aumentada para el drama
    
    // Inicializar efectos complementarios
    if (!document.querySelector('.cursor')) {
        initEnhancedCursor();
    }
    
    if (!document.querySelector('.particles')) {
        createEnhancedParticles();
    }
}

// Cursor mejorado con efectos mágicos
function initEnhancedCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.cssText += `
        background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(160, 160, 160, 0.3) 100%);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        animation: cursorPulse 2s ease-in-out infinite;
    `;
    document.body.appendChild(cursor);
    
    let trail = [];
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Crear estela del cursor
        trail.push({x: e.clientX, y: e.clientY, time: Date.now()});
        if (trail.length > 10) trail.shift();
        
        trail.forEach((point, i) => {
            if (Math.random() < 0.1) {
                createMiniSparkle(point.x, point.y);
            }
        });
    });
    
    document.addEventListener('click', (e) => {
        createEnhancedRipple(e.clientX, e.clientY);
    });
    
    // Añadir estilos del cursor
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        @keyframes cursorPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
    `;
    document.head.appendChild(cursorStyle);
}

function createMiniSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 9998;
        animation: sparkleDisappear 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
}

function createEnhancedRipple(x, y) {
    for (let i = 0; i < 3; i++) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: ${4 + i * 2}px;
            height: ${4 + i * 2}px;
            border: 1px solid rgba(255, 255, 255, ${0.6 - i * 0.2});
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%) scale(1);
            animation: enhancedRipple ${0.8 + i * 0.2}s ease-out ${i * 0.1}s forwards;
        `;
        
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1200);
    }
    
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes enhancedRipple {
            to {
                transform: translate(-50%, -50%) scale(20);
                opacity: 0;
            }
        }
        @keyframes sparkleDisappear {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0) rotate(180deg); }
        }
    `;
    document.head.appendChild(rippleStyle);
}



function createEnhancedParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => createFloatingParticle(particlesContainer), Math.random() * 3000);
    }
    
    setInterval(() => {
        if (document.querySelectorAll('.particle').length < 30) {
            createFloatingParticle(particlesContainer);
        }
    }, 1500);
}


// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAnim);
} else {
    startAnim();
}