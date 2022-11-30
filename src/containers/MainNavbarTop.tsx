import { Component, createEffect, createSignal, Show } from "solid-js";
import imglogo from "../../photos/download.png";

interface TopProps {
    onClickStatusOpen?: () => void,
    // onClickAnalysisOpen?: () => void,
};

export const MainNavbarTop:Component<TopProps> = (props) => {
  return (
    <div style='position: absolute; z-index:1; display: flex; width:100%; justify-content: space-between; margin-top: 1rem; margin-left: 1rem;'>
      {/* logo img  */}
      <div style='align-content:center; position: center; margin-top: 2rem; '>
        <img src={imglogo} alt='imglogo' style='height: 40%; margin:0px;' />
      </div>
      {/* end logo img  */}

      {/* button  */}
      <div style='position: center; margin-top: 1rem'>
        <button
          onClick={props.onClickStatusOpen}
          class='btn-xs btn-primary'
          style='border-radius: unset;'
        >
          <div class='i-mdi:menu w-3 h-3' />
        </button>
        <button
          // onClick={props.onClickAnalysisOpen}
          class='btn-xs btn-warning'
          style='margin: 0.2rem; border-radius: unset;'
        >
          <div class='i-mdi:wifi w-3 h-3' />
        </button>
        <button
          // onClick={onAnalysis}
          class='btn-xs btn-success'
          style='margin-right: 0.2rem; border-radius: unset;'
        >
          <div class='i-mdi:image w-3 h-3' />
        </button>
        <button class='btn-xs btn-primary' style='border-radius: unset;'>
          <div class='i-mdi:map-check w-3 h-3' />
        </button>

        <button
          class='btn-xs btn-active btn-ghost'
          style='margin-left: 0.3rem; border-radius: unset;'
        >
          <div class='i-mdi:vector-line w-3 h-3' />
        </button>
        <button
          class='btn-xs btn-active btn-ghost'
          style='border-radius: unset;'
        >
          <div class='i-mdi:mdi w-3 h-3' />
        </button>
        <button
          class='btn-xs btn-active btn-ghost'
          style='border-radius: unset;'
        >
          <div class='i-mdi:location w-3 h-3' />
        </button>
        <button
          class='btn-xs btn-active btn-ghost'
          style='border-radius: unset;'
        >
          <div class='i-mdi:ruler w-3 h-3' />
        </button>
        <button
          class='btn-xs btn-active btn-ghost'
          style='border-radius: unset;'
        >
          <div class='i-mdi:layers w-3 h-3' />
        </button>
        <button
          class='btn-xs btn-active btn-ghost'
          style='border-radius: unset;'
        >
          <div class='i-mdi:alpha-m-box w-3 h-3' />
        </button>
      </div>
      {/* end of button  */}

      {/* search  */}
      <div
        class='form-control'
        style='position: center; margin: 0.1rem; margin-top: 1rem; flex-direction: row;'
      >
        <div style='margin-right:0.5rem;'>
          <div class='input-group-xs'>
            <select class='select select-bordered'>
              <option disabled selected>
                Select category
              </option>
              <option>Provinsi</option>
              <option>Kabupaten</option>
            </select>
          </div>
        </div>
        <div class='input-group'>
          <input
            type='text'
            placeholder='Search…'
            class='input-xs input-bordered'
          />
          <button class='btn-xs btn-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
        <button
          class='btn-xs btn-primary'
          style='margin-left:0.5rem; border-radius:50%; margin-right:3.5rem;'
        >
          <div class='i-mdi:user w-3 h-4' />
        </button>
      </div>

      {/* end of search  */}
    </div>
  );
};
