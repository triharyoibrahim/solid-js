import { render } from "solid-js/web";

import NavbarTop from "./containers";
import DeckGoogle from "./DeckGoogle";
import { StoreProvider } from "./store";
import "uno.css";
import "daisyui/dist/full.css";

export const Index = () => {
  return (
    <>
      <div class='position: absolute; z-index:1; display: flex; width:100%;'>
        <StoreProvider>
          <NavbarTop />
        </StoreProvider>
        <DeckGoogle />
      </div>
    </>
  );
};

render(() => <Index />, document.getElementById("app")!);
