<template>
  <div>
    <!--display only 3 pages, currentPage, currentPage+1 nad lastPage-->
    <div class="flex">
      <button
        class="mr-6 w-8 h-8 border border-gray-200 flex items-center justify-center rounded-lg disabled:text-gray-500 text-gray-900"
        @click="prev"
        :disabled="currentPage === 1"
      >
        <chevron-left />
      </button>
      <button
        :class="{
          'bg-gray-100': currentPage === leftPage,
        }"
        class="font-bold text-gray-900 w-8 h-8 rounded-xl"
        @click="changePage(leftPage)"
      >
        {{ leftPage }}
      </button>
      <button
        :class="{
          'bg-gray-100': currentPage === mediumPage,
        }"
        class="font-bold text-gray-900 w-8 h-8 rounded-xl"
        @click="changePage(mediumPage)"
      >
        {{ mediumPage }}
      </button>
      <span v-if="breakPoint" class="font-bold text-gray-900">...</span>
      <button
        :class="{
          'bg-gray-100': currentPage === rightPage,
        }"
        class="font-bold text-gray-900 w-8 h-8 rounded-xl"
        @click="changePage(rightPage)"
      >
        {{ rightPage }}
      </button>
      <button
        class="ml-6 w-8 h-8 border border-gray-200 flex items-center justify-center rounded-lg disabled:text-gray-500 text-gray-900"
        @click="next"
        :disabled="currentPage === pages"
      >
        <chevron-right />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

class Props {
  total: number = prop({
    type: Number,
    required: true,
  });
  perPage: number = prop({
    type: Number,
    required: true,
  });
}

@Options({
  components: {
    ChevronLeft,
    ChevronRight,
  },
})

// create vue component
export default class Pagination extends Vue.with(Props) {
  currentPage = 1;

  get breakPoint() {
    return this.currentPage + 2 < this.pages;
  }

  get pages() {
    return Math.ceil(this.total / this.perPage);
  }

  get leftPage() {
    if (this.currentPage + 1 === this.pages) return this.currentPage - 1;
    if (this.currentPage === this.pages) return this.currentPage - 2;
    return this.currentPage;
  }
  get mediumPage() {
    if (this.currentPage + 1 === this.pages) return this.currentPage;
    if (this.currentPage === this.pages) return this.currentPage - 1;
    return this.currentPage + 1;
  }
  get rightPage() {
    return this.pages;
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  prev() {
    this.currentPage--;
  }
  next() {
    this.currentPage++;
  }
}
</script>

<style scoped></style>
