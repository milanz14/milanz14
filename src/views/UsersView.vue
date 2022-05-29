<template>
  <div class="home">
    <h2>User Info</h2>
    <UsersList v-bind:users="users" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import UsersList from "@/components/UsersList.vue";
import DataType from "../types/DataType";

export default defineComponent({
  name: "HomeView",
  components: {
    UsersList,
  },

  data(): DataType {
    return {
      users: [],
    };
  },
  async mounted(): Promise<void> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    this.users = res.data;
  },
});
</script>
