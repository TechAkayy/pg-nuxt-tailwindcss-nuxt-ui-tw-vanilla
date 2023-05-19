<script setup lang="ts">
  import { isCurrentRoute } from '~/composables/nav'

  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <div class="h-full hidden items-center md:flex md:ml-6">
    <div class="flex h-full space-x-2">
      <NuxtLink
        v-for="(navlink, index) in navlinks"
        :key="index"
        :to="navlink.link"
      >
        <BaseButton
          class="!px-3 !ring-0 !rounded-md font-medium"
          :variant="isCurrentRoute(navlink, currentPath) ? 'filled' : 'text'"
          container
          role="primary"
          :active="isCurrentRoute(navlink, currentPath)"
          :class="[
            isCurrentRoute(navlink, currentPath)
              ? 'pg-primary-text'
              : 'pg-on-inverse-primary-text',
          ]"
          tag="span"
          >{{ navlink.text }}</BaseButton
        >
      </NuxtLink>
    </div>
    <NuxtLink
      class="ml-2"
      href="https://pinegrow.com/vue-designer"
      external
      target="_blank"
    >
      <BaseButton
        size="large"
        :role="
          isCurrentRoute({ link: '/try-now' }, currentPath)
            ? 'primary'
            : 'primary-container'
        "
        :active="isCurrentRoute({ link: '/try-now' }, currentPath)"
        :class="[
          isCurrentRoute({ link: '/try-now' }, currentPath)
            ? 'pg-primary-text'
            : 'pg-on-inverse-primary-text',
        ]"
        tag="span"
        class="!rounded-full"
      >
        <div class="-ml-2 inline-block text-lg">Try Now</div>
        <Icon name="mdi:pine-tree" size="24px" class="-mr-4 ml-1"></Icon>
      </BaseButton>
    </NuxtLink>
  </div>
</template>
<style scoped></style>
