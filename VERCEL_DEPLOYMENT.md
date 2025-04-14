# Οδηγίες Ανάπτυξης στο Vercel

Αυτό το αρχείο περιέχει αναλυτικές οδηγίες για την ανάπτυξη της εφαρμογής Nuxt.js στο Vercel.

## Βήματα για την ανάπτυξη

### 1. Δημιουργία λογαριασμού GitHub

Εάν δεν έχετε ήδη λογαριασμό GitHub, δημιουργήστε έναν στο [github.com](https://github.com).

### 2. Δημιουργία νέου repository

1. Συνδεθείτε στο GitHub
2. Πατήστε στο "+" στην επάνω δεξιά γωνία και επιλέξτε "New repository"
3. Δώστε ένα όνομα στο repository (π.χ. "uniwa-app")
4. Επιλέξτε "Public" ή "Private" ανάλογα με τις προτιμήσεις σας
5. Πατήστε "Create repository"

### 3. Ανέβασμα του κώδικα στο GitHub

Από τον τοπικό σας υπολογιστή, αφού έχετε κατεβάσει τα αρχεία της εφαρμογής:

```bash
# Αρχικοποίηση του Git repository
git init

# Προσθήκη όλων των αρχείων
git add .

# Commit των αλλαγών
git commit -m "Initial commit"

# Προσθήκη του remote repository
git remote add origin https://github.com/YOUR_USERNAME/uniwa-app.git

# Ανέβασμα του κώδικα στο GitHub
git push -u origin main
```

### 4. Δημιουργία λογαριασμού Vercel

Εάν δεν έχετε ήδη λογαριασμό Vercel, δημιουργήστε έναν στο [vercel.com](https://vercel.com).

### 5. Ανάπτυξη στο Vercel

1. Συνδεθείτε στο Vercel
2. Πατήστε "Add New..." και επιλέξτε "Project"
3. Επιλέξτε "Import Git Repository" και συνδέστε το GitHub account σας
4. Επιλέξτε το repository "uniwa-app"
5. Στις ρυθμίσεις ανάπτυξης:
   - Framework Preset: Επιλέξτε "Nuxt.js"
   - Build Command: Αφήστε το προεπιλεγμένο (`npm run build` ή `nuxt build`)
   - Output Directory: Αφήστε το προεπιλεγμένο (`.output/public`)
   - Install Command: Αφήστε το προεπιλεγμένο (`npm install` ή `yarn install`)
6. Πατήστε "Deploy"

### 6. Ρυθμίσεις Domain

Μετά την επιτυχή ανάπτυξη, το Vercel θα σας παρέχει ένα domain της μορφής `your-project.vercel.app`. Μπορείτε να:

1. Χρησιμοποιήσετε αυτό το domain
2. Προσθέσετε ένα προσαρμοσμένο domain από τις ρυθμίσεις του project

### 7. Ενημερώσεις της εφαρμογής

Για να ενημερώσετε την εφαρμογή:

1. Κάντε τις αλλαγές στον κώδικα τοπικά
2. Commit και push τις αλλαγές στο GitHub
3. Το Vercel θα ανιχνεύσει αυτόματα τις αλλαγές και θα κάνει redeploy την εφαρμογή

## Σημειώσεις

- Το Vercel παρέχει αυτόματα SSL πιστοποιητικά για όλα τα domains
- Μπορείτε να δείτε τα logs της ανάπτυξης από το Vercel dashboard
- Η εφαρμογή θα είναι διαθέσιμη παγκοσμίως μέσω του Vercel CDN
