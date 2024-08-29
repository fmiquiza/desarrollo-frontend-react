import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalSubmit from "../../components/ModalSubmit";

import { useState } from "react";

//
import {cleanFormData} from "../../redux/form/formActions";
import ModalLogout from "../../components/ModalLogout";
import { pass } from "../../redux/form/formReducer";


//

const LoginForm = () => {
    const [values, handleChange,clean] = useForm({ username: '', email: '', password:''});
    const [showModalSubmit, setShowModalSubmit] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    //
    const [shown, setShown] = useState(false);
    const [showmodalLogout,setShowmodalLogout]=useState(false);
    //

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        if (values.password==pass) {
            dispatch(saveFormData(values));
        }
        console.log(saveFormData(values));
    }

    const hideModalSubmit = () => {
        setShowModalSubmit(false);
    };

    const showModal = () => {
        if (values.password!=pass) {
            setShowModalSubmit(true);
        }
        
    }

    const switchShown = () => {
        setShown(!shown);
        console.log(form.formData);
    };//funcion para boton show

    const showLogOut = () => {
        if(form.formData.username){
            setShowmodalLogout(true);
        } 
    }
    const hideLogOut=()=>{
        setShowmodalLogout(false);
    };

    const salir = ()=>{
        dispatch(cleanFormData());
        clean();
        setShowmodalLogout(false);
    };

    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalSubmit
                visible={showModalSubmit}
                message="Password Incorrecto - FMIR sec"
                onClose={hideModalSubmit}
            />

            <ModalLogout 
            
                 visible={showmodalLogout} 
                 message="¿Estás seguro de que quieres cerrar sesión LoginForm FMIR? " 
                onClose={hideLogOut}
                sure={salir}
            />


            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Password</label>
                        <input
                            type={shown ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button onClick={switchShown} type="button">
                            {shown ? 'Ocultar/Hide' : 'Mostrar/Show'}
                        </button>
                    </div>
                    <div className="button-container">
                        <button onClick={showModal} type="submit">Submit</button>
                        <button onClick={showLogOut}> LogOut System</button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;