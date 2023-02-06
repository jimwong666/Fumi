import { getI18l } from '@/utils';
import {
	HomeOutlined,
	LoginOutlined,
	MoneyCollectOutlined,
	RadarChartOutlined,
} from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-components';

// 菜单
// 如果需要 【动态获取菜单】，在 getInitialState 获取数据就好，然后处理一下
export const menus: Array<MenuDataItem> = [
	{
		path: '/',
		name: getI18l('menus.home'),
		icon: <HomeOutlined />,
	},
	{
		path: '/purchase',
		name: getI18l('menus.purchase'),
		icon: <MoneyCollectOutlined />,
		children: [
			{
				path: '/purchase/add',
				name: getI18l('menus.purchase.add'),
			},
			{
				path: '/purchase/list',
				name: getI18l('menus.purchase.list'),
			},
		],
	},
	{
		path: '/receive',
		name: getI18l('menus.receive'),
		icon: <LoginOutlined />,
		children: [
			{
				path: '/receive/add',
				name: getI18l('menus.receive.add'),
			},
			{
				path: '/receive/list',
				name: getI18l('menus.receive.list'),
			},
		],
	},
	{
		path: '',
		name: getI18l('menus.chart'),
		icon: <RadarChartOutlined />,
		children: [
			{
				path: '/chart',
				name: getI18l('menus.chart.all'),
			},
		],
	},
];
