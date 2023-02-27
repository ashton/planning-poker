<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./lib/pages/Home.svelte";
  import Game from "./lib/pages/Game.svelte";

  export let url = "";
</script>

<main>
  <Router {url}>
    <Route path="/" component={Home} />
    <Route path="/:gameId" let:params>
      <Game id={params.gameId} />
    </Route>
  </Router>
</main>
