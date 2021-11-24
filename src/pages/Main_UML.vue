<template>
  <div
    id="main"
    :style="{
      'background-image':
        'url(https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80)',
    }"
  >
    <p>Ultmate Music List</p>
    <Form />
  </div>
</template>

<script>
import Form from '../form/Form.vue'

export default {
  name: "Main_UML",
  components: {
    Form
  }
};
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: column; 
  height: 1000px;
}

p {
  color: white;
}
</style>