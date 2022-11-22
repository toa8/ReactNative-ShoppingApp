import create from "zustand";

const useDetailStore = create((set) => ({
  detail: "",
  getDetail: (detailText) => set({ detail: detailText }),
}));

export default useDetailStore;
