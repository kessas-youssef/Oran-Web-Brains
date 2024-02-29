<script>
    import { onMount } from "svelte";
    import logoGlobe from "../Images/logo-globe-color.svg";
    import UserCard from "./UserCard.svelte";

    let users = [];
    let isError = { state: false, message: "" };

    onMount(async function () {
        const response = await fetch("http://localhost:3030/api/users", {
            headers: {
                Accept: "application/json",
            },
            method: "GET",
        });

        const result = await response.json();

        if (!response.ok) isError = { message: result.message, state: true };
        else users = result.content;
        // console.log(await response.json());
    });
</script>

<main class="flex flex-col justify-evenly items-center">
    <h1 class="text-4xl font-bold text-center mb-8">
        {!isError.state ? "Users" : isError.message}
    </h1>

    {#if (users.length || isError.state)}
        <div class="sm:w-1/2 space-y-10">
            {#each users as user (user._id)}
                <UserCard {user} />
            {/each}
        </div>
    {:else}
        <div
            class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        >
            <img
                src={logoGlobe}
                alt="OWB Logo spinning while Loading"
                class="animate-spin"
            />
        </div>
    {/if}
</main>
