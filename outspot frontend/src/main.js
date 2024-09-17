import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import store from "./store/store";

import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, min, email } from "vee-validate/dist/rules";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

extend("required", {
  ...required,
  message: "This field is required",
});
extend("email", {
  ...email,
  message: "Enter a valid email",
});
extend("min", {
  ...min,
  message: (field, { length }) => {
    const capitalizedField = capitalizeFirstLetter(field);
    return `${capitalizedField} should be at least ${length} characters.`;
  },
});

Vue.config.productionTip = false;

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.use(Vuelidate);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
