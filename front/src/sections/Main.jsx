import React, { useState, useEffect  } from 'react';
import Cart from '../elements/Cart';
import './mainSection.scss';

export default function Main(props){
    const [showCart, setShowCart] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [office, setOffice] = useState('');
    const [state, setState] = useState(true);
    const [data, setData] = useState([{}]);

    useEffect(()=>{
        setData({title, description, office});
    }, [title, description, office]);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(event.target.value);
    }
    const handleOffice = (event) => {
        setOffice(event.target.value);
    }
    const handleState = (event) => {
        setState(event.target.value);
    }
    // const handleData = () => {
    //     const newData = {title, description, office};
    //     setData(newData);
    //     setTitle('');
    //     setDescription('');
    //     setOffice('');
    // }

    // const inputChange = (event)=>{
    //     setInputValue(event.target.value);
    // }

    const handle = () =>{
        setShowCart(true);
        const newData = {title, description, office};
        setData(newData);
        setTitle('');
        setDescription('');
        setOffice('');
        setState(true);
    }
   return(
    <>
    <div className="input-data">
    <input type='text' value={title} onChange={handleTitle} className='ticket title-ticket' placeholder='Title please'></input>
    <input type='text' value={description} onChange={handleDescription} className='ticket description-ticket'placeholder='Here is your description'></input>
    <input type='number' value={office} onChange={handleOffice} className='ticket office-ticket' placeholder='# of office'></input>
    
    <button onClick={handle} className="cart-create">Create a ticket!</button>
    </div>
    {showCart && <Cart title={title} description={description} officeNumber={office}/>}
    {/* <pre>{JSON.stringify(data, null, 2)}</pre>   */}
    </>
   )
}