<script>
  import { isModal as isConfirmModal } from "../stores/ModalStore";
  import UserCard from "./UserCard.svelte";
  export let user;

  function submitHandler() {
    console.log(user);
    fetch("http://localhost:3030/api/addUser", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        $isConfirmModal = false;
      })
      .catch((err) => {
        console.error(err);
        $isConfirmModal = false;
      });
  }
</script>

<div
  class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-evenly items-center gap-2"
>
  <h1 class="text-4xl font-bold text-center mb-2 ">Are you sure ?</h1>
  <UserCard {user} />
  <form
    on:submit|preventDefault={submitHandler}
    class="space-x-5"
  >
    <button type="submit" class="text-[#81ffd9] bg-[#051726] rounded-md py-2 px-4 hover:bg-[#172a39] focus:outline-none focus:bg-[#172a39]"
      >Confirm</button
    >
    <button
      type="button"
      on:click={() => ($isConfirmModal = false)}
      class="text-[#000000] bg-[#f24d4d] rounded-md py-2 px-4 hover:bg-[#cc4646] active:outline-none active:bg-[#963333]">Back</button
    >
  </form>
</div>
