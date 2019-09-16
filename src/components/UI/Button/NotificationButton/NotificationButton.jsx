import React from 'react';
import { askForPermissionToReceiveNotifications, removePermissionToReceiveNotifications } from './../../../../push-notification';
import '../Button.scss';

const NotificationButton = (props) => (

  props.btnText === 'ask' ?
  <button 
    className='notifications'
    onClick={askForPermissionToReceiveNotifications} >
      {props.btnText}
  </button>
  :
  <button 
  className='notifications'
  onClick={removePermissionToReceiveNotifications} >
    {props.btnText}
</button>
);

export default NotificationButton;