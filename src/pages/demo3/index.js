import React, {useState, memo, useMemo,useCallback} from 'react';
import {Button} from 'antd';

const Children = memo((props) => { // 2.加上memo之后父组件更新子组件不更新（优化1）
    console.log('children', props)
    const date = new Date()
    return (
        <div>
            当前时间：{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
            <input type='text' onChange={props.onChange}/>
        </div>
    )
}, (prev, next) => { // memo的第二个参数 返回true不更新，返回false更新  默认true
    console.log('prev', prev, next) // 只写console相当于返回undefined也就是false所以会更新子组件
    return prev.count === next.count // 点+不跟新子组件，点获取当前时间更新子组件
})

const Parent = () => {
    const [count, setCount] = useState(0)
    const [clickTimeCount, setClickTimeCount] = useState(0)
    const [text, setText] = useState("")
    // const timeOption = {
    //     clickTimeCount // 为什么clickTimeCount没有拿到最新值需要用到useMemo
    // }
    const timeOption = useMemo(() => { // useMemo的用法同useEffect同useCallback 使用useMemo除非第二个参数的依赖项变化才会更新子组件
        return {
            clickTimeCount
        }
    }, [clickTimeCount]) // clickTimeCount发生变化才变化 count变化不管用

    const handleOnChange = useCallback((e) => {
        setText(e.target.value)
    },[])


    return (
        <div>
            <div>count:{count}</div>
            <div>text:{text}</div>
            <Button onClick={() => {
                setCount(count + 1)
            }}>+1</Button>
            {/*点击获取当前时间*/}
            <Button onClick={() => {
                setClickTimeCount(clickTimeCount + 1)
            }}>获取当前时间</Button>
            {/*<Children count={clickTimeCount}/>*/}
            {/*// 1.子组件随着父组件的count变化子组件child的时间也会变化*/}
            {/*3.clickTimeCount传入子组件因为count变化所以子组件变化，子组件需要更新才更新*/}
            {/*<Children count={timeOption}/>*/}
            {/*子组件input变化父组件也随着变化*/}
            <Children count={clickTimeCount} onChange={handleOnChange}/>
        </div>

    )
}

function Demo3(props) {
    return (
        <div>
            <Parent/>
        </div>
    )
}

export default Demo3;
