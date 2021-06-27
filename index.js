const initialstate = {
  value: 0,
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

document.getElementById("increment").addEventListener("click", function () {
  store.dispatch({ type: "counter/incremented" });
});

document.getElementById("decrement").addEventListener("click", function () {
  store.dispatch({ type: "counter/decremented" });
});

document.getElementById("incrementOdd").addEventListener("click", function () {
  if (store.getState().value % 2 === 1) {
    store.dispatch({ type: "counter/incremented" });
  } else {
    alert("Count is not Odd 🚫🚫🚫");
  }
});

document
  .getElementById("incrementAsync")
  .addEventListener("click", function () {
    setTimeout(function () {
      store.dispatch({ type: "counter/incremented" });
    }, 1000);
  });

function render() {
  const state = store.getState();
  document.getElementById("value").innerHTML = state.value.toString();
}
render();
store.subscribe(render);
