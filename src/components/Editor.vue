<template>
  <div>
    <string-editor :path="['a', 'b']" />
    <string-editor :path="['a', 'b']" />
    <string-editor :path="['a', 'c']" />
    <array-editor :component="stringEditor" :path="['a', 'd']" />
  </div>
</template>

<script>
import stringEditor from "@/components/StringEditor";
import arrayEditor from "@/components/ArrayEditor";

export default {
  name: "Editor",
  components: { stringEditor, arrayEditor },
  data: () => ({
    stringEditor: stringEditor
  })
};
</script>
