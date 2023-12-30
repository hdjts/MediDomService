<template>
  <div class="row">
    <div class="col-sm-12">
      <h1>Users Area</h1>
      <div v-if="userData">
        <ul>
          <li v-for="value in userData">
            {{ value.email }}
          </li>
        </ul>
      </div>
      <div v-else>
        Aucune donnée utilisateur disponible.
      </div>
      <h1>RDV Area</h1>
      <div v-if="rdv">
        <ul v-for="value in filteredRDV" :key="value.id">
          <li>{{ value.date }} => {{ value.time }} <br>
              {{ value.patientID }}<br>
          <div class="report-section">
            <strong>Compte rendu:</strong>
            <div v-if="!value.report" class="no-report">compte rendu vide</div>
            <div v-else>{{ value.report }}
            <button @click="deleteReport(value.id)">Delete Report</button>
            </div>
          </div></li>
          <textarea v-model="reportInput" placeholder="Entrer votre compte rendu"></textarea>
          <button @click="updateReport(value.id)">Update compte rendu</button>
          <button @click="cancelRDV(value.id)">Annuler RDV</button>
        </ul>
      </div>
      <div v-else>
        Aucune donnée RDV disponible.
      </div>
    </div>
  </div>
</template>
  <script>
    import {auth , a ,rdv} from '../firebase/index'
    import {createUserWithEmailAndPassword} from 'firebase/auth'
    import {collection , onSnapshot, doc ,addDoc,setDoc,deleteDoc,updateDoc,query,where,getDocs} from 'firebase/firestore'
    export default {
    name: 'UsersView',
    data() {
      return {
        uid:'',
        userData: [],
        rdv:[],
        reportInput: '',
      };
    },
    computed: {
    filteredRDV() {
      return this.rdv.filter((value) => value.medecinID === this.uid);
    },
  },
    methods: {
      async updateReport(rdvId) {
      try {
        const rdvRef = doc(rdv, rdvId);
        await updateDoc(rdvRef, { report: this.reportInput });
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
  },

  

    
    mounted() {
    const userDataString = this.$route.query.userData;
    const uid = this.$route.query.uid;
    if (userDataString) {
    this.userData = JSON.parse(userDataString);
    this.uid = uid;
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
})
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

.report-section {
  margin-bottom: 15px;
}

.no-report {
  color: #888;
  font-style: italic;
}
</style>
  