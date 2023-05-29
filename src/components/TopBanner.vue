<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  
    
  </v-app>


  <!--Main layout-->
  <main class="mt-5">
    <div class="container">
      <div style="margin-bottom: 40px;"></div>

      <!--Section: Content-->
      <section>
        <div class="row">

          <div class="col-md-6 gx-5 mb-4">
            <div class="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
              <img src="../assets/medicine.jpg" class="img-fluid" />
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
  