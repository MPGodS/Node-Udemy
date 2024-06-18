import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaouForm from "./useTabelaouForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaouForm();

  const [cliente, setCliente] = useState<Cliente>(
    new Cliente(null, null, null)
  );
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  function findAll() {
    repo.findAll().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }
  async function excluiCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    findAll();
  }

  function novoCliente() {
    setCliente(new Cliente(null, null, null));
    exibirFormulario();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    findAll();
  }

  return {
    cliente,
    clientes,
    salvarCliente,
    novoCliente,
    excluiCliente,
    selecionarCliente,
    findAll,
    tabelaVisivel,
    exibirTabela,
  };
}
function useFormOrTable(): { exibirFormulario: any; exibirTabela: any } {
  throw new Error("Function not implemented.");
}
