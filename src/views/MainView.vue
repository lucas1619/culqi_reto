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
      <nav class="bg-white border-b border-gray-300 px-5 py-4">fasdfasdf</nav>

      <section class="bg-white mx-4 mt-5 rounded-2xl p-4">table</section>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class MainView extends Vue {
  openSidebar = false;
}
</script>
