<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import TextGenerateEffect from "$lib/components/ui/TextGenerateEffect/TextGenerateEffect.svelte";
	import { onMount } from "svelte";
    import { fade, slide, scale } from 'svelte/transition';

    const words = "Orchestrate  hundreds of AI Assistants - all in one place";

    let show: boolean;
    $: show = false;

    onMount(() => {
        show = true;
    })

</script>

<style>
    ::selection {
        background-color: #3BFFFF; /* Background color for selected text */
        color: black; /* Text color for selected text */
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.0);
    }
</style>

<div class="w-full h-full min-h-screen flex flex-col justify-center items-center relative text-white">
    {#if show}
        <div
            transition:scale={{ delay: 0, duration: 700 }} 
            class="w-full flex flex-row justify-center gap-2 items-center top-4 z-30 absolute h-10"
            >

            <img src="/logo_white.png" alt="logo" class="w-6 h-5">
            <div class="h-full">
                <h1 class="font-thin text-2xl pt-1">
                    Studio
                </h1>
            </div>

        </div>
    {/if}

    <iframe title="spline" src="https://my.spline.design/cybermannequin-ea37d17e0f32dd6d661401b2040a193b/" frameborder="0" class="w-full h-full flex min-h-screen absolute top-0 z-10"/>

    {#if show}
        <div class="w-full px-4 h-full flex flex-col justify-center items-center z-20 ">
            <div class="w-full lg:w-3/4 md:px-10 h-full flex flex-col">
                <!-- <h1 class="text-6xl font-semibold drop-shadow-xl">
                    <b class="bg-[#3BFFFF] text-black font-semibold">Orchestr</b>ate hundreds
                    <br>
                    of AI Assis<b class="bg-[#3BFFFF] text-black font-semibold">tants - all i</b>n 
                    <br>
                    <b class="bg-[#3BFFFF] text-black font-semibold">one pla</b>ce
                </h1> -->
                <!-- <div class="w-full justify-start items-center flex flex-row gap-2">
                    <img src="/logo_white.png" alt="logo" class="w-8">
                </div> -->
                <h2 class="text-5xl font-semibold drop-shadow-xl shady-bro opacity-100">
                    <TextGenerateEffect {words} />
                </h2>

                <div class="py-2 transition-all duration-700 ease-in-out pt-20">
                    <!-- <Button href="/login" class="w-min hover:w-full  bg-transparent rounded-full border-[0.5px] border-[#3BFFFF] border-opacity-40 px-6 py-1 text-white transition-all duration-700 ease-in-out lg:hover:bg-[#3BFFFF] hover:bg-transparent">
                        <h2 class="tex-5xl sm:text-6xl md:text-7xl lg:text-9xl transition-all duration-700 ease-in-out font-extrabold uppercase">
                            Start here
                        </h2>
                    </Button> -->
                    <Button href="/apply" class="transition-all duration-300 ease-in-out rounded-full w-3/4 hover:w-full bg-transparent hover:bg-[#3BFFFF] hover:bg-opacity-20 border-2 border-[#3BFFFF] border-opacity-20 z-50">
                        <h3 class="text-5xl sm:text-6xl md:text-7xl lg:text-9xl transition-all duration-700 ease-in-out font-extrabold uppercase w-full text-center text-white">
                            Start here*
                        </h3>
                    </Button>
                </div>
            </div>


        </div>
    {/if}
</div>