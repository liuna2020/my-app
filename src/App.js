import './App.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="root">
      <div className="header">
          header
      </div>
        <div className="content">
            <div className="slide">
                slide
            </div>
            <div className="right-content">
                <div className="right-head">
                    head

                </div>
                <div className="right-content-content">
                    <div className="right-content-content1">
                        <div className="right-content-content1-left">
                            left
                        </div>
                        <div className="right-content-content1-right">
                            right
                        </div>
                    </div>
                    <div className="right-content-content2">
                        content2
                    </div>
                    <div className="right-content-content2" style={{height:'809px'}}>
                        content3
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
