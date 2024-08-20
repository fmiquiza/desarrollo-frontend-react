import Logo from './Default/_components/logo';
import Description from './Default/_components/Description';
import Content from './Default/_components/Content';
import Github from './Default/_components/Github';

import OpenLink from '../components/OpenLink';



const Default = () => {
    return (
        <div className="container">
            <header className="App-header">
            <Logo/>
            <Description/>

            <OpenLink title="LEARN REACT -> PROPS" url="https://react.dev/"/>
            <OpenLink title="Mi repository - FMIR --> using PROPS" url="https://github.com/fmiquiza/desarrollo-frontend-react.git"/>




             </header>
        </div>
    )
}

export default Default;