<script setup>
import { useCategoryStore } from "@/stores/category";
import LayoutFixed from "./components/LayoutFixed.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();
onMounted(() => {
  categoryStore.getCategory();
});
</script>

<template>
  <LayoutNav></LayoutNav>
  <LayoutFixed></LayoutFixed>
  <LayoutHeader></LayoutHeader>
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>

<style scoped></style>
