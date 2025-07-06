<script lang="ts">
  const { children } = $props();
</script>

<div class="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
  {@render children()}
</div>
