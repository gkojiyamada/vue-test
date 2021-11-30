<template>
  <v-app id="inspire">

    <v-system-bar
      app
      dark
      color="primary"
    >
      <v-spacer>Your traveling journal</v-spacer>
    </v-system-bar>

    <Appbar></Appbar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Footer</strong>
    </v-col>
    </v-footer>

  <v-bottom-navigation
    padless
    v-model="value"
    :background-color="color"
    dark
    shift
  >
    <v-btn>
      <span>Video</span>

      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <v-btn>
      <span>Music</span>

      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn>
      <span>Book</span>

      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn>
      <span>Image</span>

      <v-icon>mdi-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar"

  export default {
    name: "App",

    components:{
      Appbar
    },

    data: () => ({
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'Pictures', icon: 'mdi-image' },
          { title: 'Info', icon: 'mdi-help-box' },
        ],
      value: 1,
    }),
    
    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  }
</script>