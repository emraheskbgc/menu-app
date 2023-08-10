// all the menu items

const menu = [
  {
    id: 1,
    title: "Et Döner",
    category: "Doner",
    price: 50.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMm1qd4fYBUDu_ciq_QMo64HepoJqtvFEubg&usqp=CAU",
    desc: "Etin En Güzel Hali",
  },
  {
    id: 2,
    title: "Tavuk Döner",
    category: "Doner",
    price: 30.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQBWpt3LTE25oMm0tg2oLACkDZtjvaGFH1Q&usqp=CAU",
    desc: "Tavuğun En Güzel Hali",
  },
  {
    id: 3,
    title: "Tavuk Döner Dürüm",
    category: "Doner",
    price: 25.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqq3bspijUIB1uhV2l7vCzst60DcZhXVkLWg&usqp=CAU",
    desc: "Tavuk Dürümün En Güzel Hali",
  },
  {
    id: 4,
    title: "Adana Kebap",
    category: "Kebap",
    price: 255.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1yCuBXSSE0n_ZSufdhaa5B0KvxwRUa2DHg&usqp=CAU",
    desc: "En Güzel Kebap Adana Kebap",
  },
  {
    id: 5,
    title: "Urfa Kebap",
    category: "Kebap",
    price: 245.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTI1KkssNIZ-CuVZL80Kwpg4JtpqXN7hSLMg&usqp=CAU",
    desc: "En Güzel Kebap Urfa Kebap",
  },
  {
    id: 6,
    title: "Ciğer Kebap",
    category: "Kebap",
    price: 295.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6Mfr08bU2QlaEbUAjbceNdCfCAsnovE3iA&usqp=CAU",
    desc: "En Güzel Kebap Ciğer Kebap",
  },
  {
    id: 7,
    title: "Mercimek Çorba",
    category: "Corba",
    price: 95.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGAQmXuhgeFuqT64li83_WlaARbJR1ZH1oA&usqp=CAU",
    desc: "En Güzel Çorba",
  },
  {
    id: 8,
    title: "Kelle Paça Çorba",
    category: "Corba",
    price: 195.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6e4WbM8NyMPI1hQecBpZ9ByZRekk799Zfg&usqp=CAU",
    desc: "En Güzel Çorba",
  },
  {
    id: 9,
    title: "Ezogelin Çorba",
    category: "Corba",
    price: 85.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsTlIl6NX39kE6kZHGQ_zeZ5CuoVVAZeiYw&usqp=CAU",
    desc: "En Güzel Çorba",
  },
];

// all the button find
let allButton = document.querySelector("#allbtn");
let donerButton = document.querySelector("#donerbtn");
let kebapButton = document.querySelector("#kebapbtn");
let corbaButton = document.querySelector("#corbabtn");

window.onload = allItems;
// all butonuna basılınca tüm menü arrayini listeleme
allButton.addEventListener("click", allItems);

function allItems() {
  const senctionCenterDom = document.querySelector(".section-center");
  let menuItems = "";
  menu.forEach((item) => {
    menuItems += `
        <div class="menu-items col-lg-5 col-sm-4 " >
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
        <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">
        ${item.desc}
        </div>
        </div>
        </div>
    
    `;
  });
  senctionCenterDom.innerHTML = menuItems;
}
// Döner butonuna basınca kategorisi korea olanların listelenmesi
donerButton.addEventListener("click", donerItems);

function donerItems() {
  const sectionCenterDOM = document.querySelector(".section-center");
  const donerYemekleri = menu
    .filter((item) => item.category === "Doner")
    .map((item) => {
      return `
      <div class="menu-items col-lg-5 col-sm-4 " >
      <img src="${item.img}" alt="${item.title}" class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
      ${item.desc}
      </div>
      </div>
      </div>
  
  `;
    })
    .join("");

  sectionCenterDOM.innerHTML = donerYemekleri;
}
// Kebap butonuna basınca kategorisi korea olanların listelenmesi
kebapButton.addEventListener("click", kebapItems);

function kebapItems() {
  const sectionCenterDOM = document.querySelector(".section-center");
  const kebapYemekleri = menu
    .filter((item) => item.category === "Kebap")
    .map((item) => {
      return `
      <div class="menu-items col-lg-5 col-sm-4 " >
      <img src="${item.img}" alt="${item.title}" class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
      ${item.desc}
      </div>
      </div>
      </div>
  
  `;
    })
    .join("");

  sectionCenterDOM.innerHTML = kebapYemekleri;
}
// Çorba butonuna basınca kategorisi korea olanların listelenmesi
corbaButton.addEventListener("click", corbaItems);

function corbaItems() {
  const sectionCenterDOM = document.querySelector(".section-center");
  const corbaYemekleri = menu
    .filter((item) => item.category === "Corba")
    .map((item) => {
      return `
      <div class="menu-items col-lg-5 col-sm-4 " >
      <img src="${item.img}" alt="${item.title}" class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
      ${item.desc}
      </div>
      </div>
      </div>
  
  `;
    })
    .join("");

  sectionCenterDOM.innerHTML = corbaYemekleri;
}
