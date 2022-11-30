import { Component, createEffect, createSignal, Show } from "solid-js";
import { useStore } from "../store";

export interface StatusBoxProps {
  onClickClose: () => void;
  onClickPeriodType: () => void;
  onClickPeriod: () => void;
  onClickLayers: () => void;
}
export const StatusBox: Component<StatusBoxProps> = (props) => {
  const [{buttonTopStore}, setState] = useStore();
  console.log(props)

  return (
    <div
      id='myDIV'
      style='position: absolute; z-index:1; background-color:white; margin-top:140px; margin-left:15px; border-radius:0.2rem;'
    >
      <div style='margin-left:2rem; margin-right:2rem; margin-top:1rem;  display: flex; flex-direction:row; justify-content:space-between;'>
        <div style='margin-right:3rem; font-weight:bold; font-size:20px;'>
          <p>Status</p>
        </div>
        <div style='margin-left:3rem; '>
          <button
            class='btn-xs btn-active btn-accent'
            style='border-radius:50%; margin-right:0.2rem;;'
          >
            <div class='i-mdi:user w-3 h-3' />
          </button>
          <button
            class='btn-xs btn-warning'
            style='margin-right:0.2rem; border-radius:50%;'
          >
            <div class='i-mdi:layers w-3 h-3' />
          </button>
          <button
            onClick={props.onClickClose}
            class='btn-xs btn-error'
            style='border-radius:50%;'
          >
            <div class='i-mdi:close w-3 h-3' />
          </button>
        </div>
      </div>

      <hr
        color='blue'
        style='margin-left:1.5rem; margin-right:1.5rem; margin-top:0.5rem; border-width:1px;'
      />

      <div style='margin-left:2rem; margin-right:2rem; margin-top:1rem; margin-bottom:1.5rem;'>
        <div style='display:flex; margin:0.5rem; align-items: flex-end;'>
          <p style='font-weight:bold; width:55%; font-size:14px;'>
            Period Type
          </p>
          <input
            type='text'
            placeholder=''
            class='input input-bordered w-full max-w-xs'
            style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
            value={buttonTopStore.granularity}
            readOnly
          />
          <button
           onClick={props.onClickPeriodType}
            class='btn-xs'
            style='margin-right:;'
          >
            <div class='i-mdi:pencil w-3 h-3' />
          </button>
        </div>

        <div>
          <div style='display:flex;  margin:0.5rem; align-items:flex-end;'>
            <p style='font-weight:bold; width:55%; font-size:14px;'>Period</p>{" "}
            {}
            <input
              type='text'
              placeholder=''
              class='input input-bordered w-full max-w-xs'
              style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
              value={buttonTopStore.periodStart}
              readOnly
            />
            <button
           onClick={props.onClickPeriod}
              class='btn-xs'
              style='margin-right:;'
            >
              <div class='i-mdi:pencil w-3 h-3' />
            </button>
          </div>
          <div style='display:flex; flex-direction:row; justify-content: flex-end; margin-right:2.1rem; margin-left:6.5rem;'>
            <input
              type='text'
              placeholder=''
              class='input input-bordered w-half max-w-xs'
              style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
              value={buttonTopStore.periodEnd}
              readOnly
            />
          </div>
        </div>

        <div>
          <div style='display:flex;  margin:0.5rem; align-items:flex-end;'>
            <p style='font-weight:bold; width:55%; font-size:14px;'>Layers</p>
            <input
              type='text'
              placeholder=''
              class='input input-bordered w-full max-w-xs'
              style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
              readOnly
            />
            <button
              onClick={props.onClickLayers}
              class='btn-xs'
              style='margin-right:;'
            >
              <div class='i-mdi:pencil w-3 h-3' />
            </button>
          </div>
          <div style='display:flex; flex-direction:row; justify-content: flex-end;  margin-right:2.1rem; margin-left:6.5rem;'>
            <input
              type='text'
              placeholder=''
              class='input input-bordered w-half max-w-xs'
              style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
              readOnly
            />
          </div>
          <div style='display:flex; flex-direction:row; justify-content: flex-end;  margin-right:2.1rem; margin-left:6.5rem;'>
            <input
              type='text'
              placeholder=''
              class='input input-bordered w-half max-w-xs'
              style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};
