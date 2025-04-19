<p align="center">
  <img width="300" src="./assets/airpower-bg.svg"/>
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
import {Enum} from "@/airpower/enum";

class UserGender extends Enum<string> {
    static MALE = new UserGender("MALE", "男");
    static FEMALE = new UserGender("FEMALE", "女");
}

class UserStatus extends Enum {
    static NORMAL = new UserStatus(0, "正常");
    static DISABLED = new UserStatus(1, "禁用");
}

// 扩展自定义属性

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

```

## ⏰ 欢迎反馈

如有疑问，可以通过本仓库的 **Issues** 与我们联系，如果你有一些代码贡献，可以通过 **Pull Request** 将代码贡献，为这个项目添砖加瓦。

如果有更多的需求和建议，欢迎通过本仓库的 `Issues` 提出，也欢迎加入 QQ群 555156313 与我们及时反馈。
