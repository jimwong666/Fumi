import gitlab from '@/assets/link/gitlab.png';
import jira from '@/assets/link/jira.png';
import knowledge from '@/assets/link/knowledge.png';
import oa from '@/assets/link/oa.png';
import Verdaccio from '@/assets/link/Verdaccio.png';
import yapi from '@/assets/link/yapi.png';

const _friendlyLinks = [
	{
		key: oa,
		icon: oa,
		title: 'OA',
		desc: '焦点办公系统',
		url: 'http://oa.vemic.com/',
		target: 'blank',
	},
	{
		key: knowledge,
		icon: knowledge,
		title: 'Knowledge base',
		desc: '焦点主知识库',
		url: 'http://wiki.vemic.com/',
		target: 'blank',
	},
	{
		key: jira,
		icon: jira,
		title: 'JIRA',
		desc: '焦点项目与事务跟踪系统',
		url: 'http://jira.vemic.com/',
		target: 'blank',
	},
	{
		key: gitlab,
		icon: gitlab,
		title: 'Git',
		desc: '焦点 git 仓库',
		url: 'http://git.vemic.com/',
		target: 'blank',
	},
	{
		key: yapi,
		icon: yapi,
		title: 'YAPI',
		desc: '焦点 mock 平台',
		url: 'https://focusapi.vemic.com/',
		target: 'blank',
	},
	{
		key: Verdaccio,
		icon: Verdaccio,
		title: 'Verdaccio',
		desc: '焦点 npm 仓库',
		url: 'http://npm.focustech.vemic.com/',
		target: 'blank',
	},
];

export default _friendlyLinks;
