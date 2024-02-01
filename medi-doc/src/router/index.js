import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import AdminView from '../views/AdminView.vue';
import SignupView from '../views/SignupView.vue';
import UsersView from '../views/medecinView.vue';
import patientView from '../views/patientView.vue';
import { auth } from '../firebase'
const routes =[
{
    path :'/admin',
    name:'admin',
    component: AdminView
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
    path :'/patient',
    name:'patient',
    component: patientView,
    meta:{
        requiresAuth: true
    }
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
    if(requiresAuth && !authenticatedUser) next ({path: '/Login'})
    else next()
  })
  export default router