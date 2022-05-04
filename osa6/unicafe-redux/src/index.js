import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const sum = good + neutral + bad;

  if (sum !== 0) {
    return (
      <div>
        <p>all {good + neutral + bad}</p>
        <p>average {(good - bad) / sum}</p>
        <p>positive {(good / sum) * 100} %</p>
      </div>
    );
  } else {
    return <div>No feedback given</div>;
  }
};

const App = () => {
  const good = () => {
    store.dispatch({
      type: "GOOD",
    });
  };
  const ok = () => {
    store.dispatch({
      type: "OK",
    });
  };
  const bad = () => {
    store.dispatch({
      type: "BAD",
    });
  };
  const zero = () => {
    store.dispatch({
      type: "ZERO",
    });
  };

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
      <Statistics
        good={store.getState().good}
        neutral={store.getState().ok}
        bad={store.getState().bad}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
