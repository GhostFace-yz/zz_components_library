<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './type.ts';
defineOptions({
  name: 'ErButton'
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag:'button',
  nativeType:'button',

})
const slot = defineSlots()

const _ref = ref<HTMLButtonElement>()
</script>

<template>
  <component
    :is="props.tag"
    ref="_ref"
    :type="tag === 'button'? nativeType : void 0"
    :disabled= "disabled"
    :class = "['er-button', type]"
  >

  </component>
</template>