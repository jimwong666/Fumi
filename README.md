#### 【介绍】

- 技术点：antd，antd pro，umijs（v4），DvaJSd，UnoCSS、
- 包管理器：pnpm（推荐），yarn，npm（不推荐）
- npm 源：taobao(推荐)，其他
- node 版本：18.12.1

---

#### 【建议安装的 vscode 插件】

- prettier
- EditorConfig for VS Code
- UnoCSS

---

#### 【项目结构请查看】

https://umijs.org/docs/guides/directory-structure

---

#### 【layout 布局方案】

> 【菜单】和【路由】通过 src/\_menus.tsx 和 src/\_routes.ts 进行分开配置（有时路由与菜单的结构并不是一一对应的，分开配置吧），如果需要自定义模板，记得引入 src/\_menus.tsx 文件

##### 1、默认布局 — src/layout/index.tsx

src/layout/index.tsx 为默认布局；可自定义修改（一般为空）

##### 2、umi 自带布局插件（可选） — @umijs/plugins/dist/layout

```js
// 布局配置参考
	layout: (initData: InitDataType) => {
		// 属性见 https://procomponents.ant.design/components/layout#prolayout
		const { initialState } = initData;
		return {
			layout: 'mix',
			title: initialState?.title,
			logo: initialState?.logo,
			menu: {
				request: (): Promise<Record<string, any>[]> => {
					// 这里也可以
					return new Promise((res) => {
						res(menus);
					});
				},
			},
			childrenRender: (dom: JSX.Element) => {
				return dom;
			},
			// unAccessible: <NotAccessPage />,
			// noFound: <NotFoundPage />,
			rightContentRender: () => (
				<UserAvatarAndName initialState={initialState} />
			),
			// 友情链接
			appList: _friendlyLinks,

			// 菜单底部信息
			menuFooterRender: (props) => {
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
			},
		};
	},
```

现在插件中添加 '@umijs/plugins/dist/layout'，再通过 app.tsx 中 layout 属性进行配置

- 【菜单】也可以通过配置 app.tsx 中 layout.request 属性进行动态获取
- 当然，如果你不想在 .umirc.ts 中配置的 routes 属性来生成菜单，同样使用 layout.request 也是可以的，用 promise 包装一下就 ok

> 官方自带的布局插件，也支持自定义修改，但是改起来可能不舒服

##### 3、插件进行布局（可选） — src/layout/\*/index.tsx

在 plugin.ts 配置【布局插件 api.addLayouts】所需模板的文件的地址（默认文件在 src/layout/default 下）

> 自定义布局组件，跟写组件是一样的，自主发挥空间比较大

##### 4、路由进行布局（不使用）

```js
[
	{
		exact: false,
		path: '/',
		component: '@/layouts/*/index',
		routes: [
			{ exact: true, path: '/', component: '@/pages/index' },
			{ exact: true, path: '/users', component: '@/pages/users' },
		],
	},
];
```

---

#### 路由数据加载

> 参考 https://umijs.org/docs/guides/client-loader

在 .umirc.ts 中开启配置，clientLoader: {}

---

#### 数据流

##### useModel

> 适用于大部中后台场景，参考：https://umijs.org/docs/max/data-flow

参考 @/models/counterModel.ts 文件及其使用方式

##### DvaJS

> 适用于复杂场景，参考：https://umijs.org/docs/max/dva

- lalala

---

#### UnoCSS

具体各个属性在 https://uno.antfu.me/ 查询；如嫌弃某些成套样式书写过长（如省略样式），可自行自定义

> 记得在 vscode 中安装 unocss 插件

---

---

#### 命令行工具

---

#### 国际化

> 框架提供了三种方式

---

#### 规范

- 本项目使用 eslint，stylelint 做代码规范
- prettier 做代码格式化工具（vscode 安装 prettier 插件并做相应配置，参考：https://www.cnblogs.com/littleDinosaurs/p/16935175.html）
- EditorConfig 来统一 vscode 的编码格式风格（安装 EditorConfig for VS Code 插件）
- husky commit 提交规范
  - feat：新功能（feature）
  - fix：修补 bug
  - docs：文档（documentation）
  - style： 格式（不影响代码运行的变动）
  - refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
  - test：增加测试
  - chore：构建过程或辅助工具的变动

## 安装流程

- 项目名称？
- 布局模板配置（默认配置化模板、自定义组件模板）
- 是否支持国际化（仅支持中英文）
- mock ?

> tips: 1、安装 vscode 插件；2、阅读开发手册
