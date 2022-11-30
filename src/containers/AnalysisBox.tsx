import { Component, createEffect, createSignal, Show } from "solid-js";

export interface AnalysisBoxProps {
  onClickClose?: () => void;
}
export const AnalysisBox: Component<AnalysisBoxProps> = (props) => {
  return (
    <div
      id='analysis'
      style='position: absolute; z-index:1; background-color:white; margin-top:140px; margin-left:15px; border-radius:0.2rem;'
    >
      <div style='margin-left:2rem; margin-right:2rem; margin-top:1rem;  display: flex; flex-direction:row; justify-content:space-between;'>
        <div style='margin-right:3rem; font-weight:bold; font-size:20px;'>
          <p>Thematic Analysis</p>
        </div>
        <div style='margin-left:3rem; '>
          <button
          onClick={props.onClickClose}
            class='btn-xs btn-active btn-error'
            style='border-radius:50%; margin-right:0.2rem;;'
          >
            <div class='i-mdi:close w-3 h-3' />
          </button>
        </div>
      </div>
      <hr
        color='blue'
        style='margin-left:1.5rem; margin-right:1.5rem; margin-top:0.5rem; border-width:1px;'
      />
      <div style='display:flex; flex-direction:column; justify-content: flex-end; margin-top:1rem; margin-left:2rem; margin-right:2rem; margin-bottom:2rem; align-content; space-between; '>
        <input
          type='text'
          placeholder='Select Filtering layer'
          class='input input-bordered w-full max-w-xs'
          style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
        />
        <input
          type='text'
          placeholder='Select Filtering Counter'
          class='input input-bordered w-full max-w-xs'
          style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
        />

        <div style='display:flex; justify-content: space-between;'>
          <div>
            <button
              class='btn-xs btn-active btn-primary'
              style='margin: 0.1rem; border-radius:50%;'
            >
              {" "}
              <div class='i-mdi:arrow-up w-3 h-3' />
            </button>
            <button
              class='btn-xs btn-active btn-primary'
              style='margin: 0.1rem; border-radius:50%;'
            >
              {" "}
              <div class='i-mdi:arrow-down w-3 h-3' />
            </button>
            <button
              class='btn-xs btn-active btn-warning'
              style='margin: 0.1rem; border-radius:50%;'
            >
              {" "}
              <div class='i-mdi:trash w-3 h-3' />
            </button>
            <button
              class='btn-xs btn-active btn-warning'
              style='margin: 0.1rem; border-radius:50%;'
            >
              {" "}
              <div class='i-mdi:trash w-3 h-3' />
            </button>
          </div>
          <div>
            <button
              class='btn-xs btn-active btn-warning'
              style='margin: 0.1rem; border-radius:50%;'
            >
              {" "}
              <div class='i-mdi:plus w-3 h-3' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
