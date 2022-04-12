import React from "react";
import { NativeBaseProvider } from "native-base";
import Calenscreen from "./scr/screen/Calenscreen";
import Navigation from "./scr/navigation";

const App =() => {
  return(
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
  );
};

export default App;
