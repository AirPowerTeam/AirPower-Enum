# AirPower-Enum 项目

## 项目概述

AirPower-Enum 是一个基于 TypeScript 的工具库，提供了类似 Java 枚举类的功能来处理枚举字典。它为在 TypeScript 中使用枚举提供了一种简洁且面向对象的方式，支持多种数据类型（数字、字符串、布尔值）并允许自定义属性和方法。

### 主要特性
- 针对 TypeScript 的 Java 风格枚举实现
- 支持多种键类型（数字、字符串、布尔值）
- 能够使用自定义属性和方法扩展枚举
- 内置常用枚举操作方法（查找、转换为数组等）
- 使用泛型实现类型安全
- 轻量级且无运行时依赖

## 项目结构
```
AirPower-Enum/
├── assets/                 # 项目资源（SVG 图像）
├── src/                    # 源代码
│   ├── index.ts            # 主导出文件
│   └── enum/               # 枚举实现
│       ├── Enum.ts         # 核心 Enum 类
│       ├── IEnum.ts        # IEnum 接口
│       ├── type.ts         # 类型定义
│       └── index.ts        # 枚举模块导出文件
├── dist/                   # 分发文件（已构建）
├── package.json            # 项目元数据和依赖
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 构建配置
├── eslint.config.mjs       # ESLint 配置
├── README.md               # 项目文档
└── LICENSE                 # MIT 许可证
```

## 构建和运行

### 先决条件
- Node.js（与项目 TypeScript 版本兼容）
- npm、yarn 或 cnpm 包管理器

### 安装
```bash
npm install @airpower/enum
# 或
yarn add @airpower/enum
# 或
cnpm install @airpower/enum
```

### 开发脚本
- `npm run build` - 构建项目（运行 eslint、编译 TypeScript 并使用 Vite 构建）

### 构建配置
- 项目使用 ES2020 目标的 TypeScript
- 使用 Vite 进行打包，采用 ES 模块格式
- 通过 vite-plugin-dts 生成类型声明
- 输出到 `dist/` 目录中的 `main.js`

## 使用示例

### 基础数字枚举
```ts
import { Enum } from '@airpower/enum'

class UserStatus extends Enum {
  static readonly NORMAL = new UserStatus(0, '正常')
  static readonly DISABLED = new UserStatus(1, '禁用')
}
```

### 字符串枚举
```ts
class UserGender extends Enum<string> {
  static readonly MALE = new UserGender('MALE', '男')
  static readonly FEMALE = new UserGender('FEMALE', '女')
}
```

### 具有自定义属性的扩展枚举
```ts
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

  setIcon(icon: string) {
    this.icon = icon
    return this
  }

  static getIcon(this: EnumConstructor<number, Platform>, key: number) {
    return this.get(key)!.icon
  }
}
```

### 可用方法
- `Enum.get(key)` - 通过键查找枚举项
- `Enum.getLabel(key, defaultLabel?)` - 获取键的标签
- `Enum.toArray()` - 将枚举转换为实例数组
- `instance.equalsKey(key)` - 检查实例键是否与提供的键匹配

## 开发规范

### 编码风格
- 使用启用严格模式的 TypeScript
- 遵循项目中定义的 ESLint 规则（使用 @antfu/eslint-config）
- 使用与 Prettier 兼容的格式
- 对公共 API 使用 JSDoc 风格注释

### 架构模式
- 类似于 Java 枚举的基于类的继承模式
- 用于类型安全的泛型参数
- 用于枚举范围操作的静态方法
- 用于单个枚举操作的实例方法

### 测试
- 虽然在源代码中看不到明确的测试文件，但该项目似乎设计为支持单元测试
- API 设计易于模拟和测试

## 依赖
- **运行时**: 无（纯 TypeScript 实现）
- **开发依赖**:
  - TypeScript 用于类型检查和编译
  - Vite 用于打包
  - ESLint 用于代码质量
  - vite-plugin-dts 用于类型声明生成
  - @types/node 用于 Node.js 类型定义

## 许可证
MIT 许可证 - 详情请参见 LICENSE 文件。

## 版本发布自动化流程

- 使用 `eslint --fix` 修复项目中可能出现的问题
- 更新 `package.json` 中的版本号
- 使用 `yarn build` 构建项目
- 使用 `npm publish` 发布包
- 提交本地变更的代码到 Github
- 创建 `git tag` 并推送到Github
