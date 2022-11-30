// import { initialState as StatusButtonInitialState, StatusButtonState } from "./button-top/_state";
import { initialState as ButtonTopStoreInitialState, ButtonTopStoreState } from "./navbar-top/_state";

export interface RootState {
    buttonTopStore: ButtonTopStoreState;
}

export const rootInitialState = (): RootState => ({ 
    buttonTopStore: ButtonTopStoreInitialState(),
});