import './header.scss'
import logo from '../imgs/Logo.png';

export default function Header(props){
    return(
        <header className="header">
        <div className="container">
            <img className='logo' src={logo} alt="" /> <a href='#'></a><p className='container__desc'>Browse Admin</p>
            </div>
            {/* <h2 className="container__title">Header</h2> */}
            <img className='container__avatar' src={props.url} alt="avatar" />
       
        </header>
    )
}