import Logo from './Default/_components/logo';
import Description from './Default/_components/Description';

import OpenLink from '../components/OpenLink';

import LessonInfo  from './Default/_components/LessonInfo';

import Contador from './Default/_components/Contador';

const Default = () => {
    return (
        <div className="container">
            <header className="App-header">
            <Contador/>
            <Logo/>
            

            <Description/>

            <OpenLink title="LEARN REACT -> PROPS" url="https://react.dev/"/>
            <OpenLink title="Mi repository - FMIR --> using PROPS" url="https://github.com/fmiquiza/desarrollo-frontend-react.git"/>
            <br></br>
            <LessonInfo unitNumber="11" title="Intro to components and props" />
            <LessonInfo unitNumber="15" title="Context API for global states in apps" />
            <br></br>
             </header>
        </div>
    )
}

export default Default;