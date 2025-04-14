import { ref } from 'vue';
import axios from 'axios';
import Papa from 'papaparse';

export function useAnnouncements() {
  const announcements = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchAnnouncements = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const url = "https://docs.google.com/spreadsheets/d/1dqBSWQTSJmpDH_bkCg43jZ9rvR2sLVevxLDycrb9XM8/export?format=csv";
      const response = await axios.get(url);
      
      Papa.parse(response.data, {
        header: true,
        complete: (results) => {
          // Convert date strings to Date objects
          const parsedData = results.data.map(item => {
            if (item.DATE) {
              // Parse date in DD/MM/YYYY format
              const parts = item.DATE.split('/');
              if (parts.length === 3) {
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed in JS
                const year = parseInt(parts[2], 10);
                item.DATE = new Date(year, month, day);
              }
            }
            return item;
          });
          
          // Sort by date in descending order
          parsedData.sort((a, b) => {
            if (a.DATE instanceof Date && b.DATE instanceof Date) {
              return b.DATE - a.DATE;
            }
            return 0;
          });
          
          announcements.value = parsedData;
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
          throw new Error("Failed to parse announcements data");
        }
      });
    } catch (err) {
      error.value = "Σφάλμα κατά τη φόρτωση των ανακοινώσεων: " + err.message;
      console.error("Error fetching announcements:", err);
    } finally {
      loading.value = false;
    }
  };

  return {
    announcements,
    loading,
    error,
    fetchAnnouncements
  };
}
