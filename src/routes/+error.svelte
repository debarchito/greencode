<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { AlertCircle } from "@lucide/svelte";
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>{page.status} | greencode</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center p-4">
  <Card.Root class="w-full max-w-md">
    <Card.Content class="pt-6">
      <div class="flex flex-col items-center space-y-4 text-center">
        <div class="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
          <AlertCircle class="size-16 text-red-600 dark:text-red-400" />
        </div>
        <div class="mt-2 space-y-3">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
            <span class="font-boldtext-red-600 dark:text-red-400">{page.status}:</span>
            {page.error!.message}
          </h2>
          <p class="mt-5 space-y-2 text-sm">
            Go back to
            <a href="/" class="underline">home</a>
          </p>
        </div>
      </div>
    </Card.Content>
  </Card.Root>
</div>
