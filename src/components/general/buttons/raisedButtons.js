import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Panel from '../panel.js';

const style = {
  margin: 12,
};

const RaisedButtons = () => (
  <Panel
    title="Raised Buttons"
  >
    <div>
      <RaisedButton label="Default" style={style} />
      <RaisedButton label="Primary" primary={true} style={style} />
      <RaisedButton label="Secondary" secondary={true} style={style} />
      <RaisedButton label="Disabled" disabled={true} style={style} />
      <br />
      <br />
      <RaisedButton label="Full width" fullWidth={true} />
    </div>
  </Panel>
);

export default RaisedButtons;
