<template>
  <div>
    <div class="sidebar-logo">
      <img src="/images/uniwa-logo-new.png" alt="Πανεπιστήμιο Δυτικής Αττικής" />
    </div>
    <div 
      v-for="(item, index) in menuItems" 
      :key="index" 
      class="menu-item" 
      :class="{ active: activeItem === item.route }"
      @click="navigateTo(item.route)">
      <span v-if="item.icon" class="menu-icon">{{ item.icon }}</span>
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
  { name: 'Ανακοινώσεις', route: '/', icon: '📢' },
  { name: 'Πρόγραμμα Μαθημάτων', route: '/schedule', icon: '📅' }
];

onMounted(() => {
  activeItem.value = route.path;
});

const navigateTo = (path) => {
  activeItem.value = path;
  router.push(path);
};
</script>

<style scoped>
.menu-icon {
  margin-right: 8px;
}
</style>
