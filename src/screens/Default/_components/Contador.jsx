import { useState } from "react";   

const Contador = () => {
    const [contador, setContador] = useState(10);
    
    const handleContador = () => {
        setContador(contador + 1);
    }
 

    return (
        <>
        <h3>Componente Contador</h3>
        <h3>{contador}</h3>
        <div>
            <button onClick={handleContador}>Incrementar contador</button>
        </div>
        </>
    );
};

export default Contador;