<template>
    <div class="row">
        <div class="col-sm-5 m-auto">
          <div class="text-center mb-4">
          <h1>Sign Up</h1>
       </div>
          <form id="signup-form" @submit.prevent="signupRequest">
           <div class="row">
             <div class="col-sm-12 form-group">
                <label for="email">Email address </label>
                <input type="email" id="email" v-model="email" class="form-control form-control-lg">
             </div>
             <div class="col-sm-12 form-group">
                <label for="password">Password </label>
                <input type="password" id="password" v-model="password" class="form-control form-control-lg">
             </div>
             <div class="col-sm-12 form-group">
                <button v-if="!xhrRequest" class="btn btn-primary btn-lg col-sm-5">Sign Up</button>
                <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-5">
                    <span class="spinner-border spinner-border-sm btn-spn"></span>
                    wait...
                </button>
             </div>
             <div class="col-sm-12 form-group mt-5">
                 <p>Already have an account? <router-link to="/Login">Login</router-link></p>
             </div>
           </div>
          </form>
        </div>
    </div>
    </template>
    <script>
    import {auth , a} from '../firebase/index'
    import {createUserWithEmailAndPassword} from 'firebase/auth'
    import {collection , onSnapshot, doc ,addDoc,setDoc,deleteDoc,updateDoc,query,where,getDocs} from 'firebase/firestore'
    export default {
      name: 'SignupView',
      data() {
           return{
            email:'',
            password:'',
            xhrRequest:false,
           }
      },
      methods:{
        async signupRequest() {
          let v=this;
          v.xhrRequest=true;

        try {
        
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const uid = userCredential.user.uid;
        alert('Registered successfully');
        const b = doc(a,uid);
        await setDoc(b,{
          email: this.email,
          role : 'patient'
        });
        this.$router.replace('login');

      } catch (error) {
        v.xhrRequest=false;
        alert(`Error - ${error.message}`);
      }
    },
      }
    }
    </script>
    <style scoped>
    .btn-spn{
      position:relative;
      top:-3px;
    }
    </style>

