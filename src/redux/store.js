import {createStore} from "redux";
import { countreducer } from "./myreducer";

export const Mystore=createStore(countreducer)