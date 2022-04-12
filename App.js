import React from "react";
import { NativeBaseProvider } from "native-base";
import Calenscreen from "./scr/screen/Calenscreen";


const App =() => {
  return(
    <NativeBaseProvider>
      <Calenscreen/>
    </NativeBaseProvider>
  );
};

export default App;
