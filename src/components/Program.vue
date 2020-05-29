<template>
    <div class="text-center">
       <v-row> <v-col> </v-col> </v-row>
        <v-row>
            <v-col v-for="(array,index) in arrays" :key="array.id">
                <v-simple-table dark>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-center">Array:{{index+1}} </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item) in array" :key="item.id">
                            <td>{{ item }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>

        </v-row>

        <v-row align="center" justify="center">
            <v-col cols="4">

                <v-text-field v-model="text"/>
                <v-btn rounded color="primary" dark @click="Funktion(text)">Insert</v-btn>
                <v-btn rounded color="primary" dark>Search</v-btn>
                <v-btn rounded color="primary" dark>Delete</v-btn>
                <v-btn rounded color="primary" dark to="/">Reset The Constant</v-btn>
                <!--          <v-text-field v-model="text"/>-->

            </v-col>
        </v-row>


    </div>
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
                count: 0,
                size: 0,
                style: "background: red",
                arrays: [],
                temp: [],
                text: "",
                desserts: [
                    {
                        name: 'Frozen Yogurt'
                    },
                    {
                        name: 'Ice cream sandwich'
                    },
                    {
                        name: 'Eclair'
                    },
                    {
                        name: 'Cupcake'
                    },
                ],

            }
        },
        created() {
            this.hashing()
            console.log(this.$route.params.count);
            console.log(this.$route.params.size);

            this.size = this.$route.params.size;
            this.count = this.$route.params.count;

            this.prepareArrays(this.count, this.size)

            console.log(this.insert("h"))
            // this.insert("harun", 1)
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

            console.log(this.arrays)

        },

        methods: {
            Funktion(text) {
             this.insert(text,1 )
            },
            hashing() {
                console.log("hashing method start")

            },
            prepareArrays(count, size) {
                this.arrays = new Array(count);

                for (var j = 0; j < count; j++) {
                    this.temp = new Array(size);
                    for (var i = 0; i < size; i++) {
                        this.temp[i] = "";
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
                return ((key * 199 * 179 * 7 * 5) % this.size)
            },
            hashFunction4(key) {
                return ((key * key * 197) % this.size)
            },
            hashFunction5(key) {
                return ((key * 179 * 179) % this.size)
            },
            insert(key, tryC) {
                console.log(key + " Try to locate at hash table "+tryC);
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
                        if (this.arrays[0][result1] == "") {
                            this.arrays[0][result1] = key;
                        } else {
                            console.log("Collision occured in 1 for key "+key)
                            temp = this.arrays[0][result1];
                            this.arrays[0][result1] = key;
                            this.insert(temp, 2);
                        }
                        break
                    case 2:
                        if (this.arrays[1][result2] == "") {
                            this.arrays[1][result2] = key;
                        } else {
                            console.log("Collision occured in 2 for key "+key)
                            temp = this.arrays[1][result2];
                            this.arrays[1][result2] = key;
                            if (this.count > 2)
                                this.insert(temp, 3);
                            else
                                this.insert(temp, 1);
                        }
                        break
                    case 3:
                        if (this.arrays[2][result3] == "") {
                            this.arrays[2][result3] = key;
                        } else {
                            console.log("Collision occured in 3 for key "+key)
                            temp = this.arrays[2][result3];
                            this.arrays[2][result3] = key;
                            if (this.count > 3)
                                this.insert(temp, 4);
                            else
                                this.insert(temp, 1);
                        }
                        break
                    case 4:
                        if (this.arrays[3][result4] == "") {
                            this.arrays[3][result4] = key;
                        } else {
                            console.log("Collision occured in 4 for key "+key)
                            temp = this.arrays[3][result4];
                            this.arrays[3][result4] = key;
                            if (this.count > 4)
                                this.insert(temp, 5);
                            else
                                this.insert(temp, 1);
                        }
                        break
                    case 5:
                        if (this.arrays[4][result5] == "") {
                            this.arrays[4][result5] = key;
                        } else {
                            console.log("Collision occured in 5 for key "+key)
                            temp = this.arrays[4][result5];
                            this.arrays[4][result5] = key;
                            this.insert(temp, 1);
                        }
                        break

                }

                this.text=""
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
