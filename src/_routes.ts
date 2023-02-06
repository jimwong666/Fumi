// 路由
const routes: Array<Record<string, any>> = [
	{
		path: '/',
		component: '@/pages/index',
	},
	{
		path: '/purchase',
		access: 'canAdmin',
		component: '@/pages/purchase/add',
		routes: [
			{
				path: '/purchase/add',
				component: '@/pages/purchase/add',
			},
			{
				path: '/purchase/list',
				component: '@/pages/purchase/list',
			},
		],
	},
	{
		path: '/receive',
		component: '@/pages/receive/add',
		routes: [
			{
				path: '/receive/add',
				component: '@/pages/receive/add',
			},
			{
				path: '/receive/list',
				component: '@/pages/receive/list',
			},
		],
	},
	{
		path: '/chart',
		component: '@/pages/chart/all',
	},
];

export default routes;
