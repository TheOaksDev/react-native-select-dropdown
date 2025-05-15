import {StyleSheet, Pressable} from 'react-native';
import React, {useEffect} from 'react';

const DropdownOverlay = ({onPress, backgroundColor, cleanup}) => {
  const defaults = {
    backgroundColor: backgroundColor || 'rgba(0,0,0,0.4)',
  };
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, []);
  return (
    <Pressable
      //activeOpacity={1}
      onPress={onPress}
      style={{
        ...styles.dropdownOverlay,
        ...{
          backgroundColor: defaults.backgroundColor,
        },
      }}
    />
  );
};

export default DropdownOverlay;

const styles = StyleSheet.create({
  dropdownOverlay: {
    width: '100%',
    height: '100%',
  },
});
