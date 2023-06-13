<template>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PharmaStep</title>
  </head>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/medicine.jpg" class="img-fluid" style="object-fit: cover; " />
        <div class="container">
          <div class="carousel-caption text-start" style="color: black;">
            <h1>Healthcare at your Doorstep</h1>
            <p>Let's help you take charge of your health and wellness</p>
            <p><RouterLink class="btn btn-lg btn-primary" to="/products">Shop Now</RouterLink></p>
            <p class="d-none d-sm-block">&nbsp;</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../components/images/chat.png" class="img-fluid d-none d-md-block" style="object-fit: cover; " />
        <img src="../components/images/chat.png" class="img-fluid d-block d-md-none" style="object-fit: cover; object-position: 100% 0;" />
        <div class="container">
          <div class="carousel-caption text-start" style="color: black;">
            <h1>Your Pharmacist on the Go.</h1>
            <p>Confused about your symptoms? <br>Speak with our Pharmacist and get some clarity</p>
            <p><RouterLink class="btn btn-lg btn-primary" to="category/Antibacterial">Chat with Pharmacist</RouterLink></p>
            <p class="d-none d-sm-block">&nbsp;</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../components/images/pills.jpg" class="img-fluid d-none d-md-block" style="object-fit: cover; color: black;" />
        <img src="../components/images/pills.jpg" class="img-fluid d-block d-md-none" style="object-fit: cover; color: black; object-position: 60% 0;"/>
        <div class="container">
          <div class="carousel-caption text-start" style="color: black;">
            <h1>Antibiotics Facts</h1>
            <p>You should never stop taking a course of antibiotics half way through. <br>Always make sure you finish them.</p>
            <p><RouterLink class="btn btn-lg btn-primary" to="category/Antibacterial">Antibiotics</RouterLink></p>
            <p class="d-none d-sm-block">&nbsp;</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../components/images/painreliver.png" class="img-fluid d-none d-md-block" style="object-fit: cover;"/>
        <img src="../components/images/alt_img.png" class="img-fluid d-block d-md-none" style="object-fit: cover; object-position: 30% 0;"/>
        <div class="container">
          <div class="carousel-caption text-start" style="color: black;">
            <h1>Pain Reliever Medicines</h1>
            <p>Don't ignore that pain, provide soothe to your pain,<br> Explore our range of Pain Relieve Medications</p>
            <p><RouterLink class="btn btn-lg btn-primary" to="category/Pain_management">Analgesics</RouterLink></p>
            <p class="d-none d-sm-block">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <main class="mt-5">
    <div class="container">
      <div style="margin-bottom: 30px;"></div>

      <!--Section: Content-->
      <section>

        <div class="text-center">
          <div class="col-md-12 gx-5 mb-4" >
            <h4><strong>Who we are</strong></h4>
            <p class="text-justify lh-lg">
              PharmaStep is your number 1 stop for your prescription drugs,
              over-the-counter medicine and healthcare services. Access to medications from wherever you are in Lagos
              State.
            </p>
            <p>&nbsp;</p>
            <h4><strong>What we offer</strong></h4>
            <p class="text-justify lh-lg">
              The main feature of the PharmaStep application is its accessibility.
              You could be on your way from work, or in a salon, literally anywhere at any point,
              and healthcare is accessible to you, simply by swiping on your phone.
              This way, you can keep track of your health, and you do not have to
              wait until you are down with illness, before being able to interact
              with resources needed to overcome such illness.
            </p>
          </div>

        </div>
      </section>
      <!--Section: Content-->
      <hr class="my-5" />
    </div>
  </main>
</template>
  
<script>
export default {
  data() {
    return {
      dialog: false,
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/home', icon: 'home' },
        { title: 'Sign Up', path: '/signup', icon: 'face' },
        { title: 'Sign In', path: '/signin', icon: 'lock_open' }
      ]
    }
  }
};
</script>
  
<style>
.carousel-item:nth-child(1) {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.carousel-item:nth-child(2) {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.carousel-item:nth-child(3) {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.navbar .nav-link {
  color: #fff !important;
}

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }


/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>
  