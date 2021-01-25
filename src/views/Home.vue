<template>
  <v-container>
    <v-row>
      <v-col>
        <editor />
      </v-col>
      <v-col> {{ scenario }} </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Editor from "@/components/Editor";

export default {
  name: "Home",
  components: {
    Editor
  },
  computed: {
    scenario() {
      return this.$store.state.scenario;
    }
  }
};
</script>
