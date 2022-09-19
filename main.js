const idinput =document.getElementById('idInput');
const nombrePizza =document.getElementById('pName');
const precioPizza =document.getElementById('pPrice');
const ingredientesPizza =document.getElementById('pIngr')
const cards =document.querySelector('.cards')


const pizzas = [
    {
      id: 1,
      nombre: "Muzzarela",
      precio: 1000,
      ingredientes: ["Muzzarela", "Aceitunas"],
      imagen: './Assets/img/Muzza.png'
    },
    {
      id: 2,
      nombre: "Napolitana",
      precio: 1200,
      ingredientes: ["Muzzarela", "Tomate"],
      imagen: './Assets/img/Napo.png'
    },
    {
      id: 3,
      nombre: "Margarita",
      precio: 1500,
      ingredientes: ["Muzzarela", "Aceite de Oliva", "Albahaca"],
      imagen: './Assets/img/Marga.png'
    },
    {
      id: 4,
      nombre: "Jamon",
      precio: 1700,
      ingredientes: ["Muzzarela", "Jamon", "Morron"],
      imagen: './Assets/img/Jam.png'
    },
    {
      id: 5,
      nombre: "Especial",
      precio: 2000,
      ingredientes: ["Muzzarela", "Panceta", "Cheddar", "Verdeo"],
      imagen: './Assets/img/Espe.png'
    },
    {
      id: 6,
      nombre: "Mini",
      precio: 500,
      ingredientes: ["Muzzarela"],
      imagen: './Assets/img/Mini.png'
    },
  ];

let storedPizzas = JSON.parse(localStorage.getItem('pizzas')) || [];

const saveLocalStorage = pizzas => {
  localStorage.setItem('pizzas', JSON.stringify(pizzas));
};

const renderPizza = e => {
    e.preventDefault();
     if (!pizzaSearch(pizzas)){
        cards.innerHTML = "No existe la pizza seleccionada, por favor elija otro numero"
        return
    } else {
        cards.innerHTML = renderCard(pizzaSearch(pizzas))
    }
}

const pizzaSearch = () => {
    const valor = getValue();
    const laPizza = pizzas.find(pizza => pizza.id == valor)
    return laPizza
}

const getValue = () => {
    const valor = idinput.value
    return valor;
}


const renderCard = (pizza) => {
  const { nombre, precio, ingredientes, imagen} = pizza
  return `
  <div class="card-info">
  <h2>Tipo: ${pizzaSearch(pizzas).nombre}</h2>
  <img src="${pizzaSearch(pizzas).imagen}" alt="${pizzaSearch(pizzas).nombre}" class="card-img">
  <small>Ingredientes: ${pizzaSearch(pizzas).ingredientes}</small>
  <p>Precio: $${pizzaSearch(pizzas).precio}</p>
  </div>`
}

const init = () => {
  saveLocalStorage(pizzas)
  searchPizza.addEventListener ('submit', renderPizza)
}

init();
