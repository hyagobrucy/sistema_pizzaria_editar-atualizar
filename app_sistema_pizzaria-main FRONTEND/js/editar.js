document.addEventListener("DOMContentLoaded", function () {
  function abrirModalEditar(id, nome, email, dataCriacao) {
    document.getElementById("usuarioId").value = id;
    document.getElementById("editarNome").value = nome;
    document.getElementById("editarEmail").value = email;
    document.getElementById("editarDataCriacao").value = dataCriacao;
  }

  document.querySelectorAll(".editar-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const id = this.dataset.id;
      const nome = this.parentElement.parentElement.cells[1].innerText;
      const email = this.parentElement.parentElement.cells[2].innerText;
      const dataCriacao = this.parentElement.parentElement.cells[3].innerText;

      abrirModalEditar(id, nome, email, dataCriacao);
    });
  });

  document
    .getElementById("salvarEdicoes")
    .addEventListener("click", function () {
      const id = document.getElementById("usuarioId").value;
      const usuarioAtualizado = {
        name: document.getElementById("editarNome").value,
        email: document.getElementById("editarEmail").value,
      };

      fetch(`http://localhost:8000/api/atualizar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioAtualizado),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            alert("Usuário atualizado com sucesso!");
            window.location.reload();
          } else {
            alert("Erro ao atualizar o usuário: " + data.message);
          }
        })
        .catch((error) => {
          alert("Erro na comunicação com a API: " + error);
        });
    });
});
