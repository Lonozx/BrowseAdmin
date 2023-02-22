import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import Main from "./sections/Main";
import Cart from "./elements/Cart";
import './main.scss'

function App() {
  return(
    <div className="wrapper">
 <Header url='https://cdn-icons-png.flaticon.com/512/219/219983.png'/>
    <div className="before-we-start">
      <Main/>
    </div>
    <section className="ticketSection">

    {/* <Cart title='Title#1' description='Default description'/> */}
    </section>
 <Footer/>
 </div>
 )
}

export default App;
