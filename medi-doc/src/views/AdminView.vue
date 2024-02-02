<template>
  <div class="home">
    <div class="sidebar">
      <img src="../image/logoo-removebg-preview.png" alt="Logo" class="logo">
      <!-- Liens pour différentes sections -->
      <a href="#" @click.prevent="showDashboardManagement">Dashboard</a>
      <a href="#" @click.prevent="showMedecinManagement">Médecins</a> 
      <a href="#" @click.prevent="showPatientManagement">Patients</a>
      <a href="#" @click.prevent="showRDVManagement">RDV</a>
      <a href="#" @click.prevent="showServicesSection">Services</a>
    </div> 
     <div class="content">
       <div class="head">
         <div class="coté"><h1>Admin Dashboard</h1>
         </div>
         <div class="coté">
          <a href="Login">
            <button class="log" @click="logout">Logout</button>
          </a>
         </div>
      </div>
    <div class="medecin">
      <div class="med" id="dashboard" v-if="showDashboardSection">
        <div class="box">
          <h3><img src="../image/doctor.png" alt="medecin"> 
              <span class="space-after-text">Médecins</span>   {{ countMedecins }}</h3>
        </div>
        <div class="box">
            <h3><img src="../image/patient.png" alt="patient"> 
              <span class="space-after-text">Patients</span> {{ countPatients }}</h3>
        </div>
        <div class="box">
         <h3><img src="../image/rdv.png" alt="RDV"> 
          <span class="space-after-text">Consultations</span> {{ rdv.length }}</h3>
        </div>
        <div class="box">
         <h3><img src="../image/service.png" alt="service">
          Services</h3>
        </div>
      </div>
    </div>
          <div class="row">
             <div class="col-sm-5 m-auto" v-if="showMedecinSection"> 
                <div class="text-center mb-4">
                  <h4>Ajouter un medecin </h4>
                </div>
                    <form id="signup-form" @submit.prevent="signupRequest" class="form-container">
                        <div class="row">
                         <div class="form-field">
                            <input type="text" id="nom" v-model="nom" placeholder="Nom complet" class="form-control form-control-lg">
                          </div>
                           <div class="form-field">
                            <input type="email" id="email" v-model="email" placeholder="Email adress"  class="form-control form-control-lg">
                           </div>
                          <div class="form-field">
                             <select id="specialite" v-model="specialite" required>
                               <option disabled value="" selected>Spécialité</option>
                               <option value="cardiologie">Cardiologie</option>
                               <option value="dermatologie">Dermatologie</option>
                               <option value="généraliste">Généraliste</option>
                               </select>
                            </div>
                         <div class="form-field">
                           <input type="password" id="password" v-model="password" placeholder="password" class="form-control form-control-lg">
                         </div>
                         <div class="form-field">
                           <button v-if="!xhrRequest" id="btt" class="btn btn-primary btn-lg col-sm-5">Sign Up</button>
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
           <div class="table-container">
              <div class="table-wrapper">
                <div class="med" v-if="showMedecinSection">
                   <h3 class="medecin-title"> Les médecins </h3> 
                      <table class="medecin-table">
                        <thead>
                          <tr>
                           <th>Nom</th>
                           <th>Email</th>
                           <th>Specialité</th>
                           <th>Action</th>
                         </tr>
                        </thead>
                       <tbody class="conte">
                        <tr v-for="(u, index) in userData" :key="index">
                         <td v-if="u.role === 'medecin'">{{ u.nom }}</td>
                         <td v-if="u.role === 'medecin'">{{ u.email }}</td>
                         <td v-if="u.role === 'medecin'">{{ u.specialite }}</td>
                         <td v-if="u.role === 'medecin'">
                          <button @click="deleteMedecin(u.uid)" class="boutt">Delete</button>
                         </td>
                         </tr>
                     </tbody>
                  </table>
                </div>
           <div class="med" v-if="showPatientSection">
              <h3 class="medecin-title"> Les patients </h3> 
                 <table class="medecin-table">
                  <thead>
                      <tr>
                         <th>NSS</th>
                          <th>Nom</th>
                         <th>Prenom</th>
                          <th>Age</th>
                          <th>Adresse</th>
                          <th>Telephone</th>
                          <th>Email</th>
                          <th>Action</th>
                       </tr>
                   </thead>
                   <tbody class="conte">
                    <tr v-for="(u, index) in userData" :key="index">
                        <td v-if="u.role === 'patient'">{{ u.Nss }}</td>
                        <td v-if="u.role === 'patient'">{{ u.Nom }}</td>
                        <td v-if="u.role === 'patient'">{{ u.prenom }}</td>
                        <td v-if="u.role === 'patient'">{{ u.Age }}</td>
                        <td v-if="u.role === 'patient'">{{ u.Adresse }}</td>
                        <td v-if="u.role === 'patient'">{{ u.Telephone }}</td>
                        <td v-if="u.role === 'patient'">{{ u.email }}</td>   
                        <td v-if="u.role === 'patient'">
                        <button @click="deletePatient(u.patientID)" class="boutt">Delete</button>
                        </td>
                    </tr>
                   </tbody>
                </table>
          </div>
        <div class="med" v-if="showRDVSection">
        <h3 class="medecin-title"> Les RDV </h3>
           <table class="medecin-table">
            <thead>
             <tr>
              <th>Date</th>
              <th>heure</th>
              <th>Patient</th>
              <th>Symptômes </th>
              <th>Medecin </th>
             </tr>
           </thead>
             <tbody class="conte">
                 <tr v-for="(i,index) in rdv" :key="index">
                   <td> {{ i.date }} </td> 
                     <td> {{ i.time }} </td>
                    <td> {{ i.patientID }}</td>
                    <td></td>
                   <td>
                    <form @submit.prevent="()=>affecter(i,index)">
                     <select v-model="selectedMedecin[index]" required>
                      <option v-show="medecin.role=='medecin'" v-for="medecin in userData" :value="medecin.uid">{{ medecin.email }}</option>
                      </select>
                      <button type="submit">✔</button>
                     </form>
                   </td>
                  </tr>
               </tbody>
           </table>
        </div> 
      </div> 
        </div>
        </div>
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
              showSignupForm: false,
                showMedecinSection: false, // Ajout de la nouvelle variable
              showPatientSection: false, // Ajoutez cette variable
                showRDVSection: false,
                showDashboardSection: true, 
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
      showDashboardManagement(){
        this.showDashboardSection= true;
        this.hideMedecinSection();
        this.hideRDVSection();
        this.hidePatientSection();
      },
      hideDashboardManagement(){
        this.showDashboardSection= false;
      },
      showPatientManagement(){
        this.showPatientSection=true;
        this.hideMedecinSection();
        this.hideRDVSection();
        this.hideDashboardManagement();
      },
      hidePatientSection(){
        this.showPatientSection=false;
      },

      showRDVManagement(){
        this.showRDVSection=true;
        this.hideMedecinSection();
        this.hidePatientSection();
        this.hideDashboardManagement();
      },
      hideRDVSection(){
        this.showRDVSection=false;
      },
       showMedecinManagement() {
      this.showMedecinSection = true; // Affiche le formulaire et le tableau des médecins
      this.hidePatientSection();
      this.hideRDVSection();
      this.hideDashboardManagement();
       },
       hideMedecinSection() {
        this.showMedecinSection = false;
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
       async deleteMedecin(uid) {
        try {
          await deleteDoc(doc(a, uid));
          this.userData = this.userData.filter((user) => user.uid !== uid);
          alert('Doctor deleted successfully');
        } catch (error) {
          console.error('Erreur lors de la suppression du médecin', error);
        }
      },
      async deletePatient(patientID) {
        try {
          await deleteDoc(doc(a, patientID));
          this.userData = this.userData.filter((user) => user.patientID !== patientID);
          alert('patient deleted successfully');
        } catch (error) {
          console.error('Erreur lors de la suppression du patient', error);
        }
      },
      async logout() {
  try {
    await signOut(auth);
    alert('Déconnexion réussie');
    // Redirect the user to the login page
    this.$router.push('/login');
  } catch (error) {
    console.error('Erreur lors de la déconnexion', error);
  }
},

      },
   computed: {
      // Propriété calculée pour le nombre de médecins
      countMedecins() {
        const medecins = this.userData.filter(user => user.role === 'medecin');
        console.log('Liste des médecins :', medecins);
        return medecins.length;
      },
      countPatients() {
        const patients = this.userData.filter(user => user.role === 'patient');
        console.log('Liste des patients :', patients);
        return patients.length;
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
   .home{
       display: flex;
  }
  .sidebar {
      position: fixed; /* Fixe la barre latérale à la page */
      left: 0; /* Positionne la barre latérale à gauche de la page */
      top: 0;
      width: 200px;
      height: 100%;
      background-color: #ffffff;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
      overflow-y: auto; /* Ajoute une barre de défilement si le contenu est trop long */
  }
  
  .logo {
      width: 100%;
      height: 100px;
      margin-bottom: 15px;
  }
  
  /* Ajustements pour les liens */
  .sidebar a {
      display: block;
      padding: 15px;
      color: #3677A3;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s;
  }
  
  .sidebar a:hover {
      background-color: #41b8d5;
      color: #ffffff;
  }
  
  /* Ajuste le contenu principal pour prendre en compte la barre latérale */
  .content, .medecin {
      margin-left: 100px; /* Ajuste la marge gauche pour prendre en compte la largeur de la barre latérale */
      padding: 20px;
  }
  
  /* Ajoutez du style à la zone de contenu principal (peut être ajusté selon vos besoins) */
  .content {
      min-height: 100vh; /* Au moins la hauteur de l'écran */
      margin-top: 20px;
  }
  
    h1{
      color: #3677A3;
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 10px;
      
    }
  #dashboard {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between; /* Ajustez cela selon vos besoins pour espacer les boîtes */
    }
    .head{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between; /* Ajustez cela selon vos besoins pour espacer les boîtes */
      
    }
    .coté{
      display: flex;
      flex-direction: column;
    }
    .log{
      border-radius: 20px;
      height: 44px;
      width: 150px;
      font-size: 18px;
      font-weight: 600;
      padding: 0 30px;
      letter-spacing: 1px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color:#41B8D5;
      color:white;
      border: none;
    } 
    .log:hover{
      background-color: #3677A3;
    }
    .box {
      display: flex;
      flex-direction: column;
      width: 40%;
      height: 200px;
      border: 4px solid #41B8D5;
      border-radius: 20px;
      margin: 20px;
      margin-left: 60px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      transition: transform 0.3s ease-in-out;
      align-items: center; /* Centralise le contenu horizontalement à l'intérieur de la boîte */
      justify-content: center; /* Centralise le contenu verticalement à l'intérieur de la boîte */
    
      &:hover {
        transform: scale(1.05);
      }
    }
    
      h3 {
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 10px;
        text-align: center;
        color: #3677A3;
        margin: 0;
      }
    .box img {
      margin-right: 30px; /* Ajustez la marge en fonction de l'espace souhaité entre l'image et le texte */
    }
    .space-after-text {
      margin-right: 20px; /* Ajustez la valeur de la marge selon vos préférences */
  }
    .table-container {
    margin-top: 50px;
    display: flex;
  }
  
  .table-wrapper {
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .medecin-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 10px;
    background-color: #41B8D5;
    color: white;
  }
  
  .medecin-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0 10px;
    margin-top: 10px;
  }
  
  .medecin-table th,
  .medecin-table td {
    padding: 15px;
    text-align: left;
  }
  
  .medecin-table th {
    background-color: #909394;
    color: white;
  }
  
  .medecin-table tr:hover {
    background-color: #DBE0E3;
    
  }
  .boutt{
    border-radius: 10px;
      height: 44px;
      width: 150px;
      font-size: 18px;
      font-weight: 600;
      padding: 0 30px;
      letter-spacing: 1px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color:rgba(255, 0, 0, 0.947);
      color:white;
      border: none;
  }
  .form-container {
    display: flex;
    flex-wrap: wrap;
    /*justify-content: center;*/
  }
  
  .form-field {
    flex: 1;
    width: 500px;
    margin-right: 10px;
    margin-bottom: 15px;
  }
  
  input, select {
    width: 500px;
    padding: 12px; /* Ajustez la taille du padding selon vos préférences */
    margin-bottom: 15px;
  }
button {
    width: 100px; 
    padding: 12px;
   /* margin-top: 15px;*/
   font-weight: bold;
    height: 50px;
    --bs-btn-padding-y: 0.5rem; 
       --bs-btn-padding-x: 1rem; 
      --bs-btn-border-radius: var(--bs-border-radius-lg);
  }
  #btt{
    width: 100%;
  }
    </style>