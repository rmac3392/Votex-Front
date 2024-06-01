import { createWebHistory, createRouter } from "vue-router";
import AdminPage from "../src/pages/AdminPage.vue";
import LoginPage from "../src/pages/LoginPage.vue";
import RegisterPage from "../src/pages/RegisterPage.vue";
import VotePage from "../src/pages/VotePage.vue";

const routes = [
  { path: "/", name: "LoginPage", component: LoginPage },
  { path: "/adminPage", name: "AdminPage", component: AdminPage },
  { path: "/registerPage", name: "RegisterPage", component: RegisterPage },
  { path: "/votePage", name: "VotePage", component: VotePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
