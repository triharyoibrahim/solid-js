import { Component, onMount, createSignal, For } from "solid-js";
// import { createStore } from "solid-js/store";
// import {Image} from "solid-map-gl";
// import { Deck } from "@deck.gl/core/typed";
import { render } from "solid-js/web";
import { GoogleMapsOverlay } from "@deck.gl/google-maps/typed";
import { ScatterplotLayer } from "@deck.gl/layers/typed";
import { MVTLayer, S2Layer } from "@deck.gl/geo-layers/typed";
import { mapLoader } from "./map";
import { useStore } from "./store";
import "uno.css";
import "daisyui/dist/full.css";
import imglogo from "../photos/download.png";

const DeckGoogle: Component = () => {
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    mapLoader.load().then((google) => {
      console.log("--------- google: ", google);

      const map = new google.maps.Map(ref!, {
        // center: { lat: -6.317025, lng: 106.815070 },
        // center: { lat: -3.5948029999999997, lng: 102.616596 },
        center: { lat: -0.076046, lng: 98.280773 },
        zoom: 14,
        // styles: mapStyles
      });

      // let param = encodeURIComponent('[1, 2, 3]');

      const overlay = new GoogleMapsOverlay({
        layers: [
          new ScatterplotLayer({
            data: [
              {
                incident_id: 95261,
                n_killed: 10,
                latitude: -6.21314,
                longitude: 106.60865,
                color: [255, 0, 0],
                radius: 20,
              },
              {
                incident_id: 92272,
                n_killed: 0,
                latitude: -7.369592,
                longitude: 112.72113,
                color: [0, 255, 0],
                radius: 30,
              },
            ],
            opacity: 0.8,
            filled: true,
            radiusMinPixels: 20,
            radiusMaxPixels: 50,
            getPosition: (d) => [d.longitude, d.latitude],
            getFillColor: (d) =>
              d.n_killed > 0 ? [200, 0, 40, 150] : [255, 140, 0, 100],
            // getColor: (d) => d.color,
            // getRadius: (d )=> d.radius
          }),

          new MVTLayer({
            id: "cell_mini_map",
            opacity: 0.3,
            // data: ['http://localhost:3000/public.cell_mini/{z}/{x}/{y}.pbf'],
            // data: ['http://localhost:3000/public.covmo_h3/{z}/{x}/{y}.pbf'],
            data: [
              "http://localhost:5173/public.site_covmo_h3/{z}/{x}/{y}.pbf",
            ],
            // data: ["http://localhost:3000/rpc/public.function_test1/{z}/{x}/{y}.pbf"],
            // data: ["http://localhost:3000/rpc/public.function_test2/{z}/{x}/{y}.pbf"],
            // maxZoom: 0,
            // minZoom: 20,
            // extent: [-180, -80, 180, 80],
            stroked: false,
            getLineColor: [192, 192, 192],
            // getFillColor: [110, 126, 136],
            getFillColor: (f: any) => {
              // console.log("f", f);
              let x = f.properties.avg_rsrp;
              if (x >= -92) {
                return [110, 185, 255];
              } else if (x >= -102) {
                return [66, 232, 49];
              } else if (x >= -110) {
                return [255, 195, 0];
              } else {
                return [246, 51, 25];
              }
            },
            pickable: true,
            // onHover: (info, event) => console.log('Hovered:', info, event),
            onClick: (info, event) => console.log("Clicked:", info, event),
            // getPointRadius: 2,
            // pointRadiusUnits: 'pixels',
            // onTileError: error => {
            //   if (error.message.includes('404')) {
            //     // trying to load tiles in the previous viewport, ignore
            //   } else {
            //     throw error;
            //   }
            // },
            // lineWidthMinPixels: 1,
            // binary,
            // loadOptions: {
            //   mvt: {
            //     workerUrl: null
            //   }
            // }
          }),

          // new S2Layer({
          //   id: 's2-layer',
          //   data: [
          //     {
          //       "token": 5764608310168683956,
          //       "value": 0.5979242952642347
          //     }, {
          //       "token": 5764608310159115803,
          //       "value": 0.5446256069712141
          //     }, {
          //       "token": 5764608485846642431,
          //       "value": 0.1187171597109975
          //     }, {
          //       "token": 5764608485855847930,
          //       "value": 0.2859146314037557
          //     },
          //     {
          //       // "token": 5764608304299625653,
          //       // "token": "500000b5e70bccb5",
          //       // "token": "2e6f1ab8733a554b",
          //       // "token": 3345922427669075275,
          //       "token": 3345963416903745536,
          //       "value": 0.19549012367504126
          //     },
          //     {
          //       // "token": 5764608303942304164,
          //       "token": "500000b5d1bf81a4",
          //       "value": 0.9373452974230604
          //     }
          //   ],

          //   pickable: true,
          //   stroked: true,
          //   autoHighlight: true,
          //   // getFillColor: [100, 100, 100],
          //   getLineColor: [0, 0, 0],
          //   lineWidthUnits: "pixels",
          //   getLineWidth: 3,

          //   // wireframe: false,
          //   filled: true,
          //   // extruded: true,
          //   elevationScale: 1000,
          //   getS2Token: d => d.token,
          //   // getFillColor: d => [d.value * 255, (1 - d.value) * 255, (1 - d.value) * 128],
          //   getFillColor: d => [255, 0, 0],
          //   getElevation: d => d.value
          // })
        ],
      });

      overlay.setMap(map);
    });
  });
  //   const onShow = () => {
  //     const x = document.getElementById("myDIV");
  //     if (x.style.display === "none") {
  //       x.style.display = "block";
  //     } else {
  //       x.style.display = "none";
  //     }
  //   };

  return <div id='map' ref={ref} class='w-full h-full'></div>;
};

// render(() => <DeckGoogle />, document.getElementById("app")!);

export default DeckGoogle;
