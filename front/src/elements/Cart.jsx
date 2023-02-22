import './cart.scss'
import Main from '../sections/Main'

export default function Cart(props){
    const tickets =[
        {
            name: ' ',
            officeNumber: 0,
            description: ' ',
        }
    ]
   return(
    <div className="container">
        <div className="container__cart">
    <h2 className='container__cart-title'>{props.title}</h2>
    <p className='container__cart-desc'>{props.description}</p>
    <p className='container__cart-desc'>{props.officeNumber}</p>
    <div className="button-section">
    <button className='cart-deny'>Deny</button>
    <button className='cart-apply'>Apply</button>
    </div>
    </div>
    </div>

   )
}