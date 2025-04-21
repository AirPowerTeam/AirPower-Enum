import type { EnumKey } from './type'

/**
 * # 标准枚举字典
 *
 * @author Hamm.cn
 */
export interface IEnum<K extends EnumKey = number> {
  /**
   * ### 字典的值
   */
  readonly key: K

  /**
   * ### 字典的显示标题
   */
  readonly label?: string
}
