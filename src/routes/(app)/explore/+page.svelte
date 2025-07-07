<script lang="ts">
  import type { PageServerData } from "./$types";

  let { data }: PageServerData = $props();
</script>

{data.user.verified}
