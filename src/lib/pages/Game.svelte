<script>
  import { game } from "../stores/game";
  export let id;

  let cards = [];
  let users = {};
  let name = "";

  $: {
    cards = $game.cards;
    name = $game.name;
    users = $game.users;
  }

  function selectCard(value) {}

  game.set({
    id: "asdfadsf",
    name: "teste",
    cards: ["1", "2", "3", "5", "8", "13", "coffe"],
    users: {
      1: { name: "matheus", card: "2" },
      2: { name: "renato", card: null },
    },
  });
</script>

<p>{name}</p>
<section class="container">
  <div class="columns">
    {#each Object.entries(users) as [userId, user]}
      <div class="vote-wrapper">
        <div class:empty={!user.card} class="user-card">
          {#if user.card}
            <span>{user.card}</span>
          {/if}
        </div>
        <div class="column is-size-6 has-text-weight-bold user-name">
          {user.name}
        </div>
      </div>
    {/each}
  </div>
</section>
<footer class="footer">
  <ul class="cards">
    {#each cards as value}
      <li class="">
        <button class="button is-info is-light">
          <span>{value}</span>
        </button>
      </li>
    {/each}
  </ul>
</footer>

<style>
  .vote-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .user-card {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    height: 7rem;
    width: 4rem;
    border: 2px solid #3993ff;
    background-color: #eef6fc;
    color: #1d72aa;
  }
  .user-card.empty {
    border: none;
    background: #b5b8ba;
  }
  .cards {
    list-style: none;
    margin: 0;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 1.6rem;
    text-align: center;
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: 100%;
  }

  .cards li {
    display: inline-block;
    margin: 0 0.8rem;
    transition: all 0.1s linear;
    vertical-align: top;
    white-space: nowrap;
  }

  .cards li button {
    border: 2px solid #3993ff;
    cursor: pointer;
    outline: 0;
    transition: all 0.09s linear;

    border-radius: 0.8rem;
    font-size: 19px;
    height: 8rem;
    width: 4.8rem;

    align-items: center;
    backface-visibility: hidden;
    border-color: transparent;
    display: flex;
    font-weight: 700;
    justify-content: center;
    overflow: hidden;
  }
</style>
