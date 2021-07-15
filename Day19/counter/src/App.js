import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
    };
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="buttons">
          <button
            onClick={() => {
              this.setState({ count1: this.state.count1 + 1 });
            }}
          >
            {this.state.count1}{" "}
          </button>
          <button
            onClick={() => {
              this.setState({ count2: this.state.count2 + 1 });
            }}
          >
            {this.state.count2}
          </button>
          <button
            onClick={() => {
              this.setState({ count3: this.state.count3 + 1 });
            }}
          >
            {this.state.count3}
          </button>
          <button
            onClick={() => {
              this.setState({ count4: this.state.count4 + 1 });
            }}
          >
            {this.state.count4}
          </button>
        </div>
      </div>
    );
  }
}


export default App;
