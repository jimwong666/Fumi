import { ProCard } from '@ant-design/pro-components';
import { Result } from 'antd';

const NotAccessPage: React.FC = (): JSX.Element => {
	return (
		<ProCard className="min-h-80vh justify-center pb-120px">
			<Result
				status="403"
				title="403"
				subTitle="Sorry, you are not authorized to access this page."
			/>
		</ProCard>
	);
};

export default NotAccessPage;
