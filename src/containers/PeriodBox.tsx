import { Component, createEffect, createSignal, Show, onMount } from "solid-js";
import { useStore } from "../store";
import { useButtonTop } from "../store/navbar-top";

export interface PeriodBoxProps {
  onClickPeriod?: () => void;
  onClickPeriodType?: () => void;
  changePeriodType: () => void;
}
export const PeriodBox: Component<PeriodBoxProps> = (props) => {
  const [{ buttonTopStore }, setButtonTopStore] = useStore();
  const [startYear, setStartYear] = createSignal(2021);
  const [endYear, setEndYear] = createSignal(2021);

  const [startWeek, setStartWeek] = createSignal(1);
  const [endWeek, setEndWeek] = createSignal(1);

  const [startMaxWeek, setStartMaxWeek] = createSignal(1);
  const [endMaxWeek, setEndMaxWeek] = createSignal(1);

  const [maxYear, setMaxYear] = createSignal(2021);

  const [title, setTitle] = createSignal("Period");
  const [periodStartValue, { changePeriodStart }] = useButtonTop();
  const [periodEndValue, { changePeriodEnd }] = useButtonTop();

  const getWeekThisYear = (year: number, month: number, day: number) => {
    const now = new Date(year, month, day);
    const onejan = new Date(now.getFullYear(), 0, 1);
    const week = Math.ceil(
      ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
    );
    return week;
  };

  onMount(() => {
    let granularity = buttonTopStore.granularity;
    setTitle(
      "Period " + granularity.charAt(0).toUpperCase() + granularity.slice(1)
    );
    let thisYear = new Date().getFullYear();
    setStartYear(thisYear);
    setMaxYear(thisYear);
    setEndYear(thisYear);
    let thisMonth = new Date().getMonth();
    let thisDay = new Date().getDate();
    let thisWeekInYear = getWeekThisYear(thisYear, thisMonth, thisDay);
    setStartWeek(thisWeekInYear);
    setEndWeek(thisWeekInYear);

    if (thisYear % 4 == 0) {
      setStartMaxWeek(53);
      setEndMaxWeek(53);
    } else {
      setStartMaxWeek(52);
      setEndMaxWeek(52);
    }
  });

  const changeStartYear = (e: Event) => {
    let last_year = (e.target as HTMLInputElement).value;
    setStartYear(Number(last_year));
    if (Number(last_year) % 4 == 0) {
      setStartMaxWeek(53);
    } else {
      setStartMaxWeek(52);
    }
  };

  const changeEndYear = (e: Event) => {
    let last_year = (e.target as HTMLInputElement).value;
    setEndYear(Number(last_year));
    if (Number(last_year) % 4 == 0) {
      setEndMaxWeek(53);
    } else {
      setEndMaxWeek(52);
    }
  };

  const changeStartWeek = (e: Event) => {
    let last_week = (e.target as HTMLInputElement).value;
    setStartWeek(Number(last_week));
  };

  const changeEndWeek = (e: Event) => {
    let last_week = (e.target as HTMLInputElement).value;
    setEndWeek(Number(last_week));
  };

  const getValPeriod = (props:PeriodBoxProps) => {
    let granularity = buttonTopStore.granularity;
    let start = startYear() + "-" + startWeek();
    let end = endYear() + "-" + endWeek();
    if (granularity == "Weekly") {
      start = startYear() + "w" + startWeek();
      end = endYear() + "w" + endWeek();
    } else if (granularity == "Monthly") {
      start = startYear() + "m" + startWeek();
      end = endYear() + "m" + endWeek();
    }

    // changePeriodStart(start);
    changePeriodStart(start);
    changePeriodEnd(end);
    console.log(start);
    // console.log(props.onClickPeriod);
    props.changePeriodType();
    props.onClickPeriod
  };

  return (
    <div
      id='period'
      style='position: absolute; z-index:1; background-color:white; margin-top:140px; margin-left:415px; border-radius:0.2rem'
    >
      <div style='margin-left:2rem; margin-right:2rem; margin-top:1rem;  display: flex; flex-direction:row; justify-content:space-between;'>
        <div style='margin-right:3rem; font-weight:bold; font-size:20px;'>
          <p>Period {buttonTopStore.granularity}</p>
        </div>
        <div style='margin-left:3rem; '>
          <button
            onClick={props.onClickPeriod}
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

      <div style='margin:2rem; align-items:flex-end;'>
        <div style='justify-content:space-around; display:flex; '>
          <div style='width:30%;'>
            <p style='font-weight:bold; font-size:14px;'>
              Start Year
            </p>
            <input
              type='number'
              placeholder=''
              class='input input-bordered w-full max-w-xs'
              style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
              value={startYear()}
              max={maxYear()}
              onchange={(e) => changeStartYear(e)}
            />
            <p style='font-weight:bold; font-size:14px;'>End Year</p>
            <input
              type='number'
              placeholder=''
              class='input input-bordered w-full max-w-xs'
              style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
              value={endYear()}
              max={maxYear()}
              onchange={(e) => changeEndYear(e)}
            />
          </div>
          <div style=''>
            <p style='font-weight:bold; font-size:14px;'>
              Start Week
            </p>
            <input
              type='number'
              placeholder=''
              class='input input-bordered w-full max-w-xs'
              style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
              value={startWeek()}
              min='1'
              max={startMaxWeek()}
              onchange={(e) => changeStartWeek(e)}
            />
            <p style='font-weight:bold; font-size:14px;'>End Week</p>
            <input
              type='number'
              placeholder=''
              class='input input-bordered w-full max-w-xs'
              style='border-top:unset; border-right:unset; border-left:unset; border-radius:unset'
              value={endWeek()}
              min='1'
              max={endMaxWeek()}
              onchange={(e) => changeEndWeek(e)}
            />
            <div class='flex justify-end mt-4'>
              <button
                class='btn btn-sm btn-primary'
                onclick={ () =>getValPeriod}
                
              >
                <i class='i-mdi:check-bold' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
