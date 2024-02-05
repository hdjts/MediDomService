<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-form" id="loginform">
        <h1 class="text-center">Log In</h1>
        <form id="login-form" @submit.prevent="loginUser">
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" id="email" v-model="email" class="form-control" aria-label="Email address" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" class="form-control" aria-label="Password" required>
          </div>
          <div class="form-group">
            <button v-if="!xhrRequest" class="btn-login">Login</button>
            <button v-if="xhrRequest" class="btn btn-primary btn-block" disabled>
              <span class="spinner-border spinner-border-sm btn-spn"></span>
              Wait...
            </button>
          </div>
          <div class="form-group mt-3">
            <p class="text-center">Don't have an account? <router-link to="/Signup">Sign Up</router-link></p>
          </div>
        </form>
      </div>
    </div>
    <div class="login-content">
        <!-- Ajoutez ici l'URL de votre image 
        <img src="E:\myproject\projet\MediDomService\medi-doc\public\background.png" alt="Login Image" >-->
        <img src="../image/background.jpg" alt="Login Image" >
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
  
            // fonction pour ramener les data d'un user spécifique 
            const userDocRef = doc(db, 'users', uid);
            const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
              const userDataa = userDocSnapshot.data();
              if (userDataa.role == 'patient') {
                const userDataString = JSON.stringify(userDataa);
              this.$router.replace({
              name: 'patient',
              query: { userData: userDataString , uid :uid},
              
              });
              }
              else{
                onSnapshot(a ,(querySnapshot) => {
                   const fbusers = []
                 querySnapshot.forEach((doc)=>{
                 const b = {
                   email : doc.data().email,
                   name : doc.data().name,
                   specialite : doc.data().specialite,
                   role : doc.data().role,
                   uid : doc.id,
                   nss: doc.data().nss,
          date: doc.data().date,
          firstName:doc.data().firstName,
          lastName:doc.data().lastName,
          age:doc.data().age,
          phone:doc.data().phone,
          location:doc.data().location,
                 }
                 fbusers.push(b)
                 })
                 this.userData = fbusers
                 const userDataString = JSON.stringify(this.userData);
                 if (userDataa.role == 'medecin') {
                  this.$router.replace({
                 name: 'Users',
                 query: { userData: userDataString , uid :uid},
                 });
                 } else if (userDataa.role == 'admin'){
                  this.$router.replace({
                 name: 'admin',
                 query: { userData: userDataString , uid :uid },
                 });
                 }      
                
                })
              }
          } 
          
          
          
        } catch (error) {
          v.xhrRequest = false;
          alert(`Error - ${error.message}`);
        }
      },
    },
  };
</script>


<style scoped>
 /* .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .login-content {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    width: 40%;
  }
*/
.login-content {
      flex:1;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .login-container {
      height: 650px;
      background-color: #fff;
      padding: 0px;
      box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
      display: flex;
    }
    .login-content img{ 
      margin: 0%;
     width: 100%; 
    height: 650px; 
    object-fit: cover;
  }
  #loginform{
    margin-top: 70px;
  }
  h1{
    margin-bottom: 100px;
  }
  label{
    margin-bottom: 13px;
  }
  .login-image {
    flex: 1;
    overflow: hidden;
  }

  /*.login-image img{ 
     width: 80%; 
    height: auto; 
    object-fit: cover;
  }*/

  .login-form {
    flex: 1;
    padding: 20px;
  }

  .form-group {
    margin-bottom: 25px;
  }

  .form-control {
    width: 100%;
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
  .btn-login {
    background-color: #41B8D5; /* Couleur de fond du bouton */
    color: #fff; /* Couleur du texte du bouton */
    transition: background-color 0.3s ease; /* Animation de transition */
    border: none;
    border-radius: 25px;
  }

  .btn-login:hover {
    background-color: #31839b; /* Nouvelle couleur de fond au survol */
  }
</style>