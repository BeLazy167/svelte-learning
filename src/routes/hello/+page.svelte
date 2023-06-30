<!-- hello world -->
<script lang="ts">
import type {PageData} from './$types';
export let data: PageData;

</script>




<!-- {"userId":1,"id":1,"title":"delectus aut autem","completed":false} -->
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
<h4>
  {JSON.stringify(data)}
</h4>


