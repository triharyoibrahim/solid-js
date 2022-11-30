export interface ButtonTopStoreState {
    isStatus: boolean;
    granularity: string;
    periodStart: string;
    periodEnd: string;
}

export const initialState = (): ButtonTopStoreState => ({
    isStatus: false,
    granularity: '',
    periodStart: '',
    periodEnd: '',
});
