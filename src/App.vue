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
import { subWeeks, setMinutes, setHours } from "date-fns";

export default {
    name: "App",
    data() {
        return {
            eventName: "",
            startDate: new Date(),
            endDate: new Date(),
        };
    },
    methods: {
        generate() {
            this.startDate = setMinutes(setHours(new Date(this.startDate), 8), 0);
            this.endDate = setMinutes(setHours(new Date(this.startDate), 8), 30);

            this.$ics.addEvent(
                "en-us",
                this.eventName,
                "",
                "",
                this.startDate,
                this.endDate,
                "",
                {
                    name: "Marilyn Stewart",
                    email: "",
                }
            );

            // Generate the second event's dates dynamically based on this.startDate
            const startDate2 = subWeeks(new Date(this.startDate), 2);
            const endDate2 = subWeeks(new Date(this.endDate), 2);

            this.$ics.addEvent(
                "en-us",
                this.eventName,
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

            const startDate3 = subWeeks(new Date(this.startDate), 4);
            const endDate3 = subWeeks(new Date(this.endDate), 4);

            this.$ics.addEvent(
                "en-us",
                this.eventName,
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

            const startDate4 = subWeeks(new Date(this.startDate), 6);
            const endDate4 = subWeeks(new Date(this.endDate), 6);

            this.$ics.addEvent(
                "en-us",
                this.eventName,
                "",
                "",
                startDate4,
                endDate4,
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
