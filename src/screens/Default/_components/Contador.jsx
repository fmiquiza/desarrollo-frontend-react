import { useEffect } from "react";
import { useState } from "react";   

const Contador = () => {
    const [contador, setContador] = useState(0);
    
    const handleContador = () => {
        setContador(contador + 1);
    }

    const substractContador = () => {
        setContador(contador - 1);
    }

    // La funcion useEffect se ejecuta cuando el Componente se haya montado.
    useEffect (() => {
        setContador(12);
    }, 
    []);

    // This special function executes when value of Contador has changed.
    useEffect (() => {
        if  (contador === 15) {
            alert('Contador es 15')
        }
    }, 
    [contador]);

    // La funcion useEffect se ejecuta cuando el Componente se haya montado.
    useEffect (() => {
        return  () => {
            console.log('Componente se desmonta');
        }
    });


    return (
        <>
        <h3>Componente Contador</h3>
        <h3>{contador}</h3>
        <div>
            <button onClick={handleContador}>Incrementar contador</button>
        </div>

        <div>
            <button onClick={substractContador}>Lab 8: Disminuir contador</button>
        </div>
        </>
    );
};

export default Contador;