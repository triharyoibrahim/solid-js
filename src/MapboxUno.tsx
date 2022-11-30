import { render } from "solid-js/web";
import { createSignal } from "solid-js";
import MapGL, { Viewport } from "solid-map-gl";
import "uno.css";
import "daisyui/dist/full.css";

// Please use you own key
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoia2FpaHVlYm5lciIsImEiOiJjbDA4cHl4ajIwNXU3M2p0YW5qNHQ4aXRoIn0.6Rk947DgABOTwfbdAEaVVQ";

const App = () => {
  const [viewport, setViewport] = createSignal({
    center: [-122.45, 37.78],
    zoom: 11,
  } as Viewport);

  return (
    <>
      <MapGL
        style={{ height: "60%" }}
        options={{
          accessToken: MAPBOX_ACCESS_TOKEN,
          style: "mb:basic",
        }}
        viewport={viewport()}
        onViewportChange={(evt) => setViewport(evt)}
      ></MapGL>
            <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <p>Test</p>

      <div class="i-mdi-alarm text-orange-400 w-32 h-32" />
      <div class="i-mdi:map-check text-blue-500 w-32 h-32" />
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css"
        rel="prefetch stylesheet"
      />
    </>
  );
};

render(() => <App />, document.getElementById("app")!);
