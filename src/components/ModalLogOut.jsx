import {motion} from 'framer-motion'


const modalLogout=({visible,message,onClose,sure})=>{
    if(!visible){
        return null;
    }
    return(
        
        <div className="modal-overlay">
            <motion.div 
                    className="notification-success"
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
            >
            <div>
                <p>
                    {message}
                    <button onClick={sure}>Presionar para salir!!!</button>
                </p>
                
            </div>
            <button 
                className="close-btn-success" 
                onClick={onClose}>
            X
            </button>
            </motion.div>
        </div>
        
    );
};

export default modalLogout;