import { useState } from "react";

export default function () {
  const [team, setTeam] = useState(11);

  const handelAdd = () => setTeam(team + 1);
  const handelReduce = () => setTeam(team - 1);
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "12px",
  };
  return (
    <div style={teamStyle}>
      <h3>Player: {team}</h3>
      <button onClick={handelAdd} style={{ marginRight: "5px" }}>
        Add
      </button>
      <button onClick={handelReduce}>Remove</button>
    </div>
  );
}
