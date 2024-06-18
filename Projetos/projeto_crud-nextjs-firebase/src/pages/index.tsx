import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const clientes = [
    new Cliente("Matheus", 22, "1"),
    new Cliente("hadasa", 23, "2"),
    new Cliente("theusMa", 24, "3"),
    new Cliente("suetham", 25, "4"),
    new Cliente("matheuscomTH", 26, "5"),
  ];

  function clienteSelecionado(cliente: Cliente) {}

  return (
    <div
      className="flex h-screen justify-center items-center 
    bg-gradient-to-r from-purple-600 to-blue-500  text-white"
    >
      <Layout titulo="Cadastro Livro">
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
        ></Tabela>
      </Layout>
    </div>
  );
}
