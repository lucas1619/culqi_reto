<template>
  <main class="h-screen flex flex-col lg:flex-row">
    <AsideLogin />
    <FormLogin />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AlertCircleOutline from "vue-material-design-icons/AlertCircleOutline.vue";
import AsideLogin from "@/components/login/AsideLogin.vue";
import FormLogin from "@/components/login/FormLogin.vue";

@Options({
  components: {
    AlertCircleOutline,
    AsideLogin,
    FormLogin,
  },
})
export default class LoginView extends Vue {}
</script>
