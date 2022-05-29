<template>
  <div class="user">
    <h4>User #: {{ user.name }}</h4>
    <h4>{{ user.address.street }}</h4>
    <h4>{{ user.company.name }}</h4>
    <h4>{{ user.phone }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  props: ["user"],
});
</script>

<style scoped>
.user {
  border: 1px black solid;
  border-radius: 8px;
}
</style>
