import React, {useState} from "react";
import MainPresenter from "./MainPressenter";


function MainContainer() {
  const [screen, setScreen] = useState("todo");

  const handleClickTap = (screen) => () => {
    setScreen(screen)
  }
  return (
    <MainPresenter
      screen={screen}
      onClickTap={handleClickTap}
      />
  );
}

export default MainContainer;
