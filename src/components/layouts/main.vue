<template>
  <main class="w-screen h-screen flex">
    <sidebar />
    <div class="lg:w-4/5 w-full">
      <navbar @toggle-sidebar="toggleSidebar" />
      <div
        class="bg-white mx-4 mt-5 rounded-2xl overflow-hidden p-4"
        style="height: calc(100% - 80px - 2rem)"
      >
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/general/Navbar.vue";
import Sidebar from "@/components/general/Sidebar.vue";
@Options({
  components: {
    Navbar,
    Sidebar,
  },
})
export default class MainLayout extends Vue {
  openSidebar = false;
  toggleSidebar() {
    this.openSidebar = !this.openSidebar;
  }
}
</script>
