window.addEventListener('scroll', onScroll)

onScroll()

function onScroll(){
  showNavOnScroll()
}

function showNavOnScroll(){
  if(scrollY>0){
    document.getElementById('navigation').classList.add('scroll')
  }else{
    document.getElementById('navigation').classList.remove('scroll')
  }
}


function mostrarInput(flag){
  var button = document.getElementById('button')
  let input = document.getElementById('float-input')

  if(flag){
    // input.style.display = 'block'
    input.style.opacity = '1'
    input.style.visibility = 'visible'
    input.style.transition = '600ms'
    // input.style.transform = 'translateX(0)'
    
    button.style.borderTopLeftRadius = '0'
    button.style.borderBottomLeftRadius = '0'

  }else{
    input.style.visibility = 'hidden'
    input.style.opacity = '0'

    button.style.borderTopLeftRadius = '30px'
    button.style.borderBottomLeftRadius = '30px'
    // input.style.transform = 'translateX(100%)'
    // input.style.display = 'none'

  }

}

function openMenu(){
  document.body.classList.add('menu-expandad')
}

function closeMenu(){
  document.body.classList.remove('menu-expandad')
}

let products = {
  data:[
      {
      id: 1,
      productName: "CONTROLE GAMER PS3/PS2/PC",
      price:"30",
      image:"https://i.postimg.cc/d1XWStfy/controle.jpg",
  },
  
  {   id: 2,
      productName: "Linha Intelbras",
      price:"5.50",
      image:"https://i.postimg.cc/wv3fVswz/intelbras.jpg",
  },

  {   id: 3,
      productName: "Headset HP",
      price:"90000",
      image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  
  { id: 4,
    productName: "Linha Intelbras",
    price:"5.50",
    image:"https://i.postimg.cc/wv3fVswz/intelbras.jpg",
  },

  { id: 5,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  
  { id: 6,
    productName: "Linha Intelbras",
    price:"5.50",
    image:"https://i.postimg.cc/wv3fVswz/intelbras.jpg",
  },

  { id: 7,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  { id: 8,
    productName: "Linha Intelbras",
    price:"5.50",
    image:"https://i.postimg.cc/wv3fVswz/intelbras.jpg",
  },

  { id: 9,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  
  { id: 10,
    productName: "Linha Intelbras",
    price:"5.50",
    image:"https://i.postimg.cc/wv3fVswz/intelbras.jpg",
  },

  { id: 11,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  { id: 12,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  { id: 13,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  { id: 14,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  { id: 15,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  { id: 16,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  },
  { id: 17,
    productName: "Headset HP",
    price:"90000",
    image:"https://i.postimg.cc/h4dMtnw2/headset.jpg",
  }

 ],

};

function mostrarSaibaMais(id){
  let a = document.getElementById(id)
  a.style.transition = '400ms'
  a.style.visibility = 'visible'
  a.style.opacity = '1'
}

function esconderSaibaMais(id){
  let a = document.getElementById(id)
  a.style.visibility = 'hidden'
  a.style.transition = '400ms'
  a.style.opacity = '0'
}


for(let i of products.data){
  // sessão teste
  let a = document.createElement("a")
  a.classList.add('popup')

  a.setAttribute('id', i.id)

  a.setAttribute('href', `https://wa.me/5587991770638?text=Olá, Sobre o produto "${i.productName.toUpperCase()}" : `)

  let divPopup = document.createElement('div')


  let h3 = document.createElement('h3')
  h3.innerText = 'Saiba Mais'

  divPopup.appendChild(h3)
  
  a.appendChild(divPopup)

  //Criando o card.
  let card = document.createElement("div");

  card.onmouseover = () => { mostrarSaibaMais(i.id) }
  card.onmouseout = () => { esconderSaibaMais(i.id) }

  card.appendChild(a)

  //O cartão deve ter categoria e deve ficar escondido inicialmente
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer)

  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //produto nome
  let name = document.createElement("h3");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  //preço
  let price = document.createElement("h4");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  
  card.appendChild(container);

  document.getElementById("products").appendChild(card);

}

//parameter passed from button (parameter same as category)
//parâmetro passado do botão (parâmetro igual a categoria)

function filterProduct(value) {
  //button classe codigo
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach(button => {
      //verifique se o valor é igual a innerText

      if(value.toUpperCase() == button.innerText.toUpperCase()){
          button.classList.add("active");
      }
      else{
          button.classList.remove("active");
      }
  });

  // selecione todos os cards
  let elements = document.querySelectorAll(".card");
  // loop through all cards
  elements.forEach(element => {
      //display all cards on "all" button click

      if (value == "Todos"){
          element.classList.remove("hide");
      }
      else{
          // check if element contains category calss
          if(element.classList.contains(value)){
              //display element based on category
              element.classList.remove("hide");
          }
          else{
              // hide other elements
              element.classList.add("hide");
          }
          
      }
  });

}
// Search button click
document.getElementById("search-input").addEventListener('keyup', () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");

  let cards = document.querySelectorAll(".card");
  console.log(searchInput);

  //loop through all elements
  elements.forEach((element, index) => {
      //check if text includes the search value
      if(element.innerText.includes(searchInput.toUpperCase())){
          //display matching card
          cards[index].classList.remove("hide");
      }

      else{
          //hide others
          cards[index].classList.add("hide");
      }
  })
} );

document.getElementById("float-input").addEventListener("keyup", () => {
  //initializations
  let searchInput = document.getElementById("float-input").value;
  let elements = document.querySelectorAll(".product-name");

  let cards = document.querySelectorAll(".card");
  console.log(searchInput);

  //loop through all elements
  elements.forEach((element, index) => {
      //check if text includes the search value
      if(element.innerText.includes(searchInput.toUpperCase())){
          //display matching card
          cards[index].classList.remove("hide");
      }

      else{
          //hide others
          cards[index].classList.add("hide");
      }
  })
} );

//inicialmente exibir todos os produtos

window.onload = () => {
  filterProduct('Todos')
  
  // ScrollReveal({
  //   origin: 'top',
  //   distance: '30px',
  //   duration: 800,
  // }).reveal(`
  // #home #products,
  // #products .card
  // `);

}
