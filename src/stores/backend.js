import { defineStore } from "pinia";

export const useBackendStore = defineStore("backend", {
  state: () => ({
    url: "http://stockmanager.mooo.com",
  }),
  actions: {},
});
