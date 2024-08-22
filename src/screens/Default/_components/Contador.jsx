import { useState } from "react";   

const Contador = () => {
    const [contador] = useState(10);
    return (
        <>
        <h3>Componente Contador</h3>
        <h3>{contador}</h3>
        
        </>
    );
};

export default Contador;