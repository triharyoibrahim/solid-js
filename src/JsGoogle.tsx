import {
  Component,
  createEffect,
  onCleanup,
  onMount,
  createSignal,
} from "solid-js";
// import { createStore } from "solid-js/store";
import { render } from "solid-js/web";

import { mapLoader, defaultOption } from "./map";

// import {Deck, MapView, OrthographicView, WebMercatorViewport} from '@deck.gl/core/typed';

import "uno.css";
import "daisyui/dist/full.css";

export const JsGoogle: Component = () => {
  let ref: HTMLDivElement | undefined;
  // let googleMap: google.maps.Map | undefined;

  onMount(() => {
    mapLoader.load().then((google) => {
      console.log("--------- google: ", google);
      new google.maps.Map(
        // document.getElementById("map") as HTMLElement,
        ref!,
        defaultOption
      );
    });
  });

  //Don't destroy the existing map, re-use it.
  // There have been reports of memory leaks when attempting to destroy a map instance and recreate i
  // onCleanup(() => {
  //     if (googleMap) {
  //       googleMap.unbindAll;
  //     }
  //   });

  return <div ref={ref} style="height: 100%; width: 100%" />;
  //   return <div id="map"  style="height: 100%; width: 100%"/>;
};

render(() => <JsGoogle />, document.getElementById("app")!);
