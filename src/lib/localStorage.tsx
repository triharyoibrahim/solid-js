import { STATUS_BUTTON } from '../config/app';

export const stateStatusButton = (last_status: string) => {
    try {
        localStorage.setItem(STATUS_BUTTON, last_status);
    } catch (error) {
        return false;
    }
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");

        return serializedState === null
            ? undefined
            : JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};
