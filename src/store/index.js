import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[{title:"USA", subtitle:"Country of freedom", description:"The United States of America is the world's third largest country in size and nearly the third largest in terms of population."},
           {title:"Canada", subtitle:"Country of winter", description:"Canada is a vast and rugged land."},
           {title:"Australia", subtitle:"Home of many natural wonders", description:"Australia is an island continent and the world's sixth largest country."},
           {title:"Brazil", subtitle:"Country of Carnival and soccer", description:"Brazil is the largest country in South America and the fifth largest nation in the world."},
           {title:"Italy", subtitle:"Home of the pasta", description:"Italy, country of south-central Europe, occupying a peninsula that juts deep into the Mediterranean Sea."},
           {title:"Spain", subtitle:"Home of many alcohol and drinks", description:"Spain is a country located in southwestern Europe on the Iberian Peninsula to the south of France and Andorra and to the east of Portugal."},
           {title:"France", subtitle:"Country with a fine cuisine", description:"France, the largest country in Western Europe, has long been a gateway between the continent's northern and southern regions"},
           {title:"China", subtitle:"Home of architectural wonders", description:"It is the world's most populous country, with a population of around 1.404 billion."},
           {title:"Japan", subtitle:"Country with a rich culture", description:"Japan is an archipelago, or string of islands, on the eastern edge of Asia."}],
    title:'A title'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
