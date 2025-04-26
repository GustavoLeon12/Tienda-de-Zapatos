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
  
  const detallesZapatos = {
    'Zapato Casual Negro 1CYV004': 'Zapato casual ideal para uso diario, suela antideslizante y material sintético.',
    'Zapato Casual Cogñac 1CD6001': 'Diseño elegante en color coñac, perfecto para reuniones informales.',
    'Zapato Casual Canela 1CTI001': 'Acabado en canela con costuras reforzadas, excelente durabilidad.',
    'Zapato De Vestir Negro': 'Clásico zapato de vestir, perfecto para eventos formales.',
    'Zapato Urbanas Adidas': 'Zapatillas urbanas cómodas y modernas con tecnología Cloudfoam.',
    'Zapatillas Deportivas Adidas': 'Diseñadas para entrenamiento, suela resistente y gran amortiguación.',
    'Zapatillas Urbanas Adidas': 'Para uso diario, ligeras y con diseño moderno.',
    'Botines Casuales Footloose': 'Botines con forro interior acolchado, ideales para el invierno.',
};

function mostrarDetalles(nombreProducto) {
    const modal = document.getElementById("modal-detalle");
    const titulo = document.getElementById("titulo-detalle");
    const descripcion = document.getElementById("descripcion-detalle");

    titulo.innerText = nombreProducto;
    descripcion.innerText = detallesZapatos[nombreProducto] || 'Detalles no disponibles.';
    modal.style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal-detalle").style.display = "none";
}
