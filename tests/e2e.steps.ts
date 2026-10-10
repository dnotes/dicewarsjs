import '@quickpickle/playwright/world';
import '@quickpickle/playwright/actions';
import '@quickpickle/playwright/outcomes';
import { Given, When, Then, After } from 'quickpickle';
import type { PlaywrightWorld } from '@quickpickle/playwright';

After(async function (world:PlaywrightWorld) {
	if (world.info.errors.length) {
		world.worldConfig.screenshotDir = 'errors'
		await world.screenshot()
	}
});

Then('the tests should work', async function (world:PlaywrightWorld) {
	// Add your custom step implementations here
});
