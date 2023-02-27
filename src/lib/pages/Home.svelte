<script>
  import Modal from "../components/Modal.svelte";
  import { showModal } from "../stores/ui";

  let joinGame = false;
  let username = null;
  let gameCode = null;

  let createGame = false;
  let gameName = null;
  let gameType = null;

  let modalTitle;

  $: {
    if (createGame) {
      modalTitle = "New Game";
    } else {
      modalTitle = "Join Game";
    }
  }

  function handleShowCreateGame() {
    createGame = true;
    joinGame = false;
    showModal();
  }

  function handleShowJoinGame() {
    joinGame = true;
    createGame = false;
    showModal();
  }

  function handleCreateGame() {
    console.log(gameName, gameType);
  }

  function handleJoinGame() {
    console.log(gameCode, username);
  }
</script>

<section class="hero is-fullheight">
  <div class="hero-body">
    <article class="box column is-5 is-offset-4">
      <div class="logo block container">
        <figure class="image">
          <img alt="Planning Poker Logo" src="/planning_poker_logo.png" />
        </figure>
      </div>
      <div class="level buttons are-medium">
        <div class="level-item">
          <button
            on:click={handleShowCreateGame}
            class="button is-primary is-outlined">Create Game</button
          >
        </div>
        <div class="level-item">
          <button
            on:click={handleShowJoinGame}
            class="button is-info is-outlined">Join Game</button
          >
        </div>
      </div>
    </article>
  </div>
</section>

<Modal title={modalTitle}>
  {#if createGame}
    <div class="field">
      <div class="control">
        <label class="label">Game name</label>
        <input bind:value={gameName} type="text" class="input is-medium" />
      </div>
    </div>
    <div class="field">
      <div class="control is-expanded">
        <label class="label">Game metric</label>
        <div class="select is-large is-fullwidth">
          <select bind:value={gameType}>
            <option value="fibonacci">Fibonacci (1, 2, 3, 5, 8, 13..)</option>
            <option value="tshirt">T-Shirt Size (XS, S, M, L, XL..)</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button on:click={handleCreateGame} class="button is-medium is-success"
          >Create</button
        >
      </div>
    </div>
  {:else if joinGame}
    <div class="field">
      <div class="control">
        <input
          bind:value={gameCode}
          type="text"
          class="input is-medium"
          placeholder="Game code"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input
          bind:value={username}
          type="text"
          class="input is-medium"
          placeholder="Your name"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button on:click={handleJoinGame} class="button is-success is-medium"
          >Join</button
        >
      </div>
    </div>
  {/if}
</Modal>

<style>
  .logo {
    display: flex;
    justify-content: center;
  }
  .logo figure {
    max-width: 350px;
  }
</style>
