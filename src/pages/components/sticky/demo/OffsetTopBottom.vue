<template>
  <sar-sticky
    :offset-top="safeAreaTop"
    :offset-bottom="40"
    style="margin-left: 440rpx"
  >
    <sar-button inline theme="info">吸顶和吸底</sar-button>
  </sar-sticky>
</template>

<script lang="ts" setup>
import { safeAreaTop } from '@/utils'
</script>
