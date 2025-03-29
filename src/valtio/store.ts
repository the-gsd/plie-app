import { proxy } from "valtio";
import { valtioStateType } from "../types/valtioStateTypes";

export const state: valtioStateType = proxy({
  eventListing: [],
  name: "roshni",
});
