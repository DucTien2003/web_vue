import SocialMediaApp from "./views/SocialMediaApp.vue";
import Home from "./views/Home.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/social-media-app",
    name: "social-media-app",
    component: SocialMediaApp
  }
];
