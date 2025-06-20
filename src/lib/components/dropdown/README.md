---
nav: 组件
title: Dropdown
subtitle: 下拉菜单
group: 导航组件
---

## 介绍

可向下/向上弹出菜单列表，或自定义弹出的菜单内容。

## 引入

```ts
import Dropdown from 'sard-uniapp/components/dropdown/dropdown.vue'
import DropdownItem from 'sard-uniapp/components/dropdown-item/dropdown-item.vue'
```

## 代码演示

### 基础使用

使用 `options` 配置下拉菜单项，使用 `v-model` 绑定选中的值。

@code('${DEMO_PATH}/dropdown/demo/Basic.vue')

### 占位符

占位符会在未选中值时显示说明文字。

@code('${DEMO_PATH}/dropdown/demo/Placeholder.vue')

### 添加 label

相较于占位符， `label` 会一直显示。

@code('${DEMO_PATH}/dropdown/demo/Label.vue')

### 向上展开

底部空间不足时可以配置向上弹出菜单。

@code('${DEMO_PATH}/dropdown/demo/Direction.vue')

### 禁用

禁用的菜单项不可点击。

@code('${DEMO_PATH}/dropdown/demo/Disabled.vue')

### 自定义内容

除了显示菜单项，下拉菜单还可以显示任意内容，这时可以使用 `v-model:visible` 控制显隐。

@code('${DEMO_PATH}/dropdown/demo/Content.vue')

### 异步开关 <sup>1.19+</sup>

如果 `beforeOpen` 返回 false，则取消打开菜单；如果返回 `Promise` 对象，则会在 `resolve` 时才打开菜单。

如果 `beforeClose` 返回 false，则取消关闭菜单；如果返回 `Promise` 对象，则会在 `resolve` 时才关闭菜单。

@code('${DEMO_PATH}/dropdown/demo/Async.vue')

### 可取消选择 <sup>1.19.3+</sup>

如果想点击时取消选中的选项，可以使用 `togglable` 属性。

@code('${DEMO_PATH}/dropdown/demo/Togglable.vue')

## API

### DropdownProps

| 属性                              | 描述                         | 类型           | 默认值    |
| --------------------------------- | ---------------------------- | -------------- | --------- |
| root-class                        | 组件根元素类名               | string         | -         |
| root-style                        | 组件根元素样式               | StyleValue     | -         |
| direction                         | 菜单弹出方向                 | 'down' \| 'up' | 'down'    |
| disabled                          | 是否禁用                     | boolean        | false     |
| away-closable                     | 是否在点击外部区域后自动隐藏 | boolean        | true      |
| overlay-closable                  | 是否在点击遮罩后自动隐藏     | boolean        | true      |
| duration                          | 显隐动画时长，单位 ms        | number         | 300       |
| togglable <sup>1.19.3+</sup>      | 是否可取消选中的选项         | boolean        | false     |
| value-on-clear <sup>1.19.3+</sup> | 取消选项时设置的值           | any            | undefined |

### DropdownSlots

| 插槽    | 描述           | 属性 |
| ------- | -------------- | ---- |
| default | 自定义默认内容 | -    |

### DropdownItemProps

| 属性                              | 描述                                                                 | 类型                | 默认值    |
| --------------------------------- | -------------------------------------------------------------------- | ------------------- | --------- |
| root-class                        | 组件根元素类名                                                       | string              | -         |
| root-style                        | 组件根元素样式                                                       | StyleValue          | -         |
| title                             | 标题，用于自定义菜单内容                                             | string              | -         |
| label                             | 标签说明                                                             | string              | -         |
| options                           | 菜单选项                                                             | DropdownOption[]    | []        |
| direction                         | 菜单弹出方向                                                         | 'down' \| 'up'      | 'down'    |
| disabled                          | 是否禁用                                                             | boolean             | false     |
| model-value (v-model)             | 当前选择的菜单项的值                                                 | any                 | -         |
| visible (v-model)                 | 弹出框是否可见                                                       | boolean             | -         |
| separator                         | 标签后面分隔符                                                       | string              | -         |
| placeholder                       | 占位符                                                               | string              | -         |
| togglable <sup>1.19.3+</sup>      | 是否可取消选中的选项                                                 | boolean             | false     |
| value-on-clear <sup>1.19.3+</sup> | 取消选项时设置的值                                                   | any                 | undefined |
| before-open <sup>1.19.1+</sup>    | 打开前的回调，返回 `false` 或 `rejected` 状态的 `Promise` 可阻止打开 | () => any           | -         |
| before-close <sup>1.19+</sup>     | 关闭前的回调，返回 `false` 或 `rejected` 状态的 `Promise` 可阻止关闭 | DropdownBeforeClose | -         |

### DropdownBeforeClose

```ts
type DropdownBeforeClose = (type: DropdownCloseType) => any

type DropdownCloseType =
  | 'overlay'
  | 'away'
  | 'other-button'
  | 'button'
  | 'option'
```

关闭类型：

- `overlay` 点击遮罩
- `away` 点击除遮罩和菜单之外的区域
- `other-button` 点击其他菜单按钮
- `button` 点击当前的菜单按钮
- `option` 点击菜单项

### DropdownItemSlots

| 插槽    | 描述           | 属性 |
| ------- | -------------- | ---- |
| default | 自定义默认内容 | -    |

### DropdownItemEmits

| 事件                             | 描述                        | 类型                               |
| -------------------------------- | --------------------------- | ---------------------------------- |
| update:model-value               | 选中菜单选项时触发          | (value: any) => void               |
| change <sup>1.12.2+</sup>        | 选中菜单选项时触发          | (value: any) => void               |
| update:visible                   | 弹出框显隐时触发            | (visible: boolean) => void         |
| visible-hook <sup>1.18+</sup>    | 入场/退场动画状态改变时触发 | (name: TransitionHookName) => void |
| before-enter <sup>1.18+</sup>    | 入场动画开始前触发          | () => void                         |
| enter <sup>1.18+</sup>           | 入场动画开始时触发          | () => void                         |
| after-enter <sup>1.18+</sup>     | 入场动画结束时触发          | () => void                         |
| enter-cancelled <sup>1.18+</sup> | 入场动画取消时触发          | () => void                         |
| before-leave <sup>1.18+</sup>    | 退场动画开始前触发          | () => void                         |
| leave <sup>1.18+</sup>           | 退场动画开始时触发          | () => void                         |
| after-leave <sup>1.18+</sup>     | 退场动画结束时触发          | () => void                         |
| leave-cancelled <sup>1.18+</sup> | 退场动画取消时触发          | () => void                         |

### DropdownOption

| 属性  | 描述         | 类型   | 默认值 |
| ----- | ------------ | ------ | ------ |
| label | 定义选项标签 | string | -      |
| value | 定义选项的值 | any    | -      |

## 主题定制

### CSS 变量

@code('./variables.scss#variables')
