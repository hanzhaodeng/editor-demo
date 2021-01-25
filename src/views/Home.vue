<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Editor msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from "@/components/Editor";

export default {
  name: "Home",
  components: {
    Editor
  }
};
</script>
