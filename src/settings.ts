import type { RecursiveRequired, Settings } from '#/global'
import settingsDefault from '@/settings.default'
import { defaultsDeep } from 'lodash-es'

const globalSettings: Settings.all = {
  // 请在此处编写或粘贴配置代码
}

export default defaultsDeep(
  globalSettings,
  settingsDefault,
) as RecursiveRequired<Settings.all>
