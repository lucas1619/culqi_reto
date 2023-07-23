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
      <section class="bg-white mx-4 mt-5 rounded-2xl p-4">table</section>
    </div>
  </main>
</template>

<script lang="ts">
import Avatar from "@/components/general/Avatar.vue";
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import Navbar from "@/components/general/Navbar.vue";

@Options({
  components: {
    Avatar,
    Navbar,
  },
})
export default class MainView extends Vue {
  openSidebar = false;
  store = useStore();
  get fullName() {
    return this.store.state.user.nombre;
  }
  toggleSidebar() {
    console.log("toggleSidebar");
    this.openSidebar = !this.openSidebar;
  }
}
</script>
