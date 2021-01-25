<template>
  <div>
    <v-row>
      <v-col> Array: {{ path.join(".") }} </v-col>
      <v-col @click="showAdd = !showAdd"> <v-btn small dark>+</v-btn> </v-col>
    </v-row>
    <v-row v-for="(item, index) in items" :key="index">
      <v-col>
        <component :is="component" :path="[...path, index]" />
      </v-col>
      <v-col>
        <v-btn small dark @click="remove(index)"> - </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="showAdd">
      <v-col>
        <component
          :is="component"
          @input="showAdd = false"
          :path="[...path, items.length]"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { find } from "./find";
export default {
  name: "ArrayEditor",
  props: ["component", "path"],
  data: () => ({ showAdd: false }),
  methods: {
    remove(index) {
      let arr = find(this.$store.state.scenario, this.path);
      arr.splice(index, 1);
    }
  },
  computed: {
    items() {
      return find(this.$store.state.scenario, this.path);
    }
  }
};
</script>
