import elementReady = require('element-ready');

(async () => {
	const startCallButton = await elementReady<HTMLElement>('._3quh._30yy._2t_');

	if (startCallButton) {
		startCallButton.click();
	}
})();
