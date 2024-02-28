<script lang="ts" setup>
import { ref } from "vue";
import {useAuthStore} from "~/stores/useAuthStore";

definePageMeta({
  middleware: ['guest']
})

const form = ref({
  email: "azimmermann@tivialis.com",
  password: "Ka0t!f12"
});
 
const auth = useAuthStore();
 
async function handleLogin() {
  if(auth.isLoggedIn) return;
  const {error} = await auth.login(form.value);
 
  console.log(error);
}
</script>
 
<template>
  <form @submit.prevent="handleLogin">
    <label>
      Email
      <input v-model="form.email" type="email">
    </label>
    <label>
      Password
      <input v-model="form.password" type="password">
    </label>
 
    <button>Login</button>
  </form>
</template>
 
<style scoped></style>