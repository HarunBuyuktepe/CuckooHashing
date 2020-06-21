<template>
  <v-container fluid class="ma-0 pa-0">
    <v-navigation-drawer
      v-model="$store.state.drawer"
      width="450"
      class="elevation-6"
      right
      app
    >
      <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Terminal</v-list-item-title>
          <v-btn absolute right text color="primary" @click="clearTerminal()">Clear</v-btn>
        </v-list-item-content>
      </v-list-item>
        <v-divider/>
        <v-list-item-content v-for="(array,index) in $store.state.messageArray" :key="index">
          <v-list-item-title>{{array}}</v-list-item-title>
          <v-divider/>
        </v-list-item-content>
      </v-list>
    </v-navigation-drawer>
    <v-content>
        <router-view />
    </v-content>
    <v-footer
            absolute
            class="font-weight-medium"
    >
      <v-col
              class="text-center"
              cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>@HarunBuyuktepe</strong>
      </v-col>
    </v-footer>
  </v-container >
</template>

<script>
export default {
  name: "MainLayout",
  created() {
    console.log("Mainla")
  },
  data() {
    return {
      drawer: false
    };
  },
  methods:{
    clearTerminal() {
      this.$store.state.messageArray = []
    }
  }
}
</script>
<style scoped>

</style>
