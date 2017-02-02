import {
  Action,
  ActionCreator
} from 'redux';

export const INCREMENT: string = 'INCREMENT'; // tslint:disable-line
export const increment: ActionCreator<Action> = () => ({
  type: INCREMENT
});

export const DECREMENT: string = 'DECREMENT'; // tslint:disable-line
export const decrement: ActionCreator<Action> = () => ({
  type: DECREMENT
});
