<template>
  <button
    :class="`bg-gray-900 text-white p-2 rounded-xl font-bold ${
      fullWidth ? 'w-full' : ''
    }`"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Options, prop, WithDefault } from "vue-class-component";

class Props {
  type: WithDefault<"button" | "submit" | "reset"> = prop({
    type: String as () => "button" | "submit" | "reset",
    required: false,
    default: "button",
  });
  fullWidth: WithDefault<boolean> = prop({
    type: Boolean,
    required: false,
    default: false,
  });
}

@Options({})

// create vue component
export default class PrimaryButton extends Vue.with(Props) {
  value = "";
}
</script>

<style lang="css" scoped>
button {
  font-size: 16px;
}
</style>
