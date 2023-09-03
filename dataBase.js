// Base de datos
class component {
    constructor(name,img){
        this.name = name
        this.value = 2.3//this.getValue()
        this.img = img
    }

    getValue(){
        if(localStorage.getItem(this.name) == null){
            this.value = 10
            
        } else {
            this.value = localStorage.getItem(this.name)
            
        }
    }
    
}

class blister extends component{
    constructor(name,components,
        description,blisterImg){
        super(name)
        this.components = components
       // this.blisterValue = "agregar metodo"
        this.description = description
        this.blisterImg = blisterImg
        this.itemLvl = "Nivel de objeto 385"
        this.value = 250
    }
    
}

//componentes
    // contenedor de componentes
let boxOfComponents = []

boxOfComponents.push(
// elementos despiertos
frostAwakend = new component(
    "Escarcha despierta",
    './Img/EscarchaDespierta.jpg'
),

windAwakend = new component(
    "Aire despierto",
    './Img/AireDespierto.jpg'
),

fireAwakend = new component(
    "Fuego despierta",
    './Img/FuegoDespierto.jpg'
),

earthAwakend = new component(
    "Tierra despierta",
    './Img/TierraDespierta.jpg'
),

descompotitionAwakend = new component(
    "Descomposición despierta",
    './Img/DescomposicionDespierta.jpg'
),
// plantas
hochemblumes = new component(
    "Hocheblume",
    './Img/Hocheblumble.jpg'
),

crinklebark = new component(
    "Crispacorteza",
    './Img/PinoRetorcido.jpg'
),

bubblePoppy = new component(
    "Amapola de burbujas",
    './Img/AmapolaBurbuja.jpg'
),

saxifragas = new component(
    "Saxifraga",
    './Img/Saxifraga.jpg'
),
// otros
draconicVial = new component(
    "Vial dracónico",
    './Img/VialDraconico.jpg'
));
// recetas
    //contenedor de recetas
let boxOfBlisters = []

boxOfBlisters.push(
    // ampollas
glacialFury = new blister(
    "Ampolla de Furia glacial",
    {
       component1: boxOfComponents[0],
       component2: boxOfComponents[7],
       component3: boxOfComponents[6],
       component4: boxOfComponents[9]
    }, "Cada vez que atacas a un nuevo objetivo, obtienes una acumulación "+
    "de Furia glacial durante 15 sec, hasta un máximo de 5.\n\nAl infligir daño, "+
    "existe la posibilidad de desatar una explosión que inflige 7800 p. de "+
    "daño de Escarcha a dividir entre los enemigos cercanos al objetivo. Este "+
    "efecto aumenta un 15% por cada acumulación.\n\nDura 30 min y persiste más allá "+
    "de la muerte. Cada ampolla idéntica consumida añadirá 30 min más.\n\nNecesitas "+
    "ser de nivel 61",
    './Img/AmpollaFuriaGlacial.jpg'
),

corruptedRage = new blister(
    "Ampolla de ira corrupta",
    {
        component1: boxOfComponents[4],
        component2: boxOfComponents[0],
        component3: boxOfComponents[6],
        component4: boxOfComponents[9]
    },"Obtienes Ira corruptora, lo que te otorga 948 p. de índice de golpe "+
    "crítico.\n\nTras sufrir una cantidad de daño equivalente al 100% de tu "+
    "salud, pasas a sufrir el efecto de Ira sobrecogedora, lo que te inflige "+
    "un 25% de tu salud como daño de Naturaleza durante 15 sec. Cuando pasa "+
    "este tiempo, el ciclo comienza de nuevo.\n\nDura 30 min y persiste más "+
    "allá de la muerte.\n\nCada ampolla idéntica consumida añadirá 30 min más."+
    "\n\nNecesitas ser de nivel 61\n",
    './Img/AmpollaIraCorrupta.jpg'
),

chargedInsulation = new blister(
    "Ampolla de aislamiento cargado",
    {
        component1: boxOfComponents[1],
        component2: boxOfComponents[3],
        component3: boxOfComponents[8],
        component4: boxOfComponents[9]
    },"La estadística principal aumenta 452 p.\n\ncuando estás a 10 m o menos de "+
    "tus aliados. Conservas un 75% de esta estadística durante 2.5 sec si "+
    "estás cerca de un aliado.\n\nDura 30 min y persiste más allá de la muerte.\n\n"+
    "Cada ampolla idéntica consumida añadirá 30 min más.\n\nNecesitas ser de nivel 61",
    './Img/AmpollaAislamientoCargado.jpg'
),

Versatility = new blister(
    "Ampolla de versatilidad",
    {
        component1: boxOfComponents[0],
        component2: boxOfComponents[5],
        component3: boxOfComponents[9],
    },"Aumenta 745 p. tu versatilidad.\n\nDura 30 min y persiste más allá "+
    "de la muerte.\n\nCada ampolla idéntica consumida añadirá 30 min más."+
    "\n\nNecesitas ser de nivel 61",
    './Img/AmpollaVersatilidad.jpg'
),

staticPotentiation = new blister(
    "Ampolla de potenciación estática",
    {
        component1: boxOfComponents[1],
        component2: boxOfComponents[3],
        component3: boxOfComponents[7],
        component4: boxOfComponents[9]
    },"Al permanecer inmóvil, aumentas tu estadística principal hasta 471 p."+
    "durante 5 s. El movimiento consume el efecto y otorga hasta 630 p. de "+
    "velocidad durante 5 sec.\n\nDura 30 min y persiste más allá de la muerte.\n\n"+
    "Cada ampolla idéntica consumida añadirá 30 min más.\n\nNecesitas ser de "+
    "nivel 61",
    './Img/AmpollaPotenciacionEstatica.jpg'
)
);

let boxDatabase =[]

boxOfComponents.forEach(element => {
    boxDatabase.push(element)
});
boxOfBlisters.forEach(element => {
    boxDatabase.push(element)
});
