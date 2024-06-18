import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    salvarCliente,
    selecionarCliente,
    excluiCliente,
    novoCliente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes();

  return (
    <div
      className="flex h-screen justify-center items-center 
    bg-gradient-to-r from-purple-600 to-blue-500  text-white"
    >
      <Layout titulo="Cadastro Livro">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="blue" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluiCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
