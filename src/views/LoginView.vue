<template>
  <main class="overflow-hidden h-screen">
    <aside
      class="aside-login bg-gray-900 lg:w-1/2 lg:h-screen w-full h-2/5 text-white"
    >
      <div class="image-container lg:block hidden"></div>
      <div class="p-8">
        <img
          :src="require('@/assets/logo.png')"
          alt="Logo Culqui"
          class="mb-4"
        />
        <p class="power mb-4 text-4xl">
          Dale más power ⚡ a tus empleados hoy 💪
        </p>
        <p class="help text-lg">
          Te ayudamos a gestionarlos de manera más sencilla
        </p>
      </div>
    </aside>
    <div></div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 58% !important;
  background-image: url("https://s3-alpha-sig.figma.com/img/5ba9/9cca/72304f8f5e6598a1fc3f541d868a3889?Expires=1690761600&Signature=C4Dg5OpVJ6isnCyQgyy~2kNiWIfyHZz4NQjprO-WQhE1XYY8oHj6GjBA382V6U9R6y5uYwNVm9oFnjBok54UVcTCpu1Z78oEwC4DI4dxQ5rTYe7vy-za5Mdsffr2w3DI5zXyUFBn6vwZsTf7hAT4~TgiHhJVtkWvMjmiyygqAB-Ybk03DlP2ZRVP6RTceVYdFX0Cvj5btYP~i9SCFot8KmJJB85Lr~b5aTze-XDPFiTcGbY6xOINYODHTggbOCxr2Zi0c6XHqq1HySx-1KEfD2lCD5Xksra0bZJ7LxTQHeiUQezfcs99~oDOGDGOSvOcKMaaqDHxMZlPNejG0QWsaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
}
.power {
  line-height: 120%;
  letter-spacing: -0.5px;
}
.help {
  line-height: 150%;
}
</style>
