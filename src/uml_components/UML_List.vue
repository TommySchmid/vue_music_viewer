<template>
  <div>
    <div v-for="listItem in fetchedList" :key="listItem">{{ listItem }}</div>
  </div>
</template>

<script>
export default {
  name: "UML_List",
  props: ["fetchedList"],
};
</script>
