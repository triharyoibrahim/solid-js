import { Component, createEffect, createSignal, Show } from "solid-js";

export interface LayersBoxProps {
  
  onClickPeriodType?: () => void;
  onClickPeriod?: () => void;
  onClickLayers?: () => void;
}

export const LayersBox: Component<LayersBoxProps> = (props) => {
  return (
    <div
      id='layers'
      style='position: absolute; z-index:1; background-color:white; margin-top:140px; margin-left:415px; border-radius:0.2rem'
    >
      <div style='margin-left:2rem; margin-right:2rem; margin-top:1rem;  display: flex; flex-direction:row; justify-content:space-between;'>
        <div style='margin-right:3rem; font-weight:bold; font-size:20px;'>
          <p>Layers</p>
        </div>
        <div style='margin-left:3rem; '>
          <button
            //   onClick={}
            class='btn-xs btn-active btn-primary'
            style='margin: 0.1rem; border-radius:50%;'
          >
            {" "}
            <div class='i-mdi:layers w-3 h-3' />
          </button>
          <button
            //   onClick={}
            class='btn-xs btn-active btn-primary'
            style='margin: 0.1rem; border-radius:50%;'
          >
            {" "}
            <div class='i-mdi:arrow-up w-3 h-3' />
          </button>
          <button
            //   onClick={}
            class='btn-xs btn-active btn-primary'
            style='margin: 0.1rem; border-radius:50%;'
          >
            {" "}
            <div class='i-mdi:arrow-down w-3 h-3' />
          </button>
          <button
            onClick={props.onClickLayers}
            class='btn-xs btn-active btn-success'
            style='margin: 0.1rem; border-radius:50%;'
          >
            {" "}
            <div class='i-mdi:close w-3 h-3' />
          </button>
          <button
            //   onClick={}
            class='btn-xs btn-active btn-warning'
            style='margin: 0.1rem; border-radius:50%;'
          >
            {" "}
            <div class='i-mdi:trash w-3 h-3' />
          </button>
          <button
            onClick={props.onClickLayers}
            class='btn-xs btn-active btn-error'
            style='margin: 0.1rem; border-radius:50%;'
          >
            {" "}
            <div class='i-mdi:close w-3 h-3' />
          </button>
        </div>
      </div>

      <hr
        color='blue'
        style='margin-left:1.5rem; margin-right:1.5rem; margin-top:0.5rem; border-width:1px;'
      />
    </div>
  );
};
