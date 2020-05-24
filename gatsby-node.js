exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/prj/",
    component: require.resolve("./src/templates/project.js"),
    context: {
      title: "My sweet title",
      subtitle: "My sweet subtitle",
      content:
        "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada.",
    },
  })
}
