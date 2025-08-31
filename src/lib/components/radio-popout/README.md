---
nav: 组件
title: RadioPopout
subtitle: 单选弹出框
group: 表单组件
version: 1.16+
---

## 介绍

组合了单选框组、列表、弹出框组件，实现了在弹出框中单选的功能。

## 引入

```ts
import RadioPopout from 'sard-uniapp/components/radio-popout/radio-popout.vue'
```

## 代码演示

### 基础使用

使用 `v-model` 双向绑定当前值，使用 `v-model:visible` 控制弹出框显隐。

@code('${DEMO_PATH}/radio-popout/demo/Basic.vue')

### 禁用选项 <sup>1.20+</sup>

设置了 `disabled` 的选项可禁止选择。

@code('${DEMO_PATH}/radio-popout/demo/Disabled.vue')

### 可搜索的 <sup>1.20+</sup>

使用 `searchable` 显示搜索框，可用于过滤选项列表。

@code('${DEMO_PATH}/radio-popout/demo/Search.vue')

## API

### RadioPopoutProps

继承 [`RadioGroupProps`](./radio#RadioGroupProps) 并有以下额外属性：

| 属性                                | 描述                             | 类型              | 默认值 |
| ----------------------------------- | -------------------------------- | ----------------- | ------ |
| popout-class                        | 弹窗框根元素类名                 | string            | -      |
| popout-style                        | 弹窗框根元素样式                 | StyleValue        | -      |
| visible (v-model)                   | 是否显示弹出框                   | boolean           | -      |
| title                               | 弹出框标题                       | string            | -      |
| searchable <sup>1.20+</sup>         | 是否可搜索                       | boolean           | false  |
| filter-placeholder <sup>1.20+</sup> | 搜索输入框占位符内容             | string            | -      |
| resettable <sup>1.23.3+</sup>       | 关闭弹出框后，是否可复位弹出框值 | boolean           | false  |
| icon-position <sup>1.24.1+</sup>    | 可定义单选按钮的位置             | 'left' \| 'right' | 'left' |

### RadioPopoutEmits

| 事件                               | 描述                        | 类型                               |
| ---------------------------------- | --------------------------- | ---------------------------------- |
| update:model-value                 | 单选输入组件值改变时触发    | (value: any \| undefined) => void  |
| change                             | 单选输入组件值改变时触发    | (value: any \| undefined) => void  |
| update:visible                     | 弹出框显隐时触发            | (visible: boolean) => void         |
| confirm <sup>1.22.1+</sup>         | 点击确定按钮时触发          | () => void                         |
| visible-hook <sup>1.22.1+</sup>    | 入场/退场动画状态改变时触发 | (name: TransitionHookName) => void |
| before-enter <sup>1.22.1+</sup>    | 入场动画开始前触发          | () => void                         |
| enter <sup>1.22.1+</sup>           | 入场动画开始时触发          | () => void                         |
| after-enter <sup>1.22.1+</sup>     | 入场动画结束时触发          | () => void                         |
| enter-cancelled <sup>1.22.1+</sup> | 入场动画取消时触发          | () => void                         |
| before-leave <sup>1.22.1+</sup>    | 退场动画开始前触发          | () => void                         |
| leave <sup>1.22.1+</sup>           | 退场动画开始时触发          | () => void                         |
| after-leave <sup>1.22.1+</sup>     | 退场动画结束时触发          | () => void                         |
| leave-cancelled <sup>1.22.1+</sup> | 退场动画取消时触发          | () => void                         |

## 主题定制

### CSS 变量

@code('./variables.scss#variables')
