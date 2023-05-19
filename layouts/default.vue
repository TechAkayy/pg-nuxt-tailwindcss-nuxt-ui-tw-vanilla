<template>
  <div>
    <MetaTags />
    <BaseSheet class="flex flex-col" role="surface">
      <NavBar class="fixed shadow z-10" />
      <div class="mt-24 shadow">
        <slot />
      </div>
      <TheFooter />
    </BaseSheet>
  </div>
</template>
<style></style>
