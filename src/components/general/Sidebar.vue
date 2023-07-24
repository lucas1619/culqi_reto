<template>
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
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";
import AccountMultipleOutline from "vue-material-design-icons/AccountMultipleOutline.vue";
import BriefcaseVariantOutline from "vue-material-design-icons/BriefcaseVariantOutline.vue";
@Options({
  components: {
    RouterLink,
    AccountMultipleOutline,
    BriefcaseVariantOutline,
  },
})
export default class Sidebar extends Vue {
  openSidebar = false;
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
