// Definir el array de productos
const products = [
  { id: 1, name: 'Becopets Dog Toys - Recycled Plastic Toys - George The Giraffe', brand: 'Petstages', price: 10.99, image: 'https://petstore.com/cdn/shop/products/035585111315_d6282389-4ae4-407f-8017-e1e146accc97_1080x.jpg?v=1619215449', discount: '%39', previousPrice: 20.75 },
  { id: 2, name: 'Becopets Dog Toys - Recycled Plastic Toys - Toby The Teddy', brand: 'Betcopets', price: 12.99, image: 'https://petstore.com/cdn/shop/products/788169031423_1080x.jpg?v=1619218627', discount: '%29', previousPrice: 28.55 },
  { id: 3, name: 'GiGwi Push-To-Mute Series - Owl', brand: 'GiGwi', price: 15.99, image: 'https://petstore.com/cdn/shop/products/035585775180_a4935f0e-eae4-4cef-b9ca-50b23064d4e4_1080x.jpg?v=1619215272', discount: '%15', previousPrice: 28.75 },
  { id: 4, name: 'Barkbutler Dog Toys - Crazy Eight', brand: 'Barkbutler', price: 15.99, image: 'https://www.petsy.online/cdn/shop/products/Small_Size.png?v=1622542704&width=832', discount: '%45', previousPrice: 28.75 },
  { id: 5, name: 'Becopets Dog Toys - Recycled Plastic Toys - Toby The Teddy', brand: 'FOFOS', price: 15.99, image: 'https://www.petsy.online/cdn/shop/products/1_759961db-ac25-4ca5-bc61-1bbafd5fc10a.png?v=1582632676&width=832', discount: '%20', previousPrice: 28.75 },
  { id: 6, name: 'Becopets Dog Toys - Recycled Plastic Toys - George The Giraffe', brand: 'Chuckit!', price: 10.99, image: 'https://www.petsy.online/cdn/shop/products/1_22a811b5-68f0-457d-86f4-97cddf24ea28.png?v=1582634631&width=832', discount: '%10', previousPrice: 20.75 },
  { id: 7, name: 'GiGwi Push-To-Mute Series - Owl', brand: 'GiGwi', price: 10.99, image: 'https://www.petsy.online/cdn/shop/products/1_1806a3dd-e0d1-42f3-9011-0f5077d85831.png?v=1622541697&width=832', discount: '%5', previousPrice: 20.75 },
  { id: 8, name: 'Becopets Dog Toys - Recycled Plastic Toys - George The Giraffe', brand: 'Becopets', price: 15.99, image: 'https://www.petsy.online/cdn/shop/products/Trixie_Playing_Rope_with_Two_Hand_Loops_-_D-TRI-PL-006.png?v=1582634262&width=832', discount: '%16', previousPrice: 28.75 },
  { id: 9, name: 'Becopets Dog Toys - Recycled Plastic Toys - Toby The Teddy', brand: 'Trixie', price: 15.99, image: 'https://www.petsy.online/cdn/shop/products/1_767aa667-7391-4bc2-9d6f-63cafb64ca7e_110x110@2x.png?v=1622541769', discount: '%21', previousPrice: 20.75 },
  { id: 10, name: 'Becopets Dog Toys - Recycled Plastic Toys - George The Giraffe', brand: 'Trixie', price: 15.99, image: 'https://www.petsy.online/cdn/shop/products/1_50dc09d2-c4f2-4a4e-907d-2c0fcc31bf7b.png?v=1582600822&width=832', discount: '%12', previousPrice: 28.75 },
  { id: 11, name: 'Becopets Dog Toys - Recycled Plastic Toys - Toby The Teddy', brand: 'GiGwi', price: 15.99, image: 'https://www.petsy.online/cdn/shop/products/1_ca115f08-299e-4495-b751-ed6a45a07890.png?v=1582603831&width=832', discount: '%15', previousPrice: 28.75 },
  { id: 12, name: 'GiGwi Push-To-Mute Series - Owl', brand: 'M-Pets', price: 10.99, image: 'https://www.petsy.online/cdn/shop/products/3_892057c3-e6b0-4951-a019-3fa8e475646e.png?v=1596264475&width=832', discount: '%18', previousPrice: 20.75 }
];

const services = [
  {
    id: 1,
    name: 'Vacunación',
    category: 'Salud Preventiva',
    price: 30.00,
    description: 'Aplicación de vacunas esenciales para perros y gatos.',
    image: 'https://cdn.pixabay.com/photo/2020/03/31/16/18/cat-4988408_1280.jpg',
  },
  {
    id: 2,
    name: 'Consulta General',
    category: 'Diagnóstico',
    price: 25.00,
    description: 'Evaluación completa para identificar problemas de salud.',
    image: 'https://img.freepik.com/free-photo/close-up-veterinary-doctor-taking-care-pet_23-2149267934.jpg?t=st=1733005362~exp=1733008962~hmac=a107d6499ca19009072bd9687715bb2b6c31536d010cb59386f94f527535e24c&w=2000',
  },
  {
    id: 3,
    name: 'Desparasitación',
    category: 'Salud Preventiva',
    price: 15.00,
    description: 'Eliminación de parásitos internos y externos.',
    image: 'assets/images/products/services/dog-91765_1280.jpg',
  },
  {
    id: 4,
    name: 'Cirugía menor',
    category: 'Procedimientos quirúrgicos',
    price: 120.00,
    description: 'Cirugías menores como esterilización y castración.',
    image: 'assets/images/products/services/markus-winkler-PcKhVNNyEio-unsplash.jpg',
  },
  {
    id: 5,
    name: 'Peluquería y baño',
    category: 'Estética',
    price: 40.00,
    description: 'Baño, corte de pelo y limpieza general de tu mascota.',
    image: 'https://images.pexels.com/photos/19145895/pexels-photo-19145895/free-photo-of-groomer-washing-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    name: 'Guardería',
    category: 'Cuidado',
    price: 50.00,
    description: 'Cuidado diario con atención personalizada para tu mascota.',
    image: 'https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-mascota_23-2149143880.jpg?t=st=1733005742~exp=1733009342~hmac=2879ab46c9f1b8e6c29814b79678730e19a7aecbe2f952b0211aad697be76270&w=2000',
  },
  {
    id: 7,
    name: 'Odontología',
    category: 'Salud dental',
    price: 45.00,
    description: 'Limpieza dental y tratamientos especializados.',
    image: 'https://img.freepik.com/foto-gratis/veterinarios-tiro-medio-que-ayudan-gato_23-2148302198.jpg?t=st=1733005777~exp=1733009377~hmac=254300f7c2f5587f7a05db1f103d0cd489117eab850ab669483bb7700de60594&w=2000',
  },
  {
    id: 8,
    name: 'Radiografías',
    category: 'Diagnóstico',
    price: 60.00,
    description: 'Radiografías para detectar problemas internos.',
    image: 'https://img.freepik.com/foto-gratis/concepto-medicina-cuidado-mascotas-personas-medico-veterinario-perros-clinica-veterinaria_155003-7669.jpg?t=st=1733005802~exp=1733009402~hmac=5c3224d1e5708d2d97b04642f00fd6b1ea26a186efada58a4cbd06306c64e1e0&w=2000',
  },
  {
    id: 9,
    name: 'Rehabilitación y fisioterapia',
    category: 'Recuperación',
    price: 70.00,
    description: 'Terapias personalizadas para mejorar movilidad.',
    image: 'https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-perro_23-2149100198.jpg?t=st=1733005856~exp=1733009456~hmac=85f13ac169d53fa64655a4470695320301b927b844d41705f54a7d405a53bed1&w=2000',
  },
  {
    id: 10,
    name: 'Control prenatal',
    category: 'Reproducción',
    price: 50.00,
    description: 'Seguimiento completo para mascotas embarazadas.',
    image: 'https://images.pexels.com/photos/6234635/pexels-photo-6234635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const promotions = [
  {
    id: 1,
    title: 'Descuento en vacunación',
    description: 'Obtén un 20% de descuento en la vacunación de tu mascota.',
    discount: '20%',
    validUntil: '2024-12-31',
    image: 'https://img.freepik.com/free-psd/organic-dog-food-square-flyer_23-2148457506.jpg?t=st=1732996382~exp=1732999982~hmac=cf6affcbdcbde67bc1e9df69f942b0f4901cd60a05f039b08313d0bb91b17e5a&w=1380',
  },
  {
    id: 2,
    title: '2x1 en baños',
    description: 'Trae a dos mascotas y paga solo un baño.',
    discount: '50%',
    validUntil: '2024-11-30',
    image: 'https://img.freepik.com/free-psd/organic-pet-food-banner-template_23-2148457497.jpg?t=st=1732996505~exp=1733000105~hmac=bb0489728b888e582d0affeefa19d717224a1f88fadd573e80d8491c34293a32&w=2000',
  },
  {
    id: 3,
    title: 'Consulta gratis',
    description: 'Primera consulta gratuita para nuevos clientes.',
    discount: '100%',
    validUntil: '2024-12-15',
    image: 'https://img.freepik.com/free-psd/organic-pet-food-banner-template_23-2148457504.jpg?t=st=1732996532~exp=1733000132~hmac=e97c43c32f6d3bc347a1d5a202da200e35de21a11cdc48bdeb65860ec17088ad&w=2000',
  },
  {
    id: 4,
    title: 'Descuento en cirugía',
    description: '10% de descuento en esterilización y castración.',
    discount: '10%',
    validUntil: '2025-01-31',
    image: 'https://img.freepik.com/free-psd/3d-rendering-sales-background_23-2150135501.jpg?t=st=1732996642~exp=1733000242~hmac=6de75d1d1f01d74c030b8e7f57e50795101fe917a8f68f7cf1292004cf271bd0&w=1800',
  },
  {
    id: 5,
    title: 'Kit dental gratis',
    description: 'Llévate un kit dental gratis al contratar limpieza dental.',
    discount: 'Incluido',
    validUntil: '2024-12-20',
    image: 'https://img.freepik.com/free-psd/dog-food-discount-poster-design_23-2148606936.jpg?t=st=1733004833~exp=1733008433~hmac=8fb6505dbe07ce6fee1fc3cb1622a8e0a866aab335d2b25166ac1138ed5fc461&w=1380',
  },
  {
    id: 6,
    title: 'Desparasitación al 50%',
    description: 'Mitad de precio en desparasitación de perros y gatos.',
    discount: '50%',
    validUntil: '2024-12-10',
    image: 'https://img.freepik.com/free-vector/realistic-black-friday-banner_52683-48523.jpg?t=st=1733004888~exp=1733008488~hmac=84e42f72baee5b6821d204806e65294eebf92aec32e4f2cf63550863c6cef9be&w=1380',
  },
  {
    id: 7,
    title: 'Paquete de cuidado completo',
    description: 'Paga un paquete y recibe baño, corte y desparasitación.',
    discount: '15%',
    validUntil: '2024-12-31',
    image: 'https://img.freepik.com/free-vector/veterinary-banner-template_23-2148982837.jpg?t=st=1733004969~exp=1733008569~hmac=73a7d2791edca8be0317c66053aaab26a315d900ebfca82135e38f20c41074e9&w=2000',
  },
  {
    id: 8,
    title: 'Radiografía gratis',
    description: 'Radiografía gratuita al contratar consulta general.',
    discount: 'Incluido',
    validUntil: '2024-12-25',
    image: 'https://img.freepik.com/free-psd/horizontal-banner-template-dog-lovers-with-female-owner_23-2149004157.jpg?t=st=1733005049~exp=1733008649~hmac=61c0798b44fa1d1ad1c5f9f0f2b9741fcbdfd6b9981a396f58dbd04e5fd2947a&w=2000',
  },
  {
    id: 9,
    title: 'Descuento en fisioterapia',
    description: '20% de descuento en sesiones de rehabilitación y fisioterapia.',
    discount: '20%',
    validUntil: '2025-01-15',
    image: 'https://img.freepik.com/free-vector/hand-drawn-veterinary-clinic-facebook-template_23-2149675825.jpg?t=st=1733005069~exp=1733008669~hmac=31dc870e2c24bea1fc8ef86c8bfbba824e249df50d197b44434cbfacbbb119d1&w=2000',
  },
  {
    id: 10,
    title: 'Adopta y gana',
    description: 'Adopta una mascota y recibe una consulta general gratuita.',
    discount: '100%',
    validUntil: '2024-12-31',
    image: 'https://img.freepik.com/psd-gratis/plantilla-banner-horizontal-tienda-mascotas_23-2148690481.jpg?t=st=1733005138~exp=1733008738~hmac=a721aed5ad09290ec7895a587db1b4a2d82d8cb591fcf2790fc16f6607681ff6&w=2000',
  },
];

// Llamar a la función para mostrar los productos
displayProducts();
displayServices();
displayPromotions();

// Función para mostrar los productos en el grid
function displayProducts() {
  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = ''; // Limpiar el grid antes de agregar productos

  for (let product of products) {
    const card = `
  <div class="col-md-4 mb-4">
      <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <a href="#" class="brand">${product.brand}</a>
              <div class=card-text>
              <p class="previousPrice">₹ ${product.previousPrice.toFixed(2)}</p>
              <p class="price"> ₹ ${product.price.toFixed(2)}</p>
              <span class="discount">Save ${product.discount}</span>
              </div>
          </div>
          <a href="#" class="btn btn-custom">Agregar al carrito</a>
      </div>
  </div>
`;
    productGrid.innerHTML += card; // Agregar la tarjeta al grid
  }
}
function displayServices() {
  const serviceGrid = document.getElementById('service-grid');
  serviceGrid.innerHTML = '';

  for (let service of services) {
    const card = `
      <div class="col">
          <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style="background-image: url('${service.image}');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${service.name}</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto">
                          <img src="https://img.freepik.com/free-vector/cute-doggy-illustration-mascot-logo-design_779267-1029.jpg?t=st=1733005971~exp=1733009571~hmac=2eff28c60fbfaff8f642c3f64494a508a35df381c7258690a304febb3989c844&w=1380" alt="Bootstrap" width="32" height="32"
                              class="rounded-circle border border-white">
                      </li>
                      <li class="d-flex align-items-center me-3">
                          <svg class="bi me-2" width="1em" height="1em">
                              <use xlink:href="#geo-fill" />
                          </svg>
                          <small>Earth</small>
                      </li>
                      <li class="d-flex align-items-center">
                          <svg class="bi me-2" width="1em" height="1em">
                              <use xlink:href="#calendar3" />
                          </svg>
                          <small>3d</small>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
`;
    serviceGrid.innerHTML += card;
  }
}
function displayPromotions(){
  const promotionGrid = document.getElementById('promotion-Grid');
  promotionGrid.innerHTML = ''; // Limpiar el grid antes de agregar productos

  for (let promotion of promotions){
    const card = `
    <div class="card card-promotion" style="width: 18rem;">
      <img src="${promotion.image}" class="card-img-top" style="margin-top = 5px;">
      <div class="card-body text-center">
        <h5 class="card-title">${promotion.title}</h5>
        <p class="card-text">${promotion.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Discount: ${promotion.discount}</li>
        <li class="list-group-item">Valid until: ${promotion.validUntil}</li>
      </ul>
      <div class="card-body text-center">
        <a href="#" class="btn btn-primary">Go to promotion</a>
      </div>
    </div>
`;
    promotionGrid.innerHTML += card;
  };

}

function navigateTo(page) {
  window.location.href = page; // Redirige al archivo especificado
}
