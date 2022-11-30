import {
    createContext,
    useContext,
    createEffect,
    Component,
    Context,
    JSXElement
} from 'solid-js';
import { createStore, SetStoreFunction, Store } from 'solid-js/store';
import { rootInitialState, RootState } from './_state';
import { loadState, stateStatusButton } from '../lib/localStorage';
import { mergeDeep, pick, omit } from '../lib/helpers';
import { STATUS_BUTTON } from '../config/app';

const initialState = mergeDeep(rootInitialState(), loadState() || {});
const StoreContext = createContext();

const createProvidedStore = () =>
    createStore<RootState>(initialState as RootState);

type StoreProviderProps = {
    children: JSXElement;
    store?: Store<RootState>;
    setStore?: SetStoreFunction<RootState>;
};

export const StoreProvider = (props: StoreProviderProps) => {
    const store = createProvidedStore();

    createEffect(() => { 
        const [{ buttonTopStore }] = store;

        console.log('any change through here ', buttonTopStore.isStatus);
        stateStatusButton(buttonTopStore.isStatus.toString());
        console.log("local storage ", localStorage.getItem(STATUS_BUTTON));

        // stateGranularity(buttonTopStore.granularity);
        // console.log("local GRANULARITY storage ", localStorage.getItem(GRANULARITY));
        
    });

    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    );
};

export const useStore = () =>
    useContext(StoreContext) as [Store<RootState>, SetStoreFunction<RootState>];
