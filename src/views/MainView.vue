<template>
  <main class="w-screen h-screen flex">
    <Transition :duration="500">
      <aside
        class="hidden lg:block bg-white px-5 py-4 lg:border-r lg:border-gray-300 lg:w-1/5"
      >
        <div class="flex items-center justify-center">
          <img :src="require('@/assets/logo-white.png')" alt="Logo Culqi" />
        </div>
        <nav class="mt-6">
          <ul>
            <router-link class="text-gray-900 font-bold text-sm" to="/" exact>
              <li class="my-4 flex items-center">
                <account-multiple-outline class="icon" />
                Empleados
              </li>
            </router-link>
            <router-link
              class="text-gray-900 font-bold text-sm"
              to="/recuitment"
              exact
            >
              <li class="my-4 flex items-center">
                <briefcase-variant-outline class="icon" />Reclutamiento
              </li>
            </router-link>
          </ul>
        </nav>
      </aside>
    </Transition>
    <div class="lg:w-4/5 w-full">
      <navbar @toggle-sidebar="toggleSidebar" />
      <section
        class="bg-white mx-4 mt-5 rounded-2xl p-4 overflow-hidden"
        style="height: calc(100% - 80px - 2rem)"
      >
        <section-header title="Empleados" subtitle="Gestiona tus empleados">
          <template #right-actions>
            <div class="flex">
              <secondary-button
                class="mr-4 flex w-1/2 lg:w-auto justify-center"
              >
                <file-download-outline class="mr-2" />Descargar
              </secondary-button>
              <primary-button class="flex w-1/2 lg:w-auto justify-center">
                <plus class="mr-2" /> Nuevo
              </primary-button>
            </div>
          </template>
        </section-header>
        <div class="h-full">
          <div class="flex mb-3 lg:mb-6 flex-col lg:flex-row">
            <Input
              class="w-full mb-3 lg:mb-0 lg:w-3/4 mt-6 mr-4"
              type="text"
              placeholder="Buscar empleado"
              id="busqueda"
            />
            <div class="w-full lg:w-1/4 flex items-end justify-center">
              <select
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option disabled selected>Nombre de cargo</option>
              </select>
            </div>
          </div>
          <div class="overflow-auto h-2/5 lg:h-3/5">
            <Table :rows="users" :columns="columns">
              <template #row(name)="{ row }">
                <p class="font-medium">{{ row.nombre }}</p>
                <p class="font-normal text-gray-500" style="font-size: 10px">
                  {{ row.correo }}
                </p>
              </template>
              <template #row(cargo)="{ row }">
                {{ row.cargo }}
              </template>
              <template #row(departamento)="{ row }">
                {{ row.departamento }}
              </template>
              <template #row(oficina)="{ row }">
                {{ row.oficina }}
              </template>
              <template #row(cuenta)="{ row }">
                {{ row.estadoCuenta }}
              </template>
              <template #row(acciones)>
                <div class="flex items-center justify-end">
                  <button
                    class="w-8 h-8 rounded-lg bg-green-500 text-white mr-2.5 flex items-center justify-center"
                  >
                    <eye-outline :size="16" />
                  </button>
                  <button
                    class="w-8 h-8 rounded-lg bg-blue-500 text-white mr-2.5 flex items-center justify-center"
                  >
                    <pencil-outline :size="16" />
                  </button>
                  <button
                    class="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center"
                  >
                    <trash-can-outline :size="16" />
                  </button>
                </div>
              </template>
            </Table>
          </div>
          <div
            class="mt-6 flex flex-col items-end lg:flex-row lg:items-center lg:justify-between"
          >
            <Pagination :total="50" :perPage="10" />
            <div class="flex items-center mt-4 lg:mt-0">
              <span class="text-xs text-gray-600 font-medium mr-6">
                Mostrando 1 a 8 de 50 registros
              </span>
              <div class="w-fit">
                <select
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option :value="5">Mostrar 5</option>
                  <option selected :value="10">Mostrar 10</option>
                  <option :value="15">Mostrar 15</option>
                  <option :value="20">Mostrar 20</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import Avatar from "@/components/general/Avatar.vue";
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import PrimaryButton from "@/components/general/PrimaryButton.vue";
import SecondaryButton from "@/components/general/SecondaryButton.vue";
import Navbar from "@/components/general/Navbar.vue";
import SectionHeader from "@/components/general/SectionHeader.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import FileDownloadOutline from "vue-material-design-icons/FileDownloadOutline.vue";
import Pagination from "@/components/general/Pagination.vue";
import Input from "@/components/general/Input.vue";
import Table from "@/components/general/Table.vue";
import { User } from "@/models/user";

import { RouterLink } from "vue-router";
import AccountMultipleOutline from "vue-material-design-icons/AccountMultipleOutline.vue";
import BriefcaseVariantOutline from "vue-material-design-icons/BriefcaseVariantOutline.vue";

import EyeOutline from "vue-material-design-icons/EyeOutline.vue";
import PencilOutline from "vue-material-design-icons/PencilOutline.vue";
import TrashCanOutline from "vue-material-design-icons/TrashCanOutline.vue";
@Options({
  components: {
    Avatar,
    Navbar,
    PrimaryButton,
    SecondaryButton,
    Plus,
    FileDownloadOutline,
    SectionHeader,
    Input,
    Pagination,
    RouterLink,
    AccountMultipleOutline,
    BriefcaseVariantOutline,
    Table,
    EyeOutline,
    PencilOutline,
    TrashCanOutline,
  },
})
export default class MainView extends Vue {
  openSidebar = false;
  store = useStore();
  toggleSidebar() {
    console.log("toggleSidebar");
    this.openSidebar = !this.openSidebar;
  }
  users = [
    {
      id: 287,
      nombre: "GIAWn",
      correo: "GIAWn@example.com",
      cargo: "wTfFqFlV",
      departamento: "uQFCbJ",
      oficina: "Rbsm",
      estadoCuenta: "inactivo",
    },
    {
      id: 521,
      nombre: "UuTLR",
      correo: "UuTLR@example.com",
      cargo: "tHQrGweF",
      departamento: "FotyIf",
      oficina: "VCGB",
      estadoCuenta: "activo",
    },
    {
      id: 413,
      nombre: "yKRzS",
      correo: "yKRzS@example.com",
      cargo: "qGvNmUBc",
      departamento: "JlKLXs",
      oficina: "xzAp",
      estadoCuenta: "pendiente",
    },
    {
      id: 677,
      nombre: "YwzQa",
      correo: "YwzQa@example.com",
      cargo: "CNbuvJkq",
      departamento: "NRkXQa",
      oficina: "ynfY",
      estadoCuenta: "inactivo",
    },
    {
      id: 837,
      nombre: "jIYZc",
      correo: "jIYZc@example.com",
      cargo: "uOvlYbtE",
      departamento: "FXsAYe",
      oficina: "AXVD",
      estadoCuenta: "inactivo",
    },
    {
      id: 43,
      nombre: "FQfrW",
      correo: "FQfrW@example.com",
      cargo: "cqZknmKj",
      departamento: "NhKFwS",
      oficina: "Hohz",
      estadoCuenta: "activo",
    },
    {
      id: 276,
      nombre: "UoUXa",
      correo: "UoUXa@example.com",
      cargo: "xtZDdruX",
      departamento: "kLEkeS",
      oficina: "gBcK",
      estadoCuenta: "inactivo",
    },
    {
      id: 62,
      nombre: "wRqVR",
      correo: "wRqVR@example.com",
      cargo: "aPHqDGQK",
      departamento: "CjLVRv",
      oficina: "mDdF",
      estadoCuenta: "activo",
    },
    {
      id: 504,
      nombre: "UaINx",
      correo: "UaINx@example.com",
      cargo: "KKAPUOCq",
      departamento: "pxoPVz",
      oficina: "QtWo",
      estadoCuenta: "pendiente",
    },
    {
      id: 61,
      nombre: "EzFkN",
      correo: "EzFkN@example.com",
      cargo: "sBlKCHMp",
      departamento: "BYNZuY",
      oficina: "bIqH",
      estadoCuenta: "pendiente",
    },
  ] as User[];
  columns = [
    {
      label: "Nombre",
      key: "name",
    },
    {
      label: "Nombre cargo",
      key: "cargo",
    },
    {
      label: "Departamento",
      key: "departamento",
    },
    {
      label: "Oficina",
      key: "oficina",
    },
    {
      label: "Cuenta",
      key: "cuenta",
    },
    {
      label: "Acciones",
      key: "acciones",
      headClasses: "text-right",
    },
  ];
}
</script>
<style lang="css" scoped>
.router-link-exact-active {
  @apply text-cyan-500;
}
.router-link-exact-active .icon {
  @apply text-cyan-500;
}

.icon {
  @apply mr-2 text-gray-500;
}
</style>
