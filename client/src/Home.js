import Header from './Components/Header.component'
import { useState, useEffect } from 'react';
import { FaAtom } from 'react-icons/fa';

const Home = () => {
    const [ toggled, setToggled ] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setToggled(prev => !prev);
        }, 3000)
    }, [setToggled])
    return (
        <div className='container'>
            {toggled ?
             <Header />
             :
             <div className='vh-100 d-flex justify-content-center align-items-center'>
                <FaAtom size='200' color='red' className='atom-icon'/>
             </div>
            }
            
        </div>
    )
}

export default Home