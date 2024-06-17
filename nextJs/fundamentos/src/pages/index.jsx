import Navegador from "@/components/Navegador";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador texto="ESTILOSO" destino="/estiloso" cor="green" />
      <Navegador texto="EXEMPLO" destino="/exemplo" />
      <Navegador texto="JSX" destino="/jsx" cor="crimson" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="red" />
      <Navegador
        texto="Navegação #02"
        destino="/cliente/rs-2/123"
        cor="gray
      "
      />
      <Navegador texto="Estado" destino="/estado" cor="chartreuse" />
    </div>
  );
}
