// unocss.config.ts

import { defineConfig, presetAttributify, presetUno } from 'unocss';

// 测试文件修改
export function createConfig({ strict = true, dev = true } = {}) {
	return defineConfig({
		envMode: dev ? 'dev' : 'build',
		presets: [presetAttributify({ strict }), presetUno()],
		rules: [
			// 	['bala-1', { margin: '0.25rem' }],
			// 	[/^balabala-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
			// 	[/^balabalabala-(\d)$/, (match) => ({ padding: `${match[1] / 4}rem` })],
		],
		// rules: [],
	});
}

export default createConfig();
