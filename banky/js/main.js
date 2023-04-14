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
    this.placeToRenderHeader =document.getElementsByTagName(placeToRenderHeader)[0];
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
class BankyMain {
  placeToRenderBankyMain;
  leftSection;
  rightSection;

  constructor(placeToRenderBankyMain) {
    this.placeToRenderBankyMain = document.getElementsByTagName(placeToRenderBankyMain)[0];

    this.mainElement = document.createElement("main");
    this.mainElement.classList = "banky";

    this.leftSection = new BankyLeftSection(this.mainElement);
    this.rightSection = new bankyRightSection(this.mainElement, this);
  }

  makeButtonsFromData(data) {
    this.rightSection.makeButtonsFromData(data);
  }

  makeTransactionsFromData(data) {
    this.leftSection.makeTransactionsFromData(data.items[0].transactions);
  }

  callFromRightSection(account,data){
    this.leftSection.makeTransactionsFromData(account.transactions,data);
    
  }

  render() {
    this.placeToRenderBankyMain.appendChild(this.mainElement);
    this.leftSection.render();
    this.rightSection.render();
  }
}
class BankyLeftSection {
  mainElement;
  constructor(mainElement) {
    this.mainElement = mainElement;
    this.leftSectionElement = document.createElement("section");
    this.leftSectionElement.classList = "banky__section banky__section--left";

    this.bankyHeaderElement = document.createElement("header");
    this.bankyHeaderElement.classList = "banky__header";

    this.bankyHeaderWrapElement = document.createElement("div");

    this.bankyLogoElement = document.createElement("figure");
    this.bankyLogoElement.classList = "banky__logo";

    this.bankyLogoIElement = document.createElement("i");
    this.bankyLogoIElement.classList = "fa-solid fa-house";

    this.bankyLogoText = document.createElement("h1");
    this.bankyLogoText.classList = "banky__money";

    this.eyeButton = document.createElement("button");
    this.eyeButton.classList = "banky__eyeButton";
    this.eyeButton.onclick = this.eyeButtonClicked;

    this.eyeFigure = document.createElement("figure");
    this.eyeFigure.classList = "banky__eye";

    this.eyeI = document.createElement("i");
    this.eyeI.classList = "fa-solid fa-eye";

    this.transactionsElement = document.createElement("ul");
    this.transactionsElement.classList = "banky__transactions";

    //  this.transactionElement = document.createElement("li");
    //  this.transactionElement.classList = "banky__transaction";

    //  this.transactionFrom = document.createElement("h3");
    //  this.transactionFrom.classList = "banky__name";
    //  this.transactionFrom.innerText = "Mert";

    //  this.transactionAmount = document.createElement("h3");
    //  this.transactionAmount.classList = "banky__amount";
    //  this.transactionAmount.innerText = "+10$";

    //  this.transferButton = document.createElement("button");
    //  this.transferButton.classList = "banky__transferButton";
    //  this.transferButton.innerText = "Överboeken";
  }


  eyeButtonClicked = () =>{
    this.transactionsElement.classList.toggle("banky__transactions--blur")
    this.bankyLogoText.classList.toggle("banky__money--blur");
  

  }

  makeTransactionsFromData(transactions) {
    let totalMoney = 0;
    for (let i = 0; i< transactions.length; i++){
      totalMoney += transactions[i]["amount"];
    }

    this.bankyLogoText.innerText = "Saldo:" + " $" + totalMoney;


    this.transactionsElement.innerHTML = "";


    for (let i = 0; i < transactions.length; i++) {
      this.transactionElement = document.createElement("li");
      this.transactionElement.classList = "banky__transaction";

      this.transactionFrom = document.createElement("h3");
      this.transactionFrom.classList = "banky__name";
      this.transactionFrom.innerText = transactions[i]["from/to"];

      this.transactionAmount = document.createElement("h3");
      this.transactionAmount.classList = "banky__amount";
      this.transactionAmount.innerText = transactions[i]["amount"];

      

      this.transactionsElement.appendChild(this.transactionElement);
      this.transactionElement.appendChild(this.transactionFrom);
      this.transactionElement.appendChild(this.transactionAmount);


    }
      

  }

  render() {
    this.mainElement.appendChild(this.leftSectionElement);
    this.leftSectionElement.appendChild(this.bankyHeaderElement);
    this.bankyHeaderElement.appendChild(this.bankyHeaderWrapElement);
    this.bankyHeaderWrapElement.appendChild(this.bankyLogoElement);
    this.bankyLogoElement.appendChild(this.bankyLogoIElement);
    this.bankyHeaderWrapElement.appendChild( this.bankyLogoText);
    this.bankyHeaderWrapElement.appendChild(this.eyeButton);
    this.eyeButton.appendChild(this.eyeFigure);
    this.eyeFigure.appendChild(this.eyeI);
    this.leftSectionElement.appendChild(this.transactionsElement);

    this.transferButton = document.createElement("button");
      this.transferButton.classList = "banky__transferButton";
      this.transferButton.innerText = "Overboeken";
      this.leftSectionElement.appendChild(this.transferButton);

  }
}
class bankyRightSection {
  mainElement;
  bankyMain;
  constructor(mainElement, bankyMain) {
    this.mainElement = mainElement;
    this.bankyMain = bankyMain   ;
    //right side of the website

    this.RightsectionElement = document.createElement("section");
    this.RightsectionElement.classList = "banky__section banky__section--right";

    this.accountsElement = document.createElement("ul");
    this.accountsElement.classList = "banky__accounts";
  }

  makeButtonsFromData(data) {
    data.items.forEach((entry) => {
      this.accountElement = document.createElement("li");
      this.accountElement.classList = "banky__account";
      this.accountElement.onclick = () => {
        this.bankyMain.callFromRightSection(entry,data)
        
      }

      this.accountElement2 = document.createElement("li");
      this.accountElement2.classList = "banky__account";

      this.switchaccountElement = document.createElement("button");
      this.switchaccountElement.classList = "banky__switchAccount";

      this.switchaccountElement2 = document.createElement("button");
      this.switchaccountElement2.classList = "banky__switchAccount";

      this.logoElement = document.createElement("figure");
      this.logoElement.classList = "banky__logo";

      this.logoElement2 = document.createElement("figure");
      this.logoElement2.classList = "banky__logo";

      this.logoIElement = document.createElement("i");
      this.logoIElement.classList = entry.icon;

      // this.logoIElement2 = document.createElement("i");
      // this.logoIElement2.classList = "fa-solid fa-briefcase";

      this.nameofaccountElement = document.createElement("h4");
      this.nameofaccountElement.classList = "banky__nameofaccount";
      this.nameofaccountElement.innerText = entry.name;

      // this.nameofaccountElement2 = document.createElement("h4");
      // this.nameofaccountElement2.classList = "banky__nameofaccount";
      // this.nameofaccountElement2.innerText = entry[0];

      this.accountsElement.appendChild(this.accountElement);
      this.accountElement.appendChild(this.switchaccountElement);
      this.switchaccountElement.appendChild(this.logoElement);
      this.logoElement.appendChild(this.logoIElement);
      this.accountElement.appendChild(this.nameofaccountElement);

      //second
    });
  }

  render() {
    this.RightsectionElement.appendChild(this.accountsElement);
    this.mainElement.appendChild(this.RightsectionElement);
  }
}
class App {
  bankyheader;
  BankyMain;
  GetDataFromApi;
  constructor() {
    this.BankyMain = new BankyMain("body");
    this.header = new Header("body");
    this.GetDataFromApi = new GetDataFromApi("./data/transactions.json");

    // this.app = new BankyMain("body");


    this.GetDataFromApi
      .getData().then((data) => {
        this.BankyMain.makeTransactionsFromData(data);
        this.BankyMain.makeButtonsFromData(data);
    });

    this.header.render();
    this.BankyMain.render();
  }
}

const app = new App();
