<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      Таблица пользователей
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App'
})

export default class App extends Vue {}
</script>
