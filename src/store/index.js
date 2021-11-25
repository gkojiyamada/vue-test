import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[{title:"USA", subtitle:"Country of freedom", description:"The United States of America is the world's third largest country in size and nearly the third largest in terms of population.", image:'https://media.istockphoto.com/photos/election-day-in-washington-picture-id1279862622?b=1&k=20&m=1279862622&s=170667a&w=0&h=9ZZaenVVnOS9JYhj8eb_CaE3J1ak4mDxlgj6SKnJVIM='},
           {title:"Canada", subtitle:"Country of winter", description:"Canada is a vast and rugged land.", image:"https://ci-prod.imgix.net/upload/galeriadeimagens/00204218.jpg"},
           {title:"Australia", subtitle:"Home of many natural wonders", description:"Australia is an island continent and the world's sixth largest country.", image:"https://s2.glbimg.com/RbgmWR1f6vIhwfXkM6FdhHRpTUk=/e.glbimg.com/og/ed/f/original/2019/12/30/sydney-opera-house-354375_1920.jpg"},
           {title:"Brazil", subtitle:"Country of Carnival and soccer", description:"Brazil is the largest country in South America and the fifth largest nation in the world.", image:"https://webimages.iadb.org/Drupal_pantheon/2016-12/brazil-32887.jpg"},
           {title:"Italy", subtitle:"Home of the pasta", description:"Italy, country of south-central Europe, occupying a peninsula that juts deep into the Mediterranean Sea.", image:"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2020/10/Topo-Made-in-Italy-Toscana-1.jpg"},
           {title:"Spain", subtitle:"Home of many alcohol and drinks", description:"Spain is a country located in southwestern Europe on the Iberian Peninsula to the south of France and Andorra and to the east of Portugal.", image:"https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-image-of-Spain-in-August1.jpg"},
           {title:"France", subtitle:"Country with a fine cuisine", description:"France, the largest country in Western Europe, has long been a gateway between the continent's northern and southern regions", image:"https://europa.eu/europass/sites/default/files/2020-04/France_0.jpg"},
           {title:"China", subtitle:"Home of architectural wonders", description:"It is the world's most populous country, with a population of around 1.404 billion.", image:"https://img.emg-services.net/htmlpages/htmlpage2106/china-main-1.jpg"},
           {title:"Japan", subtitle:"Country with a rich culture", description:"Japan is an archipelago, or string of islands, on the eastern edge of Asia.", image:"https://see.news/wp-content/uploads/2021/05/ة.jpg"}],
    title:'A title'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
