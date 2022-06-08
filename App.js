import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from './scr/redux/store';
import Navigation from "./scr/navigation";

const App =() => {
  return(
  <Provider store={store}>
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
    </Provider>
  );
};

export default App;
