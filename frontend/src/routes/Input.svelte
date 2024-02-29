<script>
    export let label;
    export let type;
    export let value;
    export let elements = [];

    let inputStyle =
        "invalid:text-orange-600 w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500";
</script>

<div class="mb-4">
    <label
        for={label.toLowerCase()}
        class=" block text-gray-600 text-sm font-semibold mb-2">{label}</label
    >

    {#if type === "text"}
        <input
            type="text"
            name={label.toLowerCase()}
            class={inputStyle}
            required            
            bind:value={value}
        />
    {:else if type === "number"}
        <input
            type="number"
            name={label.toLowerCase()}
            class={inputStyle}
            required
            bind:value={value}
        />
    {:else if type === "email"}
        <input
            type="email"
            name={label.toLowerCase()}
            class={inputStyle}
            required
            bind:value={value}
        />
    {:else if type === "password"}
        <input
            type="password"
            name={label.toLowerCase()}
            class={inputStyle}
            required
            bind:value={value}
        />
    {:else if type === "datetime-local"}
        <input
            type="datetime-local"
            name={label.toLowerCase()}
            class={inputStyle}
            required
            bind:value={value}
        />
    {:else if type === "select"}
        <select
            name={label.toLowerCase()}
            class={inputStyle}
            required
            bind:value
        >
            {#each elements as element}
                <option value={element}>{element}</option>
            {/each}
        </select>
    {/if}
</div>
