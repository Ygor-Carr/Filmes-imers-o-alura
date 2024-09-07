function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
      section.innerHTML="</p>Campo Vazio. Nada foi encontrado</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      titulo=dado.titulo.toLowerCase()
      descricao=dado.descricao.toLowerCase()
      tags=dado.tags.toLowerCase()

      if (dado.titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href=${dado.link} target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <p class="atores">${dado.atores}</p>
        <p class="diretor">${dado.diretor}</p>
        <p class="genero">${dado.genero}</p>
        <p class="ano-lancamento">${dado.anoLancamento}</p>
      </div>
    `;
      }
    }

    if (!resultados){
      resultados=="</p>Nenhum filme encontrado</p>"
    }
  
    // Atribui a string com os resultados formatados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }