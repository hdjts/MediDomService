<template>
  <div class="row">
    <div class="col-sm-5 m-auto">
      <div class="text-center mb-4">
      <h3 style="color: red;"> form pour ajouter un RDV</h3>
   </div>
      <form id="signup-form" @submit.prevent="RDV()">
       <div class="row">
         <div class="col-sm-12 form-group">
            <label for="date">date</label>
            <input type="date" id="date" v-model="date" class="form-control form-control-lg">
         </div>
         <div class="col-sm-12 form-group">
            <label for="time">time </label>
            <input type="time" id="time" v-model="time" class="form-control form-control-lg">
         </div>
         <div class="col-sm-12 form-group">
            <button v-if="!xhrRequest" class="btn btn-primary btn-lg col-sm-5">RDV</button>
            <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-5">
                <span class="spinner-border spinner-border-sm btn-spn"></span>
                wait...
            </button>
        </div>
       </div>
      </form>
      <div class="col-sm-12 form-group" v-if="status === 'en attente'">
        <button class="btn btn-danger btn-lg col-sm-5" @click="annulerRDV">Annuler</button>
      </div>
      <div>
        <h3>consultation</h3>
        <div v-for="(r,index) in RDVtab">
            <li>{{ r.date }}</li>
            <li>{{ r.time }}</li>
            <li>{{ r.report }}</li>
              <form id="signup-form" @submit.prevent="()=>affecter(r,index)">
               <div class="row">
                 <div class="col-sm-12 form-group">
                    <label for="text">Feedback</label>
                    <input type="text" id="text" v-model="feedback[index]" class="form-control form-control-lg">
                 </div>
                 <div class="col-sm-12 form-group">
                    <button v-if="!xhrRequest" class="btn btn-primary btn-lg col-sm-5">feedback</button>
                    <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-5">
                        <span class="spinner-border spinner-border-sm btn-spn"></span>
                        wait...
                    </button>
                </div>
               </div>
              </form>
        </div>
      </div>
    </div>
</div>
</template>
<script>
 import {auth , a, rdv} from '../firebase/index'
    import {createUserWithEmailAndPassword} from 'firebase/auth'
    import {collection , onSnapshot, doc ,addDoc,setDoc,deleteDoc,updateDoc,query,where,getDocs} from 'firebase/firestore'
  export default {
    name: 'patient',
    data() {
      return {
        date:'',
        time:'',
        uid:'',
        status: '',
        feedback:[],
        userData: [],
        RDVtab:[],
      };
    },
    methods: {
      async RDV() {
  const appointmentDocRef = doc(rdv, this.uid);

  try {
    this.xhrRequest = true;
    await addDoc(rdv, {
      date: this.date,
      time: this.time,
      patientID: this.uid,
      status: 'en attente',
    });
    this.status = 'en attente';
    this.xhrRequest = false;
  } catch (error) {
    this.xhrRequest = false;
    console.error('Error creating the appointment', error);
  }
},
async affecter(rdvItem,index) {
  try {
    const selectedMedecinId = this.feedback[index];
    if (selectedMedecinId) {
      const rdvRef = doc(rdv, rdvItem.id); 
      await updateDoc(rdvRef, {
        feedback : selectedMedecinId,
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
  this.RDVtab = fbusers
})
    },
  };
</script>