<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    variant: {
      type: String,
      default: 'filled',
      validator: (value: any) =>
        ['elevated', 'filled', 'tonal', 'outlined', 'text'].includes(value),
    },
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
    size: {
      type: String,
      default: 'default',
      validator: (value: any) =>
        ['x-small', 'small', 'default', 'large', 'x-large'].includes(value),
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: (value: any) => ['horizontal', 'vertical'].includes(value),
    },
    alignment: {
      type: String,
      default: 'left',
      validator: (value: any) => ['left', 'right'].includes(value),
    },
    // Active state to highlight
    active: {
      type: Boolean,
      default: false,
    },
    // Removes ability to click or target
    disabled: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'button',
    },
    ring: {
      type: Boolean,
      default: false,
    },
  })

  const variantStyle = computed(() => {
    switch (props.variant) {
      case 'elevated':
        return `pg-${
          props.inverse ? 'inverse-' : ''
        }surface-container shadow pg-${
          props.inverse ? 'inverse-' : ''
        }primary-text`
      case 'filled':
        return `pg-${props.inverse ? 'inverse-' : ''}primary shadow pg-${
          props.inverse ? 'on-inverse-' : 'on-'
        }primary-text`
      case 'tonal':
        return `pg-${
          props.inverse ? 'inverse-' : ''
        }secondary-container shadow pg-${
          props.inverse ? 'on-inverse-' : 'on-'
        }secondary-container-text`
      case 'outlined':
        return `bg-transparent shadow border-2 pg-border pg-${
          props.inverse ? 'inverse-' : ''
        }primary-text`
      case 'text':
        return 'bg-transparent dark:bg-transparent'
      default:
        return ''
    }
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

  const sizeStyle = computed(() => {
    let sizeStyle = ''
    switch (props.size) {
      case 'x-small':
        sizeStyle = 'px-2 pt-1.5 pb-1 text-xs'
        break
      case 'small':
        sizeStyle = 'px-4 pt-1.5 pb-1  text-sm'
        break
      case 'default':
        sizeStyle = 'px-6 py-2 text-base'
        break
      case 'large':
        sizeStyle = 'px-8 pt-2.5 pb-2 text-lg'
        break
      case 'x-large':
        sizeStyle = 'px-10 pt-2.5 pb-2 text-xl'
        break
    }
    return sizeStyle
  })

  const ringStyle = computed(() => {
    if (props.ring) {
      return ` focus:ring-2 hover:ring-4 focus:ring-inset focus:ring-inherit dark:focus:ring-inherit`
    } else {
      return ''
    }
  })

  const activeStyle = computed(() => {
    let activeStyle = ''
    const activeBorder = [
      `rounded-none bg-${props.role.split('-')[0]}-200 dark:bg-${
        props.role.split('-')[0]
      }-700`,
    ]

    switch (props.tag) {
      case 'button':
        activeStyle = props.active ? 'opacity-100' : ''
        break
      default:
        switch (props.active) {
          case true:
            switch (props.direction) {
              case 'horizontal':
                activeStyle = `${activeBorder} border-b`
                break
              case 'vertical':
                activeStyle =
                  props.alignment === 'left'
                    ? `${activeBorder} border-l`
                    : `${activeBorder} border-r`
            }
            break
          case false:
            activeStyle = ''
        }
    }
    return activeStyle
  })
</script>
<template>
  <component
    :is="tag"
    :disabled="disabled"
    class="cursor-pointer focus:opacity-100 focus:outline-none hover:opacity-95 inline-block items-center justify-center opacity-[0.85] rounded-full whitespace-nowrap"
    :class="[variantStyle, roleStyle, sizeStyle, activeStyle, ringStyle]"
    size="large"
  >
    <slot name="prepend"> </slot>
    <slot><span>Click here</span> </slot>
    <slot name="append"> </slot>
  </component>
</template>
<style scoped></style>
