import {
  Component,
  createEffect,
  onCleanup,
  onMount,
  createSignal,
} from "solid-js";
// import { createStore } from "solid-js/store";
import { render } from "solid-js/web";

// import { GoogleMapsOverlay } from "@deck.gl/google-maps";
// import { ScatterplotLayer } from "@deck.gl/layers";

import { mapLoader, defaultOption } from "./map";

import "uno.css";
import "daisyui/dist/full.css";

type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export const DeckBasic: Component<{
  viewport: Viewport;
}> = (props) => {
  let ref: HTMLDivElement | undefined;
  // let deckgl: GoogleMapsOverlay | undefined;
  // const [deckOptions, setGridOptions] = createStore(props);
  // const [rowData, setRowData] = createSignal(props.rowData);

  onMount(() => {
    console.log("------------- on mount --------------");
    mapLoader.load().then((google) => {
      console.log('--------- google: ', google);
      const map = new google.maps.Map(ref!, defaultOption);
      // let cek = document.getElementById("map") as HTMLElement;
      // console.log('--------- cek: ', cek);
      // const map = new google.maps.Map(cek, defaultOption);

      // deckgl = new GoogleMapsOverlay({
      //   controller: true,
      //   layers: [
      //     new ScatterplotLayer({
      //       data: [
      //         {
      //           latitude: 37.2646,
      //           longitude: -93.3007,
      //           color: [255, 0, 0],
      //           radius: 10,
      //         },
      //       ],
      //       opacity: 0.8,
      //       filled: true,
      //       radiusMinPixels: 2,
      //       radiusMaxPixels: 5,
      //       getPosition: (d) => [d.longitude, d.latitude],
      //       getColor: (d) => d.color,
      //       getRadius: (d) => d.radius,
      //     }),
      //   ],
      // });
      // deckgl.setMap(map);
    });
  });

  onCleanup(() => {
    // if (deckgl) {
    //   deckgl.destroy;
    // }
  });

  // createEffect(() => {
  //   // console.log('--------- wrapper: ', props);
  //   setGridOptions(gridOptions);
  //   console.log('--------- wrapper rowData: ', gridOptions.rowData);
  //   props.options!.api.setRowData(gridOptions.rowData);

  //   //   const grid = new Grid(ref!, props.options);
  //   //   onCleanup(grid.destroy);
  // });

  // return
  // <section>
  //   <div  id="map"></div>
  // </section>
  // // <div ref={ref}>

  // // </div>
  // ;

  return <div ref={ref} />;
};
// function onMount(arg0: () => void) {
//   throw new Error("Function not implemented.");
// }

render(() => <DeckBasic />, document.getElementById("app")!);
