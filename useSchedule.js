import { ref } from 'vue';
import axios from 'axios';
import Papa from 'papaparse';

export function useSchedule() {
  const scheduleData = ref([]);
  const scheduleHeaders = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchSchedule = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const url = "https://docs.google.com/spreadsheets/d/1JxGZdDt1iWbKSbbOwIueDzj3kzfzBbINxxW0yATcbV4/export?format=csv";
      const response = await axios.get(url);
      
      Papa.parse(response.data, {
        header: true,
        complete: (results) => {
          if (results.data && results.data.length > 0) {
            // Get headers from the first row
            scheduleHeaders.value = Object.keys(results.data[0]);
            scheduleData.value = results.data;
          } else {
            throw new Error("Δεν βρέθηκαν δεδομένα προγράμματος");
          }
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
          throw new Error("Failed to parse schedule data");
        }
      });
    } catch (err) {
      error.value = "Σφάλμα κατά τη φόρτωση του προγράμματος: " + err.message;
      console.error("Error fetching schedule:", err);
    } finally {
      loading.value = false;
    }
  };

  return {
    scheduleData,
    scheduleHeaders,
    loading,
    error,
    fetchSchedule
  };
}
