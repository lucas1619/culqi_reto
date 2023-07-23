<template>
  <section
    class="h-3/5 lg:w-1/2 lg:h-screen w-full flex items-center justify-center bg-white"
  >
    <form
      @submit="
        (e) => {
          e.preventDefault();
          send();
        }
      "
      class="w-3/5"
    >
      <h1 class="text-2xl font-bold mb-4 text-center text-gray-900">
        Inicia sesión
      </h1>
      <labeled-input
        label="Correo electrónico"
        type="email"
        placeholder="Ingresa el correo electrónico"
        id="email"
        @input="email = $event.target.value"
        required
      />
      <labeled-input
        label="Contraseña"
        type="password"
        placeholder="Ingresa la contraseña"
        id="password"
        @input="password = $event.target.value"
        required
      />
      <div class="flex text-red-400 text-md mb-4" v-if="errorMessage">
        <AlertCircleOutline />
        <span class="ml-3">{{ errorMessage }}</span>
      </div>
      <PrimaryButton type="submit" full-width> Iniciar sesión </PrimaryButton>
    </form>
  </section>
</template>

<script lang="ts">
interface FormLoginData {
  password: string;
  email: string;
  errorMessage: string;
  send(): Promise<void>;
}

import { login } from "@/services/culqi/auth/login";
import { AxiosError } from "axios";
import { Options, Vue } from "vue-class-component";
import AlertCircleOutline from "vue-material-design-icons/AlertCircleOutline.vue";
import { setCulqiToken } from "@/services/culqi/CulqiApi";
import { useStore } from "vuex";
import Swal, { SweetAlertOptions } from "sweetalert2";
import PrimaryButton from "../general/PrimaryButton.vue";

import LabeledInput from "../general/LabeledInput.vue";

@Options({
  components: {
    AlertCircleOutline,
    LabeledInput,
    PrimaryButton,
  },
})
export default class FormLogin extends Vue implements FormLoginData {
  password = "";
  email = "";
  errorMessage = "";
  store = useStore();

  async send() {
    try {
      const response = await login({
        email: this.email,
        password: this.password,
      });
      setCulqiToken(response.data.token);
      this.store.commit("setUser", response.data.user);
      localStorage.setItem("culqiToken", response.data.token);
      this.$router.push({ name: "main" });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data?.message) {
          this.errorMessage = error.response?.data?.message;
        } else {
          this.errorMessage = error.message;
          this.store.commit("setUser", {
            id: 1,
            nombre: "Christian Quispe",
            correo: "c.quispe@culqi.com",
            cargo: "System Administrator",
            departamento: "IT Team",
            oficina: "Culqi Office",
            estadoCuenta: "Activada",
          });
          localStorage.setItem(
            "culqiToken",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwMDc4ODA4LCJleHAiOjE2OTAwODI0MDh9.5MIae7e3YzVzHS6xTdollTisZ5hZx-QNMuk1SlScNSg"
          );
          // go to main view
          Swal.fire({
            title: "Atención",
            text: "Debido al bloqueo de CORS trabajaremos con datos de prueba.",
            icon: "warning",
            confirmButtonText: "Ok",
          } as SweetAlertOptions);

          this.$router.push({ name: "main" });
        }
      }
    }
  }
}
</script>
