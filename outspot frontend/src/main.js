import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, min } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required",
});
extend("min", {
  ...min,
  message: "Title should be at least {length} characters",
});

Vue.config.productionTip = false;

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.use(Vuelidate);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
