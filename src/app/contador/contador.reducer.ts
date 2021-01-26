import { incrementar, decrementar } from './contador.action';
import { Action } from "@ngrx/store";

export function contadorReducer(state: number = 10, action: Action) {
    switch (action.type) {
        case incrementar.type:
            return state + 1;
        case decrementar.type:
            return state - 1;
        default:
            return state;
    }
}