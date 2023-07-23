<template>
  <div
    class="flex flex-col items-start justify-between lg:flex-row lg:items-center lg:justify-between"
  >
    <div>
      <h4 class="text-2xl text-gray-900 font-bold">{{ title }}</h4>
      <p class="text-sm text-gray-600 mt-2">{{ subtitle }}</p>
    </div>
    <div class="mt-4 lg:mt-0">
      <slot name="right-actions" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";

class Props {
  title: string = prop({
    type: String,
    required: true,
  });
  subtitle: string = prop({
    type: String,
    required: true,
  });
}
@Options({
  components: {},
})
export default class SectionHeader extends Vue.with(Props) {}
</script>
