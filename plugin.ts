// 建议放置项目级插件
import type { IApi } from 'umi';

export default (api: IApi) => {
	// 测试
	api.onDevCompileDone((opts) => {
		console.log('> onDevCompileDone', opts.isFirstCompile);
	});
	api.onBuildComplete((opts) => {
		console.log('> onBuildComplete', opts.isFirstCompile);
	});
	api.onStart(() => {
		console.log('> onStart');
	});

	// 设置 layout 组件
	// api.addLayouts(() => {
	// 	return { id: 'default', file: '@/layouts/default/index' };
	// });

	// 修改 HTML
	api.modifyHTML(($) => {
		$('head').append([
			`<script src='https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js'></script>`,
			`<script src=''></script>`,
		]);
		return $;
	});

	// // 通过插件设置环境变量
	// process.env.COMPRESS = "none";

	// // 通过插件修改配置
	// api.modifyConfig((memo: any) => {
	//   memo.title = "Hello Umi";
	//   return memo;
	// });
};
