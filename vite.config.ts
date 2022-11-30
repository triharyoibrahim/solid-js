import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Unocss from 'unocss/vite';
import { presetAttributify, presetIcons, presetWebFonts, presetWind, transformerVariantGroup } from 'unocss';


export default defineConfig({
  plugins: [
    solidPlugin(),
    Unocss({
      presets: [
        presetAttributify({/* preset options */}),
        presetWind(),
        presetIcons(),
        presetWebFonts()
      ],
      transformers: [
        transformerVariantGroup(),
      ],
    }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  optimizeDeps: {
    include: ['mapbox-gl']
  }
});
