<template>
  <v-container fluid>

    <v-row align="center" justify="center">
      <v-col cols="4" sm="2">
        <v-row align="center">
          <v-col>
            Table Count
          </v-col>
          <v-col>
            <v-text-field v-model="count"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="4" sm="2">
        <v-row align="center">
          <v-col>
            Table Size
          </v-col>
          <v-col>
            <v-text-field v-model="size"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn rounded color="primary" dark @click="handleCreateButton()">Create Hash Tables</v-btn>
      <v-label>text</v-label>
    </v-row>
  </v-container>
</template>

<script>


  export default {
    name: "Home",
    data () {
      return {
        size: "",
        count:"",
        text :"",
      }
    },
    methods:{
      handleCreateButton() {
        if(Number(this.size) > 9 && Number(this.size) < 31 && Number(this.count) > 0 && Number(this.count) < 11)
          this.$router.push({name: "Program", params: { size: this.size, count: this.count}})
        else
          this.text = "Enter between valid interval";
      }
    }
  }
</script>