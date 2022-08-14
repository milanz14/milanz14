<template>
  <div>
    <input type="email" v-model="email" />
  </div>
</template>

<script>
export default {
  name: "LoginCard",
  data() {
    return {
      email: "",
    };
  },
};
</script>
