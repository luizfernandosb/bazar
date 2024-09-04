const products = [
  {
    id: 1,
    brand: "Nike",
    nome: "Tênis Air Max",
    tipo: "calçado",
    valorOriginal: "599,90",
    valorAPagar: "399,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 2,
    brand: "Adidas",
    nome: "Camiseta Essentials",
    tipo: "camiseta",
    valorOriginal: "129,90",
    valorAPagar: "89,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 3,
    brand: "Gucci",
    nome: "Bolsa Marmont",
    tipo: "bolsa",
    valorOriginal: "7.999,90",
    valorAPagar: "5.299,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 4,
    brand: "Prada",
    nome: "Sapato Social",
    tipo: "calçado",
    valorOriginal: "4.999,90",
    valorAPagar: "3.299,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 5,
    brand: "Levi's",
    nome: "Calça Jeans 501",
    tipo: "calça",
    valorOriginal: "349,90",
    valorAPagar: "249,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 6,
    brand: "Ray-Ban",
    nome: "Óculos Aviador",
    tipo: "acessório",
    valorOriginal: "799,90",
    valorAPagar: "549,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 7,
    brand: "Chanel",
    nome: "Perfume Coco Mademoiselle",
    tipo: "perfume",
    valorOriginal: "599,90",
    valorAPagar: "429,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 8,
    brand: "Tommy Hilfiger",
    nome: "Camisa Polo",
    tipo: "camisa",
    valorOriginal: "249,90",
    valorAPagar: "179,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 9,
    brand: "Gucci",
    nome: "Carteira GG Marmont",
    tipo: "acessório",
    valorOriginal: "1.999,90",
    valorAPagar: "1.399,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 10,
    brand: "Nike",
    nome: "Shorts de Corrida",
    tipo: "bermuda",
    valorOriginal: "149,90",
    valorAPagar: "99,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 11,
    brand: "Lacoste",
    nome: "Vestido Polo",
    tipo: "vestido",
    valorOriginal: "499,90",
    valorAPagar: "349,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 12,
    brand: "Havaianas",
    nome: "Chinelo Slim",
    tipo: "calçado",
    valorOriginal: "49,90",
    valorAPagar: "29,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 13,
    brand: "Rolex",
    nome: "Relógio Submariner",
    tipo: "acessório",
    valorOriginal: "45.999,90",
    valorAPagar: "38.999,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 14,
    brand: "Zara",
    nome: "Blazer Slim Fit",
    tipo: "blazer",
    valorOriginal: "399,90",
    valorAPagar: "279,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 15,
    brand: "Gap",
    nome: "Moletom Logo",
    tipo: "moletom",
    valorOriginal: "249,90",
    valorAPagar: "179,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 16,
    brand: "Hermès",
    nome: "Cinto H Constance",
    tipo: "acessório",
    valorOriginal: "3.999,90",
    valorAPagar: "2.799,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 17,
    brand: "Louis Vuitton",
    nome: "Bolsa Speedy",
    tipo: "bolsa",
    valorOriginal: "7.499,90",
    valorAPagar: "4.999,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 18,
    brand: "Gucci",
    nome: "Tênis Ace",
    tipo: "calçado",
    valorOriginal: "3.599,90",
    valorAPagar: "2.599,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 19,
    brand: "Adidas",
    nome: "Agasalho 3 Listras",
    tipo: "agasalho",
    valorOriginal: "399,90",
    valorAPagar: "299,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 20,
    brand: "Dolce & Gabbana",
    nome: "Óculos de Sol",
    tipo: "acessório",
    valorOriginal: "1.199,90",
    valorAPagar: "799,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 21,
    brand: "Fendi",
    nome: "Bolsa Peekaboo",
    tipo: "bolsa",
    valorOriginal: "13.999,90",
    valorAPagar: "9.999,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 22,
    brand: "Calvin Klein",
    nome: "Calça Skinny",
    tipo: "calça",
    valorOriginal: "299,90",
    valorAPagar: "199,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 23,
    brand: "Tom Ford",
    nome: "Perfume Black Orchid",
    tipo: "perfume",
    valorOriginal: "799,90",
    valorAPagar: "599,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 24,
    brand: "Puma",
    nome: "Tênis Running",
    tipo: "calçado",
    valorOriginal: "299,90",
    valorAPagar: "199,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 25,
    brand: "Hugo Boss",
    nome: "Relógio Chronograph",
    tipo: "acessório",
    valorOriginal: "2.499,90",
    valorAPagar: "1.799,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 26,
    brand: "Versace",
    nome: "Camisa Silk",
    tipo: "camisa",
    valorOriginal: "2.499,90",
    valorAPagar: "1.699,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 27,
    brand: "Balenciaga",
    nome: "Bolsa City",
    tipo: "bolsa",
    valorOriginal: "5.999,90",
    valorAPagar: "4.299,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 28,
    brand: "Supreme",
    nome: "Moletom Box Logo",
    tipo: "moletom",
    valorOriginal: "2.999,90",
    valorAPagar: "1.999,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 29,
    brand: "Burberry",
    nome: "Trench Coat",
    tipo: "casaco",
    valorOriginal: "7.999,90",
    valorAPagar: "5.999,90",
    imagem: "img/bolsa.png"
  },
  {
    id: 30,
    brand: "Salvatore Ferragamo",
    nome: "Sapato Loafer",
    tipo: "calçado",
    valorOriginal: "2.499,90",
    valorAPagar: "1.699,90",
    imagem: "img/bolsa.png"
  }
];


const productsContainer = document.querySelector(".products");

products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.className = "product";
  productElement.innerHTML = `
<img src="${product.imagem}" alt="" />
          <p class="brand" id="brand">${product.brand}</p>
          <p class="product-name" id="product-name">${product.nome}</p>
          <p class="final-price" id="final-price">R$ <span>${product.valorOriginal}</span></p>
          <p class="first-price" id="first-price">R$ <span>${product.valorAPagar}</span></p>
`;
  productsContainer.appendChild(productElement);
});
