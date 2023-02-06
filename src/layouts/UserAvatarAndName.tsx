import { getI18l } from '@/utils';
import {
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown } from 'antd';
import { SelectLang } from 'umi';

const _userOperations: MenuProps['items'] = [
	{
		key: '1',
		label: getI18l('menus.account.center'),
		icon: <UserOutlined />,
		onClick: () => {
			console.log('打开个人中心');
		},
	},
	{
		key: '2',
		label: getI18l('menus.account.settings'),
		icon: <SettingOutlined />,
		onClick: () => {
			console.log('打开系统设置');
		},
	},
	{
		key: '3',
		label: getI18l('menus.account.logout'),
		icon: <LogoutOutlined />,
		danger: true,
		onClick: () => {
			console.log('退出登录');
		},
	},
];

const UserAvatarAndName = (props: any) => {
	const { initialState } = props;
	return (
		<>
			<Dropdown menu={{ items: _userOperations }} placement="bottom">
				<span
					className="hover:bg-#f7f7f7 h-44px c-#000/65 ps-8px pe-8px cursor-pointer display-flex items-center lh-44px rd-6px"
					style={{
						paddingBlock: '8px',
					}}
				>
					<Avatar size="small" src={initialState?.avatar} alt="avatar" />
					<span className="ms-8px">{initialState?.name}</span>
				</span>
			</Dropdown>
			<SelectLang />
		</>
	);
};

export default UserAvatarAndName;
