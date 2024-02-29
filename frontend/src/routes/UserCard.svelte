<script>
    export let user;

    let copyText = (textToCopy) => navigator.clipboard.writeText(textToCopy);
</script>

<div
    class="w-full sm:w-1/2 flex flex-col justify-evenly items-center odd:bg-gray-400 p-4 text-white rounded-xl bg-gradient-to-br from-[rgba(34,193,195,1)] to-black hover:bg-gradient-to-br hover:from-[rgba(34,193,195,1)] hover:to-black hover:to-40% transition-all text-center"
>
    <p class="text-lg font-semibold mb-1">
        <iconify-icon icon="pixelarticons:user" class="text-red-500" />
        {user.fname}
        {user.gname}, {user.age} years old
    </p>
    <p class="text-lg font-semibold mb-1">
        <iconify-icon icon="mdi:location" class="text-red-500" />
        {user.university} - {user.area} - {user.level}
    </p>
    <p class="text-lg font-semibold mb-1">
        {user.email}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <iconify-icon
            icon="uiw:copy"
            class="text-red-500 hover:scale-150 transition-all cursor-pointer"
            title="Copy"
            on:click={() => copyText(user.email)}
        />
    </p>
    <p class="text-lg font-semibold mb-1">
        <iconify-icon icon="mdi:calendar" class="text-red-500" />
        {new Date(user.rdv).toLocaleString()}
    </p>
</div>
