import { run } from 'vite-plugin-run'

export default defineConfig({
  plugins: [
    laravel(),
      vue(),
      run([
        {
          name: 'typescript transform',
          run: ['php', 'artisan', 'typescript:transform'],
          pattern: ['app/**/*Data.php', 'app/**/Enums/**/*.php'],
        },
        {
          name: 'build routes',
          run: ['php', 'artisan', 'routes:generate'],
          condition: (file) => file.includes('/routes/'),
        }
      ]),
  ],
})
