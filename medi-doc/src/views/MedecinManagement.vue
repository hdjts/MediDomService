<template>
    <div class="row">
              <div class="col-sm-5 m-auto"> 
                 <div class="text-center mb-4">
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
         <div class="table-container">
           <div class="table-wrapper">
         <h3 class="medecin-title"> Les médecins </h3>
         <table class="medecin-table">
           <thead>
             <tr>
               <th>Nom</th>
               <th>Email</th>
               <th>Specialité</th>
             </tr>
           </thead>
           <tbody class="conte">
             <tr v-for="(u, index) in userData" :key="index">
                <td v-if="u.role === 'medecin'">{{ u.nom }}</td>
               <td v-if="u.role === 'medecin'">{{ u.email }}</td>
                  <td v-if="u.role === 'medecin'">{{ u.specialite }}</td>
             </tr>
           </tbody>
         </table>
         <!-- ... le reste de votre code ... -->
       </div> 
   </div>
    </div>
    </template>
   <script>
       export default {
           data() {
       return {
         UserData: {
           email: '',
         },
        selectedMedecin:[], // Cette liste sera peuplée avec les médecins existants
       };
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
     }
       }
    </script>
    <style>
    .table-container {
     margin-top: 20px;
     margin-left:-95px;
     display: flex;
   
   }
   .table-wrapper {
      width: 70%; 
     border: 2px solid #41B8D5; /* Couleur de la bordure bleue */
     border-radius: 10px; /* Ajoute un peu de rayon aux coins */
     padding: 10px; /* Ajoute de l'espace à l'intérieur du cadre */ 
   
   
   }
   .medecin-title {
     display: flex;
     justify-content: center;
     align-items: center;
     font-weight: bold;
     padding: 5px 10px;
     background-color: #41B8D5;
     color: white;
     border: 2px solid #41B8D5;
     border-radius: 5px;
     margin-bottom: 10px;
     max-width: 350px;
     margin-top:-10px;
     justify-content: center;
   }
   
   .medecin-table {
     width: 50%; /* Ajustez la largeur du tableau selon vos besoins */
    border-collapse:/* collapse*/ separate;
     margin-top: 10px;
     border-spacing: 0;
   }
   
   .medecin-table th, .medecin-table td {
     /*border-right: 1px solid #41B8D5;*/
     border-top: -10px solid #41B8D5;
     border-bottom: 1px solid rgb(128, 128, 128);
     padding: 8px;
     text-align: left;
   }
   
   .medecin-table th {
     background-color:rgba(128, 128, 128, 0.769);
   }
    </style>
    