<template>
  <div>
    <div id="main">Tommy's List</div>
    <Form />
  </div>
</template>

<script>
import Form from "../../form/Form.vue";

export default {
  name: "Tommy",
  props: ["artists"],
  components: {
    Form,
  },
};
</script>

<style scoped>
#main {
  color: white;
}
</style>