import { render } from "solid-js/web";
import { createSignal } from "solid-js";
import MapGL, { Layer, Source, Viewport } from "solid-map-gl";
import "uno.css";
import "daisyui/dist/full.css";
import "mapbox-gl/dist/mapbox-gl.css";

// Please use you own key
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoia2FpaHVlYm5lciIsImEiOiJjbDA4cHl4ajIwNXU3M2p0YW5qNHQ4aXRoIn0.6Rk947DgABOTwfbdAEaVVQ";

const App = () => {
  const [viewport, setViewport] = createSignal({
    center: [106.8139473, -6.3255449],
    zoom: 11,
  } as Viewport);

  return (
    <>
      <MapGL
        style={{ height: "100%" }}
        options={{
          accessToken: MAPBOX_ACCESS_TOKEN,
        }}
        viewport={viewport()}
        onViewportChange={(evt: Event) => setViewport(evt)}
      >
        <Source
          source={{
            type: "raster",
            tiles: [
              // "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",
              "http://mt1.google.com/vt/lyrs=m&hl=id&x={x}&y={y}&z={z}",
              "http://mt0.google.com/vt/lyrs=m&hl=id&x={x}&y={y}&z={z}"
            ],
          }}
        >
          <Layer
            style={{
              type: "raster",
            }}
          />
        </Source>
      </MapGL>
    </>
  );
};

render(() => <App />, document.getElementById("app")!);
