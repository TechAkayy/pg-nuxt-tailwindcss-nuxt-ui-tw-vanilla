<script setup lang="ts">
  const config = useRuntimeConfig()
  const { description } = config.public
</script>
<template>
  <div class="container mx-auto px-4 py-24 relative">
    <div class="flex flex-wrap items-center justify-center">
      <BaseSheet
        class="mx-auto p-4 rounded-2xl w-full sm:w-4/5 lg:w-5/12"
        role="primary-container"
      >
        <div class="flex flex-wrap justify-between sm:flex-nowrap">
          <div class="p-5 text-center w-full whitespace-nowrap">
            <h5>Meta-framework</h5>
            <p class="pg-primary-text">Nuxt</p>
          </div>
          <div
            class="hidden items-center justify-center my-4 relative w-2 sm:flex"
          >
            <span
              class="-ml-px absolute h-full pg-surface-container w-0.5"
              aria-hidden="true"
            />
          </div>
          <div
            class="flex h-2 items-center justify-center my-4 relative w-full sm:hidden"
          >
            <span
              class="-ml-px absolute pg-surface-container w-full h-0.5"
              aria-hidden="true"
            />
          </div>
          <div class="p-5 text-center w-full whitespace-nowrap">
            <h5>UI-framework</h5>
            <p class="pg-primary-text">Tailwind CSS</p>
          </div>
        </div>
      </BaseSheet>
      <div
        class="mt-4 mx-auto px-2 py-4 text-center w-full sm:w-4/5 lg:mt-0 lg:text-left lg:w-5/12"
      >
        <h3 class="capitalize mb-2">About This Template</h3>
        <h6 class="capitalize mb-2 pg-primary-text">{{ description }}</h6>
        <p class="mb-6">
          This is a starter template that pre-includes the
          <NuxtLink
            href="https://www.npmjs.com/package/@pinegrow/nuxt-module"
            external
            target="_blank"
          >
            <BaseButton
              class="font-mono !px-1 underline"
              variant="text"
              role="secondary-container"
              tag="span"
              >Pinegrow Nuxt Module</BaseButton
            >
          </NuxtLink>
          that enables you to visually edit your Vue single-file components.
        </p>
        <div class="flex justify-center lg:justify-start">
          <NuxtLink to="/quick-start">
            <BaseButton><span>Quick Start ></span> </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
