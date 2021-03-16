import React, {useState,useEffect,useRef} from 'react';
import {Button} from 'antd';

function Demo2(props) {
    console.log('props',props)
    const [result,setResult] = useState(null);
    const [count,setCount] = useState(0);
    const countRef = useRef(null);
    const btnRef = useRef(null);
    // useEffect(()=>{
    //     countRef.current = count; // 自带current属性
    // },[count])
    // // 在外面请求接口也可以，但是会打印三次
    // // hooks不能放在条件语句里面
    // useEffect(()=>{  // 两个参数，第一个参数是一个函数(没有第二个参数的时候执行两次，第二次相当于componeDidUPdate,第一次相当于componentDidMount）
    //     // 请求接口 打印2次
    //     // console.log(11111)
    //     // setResult('222222')
    //     const timer = setInterval(()=>{
    //         console.log('count',count,countRef.current)
    //         setCount(countRef.current + 1)
    //     },500)
    //     return ()=>{ // 当前useEffect中count依赖项发生变化的时候做清理工作
    //         clearInterval(timer)
    //     }
    // },[])

    // const onClick = () =>{
    //     setCount(count+1)
    // }

    useEffect(()=>{
        const onClick = ()=>{
            setCount(count + 1)
        }
        btnRef.current.addEventListener('click',onClick,false); // count每次更新都会重新绑定事件需要清理

        return ()=>{
            btnRef.current.removeEventListener('click',onClick,false);
        }

    },[count])
    return (
        <div>
            {result}
            <h1>{count}</h1>
            {/*<Button onClick={onClick}>+++</Button>*/}
            <Button ref={btnRef}>+++</Button>
        </div>
    )
}

export default Demo2;
