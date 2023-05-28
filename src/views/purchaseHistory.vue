<template>
    <v-layout wrap justify-center>
        <v-container>
            <v-col my-3>
                <h2>Your Orders</h2>
            </v-col>
            <v-col v-if="charges.length > 0">
                <v-card v-for="(charge, i) in charges" :key="i" outlined class="mb-3">
                    <v-list subheader>
                        <v-subheader>Order Date: {{ charge.created }}</v-subheader>
                        <v-list-item>
                            <v-list-item-title>
                                <v-list-item-title>{{ charge.description }}</v-list-item-title>
                                <v-list-item-subtitle>$ {{ charge.amount / 100 }}</v-list-item-subtitle>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col v-else>
                <v-card outlined>
                    <v-card-text>No Purchases</v-card-text>
                </v-card>
            </v-col>
        </v-container>
    </v-layout>
</template>
  
<script>

export default {
    data() {
        return {
            dialog: false,
            charges: "1221sosmo",
            headers: [
                {
                    text: "Order",
                    align: "left",
                    sortable: false,
                    value: "order_id"
                },
                { text: "Date", value: "date" },
                { text: "Total", value: "total" }
            ],
            defaultSelectItem: "Past 15 days",
            selectItems: ["Past 15 days", "Past 1 month", "Past 3 months"]
        };
    },


    methods: {
        date(timestamp) {
            let myDate = new Date(timestamp.seconds * 1000);
            return myDate;
        }
    }
};
</script>
  
<style></style>
  