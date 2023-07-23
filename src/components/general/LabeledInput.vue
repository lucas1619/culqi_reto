<template>
  <div class="mb-4">
    <label :for="id" class="block mb-2 text-sm text-gray-900"
      >{{ label
      }}<span class="text-red-400 ml-1" v-if="required">*</span></label
    >
    <input
      :type="type"
      :id="id"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      :placeholder="placeholder"
      :required="required"
      :value="value"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";

class Props {
  label: string = prop({
    type: String,
    required: true,
  });
  type: string = prop({
    type: String,
    required: true,
  });
  placeholder: string = prop({
    type: String,
    required: true,
  });
  id: string = prop({
    type: String,
    required: true,
  });
  required: boolean = prop({
    type: Boolean,
    required: true,
  });
}

@Options({})

// create vue component
export default class LabeledInput extends Vue.with(Props) {
  value = "";
}
</script>

<style scoped>
label {
  font-size: 14px;
}
</style>
