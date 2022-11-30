import { Component, createEffect, onCleanup, onMount, createSignal } from "solid-js";
// import { createStore } from "solid-js/store";
import { render } from "solid-js/web";

import { Deck } from "@deck.gl/core/typed";
import { ScatterplotLayer } from "@deck.gl/layers/typed";

import "uno.css";
import "daisyui/dist/full.css";


type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
};



export const DeckGl: Component<{
  // viewport: Viewport;
}> = (props) => {

  let ref: HTMLDivElement | undefined;
  let deckgl: Deck | undefined;
  // const [deckOptions, setGridOptions] = createStore(props);
  // const [rowData, setRowData] = createSignal(props.rowData);

  const INITIAL_VIEW_STATE: Viewport = {
    latitude: 37.8,
    longitude: -122.45,
    zoom: 15,
  };

  // const [viewport, setViewport] = createSignal(INITIAL_VIEW_STATE);

  onMount(() => {
    console.log('------------- on mount --------------');
    deckgl = new Deck({
      initialViewState: INITIAL_VIEW_STATE,
      controller: true,
      layers: [
        new ScatterplotLayer({
          data: [
            {position: [-122.45, 37.8], color: [255, 0, 0], radius: 100}
          ],
          getColor: d => d.color,
          getRadius: d => d.radius
        })
      ]
    });
  });

  onCleanup(() => {
    if (deckgl) {
      deckgl.destroy;
    }
  });

  // createEffect(() => {
  //   // console.log('--------- wrapper: ', props);
  //   setGridOptions(gridOptions);
  //   console.log('--------- wrapper rowData: ', gridOptions.rowData);
  //   props.options!.api.setRowData(gridOptions.rowData);

  //   //   const grid = new Grid(ref!, props.options);
  //   //   onCleanup(grid.destroy);
  // });

  return <div
    ref={ref}
  />;
};
// function onMount(arg0: () => void) {
//   throw new Error("Function not implemented.");
// }

render(() => <DeckGl />, document.getElementById("app")!);