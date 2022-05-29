<template>
  <div v-for="user in users" :key="user">
    <UserItem :user="user" />
  </div>
</template>

<script>
import UserItem from "@/components/UserItem.vue";
export default {
  components: {
    UserItem,
  },
  props: ["users"],
};
</script>

<style></style>
