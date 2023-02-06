import { ProCard } from '@ant-design/pro-components';
import { Result } from 'antd';

const NotFoundPage: React.FC = (): JSX.Element => {
	return (
		<ProCard className="min-h-80vh justify-center pb-120px">
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
			/>
		</ProCard>
	);
};

export default NotFoundPage;
