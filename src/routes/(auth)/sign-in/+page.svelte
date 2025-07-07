<script lang="ts">
  import { page } from "$app/state";
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  import Google from "$lib/icons/Google.svelte";
  import GitHub from "$lib/icons/GitHub.svelte";
  import { LogIn, TriangleAlert } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Password from "$lib/components/ui/password/index.js";

  let { form }: { form: ActionData } = $props();
  let url = new URL(page.url);
</script>

<svelte:head>
  <title>Sign in | greencode</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <Card.Root class="md:min-w-sm">
    <Card.Header class="text-center select-none">
      <Card.Title class="text-2xl">Welcome back!</Card.Title>
      <Card.Description>Sign in with OAuth or your Email</Card.Description>
    </Card.Header>

    <Card.Content>
      <div class="grid gap-6">
        <div class="flex flex-col gap-4">
          <Button variant="outline" class="text-foreground/80 hover:text-foreground w-full">
            Sign in with <Google />
          </Button>
          <Button variant="outline" class="text-foreground/80 hover:text-foreground w-full">
            Sign in with <GitHub />
          </Button>
        </div>
        <div
          class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
        >
          <span class="bg-card text-muted-foreground relative z-10 px-2 select-none">
            Or continue with
          </span>
        </div>
        <div class="grid gap-4">
          <form class="grid gap-4" method="POST" use:enhance>
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="jane@doe.com"
                spellcheck="false"
                required
              />
            </div>

            <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password">Password</Label>
              </div>
              <div class="relative">
                <Password.Root>
                  <Password.Input id="password" name="password">
                    <Password.ToggleVisibility class="hover:text-red-200" />
                  </Password.Input>
                </Password.Root>
              </div>
            </div>

            <Button type="submit" class="w-full transition-all hover:scale-105">
              <LogIn />
              Sign in
            </Button>
          </form>

          {#if form?.message}
            <Alert.Root variant="destructive">
              <TriangleAlert />
              <Alert.Description class="max-w-70">
                <span>{form?.message}</span>
              </Alert.Description>
            </Alert.Root>
          {/if}

          <div class="mt-2 text-center text-sm select-none">
            Don't have an account?
            <a href={`/sign-up${url.search}`} class="underline">Sign up</a>
          </div>
        </div>
      </div></Card.Content
    >
  </Card.Root>
</div>
