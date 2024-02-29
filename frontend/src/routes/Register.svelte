<script>
  import ConfirmModal from "./ConfirmModal.svelte";
  import { isModal as isConfirmModal } from "../stores/ModalStore";
  import Input from "./Input.svelte";
    import { onDestroy } from "svelte";

  let user = {};

  onDestroy(() => $isConfirmModal = false)

</script>

<div class="flex flex-col items-center justify-center min-h-screen">
  {#if $isConfirmModal === true}
    <ConfirmModal {user} />
  {/if}

  <div
    class={`${$isConfirmModal&&'invisible'} max-w-md w-full p-6 sm:bg-white sm:rounded-lg shadow-md`}
  >
    <h1 class="mb-6 text-2xl font-semibold text-center">Register</h1>
    <form
      on:submit={(e) => {
        e.preventDefault();
        $isConfirmModal = true;
      }}
      class="text-xs"
    >
      <Input label="Family name:" type="text" bind:value={user.fname} />
      <Input label="Given name:" type="text" bind:value={user.gname} />
      <Input label="Age:" type="number" bind:value={user.age} />
      <Input label="University:" type="text" bind:value={user.university} />
      <Input label="Field of study:" type="text" bind:value={user.area} />
      <Input
        label="Levels"
        type="select"
        elements={["Other", "L1", "L2", "L3", "M1", "M2", "Employed"]}
        bind:value={user.level}
      />
      <Input label="E-mail:" type="email" bind:value={user.email} />
      <Input label="Rendez-Vous:" type="datetime-local" bind:value={user.rdv} />
      <button
        type="submit"
        class="w-full text-[#81ffd9] bg-[#051726] rounded-md py-2 px-4 hover:bg-[#172a39] focus:outline-none focus:bg-[#172a39]"
      >
        Register
      </button>
    </form>
  </div>
</div>
