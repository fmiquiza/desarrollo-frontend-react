import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const formData = useSelector( state => state.form.formData);
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">Forms</Link>
                </li>
                <li style={{ marginLeft: 'auto' }}> 
                {formData.username && formData.email && (
                <div className="Bienvenido">
                    Bienvenido/Welcome: {formData.username} // email: {formData.email}
                </div>
            )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;