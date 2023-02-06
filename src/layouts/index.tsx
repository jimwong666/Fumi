import { menus } from '@/_menus';
import { ProLayout } from '@ant-design/pro-components';
import { useState } from 'react';
import { history, Outlet, useModel } from 'umi';
import UserAvatarAndName from './UserAvatarAndName';
import friendlyLinks from './_friendlyLinks';

const Layout = () => {
	const [pathname, setPathname] = useState(location.pathname || '/');
	const { initialState } = useModel('@@initialState');

	return (
		<ProLayout
			route={{
				routes: menus,
			}}
			layout="mix"
			logo={initialState?.logo}
			title={initialState?.title}
			location={{
				pathname,
			}}
			menuFooterRender={(props) => {
				if (props?.collapsed) return undefined;
				return (
					<p
						style={{
							textAlign: 'center',
							paddingBlockStart: '12px',
						}}
					>
						Power by Fumi
					</p>
				);
			}}
			itemRender={(route) => {
				// 使面包屑不可点击
				return <span>{route.breadcrumbName}</span>;

				// 不使用面包屑
				// return null;
			}}
			onMenuHeaderClick={() => {
				setPathname('/');
				history.push('/');
			}}
			menuItemRender={(item, dom) => (
				<a
					onClick={() => {
						setPathname(item.path || '/');
						history.push(item.path || '/');
					}}
				>
					{dom}
				</a>
			)}
			rightContentRender={() => (
				<UserAvatarAndName initialState={initialState} />
			)}
			appList={friendlyLinks}
		>
			<Outlet />
		</ProLayout>
	);
};

export default Layout;
