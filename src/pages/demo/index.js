import React, {useState} from 'react';
import {Button} from 'antd';

function Demo(props) {
    console.log('props',props)

    // const [count, setCount] = useState(0); // 初始值可以是一个直接的值
    // const [number,setNumber] = useState(()=>0); // 初始值也可以是一个函数
    // const [state,setState] = useState({count:0,number:0,sum:10});// 除非特殊情况否则不推荐使用此方法(冗余）
    const [state,setState] = useState({})

    // useEffect(()=>{
    //     setNumber(()=>{ return 3})
    //     console.log('1111111')
    //     return ()=>{
    //         console.log('222222')
    //     }
    // },[count]);
    //
    // const onAddClick = () => {
    //     setCount(count + 1)
    // };
    //
    // const onCancelClick = () => {
    //     setCount(count - 1)
    // }

    const onNoClick = () =>{
        setState({
            ...state,
            count:state.count + 1,
            number:state.number + 2
        })
    }
    console.log('state',state)
    const buildArr = [
        {title:'111',id:1},
        {title:'222',id:2},
        {title:'333',id:3},
        {title:'444',id:4},
    ]
    const onSpecialClick = (i)=>{
        console.log('state',state,i.id)
        setState({
            // ...state,
            [i.id]:!state[i.id],
        })
    }
    return (
        <div>
            {/*<div>count:{count}</div>*/}
            {/*<div>number:{number}</div>*/}
            {/*<Button onClick={onAddClick}>加</Button>*/}
            {/*<Button onClick={onCancelClick}>减</Button>*/}
            {/*<div>{state.count}</div>*/}
            {/*<div>{state.number}</div>*/}
            {/*<div>{state.sum}</div>*/}
            {/*<Button onClick={onNoClick}>不推荐（除特殊情况）</Button>*/}
            {/*案例*/}
            {
                buildArr.map((i,index)=>{
                    const isShow = !state[i.id];
                    return (
                        <div>
                            <h1 onClick={()=>{onSpecialClick(i)}}>{i.title}</h1>
                            <div style={{display:isShow ? 'none' : 'block'}}>内容{i.title}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Demo;
