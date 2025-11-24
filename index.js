  const images = [
    "/content/lateralI.webp",
    "/content/frontal.webp",
    "/content/lateralD.webp",
    "/content/salon1.webp",
    "/content/dormitorio1.webp",
    "/content/cocina1.webp",
    "/content/dormitorio2.webp",  
    "/content/salon2.webp",
    "/content/salon3.webp",
    "/content/aseo1.webp",
    "/content/comedor1.webp",
    "/content/dormitorio3.webp",
    "/content/aseo2.webp",
    "/content/dormitorio4.webp",
    "/content/aseo3.webp",
    "/content/dormitorio5.webp"
  ];
  let currentIndex = 0;

  function openModal(element, index) {
    currentIndex = index;
    document.getElementById('modalImage').src = images[currentIndex];
    document.getElementById('imageModal').classList.remove('hidden');
    document.addEventListener('keydown', handleKeydown);
  }

  function closeModal(event) {
    // Verifica si el clic fue en el fondo de la modal o en la "X"
    if (event.target.id === 'planoModal' || event.target.tagName === 'SPAN') {
      document.getElementById('planoModal').classList.add('hidden');
      document.removeEventListener('keydown', handleViviendaCloseKeydown);
    } else if (event.target.id === 'imageModal' || event.target.tagName === 'SPAN') {
      document.getElementById('imageModal').classList.add('hidden');
      document.removeEventListener('keydown', handleKeydown);
    }
  }

  function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    document.getElementById('modalImage').src = images[currentIndex];
  }

  function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    document.getElementById('modalImage').src = images[currentIndex];
  }

  function handleKeydown(event) {
    if (event.key === 'ArrowLeft') {
      prevImage(event);
    } else if (event.key === 'ArrowRight') {
      nextImage(event);
    } else if (event.key === 'Escape') {
      closeModal(event);
    }
  }

  function openIframeModal(url) {
    document.getElementById('modalIframe').src = url;
    document.getElementById('iframeModal').classList.remove('hidden');
    document.addEventListener('keydown', handleIframeKeydown);
  }

  function closeIframeModal(event) {
    if (event.target.id === 'iframeModal' || event.target.tagName === 'SPAN') {
      document.getElementById('iframeModal').classList.add('hidden');
      document.getElementById('modalIframe').src = '';
      document.removeEventListener('keydown', handleIframeKeydown);
    }
  }

  function handleIframeKeydown(event) {
    if (event.key === 'Escape') {
      closeIframeModal(event);
    }
  }

  const viviendaImages = [
    "/content/planoA.webp", // Índice 0
    "/content/planoB.webp", // Índice 1
    "/content/planoC.webp", // Índice 2
    "/content/planoD.webp",   // Índice 3
    "/content/planoE.webp",   // Índice 4
    "/content/planoF.webp",   // Índice 5
    "/content/planoG.webp",   // Índice 6
    "/content/planoH.webp",   // Índice 7
    "/content/planoI.webp",   // Índice 8
    "/content/planoJ.webp",   // Índice 9
    "/content/planoK.webp",   // Índice 10
  ];

  let currentViviendaIndex = 0;

  function openViviendaModal(index) {
    currentViviendaIndex = index;
    document.getElementById('modalPlan').src = viviendaImages[currentViviendaIndex];
    document.getElementById('planoModal').classList.remove('hidden');
    document.addEventListener('keydown', handleViviendaCloseKeydown);
  }

  function handleViviendaCloseKeydown(event) {
    if (event.key === 'Escape') {
      closeModal(event);
    }
  }

  // Función para abrir modal de fichas
  function openFichaModal(imagePath) {
    document.getElementById('modalPlan').src = imagePath;
    document.getElementById('planoModal').classList.remove('hidden');
    document.addEventListener('keydown', handleViviendaCloseKeydown);
  }

  // Función para abrir modal de galería
  function openGaleriaModal(imagePath) {
    document.getElementById('modalImage').src = imagePath;
    document.getElementById('imageModal').classList.remove('hidden');
    document.addEventListener('keydown', handleKeydown);
  }

  // Función para filtrar viviendas por tipo
  function filterViviendas(tipo) {
    const items = document.querySelectorAll('.vivienda-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Actualizar botones activos
    buttons.forEach(btn => {
      btn.classList.remove('active', 'bg-primary', 'text-white');
    });
    
    event.target.classList.add('active', 'bg-primary', 'text-white');
    
    // Filtrar elementos
    items.forEach(item => {
      if (tipo === 'all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(tipo)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  }