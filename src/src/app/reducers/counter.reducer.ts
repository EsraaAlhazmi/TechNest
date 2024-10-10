import { createReducer,on } from "@ngrx/store";
import { increment } from "../state/counter/counter.actions";

export const initialstate=0;

//create increment event 
export const CounterReducer=createReducer(
    initialstate,
    on(increment,(state)=>state+1)
)


//service=> inject 
