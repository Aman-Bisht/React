import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux1/store";
import CakeContainer from "./component/CakeContainer";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";
import HookIceCreamConatiner from "./component/HookIceCreamConatiner";
import NewCakeContainer from "./component/NewCakeContainer";
import ItemConatainer from "./component/ItemConatainer";
import UserContainer from "./component/UserContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <HooksCakeContainer/>
      <CakeContainer />
      <IceCreamContainer/>
      <HookIceCreamConatiner/> */}
      {/* <NewCakeContainer/>
      <ItemConatainer cake/>
      <ItemConatainer /> */}
      <UserContainer/>
    </Provider>
  );
}

export default App;
