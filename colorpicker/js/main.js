class ColorCard{
    id;
    color;
    addToList;
    htmlElement;
    circle;
    text;

    constructor(newId,newColor, addToList){
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;

        //render html element\
        this.htmlElement = document.createElement("li");
        this.htmlElement.classList = "colors__color";

        this.circle = document.createElement("figure");
        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;
      
        this.text = document.createElement("p");
        this.text.innerText = "Copied";
        this.text.classList = "colors__text";
     
        this.htmlElement.onclick = this.onHTMLElementClicked;
        this.render();
    }
    // in deze class maken we een blauwdruk waar we voor de li de figure en de p een class adden 
    // voor de figure maken we een style voor de background
    // voor de p maken we innertext waardoor je het woord copied ziet
    // de functie onhtmlelementclicked wordt aangeroepen
    // de functie render wordt aangeroepen

    onHTMLElementClicked = () =>{
        this.circle.classList.add("colors__circle--selected");
        document.title = this.color;
        window.navigator.clipboard.writeText(this.color);

    }

    //op het moment dat je clicked dan wordt een class gevoegd namelijk colors__circle--selected

    render(){
        this.addToList.appendChild(this.htmlElement);
        this.htmlElement.appendChild(this.circle)
        this.htmlElement.appendChild(this.text);
    }
    //hier wordt alles gerenderd en gevoegd bij de li figure en de p
}


class ColorList{
    id;
    htmlElement
    constructor(newId){
        this.id = newId
        this.htmlElement = document.createElement("ul");
        this.htmlElement.id = this.id;
        this.htmlElement.classList.add("colors");
        this.render();
    }

    render(){
        document.querySelector("body").appendChild(this.htmlElement);

    }
}

// in deze class colorlist geven we een id htmlelement mee en wordt een id
//er wordt een een ul aangemaakt waar ook gelijk een classes wordt aangemaakt namelijk colors
// in de render functie wordt de htmlelement gevoegd bij de body


class HSLGenarator{
    randomHue;
    randomSaturation;
    randomLightness;
    hsl;
    constructor(){
        this.generateHSL();

    }
    // deze functie staat hier zodat het elke keer wordt herhaald

    generateHue = function(){
        this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);


    }
    // in deze functie wordt de  hue gemaakt door de math functie 

    generateSaturation = function(){
        this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";


    }
    // in deze functie wordt de  saturation gemaakt door de math functie 
    
    

    generateLightness = function(){
        this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";

    }
    // in deze functie wordt de  lightness gemaakt door de math functie 

    generateHSL = function(){
        this.generateHue();
        this.generateSaturation();
        this.generateLightness();
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`


    }
    //hier worden de functies aangeroepen en worden de functies uitgevoerd
}

class App{
    id;
    colorList;
    hslGenarator;
    constructor(newId){
        this.id = newId
       this.colorList = new ColorList(this.id);
        this.hslGenarator = new HSLGenarator();
        this.generateColorCard();

    }

    generateColorCard = function(){
        
        for(let i = 1; i <= 100; i++){
            this.hslGenarator.generateHSL();
            new ColorCard(i, this.hslGenarator.hsl, document.getElementById(this.colorList.id) );
        }

    }
}

//in deze class app maken we gebruik van de blauwdrukken en dit doen we door new functie en
//we maken ook gebruik van de for i loop zodat onze functie wordt herhaald en hierdoor hebben we per lijst 100 kleuren

const app = new App("js--app");
const app2 = new App("js--app--2");
const app3 = new App("js--app--3")
//door deze regels komen er 3 verschillende lijsten met 100 kleuren per lijst

   