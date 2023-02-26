import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import Main from "./sections/Main";
import Cart from "./elements/Cart";
import {tickets} from "./elements/Cart";
import './main.scss'

const styleSheet = {
  'filter: brightness':'(0.4)',
}

function App() {
  const reactData = tickets.map((item)=>{
    return  item.onWork == true ? <Cart title={item.title} description={item.description} officeNumber={item.officeNumber}/> 
    : <Cart title={item.title} description={item.description} officeNumber={item.officeNumber} style={styleSheet}/>
    
    })
  return(
    <div className="wrapper">
 <Header url='https://cdn-icons-png.flaticon.com/512/219/219983.png'/>
    <div className="before-we-start">
      <Main/>
    </div>
    <section className="ticketSection">
      {reactData}
    {/* <Cart title='Title#1' description='Default description'/> */}
    </section>
 <Footer/>
 </div>
 )
}

export default App;
