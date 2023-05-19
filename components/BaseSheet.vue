<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    role: {
      type: String,
      default: 'default',
      validator: (value: any) =>
        [
          'default', // set role as per variant
          'surface',
          'surface-dim',
          'surface-bright',
          'surface-container',
          'surface-variant',
          'primary',
          'primary-container',
          'secondary',
          'secondary-container',
          'tertiary',
          'tertiary-container',
          'error',
          'error-container',
          'success',
          'success-container',
          'warning',
          'warning-container',
          'info',
          'info-container',
        ].includes(value),
    },
    // Invert bg & text color
    inverse: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'div',
    },
  })

  const roleStyle = computed(() => {
    if (props.role === 'default') {
      return ''
    }
    const bgClass = `pg-${props.inverse ? 'on-inverse-' : ''}${props.role}`
    const textClass =
      props.role.includes('surface') && props.role !== 'surface-variant'
        ? `pg-${props.inverse ? 'inverse-' : 'on-'}surface-text`
        : `pg-${props.inverse ? 'inverse-' : 'on-'}${props.role}-text`

    return `${bgClass} ${textClass}`
  })
</script>
<template>
  <component :is="tag" id="base-sheet" :class="roleStyle">
    <slot />
  </component>
</template>
<style scoped></style>
