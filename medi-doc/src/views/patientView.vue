<template>
  <!-- ======= Top Bar ======= -->
  <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope"></i> <a :href="'mailto:' + email">MedidomServices@example.com</a>
        <i class="bi bi-phone"></i> {{ phoneNumber }}
      </div>
      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="#" class="twitter"><i class='bx bxl-twitter' ></i></a>
        <a href="#" class="facebook"><i class='bx bxl-facebook' ></i></a>
        <a href="#" class="instagram"><i class='bx bxl-instagram'></i></a>
        <a href="#" class="linkedin"><i class='bx bxl-linkedin' ></i></a>
      </div>
    </div>
  </div>



  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><router-link to="/"> 
        <img class="logo-image" src='../image/logoo-removebg-preview.png' alt="MediDom Logo">
      </router-link></h1>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          
          <li>
    <button class="nav-button" @click="scrollToSection('hero')">Home</button>
  </li>
  <!-- <li>
    <button class="nav-button" @click="scrollToSection('about')">About</button>
  </li> -->
  <li>
    <button class="nav-button" @click="scrollToSection('about')">Services</button>
  </li>
  <li>
    <button class="nav-button" @click="scrollToSection('services')">Departments</button>
  </li>
  <li>
    <button class="nav-button" @click="scrollToSection('doctors')">Doctors</button>
  </li>
  <li>
    <button class="nav-button" @click="scrollToSection('contact')">Contact</button>
  </li>
        </ul>
        <!-- <i class="bi bi-list mobile-nav-toggle"></i> -->
      </nav>
      <li>
        <button class="appointment-btn" @click="scrollToSection('appointment')">Make an appointment</button>
      </li>
      <!--<router-link to="/#appointment" class="appointment-btn" @click.prevent="scrollToSection('appointment')">
  <span class="d-none d-md-inline">Make an</span> Appointment
</router-link>-->
    </div>
  </header><!-- End Header -->


    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <h1>Welcome to  MediDom Services</h1>
      <h2>Bringing Healthcare to Your Doorstep: Your Wellness, Your Home, Our Priority!</h2>
      <button class="btn-get-started scrollto" @click="scrollToSection('about')">Get Started</button>
    </div>
  </section><!-- End Hero -->




  <main id="main">

<!-- ======= Why Us Section ======= -->
<section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="content">
              <h3>Why Choose MediDom Services?</h3>
              <p>
                Welcome to MediDom Services, where healthcare meets convenience. Here are a few reasons why choosing us for your medical and paramedical needs is the right decision.
              </p>
              <div class="text-center">
                <router-link to="#" class="more-btn" @click="scrollToSection('about')">Learn More <i class="bx bx-chevron-right"></i></router-link>

              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class='bx bx-building-house'></i>                    <h4>Convenience</h4>
                    <p>We bring healthcare to your doorstep. No need to travel to a clinic; our qualified medical professionals come to you.</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class='bx bx-time-five' ></i>
                      <h4>Flexible Scheduling</h4>
                    <p>With our easy online appointment system, you have control over when and where you receive medical services</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <!-- <i class='bx bxs-group'></i>  -->
                    <i class="fa-solid fa-user-doctor"></i>
                                       <h4>Qualified Professionals</h4>
                    <p>Our team of experienced doctors and paramedics are dedicated to providing high-quality care in the comfort of your home.</p>
                  </div>
                </div>
              </div>
            </div><!-- End services content-->
          </div>
        </div>

      </div>
    </section><!-- End Why Us Section -->
      
<!-- ======= services Section ======= -->
<section id="about" class="about">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <!-- <a href="https://www.youtube.com/watch?v=c1eWgR5V83k" class="glightbox play-btn mb-4"></a> -->
          </div>

          <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Medidom Services</h3>
            <p>Discover the range of medical and paramedical services we offer at MediDom</p>

            <div class="icon-box">
              <div class="icon"><i class='bx bxs-building-house'></i></div>
              <h4 class="title"><router-link to="">Home Visits</router-link></h4>
              <p class="description"> Schedule a doctor or paramedic to come to your residence for consultations, check-ups, and more.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class='bx bx-pulse'></i></div>
              <h4 class="title"><router-link to="">Health Assessments</router-link></h4>
              <p class="description">Comprehensive health assessments for individuals and families, tailored to your specific needs.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class='bx bxs-ambulance'></i></div>
              <h4 class="title"><router-link to="">Emergency Care</router-link></h4>
              <p class="description">Rapid response for urgent medical situations, ensuring timely and appropriate care.</p>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End services Section -->

  <!-- ======= Counts Section ======= -->
<section id="counts" class="counts">
  <div class="container">
    <div class="row justify-content-center">

      <div class="col-md-4" v-for="item in counterData" :key="item.trans">
        <div class="count-up">
          <div class="count-box">
            
            <i v-if="item.trans === 'Doctors'" class="fas fa-user-doctor"></i>
      <i v-if="item.trans === 'Departments'" class="fas fa-building"></i>
      <i v-if="item.trans === 'Awards'" class='fa-solid fa-award' ></i> 

            <h4>{{item.count}}</h4>
            <p>{{item.trans}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!--Departments-->

<section id="services" class="services">
    <div class="container">

      <div class="section-title">
        <h2>Departments</h2>
        <p>Explore our specialized departments for a targeted approach to your healthcare needs.</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" v-for="(service, index) in services" :key="index">
          <div class="icon-box">
            <div class="icon"><i :class="service.iconClass"></i></div>
            <h4><router-link :to="service.link">{{ service.title }}</router-link></h4>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End dep Section -->




  <!-- Appointment Section -->

  <section id="appointment" class="appointment section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Make an Appointment</h2>
        <p>Booking with MediDom is a breeze. Simply choose your preferred time, location, and, if you wish, select your preferred doctor and department. Our team will handle the rest, ensuring your health, your way.</p>
      </div>

      <form @submit.prevent="submitForm" class="php-email-form">
        <div class="row">
          <div class="col-md-4 form-group">
            <input v-model="formData.name" type="text" name="name" class="form-control" id="name" placeholder="Your Name" :data-rule="'minlen:4'" data-msg="Please enter at least 4 chars">
            <div class="validate"></div>
          </div>
          <div class="col-md-4 form-group mt-3 mt-md-0">
            <input v-model="formData.email" type="email" class="form-control" name="email" id="email" placeholder="Your Email" :data-rule="'email'" data-msg="Please enter a valid email">
            <div class="validate"></div>
          </div>
          <div class="col-md-4 form-group mt-3 mt-md-0">
            <input v-model="formData.phone" type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone" :data-rule="'minlen:4'" data-msg="Please enter at least 4 chars">
            <div class="validate"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group mt-3">
            <input v-model="formData.date" type="datetime" name="date" class="form-control datepicker" id="date" placeholder="Appointment Date" :data-rule="'minlen:4'" data-msg="Please enter at least 4 chars">
            <div class="validate"></div>
          </div>
          <div class="col-md-4 form-group mt-3">
            <select v-model="formData.department" name="department" id="department" class="form-select">
              <option value="">Select Department</option>
              <option value="Department 1">General Medicine</option>
              <option value="Department 2">Pediatrics</option>
              <option value="Department 3">Paramedical Services</option>
              <option value="Department 4">Emergency Medicine</option>
              <option value="Department 5">Geriatrics</option>
              <option value="Department 6">Mental Health and Wellness</option>

            </select>
            <div class="validate"></div>
          </div>
          <div class="col-md-4 form-group mt-3">
            <select v-model="formData.doctor" name="doctor" id="doctor" class="form-select">
              <option value="">Select Doctor</option>
              <option value="Doctor 1">Walter White</option>
              <option value="Doctor 2">Sarah Jhonson</option>
              <option value="Doctor 3">Daniel Williams</option>
              <option value="Doctor 4">Emily Clark</option>


            </select>
            <div class="validate"></div>
          </div>
        </div>

        <div class="form-group mt-3">
          <textarea v-model="formData.message" class="form-control" name="message" rows="5" placeholder="Additional Informations(Optional)"></textarea>
          <div class="validate"></div>
        </div>
        <div class="mb-3">
          <div class="loading" v-if="isLoading">Loading</div>
          <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
          <div class="sent-message" v-if="successMessage">Your appointment request has been sent successfully. Thank you!</div>
        </div>
        <div class="text-center"> <!-- <button  type="submit" :disabled="isLoading">Make an Appointment
        
          
        
        
        </button></div> -->
        <button class="butto" :disabled="isLoading" >
          Make an Appointment
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
  </svg>
</button></div>
      </form>
      <div class="col-sm-12 form-group" v-if="status === 'en attente'">
        <button class="btn btn-danger btn-lg col-sm-5" @click="annulerRDV">Annuler</button>
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
        userData: [],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #1977cc;
  text-decoration: none;
}

a:hover {
  color: #3291e6;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
  color: white;
}







/*--------------------------------------------------------------
# Top Bar
--------------------------------------------------------------*/
#topbar {
  background: #fff;
  height: 40px;
  font-size: 14px;
  transition: all 0.5s;
  z-index: 996;
}

#topbar.topbar-scrolled {
  top: -40px;
}

#topbar .contact-info a {
  line-height: 1;
  color: #444444;
  transition: 0.3s;
}

#topbar .contact-info a:hover {
  color: #1977cc;
}

#topbar .contact-info i {
  color: #1977cc;
  padding-right: 4px;
  margin-left: 15px;
  line-height: 0;
}

#topbar .contact-info i:first-child {
  margin-left: 0;
}

#topbar .social-links a {
  color: #437099;
  padding-left: 15px;
  display: inline-block;
  line-height: 1px;
  transition: 0.3s;
}

#topbar .social-links a:hover {
  color: #1977cc;
}

#topbar .social-links a:first-child {
  border-left: 0;
}

.scrolled #topbar {
  top: -40px;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
 #header {
  background: #fff;
  transition: all 0.5s;
  z-index: 997;
  padding: 15px 0;
  top: 40px;
  box-shadow: 0px 2px 15px rgba(25, 119, 204, 0.1);
}
.logo-image {
  width: 130px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  /* You can also set a max-width or max-height if needed */
}

#header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-family: "Poppins", sans-serif;
}

#header .logo a {
  color: #2c4964;
}

#navbar ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

}

#navbar ul li {
  margin-right: 20px;
}

#navbar .nav-link {
  color: #2c4964;
  text-decoration: none;
  font-size: 16px;
}

#navbar .nav-link:hover {
  color: #1977cc;
}
#navbar a i,
#navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
  border-bottom: 2px solid #fff;

}
.appointment-btn {
  background-color: #1977cc;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  margin-left: 25px;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
  letter-spacing: 1px;
  width: auto;

}

.appointment-btn:hover {
  background-color: #3291e6;
  color: #fff;

}
@media (max-width: 768px) {
  .appointment-btn {
    margin: 0 15px 0 0;
    padding: 6px 18px;
  }
}
.nav-button {
  background-color: #ffffff; /* Set your desired background color */
  /* color: #e5eaf2; Set your desired text color */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.nav-button:hover {
  color: #3291e6;}
  
/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/

#hero {
  width: 100%;
  height: 90vh;
  /* background: url("../img/hero-bg.jpg") top center; */
  background-size: cover;
  margin-bottom: -200px;
  background: url('../image/hero-bg.jpg');
}

#hero .container {
  position: relative;
}

#hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  text-transform: uppercase;
  color: #2c4964;
  /*margin-left: -600px;*/ 

}

#hero h2 {
  color: #2c4964;
  margin: 10px 0 0 0;
  font-size: 24px;
  /*margin-left: -600px;*/
}

#hero .btn-get-started {
  /* font-family: "Raleway", sans-serif; */
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 35px;
  margin-top: 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #fff;
  background: #1977cc;
  white-space: nowrap;
  border: none;
  width: auto;

}


#hero .btn-get-started:hover {
  background: #3291e6;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 992px) {
  #hero {
    margin-bottom: 0;
    height: 100vh;
  }

  #hero .container {
    padding-bottom: 63px;
  }

  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }

  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}

@media (max-height: 600px) {
  #hero {
    height: 110vh;
  }
}


/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f1f7fd;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #2c4964;
}

.section-title h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #1977cc;
  bottom: 0;
  left: calc(50% - 20px);
}

.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 20px 0;
  background-color: #f1f7fd;
  min-height: 40px;
  margin-top: 120px;
}

@media (max-width: 992px) {
  .breadcrumbs {
    margin-top: 100px;
  }
}

.breadcrumbs h2 {
  font-size: 24px;
  font-weight: 300;
  margin: 0;
}

@media (max-width: 992px) {
  .breadcrumbs h2 {
    margin: 0 0 10px 0;
  }
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li+li {
  padding-left: 10px;
}

.breadcrumbs ol li+li::before {
  display: inline-block;
  padding-right: 10px;
  color: #6c757d;
  content: "/";
}

@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }

  .breadcrumbs ol {
    display: block;
  }

  .breadcrumbs ol li {
    display: inline-block;
  }
}

/*--------------------------------------------------------------
# Why Us
--------------------------------------------------------------*/
.why-us .content {
  padding: 30px;
  background: #1977cc;
  border-radius: 4px;
  color: #fff;
}

.why-us .content h3 {
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 30px;
}

.why-us .content p {
  margin-bottom: 30px;
}

.why-us .content .more-btn {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 30px 8px 30px;
  color: #fff;
  border-radius: 50px;
  transition: all ease-in-out 0.4s;
}

.why-us .content .more-btn i {
  font-size: 14px;
}

.why-us .content .more-btn:hover {
  color: #1977cc;
  background: #fff;
}

.why-us .icon-boxes .icon-box {
  text-align: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  width: 100%;
}

.why-us .icon-boxes .icon-box i {
  font-size: 40px;
  color: #1977cc;
  margin-bottom: 30px;
}

.why-us .icon-boxes .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 30px 0;
}

.why-us .icon-boxes .icon-box p {
  font-size: 15px;
  color: #848484;
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about .icon-boxes h4 {
  font-size: 18px;
  color: #4b7dab;
  margin-bottom: 15px;
}

.about .icon-boxes h3 {
  font-size: 28px;
  font-weight: 700;
  color: #2c4964;
  margin-bottom: 15px;
}

.about .icon-box {
  margin-top: 40px;
}

.about .icon-box .icon {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border: 2px solid #8dc2f1;
  border-radius: 50px;
  transition: 0.5s;
}

.about .icon-box .icon i {
  color: #1977cc;
  font-size: 32px;
}

.about .icon-box:hover .icon {
  background: #1977cc;
  border-color: #1977cc;
}

.about .icon-box:hover .icon i {
  color: #fff;
}

.about .icon-box .title {
  margin-left: 85px;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 18px;
}

.about .icon-box .title a {
  color: #343a40;
  transition: 0.3s;
}

.about .icon-box .title a:hover {
  color: #1977cc;
}

.about .icon-box .description {
  margin-left: 85px;
  line-height: 24px;
  font-size: 14px;
}

.about .video-box {
  background: url('../image/about.jpg');
  background-size: cover;
  min-height: 500px;
}

.about .play-btn {
  width: 94px;
  height: 94px;
  background: radial-gradient(#1977cc 50%, rgba(25, 119, 204, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: absolute;
  left: calc(50% - 47px);
  top: calc(50% - 47px);
  overflow: hidden;
}

.about .play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.about .play-btn::before {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  animation-delay: 0s;
  animation: pulsate-btn 2s;
  animation-direction: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(25, 119, 204, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}

.about .play-btn:hover::after {
  border-left: 15px solid #1977cc;
  transform: scale(20);
}

.about .play-btn:hover::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  animation: none;
  border-radius: 0;
}

@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }

  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/

#counts {
  background: #f1f7fd;
  padding: 60px 0;
}

.counts .count-up {
  text-align: center;
  padding: 30px;
  width: 100%;
  position: relative;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.counts .count-up span {
  font-size: 36px;
  display: block;
  font-weight: 600;
  color: #1977cc; /* Change the color to match the theme */
}

.counts .count-up p {
  margin-top: 20px;
  font-size: 18px;
  color: #555;
}

.counts .count-box {
  text-align: center;
}

.counts .count-box i {
  font-size: 36px;
  color: #1977cc; /* Change the color to match the theme */
}

.counts .count-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 15px 0;
  color: #2c4964; /* Change the color to match the theme */
}


/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.services .icon-box {
  text-align: center;
  border: 1px solid #d5e1ed;
  padding: 80px 20px;
  transition: all ease-in-out 0.3s;
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #1977cc;
  border-radius: 5px;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transform-style: preserve-3d;
  position: relative;
  z-index: 2;
}

.services .icon-box .icon i {
  color: #fff;
  font-size: 28px;
  transition: ease-in-out 0.3s;
}

.services .icon-box .icon::before {
  position: absolute;
  content: "";
  left: -8px;
  top: -8px;
  height: 100%;
  width: 100%;
  background: rgba(25, 119, 204, 0.2);
  border-radius: 5px;
  transition: all 0.3s ease-out 0s;
  transform: translateZ(-1px);
  z-index: -1;
}

.services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.services .icon-box h4 a {
  color: #2c4964;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  background: #1977cc;
  border-color: #1977cc;
}

.services .icon-box:hover .icon {
  background: #fff;
}

.services .icon-box:hover .icon i {
  color: #1977cc;
}

.services .icon-box:hover .icon::before {
  background: rgba(255, 255, 255, 0.3);
}

.services .icon-box:hover h4 a,
.services .icon-box:hover p {
  color: #fff;
}
/*--------------------------------------------------------------
# Appointments
--------------------------------------------------------------*/
 /* .appointment .php-email-form {
  width: 100%;
}

.appointment .php-email-form .form-group {
  padding-bottom: 8px;
}

.appointment .php-email-form .validate {
  display: none;
  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}

.appointment .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.appointment .php-email-form .error-message br+br {
  margin-top: 25px;
}

.appointment .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  animation: animate-loading 1s linear infinite;
}

.appointment .php-email-form input,
.appointment .php-email-form textarea,
.appointment .php-email-form select {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  padding: 10px !important;
}

.appointment .php-email-form input:focus,
.appointment .php-email-form textarea:focus,
.appointment .php-email-form select:focus {
  border-color: #1977cc;
}

.appointment .php-email-form input,
.appointment .php-email-form select {
  height: 44px;
}

.appointment .php-email-form textarea {
  padding: 10px 12px;
}

.appointment .php-email-form button[type=submit] {
  background: #1977cc;
  border: 0;
  padding: 10px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}

.appointment .php-email-form button[type=submit]:hover {
  background: #1c84e3;
} */
/* button {
  --color: #0077ff;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  padding: 1px;

  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;
} */

button::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

button:hover {
  color: white;
}

button:before {
  top: 100%;
  left: 100%;
  transition: .3s all;
}

button:hover::before {
  top: -30px;
  left: -30px;
}


label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #e4e0e0;
  border-radius: 4px;
}

#success {
  display: block;
  background-color: #c1d9c2;
  color: white;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
}
#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  /*CSS counters to number the steps*/

  counter-reset: step;
}
#progressbar li {
  list-style-type: none;
  color: #000;
  text-transform: uppercase;
  font-size: 9px;
  width: 25%;
  float: left;
  position: relative;
}
#progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 20px;
  line-height: 20px;
  display: block;
  font-size: 10px;
  color: #000;
  background: #ccc;
  border-radius: 3px;
  margin: 0 auto 5px auto;
}
/*progressbar connectors*/
#progressbar li:after {
  content: '';
  width: 100%;
  height: 2px;
  background: #ccc;
  position: absolute;
  left: -50%;
  top: 9px;
  z-index: -1;
  /*put it behind the numbers*/

}
#progressbar li:first-child:after {
  /*connector not needed before the first step*/

  content: none;
}
/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before,
#progressbar li.active:after {
  background: #67d5bf;
  color: #000;
}
/* #form-container {
   width: 80%;
  margin: auto;
  background-color: #ffffff;
  padding: 20px; 
  border-radius: 10px;
  box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.1);
 
} */

.form-step {
  /* display: none;
  animation: fadeIn 0.5s ease-in-out;
  margin-bottom: 20px; */
  display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
}
.btn-send-message{
  white-space: nowrap;
  width: auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h2 {
  color: #333;
}
.butto {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: rgb(0 107 179);
  border-radius: 9999px;
  display: flex;
  align-items: center; 
  justify-content: center; 
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  width: auto;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.butto:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.butto:hover .icon {
  transform: translate(4px);
}

.butto:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.butto::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}


/*--------------------------------------------------------------
# Doctors
--------------------------------------------------------------*/
.doctors {
  background: #fff;
}

.doctors .member {
  position: relative;
  box-shadow: 0px 2px 15px rgba(44, 73, 100, 0.08);
  padding: 20px;
  border-radius: 10px;
}

.doctors .member .pic {
  overflow: hidden;
  width: 180px;
  border-radius: 50%; 
  
}

.doctors .member .pic img {
  transition: ease-in-out 0.3s;
}

.doctors .member:hover img {
  transform: scale(1.1);
}

.doctors .member .member-info {
  padding-left: 10px;
}

.doctors .member h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: #2c4964;
}

.doctors .member span {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
}

.doctors .member span::after {
  content: "";
  position: absolute;
  display: block;
  margin-left: 80px;
  width: 60%;
  height: 1px;
  background: #b2c8dd;
  bottom: 0;
  left: 0;
}

.doctors .member p {
  margin: 10px 0 0 0;
  font-size: 14px;
}

.doctors .member .social {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.doctors .member .social a {
  transition: ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: #a0bcd5;
}

.doctors .member .social a i {
  color: #fff;
  font-size: 16px;
  margin: 0 2px;
}

.doctors .member .social a:hover {
  background: #1977cc;
}

.doctors .member .social a+a {
  margin-left: 8px;
}
/*--------------------------------------------------------------
# Frequently Asked Questions
--------------------------------------------------------------*/
.faq .faq-list {
  padding: 0 100px;
  outline: none;

}

.faq .faq-list ul {
  padding: 0;
  list-style: none;
  
}

.faq .faq-list li+li {
  margin-top: 15px;
  border-radius: 15px;
  box-shadow: 5px 5px 12px rgba(137, 159, 180, 0.08);

}

.faq .faq-list li {
  padding: 20px;
  background: #ffffff;  border-radius: 4px;
  position: relative;
  border-radius: 15px;
  box-shadow: 5px 5px 12px rgba(137, 159, 180, 0.08);

}

.faq .faq-list a {
  /* display: block; */
  /* position: relative; */
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  /* line-height: 2px; */
  font-weight: 500;
  padding: 0 30px;
  outline: none;
  cursor: pointer;
}

.faq .faq-list .icon-help {
  font-size: 30px;
  /* position: absolute; */
  right: 0;
  left: 0;
  color: #76b5ee;
}

.faq .faq-list .icon-show,
.faq .faq-list .icon-close {
  font-size: 24px;
  /* position: absolute;
  right: 0;
  top: 0; */
}

.faq .faq-list p {
  margin-bottom: 0;
  padding: 10px 0 0 0;
}

.faq .faq-list .icon-show {
  display: none;
}

.faq .faq-list a.collapsed {
  color: #343a40;

}



.faq .faq-list a.collapsed .icon-show {
  display: inline-block;
}

.faq .faq-list a.collapsed .icon-close {
  display: none;
}

@media (max-width: 1200px) {
  .faq .faq-list {
    padding: 0;
  }
}

/* Testimonials Section */
.testimonials .testimonial-wrap {
  padding-left: 50px;
}

.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}

.testimonials .testimonial-item {
  box-sizing: content-box;
  padding: 30px 30px 30px 60px;
  margin: 30px 15px;
  min-height: 200px;
  box-shadow: 0px 2px 12px rgba(44, 73, 100, 0.08);
  position: relative;
  background: #fff;
}

.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  border-radius: 10px;
  border: 6px solid #fff;
  position: absolute;
  left: -45px;
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #111;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: #badaf7;
  font-size: 26px;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 15px auto 15px auto;
}

@media (max-width: 767px) {
  .testimonials .testimonial-wrap {
    padding-left: 0;
  }

  .testimonials .testimonials-carousel,
  .testimonials .testimonials-slider {
    overflow: hidden;
  }

  .testimonials .testimonial-item {
    padding: 30px;
    margin: 15px;
  }

  .testimonials .testimonial-item .testimonial-img {
    position: static;
    left: auto;
  }
}

/* Swiper Styles */
.testimonials .swiper-container {
  width: 100%;
}

.testimonials .swiper-wrapper {
  display: flex;
}

.testimonials .swiper-slide {
  flex: 0 0 auto;
  width: auto;
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  position: relative;
  display: flex;
  justify-content: center;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 0.5;
  border: 1px solid #1977cc;
  margin: 0 5px; /* Add margin between bullets */
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #1977cc;
  opacity: 1;
}
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info {
  width: 100%;
  background: #fff;
}

.contact .info i {
  font-size: 20px;
  color: #1977cc;
  float: left;
  width: 44px;
  height: 44px;
  background: #d6e9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #2c4964;
}

.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #4b7dab;
}

.contact .info .email,
.contact .info .phone {
  margin-top: 40px;
}

.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
  background: #1977cc;
  color: #fff;
}

.contact .php-email-form {
  width: 100%;
  background: #fff;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

.contact .php-email-form input {
  height: 44px;
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

.contact .php-email-form button[type=submit] {
  background: #1977cc;
  border: 0;
  padding: 10px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .php-email-form button[type=submit]:hover {
  background: #1c84e3;
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  color: #444444;
  font-size: 14px;
  background: #f1f7fd;
  margin-bottom: -10px;
}

#footer .credits {
  padding-top: 5px;
  font-size: 13px;
  color: #444444;
  
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #1977cc;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: #1c84e3;
  color: #fff;
  text-decoration: none;
}
/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  /* visibility: hidden; */
  opacity: 1;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #1977cc;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #298ce5;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

.datepicker-dropdown {
  padding: 20px !important;
}


</style>