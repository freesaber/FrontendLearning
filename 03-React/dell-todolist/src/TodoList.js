import React,{ Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{
  // 初始化，Intialization
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 在组件即将被挂载到页面的时刻自动执行（挂载：组件第一次被放到页面上）
  componentWillMount() {
  }
  
  // 组件被更新之前，它会被自动执行
  shouldComponentUpdate() {
    return true;
  }

  // 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate之后执行，并且shouldComponentUpdate返回true才执行
  componentWillUpdate() {
  }

  // 组件的挂载和更新都会执行，渲染更新DOM
  // Mounting:componentWillMount --> render --> componentDidMount
  // Updation:shouldComponentUpdate --> componentWillUpdate --> render --> componentDidUpdate
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          { this.getTOdoItem() }
        </ul>
      </Fragment>
    );
  }

  // 组件被挂载到页面之后，自动执行
  componentDidMount() {
  }

  // 组件被更新之后，自动执行
  componentDidUpdate() {
  }

  // 当一个组件从父组件接收了参数，只要父组件的render函数被执行了，子组件的这个生命周期函数就会被执行
  componentWillReceiveProps() {

  }

  getTOdoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          index={index} 
          content={item} 
          deleteItem={this.handleItemDelete}
        ></TodoItem>
      );
    })
  }

  handleInputChange(e) {
    // const value = e.target.value;
    const value = this.input.value;
    this.setState(() => {
      return {
        inputValue: value
      }
    });

    // this.setState({
    //   inputValue: e.target.value
    // });
  }

  handleBtnClick() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    }, () => {
      console.log(this.state.list.length);
    });

    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // });
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });

    // this.setState({
    //   list
    // });
  }
}

export default TodoList;
