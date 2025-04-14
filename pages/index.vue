<template>
  <div>
    <h1 class="page-header">Ανακοινώσεις</h1>
    <div v-if="loading" class="loading-message">Φόρτωση ανακοινώσεων...</div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <div v-else>
      <div v-for="(announcement, index) in announcements" :key="index" class="announcement">
        <h2>{{ announcement.TITLE }}</h2>
        <div class="date">📅 {{ formatDate(announcement.DATE) }}</div>
        <div>{{ announcement.DESCRIPTION }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAnnouncements } from '~/composables/useAnnouncements';

const { announcements, loading, error, fetchAnnouncements } = useAnnouncements();

onMounted(async () => {
  await fetchAnnouncements();
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('el-GR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
</script>
