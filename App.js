import React from 'react';
import {StateProvider} from './src/context/StateProvider';
import {ThemedButton} from './src/components/ThemedButton';

const App = () => {
  const initialState = {
    theme: {primary: 'green'},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme,
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemedButton />
    </StateProvider>
  );
};

export default App;
