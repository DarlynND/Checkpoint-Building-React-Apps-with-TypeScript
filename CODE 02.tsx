import { Component } from 'react';

// Step 1: Define the type for state
// Counter has a state with only 'count' as a number
interface CounterState {
  count: number;
}

// Step 2: If the component had props, we would define an interface for them.
// In this case, no props are passed, so we use {} as props type.
class Counter extends Component<{}, CounterState> {
  // Step 3: Initialize state with type enforcement
  state: CounterState = {
    count: 0,
  };

  // Step 4: Method to increment count
  // TypeScript already knows setState updates the state safely
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 5: Render with JSX and state type-checking
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
