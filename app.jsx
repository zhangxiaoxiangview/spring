import React,{ Component } from 'react'
/**
 * 采用用ES6的写法
 **/
class App extends Component {
    /**
     * 相关数据的操作
     * 数据的请求、当前数据的检测
     * @param {*} props 
     */
    constructor(props) {
        super(props)
        this.state = {
            num: "www.baidu.com"
        }
        this.onClickChange = this.onClickChange.bind(this)
        console.log("One constructor");
       
    }
    componentWillMount() {
        console.log("Two componentWillMount");
    }
    /**
     * dom编译完成，并且渲染到真实的dom中
     * 可以做dom的处理
     * 可以做具体的事件监听
     * 某些插件的实例化
     */
    componentDidMount() {
        console.log("Four componentDidMount");
    }
    /**
     * 当父组件传入子组件的数据进行改变时调用，可以将props
     * 再次赋值给state，可以当作来监听props的改变
     */
    componentWillReceiveProps(props) {
        console.log("props");
    }
    /**
     * 项目提高渲染性能使用，可以对比props和state的值
     * 来返回true或者false 更新组件
     */
    shouldComponentUpdate(props,state){
        console.log("shouldComponentUpdate");
        console.log("this.state.num:"+this.state.num);
        console.log("state.num:"+state.num);
        if(state.num == this.state.num){
            return false;
        }
        return true;
    }
    /**
     * 最后一次改变数据的地方，发生在render 之前
     */
    componentWillUpdate(){
        console.log("End componentWillUpdate")
    }
    /**
     * 同componentDidMount 
     * 执行更新
     */
    componentDidUpdate(){
        console.log("222222 componentDidUpdate")
    }
    /**
     * 根DOM相关操作，在组件销毁前，做相应的处理
     * 如：时间监听，计时器，插件的DOM实例化
     */
    componentWillUnmount(){
        console.log("销毁 componentWillUnmount")
    }
    onClickChange(){
        console.log("onClickChange");
        this.setState({
            num:"www.google.com"
        },()=>{
            console.log("值:"+this.state.num);
        })
       
    }
    /**
     * 纯函数
     * 不能调用setstate进行数据改变
     * 不能做数据的产生和保存
     * 返回数据的dom拼接号的JSX
     */
    render() {
        console.log("Three render");
        return (
            <div>
                <h1>生命周期</h1>
                <button onClick = { this.onClickChange }>确认</button>
            <h1>{ this.state.num }</h1>
            </div>
            
        )
    }
}

export default App