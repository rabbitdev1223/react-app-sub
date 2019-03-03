import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

export const RadioButtonSimple = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="light"
        label="Simple"
        style={styles.radioButton}
      />
      <RadioButton
        value="not_light"
        label="Selected by default"
        style={styles.radioButton}
      />
      <RadioButton
        value="ludicrous"
        label="Custom icon"
        checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <RadioButtonGroup name="shipName" defaultSelected="community">
      <RadioButton
        value="enterprise"
        label="Disabled unchecked"
        disabled={true}
        style={styles.radioButton}
      />
      <RadioButton
        value="community"
        label="Disabled checked"
        disabled={true}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);


export const RadioButtonLeftLabel = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" labelPosition="left" defaultSelected="not_light">
      <RadioButton
        value="light"
        label="Simple"
        style={styles.radioButton}
      />
      <RadioButton
        value="not_light"
        label="Selected by default"
        style={styles.radioButton}
      />
      <RadioButton
        value="ludicrous"
        label="Custom icon"
        checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <RadioButtonGroup name="shipName" labelPosition="left" defaultSelected="community">
      <RadioButton
        value="enterprise"
        label="Disabled unchecked"
        disabled={true}
        style={styles.radioButton}
      />
      <RadioButton
        value="community"
        label="Disabled checked"
        disabled={true}
        style={styles.radioButton}
      />
    </RadioButtonGroup>

  </div>
);
