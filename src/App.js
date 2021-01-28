import './App.css';
import Header from './pages/header';
import Slide from './pages/slide';
import ContentLeft from './pages/contentLeft';
import ContentRight from "./pages/contentRIght";
import ContentRightTwo from "./pages/contentRightTwo";
import ContentRightThree from './pages/contentRightThree';

function App() {
  return (
    <div className="root">
      <div className="header">
          <Header />
      </div>
        <div className="content">
            <div className="slide">
                <Slide />
            </div>
            <div className="right-content">
                <div className="right-head">
                    <div className="right-head-text">
                        逾期余额统计
                    </div>
                </div>
                <div className="right-content-content">
                    <div className="right-content-content1">
                        <div className="right-content-content1-left">
                            <ContentLeft />
                        </div>
                        <div className="right-content-content1-right">
                            <ContentRight />
                        </div>
                    </div>
                    <div className="right-content-content2">
                        <ContentRightTwo />
                    </div>
                    <div className="right-content-content2" style={{height:'809px'}}>
                        <ContentRightThree />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
