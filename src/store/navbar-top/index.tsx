import { useStore } from "..";
import { initialState } from './_state';

export const useButtonTop = () => {
    const [{buttonTopStore}, setState] = useStore();
   
    const changeStatusB = () => {
        setState("buttonTopStore", {isStatus: !buttonTopStore.isStatus});
        // console.log('change status button ', buttonTopStore.isStatus);
    }

    const changePeriodType = (periodType: string) => {
        setState("buttonTopStore", {granularity: periodType});
    }

    const changePeriodStart = (periodStart: string) => {
        setState("buttonTopStore", {periodStart: periodStart});
    }

    const changePeriodEnd = (periodEnd: string) => {
        setState("buttonTopStore", {periodEnd: periodEnd});
    }

   return [
        buttonTopStore,
        {
            changeStatusB,
            changePeriodType,
            changePeriodStart,
            changePeriodEnd
        }
   ]
}
