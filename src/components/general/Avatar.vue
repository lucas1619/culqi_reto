<template>
  <div
    class="avatar inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-orange-600"
  >
    <span class="font-bold text-white">{{ initials }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";

class Props {
  fullName: string = prop({
    type: String,
    required: true,
  });
}

@Options({})
export default class Avatar extends Vue.with(Props) {
  get initials() {
    return this.$props.fullName
      .split(" ")
      .map((n) => n[0])
      .join("");
  }
}
</script>

<style lang="css" scoped>
.avatar {
  font-size: 14px;
}
</style>
