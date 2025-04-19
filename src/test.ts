import type { EnumConstructor } from './enum'
import { Enum } from './enum'

class Platform extends Enum<number> {
  static readonly MAC = new Platform(1, 'mac', 'apple.png')
  static readonly WINDOWS = new Platform(2, 'windows', 'windows.png')
  static readonly ANDROID = new Platform(3, 'android', 'android.png')

  icon!: string

  constructor(key: number, label?: string, icon?: string) {
    super(key, label)
    if (icon) {
      this.icon = icon
    }
  }

  static getIcon(this: EnumConstructor<number, Platform>, key: number) {
    return this.get(key)!.icon
  }
}

console.warn(Platform.getIcon(1))
console.warn(Platform.MAC.icon)
