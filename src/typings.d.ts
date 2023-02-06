declare namespace FumiResponse {
	// 与后端约定的响应数据格式
	type ResponseStructure = {
		success: boolean;
		data: any;
		errorCode?: number; // 错误码
		errorMessage?: string; // 错误信息
		errorShowType?: number; // 错误展示类型
	};
}
