<template>
<div>
 <v-row>
      <v-col
        v-for="card in myCards"
        :key="card"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <MyCard :cardInfo="card"></MyCard>
      </v-col>
    </v-row>
</div>
</template>

<script>
  import MyCard from '../components/MyCard'

  export default {
    name: 'Home',
    computed: {
      myCards(){
        return this.$store.state.cards
      },
    },
    components: {
      MyCard,
    },
  }
</script>
