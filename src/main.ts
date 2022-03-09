/*
 * @Author: Vinton
 * @Date: 2022-03-04 21:17:53
 * @Description: file content
 */
import { createApp } from "vue";
import Pinia from "@/store/index";
import App from "./App.vue";
createApp(App).use(Pinia).mount("#app");
