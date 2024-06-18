interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void;
}
export default function Botao(props: Readonly<BotaoProps>) {
  const cor = props.cor ?? "gray";
  console.log(cor);

  return (
    <button
      onClick={props.onClick}
      className={`bg-gradient-to-r from-${cor}-400 to-${cor}-800 
                    rounded-md px-4 py-2 text-white ${props.className} `}
    >
      {props.children}
    </button>
  );
}
