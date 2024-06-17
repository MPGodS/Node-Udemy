import Layout from "@/components/Layout";
import styles from "../styles/estiloso.module.css";

export default function Estiloso() {
  return (
    <Layout titulo="exemplo de css modularizado">
      <div>
        <h1 className={styles.roxo}>estilo Usando Modulos</h1>
      </div>
    </Layout>
  );
}
