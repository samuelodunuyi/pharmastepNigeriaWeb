<template>
  <!--Main layout-->
  <main class="mt-5">
    <div class="container">
      <div style="margin-bottom: 40px;"></div>

      <!--Section: Content-->
      <section>
        <div class="row">

          <div class="col-md-6 gx-5 mb-4">
            <div class="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
              <video 
      src="https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/pharmastep.mp4?alt=media&token=7e67bb6f-68e4-43de-8d8f-828018226315" autoplay></video>
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4">
            <h4><strong>What do we offer</strong></h4>
            <p class="text-justify lh-lg">
              PharmaStep is a start-up firm whose primary aim is the seamless 
              distribution of prescription drugs, over-the-counter medicine 
              and healthcare services.
            </p>
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
  <!--Main layout-->


</template>
  
<script>
export default {
  data () {
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
/* Carousel styling */
#introCarousel,
.carousel-inner,
.carousel-item,
.carousel-item.active {
  height: 100vh;
}

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

/* Height for devices larger than 576px */
@media (min-width: 992px) {
  #introCarousel {
    margin-top: -58.59px;
  }
}

.navbar .nav-link {
  color: #fff !important;
}

    /* Default height for small devices */
    #intro-example {
      height: 400px;
    }

    /* Height for devices larger than 992px */
    @media (min-width: 992px) {
      #intro-example {
        height: 600px;
      }
    }
</style>
  