import { defineStore } from "pinia";

export const useAlertStore = defineStore({
  id: 'alert',
  state: () => ({
    alerts: null
  }),
  actions: {
    success(message) {
      this.alert = { message, type: 'alert-sucess' };
    },
    error(message) {
      this.alert = { message, type: 'alert-danger'};
    },
    clear() {
      this.alert = null;
    }
  }
});
