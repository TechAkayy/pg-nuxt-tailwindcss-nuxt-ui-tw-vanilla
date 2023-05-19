<script setup lang="ts">
  import { computed } from 'vue'
  import { useNav } from '~/composables/nav'

  const { navlinks, currentPath } = useNav()
  const desktopNavTabs = computed(() => {
    return navlinks.value.slice(0, 2)
  })
  const mobileNavTabs = computed(() => {
    return navlinks.value.slice(2, navlinks.value.length)
  })
</script>
<template>
  <BaseSheet class="w-full" role="surface">
    <nav class>
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-24 items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex flex-shrink-0 items-center">
              <NuxtLink to="/">
                <BaseButton
                  class="flex mb-1 mt-2"
                  tag="span"
                  container
                  variant="text"
                  role="primary-container"
                >
                  <h5 class="font-extrabold mb-0 ml-2">Vue Designer</h5>
                </BaseButton>
              </NuxtLink>
            </div>
            <NavBarDesktopTabs
              :navlinks="desktopNavTabs"
              :current-path="currentPath"
              class="h-full"
            />
          </div>
          <DarkModeSwitch />
          <div class="-mr-2 items-center relative">
            <NavBarMobileMenuButton v-if="mobileNavTabs.length" />
            <NavBarDesktopMenu
              :navlinks="mobileNavTabs"
              :current-path="currentPath"
            ></NavBarDesktopMenu>
          </div>
        </div>
      </div>
      <NavBarMobileMenu :navlinks="navlinks" :current-path="currentPath" />
    </nav>
  </BaseSheet>
</template>
<style scoped></style>
