import React from 'react';
import {useStateValue} from '../context/StateProvider';
import {Button} from 'react-native';

// Changed

export const ThemedButton = () => {
  const [{theme}, dispatch] = useStateValue();

  return (
    <Button
      title="Turn me Blue!"
      color={theme.primary}
      onPress={() =>
        dispatch({
          type: 'changeTheme',
          newTheme: {primary: 'blue'},
        })
      }
    />
  );
};
