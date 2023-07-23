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
      <section class="bg-white mx-4 mt-5 rounded-2xl p-4">
        <section-header title="Empleados" subtitle="Gestiona tus empleados">
          <template v-slot:right-actions>
            <div class="flex">
              <secondary-button class="mr-4 flex">
                <file-download-outline class="mr-2" />Descargar
              </secondary-button>
              <primary-button class="flex">
                <plus class="mr-2" /> Nuevo
              </primary-button>
            </div>
          </template>
        </section-header>
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

@Options({
  components: {
    Avatar,
    Navbar,
    PrimaryButton,
    SecondaryButton,
    Plus,
    FileDownloadOutline,
    SectionHeader,
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
