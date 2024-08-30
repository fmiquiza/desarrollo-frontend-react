import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalSubmit from "../../components/ModalSubmit";

import { useState } from "react";

//
import {resetFormData} from "../../redux/form/formActions";
import ModalLogout from "../../components/ModalLogOut";
import { password } from "../../redux/form/formReducer";
import { Link } from "react-router-dom";
//

const LoginForm = () => {
    const [values, handleChange,resetForm] = useForm({ username: '', email: '', password:''});
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
        if (values.password==password) {
            dispatch(saveFormData(values));
        }
        console.log(saveFormData(values));
    }

    const hideModalSubmit = () => {
        setShowModalSubmit(false);
    };

    const showModal = () => {
        if (values.password!=password) {
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
        dispatch(resetFormData());
        resetForm();
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
                message="Password Incorrecto."
                onClose={hideModalSubmit}
            />

            <ModalLogout 
            
                 visible={showmodalLogout} 
                 message="¿Estás seguro de que quieres cerrar sesión? " 
                onClose={hideLogOut}
                sure={salir}
            />


            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1 style={{ textAlign: 'center' }} className="LoginForm"> Login Form </h1>
                    <h5>Username: {form.formData.username}</h5>
                    
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
                        <span style={{ marginLeft: '20px' }} />
                        <Link onClick={showLogOut} style={{ color: 'blue', textDecoration: 'none' }}> Logout</Link>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;