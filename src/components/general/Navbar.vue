<template>
  <nav
    class="bg-white border-b border-gray-300 px-5 py-4 flex items-center lg:justify-end justify-between"
  >
    <button @click.prevent="onButtonClick" class="lg:hidden">
      <Menu />
    </button>
    <div>
      <avatar :full-name="fullName" />
      <span class="font-bold ml-2">
        {{ fullName }}
      </span>
    </div>
  </nav>
</template>

<script lang="ts">
import Avatar from "@/components/general/Avatar.vue";
import Menu from "vue-material-design-icons/Menu.vue";

import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";

@Options({
  components: {
    Avatar,
    Menu,
  },
})
export default class Navbar extends Vue {
  store = useStore();
  get fullName() {
    return this.store.state.user.nombre;
  }

  onButtonClick() {
    this.$emit("toggle-sidebar");
  }
}
</script>
