import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
      if(nextProps.content !== this.props.content) {
        return true;
      }
      return false;
    }

    render() {
      return (
        <div onClick={this.handleClick}>
          {this.props.content}
        </div>
      );
    }

    handleClick() {
      const { deleteItem, index} = this.props;
      deleteItem(index);
    }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  
}

export default TodoItem