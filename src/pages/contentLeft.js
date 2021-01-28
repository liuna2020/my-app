import './common.css';
import contentLeftImg from '../img/moneyLogo.png';
import arrowDownImg from '../img/arrow-down-1.png';
import arrowUpImg from '../img/arrow-up-1.png';

function ContentLeft() {
  return (
    <div className="content-left-root">
      <div className="content-left-top">
        <div className="content-left-top-line"/>
        <span className="content-left-top-text">逾期余额数据概况</span>
      </div>
      <div className="content-left-line"/>
      <div className="content-left-bottom">
        <div className="content-left-bottom-content">
          <img alt="" src={contentLeftImg} className="content-left-bottom-content-img"/>
          <div className="content-left-bottom-content-other">
            <span className="content-left-bottom-content-other-one">逾期总余额</span>
            <div className="content-left-bottom-content-other-two">
              <span className="content-left-bottom-content-other-two-money">10,000.00 </span>
              <span className="content-left-bottom-content-other-two-text">元</span>
              {/*<span className="content-left-bottom-content-other-two-text1">占比</span>*/}
              {/*<span className="content-left-bottom-content-other-two-text2" >50%</span>*/}
            </div>
            <div className="content-left-bottom-content-other-three">
              <span className="content-left-bottom-content-other-three-text1">
                较前一日
              </span>
              <img className="content-left-bottom-content-other-three-img" alt="" src={arrowDownImg} />
              <span className="content-left-bottom-content-other-three-text2">
                1.34%
              </span>
              <span className="content-left-bottom-content-other-three-text3">
                17
              </span>
              <span className="content-left-bottom-content-other-three-text4">
                笔借据
              </span>
            </div>

          </div>
        </div>
        <div className="content-left-bottom-content">
          <img alt="" src={contentLeftImg} className="content-left-bottom-content-img"/>
          <div className="content-left-bottom-content-other">
            <span className="content-left-bottom-content-other-one">逾期60天以上余额</span>
            <div className="content-left-bottom-content-other-two">
              <span className="content-left-bottom-content-other-two-money">100,000,000.00</span>
              <span className="content-left-bottom-content-other-two-text">元</span>
              <span className="content-left-bottom-content-other-two-text1">占比</span>
              <span className="content-left-bottom-content-other-two-text2" >50%</span>
            </div>
            <div className="content-left-bottom-content-other-three">
              <span className="content-left-bottom-content-other-three-text1">
                较前一日
              </span>
              <img className="content-left-bottom-content-other-three-img" alt="" src={arrowUpImg} />
              <span className="content-left-bottom-content-other-three-text2" style={{color:'#F82626'}}>
                -6.19%
              </span>
              <span className="content-left-bottom-content-other-three-text3">
                17
              </span>
              <span className="content-left-bottom-content-other-three-text4">
                笔借据
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentLeft;
