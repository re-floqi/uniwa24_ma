<template>
  <div>
    <h1>Πρόγραμμα Μαθημάτων</h1>
    
    <div v-if="!authenticated" class="password-form">
      <p>Εισάγετε κωδικό πρόσβασης:</p>
      <input 
        type="password" 
        v-model="password" 
        class="password-input" 
        @keyup.enter="checkPassword"
      />
      <button @click="checkPassword" class="submit-button">Είσοδος</button>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
    
    <div v-else>
      <div v-if="loading">Φόρτωση προγράμματος...</div>
      <div v-else-if="scheduleError">{{ scheduleError }}</div>
      <div v-else>
        <table class="schedule-table">
          <thead>
            <tr>
              <th v-for="(header, index) in scheduleHeaders" :key="index">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in scheduleData" :key="rowIndex">
              <td v-for="(header, colIndex) in scheduleHeaders" :key="colIndex">
                {{ row[header] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSchedule } from '~/composables/useSchedule';

const password = ref('');
const authenticated = ref(false);
const error = ref('');

const { scheduleData, scheduleHeaders, loading, error: scheduleError, fetchSchedule } = useSchedule();

const checkPassword = () => {
  if (password.value === 'uniwa') {
    authenticated.value = true;
    error.value = '';
    fetchSchedule();
  } else {
    error.value = 'Λάθος κωδικός! Δοκιμάστε ξανά.';
  }
};
</script>
