import { Component, createEffect, createSignal, Show } from "solid-js";
import { StatusBox } from "./StatusBox";
import { PeriodTypeBox } from "./PeriodTypeBox";
import { PeriodBox } from "./PeriodBox";
import { LayersBox } from "./LayersBox";
import { FilteringBox } from "./FilteringBox";
import { AnalysisBox } from "./AnalysisBox";
import { MainNavbarTop } from "./MainNavbarTop";
import { useButtonTop } from "../../src/store/navbar-top";

const NavbarTop: Component = () => {
  const [statusB, { changeStatusB }] = useButtonTop();

  const [status, setStatus] = createSignal(statusB.isStatus);
  const [analysis, setAnalysis] = createSignal(statusB.isStatus);

  const [periodType, setPeriodType] = createSignal(false);
  const [period, setPeriod] = createSignal(false);
  const [layers, setLayers] = createSignal(false);
  //
  const toggleStatus = () => {
    console.log("ini status box");
    setStatus(!status());
    changeStatusB();
  };

  const togglePeriodType = () => {
    console.log("ini period type");
    setPeriodType(!periodType());
  };

  const togglePeriod = () => {
    console.log("ini period");
    setPeriod(!period());
  };

  const toggleLayers = () => {
    console.log("ini layers");
    setLayers(!layers());
  };
  //
  const toggleAnalysis = () => {
    console.log("ini analysis box");
    setLayers(!status());
    changeStatusB();
  };

  createEffect(() => {
    if (status() == false && periodType() == true) {
      setPeriodType(false);
    }
    if (status() == false && period() == true) {
      setPeriod(false);
    }
    if (status() == false && layers() == true) {
      setLayers(false);
    }
  });

  createEffect(() => {
    if (periodType() == true) {
      setPeriod(false);
      setLayers(false);
    }
    if (period() == true) {
      setPeriodType(false);
      setLayers(false);
    }
    if (layers() == true) {
      setPeriod(false);
      setPeriodType(false);
    }
  });

  return (
    <>
      <MainNavbarTop onClickStatusOpen={toggleStatus}  />
      
      <Show when={status()}>
        <StatusBox
          onClickClose={toggleStatus}
          onClickPeriodType={togglePeriodType}
          onClickPeriod={togglePeriod}
          onClickLayers={toggleLayers}
        />
      </Show>
      <Show when={periodType()}>
        <PeriodTypeBox onClickPeriodType={togglePeriodType} />
      </Show>
      <Show when={period()}>
        <PeriodBox onClickPeriod={togglePeriod} />
      </Show>
      <Show when={layers()}>
        <LayersBox onClickLayers={toggleLayers} />
      </Show>
     
      {/* <MainNavbarTop onClickAnalysisOpen={toggleAnalysis} />
      <Show when={analysis()}>
        <AnalysisBox />
      </Show> */}
    </>
  );
};

export default NavbarTop;
