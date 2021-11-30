<template>
<div>
 <v-row>
      <v-col
        v-for="card in users"
        :key="card"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <UserCard :cardInfo="card"></UserCard>
      </v-col>
    </v-row>
</div>
</template>

<script>
  import UserCard from '../components/UserCards'

  export default {
    name: 'Users',
    data(){
      return{
      }
    },
    computed: {
      users(){
        return this.$store.state.users
      },
    },
    components: {
      UserCard,
    },
    methods:{
      
    },
    async created(){
        this.$store.dispatch("fetchUsers")
    }
  }
</script>
