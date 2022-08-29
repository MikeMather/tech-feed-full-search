<script lang="ts">
import { formatPublishedAt } from "../utils/dateUtils";

export let timestamp: string;

</script>

<time datetime={timestamp}>{formatPublishedAt(timestamp)}</time>

<style>
  time {
    font-size: 0.8rem;
    color: var(--text-color-light);
    margin-top: 15px;
  }
</style>