<template>
    <div class="row">
      <div class="col-sm-12">
        <h1>Users Area</h1>
        <div v-if="userData">
          <!-- Afficher les données ici -->
          <ul>
            <li v-for="value in userData">
               {{value.email}}
            </li>
          </ul>
        </div>
        <div v-else>
          Aucune donnée utilisateur disponible.
        </div>
        <h1>RDV Area</h1>
        <div v-if="rdv">
          <!-- Afficher les données ici -->
          <ul v-show="uid==value.medecinID" v-for="value in rdv">  
             <li>{{value.date}}</li> 
             <li>{{value.time}}</li>     
          </ul>
        </div>
        <div v-else>
          Aucune donnée utilisateur disponible.
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
      };
    },
    methods: {
      RDV(){

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
  onSnapshot(rdv ,(querySnapshot) => {
  const fbusers = []
  querySnapshot.forEach((doc)=>{
      const usero = {
       date : doc.data().date,
       time: doc.data().time,
       patientID: doc.data().patientID,
       status: doc.data().status,
       medecinID: doc.data().medecinID,
       id:doc.id
      }
      fbusers.push(usero)
  })
  this.rdv = fbusers
})
    },
    
  };
  </script>
  