import { atom, selector } from "recoil";

export const Minutes = atom({
  key: "minutes",
  default: 0,
});

export const hours = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(Minutes);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(Minutes, minutes);
  },
});
