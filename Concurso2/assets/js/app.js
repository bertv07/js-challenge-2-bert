const palabras = [
    {
        malas_palabras: [
            "no", "feo", "horrible", "terrible", "malo", "triste", "odiar", "pobre", "negativo", "repugnante",
            "desagradable", "deficiente", "infeliz", "decepcionante", "frustrante", "lamentable", "odioso", "deprimente",
            "miedoso", "peligroso", "doloroso", "fúnebre", "maligno", "desdichado", "ruinoso", "oscuro", "abatido",
            "abominable", "amargo", "angustioso", "atroz", "cruel", "desesperante", "espantoso", "execrable", "funesto",
            "insoportable", "lastimoso", "mezquino", "nefasto", "penoso", "perturbador", "pésimo", "siniestro", "sombrío",
            "trágico", "vergonzoso", "despreciable", "nefasto", "aberrante"
        ]
    }, 
    {
        buenas_palabras: [
            "sí", "hermoso", "maravilloso", "fantástico", "bueno", "feliz", "amar", "genial", "positivo", "excelente",
            "encantador", "agradable", "perfecto", "impresionante", "alegre", "satisfactorio", "brillante", "bravo",
            "estupendo", "excepcional", "fascinante", "glorioso", "grandioso", "increíble", "magnífico", "notable", 
            "óptimo", "precioso", "sublime", "asombroso", "admirable", "beneficioso", "divertido", "dulce", "enriquecedor",
            "exitoso", "fabuloso", "genuino", "idóneo", "invaluable", "jovial", "majestuoso", "positivo", "radiante",
            "resplandeciente", "satisfactorio", "sensacional", "valioso", "vivaz"
        ]
    },
    {
        palabras_neutras: [
            "neutro", "común", "normal", "regular", "suficiente", "mediocre", "típico", "promedio", "usual", "habitual",
            "ordinario", "estándar", "indiferente", "simple", "modesto", "convencional", "cotidiano", "moderado", "anodino",
            "aparente", "normalizado", "usual", "corriente", "genérico", "frecuente", "simple", "tradicional", "usual",
            "considerable", "habitual", "imparcial", "invariable", "lógico", "medio", "neutro", "práctico", "rutinario",
            "usual", "casual", "deseable", "esperable", "formal", "habitual", "incesante", "inevitable", "moderado", 
            "plano", "prudente", "relativo", "simétrico"
        ]
    }
];


function sentimentAnalysis(text) {
    const malas_palabras = palabras[0].malas_palabras;
    const buenas_palabras = palabras[1].buenas_palabras;
    const palabras_neutras = palabras[2].palabras_neutras;

  
    let positiveCount = 0;
    let negativeCount = 0;
    let neutralCount = 0;

    const words = text.toLowerCase().split(/\W+/);

    //contador
    words.forEach(word => {
        if (buenas_palabras.includes(word)) {
            positiveCount++;
        } else if (malas_palabras.includes(word)) {
            negativeCount++;
        } else if (palabras_neutras.includes(word)) {
            neutralCount++;
        }
    });

    
    //sentimientos
    let sentiment;
    if (positiveCount > negativeCount) {
        sentiment = 'Positivo';
        document.body.style.backgroundColor = '#d4edda'; // Verde claro para positivo
    } else if (negativeCount > positiveCount) {
        sentiment = 'Negativo';
        document.body.style.backgroundColor = '#f8d7da'; // Rojo claro para negativo
    } else {
        sentiment = 'Neutral';
        document.body.style.backgroundColor = '#fff3cd'; // Amarillo claro para neutral
    }

    return sentiment;
}




document.getElementById('sentimentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value;
    const result = sentimentAnalysis(userInput);
    document.getElementById('result').innerText = `El sentimiento del texto es: ${result}`;
});
