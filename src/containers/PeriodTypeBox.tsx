import {
  Component,
  createEffect,
  createSignal,
  Show,
  onMount,
  For,
} from "solid-js";
import { useButtonTop } from "../store/navbar-top";
import { useStore } from "../store";

export interface PeriodTypeBoxProps {

  onClickPeriodType: () => void;
  onClickPeriod?: () => void;
}

export const PeriodTypeBox: Component<PeriodTypeBoxProps> = (props) => {
  const [{buttonTopStore}, setState] = useStore();
  console.log(props)

  const [periodType, setPeriodType] = createSignal([
    { id: "day", name: "Day" },
  ]);
  const [periodTypeValue, { changePeriodType }] = useButtonTop();

  onMount(() => {
    setPeriodType([
      { id: "Daily", name: "Daily" },
      { id: "Weekly", name: "Weekly" },
      { id: "Monthly", name: "Monthly" },
    ]);
  });

  const onChangePeriodType = (id: String) => {
    console.log(id);
    changePeriodType(id);
  };

  return (
    <div
      id='periodType'
      style='position: absolute; z-index:1; background-color:white; margin-top:140px; margin-left:415px; border-radius:0.2rem;'
    >
      <div style='margin-left:2rem; margin-right:2rem; margin-top:1rem;  display: flex; flex-direction:row; justify-content:space-between;'>
        <div style='margin-right:3rem; font-weight:bold; font-size:20px;'>
          <p>Period Type</p>
        </div>
        <div style='margin-left:3rem; '>
          <button
            onClick={props.onClickPeriodType}
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

      <div class='form-control' style='margin: 1rem; '>
        <div
          class='input-group'
          style='justify-content:center; border-top:unset;'
        >
          <select
            class='select border-top'
            onChange={(e) => onChangePeriodType(e.target.value)}
          >
            <option disabled selected>
              Select Period
            </option>
            <For each={periodType()}>
              {(item) => <option value={item.id}>{item.name}</option>}
            </For>
          </select>
          {/* <button class="btn" onClick={() => gantiNama()}>coba</button> */}
        </div>
      </div>
    </div>
  );
};
