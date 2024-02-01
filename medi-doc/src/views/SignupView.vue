<template>
  <div class="signup-container">
    <div class="signup-content">
      <div class="signup-form">
        <h1 class="text-center">Sign Up</h1>
        <form id="signup-form" @submit.prevent="signupRequest">
          <div class="form-group" id="signupform">
            <label for="email">Nom complet:</label>
            <input type="nom" id="nom" v-model="nom" class="form-control" aria-label="Nom" required>
          </div>
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" id="email" v-model="email" class="form-control" aria-label="Email address" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" class="form-control" aria-label="Password" required>
          </div>
          <div class="form-group">
            <button v-if="!xhrRequest" class="btn btn-signup">Sign Up</button>
            <button v-if="xhrRequest" class="btn btn-primary btn-block" disabled>
              <span class="spinner-border spinner-border-sm btn-spn"></span>
              Wait...
            </button>
          </div>
          <div class="form-group mt-3">
            <p class="text-center">Already have an account? <router-link to="/Login">Login</router-link></p>
          </div>
        </form>
      </div>
    </div>
      <div class="signup-content">
        <!-- Ajoutez ici l'URL de votre image 
        <img src="E:\myproject\projet\MediDomService\medi-doc\public\background.png" alt="Login Image" >-->
        <img src="../image/background.jpg" alt="signup Image" >
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
     .signup-container {
      height: 650px;
      background-color: #fff;
      padding: 0px;
      box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
      display: flex;
    }
    .signup-content {
      flex:1;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .signup-content img{ 
      margin: 0%;
     width: 100%; 
    height: 650px; 
    object-fit: cover;
  }
  #signupform{
    margin-top:70px;
  }
   label{
    margin-bottom: 13px;
  }
     h1{
    margin-bottom: 100px;
  }
  .signup-form {
    flex: 1;
    padding: 66px;
    margin-left:-50px;
  }
    .form-group {
      margin-bottom:25px;
    }
    
   /* .form-control {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }*/
     .form-control {
    width: 110%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
    
    .btn-spn {
      position: relative;
      top: -3px;
    }
    
    .btn-signup {
      background-color: #41B8D5;
      color: #fff;
      transition: background-color 0.3s ease;
      border: none;
      border-radius: 25px;
    }
    
    .btn-signup:hover {
      background-color: #31839b;
    }
    </style>