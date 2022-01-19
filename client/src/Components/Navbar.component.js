import { FaAtom } from 'react-icons/fa'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='navbar navbar-light bg-light container-fluid'>
                <div className="nav align-contents-center">
                    <div className="navbar-brand"><FaAtom size='40' color='red'/> ATOMIZE</div>
                </div>
            </div>
        </>
    )
}

export default Navbar