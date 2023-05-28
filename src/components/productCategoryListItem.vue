<template>
    <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 12 : 0" flat :to="'/categories/' + category.id">
            <v-img src="https://picsum.photos/200/300" lazy-src="https://picsum.photos/200/300"
                class="grey lighten-2 white--text" aspect-ratio="1.2"
                gradient="to top right, rgba(0,0,0,.70), rgba(25,32,72,.7)">
                <v-card-title class="fill-height">
                    <v-layout wrap align-center text-center>
                        <v-row no-gutters>
                            <v-sheet class="ma-2 pa-2">
                                <v-col xs12>
                                    <v-icon large color="white">
                                        {{ category.icon }}
                                    </v-icon>
                                </v-col>
                                <v-col xs12>
                                    <div class="body-1">
                                        {{ category.name }}
                                    </div>
                                </v-col>
                            </v-sheet>
                        </v-row>
                    </v-layout>
                </v-card-title>
            </v-img>
        </v-card>
    </v-hover>
</template>
  
<script>
export default {
    props: {
        category: {
            type: Object,
            default: function () {
                return {};
            }
        }
    }
};
</script>
  
<style></style>
  