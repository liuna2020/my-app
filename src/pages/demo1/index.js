import React, {useState,useEffect} from 'react';
import {Button} from 'antd';

function Demo1(props) {
    console.log('props',props)
    const [result,setResult] = useState(null);
    const [count,setCount] = useState(0)
    // 在外面请求接口也可以，但是会打印三次
    // hooks不能放在条件语句里面
    useEffect(()=>{  // 两个参数，第一个参数是一个函数(没有第二个参数的时候执行两次，第二次相当于componeDidUPdate,第一次相当于componentDidMount）
        // 请求接口 打印2次
        // console.log(11111)
        // setResult('222222')
        const timer = setInterval(()=>{
            console.log('count',count)
            setCount(count + 1)
        },500)
        return ()=>{ // 当前useEffect中count依赖项发生变化的时候做清理工作
            clearInterval(timer)
        }
    },[count]) // 1.第二个参数为空数组只执行一次 2.数组有result，result更新几次就执行几次3.数组中可以是多项,不管哪个变化都执行
    return (
        <div>
            {result}
            <h1>{count}</h1>
        </div>
    )
}

export default Demo1;
