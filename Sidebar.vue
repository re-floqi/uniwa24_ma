<template>
  <div>
    <h2>Πανεπιστήμιο Δυτικής Αττικής</h2>
    <div 
      v-for="(item, index) in menuItems" 
      :key="index" 
      class="menu-item" 
      :class="{ active: activeItem === item.route }"
      @click="navigateTo(item.route)">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const activeItem = ref('');

const menuItems = [
  { name: 'Ανακοινώσεις', route: '/' },
  { name: 'Πρόγραμμα Μαθημάτων', route: '/schedule' }
];

onMounted(() => {
  activeItem.value = route.path;
});

const navigateTo = (path) => {
  activeItem.value = path;
  router.push(path);
};
</script>
