class Cookie {
  name = "";
  htmlElement = undefined;
  score = undefined;
  factor = 1;

  constructor(newName, newHTMLElement, newScore) {
    this.name = newName;
    this.htmlElement = newHTMLElement;
    this.htmlElement.onclick = this.onCookieClicked;
    this.score = newScore;
  }

  onCookieClicked = () => {
    this.score.onCookieClicked(this.factor);
  };

  onStyleChange() {
    this.htmlElement.classList.add("cookie--chocolate");
  }

  redonstylechange() {
    this.htmlElement.classList.add("cookie--red");
  }
}

class Score {
  score;
  name = "";
  htmlElement = undefined;

  constructor(newScore, newName, newHTMLElement) {
    this.score = newScore;
    this.name = newName;
    this.htmlElement = newHTMLElement;
    this.htmlElement.innerText = newScore;
  }

  onCookieClicked(factorFromCookie) {
    this.score = this.score + factorFromCookie;
    this.htmlElement.innerText = this.score;
  }

  subtractScore() {
    this.score = this.score - 100;
    this.htmlElement.innerText = this.score;
  }

  onAutoScoreClicked() {
    setInterval(() => {
      this.score = this.score + 500;
      this.htmlElement.innerText = this.score;
    }, 10000);
  }

  addpoints() {
    this.score = this.score + 10000;
    this.htmlElement.innerText = this.score;
  }

  scoreloaded(newScore) {
    this.score = newScore;
    this.htmlElement.innerText = this.score;
  }
}

class Multiplier {
  factor = 100;
  htmlElement = undefined;
  cookie = undefined;
  bought = false;

  constructor(htmlElement, cookie) {
    this.htmlElement = htmlElement;
    this.cookie = cookie;
    this.htmlElement.onclick = this.onMultiplierClicked;
  }

  onMultiplierClicked = () => {
    if (
      this.bought === false &&
      window.localStorage.getItem("multiplier") !== "true"
    ) {
      this.bought = true;
      window.localStorage.setItem("multiplier", this.bought);
      // remove 100 points
      this.cookie.score.subtractScore();
      this.cookie.factor = this.factor;
    }
  };
}

class AutoScore {
  htmlElement = undefined;
  score = undefined;
  bought = false;
  constructor(htmlElement, score) {
    this.htmlElement = htmlElement;
    this.score = score;
    this.htmlElement.onclick = this.onAutoScoreClicked;
  }
  onAutoScoreClicked = () => {
    if (this.bought === false && sessionStorage.getItem("auto") !== "true") {
      this.bought = true;
      sessionStorage.setItem("auto", this.bought);
      this.score.subtractScore();
      score.onAutoScoreClicked();
    }
   
  };
}

class ChocolateCookie {
  htmlElement = undefined;
  bought = false;
  cookie = undefined;

  constructor(htmlElement, cookie) {
    this.htmlElement = htmlElement;
    this.cookie = cookie;
    this.htmlElement.onclick = this.onChocolateCookieClicked;
  }

  onChocolateCookieClicked = () => {
    if (
      this.bought === false &&
      window.localStorage.getItem("chocolateCookie") !== "true"
    ) {
      this.bought = true;
      window.localStorage.setItem("chocolateCookie", this.bought);
      this.cookie.score.addpoints();
    }

    this.cookie.onStyleChange();
  };
}

class Save {
  htmlElement;

  constructor(newHTMLElement) {
    this.htmlElement = newHTMLElement;
    this.htmlElement.onclick = this.onSavebuttonclicked;
  }

  onSavebuttonclicked = () => {
    window.localStorage.setItem("score", score.score);
  };
}

class Load {
  score;
  cookie;

  constructor(score, cookie) {
    this.score = score;
    this.cookie = cookie;
    this.onLoad();
  }
  onLoad = function () {
    const scorefromlocalstorage = window.localStorage.getItem("score");
    if (scorefromlocalstorage !== null) {
      this.score.scoreloaded(parseInt(scorefromlocalstorage));
    }

    const multiplierFromLocalStorage =
      window.localStorage.getItem("multiplier");
    console.log(multiplierFromLocalStorage);
    if (multiplierFromLocalStorage === "true") {
      this.cookie.factor = 100;
    }
  };
}

class RedVelvetCookie {
  htmlElement = undefined;
  bought = false;
  cookie = undefined;

  constructor(htmlElement, cookie) {
    this.htmlElement = htmlElement;
    this.cookie = cookie;
    this.htmlElement.onclick = this.onredvelvetCookieClicked;
  }

  onredvelvetCookieClicked = () => {
    if (this.bought === false) {
      this.bought = true;
      this.cookie.redonstylechange();
      this.cookie.score.addpoints();
    }
  };
}

const score = new Score(
  0,
  "Default Score",
  document.getElementById("js--score")
);
const cookie = new Cookie(
  "Default Cookie",
  document.getElementById("js--cookie"),
  score
);

const multiplier = new Multiplier(
  document.getElementById("js--multiplier"),
  cookie
);
const auto = new AutoScore(document.getElementById("js--autoScore"), score);
const chocolate = new ChocolateCookie(
  document.getElementById("js--Chocolate"),
  cookie
);
const redvelvet = new RedVelvetCookie(
  document.getElementById("js--redvelvet"),
  cookie
);
const save = new Save(document.getElementById("js--save"));
const load = new Load(score, cookie);

//mobile

const multiplierMobile = new Multiplier(
  document.getElementById("js--multiplier--mobile"),
  cookie
);
const autoMobile = new AutoScore(
  document.getElementById("js--autoScore--mobile"),
  score
);
const chocolateMobile = new ChocolateCookie(
  document.getElementById("js--chocolate--mobile"),
  cookie
);
const redvelvetMobile = new RedVelvetCookie(
  document.getElementById("js--redvelvet--mobile"),
  cookie
);

// window.localStorage.setItem("name","mert")
