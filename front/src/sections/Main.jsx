import React, { useState, useEffect  } from 'react';
import Cart from '../elements/Cart';
import './mainSection.scss';

export default function Main(props){
    // const [showCart, setShowCart] = useState(false);
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [office, setOffice] = useState('');
    // const [state, setState] = useState(true);
    // const [data, setData] = useState([]);

    const [inputData, setInputData] = useState({
        title:'',
        description:'',
        office:'',
        state: true,
    })

    const [inputArray, setInputArray] = useState([])

    // useEffect(()=>{
    //     setData({title, description, office, state});
    // }, [title, description, office, state]);

    // const handleTitle = (event) => {
    //     setTitle(event.target.value);
    // }
    // const handleDescription = (event) => {
    //     setDescription(event.target.value);
    // }
    // const handleOffice = (event) => {
    //     setOffice(event.target.value);
    // }
    // const handleState = (event) => {
    //     setState(event.target.value);
    // }
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

    // const handle = () =>{
    //     // setShowCart(true);
    //     const newData = {title, description, office, state} = new Set();
    //     setData(newData);
    //     setTitle('');
    //     setDescription('');
    //     setOffice('');
    //     setState(true);
    //     setData([...data, {
    //         title: title.value,
    //         description: description.value,
    //         office: office.value,
        
    //     }])
    // }
    function changeHandle(event){
        setInputData({...inputData, [event.target.name]:event.target.value})
    }
    let {title, description, office, state} = inputData;
    function changeHandleIt(){
        setInputArray([...inputArray, {title, description, office}])
        console.log(inputArray);
        console.log(inputData);
        setInputData({title:'', description:'', office:''})
        // setInputData({...inputData, [event.target.name]:event.target.value})
    }

    const ReactIsFunny = inputArray.map((item, index)=>{
        return <Cart key={index} title={item.title} description={item.description}
        office={item.office}/>
    })
   return(
    <>
    <div className="input-data">
    <input type='text' autoComplete='none' name='title' value={inputData.title} onChange={changeHandle} className='ticket title-ticket' placeholder='Заголовок'></input>
    <input type='text' autoComplete='none' name='description' value={inputData.description} onChange={changeHandle} className='ticket description-ticket'placeholder='Описание проблемы'></input>
    <input type='number' name='office' value={inputData.office} onChange={changeHandle} className='ticket office-ticket' placeholder='Номер офиса'></input>
    {/* onClick={handle} */}
    <button onClick={changeHandleIt} className="cart-create">Создайте задачку!</button>
    </div>
    {ReactIsFunny}
    {/* {showCart && <Cart title={title} description={description} officeNumber={office}/>} */}
    {/* <pre>{JSON.stringify(data, null, 2)}</pre>   */}
    {/* <ul>
            {data.map(item=>{
                <li>
                {item.title}
                </li>
                // {item.description}
                // {item.office}
            })}
    </ul> */}
    </>
   )
}