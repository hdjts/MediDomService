<template>
  <div class="home">
      <h1>MédiDomService App</h1>
      <h1>admin page</h1>
      <h2>les données des patients et des médecins sont toutes ici dans la var userData </h2>
      <div class="row">
          <div class="col-sm-5 m-auto">
            <div class="text-center mb-4">
            <h3 style="color: red;"> form pour ajouter un médecin a la base de données</h3>
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
             </div>
            </form>
          </div>
      </div>
      <div>
        <h3>les patient :</h3>
        <ul v-for="u  in userData">
          <li v-if="u.role=='patient'"> {{ u.email }} </li>  
       </ul>
       <h3>les medecin :</h3>
       <ul v-for="u  in userData">
        <li v-if="u.role=='medecin'"> {{ u.email }} </li>  
       </ul>
       <h3>les rdv :</h3>
       <ul  v-for="(i,index) in rdv" :key="index">
        <li> {{ i.date }} <br> 
         {{ i.time }}  <br>
         {{ i.patientID }}<br></li>
        <form @submit.prevent="()=>affecter(i,index)">
          <select v-model="selectedMedecin[index]" required>
            <option v-show="medecin.role=='medecin'" v-for="medecin in userData" :value="medecin.uid">{{ medecin.email }}</option>
          </select>
          <button type="submit">✔</button>
        </form>
       </ul>
      </div>

      
  </div>
  
</template>

<script>
  import {auth , a ,rdv} from '../firebase/index'
  import {createUserWithEmailAndPassword} from 'firebase/auth'
  import {collection , onSnapshot, doc ,addDoc,setDoc,deleteDoc,updateDoc,query,where,getDocs} from 'firebase/firestore'
export default {
  name: 'HomeView',
  data(){
      return{
          userData : [],
          email:'',
          password:'',
          rdv:[],
          selectedMedecin:[],
         }
    },
  methods: {
      async signupRequest() {
        let v=this;
        v.xhrRequest=true;
      try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
      const uid = userCredential.user.uid;
      alert('Doctor Registered successfully');
      const b = doc(a,uid);
      await setDoc(b,{
        email: this.email,
        role : 'medecin'
      });
    } catch (error) {
      v.xhrRequest=false;
      alert(`Error - ${error.message}`);
    }
  },
  async affecter(rdvItem,index) {
  try {
    const selectedMedecinId = this.selectedMedecin[index];
    if (selectedMedecinId) {
      const rdvRef = doc(rdv, rdvItem.id); 
      await updateDoc(rdvRef, {
        medecinID: selectedMedecinId,
        status:"coffirmer"
      });
      alert('Rendez-vous mis à jour avec le médecin');
    } else {
      alert('Veuillez sélectionner un médecin');
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour du rendez-vous', error);
  }
},
}, 
  
  mounted() {
const userDataString = this.$route.query.userData;
if (userDataString) {
  this.userData = JSON.parse(userDataString);
  console.log(this.userData);
}
onSnapshot(rdv ,(querySnapshot) => {
const fbusers = []
querySnapshot.forEach((doc)=>{
    const usero = {
     date : doc.data().date,
     time: doc.data().time,
     patientID: doc.data().patientID,
     status: doc.data().status,
     id:doc.id,
     selectedMedecin: null,
    }
    fbusers.push(usero)
})
this.rdv = fbusers

})
}
}
</script>
<style>
</style>