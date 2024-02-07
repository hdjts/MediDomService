<template>
  <div class="home" >
    <div class="sidebar">
      <img src="../image/logoo-removebg-preview.png" alt="Logo" class="logo">
      <!-- Liens pour différentes sections -->
      <a href="#" @click.prevent="showDashboardManagement">Dashboard</a>
      <a href="#" @click.prevent="showMedecinManagement">HCP</a> 
      <a href="#" @click.prevent="showPatientManagement">Patients</a>
      <a href="#" @click.prevent="showRDVManagement">RDV</a>
      <a href="#" @click.prevent="showServiceManagement">feedback</a>
    </div> 
     <div class="content">
       <div class="head">
         <div class="coté" style="margin-left: 10%;"><h1>Admin Dashboard</h1></div>
         <div class="coté">
          <a href="Login">
            <button class="log" @click="logout">Logout</button>
          </a>
         </div>
      </div>
    <div class="medecin" >
      <div  id="dashboard" v-if="showDashboardSection">
        <div class="box">
          <h3><img src="../image/doctor.png" alt="medecin"> 
              <span class="space-after-text">HCP</span>   {{ countMedecins }}</h3>
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
         <h3><img src="../image/service.png" alt="service"><span class="space-after-text">Feedbacks</span>
          {{Feedback.length}}</h3>
        </div>
      </div>
    </div>
    <div class="row">
    <div class="col-sm-5 m-auto"  v-if="showMedecinSection">
        <div class="text-center mb-4">
            <h4>Add a HCP </h4>
        </div>
        <form id="signup-form" @submit.prevent="signupRequest" class="form-container">
            <div class="row">
                <!-- Complete Name and Email -->
                <div class="form-field col-sm-12">
                    <input type="text" id="nom" v-model="name" placeholder="Complete name" class="form-control form-control-lg">
                </div>
                <div class="form-field col-sm-12">
                    <input type="email" id="email" v-model="email" placeholder="Email address" class="form-control form-control-lg">
                </div>
            <div class="form-field col-sm-12">
             <select v-model="selectedRole" required>
               <option disabled value="" selected>HCP</option>
               <option value="medecin">Doctor</option>
               <option value="infirmier">Nurse</option>
             </select>
            </div>
                <!-- Select Bar for Speciality -->
               <!-- <div class="form-field col-sm-12">
                    <select id="specialite" v-model="specialite" required>
                        <option disabled value="" selected>Spécialité</option>
                        <option value="cardiologie">Cardiologie</option>
                        <option value="dermatologie">Dermatologie</option>
                        <option value="généraliste">Généraliste</option>
                    </select>
                </div>-->
              <div class="form-field col-sm-12">
               <select id="specialite" v-model="specialite" required>
                <option disabled value="" selected>spéciality</option>
                <option v-for="speciality in getSpecialities()" :value="speciality">{{ speciality }}</option>
              </select>
            </div>
                
                <!-- Password -->
                <div class="form-field col-sm-12">
                    <input type="password" id="password" v-model="password" placeholder="Password" class="form-control form-control-lg">
                </div>
                
                <!-- Sign Up Button -->
                <div class="form-field col-sm-12">
                    <button v-if="!xhrRequest" id="btt" class="btn btn-primary btn-lg">Sign Up</button>
                    <button v-if="xhrRequest" class="btn btn-primary btn-lg">
                        <span class="spinner-border spinner-border-sm btn-spn"></span> Wait...
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>

        <div>
           <div class="table-container" style="margin-left: 8%;">
              <div class="table-wrapper">
                <div class="med" v-if="showMedecinSection">
                   <h3 class="medecin-title"> The healthcare professionals </h3> 
                      <table class="medecin-table">
                        <thead>
                          <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Speciality</th>
                           <th>Action</th>
                         </tr>
                        </thead>
                       <tbody class="conte">
                        <tr v-for="(u, index) in userData" :key="index">
                         <td v-if="u.role === 'medecin'">{{ u.name }}</td>
                         <td v-if="u.role === 'medecin'">{{ u.email }}</td>
                         <td v-if="u.role === 'medecin'">{{ u.specialite }}</td>
                         <td v-if="u.role === 'medecin'">
                          <button @click="deleteMedecin(u.uid)" class="boutt">Delete</button>
                         </td>
                         </tr>
                     </tbody>
                  </table>
                </div>
    <div class="med" v-if="showPatientSection" >
    <h3 class="medecin-title"> The patients </h3> 
    <div class="table-responsive">
        <table class="medecin-table table mx-auto">
            <thead>
                <tr>
                    <th>NSS</th>
                    <th>Last name</th>
                    <th>First name</th>
                    <th>Date of birth</th>
                    <th>Location</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody class="conte">
                <tr v-for="(u, index) in userData" :key="index">
                    <td v-if="u.role === 'patient'">{{ u.nss }}</td>
                    <td v-if="u.role === 'patient'">{{ u.firstName }}</td>
                    <td v-if="u.role === 'patient'">{{ u.lastName }}</td>
                    <td v-if="u.role === 'patient'">{{ u.age }}</td>
                    <td v-if="u.role === 'patient'">{{ u.location }}</td>
                    <td v-if="u.role === 'patient'">{{ u.phone }}</td>
                    <td v-if="u.role === 'patient'">{{ u.email }}</td>   
                    <td v-if="u.role === 'patient'">
                        <button @click="deletePatient(u.uid)" class="boutt">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

        <div class="med" v-if="showRDVSection">
        <h3 class="medecin-title"> The RDV </h3>
           <table class="medecin-table">
            <thead>
             <tr>
              <th>Date</th>
              <th>Time</th>
              <!--<th>NSS</th>-->
              <th>Pantient full name</th>
              <th>Patient ID</th>
              <th>Departement selected</th>
              <th>HCP</th>
              
              
             </tr>
           </thead>
             <tbody class="conte">
                 <tr v-show="i.status ==='en attente'" v-for="(i,index) in rdv" :key="index" :style="{ backgroundColor: i.Emergency ? 'red' : '' } ">
                   
                    <td> {{ i.date }} </td> 
                    <td> {{ i.time }} </td>
                   <!-- <td></td>-->
                    <td>{{ getUserFullName(i.patientID)}}</td>
                    <td>{{ i.patientID }}</td>
                    <td>{{ i.department}}</td>
                   <td>
                    <form @submit.prevent="()=>affecter(i,index)">
                     <select class="hh" v-model="selectedMedecin[index]" required>
                      <option v-show="medecin.role=='medecin'" v-for="medecin in userData" :value="medecin.uid">{{ medecin.email }}</option>
                      </select>
                      <button type="submit">✔</button>
                     </form>
                   </td>
                  </tr>
               </tbody>
           </table>
        </div> 
        <div  v-if="showServiceSection">
          <h3 class="medecin-title"> The Feedbacks </h3>
             <table class="medecin-table">
              <thead>
               <tr>
                <th>Patient ID</th>
                <th>name</th>
                <th>email</th>
                <!--<th>NSS</th>-->
                <th>subject</th>
                <th>message</th>
                
                
                
               </tr>
             </thead>
               <tbody class="conte">
                   <tr v-for="(i,index) in Feedback" :key="index" :style="{ backgroundColor: i.Emergency ? 'red' : '' }">
                       <td> {{ i.patientID }} </td> 
                      <td> {{ i.name}} </td>
                     <!-- <td></td>-->

                      <td>{{ i.email }}</td>
                      <td>{{ i.subject}}</td>
                      <td>{{ i.message}}</td>
                      
                     
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
    import {auth , a ,rdv ,fbk} from '../firebase/index'
    import {createUserWithEmailAndPassword} from 'firebase/auth'
    import {collection , onSnapshot, doc ,addDoc,setDoc,deleteDoc,updateDoc,query,where,getDocs} from 'firebase/firestore'
    import { onMounted } from 'vue'

    export default {
      name: 'HomeView',

      data(){
          return{
              selectedRole: '', // Ajoutez cette ligne
              userData : [],
              email:'',
              name :'',
              password:'',
              specialite:'',
              rdv:[],
              Feedback:[],
              selectedMedecin:[],
              showSignupForm: false,
              showMedecinSection: false, // Ajout de la nouvelle variable
              showPatientSection: false, // Ajoutez cette variable
              showRDVSection: false,
              showDashboardSection: true, 
              showServiceSection:false,
             }
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
         Emergency:doc.data().Emergency,
         message:doc.data().messsage,
         patientID: doc.data().patientID,
         status: doc.data().status,
         firstName: doc.data().firstName,
         lastName: doc.data().lastName,
         department: doc.data().department,
         id:doc.id,
         selectedMedecin: null,
        }
        fbusers.push(usero)
    })
     this.rdv = fbusers
     this.loadingData = false;
  });
  onSnapshot(a, (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      user.uid = doc.id;
      users.push(user);
    });
    this.userData = users;
  });
  onSnapshot(fbk ,(querySnapshot) => {
  const fbusers = []
  querySnapshot.forEach((doc)=>{
      const usero = {
       name : doc.data().name,
       email: doc.data().email,
       patientID: doc.data().patientID,
       message: doc.data().message,
       id:doc.id,
       subject: doc.data().subject || '', 
      }
      fbusers.push(usero)
  })
  this.Feedback = fbusers
})

},

      methods: {
    getSelectedMedecinDepartment(patientID) {
  const selectedRDV = this.rdv.find(rdvItem => rdvItem.patientID === patientID);
  console.log('Selected RDV:', selectedRDV);
  return selectedRDV ? selectedRDV.departement : '';
    },
    getSpecialities() {
  if (this.selectedRole === 'medecin') {
    return ['Chief Medical Officer', 'General Medicine', 'Mental Health and Wellness','Pediatrics'];
  } else if (this.selectedRole === 'infirmier') {
    return ['Paramedicine', 'Emergency Medical Services', 'Healthcare Support','Critical Care'];
  } else {
    return [];
  }
},
        async signupRequest() {
  let v = this;
  v.xhrRequest = true;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
    const uid = userCredential.user.uid;
    alert('Doctor Registered successfully');
    const b = doc(a, uid);
    await setDoc(b, {
      name: this.name,
      email: this.email,
      specialite: this.specialite,
      role: 'medecin'
    });
    let c = {
      name: this.name,
      email: this.email,
      specialite: this.specialite,
      role: 'medecin'
    };
    this.userData.push(c);
  } catch (error) {
    v.xhrRequest = false;
    alert(`Error - ${error.message}`);
  } finally {
    // Set xhrRequest to false after try or catch block
    v.xhrRequest = false;
  }
},

       
      getUserFullName(patientID) {
      const patient = this.rdv.find(i => i.patientID === patientID);
      return patient ? `${patient.firstName} ${patient.lastName}` : '';
      },


      showDashboardManagement(){
        this.showDashboardSection= true;
        this.hideMedecinSection();
        this.hideRDVSection();
        this.hidePatientSection();
        this.showServiceSection= false;
      },
      hideDashboardManagement(){
        this.showDashboardSection= false;
      },
      showPatientManagement(){
        this.showPatientSection=true;
        this.showServiceSection= false;
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
        this.showServiceSection= false;
      },
      hideRDVSection(){
        this.showRDVSection=false;
      },
       showMedecinManagement() {
      this.showMedecinSection = true; // Affiche le formulaire et le tableau des médecins
      this.hidePatientSection();
      this.hideRDVSection();
      this.hideDashboardManagement();
      this.showServiceSection= false;
       },
       showServiceManagement() {
      this.showMedecinSection = false; // Affiche le formulaire et le tableau des médecins
      this.hidePatientSection();
      this.hideRDVSection();
      this.hideDashboardManagement();
      this.showServiceSection = true;
       },
       hideMedecinSection() {
        this.showMedecinSection = false;
      },
     
      async affecter(rdvItem, index) {
  try {
    const selectedMedecinId = this.selectedMedecin[index];
    if (selectedMedecinId) {
      const selectedMedecin = this.userData.find(user => user.uid === selectedMedecinId);
      if (!selectedMedecin) {
        alert('Selected doctor not found');
        return;
      }
      
      // Check if the department matches the doctor's specialite
      if (rdvItem.department !== selectedMedecin.specialite) {
        alert(`The selected doctor's specialty (${selectedMedecin.specialite}) does not match the department (${rdvItem.department})`);
        return;
      }

      const rdvRef = doc(rdv, rdvItem.id); 
      await updateDoc(rdvRef, {
        medecinID: selectedMedecinId,
        status: "confirmé"
      });
      rdvItem.status = "confirmé"
      
      alert('Rendez-vous updated with the doctor');
    } else {
      alert('Please select a doctor');
    }
  } catch (error) {
    console.error('Error updating appointment:', error);
    alert('Error updating appointment. Please try again later.');
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
    // Confirmation alert
    const confirmed = confirm("Are you sure you want to delete the patient?");
    if (!confirmed) return; // If not confirmed, exit the function

    // Delete patient from Firestore
    await deleteDoc(doc(a, patientID));

    // Remove patient from userData
    this.userData = this.userData.filter((user) => user.uid !== patientID);

    // Remove patient's appointments from rdv
    const appointmentsToDelete = this.rdv.filter((appointment) => appointment.patientID === patientID);
    await Promise.all(appointmentsToDelete.map(async (appointment) => {
      await deleteDoc(doc(rdv, appointment.id));
    }));

    alert('Patient and their appointments deleted successfully');
  } catch (error) {
    console.error('Error deleting patient:', error);
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
      /*countFeedbacks() {
        const feedback = this.userData.filter(user => user.role === 'patient');
        console.log('Liste des patients :', feedback);
        return feedback.length;
      },*/
    },
    
  
  
  }
  
  </script>
  <style>
   .home{
       display: flex;
       width: 100%;
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
      width: 100%;
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
    .log {
  position: absolute;
  top: 10px; /* Adjust the top distance as needed */
  right: 10px; /* Adjust the right distance as needed */
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
  background-color: #41B8D5;
  color: white;
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
  .hh{
    width: auto;
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