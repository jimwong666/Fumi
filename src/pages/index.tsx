import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useClientLoaderData, useModel } from 'umi';
import yayJpg from '../assets/yay.jpg';

const HomePage: React.FC = (): JSX.Element => {
	const { data } = useClientLoaderData();
	const { counter, increment, decrement } = useModel('counterModel');

	return (
		<PageContainer
			// title=""
			extra={[
				<Button
					key="3"
					onClick={() => {
						increment();
					}}
				>
					操作+
				</Button>,
				<Button
					key="2"
					onClick={() => {
						decrement();
					}}
				>
					操作-
				</Button>,
				<Button key="1" type="primary">
					主操作
				</Button>,
			]}
			footer={[
				<Button key="3">重置</Button>,
				<Button key="2" type="primary">
					提交
				</Button>,
			]}
		>
			<ProCard className="min-h-80vh">
				<div>
					<h2>✔✔✔Welcome to Fumi!</h2>
					<p>
						<img src={yayJpg} width="388" />
					</p>
					<h1>counter: {counter}</h1>
					<h3>clientLoader: {JSON.stringify(data)}</h3>
				</div>
			</ProCard>
		</PageContainer>
	);
};

export default HomePage;

export async function clientLoader() {
	// clientLoader
	// const data = await fetch('https://focusapi.vemic.com/mock/460/test/menu');
	// return data;

	return {
		test: '123',
	};
}
