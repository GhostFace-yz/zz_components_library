<script setup lang="ts">
import type { IconProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es';
import { computed } from 'vue';
defineOptions({
  name: 'ZzIcon',
  inheritAttrs: false
})

const props = defineProps<IconProps>();
// omit: 从传入的props中过滤掉type和color属性
const filterProps = computed(() => omit(props, ['type', "color"]));
const customStyles = computed(() => ({ color: props.color ?? void 0 }))
</script>

<template>
  <i class="zz-icon" :class="[`zz-icon-${props.type}`]" :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps" />
  </i>   
</template>
<style scoped>
.zz-icon {
  --zz-icon-color: inherit;
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--zz-icon-color);
  font-size: inherit;
}

@each $val in primary, info, success, warning, danger {
  .zz-icon--$(val) {
    --zz-icon-color: var(--zz-color-$(val))
  }
}
</style>