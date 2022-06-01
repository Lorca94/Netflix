// eslint-disable-next-line
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export function seedDatabase(firebase) {
    function getUUID() {
      // eslint gets funny about bitwise
      /* eslint-disable */
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
      /* eslint-enable */
    }
  
    /* Series
      ============================================ */
    // Documentales
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Tiger King',
      description: 'El dueño de un zoo, rodeado de los excéntricos personajes del submundo de la cría de grandes felinos, es acusado de contratar a un sicario. Basada en hechos reales.',
      genre: 'documental',
      maturity: '18',
      slug: 'tiger-king',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Amanda Knox',
      description: 'Fue acusada de homicidio y absuelta en dos ocasiones. Este revelador documental cede la palabra a Amanda Knox y a quienes intervinieron en su caso.',
      genre: 'documental',
      maturity: '12',
      slug: 'amanda-knox',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Citizenfour',
      description:
        'Citizenfour es una película documental de 2014 dirigida por Laura Poitras, sobre Edward Snowden y el escándalo de espionaje de la NSA.',
      genre: 'documental',
      maturity: '12',
      slug: 'citizenfour',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Super Engórdame',
      description:
        "El director Morgan Spurlock ofrece una hilarante y a menudo terrorífica mirada a los efectos de la comida rápida sobre el cuerpo humano, utilizándose él mismo de cobaya.",
      genre: 'documental',
      maturity: '12',
      slug: 'super-size-me',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Man on Wire',
      description:
        "El cineasta James Marsh recrea magistralmente la temeraria caminata por la cuerda floja de Philippe Petit en 1974, quien realizó acrobacias sobre un cable delgado entre las Torres Gemelas del World Trade Center de forma ilegal.",
      genre: 'documental',
      maturity: '12',
      slug: 'man-on-wire',
    });
  
    // comedias
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Office',
      description:
        'Un variopinto grupo de oficinistas atraviesa divertidas desventuras en la sucursal de Scranton, Pensilvania, de Dunder Mifflin Paper Company.',
      genre: 'comedias',
      maturity: '15',
      slug: 'the-office',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Sacrificios de familia​',
      description:
        'La familia Bluth, que alguna vez fue un nombre prominente en el negocio, lo pierde todo después de que el patriarca principal es condenado por fraude.',
      genre: 'comedias',
      maturity: '15',
      slug: 'sacrificios-de-familia​',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Larry David',
      description:
        'Larry David, un famoso escritor y productor de televisión, se ve envuelto en varias desventuras con sus amigos y colegas famosos en Los Ángeles.',
      genre: 'comedias',
      maturity: '15',
      slug: 'larry-david',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Padre de familia',
      description:
        'Peter Griffin y su familia de dos adolescentes, un perro inteligente, un bebé diabólico y su esposa se encuentran en algunos de los escenarios más divertidos.',
      genre: 'comedias',
      maturity: '15',
      slug: 'padre-familia',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'South Park',
      description:
        'Cuatro jóvenes en edad escolar, Stan Marsh, Kyle Broflovski, Eric Cartman y Kenny McCormick, que viven en South Park, se embarcan en varias aventuras.',
      genre: 'comedias',
      maturity: '15',
      slug: 'south-park',
    });
  
    // ninios
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Peppa Pig',
      description:
        'Peppa, una cerdita preescolar extrovertida, participa en muchas actividades energéticas. Aprende algo nuevo todos los días y se divierte mucho con su familia y amigos.',
      genre: 'ninios',
      maturity: '0',
      slug: 'peppa-pig',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Dora La explodora',
      description:
        'Dora, una niña de ascendencia latinoamericana de siete años, se embarca en numerosas aventuras en la naturaleza con su amigo Boots, un mono y una variedad de herramientas divertidas y útiles.',
      genre: 'ninios',
      maturity: '0',
      slug: 'dora-la-exploradora',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'La Patrulla Canina',
      description:
        'Seis valientes cachorros, capitaneados por un niño de diez años experto en tecnología, Ryder, trabajan juntos para llevar a cabo misiones de rescate de alto riesgo para proteger a los residentes de la comunidad de Adventure Bay.',
      genre: 'ninios',
      maturity: '0',
      slug: 'patrulla-canina',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Arthur',
      description:
        'El oso hormiguero de anteojos, Arthur Read, les demuestra a los niños cómo lidiar con traumas y desafíos infantiles como la tarea, los maestros y los matones.',
      genre: 'ninios',
      maturity: '0',
      slug: 'arthur',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Bob esponja',
      description:
        'Una esponja marina amarilla llamada Bob Esponja Pantalones Cuadrados vive en la ciudad de Fondo de Bikini en las profundidades del Océano Pacífico.',
      genre: 'ninios',
      maturity: '0',
      slug: 'bob-esponja',
    });
  
    // Crimen
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Fabricando un asesino',
      description:
        'Rodada a lo largo de 13 años, este thriller basado en una historia real cuenta la historia de dos hombres acusados de un macabro crimen que quizás no cometieron.',
      genre: 'crimen',
      maturity: '18',
      slug: 'fabricando-un-asesino',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Casi Imposible',
      description:
        'Una testaruda candidata presidencial contrata a un redactor de discursos al que conocía de pequeña y que pone en jaque sus estrategias políticas... y su corazón.',
      genre: 'crimen',
      maturity: '18',
      slug: 'casi-imposible',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Confession Killer',
      description:
        'Henry Lee Lucas agrandó su popularidad al confesar la autoría de centenares de asesinatos sin resolver. Esta docuserie analiza la verdad y sus horribles consecuencias.',
      genre: 'crimen',
      maturity: '18',
      slug: 'the-confession-killer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'El Hombre Inocente',
      description:
        '¿Accidente o asesinato? Tras la misteriosa muerte de su esposa, el escritor Michael Peterson ve cómo se examina su vida con lupa.',
      genre: 'crimen',
      maturity: '18',
      slug: 'el-hombre-inocente',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'El Crimen De La Escalera',
      description:
        "En 2001, la esposa del novelista Michael Peterson murió y él afirmó que pereció después de caerse por las escaleras en su casa. Sin embargo, el médico forense determinó que había sido golpeada con un arma.",
      genre: 'crimen',
      maturity: '18',
      slug: 'the-staircase',
    });
  
    // Comedia
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'El Indomable Will Hunting',
      description:
        'Will tras descubrir su talento con las matemáticas, deberá decidir si seguir con su vida de siempre o aprovechar sus grandes cualidades intelectuales en alguna universidad. Sólo los consejos de un bohemio profesor le ayudarán a decidirse.',
      genre: 'comedia',
      maturity: '12',
      slug: 'el-indomable-will-hunting',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Forrest Gump',
      description:
        'Forrest Gump,un hombre con un coeficiente intelectual bajo, se une al ejército para el servicio donde conoce a Dan y Bubba. Sin embargo, no puede dejar de pensar en su novia de la infancia, Jenny Curran, cuya vida está arruinada.',
      genre: 'comedia',
      maturity: '12',
      slug: 'forrest-gump',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Juno',
      description:
        "Cuando la precoz adolescente Juno MacGuff queda embarazada, ella elige a una estrella de rock fracasada y a su esposa para adoptar a su bebé nonato. Las complicaciones surgen cuando Mark, el padre elegido, empieza a ver a Juno mucho más allá que sólo la madre de su futuro hijo, poniendo en peligro a su matrimonio y la adopción.",
      genre: 'comedia',
      maturity: '12',
      slug: 'juno',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Medianoche En París',
      description:
        'Gil llega con su prometida y su familia a París de vacaciones, mientras intenta terminar su primera novela. Es seducido por la ciudad, que lo lleva a un tiempo pasado, lejos de su prometida..',
      genre: 'comedia',
      maturity: '12',
      slug: 'medianoche-en-paris',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Escuela De Rock',
      description:
        "Dewey Finn es un guitarrista con delirios de grandeza que es expulsado de su banda. Decide suplantar la identidad de un profesor sustituto para dar clase a alumnos de quinto a los que intentará enseñarles 'rock & roll de alto voltaje'.",
      genre: 'comedia',
      maturity: '12',
      slug: 'escuela-de-rock',
    });
  
    /* Peliculas
      ============================================ */
    // Drama
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'El Presitigio',
      description:
        'Un encuentro durante una sesión fraudulenta provoca que dos magos del siglo XIX, Alfred Borden y Rupert Angier, se enfrenten en una intensa batalla por la supremacía. Las consecuencias son terribles cuando ambos intentan triunfar no sólo superando a su rival, sino destruyéndolo.',
      genre: 'drama',
      maturity: '15',
      slug: 'el-presigio',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'El Club De La Lucha',
      description:
        'Descontento con su estilo de vida capitalista, un insomne ​​de cuello blanco forma un club de lucha clandestino con Tyler, un vendedor de jabón descuidado. El proyecto pronto se convierte en algo siniestro.',
      genre: 'drama',
      maturity: '15',
      slug: 'el-club-de-la-lucha',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'El Discurso Del Rey',
      description:
        'El rey Jorge VI intenta superar su problema de tartamudeo con la ayuda del terapeuta del habla Lionel Logue y se hace lo suficientemente digno como para liderar a su país durante la Segunda Guerra Mundial.',
      genre: 'drama',
      maturity: '15',
      slug: 'el-discurso-del-rey',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'El Renacido',
      description:
        'Hugh Glass, un trampero y explorador de finales del siglo XIX resulta herido de muerte por el ataque de un oso. Sus compañeros deciden dejarle para proseguir con la expedición.',
      genre: 'drama',
      maturity: '15',
      slug: 'el-renacido',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'La Red Social',
      description:
        'La historia de los jóvenes fundadores de la popular red social Facebook, especialmente de su creador más conocido, Mark Zuckerberg. Su leyenda reza: No se hacen 500 millones de amigos sin hacer unos cuantos enemigos.',
      genre: 'drama',
      maturity: '12',
      slug: 'la-red-social',
    });
  
    // Suspense
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Shutter Island',
      description:
        'Teddy Daniels y Chuck Aule, dos alguaciles estadounidenses, son enviados a un asilo en una isla remota para investigar la desaparición de un paciente, donde Teddy descubre una verdad impactante sobre el lugar.',
      genre: 'suspense',
      maturity: '15',
      slug: 'shutter-island',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Perdida',
      description:
        'En su quinto aniversario de boda, Nick informa que su esposa Amy ha desaparecido misteriosamente. Pronto la presión policial y mediática hace que el retrato de felicidad doméstica que ofrece Nick empiece a tambalearse y se convierte en sospechoso.',
      genre: 'suspense',
      maturity: '15',
      slug: 'perdida',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Prisioneros',
      description:
        "Cuando la policía se toma el tiempo de encontrar a la hija de Keller Dover y a su amiga, él mismo decide realizar una búsqueda. Su desesperación lo lleva más cerca de encontrar la verdad y también pone en peligro su propia vida.",
      genre: 'suspense',
      maturity: '15',
      slug: 'prisioneros',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Seven',
      description:
        'Un asesino en serie comienza a asesinar personas según los siete pecados capitales. Dos detectives, uno nuevo en la ciudad y otro a punto de jubilarse, tienen la tarea de detener al criminal.',
      genre: 'suspense',
      maturity: '15',
      slug: 'seven',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Zodiaco',
      description:
        'Robert Graysmith, dibujante de profesión, se encuentra pensando obsesivamente en el asesino del Zodiaco. Utiliza sus habilidades para resolver acertijos para estar más cerca de revelar la identidad del asesino.',
      genre: 'suspense',
      maturity: '15',
      slug: 'zodiaco',
    });
  
    // ninios
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Hotel Transylvania',
      description:
        'Drácula, propietario de un lujoso complejo para monstruos, intenta evitar que su hija se enamore de Jonathan, un humano.',
      genre: 'ninios',
      maturity: '0',
      slug: 'hotel-transylvania',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Gru Mi Villano Favorito',
      description:
        'Gru, un cerebro criminal, adopta a tres huérfanos como peones para llevar a cabo el mayor atraco de la historia. Su vida da un giro inesperado cuando las niñas lo ven como su padre potencial.',
      genre: 'ninios',
      maturity: '0',
      slug: 'gru-mi-villano-favorito',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Frozen',
      description:
        'Anna emprende un viaje con un hombre de hielo, Kristoff, y su reno, Sven, para encontrar a su hermana, Elsa, que tiene el poder de convertir cualquier objeto o persona en hielo.',
      genre: 'ninios',
      maturity: '0',
      slug: 'frozen',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'El Viaje De Chihiro',
      description:
        'Chihiro es una niña de diez años caprichosa y testaruda que cree que el universo entero debe someterse a sus deseos.',
      genre: 'ninios',
      maturity: '0',
      slug: 'el-viaje-de-chihiro',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Up',
      description:
        "Carl, un anciano viudo, se embarca en una aventura en su casa voladora en busca de Paradise Falls, el destino soñado de su esposa.",
      genre: 'ninios',
      maturity: '0',
      slug: 'up',
    });
  
    // Thriller
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Joker',
      description:
        'Siempre solo en una multitud, el comediante fallido Arthur Fleck busca conexión mientras camina por las calles de Gotham City.',
      genre: 'thriller',
      maturity: '15',
      slug: 'joker',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Un Lugar Tranquilo',
      description:
        'En un mundo invadido y arrasado por unos letales extraterrestres que se guían por el sonido, Evelyn y Lee Abbott sobreviven con sus hijos en una granja aislada en el bosque, sumidos en el más profundo silencio. Mientras no hagan ruido, estarán a salvo.',
      genre: 'thriller',
      maturity: '15',
      slug: 'un-lugar-tranquilo',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Cisne Negro',
      description:
        'Una brillante bailarina que forma parte de una compañía de ballet de Nueva York, vive completamente absorbida por la danza. La presión de sus controladora madre y la rivalidad con su compañera Lily afectarán terriblemente a la niña.',
      genre: 'thriller',
      maturity: '15',
      slug: 'cisne-negro',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Primicia Mortal',
      description:
        'Louis Bloom es un joven de Los Ángeles, sin empleo ni escrúpulos, quien, después de haber sido testigo de un accidente espeluznante, decide que quiere ganar fama y fortuna a través del periodismo sensacionalista.',
      genre: 'thriller',
      maturity: '15',
      slug: 'primicia-mortal',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'El Silencio De Los Corderos',
      description:
        'Tras una serie de crímenes donde a las víctimas les faltaba parte de la piel, una agente del FBI inicia su carrera particular para dar con el asesino. Para resolver el caso la agente encargada deberá envtrevistarse con el doctor Hannibal Lecter.',
      genre: 'thriller',
      maturity: '15',
      slug: 'el-silencio-de-los-corderos',
    });
  
    // Romance
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Nace Una Estrella',
      description:
        'Jackson es una estrella consagrada de la música que una noche conoce y se enamora de Ally, una joven artista que lucha por salir adelante en el mundo del espectáculo. Cuando Ally está a punto de abandonar su sueño, Jack decide ayudarla.',
      genre: 'romance',
      maturity: '15',
      slug: 'nace-una-estrella',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Triste San Valentín',
      description:
        'Dean y Cindy llevan seis años de apasionada historia de amor. Han tenido una hija juntos y han decidido casarse, pero su amor empieza a desmoronarse. Entonces, Dean propone pasar la noche en un hotel temático donde eligen la habitación del futuro.',
      genre: 'romance',
      maturity: '15',
      slug: 'triste-san-valentin',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'La La Land',
      description:
        'Mia y Sebastian son dos jóvenes que quieren abrirse camino en el mundo de Hollywood. Mia es una joven aspirante a actriz que trabaja como camarera mientras acude a castings y Sebastian toca el piano en bares. Un día sus caminos se cruzan e inmediatamente se enamoran.',
      genre: 'romance',
      maturity: '15',
      slug: 'la-la-land',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'El Diario De Noa',
      description:
        "En un hogar de retiro un hombre le lee a una mujer, que sufre de Alzheimer, la historia de dos jóvenes de distintas clases sociales que se enamoraron durante la convulsionada década del 40, y de cómo fueron separados por terceros, y por la guerra.",
      genre: 'romance',
      maturity: '15',
      slug: 'el-diario-de-noa',
    });
    firebase.firestore().collection('peliculas').add({
      id: getUUID(),
      title: 'Titanic',
      description:
        'Rose, de diecisiete años, proviene de una familia aristocrática y está lista para casarse. Cuando aborda el Titanic, conoce a Jack Dawson, un artista, y se enamora de él.',
      genre: 'romance',
      maturity: '15',
      slug: 'titanic',
    });
  }
  