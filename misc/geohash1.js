/*
* https://deck.gl/docs/api-reference/geo-layers/geohash-layer
*/
const {DeckGL, GeohashLayer} = deck;

const layer = new GeohashLayer({
  id: 'GeohashLayer',
  data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.geohashes.json',
  
  /* props from GeohashLayer class */
  
  getGeohash: d => d.geohash,
  
  /* props inherited from GeoCellLayer class */
  
  elevationScale: 1000,
  extruded: true,
  filled: true,
  getElevation: d => d.value,
  getFillColor: d => [d.value * 255, (1 - d.value) * 128, (1 - d.value) * 255],
  // getLineColor: [0, 0, 0, 255],
  // getLineWidth: 1,
  // lineJointRounded: false,
  // lineMiterLimit: 4,
  // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  // lineWidthMinPixels: 0,
  // lineWidthScale: 1,
  // lineWidthUnits: 'meters',
  // material: true,
  // stroked: true,
  wireframe: false,
  
  /* props inherited from Layer class */
  
  // autoHighlight: false,
  // coordinateOrigin: [0, 0, 0],
  // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
  // highlightColor: [0, 0, 128, 128],
  // modelMatrix: null,
  // opacity: 1,
  pickable: true,
  // visible: true,
  // wrapLongitude: false,
});

new DeckGL({
  mapStyle: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  initialViewState: {
    longitude: -122.4,
    latitude: 37.74,
    zoom: 11,
    maxZoom: 20,
    pitch: 30,
    bearing: 0
  },
  controller: true,
  getTooltip: ({object}) => object && `${object.geohash} value: ${object.value}`,
  layers: [layer]
});
  