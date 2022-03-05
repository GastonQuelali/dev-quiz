export interface IActions {
  type: string;
  payload?: any;
}

export interface IAppState {
  grifos: [] | null;
  costos: [] | null;
}

export interface IState {
  appState: IAppState;
}

export interface IContext {
  state: IState;
  dispatch: (arg0: IActions) => void;
}
