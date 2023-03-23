class GetDataFromApi {
  url = "";
  data = null;
  constructor(newURL) {
    this.url = newURL;
  }

  async getData() {
    await fetch(this.url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.data = data;
      });
    return this.data;
  }
}

// const mert = new GetDataFromApi("/data/transactions.json");

// mert.getData().then(function(data){ console.log(data)});

class Header {
  placeToRenderHeader;
  headerElement;
  figureElement;
  logoIElement;
  logoHeadingElement;
  avatarFigureElement;
  avatarHeadElement;
  avatarBodyElement;
  constructor(placeToRenderHeader) {
    this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];
    this.headerElement = document.createElement("header");
    this.headerElement.classList = "header";

    this.figureElement = document.createElement("figure");
    this.figureElement.classList = "header__logo";

    this.logoIElement = document.createElement("i");
    this.logoIElement.classList = "fa-solid fa-money-bill-1-wave";

    this.logoHeadingElement = document.createElement("h1");
    this.logoHeadingElement.classList = "header__banky";
    this.logoHeadingElement.innerText = "Banky";

    this.avatarFigureElement = document.createElement("figure");
    this.avatarFigureElement.classList = "avatar";

    this.avatarHeadElement = document.createElement("div");
    this.avatarHeadElement.classList = "avatar__head";

    this.avatarBodyElement = document.createElement("div");
    this.avatarBodyElement.classList = "avatar__body";
  }

  render() {
    this.placeToRenderHeader.appendChild(this.headerElement);
    this.headerElement.appendChild(this.figureElement);
    this.figureElement.appendChild(this.logoIElement);
    this.figureElement.appendChild(this.logoHeadingElement);
    this.headerElement.appendChild(this.avatarFigureElement);
    this.avatarFigureElement.appendChild(this.avatarHeadElement);
    this.avatarFigureElement.appendChild(this.avatarBodyElement);
  }
}


const header = new Header("body");
header.render();

class BankyMain {
  constructor(){
    this.mainElement = document.createElement("main");
    this.mainElement.classList = "banky";

    this.leftSectionElement = document.createElement("section");
    this.leftSectionElement.classList = "banky__section banky__section--left";

    this.bankyHeaderElement = document.createElement("header");
    this.bankyHeaderElement.classList = "banky__header"

    this.bankyHeaderWrapElement = document.createElement("div");

    this.bankyLogoElement = document.createElement("figure");
    this.bankyLogoElement.classList = "banky__logo";

    this.bankyLogoIElement = document.createElement("i");
    this.bankyLogoIElement.classList = "fa-solid fa-house";

    this.bankyLogoText = document.createElement("h1");
    this.bankyLogoText.classList = "banky__money";

    this.eyeButton = document.createElement("button");
    this.eyeButton.classList = "banky__eyeButton";

    this.eyeFigure = document.createElement("figure");
    this.eyeFigure.classList = "banky__eye"

    this.eyeI = document.createElement("i");
    this.eyeI.classList = "fa-solid fa-eye";

    this.transactionsElement = document.createElement("ul");
    this.transactionsElement.classList = "banky__transactions";

    this.transactionsElement = document.createElement("li")

  }

  render(){

  }

}