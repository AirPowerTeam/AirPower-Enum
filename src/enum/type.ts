import type { Enum } from './Enum'

/**
 * ### 枚举 `Key` 的类型
 */
export type EnumKey = string | number | boolean

/**
 * ### 枚举类
 */
export type EnumConstructor<K extends EnumKey = number, E extends Enum<K> = Enum<K>> = {
  /**
   * ### 创建枚举实例
   */
  new(...args: any[]): E
} & typeof Enum<K>
