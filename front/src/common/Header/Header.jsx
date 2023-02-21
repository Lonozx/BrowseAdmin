import './header.scss'
// import logo from '../common/imgs/Logo.png';

export default function Header(props){
    return(
        <header className="header">
        <div className="container">
            {/* <img className='logo' src={logo} alt="" /> */}
            {/* <h2 className="container__title">Header</h2> */}
            <img className='container__avatar' src={props.url} alt="avatar" />
        </div>
        </header>
    )
}