import { Loading3QuartersOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

// 页面loading，getInitialState阶段和路由首次切换时展示
const Laoding: React.FC = (): JSX.Element => {
	console.log('loading');
	return (
		<div className="h-100% flex justify-center items-center min-h-80vh">
			<Spin indicator={<Loading3QuartersOutlined spin />} size="large" />
		</div>
	);
};

export default Laoding;
