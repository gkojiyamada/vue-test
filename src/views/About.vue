<template>
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <v-spacer>
        <div class="text-center">
          <h3 class="headline white--text text--accent-2">About</h3>
          <div>{{title}}</div>
          <div>It serves as an example of how practical a site can be created using the right tools</div>
        </div>
        </v-spacer>
      </v-card-title>
    </v-card>
</template>

<script>
  export default {
    data (){
      return{
        titleview: this.$store.state.descriptionTitle
      }
    },
    computed: {
      title(){
        return this.$store.getters.upperDescription
      }
    },
  }
</script>