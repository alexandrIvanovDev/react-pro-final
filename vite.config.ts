import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [
		svgr({
			include: '**/*.svg',
			svgrOptions: {
				exportType: 'named',
				namedExport: 'ReactComponent',
				plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								overrides: { removeViewBox: false },
							},
						},
					],
				},
			},
		}),
		react(),
	],

	resolve: {
		tsconfigPaths: true,
	},

	optimizeDeps: {
		include: ['react', 'react-dom'],
	},

	build: {
		outDir: 'build',
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (id.includes('react') || id.includes('react-dom')) {
							return 'vendor-react';
						}
						return 'vendor';
					}
				},
			},
		},
	},

	server: {
		port: 3000,
		open: true,
	},
});
