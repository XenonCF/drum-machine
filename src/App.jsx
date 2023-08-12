import React from "react";



export default () => (
  <div id="drum-machine">
    <div id="display">
      <button className="btn btn-primary">Q</button>
      <button className="btn btn-primary">W</button>
      <button className="btn btn-primary">E</button>
      <button className="btn btn-primary">A</button>
      <button className="btn btn-primary">S</button>
      <button className="btn btn-primary">D</button>
      <button className="btn btn-primary">Z</button>
      <button className="btn btn-primary">X</button>
      <button className="btn btn-primary">C</button>
    </div>
    <div id="controls">
      <h1>Power</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Right</button>
      </div>
      <div id="latest-drum">
        <h1 id="latest-input">Open HH</h1>
      </div>
      <input className="form-range" type="range" id="volume" name="volume" min="0" max="100" step="1"/>
      <h1>Bank</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Right</button>
      </div>
    </div>
  </div>
);
