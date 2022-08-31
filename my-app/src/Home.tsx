import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import App from './App';


function Home() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [names, setNames] = useState<Array<string>>([])


    return (

        < div >
        <input onChange={(e) => {
            setName(e.target.value);
            setNames([...names, e.target.value])
        }}>
        </input>
        <button>
            {names.map((name) => {
                
               return <li>{name}</li> 
            })}
        </button>
        </div >
    )
}

export default Home; 