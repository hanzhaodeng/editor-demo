<template>
  <div>
    <string-editor :path="['a', 'b']" />
    <string-editor :path="['a', 'b']" />
    <string-editor :path="['a', 'c']" />
    <array-editor :component="StringEditor" :path="['a', 'd']" />
  </div>
</template>

<script>
import StringEditor from "@/components/StringEditor";
import ArrayEditor from "@/components/ArrayEditor";

export default {
  name: "Editor",
  components: { StringEditor, ArrayEditor },
  data: () => ({
    StringEditor: StringEditor
  })
};
</script>
