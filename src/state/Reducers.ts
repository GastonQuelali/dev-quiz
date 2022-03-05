import Actions from './Actions';
import {
  IActions,
  IAppState,
  IState,
} from './interfaces';

export const AppReducer = (state: IAppState, action: IActions): IAppState => {
  switch (action.type) {
    case Actions.SET_DATA: {
      const { grifos, costos } = action.payload;
      return { ...state, grifos, costos };
    }
    default:
      return state;
  }
};

const reducerMap: any = {
  AppReducer: 'appState',
};

export const combinedReducers =
  (slices: any) =>
  (state: IState, action: IActions): IState =>
    Object.keys(slices).reduce(
      (acc: any, val: any) => ({
        ...acc,
        [reducerMap[val]]: slices[val](acc[reducerMap[val]], action),
      }),
      state
    );

export const rootReducer = combinedReducers({
  AppReducer,
});
