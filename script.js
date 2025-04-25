const productos = [
    {
      nombre: "Zapato Casual",
      imagen: "image/zapatocasual.jpg",
      precio: 49.99
    },
    {
      nombre: "Tenis Deportivo",
      imagen: "image/tenisdeportivo.jpg",
      precio: 59.99
    },
    {
      nombre: "Botín de Cuero",
      imagen: "image/botincuero.jpg",
      precio: 79.99
    }
  ];
  
  const lista = document.getElementById("product-list");
  
  productos.forEach((producto) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
  
    col.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$${producto.precio.toFixed(2)}</p>
          <button class="btn btn-primary mt-auto" onclick="agregarAlCarrito('${producto.nombre}')">Agregar al carrito</button>
        </div>
      </div>
    `;
  
    lista.appendChild(col);
  });
  
  function agregarAlCarrito(nombre) {
    alert(`Has agregado "${nombre}" al carrito.`);
  }
  