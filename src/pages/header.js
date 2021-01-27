import './common.css';
import logoImg from '../img/logo.png';
import menuIconIndex from '../img/index.png';
import downImg from '../img/xiala.png';
import messageImg from '../img/message.png';


const menuSource = [
    {
        id:1,
        text:'首页',
        icon:menuIconIndex
    },
    {
        id:2,
        text:'首页123',
        icon:menuIconIndex
    },
    {
        id:3,
        text:'首页456',
        icon:menuIconIndex
    }
]
function Header() {
    return (
        <div className="header-root">
            <div className="header-left">
                <div className="header-left-logo">
                    <img alt="" src={logoImg} />
                </div>
                <div className="header-left-text">保全业务管理系统</div>
            </div>
            <div className="header-center">
                <ul className="header-center-menu">
                    {
                        menuSource.map(i=>{
                            return (
                                <li key={i.id}>
                                    <span  className='header-center-icon'>
                                        <img alt="" src={i.icon}/>
                                    </span>
                                    <span className='header-center-text'>{i.text}</span>
                                </li>)
                        })
                    }
                </ul>
            </div>
            <div className="header-right">
                <span className="header-right-msgIcon">
                    <img src={messageImg} alt=""/>
                </span>
                <div className="header-right-line"/>
                <span className="header-right-text">客户经理-林林</span>
                <span className="header-right-icon">
                    <img src={downImg} alt="" />
                </span>
            </div>
        </div>
    );
}

export default Header;
