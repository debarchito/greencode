<script lang="ts">
  import { page } from "$app/state";
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  import Google from "$lib/icons/Google.svelte";
  import GitHub from "$lib/icons/GitHub.svelte";
  import { isValidPassword } from "$lib/customUtils";
  import { Check, TriangleAlert } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Password from "$lib/components/ui/password/index.js";

  let { form }: { form: ActionData } = $props();
  let url = new URL(page.url);
  let password = $state("");
  let repeatPassword = $state("");
  let passwordMismatch = $derived(
    password.length > 0 && repeatPassword.length > 0 && password !== repeatPassword,
  );
  let validPassword = $derived(isValidPassword(password));
</script>

<svelte:head>
  <title>Sign up | greencode</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <Card.Root class="md:min-w-sm">
    <Card.Header class="text-center select-none">
      <Card.Title class="text-2xl">Let's get you there!</Card.Title>
      <Card.Description>Sign up with OAuth or an email</Card.Description>
    </Card.Header>

    <Card.Content>
      <div class="grid gap-4">
        <Tabs.Root value="oauth">
          <Tabs.List class="m-auto">
            <Tabs.Trigger value="oauth">OAuth</Tabs.Trigger>
            <Tabs.Trigger value="email">Email</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="oauth" class="mt-3">
            <div class="flex flex-col gap-4">
              <Button variant="outline" class="text-foreground/80 hover:text-foreground w-full">
                Sign in with <Google />
              </Button>
              <Button variant="outline" class="text-foreground/80 hover:text-foreground w-full">
                Sign in with <GitHub />
              </Button>
            </div>
          </Tabs.Content>
          <Tabs.Content value="email" class="mt-3">
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
                <Label for="name">Username</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="janedoe"
                  spellcheck="false"
                  required
                />
              </div>

              <div class="grid gap-2">
                <Label for="display-name">Display name <Badge>optional</Badge></Label>
                <Input
                  id="display-name"
                  type="text"
                  name="displayName"
                  placeholder="Jane Doe"
                  spellcheck="false"
                />
              </div>

              <div class="grid gap-2">
                <div class="flex items-center">
                  <Label for="password">Password</Label>
                </div>
                <div class="relative">
                  <Password.Root>
                    <Password.Input
                      id="password"
                      name="password"
                      bind:value={password}
                      spellcheck="false"
                      required
                    >
                      <Password.ToggleVisibility />
                    </Password.Input>
                    <Password.Strength />
                  </Password.Root>
                </div>
              </div>

              <div class="grid gap-2">
                <div class="flex items-center">
                  <Label for="repeat-password">Repeat password</Label>
                </div>
                <div class="relative">
                  <Password.Root>
                    <Password.Input
                      id="repeat-password"
                      bind:value={repeatPassword}
                      class={passwordMismatch ? "border-red-500" : ""}
                      spellcheck="false"
                      required
                    >
                      <Password.ToggleVisibility />
                    </Password.Input>
                  </Password.Root>
                </div>
              </div>

              <Button
                type="submit"
                class="w-full transition-all hover:scale-105"
                disabled={passwordMismatch || !validPassword}
              >
                <Check />
                Sign Up
              </Button>
            </form>

            {#if form?.message}
              <Alert.Root variant="destructive" class="mt-4">
                <TriangleAlert />
                <Alert.Description class="max-w-70">
                  <span>{form?.message}</span>
                </Alert.Description>
              </Alert.Root>
            {:else if password.length !== 0 && !validPassword}
              <Alert.Root variant="destructive" class="mt-4">
                <TriangleAlert />
                <Alert.Description class="max-w-70">
                  <span>
                    Password must be at-least 8 chars and include a-z, A-Z, 0-9, and a special
                    character.
                  </span>
                </Alert.Description>
              </Alert.Root>
            {:else if passwordMismatch}
              <Alert.Root variant="destructive" class="mt-4">
                <TriangleAlert />
                <Alert.Description class="max-w-70">
                  <span>Repeated password is not the same.</span>
                </Alert.Description>
              </Alert.Root>
            {/if}
          </Tabs.Content>
        </Tabs.Root>

        <div class="mt-2 text-center text-sm select-none">
          Already have an account?
          <a href={`/sign-in${url.search}`} class="underline">Sign in</a>
        </div>
      </div>
    </Card.Content>
  </Card.Root>
</div>
