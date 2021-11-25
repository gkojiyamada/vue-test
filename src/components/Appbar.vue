<template>
  <div>
    <v-app-bar
      app
      absolute
      color="grey"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Explore the world</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon to="/pictures">
        <v-icon>mdi-image</v-icon>
      </v-btn>

      <v-btn icon to="/about">
        <v-icon>mdi-help-box</v-icon>
      </v-btn>

      <v-btn icon to="/contact">
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            My Vue Test
          </v-list-item-title>
          <v-list-item-subtitle>
            My first vue application
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-home', route: '/' },
          { title: 'Pictures', icon: 'mdi-image', route: '/pictures' },
          { title: 'About', icon: 'mdi-help-box', route: '/about' },
          { title: 'Contact', icon: 'mdi-email', route: '/contact'},
        ],
        right: null,
    }),
  }
</script>