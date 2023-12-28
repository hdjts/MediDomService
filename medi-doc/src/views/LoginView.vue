<template>
<div class="row">
    <div class="col-sm-5 m-auto">
      <div class="text-center mb-4">
      <h1>Log In</h1>
   </div>
      <form id="login-form" @submit.prevent="loginUser">
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
            <button v-if="!xhrRequest" class="btn btn-primary btn-lg col-sm-4">Login</button>
            <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-5">
                    <span class="spinner-border spinner-border-sm btn-spn"></span>
                    wait...
            </button>
         </div>
         <div class="col-sm-12 form-group mt-5">
                 <p>Don't have an account? <router-link to="/Signup">Sign Up</router-link></p>
             </div>
       </div>
      </form>
    </div>
</div>
</template>
<script>
  import { auth, db ,a} from '../firebase/index';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { doc, getDoc ,onSnapshot} from 'firebase/firestore';

  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: '',
        xhrRequest: false,
        userData: [],
      };
    },
    methods: {
      async loginUser() {
        let v = this;
        v.xhrRequest = true;
        try {
          v.xhrRequest = false;
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          const uid = userCredential.user.uid;
          alert('login');

          /* fonction pour ramener les data d'un user spécifique 
          const userDocRef = doc(db, 'users', uid);
          const userDocSnapshot = await getDoc(userDocRef);
   

          if (userDocSnapshot.exists()) {
          
            const userData = userDocSnapshot.data();
          
            this.userData = userData;
          } else {
            
            console.log('User document does not exist');
            console.log(this.userData);
         
          }*/
          
          onSnapshot(a ,(querySnapshot) => {
            const fbusers = []
          querySnapshot.forEach((doc)=>{
          const b = {
            email : doc.data().email
          }
          fbusers.push(b)
          })
          this.userData = fbusers
          const userDataString = JSON.stringify(this.userData);
         
         this.$router.replace({
          name: 'Users',
          query: { userData: userDataString },
          });
          })
          
        } catch (error) {
          v.xhrRequest = false;
          alert(`Error - ${error.message}`);
        }
      },
    },
  };
</script>


<style scoped>
    .btn-spn{
      position:relative;
      top:-3px;
    }
    </style>