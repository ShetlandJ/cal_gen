<template>
    <div id="app">
        <div class="wrap">
            <!-- text input -->
            <label>
                Event name
                <input
                    v-model="eventName"
                    type="text"
                    id="start"
                    name="start"
                />
            </label>

            <label>
                Date
                <input
                    v-model="startDate"
                    type="date"
                    id="start"
                    name="start"
                    style="margin-bottom: 15px"
                />
            </label>

            <a href="#" @click="generate">Generate</a>
        </div>
    </div>
</template>

<script>
import { subWeeks } from "date-fns";

export default {
    name: "App",
    data() {
        return {
            eventName: "",
            startDate: new Date(),
        };
    },
    methods: {
        generate() {
            // Generate the start and end dates dynamically using this.startDate
            // const startDate = setMinutes(setHours(this.startDate, 8), 0);
            // const endDate = setMinutes(setHours(this.startDate, 9), 0);

            this.$ics.addEvent(
                "en-us",
                "James",
                "",
                "",
                this.startDate,
                this.startDate,
                "",
                {
                    name: "Marilyn Stewart",
                    email: "",
                }
            );

            // Generate the second event's dates dynamically based on this.startDate
            const startDate2 = subWeeks(new Date(this.startDate), 2);
            const endDate2 = subWeeks(new Date(this.startDate), 2);

            this.$ics.addEvent(
                "en-us",
                "James 2",
                "",
                "",
                startDate2,
                endDate2,
                "",
                {
                    name: "Marilyn Stewart",
                    email: "",
                }
            );
            // Generate the third event's dates dynamically based on this.startDate
            const startDate3 = subWeeks(new Date(this.startDate), 6);
            const endDate3 = subWeeks(new Date(this.startDate), 6);

            this.$ics.addEvent(
                "en-us",
                "James 2",
                "",
                "",
                startDate3,
                endDate3,
                "",
                {
                    name: "Marilyn Stewart",
                    email: "",
                }
            );

            this.$ics.download("James");
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.wrap {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 50px;
    width: 100px;
}
</style>
