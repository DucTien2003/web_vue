import Home from "./views/Home.vue";
import SocialMediaApp from "./views/SocialMediaApp.vue";
import PostManager from "./views/PostManager.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/social-media-app",
    name: "social-media-app",
    component: SocialMediaApp
  },
  {
    path: "/post-manager",
    name: "post-manager",
    component: PostManager
  }
];
