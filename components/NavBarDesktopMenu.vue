<script setup lang="ts">
  import { useMobileMenu } from '~/composables/mobile-menu'
  import { isCurrentRoute } from '~/composables/nav'
  const { isMobileMenuOpen } = useMobileMenu()

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
  <BaseSheet
    role="surface-container"
    class="absolute focus:outline-none hidden min-w-fit mt-4 origin-top-right py-1 right-0 rounded-xl shadow-lg z-10 md:flex"
  >
    <div v-if="isMobileMenuOpen" id="mobile-menu" class="md:flex">
      <div class="p-4 space-y-1">
        <NuxtLink
          v-for="(navlink, index) in navlinks"
          :key="index"
          :to="navlink.link"
        >
          <BaseButton
            class="!ring-0 rounded-md text-base text-left w-full"
            :class="[
              isCurrentRoute(navlink, currentPath)
                ? 'pg-primary-text'
                : 'pg-on-inverse-primary-text',
            ]"
            :variant="isCurrentRoute(navlink, currentPath) ? 'filled' : 'text'"
            container
            role="primary"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            >{{ navlink.text }}</BaseButton
          >
        </NuxtLink>
      </div>
    </div>
  </BaseSheet>
</template>
<style scoped></style>
