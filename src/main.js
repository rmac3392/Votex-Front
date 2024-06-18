import { createApp } from "vue";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import DropZone from 'dropzone-vue';
import "./style.css";
import App from "./App.vue";
import router from "../src/route.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(mdiVue, {
  icons: mdijs,
});
app.use(DropZone);
