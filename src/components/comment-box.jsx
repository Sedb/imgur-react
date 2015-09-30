var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <ul className="list-group comment-box">
      {this.props.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </ul>
  }
});

var Comment = React.createClass({
  getInitialState: function(){
     return {
       open: false,
       class: "section"
     }
  },
  render: function() {
    return <div>
      <li className="list-group-item" onClick={this.handleClick}>
        {this.props.comment.children ? this.changeArrow() : null }
        <span className="badge">{this.props.comment.ups}</span>
        <h5>{this.props.comment.author}</h5>
        {this.props.comment.comment}
      </li>
      <ul className={"list-group children " + this.state.class}>
        {this.props.comment.children.map(comment => <Comment key={comment.id} comment={comment} />)}
      </ul>
    </div>
  },
  changeArrow: function(){
    if(this.state.open){
      return <span className="glyphicon glyphicon-chevron-up pull-right"></span>
    }
    else{
      return <span className="glyphicon glyphicon-chevron-down pull-right"></span>
    }
  },
  handleClick: function(){
    if(this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    }
    else{
      this.setState({
        open: true,
        class: "section-open"
      });
    }
  }
});