<template>
  <view :class="listClass" :style="stringifyStyle(rootStyle)">
    <view v-if="isRenderVisible($slots.title || title)" :class="bem.e('title')">
      <slot name="title">{{ title }}</slot>
    </view>
    <view :class="bem.e('content')">
      <slot></slot>
    </view>
    <view
      v-if="isRenderVisible($slots.description || description)"
      :class="bem.e('description')"
    >
      <slot name="description">{{ description }}</slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, provide, reactive, toRef } from 'vue'
import {
  classNames,
  stringifyStyle,
  isRenderVisible,
  createBem,
} from '../../utils'
import { listContextKey, type ListProps, type ListSlots } from './common'

defineOptions({
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
})

const props = withDefaults(defineProps<ListProps>(), {})

defineSlots<ListSlots>()

const bem = createBem('list')

// main
provide(
  listContextKey,
  reactive({
    hideBorder: toRef(() => props.hideBorder),
  }),
)

// others
const listClass = computed(() => {
  return classNames(
    bem.b(),
    bem.m('card', props.card),
    bem.m('not-card', !props.card),
    bem.m('inlaid', props.inlaid),
    bem.m('borderless', props.hideBorder),
    props.rootClass,
  )
})
</script>

<style lang="scss">
@import './index.scss';
</style>
