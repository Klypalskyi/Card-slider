document.addEventListener("DOMContentLoaded", function() {
  let myCards = [
    {
      id: "one",
      cardnum: "5355151501005053",
      name: "Idea Bank ЗП",
      cardholdder: "Mykhailo Klypalskyi"
    },
    {
      id: "two",
      cardnum: "5375414111207543",
      name: "Mono",
      cardholdder: "Mykhailo Klypalskyi"
    },
    {
      id: "three",
      cardnum: "5169330512043206",
      name: "Приват ФОП",
      cardholdder: "Mastercard comme"
    },
    {
      id: "four",
      cardnum: "5168742720049653",
      name: "Приват ЗП",
      cardholdder: "KDV Gold"
    },
    {
      id: "five",
      cardnum: "5582592100518001",
      name: "Укрсиб ФОП",
      cardholdder: "Klypalskyi Mykhailo"
    },
    {
      id: "six",
      cardnum: "5355151501005053",
      name: "Idea Bank ЗП",
      cardholdder: "Mykhailo Klypalskyi"
    },
    {
      id: "seven",
      cardnum: "5167985510105158",
      name: "Приват EUR",
      cardholdder: "Klypalskyi Mykhailo"
    },
    {
      id: "eight",
      cardnum: "5168745320526103",
      name: "Приват Универсальная",
      cardholdder: "Gold"
    }
  ];

  let otherCards = [
    {
      id: "one",
      cardnum: "5355151591110033",
      cardholder: "Родственник"
    },
    {
      id: "two",
      cardnum: "5375414155577711",
      cardholder: "Коллега"
    },
    {
      id: "three",
      cardnum: "5168742765449653",
      cardholder: "Друг"
    },
    {
      id: "four",
      cardnum: "5582592112318001",
      cardholder: "Жена"
    }
  ];

  const bins = [
    {
      name: "idea",
      binsArr: [
        "460160",
        "518158",
        "527166",
        "527220",
        "535148",
        "535149",
        "535150",
        "535515",
        "535516",
        "535540",
        "406989",
        "457732"
      ]
    },
    {
      name: "alfa",
      binsArr: [
        "410232",
        "410242",
        "410243",
        "410244",
        "410245",
        "410246",
        "410247",
        "422605",
        "444424",
        "446670",
        "516799",
        "516800",
        "530565",
        "536364",
        "543259",
        "544179",
        "544904",
        "670516",
        "980477",
        "531854",
        "535196",
        "535555",
        "535557",
        "535639",
        "547276",
        "547994"
      ]
    },
    {
      name: "privat",
      binsArr: [
        "522119",
        "422312",
        "410653",
        "414963",
        "417263",
        "458120",
        "404856",
        "404857",
        "404858",
        "404859",
        "404860",
        "413051",
        "414939",
        "414943",
        "414949",
        "414960",
        "414961",
        "414962",
        "417649",
        "423396",
        "424600",
        "424657",
        "432575",
        "434156",
        "440129",
        "440509",
        "440535",
        "440588",
        "458121",
        "458122",
        "462705",
        "462708",
        "473117",
        "473118",
        "473121",
        "476065",
        "476339",
        "516798",
        "516874",
        "516875",
        "516933",
        "516936",
        "521153",
        "521432",
        "521857",
        "526260",
        "532957",
        "535249",
        "536354",
        "544457",
        "545708",
        "545709",
        "552324",
        "557721",
        "558424",
        "676246",
        "676865",
        "777700",
        "777702",
        "777710",
        "980455"
      ]
    },
    {
      name: "mono",
      binsArr: [
        "537541",
        "537571",
        "538808",
        "402889",
        "438383",
        "444036",
        "444037",
        "444038",
        "444039",
        "444040",
        "444041",
        "472931",
        "472932"
      ]
    },
    {
      name: "ukrsib",
      binsArr: [
        "521567",
        "407363",
        "407366",
        "417232",
        "434343",
        "523648",
        "535129",
        "407360",
        "407361",
        "407362",
        "407364",
        "407365",
        "511695",
        "516930",
        "522871",
        "529578",
        "533037",
        "535128",
        "557099",
        "557100",
        "558259"
      ]
    }
  ];

  const myCardBox = document.querySelector("#crl-tp");
  const otherCardBox = document.querySelector("#crl-bt");

  for (let card of myCards) {
    // console.log(card);

    // Main boxes
    let carouselItem = document.createElement("a");
    let cardBox = document.createElement("div");
    let cardLogoBox = document.createElement("div");
    let cardNumberBox = document.createElement("div");
    let cardNameBox = document.createElement("div");

    carouselItem.classList.add("carousel-item");
    cardBox.classList.add("card");
    cardLogoBox.classList.add("card-logo");
    cardNumberBox.classList.add("card-cardnum");
    cardNameBox.classList.add("card-footer");

    carouselItem.setAttribute("href", `#${card.id}`);

    // IMGs
    let bankLogo = document.createElement("img");
    let mpsLogo = document.createElement("img");

    bankLogo.classList.add("card-logo-img", "bank-logo");
    mpsLogo.classList.add("card-logo-img", "mps-logo");

    bankLogo.setAttribute("alt", "bank-logo");
    mpsLogo.setAttribute("alt", "mps-logo");

    for (let bank of bins) {
      //   console.log(bank);
      for (let el of bank.binsArr) {
        if (el === card.cardnum.slice(0, 6)) {
          cardBox.classList.add(`${bank.name}`);
          bankLogo.src = `img/${bank.name}-logo.png`;
        }
      }
    }

    if (card.cardnum.slice(0, 1) === "4") {
      mpsLogo.src = `img/visa-logo.png`;
    } else mpsLogo.src = `img/mc-logo.png`;

    cardLogoBox.append(bankLogo, mpsLogo);

    // Cardnum
    let cardOne = document.createElement("div");
    let cardTwo = document.createElement("div");
    let cardThree = document.createElement("div");
    let cardFour = document.createElement("div");

    cardOne.classList.add("card-cardnum__one");
    cardTwo.classList.add("card-cardnum__two");
    cardThree.classList.add("card-cardnum__three");
    cardFour.classList.add("card-cardnum__four");

    let number = card.cardnum;

    cardOne.textContent = number.slice(0, 4);
    cardTwo.textContent = "****";
    cardThree.textContent = "****";
    cardFour.textContent = card.cardnum.slice(12);

    cardNumberBox.append(cardOne, cardTwo, cardThree, cardFour);

    // Footer
    let cardHolder = document.createElement("div");
    let cardName = document.createElement("div");

    cardHolder.classList.add("card-cardholder", "small-text");
    cardName.classList.add("card-name", "small-text");

    cardHolder.textContent = card.cardholdder;
    cardName.textContent = card.name;

    // APPENDING
    cardNameBox.append(cardHolder, cardName);
    cardBox.append(cardLogoBox, cardNumberBox, cardNameBox);
    carouselItem.append(cardBox);
    myCardBox.append(carouselItem);
  }

  for (let card of otherCards) {
    // Main boxes
    let carouselItem = document.createElement("a");
    let cardBox = document.createElement("div");
    let cardLogoBox = document.createElement("div");
    let cardNumberBox = document.createElement("div");
    let cardNameBox = document.createElement("div");

    carouselItem.classList.add("carousel-item");
    cardBox.classList.add("card");
    cardLogoBox.classList.add("card-logo");
    cardNumberBox.classList.add("card-cardnum");
    cardNameBox.classList.add("card-footer");

    carouselItem.setAttribute("href", `#${card.id}`);

    // IMGs
    let bankLogo = document.createElement("img");
    let mpsLogo = document.createElement("img");

    bankLogo.classList.add("card-logo-img", "bank-logo");
    mpsLogo.classList.add("card-logo-img", "mps-logo");

    bankLogo.setAttribute("alt", "bank-logo");
    mpsLogo.setAttribute("alt", "mps-logo");

    for (let bank of bins) {
      //   console.log(bank);
      for (let el of bank.binsArr) {
        if (el === card.cardnum.slice(0, 6)) {
          cardBox.classList.add(`${bank.name}`);
          bankLogo.src = `img/${bank.name}-logo.png`;
        }
      }
    }

    if (card.cardnum.slice(0, 1) === "4") {
      mpsLogo.src = `img/visa-logo.png`;
    } else mpsLogo.src = `img/mc-logo.png`;

    cardLogoBox.append(bankLogo, mpsLogo);

    // Cardnum
    let cardOne = document.createElement("div");
    let cardTwo = document.createElement("div");
    let cardThree = document.createElement("div");
    let cardFour = document.createElement("div");

    cardOne.classList.add("card-cardnum__one");
    cardTwo.classList.add("card-cardnum__two");
    cardThree.classList.add("card-cardnum__three");
    cardFour.classList.add("card-cardnum__four");

    let number = card.cardnum;

    cardOne.textContent = number.slice(0, 4);
    cardTwo.textContent = number.slice(4, 8);
    cardThree.textContent = number.slice(8, 12);
    cardFour.textContent = card.cardnum.slice(12);

    cardNumberBox.append(cardOne, cardTwo, cardThree, cardFour);

    // Footer
    let cardHolder = document.createElement("div");
    let cardName = document.createElement("div");

    cardHolder.classList.add("card-cardholder", "small-text");
    cardName.classList.add("card-name", "small-text");

    cardHolder.textContent = card.cardholder;

    // APPENDING
    cardNameBox.append(cardHolder, cardName);
    cardBox.append(cardLogoBox, cardNumberBox, cardNameBox);
    carouselItem.append(cardBox);
    otherCardBox.append(carouselItem);
  }

  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems);
});

// Or with jQuery

$(document).ready(function() {
  $(".carousel").carousel({
    dist: -180,
    padding: 350,
    noWrap: false,
    numVisible: 1,
    indicators: true,
  });
});

const form = document.querySelector(".value");
const input = document.querySelector(".value-input");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  if (input.value !== "") {
    alert(`Сумма ${input.value} грн вдало відправлена!`);
    form.reset();
  } else {
    alert(`Вкажіть сумму`);
    event.preventDefault();
    return;
  }
}
