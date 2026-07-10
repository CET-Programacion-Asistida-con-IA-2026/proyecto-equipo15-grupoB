// Las preguntas del test
const preguntas = [
  {
    texto: "1. ¿Te gusta trabajar en equipo?",
    opciones: [
      { texto: "Sí", perfil: "social" },
      { texto: "No", perfil: "analitico" }
    ]
  },
  {
    texto: "2. ¿Qué actividad te divierte más?",
    opciones: [
      { texto: "Diseñar cosas visualmente", perfil: "creativo" },
      { texto: "Resolver problemas lógicos", perfil: "tecnologico" },
      { texto: "Hablar y convencer a otros", perfil: "social" },
      { texto: "Organizar y planificar", perfil: "analitico" }
    ]
  },
  {
    texto: "3. ¿Te gusta estar frente a una computadora varias horas?",
    opciones: [
      { texto: "Sí", perfil: "tecnologico" },
      { texto: "No", perfil: "social" }
    ]
  },
  {
    texto: "4. ¿Qué materia te gustaba más en el colegio?",
    opciones: [
      { texto: "Matemática / Ciencias", perfil: "tecnologico" },
      { texto: "Lengua / Comunicación", perfil: "social" },
      { texto: "Arte / Música", perfil: "creativo" },
      { texto: "Historia / Sociales", perfil: "analitico" }
    ]
  },
  {
    texto: "5. ¿Preferís trabajar con personas o con datos?",
    opciones: [
      { texto: "Con personas", perfil: "social" },
      { texto: "Con datos u objetos", perfil: "analitico" }
    ]
  },
  {
    texto: "6. ¿Te animarías a hablar en público?",
    opciones: [
      { texto: "Sí", perfil: "social" },
      { texto: "No", perfil: "creativo" }
    ]
  },
  {
    texto: "7. ¿Qué te imaginarías haciendo en tu trabajo ideal?",
    opciones: [
      { texto: "Crear o diseñar", perfil: "creativo" },
      { texto: "Analizar y resolver", perfil: "tecnologico" },
      { texto: "Liderar un equipo", perfil: "social" },
      { texto: "Ayudar a otros", perfil: "analitico" }
    ]
  }
]

// Puntaje de cada perfil
let puntaje = { creativo: 0, tecnologico: 0, social: 0, analitico: 0 }

// Número de pregunta actual
let actual = 0

// Mostrar la pregunta actual
function mostrarPregunta() {
  const pregunta = preguntas[actual]
  document.getElementById("texto-pregunta").innerHTML = "<strong>" + pregunta.texto + "</strong>"
  const contenedor = document.getElementById("opciones")
  contenedor.innerHTML = ""
  pregunta.opciones.forEach(function(opcion) {
    const boton = document.createElement("button")
    boton.textContent = opcion.texto
    boton.style.marginRight = "10px"
    boton.onclick = function() { responder(opcion.perfil) }
    contenedor.appendChild(boton)
  })
}

// Registrar respuesta y avanzar
function responder(perfil) {
  puntaje[perfil] = puntaje[perfil] + 1
  actual = actual + 1
  if (actual < preguntas.length) {
    mostrarPregunta()
  } else {
    mostrarResultado()
  }
}

// Calcular y mostrar el resultado final
function mostrarResultado() {
  document.getElementById("pregunta-contenedor").style.display = "none"
  document.getElementById("resultado").style.display = "block"
  const perfilGanador = Object.keys(puntaje).reduce(function(a, b) {
    return puntaje[a] > puntaje[b] ? a : b
  })
  const descripciones = {
    creativo: "🎨 Perfil Creativo — te destacás en diseño, comunicación y arte.",
    tecnologico: "💻 Perfil Tecnológico — tu fuerte es la programación, los datos y los sistemas.",
    social: "🤝 Perfil Social — brillás en recursos humanos, educación y trabajo en equipo.",
    analitico: "📊 Perfil Analítico — sos ideal para finanzas, administración y planificación."
  }
  document.getElementById("texto-resultado").textContent = descripciones[perfilGanador]
}

// Función para que el botón del test funcione y arranque el test
function arrancarTest() {
  // Ocultamos el botón para que no estorbe
  document.getElementById("boton-empezar").style.display = "none";
  
  // Hacemos visible el contenedors de las preguntas
  document.getElementById("pregunta-contenedor").style.display = "block";
  
  // Llamamos a la primera pregunta
  mostrarPregunta();
}

// Función para mostrar y ocultar la lista de cursos
function mostrarCursos() {
  const contenedor = document.getElementById("contenedor-enlaces");
  
  if (contenedor.style.display === "none") {
    contenedor.style.display = "block";
  } else {
    contenedor.style.display = "none";
  }
}

// Función para mostrar las oportunidades laborales
function mostrarTrabajos() {
  const contenedor = document.getElementById("contenedor-trabajos");
  
  if (contenedor.style.display === "none") {
    contenedor.style.display = "block";
  } else {
    contenedor.style.display = "none";
  }
}