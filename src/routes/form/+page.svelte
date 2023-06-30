<script lang="ts">
	import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>
    {data.randomName}
</h1>
<form method="POST" action="?/temp" use:enhance>
    <label for="name">RandomName:</label>
    <input type="text" id="name" name="randomName" value={data.randomName} />
    <button type="submit" >rename</button>
    <button type="submit" formaction='?/actionname'>RENAME</button>
</form>
