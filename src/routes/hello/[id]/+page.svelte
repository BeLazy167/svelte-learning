<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>


<h1>
    {data.title}
</h1>
<h1>
    {data.userId}
</h1>
<h1>
    {data.id}
</h1>
<h1>
    {data.completed}
</h1>