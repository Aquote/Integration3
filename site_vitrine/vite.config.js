
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  base: '/GCAM/', // Chemin de base de l'application
  build: {
    outDir: '../GCAM', // Dossier de sortie relatif à la racine du projet
  },
};