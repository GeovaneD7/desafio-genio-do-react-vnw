import "./Main.scss"
import { useState } from "react";

export default function Main() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => { setLampada(!lampada); };

  return (
    <main>
      <p>"Liberte a magia da programação com a lâmpada de Aladim."</p>
      <img 
        src={lampada ? "genio.png" : "lampadaMagica.png"}
        alt="Lâmpada Mágica" 
      />
      <button onClick={trocarLampada}>Clique Aqui</button>
    </main>
  );
};
