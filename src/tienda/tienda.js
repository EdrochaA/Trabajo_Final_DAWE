import Videojuego from "../assets/Videojuego.js";
import Libro from "../assets/Libro.js";
import Merchandising from "../assets/Merchandising.js";
import Puzzle from "../assets/Puzzle.js";
import JuegoDeMesa from "../assets/JuegoDeMesa.js";

// Crear lista vacía para el carrito
export const carrito = [];

// Creación manual de productos
export const listaProductos = [ 
    new Videojuego("Super Mario World", 14.99, "La primera aventura de Mario y Luigi para Super NES los condujo a un mundo de nuevos personajes, habilidades y mucho más, convirtiéndolo en uno de los videojuegos de mayor éxito de todos los tiempos. En esta entrega, los hermanos fontaneros se dirigen a la Tierra de los dinosaurios, donde conocen a Yoshi (su nuevo y adorable compañero) y luchan contra Bowser y sus secuaces a lo largo de difíciles niveles cargados de secretos. Además de montar sobre Yoshi y tragar enemigos, podrás volar a lo más alto gracias a la Capa de Pluma.", "imagenes/Videojuegos/super_mario_world.webp", "Nintendo"),
    new Videojuego("The Legend of Zelda: A Link to the Past", 9.99, "En esta gran aventura, Link recibe por telepatía un mensaje de Zelda, que le pide ayuda. Debe encontrar la Master Sword y viajar al Dark World para derrotar a Ganon y devolver la paz a la tierra de Hyrule.", "imagenes/Videojuegos/legendOfZelda.jpg", "Nintendo"),
    new Videojuego("Street Fighter II", 7.99, "Street Fighter II es un juego de lucha uno contra uno desarrollado por Capcom . Publicado originalmente en 1991 para Arcade, revolucionó el género y lo acercó al público general. Podías seleccionar ocho personajes diferentes, cada uno con su propio conjunto de movimientos, fortalezas y debilidades.", "imagenes/Videojuegos/streetFighter2.jpg", "Capcom"),
    new Videojuego("Grand Theft Auto V", 19.99, "Un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, y tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.", "imagenes/Videojuegos/GTAV.jpg", "Rockstar Games"),
    new Videojuego("Mario Kart 8 Deluxe", 39.99, "Compite por tierra, mar y aire, e incluso por techos y paredes, en 48 niveles. Todos los circuitos (¡y personajes!) de Mario Kart 8 para Wii U vuelven en Mario Kart 8 Deluxe, incluido circuitos descargables anteriores inspirados en Animal Crossing, Excitebike, The Legend of Zelda y muchos más.", "imagenes/Videojuegos/MK8.jpg", "Nintendo"),
    new Videojuego("Dragon Ball Sparking! ZERO", 69.99, "DRAGON BALL: Sparking! ZERO lleva a un nuevo nivel el legendario estilo de juego de la serie Budokai Tenkaichi. Aprende a dominar a diversos personajes jugables, cada uno con sus habilidades, transformaciones y técnicas propias. Libera tu espíritu de lucha y pelea en escenarios que se derrumban y reaccionan a tu poder a medida que el combate se recrudece.", "imagenes/Videojuegos/DBSZ.jpg", "Bandai Namco"),

    new Libro("Final Fantasy: Level 99", 24.99, "Final Fantasy: Level 99 es un bestiario que explora la diversidad de criaturas icónicas de la legendaria saga de videojuegos de Square Enix, desde sus inspiraciones en mitología clásica hasta referencias en la cultura pop y la ciencia-ficción. El libro, coescrito por Miguel Martínez Suárez y Néstor Rubio Blázquez, presenta 99 fascinantes monstruos que han desafiado a los jugadores a lo largo de los años. Desde encuentros comunes hasta batallas épicas, cada página revela la historia única y la inspiración detrás de estas criaturas. Presentado en formato álbum, Final Fantasy: Level 99 estará disponible a finales de mayo, ofreciendo a los fans la oportunidad de sumergirse en el vasto y fascinante mundo de Final Fantasy de una forma amena y diferente.", "imagenes/Libros/FF99.jpg", "Plan B Publicaciones"),
    new Libro("Cómo se hizo Assassin's Creed. 15º aniversario", 32.99, "En conmemoración al 15º aniversario de Assassin's Creed se ha llevado a cabo un análisis exhaustivo de la creación de la galardonada franquicia, con magníficas ilustraciones de más de una década y media de desarrollo y entrevistas detalladas con los creadores de los juegos.", "imagenes/Libros/AC15.jpg", "Minotauro"),
    new Libro("Batman: un héroe de videojuego", 11.99, "Conocíamos su historia en el cómic, el cine o la televisión, pero nunca antes se había repasado la trayectoria del Caballero Oscuro en el mundo del videojuego, un medio con enorme potencial creativo y que se ha erigido como uno de los mayores fenómenos culturales del siglo XXI. Batman: Un héroe de videojuego supone un recorrido por más de tres décadas de incursiones del personaje en el terreno del ocio electrónico: desde su primer título, creado en 1986 por Jon Ritman, hasta el culmen alcanzado por la saga Arkham, desarrollada por el estudio Rocksteady, sin olvidar otras apariciones en todo tipo de aventuras. La obra ahonda también en la historia del personaje, desde sus orígenes, profundizando en el perfil psicológico de Batman y del resto de habitantes del universo que habita este carismático superhéroe. La psicología y la política, temáticas con una fuerte presencia siempre en las andanzas de Batman, también tienen cabida en esta obra. Un libro imprescindible para todos los amantes del Caballero Oscuro, con declaraciones exclusivas de Jon Ritman y prologado por Claudio Serrano, la voz de Batman.", "imagenes/Libros/Batman.jpg", "Héroes de Papel"),
    new Libro("Harry Potter y la piedra filosofal", 16.10, "Harry Potter y la piedra filosofal es el primer libro de la saga Harry Potter, que catapultó a J.K. Rowling al estrellato mundial. La historia comienza con Harry, un niño huérfano que vive con sus crueles tías y tíos. En su undécimo cumpleaños, descubre que es un mago y ha sido aceptado en la escuela de magia más prestigiosa de Inglaterra: Hogwarts. Aquí, conocerá a sus futuros amigos, Ron Weasley y Hermione Granger, con quienes vivirá innumerables aventuras. En su primer año, Harry descubre que es famoso en el mundo mágico debido a un oscuro suceso ocurrido cuando era un bebé: sobrevivió a un intento de asesinato por parte de Lord Voldemort, el mago más temido. A lo largo del libro, Harry y sus amigos investigan la leyenda de la Piedra Filosofal, un objeto mágico que otorga la inmortalidad, y tratan de evitar que caiga en manos equivocadas. Durante la trama, Harry enfrenta desafíos, enemigos y revela secretos sobre su pasado. Con cada capítulo, el lector se adentra más en un mundo rico en magia, criaturas fantásticas y personajes entrañables. Harry Potter y la piedra filosofal es una obra que combina magia, aventura, amistad y valentía. Su tono y su narración equilibran la inocencia de la niñez con la profundidad de los conflictos morales, haciendo que tanto jóvenes como adultos se enganchen a la trama. La saga de Harry Potter se ha convertido en un fenómeno cultural global, con millones de fans alrededor del mundo y una serie de películas que amplían el universo literario. Este primer libro es solo el inicio de una historia que aborda la lucha entre el bien y el mal, el sacrificio y el poder de la amistad.", "imagenes/Libros/HP_piedra_filosofal.jpg", "Salamandra"),
    new Libro("El Hobbit ~ J.R.R. Tolkien)", 15.20, "El Hobbit es la obra maestra de J.R.R. Tolkien que, aunque inicialmente fue escrita para un público juvenil, se ha ganado el reconocimiento de lectores de todas las edades. Publicado en 1937, este libro marca el comienzo de la vasta y detallada mitología de la Tierra Media, que más tarde se expandiría con El Señor de los Anillos. La historia sigue a Bilbo Bolsón, un hobbit que disfruta de una vida tranquila y simple en su agujero en la Comarca. Su vida da un giro inesperado cuando es reclutado por el mago Gandalf y un grupo de enanos para embarcarse en una peligrosa aventura: recuperar el tesoro robado por el dragón Smaug, quien se apoderó de la Montaña Solitaria. Aunque inicialmente reacio, Bilbo se embarca en esta travesía que lo llevará a través de bosques oscuros, montañas nevadas y batallas épicas. A lo largo del viaje, Bilbo se encuentra con seres mágicos como trolls, elfo, orcos, y, sobre todo, Gollum, un ser extraño y misterioso con el que mantiene un inolvidable enfrentamiento. La obra está cargada de elementos de fantasía y aventura clásica: monstruos, magia, viajes épicos, y dilemas personales. Bilbo, un personaje común y corriente, se convierte en un héroe inesperado, y su crecimiento y valentía durante el viaje son los puntos clave de la trama. Su encuentro con el Anillo Único, que más tarde jugaría un papel crucial en El Señor de los Anillos, es uno de los giros más importantes de la historia. El Hobbit no solo es una narración de aventuras, sino también una reflexión sobre el coraje, la amistad, la lealtad y la lucha contra la avaricia y la oscuridad. El estilo narrativo de Tolkien es rico en detalles y descripciones del mundo natural, creando una sensación de inmersión en un lugar mágico. Esta obra es el preludio de la compleja y majestuosa saga de El Señor de los Anillos, pero se mantiene independiente en su tono y narrativa. A lo largo de las décadas, El Hobbit ha capturado la imaginación de millones de lectores y se ha adaptado a varias películas, siendo la más reciente una trilogía dirigida por Peter Jackson. A pesar de su enfoque más ligero y accesible que su secuela, El Hobbit es una obra profunda, esencial para entender la rica mitología de la Tierra Media.", "imagenes/Libros/el_Hobbit.jpg", "Minotauro"),
    
    new Merchandising("Funko Pop Harry Potter Gryffindor", 16.99, "Este muñeco Pop tiene el nº 01 de su colección de Harry Potter, su nombre original es Funko Pop Vinyl Harry Potter Gryffindor de la licencia Harry Potter.", "imagenes/Merchandising/HP.jpg", "Funko"),
    new Merchandising("Camiseta Star Wars Logo Azul", 11.99, "Nueva camiseta con el logo de la saga, esta vez en versión retro y con fondo en azul. Y para completar la estética ochentera, se presenta en una llamativa caja que imita a las que se usaban para los VHS, incluyendo carátula. Esta camiseta, 100% algodón, gracias a su atractiva presentación se convierte en un regalo ideal para cualquier fan de Star Wars.", "imagenes/Merchandising/SW.jpg", "DetodoExpress"),
    new Merchandising("Funko Pop Goku", 18.99, "Este muñeco Pop tiene el nº 615 de su colección de Dragon Ball Z, Funko Pop Vinyl Goku de la licencia Dragon Ball Z.", "imagenes/Merchandising/goku.jpg", "Funko"),
    new Merchandising("Taza termocromática Pokémon Gotta catch em all", 14.99, "Descubre esta increíble taza de Pokémon, un producto 100% oficial que sorprenderá a cualquier fan de la saga. Fabricada en cerámica de alta calidad y con una gran capacidad de 460 ml, esta taza tiene una característica especial: cambia de aspecto cuando se vierte un líquido caliente, revelando un diseño único. Para preservar su magia, no es apta para microondas ni lavavajillas. Gracias a su llamativa presentación y su efecto térmico, se convierte en un regalo perfecto para cualquier entrenador Pokémon.", "imagenes/Merchandising/PKMNTaza.jpg", "ABYSTYLE"),
    new Merchandising("Bolsa portameriendas Minecraft Lenticular", 12.99, "Lleva tus snacks y almuerzo al mundo de Minecraft con esta increíble bolsa portameriendas lenticular. Con un diseño dinámico que cambia de apariencia según el ángulo de visión, esta bolsa es perfecta para los fans del popular videojuego. Su tamaño compacto y su resistente material la hacen ideal para el día a día, manteniendo tus meriendas seguras y organizadas. ¡Un accesorio imprescindible para cualquier aventurero de Minecraft!.", "imagenes/Merchandising/minecraft.jpg", "Kids Licensing"),

    new Puzzle("Fallout Puzzle Gaming 25th Anniversary", 21.99, "Celebre el legado icónico de Fallout con este rompecabezas de 1000 piezas, perfecto para los fanáticos de esta famosa franquicia de videojuegos. Este rompecabezas con licencia oficial mide 68 x 48 cm cuando está ensamblado y presenta ilustraciones vibrantes que rinden homenaje a personajes y elementos clave del universo Fallout. Si eres un entusiasta de los rompecabezas o un fanático de Fallout, esta pieza es ideal para pasar horas de diversión armando. Una vez completado, incluso puedes enmarcarlo y exhibirlo para mostrar tu pasión por este videojuego clásico.", "imagenes/Puzzles/Fallout.jpg", "1000"),
    new Puzzle("Sonic - The Hedgehog puzzle Classic Sonic", 14.99, "Disfruta del universo de Sonic the Hedgehog con este increíble rompecabezas de 500 piezas, ideal para fanáticos del icónico erizo azul. Con un tamaño de 49 x 36 cm una vez ensamblado, este rompecabezas con licencia oficial presenta coloridas ilustraciones que capturan la esencia de Sonic y sus amigos. Perfecto tanto para coleccionistas como para amantes de los rompecabezas, te brindará horas de entretenimiento mientras armas cada pieza. Además, al completarlo, puedes enmarcarlo y exhibirlo como una muestra de tu pasión por este legendario videojuego.", "imagenes/Puzzles/sonic.jpg", "500"),
    new Puzzle("Pokémon 3D puzzle Pokéballs: Master Ball", 12.99, "Descubre el increíble Pokémon 3D Puzzle Pokéballs: Master Ball, una fiel recreación en forma de rompecabezas tridimensional con 54 piezas. Con un diámetro de 7 cm y acompañado de una elegante peana para su exhibición, este rompecabezas con licencia oficial es ideal para coleccionistas y fanáticos de Pokémon. Su diseño detallado y vibrante captura la esencia de la icónica Master Ball, convirtiéndolo en una pieza perfecta para armar, disfrutar y exponer como parte de tu colección.", "imagenes/Puzzles/masterball.jpg", "54"),
    new Puzzle("Puzzle 3D Ravensburger Bola Grogu", 15.95, "El puzzle 3D Ravensburger Bola Grogu es un modelo de 72 piezas que, una vez montado, tiene un tamaño de 12,9 cm de diámetro. Esta pieza de colección pertenece a la línea oficial de Star Wars-Disney, con un diseño que recrea al querido personaje Grogu (más conocido como Baby Yoda) en forma de esfera. Las piezas del puzzle están diseñadas con precisión, lo que facilita su encaje y asegura una estructura estable y detallada. Ravensburger es conocida por la calidad de sus productos, y este puzzle 3D no es la excepción. Las piezas están fabricadas con materiales duraderos y con acabados de alta resolución, lo que permite una experiencia de montaje tanto entretenida como desafiante. Ideal para los fanáticos de Star Wars y de los puzzles 3D, este modelo captura la esencia del universo de Star Wars, convirtiéndolo en una pieza decorativa única una vez completado.", "imagenes/Puzzles/puzzle-3d-ravensburger-bola-grogu.png", "74"),
    new Puzzle("Puzzle Clementoni Panorama Señor de los Anillos", 10.95, "El puzzle Clementoni Panorama Señor de los Anillos es un rompecabezas panorámico compuesto por 1000 piezas, con un tamaño final de 98 x 33 cm. Esta pieza de colección está basada en el icónico universo de El Señor de los Anillos, y su diseño permite una visualización espectacular de escenas emblemáticas de la saga. El modelo es de la reconocida marca Clementoni, famosa por sus puzzles de alta calidad y su enfoque en detalles y precisión. Las piezas están elaboradas con materiales resistentes y tienen un acabado de alta definición, lo que asegura un encaje perfecto y una experiencia de montaje muy satisfactoria. Este puzzle panorámico es ideal para quienes disfrutan de desafíos visuales y buscan una pieza decorativa que celebre la magia de la Tierra Media. Al completarlo, se obtiene una imagen impresionante que captura la esencia de El Señor de los Anillos en su formato más épico. Gracias a su tamaño y formato panorámico, una vez terminado, este puzzle será una pieza central de cualquier espacio, convirtiéndose en una excelente opción tanto para fanáticos de la saga como para aficionados a los puzzles de calidad.", "imagenes/Puzzles/puzzle-señor-de-los-anillos-1000-pzs.PNG", "1000"),

    new JuegoDeMesa("Monopoly", 42.99,"Monopoly es un juego de mesa basado en el intercambio y la compraventa de bienes raíces (normalmente, inspirados en los nombres de las calles de una determinada ciudad), hoy es propiedad de la empresa estadounidense Hasbro. Monopoly es uno de los juegos de mesa comerciales más vendidos del mundo.", "imagenes/JuegosDeMesa/monopoly.jpg", "3-8"),
    new JuegoDeMesa("Trivial Pursuit", 28.99, "El Trivial Pursuit Master es un juego de tablero clásico que consiste en responder a una serie de preguntas para ganar los adversarios. Cada jugador se mueve por el tablero mediante un dado y responde las preguntas que le tocan (marcadas por los colores de las casillas del tablero).", "imagenes/JuegosDeMesa/trivial.jpg", "2-6"),
    new JuegoDeMesa("Cluedo", 27.99, "Cluedo es un juego de mesa de detectives y misterio. El objetivo del juego es descubrir quién asesinó al Dr. Black, con qué arma, y en qué habitación se cometió el crimen.", "imagenes/JuegosDeMesa/cluedo.jpg", "2-6"),
    new JuegoDeMesa("Parchis", 30.41, "El Parchís es un clásico juego de mesa, tradicional en muchos países, que se juega con fichas que los jugadores mueven por un tablero en función de los resultados obtenidos al lanzar un dado. El objetivo del juego es llevar las 4 fichas de cada jugador desde su casilla de inicio hasta su casilla de meta antes que los demás jugadores. En la versión de Parchís para 8 jugadores, el tablero tiene más casillas, permitiendo que hasta 8 personas puedan jugar al mismo tiempo. Cada jugador comienza con 4 fichas en su casilla de salida, y a medida que avanza el juego, puede 'comer' las fichas de otros jugadores al caer en la misma casilla que ellas. Esto añade un componente de estrategia, ya que hay que decidir cuándo avanzar rápidamente y cuándo jugar de manera más cautelosa. También existe la posibilidad de formar equipos, donde jugadores de diferentes colores pueden aliarse para ganar juntos, lo que aumenta el nivel de interacción y colaboración entre los participantes.", "imagenes/JuegosDeMesa/parchis.jpg", "8"),
    new JuegoDeMesa("VEVOR Estuche de Poker 300 Piezas", 34.86, "El VEVOR Estuche de Póquer 300 Piezas es un set completo para disfrutar de juegos de azar en casa, especialmente diseñado para póquer, blackjack y otros juegos de casino. Este estuche incluye 300 fichas de póquer de plástico de alta calidad, cada una con un peso de 11,5 g y un tamaño de 40 x 3,3 mm, lo que asegura una experiencia de juego profesional y cómoda. Las fichas están diseñadas para tener un buen agarre y una larga durabilidad, lo que las hace perfectas para un uso frecuente. Además del set de fichas, el paquete incluye dos barajas de cartas, un botón de distribuidor y dos botones ciegos, elementos esenciales para juegos como Texas Hold'em y Blackjack. Todo esto viene en un estuche de transporte resistente, lo que facilita su almacenamiento y transporte. Este estuche es ideal para quienes buscan crear una experiencia de casino en casa, ya sea para jugar con amigos o en familia, proporcionando todo lo necesario para disfrutar de juegos clásicos de casino con comodidad y estilo.", "imagenes/JuegosDeMesa/poker.jpg", "10")
];


// Funcion para crear un nuevo producto
export function crearProducto(tipoP, nomP, precioP, descp, imagUrl, infExtra) {
    if (descp==""){
        descp="- - -"
    }
    let nuevoProducto;
    if (tipoP === 'T1') {
        nuevoProducto = new Videojuego(nomP, precioP, descp, imagUrl, infExtra); // infExtra sería la Compañía
     } else if (tipoP === 'T2') {
        nuevoProducto = new Libro(nomP, precioP, descp, imagUrl, infExtra); // infExtra sería la Editorial
    } else if (tipoP === 'T3') {
        nuevoProducto = new Merchandising(nomP, precioP, descp, imagUrl, infExtra); // infExtra sería el Fabricante
    } else if (tipoP === 'T4') {
        nuevoProducto = new Puzzle(nomP, precioP, descp, imagUrl, parseInt(infExtra)); // infExtra sería el número de Piezas
    } else if (tipoP === 'T5') {
        nuevoProducto = new JuegoDeMesa(nomP, precioP, descp, imagUrl, parseInt(infExtra)); // infExtra sería el número de Jugadores
    }
    return nuevoProducto
}

export function obtenerCampoAdicional(producto) {
  if (!producto || !producto.tipo || !producto.extra) return "";

  switch (producto.tipo) {
    case "T1":
      return `<p><strong>Compañía:</strong> ${producto.extra}</p>`;
    case "T2":
      return `<p><strong>Editorial:</strong> ${producto.extra}</p>`;
    case "T3":
      return `<p><strong>Fabricante:</strong> ${producto.extra}</p>`;
    case "T4":
      return `<p><strong>Nº piezas:</strong> ${producto.extra}</p>`;
    case "T5":
      return `<p><strong>Jugadores:</strong> ${producto.extra}</p>`;
    default:
      return `<p><strong>Extra:</strong> ${producto.extra}</p>`;
  }
}


// Guarda o actualiza un producto en localStorage


export function guardarEnCarrito(producto, cantidad) {
  const clave = `producto_${producto.id}`;
  const item = {
    id: producto.id,
    nombre: producto.nombre,
    precio: Number(producto.precio),
    imagen: producto.imagen,
    cantidad: cantidad,
    tipo: producto.tipo
    
  };
  console.log("Guardando producto:", item);
  localStorage.setItem(clave, JSON.stringify(item));

}

// Borra un producto del carrito
export function borrarDelCarrito(idProducto) {
  const clave = `producto_${idProducto}`;
  localStorage.removeItem(clave);
}

// Cargar todos los productos del carrito
export function cargarCarrito() {
  const carrito = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("producto_")) {
      try {
        const producto = JSON.parse(localStorage.getItem(key));
        if (producto && producto.id && producto.nombre) {
          carrito.push(producto);
        }
      } catch (e) {
        console.warn("Error al parsear producto del carrito:", key);
      }
    }
  }
  return carrito;
}

