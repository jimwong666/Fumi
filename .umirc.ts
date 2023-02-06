import { defineConfig } from 'umi';
import routes from './src/_routes';

export default defineConfig({
	npmClient: 'pnpm',
	title: '',
	routes: [...routes, { path: '*', component: '404', title: '404' }],
	presets: [],
	plugins: [
		'@umijs/plugins/dist/antd',
		'@umijs/plugins/dist/request',
		'@umijs/plugins/dist/initial-state',
		'@umijs/plugins/dist/model',
		'@umijs/plugins/dist/unocss',
		// '@umijs/plugins/dist/layout',
		'@umijs/plugins/dist/locale',
	],
	unocss: {
		// 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
		// 有些地方 UnoCSS 不适用，比如组件属性中返回的 JSX 中就用不了
		watch: ['src/**/*.tsx'],
	},
	antd: {},
	request: {},
	initialState: {
		// getInitialState 期间的loading
		loading: '@/loading',
	},
	model: {},
	// 路由数据加载
	clientLoader: {},
	// layout: {},
	locale: {
		// 默认使用 src/locales/zh-CN.ts 作为多语言文件
		default: 'zh-CN',
		baseSeparator: '-',
		antd: true,
	},
});
