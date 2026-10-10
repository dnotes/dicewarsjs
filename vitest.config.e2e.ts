import { defineProject } from 'vitest/config';
import { quickpickle } from 'quickpickle';

export default defineProject({
	plugins: [
		quickpickle({
			explodeTags: [
				['nojs', 'js'],
				['dark', 'light'],
				['chromium', 'firefox', 'webkit'],
				['mobile', 'tablet', 'desktop', 'widescreen']
			],
			worldConfig: {
				port: 5173,
				screenshotOptions: {
					mask: ['img'],
					maskColor: 'violet'
				}
			}
		})
	],
	test: {
		name: 'e2e',
		include: ['./tests/**/*.feature'],
		setupFiles: ['./tests/e2e.steps.ts']
	}
});
