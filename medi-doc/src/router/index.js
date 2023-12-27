import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import SignupView from '../views/SignupView.vue';
import UsersView from '../components/UsersView.vue';
import { auth } from '../firebase'
const routes =[
{
    path :'/',
    name:'home',
    component: HomeView
},
{
    path :'/Login',
    name:'login',
    component: LoginView
},
{
    path:'/Signup',
    name:'signup',
    component: SignupView
},

{
    path :'/users-area',
    name:'Users',
    component: UsersView,
    meta:{
        requiresAuth: true
    }
},

]
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  router.beforeEach((to,from,next)=>{
    const authenticatedUser = auth.currentUser;
    const requiresAuth=to.matched.some(record=>record.meta.requiresAuth);
    if(requiresAuth && !authenticatedUser) next ('login')
    else next()
  })
  export default router