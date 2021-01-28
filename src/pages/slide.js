import './common.css';
import slideImg from '../img/yetj.png';

const slideMenuSource = [
  {
    id:10,
    text:'逾期余额统计',
    icon:slideImg
  },
  {
    id:11,
    text:'新增逾期统计',
    icon:slideImg
  },
  {
    id:12,
    text:'现金回收统计',
    icon:slideImg
  }
]
function Slide() {
  return (
    <div className="slide-root">
      <div className="slide-top">
        数据统计
      </div>
      <div className="slide-bottom">
        <ul className="slide-bottom-menu">
          {
            slideMenuSource.map(i=>{
              return(
                <li key={i.id}>
                 <span  className='slide-bottom-icon'>
                    <img alt="" src={i.icon}/>
                 </span>
                  <span className='slide-bottom-text'>{i.text}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Slide;
