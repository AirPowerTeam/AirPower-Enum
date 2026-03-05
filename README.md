<p align="center">
  <img width="300" src="./assets/airpower-bg.svg" alt="AirPower-Enum Logo"/>
</p>

<h1 align="center">AirPower-Enum</h1>

<p align="center">
  <strong>基于 TypeScript 的 Java 风格枚举字典处理工具</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@airpower/enum">
    <img src="https://img.shields.io/npm/v/@airpower/enum" alt="NPM Version"/>
  </a>
  <a href="https://www.npmjs.com/package/@airpower/enum">
    <img src="https://img.shields.io/npm/dm/@airpower/enum" alt="NPM Downloads"/>
  </a>
  <a href="https://github.com/AirPowerTeam/AirPower-Enum/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@airpower/enum" alt="License"/>
  </a>
  <a href="https://www.npmjs.com/package/@airpower/enum">
    <img src="https://img.shields.io/bundlephobia/min/@airpower/enum" alt="Minified Size"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/AirPowerTeam/AirPower-Enum">GitHub</a> ·
  <a href="https://gitee.com/air-power/AirPower-Enum">Gitee</a> ·
  <a href="https://www.npmjs.com/package/@airpower/enum">NPM</a>
</p>

---

## 📖 目录

- [项目介绍](#-项目介绍)
- [特性亮点](#-特性亮点)
- [安装](#-安装)
- [快速开始](#-快速开始)
- [API 文档](#-api-文档)
- [高级用法](#-高级用法)
- [类型定义](#-类型定义)
- [构建与开发](#-构建与开发)
- [常见问题](#-常见问题)
- [贡献指南](#-贡献指南)
- [许可证](#-许可证)

---

## 🎉 项目介绍

**AirPower-Enum** 是一个基于 TypeScript 开发的轻量级枚举字典处理工具库，采用类似 Java 枚举的设计模式，为 TypeScript
项目提供类型安全、功能丰富的枚举操作体验。

通过面向对象的封装，AirPower-Enum 让 TypeScript 枚举不再局限于简单的键值对，而是支持自定义属性、扩展方法、类型推断等高级特性，使代码更加优雅、可维护。

---

## ✨ 特性亮点

- 🎯 **Java 风格枚举**：采用经典的 Java 枚举设计模式，熟悉 Java 的开发者可快速上手
- 🔒 **类型安全**：完整的 TypeScript 泛型支持，提供精确的类型推断和检查
- 🎨 **多类型支持**：支持 `number`、`string`、`boolean` 三种类型的枚举键
- 🧩 **可扩展性**：支持自定义属性、方法，可灵活扩展枚举功能
- 📦 **零依赖**：纯 TypeScript 实现，无任何运行时依赖
- 🚀 **轻量级**：极小的包体积，不影响项目打包大小
- 📝 **完整类型声明**：提供完整的 `.d.ts` 类型定义文件
- 🛠️ **现代化工具链**：基于 Vite 构建，支持 ES Modules

---

## 📥 安装

### 使用 npm

```bash
npm install @airpower/enum
```

### 使用 yarn

```bash
yarn add @airpower/enum
```

### 使用 cnpm

```bash
cnpm install @airpower/enum
```

### 使用 pnpm

```bash
pnpm add @airpower/enum
```

---

## 🚀 快速开始

### 基础用法

#### 数字枚举

```typescript
import {Enum} from '@airpower/enum'

class UserStatus extends Enum {
    static readonly NORMAL = new UserStatus(0, '正常')
    static readonly DISABLED = new UserStatus(1, '禁用')
}

// 使用示例
console.log(UserStatus.NORMAL.key)      // 输出：0
console.log(UserStatus.NORMAL.label)    // 输出：正常
```

#### 字符串枚举

```typescript
import {Enum} from '@airpower/enum'

class UserGender extends Enum<string> {
    static readonly MALE = new UserGender('MALE', '男')
    static readonly FEMALE = new UserGender('FEMALE', '女')
}

// 使用示例
console.log(UserGender.MALE.key)        // 输出：MALE
console.log(UserGender.FEMALE.label)    // 输出：女
```

#### 布尔值枚举

```typescript
import {Enum} from '@airpower/enum'

class SwitchState extends Enum<boolean> {
    static readonly ON = new SwitchState(true, '开启')
    static readonly OFF = new SwitchState(false, '关闭')
}
```

---

## 📚 API 文档

### 类：`Enum<K>`

枚举基类，所有自定义枚举类需继承此类。

#### 构造函数

```typescript
constructor(key
:
K, label ? : string
)
```

| 参数      | 类型       | 必填 | 说明                                  |
|---------|----------|----|-------------------------------------|
| `key`   | `K`      | 是  | 枚举键值，支持 `number`、`string`、`boolean` |
| `label` | `string` | 否  | 枚举描述标签                              |

#### 实例属性

| 属性      | 类型       | 说明        |
|---------|----------|-----------|
| `key`   | `K`      | 枚举的值（只读）  |
| `label` | `string` | 枚举的描述（可选） |

#### 实例方法

##### `equalsKey(key: EnumKey): boolean`

判断实例的 `key` 是否与传入的键值相等。

```typescript
UserStatus.NORMAL.equalsKey(0)  // true
UserStatus.NORMAL.equalsKey(1)  // false
```

---

### 静态方法

#### `Enum.get<K, E>(key: K): E | null`

通过键值查找对应的枚举实例。

```typescript
const status = UserStatus.get(0)
console.log(status?.label)  // 输出：正常
```

**泛型参数：**

- `K`：枚举键类型
- `E`：枚举实例类型（继承自 `Enum<K>`）

---

#### `Enum.getLabel<K, E>(key: K, defaultLabel?: string): string`

获取指定键值的枚举标签，如不存在则返回默认值。

```typescript
UserStatus.getLabel(0)              // 输出：正常
UserStatus.getLabel(999, '未知')     // 输出：未知
UserStatus.getLabel(999)            // 输出：-
```

**参数说明：**

| 参数             | 类型       | 必填 | 默认值   | 说明   |
|----------------|----------|----|-------|------|
| `key`          | `K`      | 是  | -     | 枚举键值 |
| `defaultLabel` | `string` | 否  | `'-'` | 默认标签 |

---

#### `Enum.toArray<K, E>(): E[]`

将所有枚举实例转换为数组。

```typescript
const allStatus = UserStatus.toArray()
// 输出：[UserStatus { key: 0, label: '正常' }, UserStatus { key: 1, label: '禁用' }]

// 常用于遍历或下拉选项
allStatus.forEach(item => {
    console.log(`${item.key}: ${item.label}`)
})
```

---

## 🔧 高级用法

### 自定义属性

通过扩展构造函数，可以为枚举添加自定义属性：

```typescript
import {Enum} from '@airpower/enum'
import type {EnumConstructor} from '@airpower/enum'

class Platform extends Enum<number> {
    static readonly MAC = new Platform(1, 'macOS', 'apple.png', '#000')
    static readonly WINDOWS = new Platform(2, 'Windows', 'windows.png', '#0078D4')
    static readonly ANDROID = new Platform(3, 'Android', 'android.png', '#3DDC84')
    static readonly LINUX = new Platform(4, 'Linux', 'linux.png', '#FCC624')

    // 自定义属性
    icon!: string
    color!: string

    constructor(key: number, label?: string, icon?: string, color?: string) {
        super(key, label)
        if (icon) this.icon = icon
        if (color) this.color = color
    }
}

// 使用自定义属性
console.log(Platform.MAC.icon)      // 输出：apple.png
console.log(Platform.WINDOWS.color) // 输出：#0078D4
```

---

### 自定义方法

可以在枚举类中定义实例方法和静态方法：

```typescript
class Priority extends Enum<number> {
    static readonly LOW = new Priority(1, '低优先级')
    static readonly MEDIUM = new Priority(2, '中优先级')
    static readonly HIGH = new Priority(3, '高优先级')
    static readonly CRITICAL = new Priority(4, '紧急')

    // 实例方法：判断是否为高优先级
    isHighPriority(): boolean {
        return this.key >= 3
    }

    // 实例方法：获取优先级图标
    getIcon(): string {
        const icons: Record<number, string> = {
            1: '🟢',
            2: '🟡',
            3: '🟠',
            4: '🔴'
        }
        return icons[this.key] || '⚪'
    }

    // 静态方法：获取所有高优先级项
    static getHighPriorities(): Priority[] {
        return this.toArray().filter(p => p.isHighPriority())
    }
}

// 使用示例
console.log(Priority.HIGH.getIcon())           // 输出：🟠
console.log(Priority.LOW.isHighPriority())     // 输出：false
console.log(Priority.getHighPriorities())      // 输出：[HIGH, CRITICAL]
```

---

### 链式调用

通过返回 `this` 实现链式调用：

```typescript
class Config extends Enum<string> {
    static readonly DEBUG = new Config('DEBUG', '调试模式')
    static readonly RELEASE = new Config('RELEASE', '发布模式')

    enabled!: boolean
    timeout!: number

    setEnabled(enabled: boolean): this {
        this.enabled = enabled
        return this
    }

    setTimeout(timeout: number): this {
        this.timeout = timeout
        return this
    }
}

// 链式调用
Config.DEBUG.setEnabled(true).setTimeout(3000)
```

---

### 类型安全的高级用法

使用 `EnumConstructor` 类型来编写泛型工具函数：

```typescript
import {Enum, type EnumConstructor} from '@airpower/enum'

/**
 * 通用的枚举选择器组件（以 Vue 3 为例）
 */
function useEnumSelector<K extends string | number | boolean, E extends Enum<K>>(
    EnumClass: EnumConstructor<K, E>
) {
    const options = EnumClass.toArray()

    const getLabel = (key: K): string => {
        return EnumClass.getLabel(key, '未知选项')
    }

    const isSelected = (current: K, target: K): boolean => {
        return current === target
    }

    return {
        options,
        getLabel,
        isSelected
    }
}

// 使用示例
const {options, getLabel} = useEnumSelector(UserStatus)
```

---

## 📝 类型定义

### `EnumKey`

枚举键的允许类型：

```typescript
type EnumKey = string | number | boolean
```

---

### `IEnum<K>`

标准枚举字典接口：

```typescript
interface IEnum<K extends EnumKey = number> {
    key: K
    label?: string
}
```

---

### `EnumConstructor<K, E>`

枚举类构造器类型：

```typescript
type EnumConstructor<K extends EnumKey = number, E extends Enum<K> = Enum<K>> = {
    new(...args: any[]): E
} & typeof Enum<K>
```

---

## 🛠️ 构建与开发

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 克隆项目

```bash
git clone https://github.com/AirPowerTeam/AirPower-Enum.git
cd AirPower-Enum
```

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 构建项目

```bash
npm run build
# 或
yarn build
```

构建脚本执行流程：

1. **ESLint 代码检查** - 确保代码质量
2. **TypeScript 编译** - 类型检查
3. **Vite 打包** - 生成 `dist/` 目录

### 构建输出

```
dist/
├── main.js          # ES Modules 格式的主文件
├── index.d.ts       # 类型声明入口
└── enum/
    ├── Enum.d.ts    # Enum 类类型定义
    ├── IEnum.d.ts   # IEnum 接口类型定义
    └── type.d.ts    # 类型定义
```

---

## ❓ 常见问题

### Q1: 为什么不用 TypeScript 原生 `enum`？

TypeScript 原生 `enum` 存在以下限制：

- 不支持自定义属性和方法
- 编译后可能产生额外的运行时代码
- 类型推断不够灵活
- 不支持泛型

AirPower-Enum 通过类的方式完美解决这些问题。

---

### Q2: 如何与前端框架（Vue/React）配合使用？

```typescript
// Vue 3 示例
<template>
    <el-select
v - model = "status" >
    <el-option
v -
for= "item in UserStatus.toArray()"
    :
key = "item.key"
:
label = "item.label"
:
value = "item.key"
    / >
    </el-select>
    < /template>

    < script
setup
lang = "ts" >
import {ref} from 'vue'
import {UserStatus} from './enums/UserStatus'

const status = ref(UserStatus.NORMAL.key)
    < /script>
```

```typescript
// React 示例
function StatusSelect() {
    const [status, setStatus] = useState(UserStatus.NORMAL.key)

    return (
        <select value = {status}
    onChange = {e
=>
    setStatus(Number(e.target.value))
}>
    {
        UserStatus.toArray().map(item => (
            <option key = {item.key}
        value = {item.key} >
            {item.label}
            < /option>
    ))
    }
    </select>
)
}
```

---

### Q3: 如何处理枚举的序列化/反序列化？

```typescript
// 序列化
const json = JSON.stringify(UserStatus.NORMAL)
// 输出：{"key":0,"label":"正常"}

// 反序列化
const data = {key: 0, label: '正常'}
const status = UserStatus.get(data.key)
```

---

### Q4: 支持常量枚举（const enum）吗？

本库采用运行时类实现，不支持 `const enum`。但这也带来了更好的调试体验和运行时灵活性。

---

## 🤝 贡献指南

我们欢迎各种形式的贡献！

### 提交 Issue

遇到问题或有新需求时，欢迎通过 [GitHub Issues](https://github.com/AirPowerTeam/AirPower-Enum/issues) 反馈。

### 提交 PR

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 开发规范

- 遵循项目的 ESLint 规则
- 使用 TypeScript 严格模式
- 为新增功能添加类型定义
- 保持代码风格一致

### 版本发布自动化流程

- 使用 `eslint --fix` 修复项目中可能出现的问题
- 更新 `package.json` 中的版本号
- 使用 `yarn build` 构建项目
- 使用 `npm publish` 发布包
- 使用 `git add/commit/push` 将本地所有变更的文件推送到 Github

### 联系方式

- QQ 群：555156313
- Email：admin@hamm.cn

---

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE) 开源。
---

## 👥 团队信息

- **作者**：Hamm
- **邮箱**：admin@hamm.cn
- **GitHub**：[@HammCn](https://github.com/HammCn)
- **团队**：[AirPower Team](https://github.com/AirPowerTeam)

---

<p align="center">
  如果这个项目对你有帮助，欢迎给一个 ⭐️ Star 支持！
</p>
