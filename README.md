<p align="center">
  <img width="300" src="./assets/airpower-bg.svg"/>
</p>

<p align="center">
<a href="https://www.npmjs.com/@airpower/enum">
<img src="https://img.shields.io/npm/v/@airpower/enum"/>
</a>
<a href="https://www.npmjs.com/@airpower/enum">
<img src="https://img.shields.io/npm/dm/@airpower/enum"/>
</a>
</p>

<p align="center">
<a href="https://github.com/AirPowerTeam/AirPower-Enum">Github</a> /
<a href="https://gitee.com/air-power/AirPower-Enum">Gitee</a> /
<a href="https://www.npmjs.com/package/@airpower/enum">NPM</a>
</p>

## 🎉 项目介绍

**AirPower-Enum** 是一个基于 `TypeScript` 的封装的类似 `Java` 枚举类的枚举字典处理工具。

## 💻 如何安装

```shell
npm install @airpower/enum
# or
yarn add @airpower/enum
# or
cnpm install @airpower/enum
# or ...
```

## 📖 如何使用

```ts
import type { EnumConstructor } from './enum'
import { Enum } from './enum'

// 普通数字枚举
class UserStatus extends Enum {
  static readonly NORMAL = new UserStatus(0, '正常')
  static readonly DISABLED = new UserStatus(1, '禁用')
}

// 字符串枚举（支持数字、字符串、布尔值）
class UserGender extends Enum<string> {
  static readonly MALE = new UserGender('MALE', '男')
  static readonly FEMALE = new UserGender('FEMALE', '女')
}

// 扩展自定义属性
class Platform extends Enum<number> {
  static readonly MAC = new Platform(1, 'mac', 'apple.png')
  static readonly WINDOWS = new Platform(2, 'windows', 'windows.png')
  static readonly ANDROID = new Platform(3, 'android', 'android.png')

  // 自定义属性
  icon!: string

  // 1. 通过构造初始化（此时可以设置icon为readonly）
  constructor(key: number, label?: string, icon?: string) {
    super(key, label)
    if (icon) {
      this.icon = icon
    }
  }

  // 2. 通过 set 方法初始化
  setIcon(icon: string) {
    this.icon = icon
    return this
  }

  static getIcon(this: EnumConstructor<number, Platform>, key: number) {
    return this.get(key)!.icon
  }
}

console.warn(Platform.getIcon(1))
console.warn(Platform.MAC.icon)
console.warn(Platform.MAC.equalsKey(2))
```

## ⏰ 欢迎反馈

如有疑问，可以通过本仓库的 **Issues** 与我们联系，如果你有一些代码贡献，可以通过 **Pull Request** 将代码贡献，为这个项目添砖加瓦。

如果有更多的需求和建议，欢迎通过本仓库的 `Issues` 提出，也欢迎加入 QQ群 555156313 与我们及时反馈。
