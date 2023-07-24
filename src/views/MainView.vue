<template>
  <main class="w-screen h-screen flex">
    <Transition :duration="500">
      <aside
        class="hidden lg:block bg-white px-5 py-4 lg:border-r lg:border-gray-300 lg:w-1/5"
      >
        gaaa
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
          <div class="overflow-auto h-1/2 lg:h-3/5">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-600 uppercase bg-gray-50">
                <tr class="normal-case">
                  <th scope="col" class="p-4">Nombre</th>
                  <th scope="col" class="p-4">Nombre cargo</th>
                  <th scope="col" class="p-4">Departamento</th>
                  <th scope="col" class="p-4">Oficina</th>
                  <th scope="col" class="p-4">Cuenta</th>
                  <th scope="col" class="p-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b text-gray-900 text-xs">
                  <th scope="row" class="py-3.5 px-4">
                    <p class="font-medium">Pristia Candra</p>
                    <p
                      class="font-normal text-gray-500"
                      style="font-size: 10px"
                    >
                      lincoln@unpixel.com
                    </p>
                  </th>
                  <td class="py-3.5 px-4">UI UX Designer</td>
                  <td class="py-3.5 px-4">Team Product</td>
                  <td class="py-3.5 px-4">Unpixel Office</td>
                  <td class="py-3.5 px-4">Activada</td>
                  <td class="py-3.5 px-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr class="bg-white border-b text-gray-900 text-xs">
                  <th scope="row" class="py-3.5 px-4">
                    <p class="font-medium">Pristia Candra</p>
                    <p
                      class="font-normal text-gray-500"
                      style="font-size: 10px"
                    >
                      lincoln@unpixel.com
                    </p>
                  </th>
                  <td class="py-3.5 px-4">UI UX Designer</td>
                  <td class="py-3.5 px-4">Team Product</td>
                  <td class="py-3.5 px-4">Unpixel Office</td>
                  <td class="py-3.5 px-4">Activada</td>
                  <td class="py-3.5 px-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr class="bg-white border-b text-gray-900 text-xs">
                  <th scope="row" class="py-3.5 px-4">
                    <p class="font-medium">Pristia Candra</p>
                    <p
                      class="font-normal text-gray-500"
                      style="font-size: 10px"
                    >
                      lincoln@unpixel.com
                    </p>
                  </th>
                  <td class="py-3.5 px-4">UI UX Designer</td>
                  <td class="py-3.5 px-4">Team Product</td>
                  <td class="py-3.5 px-4">Unpixel Office</td>
                  <td class="py-3.5 px-4">Activada</td>
                  <td class="py-3.5 px-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr class="bg-white border-b text-gray-900 text-xs">
                  <th scope="row" class="py-3.5 px-4">
                    <p class="font-medium">Pristia Candra</p>
                    <p
                      class="font-normal text-gray-500"
                      style="font-size: 10px"
                    >
                      lincoln@unpixel.com
                    </p>
                  </th>
                  <td class="py-3.5 px-4">UI UX Designer</td>
                  <td class="py-3.5 px-4">Team Product</td>
                  <td class="py-3.5 px-4">Unpixel Office</td>
                  <td class="py-3.5 px-4">Activada</td>
                  <td class="py-3.5 px-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr class="bg-white border-b text-gray-900 text-xs">
                  <th scope="row" class="py-3.5 px-4">
                    <p class="font-medium">Pristia Candra</p>
                    <p
                      class="font-normal text-gray-500"
                      style="font-size: 10px"
                    >
                      lincoln@unpixel.com
                    </p>
                  </th>
                  <td class="py-3.5 px-4">UI UX Designer</td>
                  <td class="py-3.5 px-4">Team Product</td>
                  <td class="py-3.5 px-4">Unpixel Office</td>
                  <td class="py-3.5 px-4">Activada</td>
                  <td class="py-3.5 px-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                <tr class="bg-white border-b text-gray-900 text-xs">
                  <th scope="row" class="py-3.5 px-4">
                    <p class="font-medium">Pristia Candra</p>
                    <p
                      class="font-normal text-gray-500"
                      style="font-size: 10px"
                    >
                      lincoln@unpixel.com
                    </p>
                  </th>
                  <td class="py-3.5 px-4">UI UX Designer</td>
                  <td class="py-3.5 px-4">Team Product</td>
                  <td class="py-3.5 px-4">Unpixel Office</td>
                  <td class="py-3.5 px-4">Activada</td>
                  <td class="py-3.5 px-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
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
import Input from "@/components/general/Input.vue";

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
  },
})
export default class MainView extends Vue {
  openSidebar = false;
  store = useStore();
  toggleSidebar() {
    console.log("toggleSidebar");
    this.openSidebar = !this.openSidebar;
  }
}
</script>
