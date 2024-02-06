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
    <h1 class="logo me-auto">
      <router-link to="/">
        <img class="logo-image" src='../image/logoo-removebg-preview.png' alt="MediDom Logo">
      </router-link>
    </h1>

    <nav id="navbar" class="navbar order-last order-lg-0">
      <ul>
        <li>
          <button class="nav-button" @click="scrollToSection('hero')">Home</button>
        </li>
        <li>
          <button class="nav-button" @click="scrollToSection('about')">Services</button>
        </li>
        <li>
          <button class="nav-button" @click="scrollToSection('services')">Departments</button>
        </li>
        <li>
          <button class="nav-button nav-button-doctors" @click="scrollToSection('doctors')">Doctors</button>
        </li>
        <li>
          <button class="nav-button" @click="scrollToSection('contact')">Contact</button>
        </li>
      </ul>
    </nav>

    <div>
      <button class="appointment-btn" @click="scrollToSection('appointment')" style="border: none;">Make an appointment</button>
    </div>
  </div>
</header>

  <!-- End Header -->


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
  <div class="container" style="height: 300px; position: relative;">

<div class="row align-items-start">
  <div class="col-lg-4 d-flex align-items-stretch">
    <div class="content" style="margin-top: 8px; padding: 35px 30px;">
      <h3 style="font-size: 24px;">Why Choose MediDom Services?</h3>
      <p>
        Welcome to MediDom Services, where healthcare meets convenience. Here are a few reasons why choosing us for your medical and paramedical needs is the right decision.
      </p>
      <div class="text-center">
        <router-link to="#" class="more-btn" @click="scrollToSection('about')">Learn More <i class="bx bx-chevron-right"></i></router-link>
      </div>
    </div>
  </div>
  <div class="col-lg-8 d-flex align-items-stretch mt-2 mt-lg-0">
    <div class="icon-boxes d-flex flex-column justify-content-start">
      <div class="row">
        <!-- Service 1 -->
        <div class="col-xl-4 d-flex align-items-stretch">
          <div class="icon-box mt-2 mt-xl-0">
            <i class='bx bx-building-house'></i>
            <h4>Convenience</h4>
            <p>We bring healthcare to your doorstep. No need to travel to a clinic; our qualified medical professionals come to you.</p>
          </div>
        </div>
        <!-- Service 2 -->
        <div class="col-xl-4 d-flex align-items-stretch">
          <div class="icon-box mt-2 mt-xl-0">
            <i class='bx bx-time-five'></i>
            <h4>Flexible Scheduling</h4>
            <p>With our easy online appointment system, you have control over when and where you receive medical services</p>
          </div>
        </div>
        <!-- Service 3 -->
        <div class="col-xl-4 d-flex align-items-stretch">
          <div class="icon-box mt-2 mt-xl-0">
            <!-- <i class='bx bxs-group'></i>  -->
            <i class="fa-solid fa-user-doctor"></i>
            <h4>Qualified Professionals</h4>
            <p>Our team of experienced doctors and paramedics are dedicated to providing high-quality care in the comfort of your home.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

<!-- End services content-->
          
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

    <form @submit.prevent="submitForm()" class="php-email-form">
      <div class="row">
        <div class="col-md-4 form-group mt-3">
  <input v-model="formData.nss" type="text" name="nss" class="form-control" id="nss" placeholder="NSS Number"  title="Please enter a valid NSS Number (e.g., 123-45-6789)" required>
  <div class="validate"></div>
</div>


    <div class="col-md-4 form-group mt-3">
  <input v-model="formData.firstName" type="text" name="firstName" class="form-control" id="firstName" placeholder="First Name" :data-rule="'minlen:2'" data-msg="Please enter at least 2 characters" required>
  <div class="validate"></div>
</div>
<div class="col-md-4 form-group mt-3">
  <input v-model="formData.lastName" type="text" name="lastName" class="form-control" id="lastName" placeholder="Last Name" :data-rule="'minlen:2'" data-msg="Please enter at least 2 characters" required>
  <div class="validate"></div>
</div>

   

  </div>

      <div class="row">
        <div class="col-md-4 form-group mt-3">
      <input v-model="formData.age" type="number" name="age" class="form-control" id="age" placeholder="Your Age" required>
      <div class="validate"></div>
    </div>
        
    <div class="col-md-4 form-group mt-3">
      <input v-model="formData.phone" type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone" :data-rule="'minlen:4'" data-msg="Please enter at least 4 chars" required>
      <div class="validate"></div>
    </div>
        <div class="col-md-4 form-group mt-3">
      <input v-model="formData.location" type="text" name="location" class="form-control" id="location" placeholder="Your Location" required>
      <div class="validate"></div>
    </div>

    
    <div class="col-md-4 form-group mt-3">
      <input v-model="formData.date" type="date" name="date" class="form-control" id="date" >
      <div class="validate"></div>
    </div>
    <div class="col-md-4 form-group mt-3">
  <!-- Time Input -->
  <input v-model="formData.time" type="time" name="time" class="form-control" id="time">
  <div class="validate"></div>
</div>
    
  
        <div class="col-md-4 form-group mt-3">
          <select v-model="formData.department" name="department" id="department" class="form-select">
            <option value="">Select Department</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Paramedical Services">Paramedical Services</option>
            <option value="ORL Care Center">ORL Care Center</option>
            <option value="Geriatrics">Geriatrics</option>
            <option value="Mental Health and Wellness">Mental Health and Wellness</option>
          </select>
          <div class="validate"></div>
        </div>
        
      
        
        <div class="col-md-4 form-group mt-3">
          <div class="checkbox-wrapper">
            <input id="terms-checkbox-37" v-model="formData.Emergency" name="checkbox" type="checkbox">
            <label class="terms-label" for="terms-checkbox-37">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                <mask fill="white" id="path-1-inside-1_476_5-37">
                  <rect height="200" width="200"></rect>
                </mask>
                <rect mask="url(#path-1-inside-1_476_5-37)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
              </svg>
              <span class="label-text">Emergency</span>
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 form-group mt-3">
          <textarea v-model="formData.message" class="form-control" name="message" rows="5" placeholder="Additional Informations(Optional)"></textarea>
          <div class="validate"></div>
        </div>
      </div>

      <div class="mb-3">
        <div class="loading" v-if="isLoading">Loading</div>
        <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
        <div class="sent-message" v-if="successMessage">Your appointment request has been sent successfully. Thank you!</div>
      </div>

      <div class="text-center">
        <button class="butto" :disabled="isLoading" style="border:none">Make an Appointment
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </form>
  </div>
</section>
  <!-- End Appoint Section -->






  
<!-- ======= Doctors Section ======= -->
<section id="doctors" class="doctors">
  <div class="container">
    <div class="section-title">
      <h2>Medical Professionals</h2>
      <p>Meet our dedicated team of experienced healthcare professionals. Each professional at MediDom is committed to delivering personalized and compassionate care to our patients.</p>
    </div>

    <!-- Doctors Section -->
    <div class="row">
      <div v-for="(doctor, index) in doctors" :key="index" class="col-lg-6 mt-4">
        <!-- Doctor Card -->
        <div class="member d-flex align-items-start">
          <div class="pic"><img :src="doctor.image" class="img-fluid" alt="image"></div>
          <div class="member-info">
            <h4>{{ doctor.name }}</h4>
            <span>{{ doctor.specialization }}</span>
            <p>{{ doctor.description }}</p>
            <div class="social">
              <a :href="'#' + doctor.twitter"><i class='bx bxl-twitter'></i></a>
              <a :href="'#' + doctor.facebook"><i class='bx bxl-facebook' ></i></a>
              <a :href="'#' + doctor.instagram"><i class='bx bxl-instagram' ></i></a>
              <a :href="'#' + doctor.linkedin"><i class='bx bxl-linkedin' ></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Paramedical Professionals Section -->
    <div class="section-title mt-5">
      <h2>Paramedical Professionals</h2>
      <p>Meet our dedicated team of paramedical professionals. They play a crucial role in providing essential healthcare services to our patients.</p>
    </div>

    <div class="row">
      <div v-for="(paramedic, index) in paramedicalProfessionals" :key="index" class="col-lg-6 mt-4">
        <!-- Paramedic Card -->
        <div class="member d-flex align-items-start">
          <div class="pic"><img :src="paramedic.image" class="img-fluid" alt="image"></div>
          <div class="member-info">
            <h4>{{ paramedic.name }}</h4>
            <span>{{ paramedic.specialization }}</span>
            <p>{{ paramedic.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
<!-- End Doctors Section -->


<!-- ======= Frequently Asked Questions Section ======= -->
<section id="faq" class="faq section-bg">
  <div class="container">
    <div class="section-title">
      <h2>Frequently Asked Questions</h2>
      <p>Find answers to common queries about our services, appointments, billing, and more. If you have a question not covered here, feel free to reach out to our support team.</p>
    </div>

 
<div class="faq-list">
  <ul>
    <li v-for="(faq, index) in faqs" :key="index" data-aos="fade-up">
      <i class="bx bx-help-circle icon-help"></i>
      <a
        v-bind:data-bs-toggle="'collapse'"
        v-bind:data-bs-target="'#faq-list-' + (index + 1)"
        v-bind:class="{ 'collapsed': !faq.expanded, 'show': faq.expanded }"
        @click="toggleCollapse(index)"
      >
        {{ faq.question }}
        <i
  v-bind:class="[{ 'bi-chevron-down': !faq.expanded, 'bi-chevron-up': faq.expanded }, 'icon-show']"
></i>

      </a>
      <div
        v-bind:id="'faq-list-' + (index + 1)"
        class="collapse"
        v-bind:class="{ 'show': faq.expanded }"
        data-bs-parent=".faq-list"
      >
        <p>{{ faq.answer }}</p>
      </div>
    </li>
  </ul>
</div>  </div>
</section> <!-- End Frequently Asked Questions Section -->







<!-- ======= Testimonials Section ======= -->
<section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-title">
        <h2>Testimonials</h2>
        <p>Read what our satisfied clients have to say about their experiences with MediDom Services. Your health journey is important to us, and we take pride in the positive feedback from those we've had the privilege to serve.</p>
      </div>
      <div class="swiper-container testimonials-slider" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <h3>{{ testimonial.name }}</h3>
                <h4>{{ testimonial.position }}</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  {{ testimonial.quote }}
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section><!-- End Testimonials Section -->



 <!-- ======= Contact Section ======= -->
 <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Contact</h2>
        <p>We value your feedback and inquiries. Reach out to us via phone or email. Our dedicated support team is here to assist you.</p>
      </div>
    </div>

    <div>
      <iframe style="border:0; width: 100%; height: 350px;" :src="googleMapsSrc" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-4">
          <div class="info">
            <div class="address">
              <i class="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>{{ location }}</p>
            </div>

            <div class="email">
              <i class="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>{{ email }}</p>
            </div>

            <div class="phone">
              <i class="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>{{ phoneNumber }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-8 mt-5 mt-lg-0">
          <form @submit.prevent="FeedBack" class="php-email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input v-model="formFeedBk.name" type="text" class="form-control" id="name" placeholder="Your Name" required>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input v-model="formFeedBk.email" type="email" class="form-control" id="email" placeholder="Your Email" required>
              </div>
            </div>
            <div class="form-group mt-3">
              <input v-model="formFeedBk.subject" type="text" class="form-control" id="subject" placeholder="Subject" required>
            </div>
            <div class="form-group mt-3">
              <textarea v-model="formFeedBk.message" class="form-control" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading" v-if="loading">Loading</div>
              <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
              <div class="sent-message" v-if="successMessage">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit" class="btn-send-message">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  </section><!-- End Contact Section -->

  </main>


  <!-- ======= Footer ======= -->
 <footer id="footer">
  

    <div class="container d-md-flex py-4">
      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>MedidomServices</span></strong>. All Rights Reserved
        </div>
        <div class="credits">Designed by <strong> <span>MEDIDOMGROUPE</span></strong></div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
<!-- End Footer -->

<div>
    <div id="preloader"></div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center" @click="scrollToTop">
      <i class="bi bi-arrow-up-short"></i>
    </a>
  </div>
</template>

<script>

import 'bootstrap-icons/font/bootstrap-icons.css';

import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';
import {auth , a, rdv , fbk} from '../firebase/index'
    import {createUserWithEmailAndPassword} from 'firebase/auth'
    import {collection , onSnapshot, doc ,addDoc,setDoc,deleteDoc,updateDoc,query,where,getDocs} from 'firebase/firestore'
export default {
  components: {
  // CountUp,
  },
  data(){
    
    return{
      //appointemet
      currentStep: 1,
        selectedCategory: null,
        selectedMedicalDetail: null,
        selectedDetailPart2: null,
        selectedSchedule: null,
        wilaya: '',
        commune: '',
        address: '',
        name: '',
        phoneNumberr: '',
        age: '',
        emaill: '',

        nss: '',
      firstName: '',
      lastName: '',
      age: '',
      phone: '',
      location: '',
      date: '',
      time: '',

      department: '',
      uid: '',

       //appointment
      email: "medidomservices@example.com",
      phoneNumber: "+213 547298543",
      duration   : 300,
      googleMapsSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.877458259866!2d-122.08385068467762!3d37.38605147982594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1616606294009!5m2!1sen!2sus",
      location: "A108 Adam Street, New York, NY 535022",

    counterData: [
      {
        trans: 'Doctors',
        id   : 85,
        count: 0,
        duration   : 30,
      },
      {
        trans: 'Departments',
        id   : 18,
        count: 0,
        duration   : 30,
      },
      {
        trans: 'Awards',
        id   : 150,
        count: 0,
        duration   : 20,
      },
                ],

                
      services: [
        {
          iconClass: "fas fa-heartbeat",
          title: "General Medicine",
          link: "#",
          description: "Our General Medicine department is your first line of defense for overall health. Our experienced physicians are equipped to address a wide range of medical concerns, providing comprehensive assessments, diagnoses, and personalized treatment plans.",
        },
        {
          iconClass: "fa-solid fa-children",
          title: "Pediatrics",
          link: "#",
          description: "At MediDom Services, we understand the unique healthcare needs of children. Our Pediatrics department focuses on delivering compassionate and specialized care to ensure the well-being and development of your little ones.",
        },
        {
          iconClass: "fa-solid fa-user-nurse",
          title: "Paramedical Services",
          link: "#",
          description: "Beyond traditional medical care, our Paramedical Services department offers a range of essential healthcare services delivered by qualified paramedics. From diagnostic tests to home-based therapeutic interventions, we bring the expertise of healthcare directly to you.",
        },
        {
          iconClass: "fa-solid fa-truck-medical",
          title: "Emergency Medicine ",
          link: "#",
          description: "Time is critical in emergencies, and our Emergency Medicine department is here for you. Our rapid-response team is trained to handle urgent medical situations, providing immediate care and stabilization until further medical assistance is available.",
        },
        {
          iconClass: "fa-solid fa-person-cane",
          title: "Geriatrics",
          link: "#",
          description: "Aging comes with its own set of health considerations. Our Geriatrics department is dedicated to providing specialized care for elderly individuals, focusing on managing age-related health issues, promoting independence, and enhancing overall quality of life.",
        },
        {
          iconClass: "fas fa-notes-medical",
          title: "Mental Health and Wellness",
          link: "#",
          description: "Prioritize your well-being with our dedicated Mental Health and Wellness team. We offer counseling, therapy, and assessments to support emotional resilience and a balanced lifestyle. Your mental health is crucial to your overall well-being, and we're here for you.",
        },
      ],
      
    doctors: [
        {
          name: "Walter White",
          specialization: "Chief Medical Officer",
          description: "As our Chief Medical Officer, Dr. Walter White brings over two decades of experience in general medicine.",
          twitter: "walter_twitter",
          facebook: "walter_facebook",
          instagram: "walter_instagram",
          linkedin: "walter_linkedin",
          image:'/src/image/doctors-1.jpg',
          // Add other properties and image path if needed
        },
        {
          name: "Sarah Jhonson",
          specialization: "General Medicine",
          description: " Dr. Johnson is dedicated to providing comprehensive and compassionate care for a wide range of medical concerns.",
          twitter: "sarah_twitter",
          facebook: "sarah_facebook",
          instagram: "sarah_instagram",
          linkedin: "sarah_linkedin",
          image: '/src/image/doctors-2.jpg',
          // Add other properties and image path if needed
        },
        {
          name: "Dr.Daniel Williams",
          specialization: "Mental Health and Wellness",
          description: "Dr. Williams is dedicated to supporting mental well-being through  counseling and therapy.Your mental health is in caring hands with Dr. Williams. ",
          twitter: "Williams_twitter",
          facebook: "Williams_facebook",
          instagram: "Williams_instagram",
          linkedin: "Williams_linkedin",
          image: '/src/image/doctors-3.jpg',
        },
        {
          name: "Emily Clark",
          specialization: "Pediatrics",
          description: "Dr. Clark is passionate about children's health, offering expert care and guidance to ensure the well-being and development of young ones.",
          twitter: "Clark_twitter",
          facebook: "Clark_facebook",
          instagram: "Clark_instagram",
          linkedin: "Clark_linkedin",
          image: '/src/image/doctors-4.jpg',
        },
      ],
      paramedicalProfessionals: [
  {
    name: "John Paramedic",
    specialization: "Paramedicine",
    description: "John is a dedicated paramedic with expertise in providing essential healthcare services.",
    image: '/src/image/param2.jpg',
  },
  {
    name: "Emily Medic",
    specialization: "Emergency Medical Services",
    description: "Emily is a skilled paramedic specializing in emergency medical services and rapid response.",
    image: '/src/image/parm1.jpg',
  },
  {
    name: "Amina Healthcare",
    specialization: "Healthcare Support",
    description: "Amina plays a vital role in healthcare support, ensuring patients receive the necessary care and assistance.",
    image: '/src/image/param5.jpg',
  },
  {
    name: "Sarah Paramedic",
    specialization: "Critical Care",
    description: "Sarah specializes in critical care, providing expert assistance in challenging medical situations",
    image:'/src/image/param4.avif',
  },
],
      faqs: [
        {
          question: "Can I request a specific doctor for my appointment?",
          answer: "Yes, you can! When booking your appointment, you have the option to choose a specific doctor from our experienced team. We want you to feel comfortable and confident in your healthcare provider.",
          expanded: true,
        },
        {
          question: "What services does the Paramedical Department offer?",
          answer: "Our Paramedical Services include a range of essential healthcare services delivered by qualified paramedics. From diagnostic tests to therapeutic interventions, we bring healthcare expertise directly to you.",
          expanded: false,
        },
      ],
      testimonials: [
        {
          name: "Saul Goodman",
          position: "Ceo & Founder",
          quote: "The healthcare professionals were knowledgeable and caring. I highly recommend MediDom for anyone looking for convenient and high-quality medical services.",
        
        },
        {
          name: "Sara Wilsson",
          position: "Designer",
          quote: "I can't express how grateful I am for the prompt and professional service provided by MediDom's Emergency Medicine team. When my father had a sudden health issue, they arrived quickly, assessed the situation, and provided immediate care. It made all the difference in a critical moment. Thank you, MediDom, for your exceptional service.",
          
        },
        {
          name: "Robert K",
          position: "Ceo & Founder",
          quote: "Dr. Michael Rodriguez from the Pediatrics department at MediDom has been a lifesaver for our family. His friendly demeanor instantly puts our children at ease during check-ups. The convenience of home visits is invaluable, especially with little ones. I appreciate the personalized and expert care our family receives from MediDom.",
         
        },
        {
          name: "Emily L",
          position: "Designer",
          quote: "I've been using MediDom's Women's Health services for years, and the care provided by Dr. Emily Clark has been exceptional. ",
          
        }, {
          name: "Saul Goodman",
          position: "Ceo & Founder",
          quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
          
        },
        {
          name: "Sara Wilsson",
          position: "Designer",
          quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
         
        },
            ],
      
      formData: {
        nss:'',
        firstName:'',
        lastName:'',
        age:'',
        phone:'',
        location:'',
        date:'',
        time: '',
        Emergency:false,
        message:'',
        department:'',
      },
      formFeedBk: {
        name:'',
        email:'',
        message:'',
        subject:''
      },

      isLoading: false,
      errorMessage: '',
      successMessage: '',
    }
  },
  mounted() {
      this.showStep();

    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },  
      });
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
  methods: {
    //ap
    
    selectCategory(category) {
        this.selectedCategory = category;
        this.nextStep();
      },
      selectMedicalDetail(detail) {
        this.selectedMedicalDetail = detail;
        this.nextStep();
      },
      selectDetailPart2(option) {
        this.selectedDetailPart2 = option;
        this.nextStep();
      },
      confirmDemande() {
       
        this.nextStep();
      },
      selectSchedule(schedule) {
        this.selectedSchedule = schedule;
        this.nextStep();
      },
      nextStep() {
        this.currentStep++;
        this.showStep();
      },
      prevStep() {
        this.currentStep--;
        this.showStep();
      },
      showStep() {
        const steps = document.querySelectorAll('.form-step');
        steps.forEach((step, index) => {
          step.style.display = index + 1 === this.currentStep ? 'block' : 'none';
        });
      },
    //ap
    toggleCollapse(index) {
      this.faqs.forEach((faq, i) => {
        faq.expanded = i === index ? !faq.expanded : false;
      });
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToTop() {
      // Add logic to scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    async RDV() {
      const appointmentDocRef = doc(rdv, this.uid);

      try {
        this.isLoading = true;
        await addDoc(rdv, {
          nss: this.formData.nss,
          date: this.formData.date,
          firstName:this.formData.firstName,
          lastName:this.formData.lastName,
          age:this.formData.age,
          phone:this.formData.phone,
          location:this.formData.location,
          department:this.formData.department,
          patientID: this.uid,
          time: this.formData.time,
          Emergency:this.formData.Emergency,
          message:this.formData.message,
          status: 'en attente',
        });
        const Ref = doc(a, this.uid);
        await updateDoc(Ref, {
          nss: this.formData.nss,
          date: this.formData.date,
          time: this.formData.time,
          firstName:this.formData.firstName,
          lastName:this.formData.lastName,
          age:this.formData.age,
          phone:this.formData.phone,
          location:this.formData.location,
          });
        console.log('ok');
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error('Error creating the appointment', error);
        throw error; // Re-throw the error to handle it in the submitForm method
      }
    },
    async FeedBack() {
      const appointmentDocRef = doc(rdv, this.uid);

      try {
        this.isLoading = true;
        await addDoc(fbk, {
          name:this.formFeedBk.name,
          email:this.formFeedBk.email,
          message:this.formFeedBk.message,
          subject:this.formFeedBk.subject,
          patientID: this.uid,
        });
        
       
        console.log('ok');
        this.isLoading = false;
        setTimeout(() => {
          // Reset loading state and show success message
          this.isLoading = false;
          this.successMessage = 'Your appointment request has been sent successfully. Thank you!';

        }, 2000);
        /*
        this.formFeedBk.name,
        this.formFeedBk.email,
        this.formFeedBk.message,
        this.formFeedBk.subject;*/
        Object.keys(this.formFeedBk).forEach((key) => {
        this.formFeedBk[key] = '';
      });
      } catch (error) {
        this.isLoading = false;
        console.error('Error creating the appointment', error);
        throw error; // Re-throw the error to handle it in the submitForm method
      }
    },

    async submitForm() {
      try {
        await this.RDV();

        // Optionally, you can reset the form data here
        this.nss = '';
        this.firstName = '';
        this.lastName = '';
        this.age = '';
        this.phone = '';
        this.location = '';
        this.date = '';
        this.department = '';

        // Display success message or perform other actions
        this.successMessage = 'Your appointment request has been sent successfully. Thank you!';
        this.isLoading = true;

// Simulate an API request with a delay
        setTimeout(() => {
          // Reset loading state and show success message
          this.isLoading = false;
          this.successMessage = 'Your appointment request has been sent successfully. Thank you!';

        }, 2000);
      } catch (error) {
        console.error('Error submitting appointment request', error);

        // Display error message or perform other actions
        this.errorMessage = 'Error submitting appointment request. Please try again later.';
      }
    },
  },
  created() {
    this.counterData.forEach((item) => {
      setInterval(() => {
        if (item.count < item.id) {
          item.count++;
        }
      }, item.duration);
    });
    
    },
   
   
  
};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body, html {
    margin: 0;
    padding: 0;
}

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
h5,
h6 {
  font-family: "Raleway", sans-serif;
  color: white;
}
h6 {
  font-family: "Raleway", sans-serif;
  color: #3291e6;
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
  background-position: center;
  background-repeat: repeat-x;
  background-attachment: fixed;
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
.nav-button-doctors {
  margin-left: 42px;
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
  height: 200px;
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
  color: #353434;
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
  color: #1a1818;
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
  white-space: nowrap;
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


.checkbox-wrapper input[type="checkbox"] {
  display: none;
}

.checkbox-wrapper .terms-label {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.checkbox-wrapper .terms-label .label-text {
  margin-left: 10px;
}

.checkbox-wrapper .checkbox-svg {
  width: 30px;
  height: 30px;
}

.checkbox-wrapper .checkbox-box {
  fill: rgba(115, 109, 109, 0.425);
  stroke: #6fa1d0;
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  transition: stroke-dashoffset 0.6s ease-in;
}

.checkbox-wrapper .checkbox-tick {
  stroke: #6fa1d0;
  stroke-dasharray: 172;
  stroke-dashoffset: 172;
  transition: stroke-dashoffset 0.6s ease-in;
}

.checkbox-wrapper input[type="checkbox"]:checked + .terms-label .checkbox-box,
  .checkbox-wrapper input[type="checkbox"]:checked + .terms-label .checkbox-tick {
  stroke-dashoffset: 0;
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
.btn-send-message{
white-space: nowrap;
width:auto;
}

.datepicker-dropdown {
  padding: 20px !important;
}


</style>