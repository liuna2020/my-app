import './App.css';
import Header from './pages/header';
import Slide from './pages/slide';
import ContentLeft from './pages/contentLeft';
import ContentRight from "./pages/contentRIght";
import ContentRightTwo from "./pages/contentRightTwo";
import ContentRightThree from './pages/contentRightThree';
import Demo from "./pages/demo";
import Demo1 from "./pages/demo1";
import Demo2 from "./pages/demo2"
import Demo3 from "./pages/demo3";

function App() {
  return (
      <div className='root'>
          {/*<Demo num={1}/>*/}
          -------------------------------------
          {/*<Demo1 />*/}
          --------------------------------------
          {/*<Demo2/>*/}
          --------------------------------------
          <Demo3/>
      </div>
    // <div className="root">
    //   <div className="header">
    //       <Header />
    //   </div>
    //     <div className="content">
    //         <div className="slide">
    //             <Slide />
    //         </div>
    //         <div className="right-content">
    //             <div className="right-head">
    //                 <div className="right-head-text">
    //                     逾期余额统计
    //                 </div>
    //             </div>
    //             <div className="right-content-content">
    //                 <div className="right-content-content1">
    //                     <div className="right-content-content1-left">
    //                         <ContentLeft />
    //                     </div>
    //                     <div className="right-content-content1-right">
    //                         <ContentRight />
    //                     </div>
    //                 </div>
    //                 <div className="right-content-content2">
    //                     <ContentRightTwo />
    //                 </div>
    //                 <div className="right-content-content2" style={{height:'809px'}}>
    //                     <ContentRightThree />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}

export default App;
