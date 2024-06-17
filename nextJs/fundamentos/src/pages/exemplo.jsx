import Cabecalho from "@/components/Cabeçalho";
import Layout from "@/components/Layout";

export default function Exemplo() {
  return (
    <Layout titulo="Exemplo">
      <Cabecalho
        titulo="NextJs & React"
        nome="matheus"
        idade={12}
        ehVdd={false}
      />
      <Cabecalho titulo="React & NextJs" />
    </Layout>
  );
}
