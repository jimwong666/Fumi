// 运行时配置，不要引入 node 依赖
import { message, notification } from 'antd';
import type { AxiosResponse, RuntimeConfig } from 'umi';
import { defineApp, getIntl, getLocale } from 'umi';
import { ErrorShowType } from './constants';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化，页面加载前执行
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#数据流
export async function getInitialState(): Promise<Record<string, any>> {
	let itialState = {};

	console.log('qwer', getIntl(getLocale()));

	// 模拟初始化数据请求
	await new Promise<void>((res) => {
		setTimeout(() => {
			itialState = {
				// 用户信息
				name: 'admin',
				avatar: '/images/avatar.png',
				// 布局信息
				title: 'Fumi System', // 左上角的title和页面标签的部分title
				logo: '/images/icon-64.png', // 左上角的logo
			};
			res();
		}, 1000);
	});

	return itialState;
}

export default defineApp({
	// 请求配置
	request: {
		timeout: 10000,
		timeoutErrorMessage: '请求超时！请重试',
		headers: { 'X-Requested-With': 'XMLHttpRequest' },
		// 错误配置
		errorConfig: {
			errorHandler(error: any, opts: any): void {
				console.log('error', error, opts);
				if (opts?.skipErrorHandler) throw error;
				// errorThrower 抛出的错误
				if (error.name === 'BizError') {
					const errorInfo: FumiResponse.ResponseStructure | undefined =
						error.info;
					if (errorInfo) {
						const { errorMessage, errorCode } = errorInfo;
						switch (errorInfo.errorShowType) {
							case ErrorShowType.SILENT:
								// do nothing
								break;
							case ErrorShowType.WARN_MESSAGE:
								message.warning(errorMessage);
								break;
							case ErrorShowType.ERROR_MESSAGE:
								message.error(errorMessage);
								break;
							case ErrorShowType.NOTIFICATION:
								notification.open({
									description: errorMessage,
									message: errorCode,
								});
								break;
							case ErrorShowType.REDIRECT:
								// TODO: redirect
								break;
							default:
								message.error(<div>{errorMessage}</div>);
						}
					}
				} else if (error.response) {
					// Axios 的错误
					// 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
					message.error(`响应状态码： ${error.response.status}`);
				} else if (error.request) {
					// 请求已经成功发起，但没有收到响应
					// error.request 在浏览器中是 XMLHttpRequest 的实例，
					// 而在node.js中是 http.ClientRequest 的实例
					// 也有可能超时了
					const msg = error.message || '无响应！请重试';
					message.error(msg);
				} else {
					// 发送请求时出了点问题
					message.error('请求出错！请重试');
				}
			},
			// 抛出自制的错误
			errorThrower(res: FumiResponse.ResponseStructure): void {
				const { success, data, errorCode, errorMessage, errorShowType } = res;
				if (!success) {
					const error: any = new Error(errorMessage);
					error.name = 'BizError';
					error.info = { errorCode, errorMessage, errorShowType, data };
					throw error;
				}
			},
		},
		requestInterceptors: [
			(config: any) => {
				// 拦截请求配置，进行个性化处理。

				return config;
			},
		],
		responseInterceptors: [
			(response: AxiosResponse) => {
				// 拦截响应数据，进行个性化处理

				return response;
			},
		],
	},
	render: (oldRender: () => void): void => {
		// 做权限校验
		// fetch('/api/auth').then(auth => {
		//   if (auth.isLogin) { oldRender() }
		//   else {
		//     location.href = '/login';
		//     oldRender()
		//   }
		// });
		oldRender();
	},
} as RuntimeConfig);
