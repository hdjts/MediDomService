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
        userData: {},
      };
    },
    methods: {
     async RDV(){
           const b = doc(rdv,this.uid);
         await setDoc(b,{
          date: this.date,
          time: this.time,
          patientID:this.uid,
          email:this.userData.email,
          status:'en attente'
        });
  
      }
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
    },
  };
</script>