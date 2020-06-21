<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-card class="mx-auto" max-width="364" elevation="6">
        <v-row style="height: 60px" align="center" justify="center" class="ma-2">
          <v-col>
            Table Count:
          </v-col>
          <v-col>
            <v-text-field :rules="[countRule(count)]" v-model="count"/>
          </v-col>
        </v-row>
        <v-row style="height: 90px" align="center" justify="center" class="ma-2">
          <v-col>
            Table Size
          </v-col>
          <v-col>
            <v-text-field :rules="[sizeRule(size)]" v-model="size"/>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="pa-2">
          <v-btn rounded color="primary" dark @click="handleCreateButton()">Create Hash Tables</v-btn>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        size: "",
        count: "",
        text: "",
        validCount: false,
        validSize: false
      }
    },
    methods: {
      handleCreateButton() {
        if (this.validCount  && this.validSize ) {
          this.$router.push({name: "Program", params: {size: this.size, count: this.count}})
        }
      },
      countRule(count) {
        if (count < 2 || count > 5) {
          this.validCount = false
          return "2-5 arası gir"
        }
        else {
          this.validCount = true
          return true
        }
      },
      sizeRule(size) {
        if (size < 10 || size > 30) {
          this.validSize = false
          return "10 and 30 "
        }
        else {
          this.validSize = true
          return true
        }
      }
    }
  }
</script>