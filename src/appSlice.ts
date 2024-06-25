import { createSlice } from "@reduxjs/toolkit";

interface State {
  usd: number | "";
  eur: number | "";
}

const rate: number = 1.07;

export const appSlice = createSlice({
  name: "converting",
  initialState: {
    usd: "",
    eur: "",
  } as State,
  reducers: {
    changeValue: (state, actions) => {
      if (actions.payload.value === 0) {
        state.usd = "";
        state.eur = "";
        return;
      }

      if (actions.payload.name === "usd") {
        state.usd = actions.payload.value;

        const eur = actions.payload.value * rate;
        state.eur = Math.round(eur);
      } else if (actions.payload.name === "eur") {
        state.eur = actions.payload.value;

        const usd = actions.payload.value / rate;
        state.usd = Math.round(usd);
      }
    },
  },
});

export const { changeValue } = appSlice.actions;

export default appSlice.reducer;
