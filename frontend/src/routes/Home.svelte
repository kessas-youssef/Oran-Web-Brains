<script>
    import place_darmes_picture from '../Images/place_armes_oran.jpg'
</script>

<main>

    <!-- Section One -->
    <section class="relative flex items-center justify-center w-full px-5 py-16 sm:static sm:px-16">
        <div
            class="flex flex-col items-center justify-center h-full space-y-10 text-center text-white sm:w-1/2 sm:text-black sm:pr-16"
        >
            <h1 class="[text-shadow:_1px_0px_2px_black] text-sm font-extrabold sm:text-5xl">
                Go beyond the limitations of WEB DEV !
            </h1>
            <p class="[text-shadow:_1px_0px_2px_black] text-xs font-bold text-shadow-lg sm:text-2xl">
                Encourage Collaborative Learning All the time, Everywhere,
                Together.
            </p>
            <button
                class="[text-shadow:_1px_0px_2px_black] hover:[box-shadow:_0px_0px_10px_black] border-none text-xs font-bold bg-[#99BFBB] p-4 rounded-t-2xl rounded-br-2xl self-center sm:text-lg"
                >Get Started</button
            >
        </div>

        <img
            class="sm:transition-transform sm:duration-1000 sm:ease-in-out sm:hover:scale-125 sm:w-1/3 absolute top-0 bottom-0 block object-contain object-center h-auto max-w-full sm:rounded-lg shadow-2xl sm:blur-none blur-[1px] oopacity-70 sm:opacity-100 sm:shadow-black -z-10 sm:z-10 sm:static"
            src={place_darmes_picture}
            alt="Oran city Place d'Armes"
            title="Oran - Place d'Armes 1er Novembre 1954"
        />
    </section>

    <!-- Section Two -->
    <section class="box-content my-10 space-y-10">

      <h1 class="text-xl font-bold text-center sm:text-4xl">We follow an Ideal <span class="[text-shadow:_2px_1px_5px_white] uppercase font-extrabold text-[#99BFBB]">Approach</span></h1>

      <div class="flex flex-col items-center justify-center gap-5 sm:gap-10 sm:flex-row">
        
        <div class="flex flex-col items-center justify-center sm:transition-transform sm:duration-1000 sm:ease-in-out sm:hover:scale-110 ">
          <iconify-icon icon="grommet-icons:technology" class="text-[#99BFBB] text-5xl [text-shadow:_2px_1px_5px_white]" />
          <p class="text-md">Engineer Tech Stacks</p> 
        </div>
        
        <div class="flex flex-col items-center justify-center sm:transition-transform sm:duration-1000 sm:ease-in-out sm:hover:scale-110">
          <iconify-icon icon="ph:code-fill" class="text-[#99BFBB] text-5xl [text-shadow:_2px_1px_5px_white]" />
          <p class="text-md">Up to date Coding Tips</p> 
        </div>
        
        <div class="flex flex-col items-center justify-center sm:transition-transform sm:duration-1000 sm:ease-in-out sm:hover:scale-110">
          <iconify-icon icon="grommet-icons:workshop" class="text-[#99BFBB] text-5xl [text-shadow:_2px_1px_5px_white]" />
          <p class="text-md">Monitored Workshops</p> 
        </div>
      
      </div>

    </section>
</main>
