import { getIntl, getLocale } from 'umi';

// 国际化
// 用于在 react 上下文【之外】的地方国际化
export const getI18l = (key: string, lang?: string): any => {
	return getIntl(lang || getLocale()).messages[key];
};
