import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far);

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
