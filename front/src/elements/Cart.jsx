import './cart.scss'
import Main from '../sections/Main'


export const tickets =[
    {
        title: 'Black Lamba',
        officeNumber: 23,
        description: 'Just come here',
        onWork: true,
    },
    {
        title: 'Tree into',
        officeNumber: 32,
        description: 'Please come',
        onWork: true,
    },
    {
        title: 'Проверочка',
        officeNumber: 228,
        description: 'Просто подойдите, мне не с кем поговорить',
        onWork: false,
    },
]
export default function Cart(props){
    // const className = tickets.onWork ? 'active' : 'innactive'
   
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