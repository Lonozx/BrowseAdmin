import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import Cart from "./elements/Cart";
import './main.scss'

function App() {
  return(
    <div className="wrapper">
 <Header url='https://cdn-icons-png.flaticon.com/512/219/219983.png'/>
    <section className="ticketSection">
    <Cart title='Title#1' description='Default description'/>
    </section>
 <Footer/>
 </div>
 )
}

export default App;
