/* Configuración de la página (textos, lugares, grupos, fuentes). Ver catalogo-proyectos/plantillas/mapa-libro/LEEME.md */
const CONFIG = {
  "libro": "Mis lunes con aroma a matcha",
  "autor": "Michiko Aoyama",
  "antetitulo": "Michiko Aoyama · Novela coral",
  "titulo": "Mapa de relaciones del Café Matcha",
  "descripcion": "Mapa interactivo de personajes de la novela Mis lunes con aroma a matcha, de Michiko Aoyama: el Maestro, Kippei, los clientes recurrentes y la red que conecta Tokio con Kioto — y con Sídney.",
  "intro": "<em>Mis lunes con aroma a matcha</em> es la segunda entrega de la bilogía \"El pequeño café de Tokio\": doce capítulos —uno por mes— que arrancan junto al Maestro en el Café Marble un lunes de enero y se despliegan, cliente a cliente, hasta la antigua Kioto. Explora quién conoce a quién, qué vínculos son explícitos y cuáles solo se insinúan, y cómo cinco personajes —Mark, Atsuko, Teruya, Asami y Takumi— tienden un hilo hasta la novela anterior y hasta Sídney.",
  "favicon": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%234a6b2f'/%3E%3Ccircle cx='16' cy='17' r='7' fill='%23f5f1e2'/%3E%3Cpath d='M12 12c0-2 1.6-2 1.6-4M16 12c0-2 1.6-2 1.6-4M20 12c0-2 1.6-2 1.6-4' stroke='%237fa65c' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
  "icono": "<rect width=\"32\" height=\"32\" rx=\"7\" fill=\"var(--color-primary)\"/> <circle cx=\"16\" cy=\"17\" r=\"7\" fill=\"var(--color-surface)\"/> <path d=\"M12 12c0-2 1.6-2 1.6-4M16 12c0-2 1.6-2 1.6-4M20 12c0-2 1.6-2 1.6-4\" stroke=\"var(--color-primary)\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\"/>",
  "lugares": {
    "tokio": {
      "nombre": "Tokio",
      "descripcion": "verde matcha — personaje o lugar en Tokio",
      "color": {
        "claro": "#4a6b2f",
        "oscuro": "#8fc26a"
      }
    },
    "kioto": {
      "nombre": "Kioto",
      "descripcion": "índigo — personaje o lugar en Kioto",
      "color": {
        "claro": "#35506a",
        "oscuro": "#7ea3c4"
      }
    },
    "sidney": {
      "nombre": "Sídney",
      "descripcion": "turquesa — recurrente, vinculado a Sídney",
      "color": {
        "claro": "#1c7d70",
        "oscuro": "#5cc0af"
      }
    }
  },
  "leyendaAmbos": "Anillo bicolor — se mueve entre Tokio y Kioto",
  "leyendaLugar": "Rombo — lugar (Café Marble / Kioto)",
  "notaLeyenda": "El color de relleno es una paleta estacional propia de este mapa: la novela no asigna un color por capítulo, a diferencia de su precuela.",
  "grupos": {
    "cafe": {
      "nombre": "Círculo del café",
      "color": "#4a6b2f"
    },
    "tokio": {
      "nombre": "Red de Tokio",
      "color": "#8a6b3f"
    },
    "kioto": {
      "nombre": "Red de Kioto",
      "color": "#35506a"
    },
    "puente": {
      "nombre": "Puente Tokio–Kioto",
      "color": "#9c5b3f"
    },
    "retorno": {
      "nombre": "Recurrentes / Sídney",
      "color": "#1c7d70",
      "etiqueta": "Recurrente / Sídney"
    }
  },
  "destacados": [
    "maestro",
    "miho",
    "kippei"
  ],
  "panel": {
    "antetitulo": "Estructura coral",
    "titulo": "Un café, doce meses, dos ciudades",
    "texto": "Cada capítulo adopta el punto de vista de un personaje distinto, empezando y terminando en el Café Marble de Tokio tras pasar por Kioto durante el verano y el otoño. Pulsa cualquier nodo del mapa —o cualquier capítulo de la franja inferior— para ver su ficha, sus vínculos explícitos e implícitos, y el capítulo en el que se revelan.",
    "consejo": "Consejo: usa los filtros de arriba para aislar el círculo del café, la red que crece en Tokio, la red de Kioto o los personajes recurrentes que tienden el hilo hasta Sídney."
  },
  "fuentes": [
    {
      "nombre": "Booklog — ficha y capítulos",
      "url": "https://booklog.jp/item/1/4299044096"
    },
    {
      "nombre": "Booklog — lista de personajes por capítulo",
      "url": "https://booklog.jp/item/1/4299020286"
    },
    {
      "nombre": "Ameblo — resumen capítulo a capítulo",
      "url": "https://ameblo.jp/nisemonomazyo/entry-12903153147.html"
    },
    {
      "nombre": "Happy no dokusho note — reseña detallada",
      "url": "https://book.kokoro-aozora.com/entry/aoyamamichiko/getsuyoubinomacchacafe"
    },
    {
      "nombre": "Da Vinci Web — entrevista con la autora",
      "url": "https://ddnavi.com/article/d855481/a/"
    },
    {
      "nombre": "Fresh Fiction — reseña en inglés",
      "url": "https://freshfiction.com/review.php?id=96926"
    },
    {
      "nombre": "Life She Loves — reseña en inglés",
      "url": "https://www.lifesheloves.com/my-asian-era/matcha-on-monday-michiko-aoyama"
    },
    {
      "nombre": "Zenda Libros — reseña en español",
      "url": "https://www.zendalibros.com/michiko-aoyama-historias-agridulces-de-pequenas-vidas-en-japon/"
    },
    {
      "nombre": "Planeta de Libros — ficha oficial",
      "url": "https://www.planetadelibros.com/libro-mis-lunes-con-aroma-a-matcha/445451"
    }
  ],
  "notaPie": "Mapa no oficial, elaborado a partir de reseñas y extractos públicos de la novela con fines de análisis literario."
};

/* ============================================================
   Datos del mapa de relaciones — "Mis lunes con aroma a matcha"
   (Michiko Aoyama), segunda entrega de la bilogía "El pequeño
   café de Tokio".
   Fuentes usadas para reconstruir personajes y conexiones:
   - booklog.jp (listas de capítulos y personajes, ficha del libro)
   - ameblo.jp/nisemonomazyo (resumen capítulo a capítulo)
   - note.com/colour_blue, book.kokoro-aozora.com (reseñas detalladas)
   - ddnavi.com (entrevista con la autora sobre los personajes)
   - freshfiction.com, lifesheloves.com (reseñas en inglés)
   - zendalibros.com, planetadelibros.com, marca.com (reseñas y prensa en español)
   Nota: la novela original no asigna un color por capítulo (a diferencia
   de su precuela); la paleta estacional de este mapa es un recurso
   propio para distinguir los doce meses, no forma parte del texto.
   ============================================================ */

const CHAPTERS = [
  { n: 1, title: "El café de matcha del lunes", month: "Enero · Mutsuki", color: "#7fa65c", place: "tokio", charId: "miho" },
  { n: 2, title: "Te escribiré una carta", month: "Febrero · Kisaragi", color: "#9c5b6b", place: "tokio", charId: "hiroyuki" },
  { n: 3, title: "La golondrina de principios de primavera", month: "Marzo · Yayoi", color: "#dba0b3", place: "tokio", charId: "hiroko" },
  { n: 4, title: "La lluvia que cae del tragaluz", month: "Abril · Uzuki", color: "#5f9077", place: "tokio", charId: "sachi" },
  { n: 5, title: "Al son de las claves de madera", month: "Mayo · Satsuki", color: "#3f5e6c", place: "kioto", charId: "mitsu" },
  { n: 6, title: "La purificación de pleno verano", month: "Junio · Minazuki", color: "#3f6b4a", place: "kioto", charId: "tazu" },
  { n: 7, title: "El señor y las tiras de papel", month: "Julio · Fumizuki", color: "#4a72a8", place: "kioto", charId: "cat" },
  { n: 8, title: "En busca del tomo perdido", month: "Agosto · Hazuki", color: "#a87d3f", place: "kioto", charId: "yoshihara" },
  { n: 9, title: "Bajo el pino del delta", month: "Septiembre · Nagatsuki", color: "#7d8a94", place: "kioto", charId: "takaharu" },
  { n: 10, title: "El canguro está esperando", month: "Octubre · Kannazuki", color: "#b8663f", place: "kioto", charId: "mark" },
  { n: 11, title: "La mantis fantasma", month: "Noviembre · Shimotsuki", color: "#7a3b3f", place: "tokio", charId: "takumi" },
  { n: 12, title: "Día propicio", month: "Diciembre · Shiwasu", color: "#c79a3e", place: "tokio", charId: "kippei" },
];

/* Grupos: cafe (el Maestro), tokio (red de Tokio), kioto (red de Kioto),
   puente (viaja entre ambas ciudades dentro de este libro),
   retorno (personajes que ya vivían en "Mis tardes en el pequeño café
   de Tokio" y aquí tienden el hilo hasta Sídney), lugar (hubs físicos) */

const NODES = [
  // --- Lugares (hubs físicos) ---
  {
    id: "cafe", name: "Café Marble / Café Matcha", type: "place", group: "lugar", place: "tokio",
    color: "#4a6b2f", role: "El café que un lunes al mes se convierte en cafetería de matcha",
    bio: "Cafetería de tres mesas junto al río, bajo un cerezo, cerrada los lunes. En este libro su dueño transforma algunos lunes en un 'Café Matcha' improvisado, dando inicio a doce historias mensuales. Es el mismo local —y el mismo Maestro— que en 'Mis tardes en el pequeño café de Tokio' servía chocolate caliente los jueves."
  },
  {
    id: "kioto", name: "Kioto — barrio del té y los libros viejos", label: "Kioto", type: "place", group: "lugar", place: "kioto",
    color: "#35506a", role: "El eje que expande la novela hacia la antigua capital",
    bio: "En la segunda mitad del año la trama cruza a Kioto: la casa de té Fukuidō, la confitería centenaria Hashino-ya, una librería de viejo junto al río Kamo y el delta donde se unen los ríos Kamo y Takano. Cumple, dentro de este libro, el mismo papel que el Jardín Botánico de Sídney cumplía en la novela anterior."
  },

  // --- Círculo del café ---
  {
    id: "maestro", name: "El Maestro", type: "person", group: "cafe", place: "ambos",
    color: "#c79a3e", chapter: null, role: "Dueño del Café Marble · presente en los doce capítulos",
    bio: "El mismo dueño enigmático de 'Mis tardes en el pequeño café de Tokio', con su lunar en la frente. Decide, sin previo aviso, convertir el cierre semanal del café en una degustación de matcha, y viaja hasta Kioto para visitar a Mark y su galería de arte: sigue siendo el verdadero tejido conectivo de la red de personajes."
  },
  {
    id: "miho", name: "Miho", type: "person", group: "tokio", place: "tokio",
    color: "#7fa65c", chapter: 1, role: "Empleada de una tienda de móviles, 26 años · Cap. 1",
    bio: "Un lunes de enero, tras un día de mala suerte, entra por error en el Café Marble pensando que estaría cerrado y descubre el Café Matcha improvisado de Kippei. Él le regala un pañuelo añil bordado con el carácter de la suerte; ella reaparece en el capítulo final para devolvérselo."
  },
  {
    id: "kippei", name: "Kippei (Fukuidō)", type: "person", group: "puente", place: "ambos",
    color: "#c79a3e", chapter: 12, role: "Heredero de la casa de té Fukuidō, Kioto · Cap. 1 y 12",
    bio: "Hijo único de una casa de té centenaria de Kioto, poco hablador con las mujeres. El Maestro le presta el local para abrir por un día el 'Café Matcha' en Tokio. Un año después regresa para inaugurar la sucursal tokiota de Fukuidō, cerrando el círculo con Miho."
  },

  // --- Red de Tokio ---
  {
    id: "hiroyuki", name: "Hiroyuki", type: "person", group: "tokio", place: "tokio",
    color: "#9c5b6b", chapter: 2, role: "Recién casado, segundo año de matrimonio · Cap. 2",
    bio: "Discute con su esposa Risa por un malentendido doméstico y, al encontrar cerrado el Café Marble, cruza hasta la tienda de lencería P-bird, donde una conversación con Hiroko le ayuda a entender el punto de vista de su mujer."
  },
  {
    id: "risa", name: "Risa", type: "person", group: "tokio", place: "tokio",
    color: "#b98899", chapter: null, role: "Esposa de Hiroyuki",
    bio: "Su breve enfado con Hiroyuki desencadena el segundo capítulo. Es la misma Risa que, en la novela anterior, viajó de luna de miel a Sídney: aquí su historia permanece en Tokio, pero el gesto de su marido repara la relación."
  },
  {
    id: "hiroko", name: "Hiroko ('Pii-chan')", type: "person", group: "tokio", place: "tokio",
    color: "#dba0b3", chapter: 3, role: "Dueña de la lencería P-bird · Cap. 2 y 3",
    bio: "Regenta la boutique de lencería junto al mismo río que el Café Marble. Es la misma Hiroko de 'Mis tardes en el pequeño café de Tokio' —hija de Misako, amiga de infancia de Atsuko— y aquí escucha a Hiroyuki y entabla amistad con la cantante Sachi."
  },
  {
    id: "sachi", name: "Sachi", type: "person", group: "tokio", place: "tokio",
    color: "#5f9077", chapter: 4, role: "Cantante y guitarrista · Cap. 3 y 4",
    bio: "Canta desde la universidad en directos y eventos improvisados; conoce a Hiroko y, un capítulo después, comparte protagonismo con su amiga Mitsu, narradora de kamishibai, en una jornada de lluvia bajo un tragaluz."
  },

  // --- Puente Tokio-Kioto ---
  {
    id: "mitsu", name: "Mitsu (光都)", type: "person", group: "puente", place: "ambos",
    color: "#3f5e6c", chapter: 5, role: "Narradora de kamishibai, hija de una confitería de Kioto · Cap. 4, 5 y 6",
    bio: "Trabaja en atención telefónica en Tokio y actúa como narradora de kamishibai los fines de semana. Vuelve a Kioto por primera vez en cinco años, a la centenaria confitería Hashino-ya de su familia, para reencontrarse con su abuela Tazu y su tía Yukino."
  },

  // --- Red de Kioto ---
  {
    id: "tazu", name: "Tazu", type: "person", group: "kioto", place: "kioto",
    color: "#3f6b4a", chapter: 6, role: "Abuela de Mitsu, ex encargada de Hashino-ya · Cap. 5 y 6",
    bio: "Antigua ama de la confitería familiar; cedió el mando a su hijo y a su nuera. Se declara 'fundamentalista de Kioto' y su distancia con Mitsu se transforma, en pleno verano, en un ritual de purificación acompañado por un gato blanco del barrio."
  },
  {
    id: "yukino", name: "Yukino", type: "person", group: "kioto", place: "kioto",
    color: "#6b8a5f", chapter: null, role: "Tía de Mitsu, vecina de Hashino-ya",
    bio: "Esposa del tío de Mitsu; vive dos puertas más allá de la confitería y cuida de Tazu. Su carácter directo y cálido ayuda a destensar el reencuentro entre abuela y nieta."
  },
  {
    id: "cat", name: "El gato blanco", type: "person", group: "kioto", place: "kioto",
    color: "#4a72a8", chapter: 7, role: "Gato callejero del barrio de Kioto · Cap. 6 y 7",
    bio: "Testigo mudo de media Kioto: observa a Tazu durante la purificación de pleno verano y, un capítulo después, la propia narración adopta su punto de vista para contar el cariño discreto del dueño de la librería de viejo."
  },
  {
    id: "yoshihara", name: "Yoshihara ('el señor de los gatos')", type: "person", group: "kioto", place: "kioto",
    color: "#a87d3f", chapter: 8, role: "Dueño de una librería de viejo · Cap. 7 y 8",
    bio: "Dejó su empleo de oficinista a los 52 años para abrir una librería de segunda mano; el gato del barrio lo visita a diario. En agosto monta su primer puesto en el mercadillo de libros viejos junto al río Kamo."
  },
  {
    id: "fukiko", name: "Fukiko", type: "person", group: "kioto", place: "kioto",
    color: "#c9a15f", chapter: null, role: "Esposa de Yoshihara, ex profesora",
    bio: "Dejó su puesto como profesora de matemáticas cuando su marido abrió la librería y hoy trabaja en una academia infantil; su ternura discreta hacia Yoshihara enmarca el encuentro con la joven pareja de coleccionistas de manga."
  },
  {
    id: "takaharu", name: "Takaharu", type: "person", group: "kioto", place: "kioto",
    color: "#7d8a94", chapter: 9, role: "Universitario, coleccionista de manga · Cap. 8 y 9",
    bio: "Visita el mercadillo de libros viejos con su novia y compra el tomo de un manga de culto; un mes después, recién roto ese noviazgo, encuentra consuelo junto al delta donde se unen los ríos Kamo y Takano hablando con su compañero Sanetsu."
  },
  {
    id: "sanetsu", name: "Sanetsu", type: "person", group: "kioto", place: "kioto",
    color: "#8f9aa3", chapter: null, role: "Compañero de universidad de Takaharu",
    bio: "Comparte con Takaharu la afición por el mismo manga y le ayuda a distinguir el amor propio de la simple necesidad de agradar a otra persona, en una charla de septiembre junto al delta de los ríos de Kioto."
  },

  // --- Personajes recurrentes (y el vínculo con Sídney) ---
  {
    id: "mark", name: "Mark", type: "person", group: "retorno", place: "sidney",
    color: "#1c7d70", chapter: 10, role: "Diseñador de interiores en Sídney · Cap. 10",
    bio: "Personaje que ya aparecía en 'Mis tardes en el pequeño café de Tokio' contando cómo conoció a su esposa Atsuko. Aquí viaja a Kioto por negocios y el Maestro —también mecenas de la galería que expuso a Teruya— se reúne con él para hablar de arte, tejiendo un hilo que llega hasta Sídney."
  },
  {
    id: "atsuko", name: "Atsuko", type: "person", group: "retorno", place: "sidney",
    color: "#2fa8a0", chapter: null, role: "Traductora, esposa de Mark",
    bio: "Amiga de infancia de Hiroko y esposa de Mark; su historia de amor ya se contó en la novela anterior. Su nombre resurge en la conversación entre el Maestro y Mark, recordando que la red del café no se detiene en Japón."
  },
  {
    id: "teruya", name: "Teruya", type: "person", group: "retorno", place: "tokio",
    color: "#8a6b3f", chapter: null, role: "Pintor, padre de Takumi",
    bio: "Padre de familia y pintor cuya exposición en Kioto organizó el propio Maestro en la novela anterior. Aquí su hijo Takumi protagoniza el penúltimo capítulo mientras él sigue pintando en casa."
  },
  {
    id: "asami", name: "Asami", type: "person", group: "retorno", place: "tokio",
    color: "#b8863f", chapter: 12, role: "Publicista, madre de Takumi · Cap. 11 y 12",
    bio: "Madre trabajadora que ya conocimos en 'Mis tardes...'. Dos años después visita la nueva sucursal tokiota de Fukuidō con su hijo Takumi y compra matcha de manos de Kippei, entrelazando el final de ambos libros."
  },
  {
    id: "takumi", name: "Takumi ('Takkun')", type: "person", group: "retorno", place: "tokio",
    color: "#d9b878", chapter: 11, role: "Hijo de Asami y Teruya, 7 años · Cap. 11 y 12",
    bio: "El niño de cinco años de la novela anterior reaparece con siete, ahora protagonista propio: en noviembre persigue una mantis religiosa hasta un santuario sintoísta y, en diciembre, acompaña a su madre a la apertura de Fukuidō Tokio."
  },
];

const EDGES = [
  { source: "maestro", target: "cafe", type: "explicit", chapter: "Cap. 1", label: "Es el propietario del Café Marble y organiza el evento del Café Matcha." },
  { source: "maestro", target: "kippei", type: "explicit", chapter: "Cap. 1 · Enero", label: "Le presta el local para abrir por un día el Café Matcha." },
  { source: "maestro", target: "mark", type: "explicit", chapter: "Cap. 10 · Octubre", label: "Viaja a Kioto para reunirse con él y hablar de su galería de arte." },
  { source: "maestro", target: "teruya", type: "implicit", chapter: "Cap. 10-11", label: "Es el mismo mecenas que organizó la exposición de Teruya en la novela anterior; su nombre resuena aquí a través de Mark." },
  { source: "maestro", target: "kioto", type: "implicit", chapter: "Cap. 10", label: "Su red de contactos artísticos se extiende hasta Kioto." },

  { source: "kippei", target: "miho", type: "explicit", chapter: "Cap. 1 y 12", label: "Le regala un pañuelo con el carácter de la suerte; un año después ella se lo devuelve al inaugurarse la sucursal tokiota de Fukuidō." },
  { source: "kippei", target: "cafe", type: "explicit", chapter: "Cap. 1 · Enero", label: "Abre el Café Matcha en el mismo local, un lunes de enero." },
  { source: "kippei", target: "kioto", type: "explicit", chapter: "Cap. 5 y 12", label: "Es el heredero de la casa de té Fukuidō, con sede en Kioto." },
  { source: "kippei", target: "mitsu", type: "implicit", chapter: "Cap. 5 · Mayo", label: "Las familias Fukuidō y Hashino-ya se conocen desde generaciones en el mismo barrio de Kioto." },
  { source: "kippei", target: "tazu", type: "implicit", chapter: "Cap. 5 · Mayo", label: "La casa de té de Kippei y la confitería de Tazu son vecinas de siempre." },
  { source: "kippei", target: "asami", type: "explicit", chapter: "Cap. 12 · Diciembre", label: "La atiende como clienta habitual en la apertura de la sucursal de Fukuidō en Tokio." },
  { source: "kippei", target: "takumi", type: "implicit", chapter: "Cap. 12 · Diciembre", label: "Acompaña a su madre Asami el día de la inauguración de Fukuidō Tokio." },

  { source: "miho", target: "cafe", type: "explicit", chapter: "Cap. 1 · Enero", label: "Entra por error un lunes pensando que el café estaría cerrado." },

  { source: "hiroyuki", target: "risa", type: "explicit", chapter: "Cap. 2 · Febrero", label: "Están casados; discuten por un malentendido doméstico." },
  { source: "hiroyuki", target: "hiroko", type: "explicit", chapter: "Cap. 2 · Febrero", label: "Encuentra el café cerrado y acaba conversando con ella en su tienda de lencería." },
  { source: "hiroyuki", target: "cafe", type: "implicit", chapter: "Cap. 2", label: "Es cliente habitual del Café Marble; lo encuentra cerrado el día de la discusión." },

  { source: "hiroko", target: "sachi", type: "explicit", chapter: "Cap. 3 · Marzo", label: "Se hacen amigas cuando Sachi canta en un evento cerca de la tienda P-bird." },
  { source: "hiroko", target: "cafe", type: "implicit", chapter: "Cap. 2-3", label: "Su tienda P-bird está junto al mismo río que el Café Marble." },
  { source: "hiroko", target: "atsuko", type: "implicit", chapter: "—", label: "Son amigas de infancia desde 'Mis tardes en el pequeño café de Tokio'; ese vínculo sigue vivo, aunque este libro no lo menciona." },

  { source: "sachi", target: "mitsu", type: "explicit", chapter: "Cap. 4 · Abril", label: "Amigas desde la universidad; actúan juntas —canción y kamishibai— la tarde de lluvia bajo el tragaluz." },
  { source: "mitsu", target: "cafe", type: "implicit", chapter: "Cap. 4", label: "Actúa allí con su kamishibai el día de la lluvia." },

  { source: "mitsu", target: "tazu", type: "explicit", chapter: "Cap. 5 · Mayo", label: "Es su abuela; Mitsu regresa a Kioto por primera vez en cinco años para verla." },
  { source: "mitsu", target: "yukino", type: "explicit", chapter: "Cap. 5 · Mayo", label: "Es su tía, vecina de la confitería familiar." },
  { source: "mitsu", target: "kioto", type: "explicit", chapter: "Cap. 5-6", label: "Su familia regenta la confitería centenaria Hashino-ya, en el corazón de Kioto." },

  { source: "tazu", target: "yukino", type: "explicit", chapter: "Cap. 5-6", label: "Yukino cuida de ella en su vejez, junto a la confitería." },
  { source: "tazu", target: "cat", type: "implicit", chapter: "Cap. 6 · Junio", label: "El gato blanco del barrio la observa durante el ritual de purificación de pleno verano." },
  { source: "tazu", target: "kioto", type: "explicit", chapter: "Cap. 6", label: "Su confitería Hashino-ya lleva sirviendo dulces en Kioto desde hace generaciones." },

  { source: "cat", target: "yoshihara", type: "explicit", chapter: "Cap. 7 · Julio", label: "El gato visita a diario su librería de viejo y lo adopta como a su humano favorito." },

  { source: "yoshihara", target: "fukiko", type: "explicit", chapter: "Cap. 8 · Agosto", label: "Están casados; ella dejó la docencia cuando él abrió la librería." },
  { source: "yoshihara", target: "takaharu", type: "explicit", chapter: "Cap. 8 · Agosto", label: "Le vende, en el mercadillo de libros viejos, el tomo de manga que buscaba." },
  { source: "yoshihara", target: "kioto", type: "explicit", chapter: "Cap. 7-8", label: "Su librería de viejo está junto al río Kamo, en Kioto." },

  { source: "takaharu", target: "sanetsu", type: "explicit", chapter: "Cap. 9 · Septiembre", label: "Compañeros de universidad; hablan junto al delta de los ríos de Kioto tras la ruptura de Takaharu." },

  { source: "mark", target: "atsuko", type: "explicit", chapter: "Cap. 10 · Octubre", label: "Están casados; la historia de cómo se conocieron ya se narró en la novela anterior." },
  { source: "mark", target: "kioto", type: "explicit", chapter: "Cap. 10 · Octubre", label: "Viaja hasta allí para reunirse con el Maestro y visitar la galería que expone a nuevos artistas." },

  { source: "teruya", target: "asami", type: "explicit", chapter: "Cap. 11", label: "Están casados." },
  { source: "teruya", target: "takumi", type: "explicit", chapter: "Cap. 11 · Noviembre", label: "Es su padre." },
  { source: "asami", target: "takumi", type: "explicit", chapter: "Cap. 11-12", label: "Es su madre; lo acompaña a la apertura de Fukuidō Tokio." },
];
