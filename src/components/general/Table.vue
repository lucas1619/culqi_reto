<template>
  <table class="w-full text-sm text-left text-gray-500">
    <thead class="text-xs text-gray-600 uppercase bg-gray-50">
      <tr class="normal-case">
        <th
          scope="col"
          v-for="colum in columns"
          :class="`p-4 ${colum.headClasses}`"
          :key="colum.key"
        >
          {{ colum.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="bg-white border-b text-gray-900 text-xs"
        v-for="(row, index) in rows"
        :key="index"
      >
        <td
          class="py-3.5 px-4"
          v-for="(column, index) in columns"
          :key="`row-${index}`"
        >
          <slot :name="`row(${column.key})`" :row="row" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";

interface Column {
  label: string;
  key: string;
  headClasses?: string;
}
class Props {
  rows: [] = prop({
    required: true,
  });
  columns: Column[] = prop({
    required: true,
  });
}

@Options({
  components: {},
})
export default class Table extends Vue.with(Props) {}
</script>
