import { Component, createEffect, onMount } from "solid-js";
import { render } from "solid-js/web";
import { GoogleMap, MapsJSAPIOptions } from "@googlemaps/map-loader";
import { MapLoaderOptions } from "@googlemaps/map-loader/dist/map-loader";

// import "uno.css";
// import "daisyui/dist/full.css";

type MapsCallback = (
	map: google.maps.Map,
	polygon: google.maps.Polygon
) => void;

interface MapProps {
	polygonInitial?: google.maps.LatLngLiteral[];
	callback?: MapsCallback;
}

const castPosition: google.maps.LatLngLiteral = {
	lat: 52.1780726,
	lng: 0.1349691402320342,
};

async function initMap(
	callback?: MapsCallback,
	options?: {
		polygonInitial?: google.maps.LatLngLiteral[];
	}
) {
	// options for initial render
	const mapOptions: google.maps.MapOptions = {
		clickableIcons: false,
		center:
			(options?.polygonInitial && options.polygonInitial[0]) ||
			castPosition,
		zoom: 18,
		fullscreenControlOptions: {
			position: 12.0,
		},
		mapTypeControlOptions: {
			position: 3.0,
		},
		maxZoom: 32,
		minZoom: 2,
		restriction: {
			latLngBounds: {
				north: 85,
				south: -85,
				west: -179,
				east: 179,
			},
		},
	};

	// options for loading the Maps JS API
	const apiOptions: MapsJSAPIOptions = {
		version: "weekly",
	};

	// set id for container div
	const mapLoaderOptions: MapLoaderOptions = {
		apiKey: "AIzaSyCU-SCtr4kQc3yZgC2rRQbtwtZFYanfo98",
		divId: "map-container",
		mapOptions,
		apiOptions,
	};

	const mapLoader = new GoogleMap();

	const map = (await mapLoader.initMap(mapLoaderOptions)) as google.maps.Map;

	// add polygon
	const polygon = new google.maps.Polygon({ map, editable: true });

	polygon.setPath(options?.polygonInitial || []);

	// // add vertices on click
	// map.addListener("click", (e: google.maps.MapMouseEvent) => {
	// 	// only allow if no polygon
	// 	if (polygon.getPath().getLength() > 2) return;
	// 	const position = e.latLng;
	// 	const newPath = polygon.getPath();
	// 	newPath.push(position);
	// 	polygon.setPath(newPath);
	// });

	// callback && callback(map, polygon);

	return map;
}

const Map: Component<MapProps> = ({ callback, polygonInitial }) => {
	// createEffect(async () => {
	// 	await initMap(callback, { polygonInitial });
	// });
	onMount(async () => {
		await initMap(callback, { polygonInitial });
	});

	return <div id='map-container'></div>;
};

export default Map;

render(() => <Map />, document.getElementById("app")!);
