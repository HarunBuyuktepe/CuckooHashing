<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2" v-for="(array,index) in arrays" :key="array.id">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-center">Hash Table {{index+1}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item) in array" :key="item.id" :style=item[1]>
              <td>{{ item[0] }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
        load factor : {{loadFactor[index]}} / {{size}}
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-row align="center" justify="center">
          <v-col cols="2">
            {{"Key:"}}
          </v-col>
          <v-col cols="4">
          <v-text-field v-model="text"/>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn style="margin-right: 6px" rounded color="primary" dark @click="Funktion(text)">Insert</v-btn>
          <v-btn style="margin-right: 6px" rounded color="primary" dark @click="Search(text)">Search</v-btn>
          <v-btn style="margin-right: 6px" rounded color="primary" dark @click="Delete(text)">Delete</v-btn>
          <v-btn style="margin-right: 6px" rounded color="primary" dark to="/">Reset The Constant</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-btn absolute right top @click="terminalButton()">{{terminalTitle}}</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'Program',
    props: {
      msg: String
    },
    data() {
      // 127 is placed in #13 with no collisions!

      return {
        x: true,
        count: 0,
        size: 0,
        style: "background: red",
        arrays: [],
        temp: [],
        loadFactor: [],
        text: "",
        message: [],
        log: [],
        terminalTitle: "Off"
      }
    },
    created() {
      this.hashing()
      console.log(this.$route.params.count);
      console.log(this.$route.params.size);

      this.size = this.$route.params.size;
      this.count = this.$route.params.count;

      this.prepareArrays(this.count, this.size)

      // console.log(this.insert("h", 1,))
      // this.insert("harun", 1,)
      // this.insert("haruns", 1)
      // this.insert("w", 1)
      // this.insert("e", 1)
      // this.insert("adsa", 1)
      // this.insert("rcd", 1)
      // this.insert("harasdaun", 1)
      // this.insert("asd", 1)
      // this.insert("sad", 1)
      // this.insert("cs", 1)
      // this.insert("asd", 1)
      // this.insert("xcs", 1)
      // this.insert("dvgb", 1)
      // this.insert("wuyuad", 1)
      // this.insert("hmyte", 1)
      // this.insert("tut", 1)
      // this.insert("sadsad", 1)
      // this.insert("fvrvgb", 1)
      // this.insert("muıööılö", 1)
      // this.insert("32r4ftb", 1)
      // this.insert("mıöıuyedcd", 1)
      // this.insert("23rgrtvbf", 1)
      // this.insert("qwr34fvrt", 1)
      // this.insert("wqdwdeftby", 1)
      // this.insert("yntfdecec", 1)
      // this.insert("ergtbvf", 1)
      // this.insert("et35gtver", 1)
      // this.insert("f3ftb5nbt", 1)
      // this.insert("wecfynvıö", 1)
      // this.insert("wecbytmoılu", 1)
      // this.insert("gölçıöyn", 1)
      // this.insert("rılumythreg", 1)
      // console.log(this.arrays)

    },

    methods: {
      terminalButton() {
        if (this.terminalTitle === "Terminal On") {
          this.terminalTitle = "Off"
          this.$store.state.drawer = true
        } else if (this.terminalTitle === "Off") {
          this.terminalTitle = "Terminal On"
          this.$store.state.drawer = false
        }
      },
      Funktion(text) {
        this.insert(text, 1, "background: green");
      },
      hashing() {
        console.log("hashing method start")

      },
      prepareArrays(count, size) {
        this.arrays = new Array(count);
        this.loadFactor = new Array(count);
        for (var j = 0; j < count; j++) {
          this.loadFactor[j]=0
          this.temp = new Array(size);
          for (var i = 0; i < size; i++) {
            var temp2 = new Array(2);
            temp2[0] = "";
            temp2[1] = "background: black";
            this.temp[i] = temp2;
          }
          this.arrays[j] = this.temp;
        }

      },
      hashFunction1(key) {
        return (key % this.size);
      },
      hashFunction2(key) {
        return ((key + 9) % this.size)
      },
      hashFunction3(key) {
        return ((key * 199 * 5 * key + key * 3) % this.size)
      },
      hashFunction4(key) {
        return ((key * key * 197) % this.size)
      },
      hashFunction5(key) {
        return ((key * 179 * 179) % this.size)
      },
      insert(key, tryC, color = "background:green", collusion = 0) {
        if (collusion > this.count * this.size ) {
          console.log("Loop detected")
          this.$store.state.messageArray.unshift("Loop detected while inserting " + key + ".")
          return
        }

        var asdf = this.Exist(key)
        // console.log("Satır 170 "+key)
        if (asdf[0] != 6) {
          console.log("Key already exists at table " + asdf[0] + "and index " + asdf[1])
          this.$store.state.messageArray.unshift(key + " already exists at table " + asdf[0] + " and index " + asdf[1])
          return;
        }


        // console.log("Key " + key + " will locate at hash table " + tryC);
        // console.log("Satır 179 "+key)
        // this.$store.state.messageArray.unshift("* Key " + key + " will locate at hash table " + tryC+"");
        var sum = 0;
        for (var i = 0; i < key.length; i++) {
          sum += (key.charAt(i)).charCodeAt(0);
        }

        var result1 = this.hashFunction1(sum);
        var result2 = this.hashFunction2(sum);
        var result3 = this.hashFunction3(sum);
        var result4 = this.hashFunction4(sum);
        var result5 = this.hashFunction5(sum);


        var temp = "";

        switch (tryC) {
          case 1:
            if (this.arrays[0][result1][0] == "") {
              this.arrays[0][result1][0] = key;
              this.arrays[0][result1][1] = color;
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + collusion+ " collisions. ")
            } else {
              console.log("Collision(" + collusion + ") occured in table 1 for key " + key)
              // this.$store.state.messageArray.unshift("- Collision(" + collusion + ") occured in table 1 for key " + key)
              temp = this.arrays[0][result1][0];
              this.arrays[0][result1][0] = key;
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + ++collusion+ " collisions. ")
              this.insert(temp, 2, "background: red", collusion);
            }

            break
          case 2:

            if (this.arrays[1][result2][0] == "") {
              this.arrays[1][result2][0] = key;
              this.arrays[1][result2][1] = color;
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + collusion+ " collisions. ")
            } else {
              console.log("Collision(" + collusion + ") occured in table 2 for key " + key)
              // this.$store.state.messageArray.unshift("- Collision(" + collusion + ") occured in table 2 for key " + key)
              temp = this.arrays[1][result2][0];
              this.arrays[1][result2][0] = key;
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + ++collusion+ " collisions. ")
              if (this.count > 2)
                this.insert(temp, 3, "background: brown", collusion);
              else {
                this.insert(temp, 1, color, collusion);
              }
            }

            break
          case 3:

            if (this.arrays[2][result3][0] == "") {
              this.arrays[2][result3][0] = key;
              this.arrays[2][result3][1] = color;
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + collusion+ " collisions. ")
            } else {
              console.log("Collision(" + collusion + ") occured in table 3 for key " + key)
              // this.$store.state.messageArray.unshift("- Collision(" + collusion + ") occured in table 3 for key " + key)
              temp = this.arrays[2][result3][0];
              this.arrays[2][result3][0] = key;
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + ++collusion+ " collisions. ")
              if (this.count > 3)
                this.insert(temp, 4, "background: aqua", collusion);
              else
                this.insert(temp, 1, color, collusion);
            }
            // this.arrays[2][result3][1] ="background: green";

            break
          case 4:

            if (this.arrays[3][result4][0] == "") {
              this.arrays[3][result4] [0] = key;
              this.arrays[3][result4][1] = color;
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + collusion+ " collisions. ")
            } else {
              console.log("Collision(" + collusion + ") occured in table 4 for key " + key)
              // this.$store.state.messageArray.unshift("- Collision(" + collusion + ") occured in table 4 for key " + key)
              temp = this.arrays[3][result4][0];
              this.arrays[3][result4][0] = key;
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + ++collusion+ " collisions. ")
              if (this.count > 4)
                this.insert(temp, 5, "background: orange", collusion);
              else
                this.insert(temp, 1, color, collusion);
            }
            // this.arrays[3][result4][1] ="background: green";

            break
          case 5:

            if (this.arrays[4][result5][0] == "") {
              this.arrays[4][result5][0] = key;
              this.arrays[4][result5][1] = color;
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + collusion+ " collisions. ")
            } else {
              console.log("Collision(" + collusion + ") occured in table 5 for key " + key)
              // this.$store.state.messageArray.unshift("- Collision(" + collusion + ") occured in table 5 for key " + key)
              temp = this.arrays[4][result5][0];
              this.$store.state.messageArray.unshift(key + " is placed in table " + tryC + " with " + ++collusion+ " collisions. ")
              this.arrays[4][result5][0] = key;
              this.insert(temp, 1, color, collusion);
            }
            // this.arrays[4][result5][1] ="background: green";

            break

        }
        for (let i = 0; i < this.count; i++) {
          var asd = 0;
          for (let j = 0; j < this.size; j++) {
            if (this.arrays[i][j][1] != "background: black")
              asd += 1;
          }
          this.loadFactor[i] = asd;
        }

        console.log(this.loadFactor)

        this.text = this.message;
        this.message = this.text;
        this.text = "";
      },
      Delete(text) {
        var asdf = this.Exist(text)
        if (asdf[0] == 6) {
          console.log("Key not exists any table");
          this.$store.state.messageArray.unshift("Key not exists any table")
        } else if (text !=""){
          console.log("Silme")
          console.log(asdf)
          this.arrays[asdf[0]-1][asdf[1]][0] = "";
          this.arrays[asdf[0]-1][asdf[1]][1] = "background: black";
          console.log(text + " deleted from table " + asdf[0]);
          this.$store.state.messageArray.unshift(text + " deleted from table " + asdf[0])
        }

        this.text = ""
      },
      Search(text) {
        var ert = this.Exist(text)
        if (ert[0] == 6) {
          this.$store.state.messageArray.unshift(text + " does not exist")
          console.log("Does not exist")
        } else {
          this.$store.state.messageArray.unshift(text + " exists at table " + ert[0] + " and index " + ert[1])
          console.log("Exist at table " + ert[0] + " and index " + ert[1])
        }
        console.log(text)
        this.text = ""
      },
      Exist(text) {
        for (let i = 0; i < this.count; i++) {
          for (let j = 0; j < this.size; j++) {
            if (this.arrays[i][j][0] == text)
              return [++i, j]
          }
        }
        return [6, 31]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
