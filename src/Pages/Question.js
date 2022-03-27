import React ,{ useRef, useState, useEffect, useContext } from 'react';
import axios from '../api/axios';


const Question= () => {

    // const userRef = useRef();
    // const errRef = useRef();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password])

   

    return (
        <div className='login'>
            <section className='row justify-content-center align-items-center text-center'>
                   <h6>How is the Weather in Seoul today ?</h6>
            </section>
        </div>
    )
}

export default Question;
