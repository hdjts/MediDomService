<template>
  <div class="sidebar">
    <img src="../image/logoo-removebg-preview.png" alt="Logo" class="logo">
    <!-- Liens pour différentes sections -->
    <a href="#" @click.prevent="showDashboardManagement">Dashboard</a>
    <a href="#" @click.prevent="showProfilManagement">Profil</a> 
    <a href="#" @click.prevent="showPatientManagement">Patients</a>
    <a href="#" @click.prevent="showRDVManagement">RDV</a>
    <!--<a href="#" @click.prevent="showFeedbackSection">Feedback</a>-->
  </div> 
 <div class="content">
    <div class="head">
      <div class="coté" style="margin-left: 80px;"><h1>Medecin Dashboard</h1>
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
          <h3><img src="../image/patient.png" alt="patient"> 
            <span class="space-after-text">Patients</span> {{ countPatients }}</h3>
      </div>
      <div class="box">
       <h3><img src="../image/rdv.png" alt="RDV"> 
        <span class="space-after-text">Consultations</span> {{countConsultations }}</h3>
      </div>
      <div class="box">
       <h3><img src="../image/compte_rendue.png" alt="service">
       <span class="space-after-text">Compte rendu</span>{{countReports}}</h3>
      </div>
    <!--  <div class="box">
  <h3>
    <img src="../image/patient.png" alt="patient">
    <span class="space-after-text">Feedbacks</span> {{ countFeedbacks }}
  </h3>
  <ul v-if="showFeedbackSection">
    <li v-for="feedback in feedbackData" :key="feedback.id">
      <p>{{ feedback.text }}</p>
   Add other feedback properties as needed 
    </li>
  </ul>
</div>-->
    </div>


    
  </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="med" style="margin-left:90px;" v-if="showProfilSection">
           <h3 class="medecin-title"> Profil </h3> 
          <table class="medecin-table">
           
            <tr v-if="med.role === 'medecin'">
              <td>Doctor's full name  </td>
              <td>{{ med.name }}</td>
            </tr>
            <tr v-if="med.role === 'medecin'">
              <td>Speciality</td>
              <td>{{ med.specialite }}</td>
              </tr>
            <tr v-if="med.role === 'medecin'">
            <td>Email</td>
             <td> {{ newMedecinEmail || loggedInMedecinEmail }}</td>
              <!--<td><button @click="updateEmail">Update</button></td>-->
            </tr>
          
          <!--  <tr>
              <td>Phone number</td>
              <td></td>
            </tr>-->
            
          </table>

         <!-- <h1>Users Area</h1>
          <ul>
            <li v-for="value in userData">
              {{ value.email }}
            </li>
          </ul>-->
        </div>
        
        <div class="med" style="margin-left: 90px;" v-if="showPatientSection">
          <h3 class="medecin-title" > The patients </h3> 
          <table class="medecin-table" >
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
              <tr v-for="(u, index) in filteredPatients" :key="index">
                <td v-if="u.role === 'patient'">{{ u.nss }}</td>
                <td v-if="u.role === 'patient'">{{ u.firstName}}</td>
                <td v-if="u.role === 'patient'">{{ u.lastName }}</td>
                <td v-if="u.role === 'patient'">{{ u.age }}</td>
                <td v-if="u.role === 'patient'">{{ u.location }}</td>
                <td v-if="u.role === 'patient'">{{ u.phone}}</td>
                <td v-if="u.role === 'patient'">{{ u.email }}</td>   
                <td v-if="u.role === 'patient'">
                <button @click="deletePatient(u.uid)" class="boutt">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
       </div>
       <div style="margin-left:90px;" v-if="showRDVSection">
        <h3 class="medecin-title"> The RDV </h3>
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>full name</th>
      <th>Patient ID</th>
      <th>Report</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="value in filteredRDV" :key="value.id">
      <td>{{ value.date }}</td>
      <td>{{ value.time }}</td>
      <td>{{ getPatientFullName(value.patientID) }}</td>
      <td>{{ value.patientID }}</td>
      <td>
        <div class="report-section">
          <strong>Report:</strong>
          <div v-if="!value.report" class="no-report">
            <textarea v-model="reportInputMap[value.id]" placeholder="Entrer votre compte rendu"></textarea>
          </div>
          <div v-else>
            {{ value.report }}
            <button id="btto" @click="deleteReport(value.id)">Delete Report</button>
          </div>
        </div>
      </td>
      <td>
        
        <button id="btto" @click="updateReport(value.id)">Update compte rendu</button>
        <button id="btto" @click="cancelRDV(value.id)">Annuler RDV</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
<div v-if="showFeedbackSection">
    <h3>Feedback</h3>
    <div v-for="feedbackItem in feedbackData" :key="feedbackItem.id">
      <div class="feedback-item">
        <p>{{ feedbackItem.text }}</p>
        <!-- Add other feedback properties as needed -->
      </div>
    </div>
  </div>


        
     </div>
   </div>
   
</div>


</template>
<script>
  import {auth , a ,rdv} from '../firebase/index'
  import {createUserWithEmailAndPassword,updateEmail,
  signOut,} from 'firebase/auth'
  import {collection , onSnapshot, doc ,addDoc,setDoc,deleteDoc,updateDoc,query,where,getDocs} from 'firebase/firestore'
  export default {
    props:{
      
    },
  name: 'UsersView',
  data() {
    return {
      uid:'',
      userData: [],
      rdv:[],
      reportInputMap: {},
      reportInput: '',
      showSignupForm: false,
      showProfilSection: false, // Ajout de la nouvelle variable
      showPatientSection: false, // Ajoutez cette variable
      showRDVSection: false,
      showDashboardSection: true, 
      loggedInMedecinEmail: '',
      newMedecinEmail: '',
      showFeedbackSection: false,
      feedbackData: [],
      med:{}
    };
  },
   
  mounted() {
  const userDataString = this.$route.query.userData;
  const uid = this.$route.query.uid;

  if (userDataString) {
  this.userData = JSON.parse(userDataString);
  this.uid = uid;

  const user=auth.currentUser;

  if(user){
    this.loggedInMedecinEmail=user.email;
    this.med = this.userData.find(user => user.email === this.loggedInMedecinEmail);
  }
  console.log(this.userData);
  console.log(this.uid);
}
onSnapshot(rdv ,(querySnapshot) => {
const fbusers = []
querySnapshot.forEach((doc)=>{
    const usero = {
     date : doc.data().date,
     time: doc.data().time,
     patientID: doc.data().patientID,
     status: doc.data().status,
     medecinID: doc.data().medecinID,
     id:doc.id,
     report: doc.data().report || '', 
    }
    fbusers.push(usero)
})
this.rdv = fbusers
console.log('Feedback Data:', this.feedbackData);
})
  },
  
  computed: {
    filteredPatients() {
    const patientsWithAppointments = this.userData.filter(user => {
      // Check if the user has an appointment with the current doctor
      return this.rdv.some(appointment => appointment.patientID === user.uid && appointment.medecinID === this.uid);
    });

    return patientsWithAppointments;
  },

  countConsultations() {
    return this.rdv.filter(value => value.medecinID === this.uid).length;
  },
  filteredRDV() {
    return this.rdv.filter((value) => value.medecinID === this.uid);
  },
  countReports() {
  return this.rdv.filter(value => value.medecinID === this.uid && value.report !== '').length;
},
uniqueReportId() {
      return (rdvId) => rdvId + '_' + Math.floor(Math.random() * 1000);
    },
  countPatients() {
      const patients = this.userData.filter(user => user.role === 'patient');
      console.log('Liste des patients :', patients);
      return patients.length;
  },
  countFeedbacks() {
      return this.feedbackData.length;
    },
},
  methods: {

    getPatientFullName(patientID) {
    const patient = this.userData.find(user => user.uid === patientID);
    return patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown';
  },
async updateEmail() {
try {
  // Invitez l'utilisateur à saisir le nouvel e-mail
  const nouvelEmail = prompt('Entrez le nouvel e-mail :');

  if (nouvelEmail) {
    // Mettez à jour l'e-mail dans l'authentification Firebase
    const utilisateur = auth.currentUser;
    await updateEmail(utilisateur, nouvelEmail);

    // Mettez à jour la référence de l'élément HTML du champ email
    const emailField = document.getElementById('medecinEmail');
    if (emailField) {
      emailField.value = nouvelEmail;
    }

    alert('E-mail mis à jour avec succès');
  } else {
    alert('E-mail invalide');
  }
} catch (erreur) {
  console.error('Erreur lors de la mise à jour de l\'e-mail', erreur);
}
},



async updateReport(rdvId) {
      try {
        const rdvRef = doc(rdv, rdvId);
        const uniqueReportId = rdvId;

        await updateDoc(rdvRef, {
          reportId: uniqueReportId,
          report: this.reportInputMap[rdvId] || '',
        });

        alert('Rapport mis à jour avec succès');
      } catch (error) {
        console.error('Erreur lors de la mise à jour du rapport', error);
      }
    },
  







    async cancelRDV(rdvId) {
    try {
      const rdvRef = doc(rdv, rdvId);
      await updateDoc(rdvRef, {
        medecinID: null, // or assign a default medecinID
        status: 'annulé', // or set a status for canceled RDV
      });
      alert('Rendez-vous annulé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'annulation du rendez-vous', error);
    }
  },
  
  async deleteReport(rdvId) {
    try {
      const rdvRef = doc(rdv, rdvId);
      await updateDoc(rdvRef, { report: '' }); // Clear the report field
      alert('Rapport supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression du rapport', error);
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
  showDashboardManagement(){
      this.showDashboardSection= true;
      this.hideProfilSection();
      this.hideRDVSection();
      this.hidePatientSection();
    },
    hideDashboardManagement(){
      this.showDashboardSection= false;
    },
    showPatientManagement(){
      this.showPatientSection=true;
      this.hideProfilSection();
      this.hideRDVSection();
      this.hideDashboardManagement();
    },
    hidePatientSection(){
      this.showPatientSection=false;
    },

    showRDVManagement(){
      this.showRDVSection=true;
      this.hideProfilSection();
      this.hidePatientSection();
      this.hideDashboardManagement();
    },
    hideRDVSection(){
      this.showRDVSection=false;
    },
    showProfilManagement() {
     this.showProfilSection = true; // Affiche le formulaire et le tableau des médecins
     this.hidePatientSection();
     this.hideRDVSection();
     this.hideDashboardManagement();
     },
     hideProfilSection() {
      this.showProfilSection = false;
    },
   async logout() {
  try {
    await signOut(auth);
    alert('Déconnexion réussie');
    this.$router.push({ name: 'login' }).catch(err => console.error(err));
  } catch (error) {
    console.error('Erreur lors de la déconnexion', error);
  }
},

countReports() {
 this.med = this.userData.filter(value => value.uid === this.uid );
},

  },






 
};
</script>

<style scoped>
/* Add styles for textarea and report section */
textarea {
width: 100%;
height: 100px;
margin-bottom: 10px;
}
#btto{
  background-color:#41B8D5;
}
.report-section {
margin-bottom: 15px;
}

.no-report {
color: #888;
font-style: italic;
}
h1{
    color: #3677A3;
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 10px;
    
  }
.content {
min-height: 100vh; /* Au moins la hauteur de l'écran */
margin-top: 20px;
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
#dashboard {
display: flex;
flex-wrap: wrap;
justify-content: space-between; /* Ajustez cela selon vos besoins pour espacer les boîtes */
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
&:nth-child(3){
  margin-inline: auto;
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
/* Apply general styles to the table */
table {
width: 100%;
border-collapse: collapse;
margin-top: 20px;
}

/* Style table header */
thead {
background-color: #909394;
color: white;
}

th, td {
padding: 12px;
border: 1px solid #ddd;
text-align: left;
}

/* Add some spacing to the report section */
.report-section {
margin-top: 10px;
}

/* Style buttons */
button {
background-color:red;
color: white;
border: none;
padding: 10px 16px;
margin-right: 5px;
cursor: pointer;
transition: background-color 0.3s;
width: 100%; /* Make buttons take full width */
display: block; /* Stack buttons on top of each other */
margin-top: 5px; /* Add some spacing between stacked buttons */
}

/* Style textarea */
textarea {
width: 100%;
padding: 8px;
margin-bottom: 10px;
}

/* Style the "compte rendu vide" message */
.no-report {
color: #888;
}

/* Apply alternating background color to table rows for better readability */
tbody tr:nth-child(even) {
background-color: #f2f2f2;
}

/* Hover effect on table rows */
tbody tr:hover {
background-color: #ddd;
}

/* Responsive styling for small screens */
@media screen and (max-width: 600px) {
table {
  border: 1px solid #ddd;
}

th, td {
  display: block;
  width: 100%;
  box-sizing: border-box;
}

/* Hide the header when not needed on small screens */
thead {
  display: none;
}
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
.feedback-section {
    margin-top: 20px;
}

.feedback-item {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
}
</style>