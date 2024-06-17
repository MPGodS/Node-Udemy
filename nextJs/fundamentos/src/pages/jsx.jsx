import Layout from "@/components/Layout";

export default function Jsx() {
  const a = 1;
  const b = 2;
  const titulo = <h1>Titulo novo</h1>;

  function Teste() {
    return <strong>Super Força</strong>;
  }
  return (
    <Layout titulo="JSX">
      {titulo}
      <h1>jsx é legal</h1>
      <h1> {a * b} </h1>
      {Teste()}
    </Layout>
  );
}
