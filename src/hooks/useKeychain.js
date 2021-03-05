import React, {useState, useEffect} from 'react';
import * as Keychain from 'react-keychain';

export default (props) => {
  const {
    username = '',
    password = '',
    biometryType = null,
    accessControl = null,
    storage = null,
    securityLevel = null,
  } = props;

  const save = async () => {
    try {
      await Keychain.setGenericPassword(username, password);
    } catch (err) {
      console.log(err);
    }
  };

  const credentials = async () => {
    try {
      const keys = await Keychain.getGenericPassword();
      return keys || {};
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
      return null;
    }
  };

  return [save, credentials];
};
