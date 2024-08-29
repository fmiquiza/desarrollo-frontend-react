import React from 'react';

const LandingPage = () => {
  return (
    
    <div className="titulo">
      <div className="div2">
        <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      </div>

      <div className="div3">
        <h2>Bienvenido</h2>
        <div className='div4'></div>
        <p>
          Este módulo se centra en el uso de <strong>React</strong>, 
          incluyendo la creación de <strong>componentes</strong>, 
          el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
        </p>
      </div>

      <div style={{ padding: '20px' }}>
        <h2>Temas Cubiertos</h2>
        <div className='div4'></div>
        <table className='tabla'>
          <tbody>
            <tr>
              <td >Componentes funcionales y de clase</td>
              <td >Uso de <strong>React hooks</strong> como useState y useEffect</td>
              <td>Creación de <strong>custom hooks</strong> como useForm</td>
              <td>Gestión de variables de estado con <strong>useState</strong></td>
              <td>Gestión de estado global con <strong>Redux</strong></td>
              <td>Integración de <strong>Redux</strong> con <strong>React</strong></td>
              <td>Manejo de <strong>Formularios</strong> en <strong>React</strong></td>
              <td>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ padding: '20px' }}>
        <h2>Recursos Adicionales</h2>
        <div className='div4'></div>
        <p>
          Para profundizar en los temas cubiertos, consulta los siguientes recursos:
        </p>
      </div>

      <div className='div5'>
      <div className='div6'></div>
        © 2024 Modulo 7. USIP.
      </div>
    </div>
  );
};

export default LandingPage;