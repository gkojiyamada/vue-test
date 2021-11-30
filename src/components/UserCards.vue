<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        {{cardInfo.name}}
      </p>
      <div class="text--primary">
        Username: {{cardInfo.username}}
      </div>
      <div class="text--primary">
        Phone Number:{{cardInfo.phone}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            E-mail and website
          </p>
          <p>{{cardInfo.email}} </p>
          <p>{{cardInfo.website}} </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    props:['cardInfo'],
    data: () => ({
      reveal: false,
    }),
  }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>