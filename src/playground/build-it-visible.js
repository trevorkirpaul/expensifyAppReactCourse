class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>VisibilityToggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        <p>{this.state.visibility && 'Here are the details'}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));