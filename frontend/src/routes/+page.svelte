<script>
    // import { Router, Link, Route } from "svelte-routing";
    import Home from "./Home.svelte";
    import About from "./About.svelte";
    import Register from "./Register.svelte";
    import logo from "../Images/logo-no-background.svg";
    import logoGlobe from "../Images/logo-globe-color.svg";
    import Users from "./Users.svelte";
    import 'iconify-icon'

    let active = "home";
</script>

<header class="bg-[#05172600] flex justify-evenly items-center p-5">
    <img src={logoGlobe} loading="lazy" alt="Oran Web Brains Logo" class="w-1/12 sm:hidden" />
    <img src={logo} loading="lazy" alt="Oran Web Brains Logo" class="w-1/5 max-sm:hidden " />
    <ul class="flex items-center justify-center space-x-5 text-xs font-semibold text-white sm:space-x-10 text sm:text-xl">
        <li><button class="hover:[text-shadow:_1px_0px_2px_black] hover:scale-105 active:[text-shadow:_0px_0px_0px]" type="button" on:click={() => (active = "home")}>Home</button></li>
        <li><button class="hover:[text-shadow:_1px_0px_2px_black] hover:scale-105 active:[text-shadow:_0px_0px_0px]" type="button" on:click={() => (active = "register")}>Register</button></li>
        <li><button class="hover:[text-shadow:_1px_0px_2px_black] hover:scale-105 active:[text-shadow:_0px_0px_0px]" type="button" on:click={() => (active = "about")}>About Us</button></li>
        <li><button class="hover:[text-shadow:_1px_0px_2px_black] hover:scale-105 active:[text-shadow:_0px_0px_0px]" type="button" on:click={() => (active = "users")}>Users</button></li>
    </ul>
</header>


    {#if active === "home"}
        <Home />
    {:else if active === "about"}
        <About />
    {:else if active === "register"}
        <Register />
    {:else if active === "users"}
        <Users />
    {/if}

