<template>
  <v-text-field :value="text" @input="onChange"></v-text-field>
</template>
<script>
import { find } from "./find";
export default {
  name: "String",
  props: ["path"],
  computed: {
    text() {
      return find(this.$store.state.scenario, this.path);
    }
  },
  methods: {
    onChange(text) {
      this.$store.commit("update", {
        path: this.path,
        data: text
      });
      this.$emit("input");
    }
  }
};
</script>
