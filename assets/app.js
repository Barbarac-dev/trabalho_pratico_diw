const destinos = [
    {
      id: 1,
      nome: "Rio de Janeiro",
      descricao: "Cidade maravilhosa, com praias e pontos turísticos incríveis.",
      estado: "RJ",
      categoria: "Praia",
      imagem_principal: "img/rio.jpg",
      destaque: true,
      detalhes: "Inclui o Cristo Redentor, Pão de Açúcar e Copacabana.",
      imagens_complementares: [
        { src: "img/rio1.jpg", descricao: "Cristo Redentor" },
        { src: "img/rio2.jpg", descricao: "Pão de Açúcar" }
      ]
    },
    {
      id: 2,
      nome: "Foz do Iguaçu",
      descricao: "Destino imperdível com as Cataratas do Iguaçu.",
      estado: "PR",
      categoria: "Natureza",
      imagem_principal: "img/foz.jpg",
      destaque: true,
      detalhes: "Além das cataratas, tem o Parque das Aves e Itaipu.",
      imagens_complementares: [
        { src: "img/foz1.jpg", descricao: "Cataratas do Iguaçu" },
        { src: "img/foz2.jpg", descricao: "Parque das Aves" }
      ]
    }
  ];
  

  document.addEventListener("DOMContentLoaded", () => {
    const btnBusca = document.getElementById("btnBusca");
    const inputBusca = document.getElementById("txtBusca");

    btnBusca.addEventListener("click", () => {
        const termo = inputBusca.value.trim();
        if (termo) {
            alert(`Você buscou por: ${termo}`);
            
        } else {
            alert("Digite algo para buscar.");
        }
    });
});

  // Espera o DOM estar carregado
  document.addEventListener("DOMContentLoaded", function () {
    // Mapeia os links do nav aos seus respectivos cards
    document.getElementById("linkRoteiro").addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("roteiro").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("linkGastronomia").addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("gastronomia").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("linkHospedagem").addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("hospedagem").scrollIntoView({ behavior: "smooth" });
    });
  });

  
  

  document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnRoteiro");

    botao.addEventListener("click", () => {
      window.location.href = "index02.html"; 
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnGastronomia");

    botao.addEventListener("click", () => {
      window.location.href = "index03.html"; 
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnHospedagem");

    botao.addEventListener("click", () => {
      window.location.href = "index04.html"; 
    });
  });




    
    if (typeof bootstrap !== "undefined") {
        const carrosselElemento = document.querySelector("#carouselExampleDark");
        if (carrosselElemento) {
            new bootstrap.Carousel(carrosselElemento);
        }
    } else {
        console.warn("Bootstrap JS não carregado corretamente.");
    }

    document.addEventListener("DOMContentLoaded", function () {
      
      document.getElementById("LinkAmericaN").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("norte").scrollIntoView({ behavior: "smooth" });
      });
  
      document.getElementById("LinkAmericaC").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("central").scrollIntoView({ behavior: "smooth" });
      });
  
      document.getElementById("LinkAmericaS").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("sul").scrollIntoView({ behavior: "smooth" });
      });

      document.getElementById("Linkafrica").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("africa").scrollIntoView({ behavior: "smooth" });
      });
  
      document.getElementById("Linkasia").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("asia").scrollIntoView({ behavior: "smooth" });
      });
  
      document.getElementById("LinkEuropa").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("europa").scrollIntoView({ behavior: "smooth" });
      });

      document.getElementById("LinkOceania").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("oceania").scrollIntoView({ behavior: "smooth" });
      });
  
      document.getElementById("LinkAntartida").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("antartida").scrollIntoView({ behavior: "smooth" });
      });
    });



  // Página Inicial
  if (document.getElementById("destaquesCarousel")) {
    const destaques = destinos.filter(d => d.destaque);
    const carousel = document.getElementById("destaquesCarousel");
  
    destaques.forEach((d, i) => {
      carousel.innerHTML += `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <img src="${d.imagem_principal}" class="d-block w-100" alt="${d.nome}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${d.nome}</h5>
            <p>${d.descricao}</p>
          </div>
        </div>`;
    });
  
    const cards = document.getElementById("destinosCards");
    destinos.forEach(destino => {
      cards.innerHTML += `
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${destino.imagem_principal}" class="card-img-top" alt="${destino.nome}">
            <div class="card-body">
              <h5 class="card-title">${destino.nome}</h5>
              <p class="card-text">${destino.descricao}</p>
              <a href="detalhes.html?id=${destino.id}" class="btn btn-primary">Ver mais</a>
            </div>
          </div>
        </div>`;
    });
  }

  // Simulação de login com nome do aluno salvo no localStorage
window.addEventListener('DOMContentLoaded', () => {
    const areaAluno = document.getElementById('areaAluno');
    const nomeAluno = localStorage.getItem('alunoNome');

    if (nomeAluno) {
        areaAluno.innerHTML = `
            <img src="img/aluno.png" alt="Ícone do aluno" width="30">
            <span>Olá, ${nomeAluno}!</span>
            <a href="#" id="logout">Sair</a>
        `;

        document.getElementById('logout').addEventListener('click', () => {
            localStorage.removeItem('alunoNome');
            location.reload();
        });
    }
});

  
  // Página de Detalhes
  if (window.location.pathname.includes("detalhes.html")) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const destino = destinos.find(d => d.id === id);
  
    if (destino) {
      document.getElementById("infoDestino").innerHTML = `
        <h2>${destino.nome}</h2>
        <p><strong>Estado:</strong> ${destino.estado}</p>
        <p><strong>Categoria:</strong> ${destino.categoria}</p>
        <p>${destino.detalhes}</p>
        <img src="${destino.imagem_principal}" alt="${destino.nome}" class="img-fluid mb-3"/>`;
  
      const fotosDiv = document.getElementById("fotosDestino");
      destino.imagens_complementares.forEach(img => {
        fotosDiv.innerHTML += `
          <div class="col-md-4">
            <div class="card">
              <img src="${img.src}" class="card-img-top" alt="${img.descricao}">
              <div class="card-body">
                <p class="card-text">${img.descricao}</p>
              </div>
            </div>
          </div>`;
      });
    }
  }
  