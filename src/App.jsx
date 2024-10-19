import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handelClick() {
    alert("button clicked");
  }
  const handelClick2 = () => alert("button clicked 2");
  const handelClick3 = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click</button>
      <button onClick={handelClick2}>Click2</button>
      <button onClick={() => handelClick3(2)}>click3</button>
    </>
  );
}

export default App;
