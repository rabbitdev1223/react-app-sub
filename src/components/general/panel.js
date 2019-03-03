/*
 * Filename: panel.js
 * Responsible all cmponent with headding
 * and child components
 */

import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import classNames from 'classnames';

// Right icon option component
const RightIconOption = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
    <IconButton><i className="material-icons">more_vert</i></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh"
    />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

const Panel = (props) => {
  const panelClass = classNames ({
    'readmin-panel' : true,
    'righticonmenu': props.righticon,
    'body-text-center': props.center
  });

  const titleContainterStyle = props.center ? {display: 'inherit', textAlign: 'center'} : {};
  const titleStyle = props.bold ? {fontWeight: 'bold'} : {};
  const titleClassName = props.titleClassName ? {className: props.titleClassName} : {}

  return (
    <div className={panelClass}>
      {props.title && (
        <div className="panel-heading" style={titleContainterStyle}>
          <h5 style={titleStyle} {...titleClassName}>{props.title}</h5>
          { props.righticon ? <RightIconOption /> : ''}
        </div>
      )}

      <div className="panel-body">
        {props.children}
      </div>
    </div>
  );
}

export default Panel;
