<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import { primaryColor } from '../../stores.js'

</script>

<div>
    <div class="w-full h-full min-h-screen flex relative flex-col justify-center items-center">
        <h1 class="text-6xl font-sans font-bold z-20 py-10">
            Password Reset
        </h1>
        <form action="?/reset" method="POST" class=" px-8 py-8 h-full z-20 min-w-[600px] drop-shadow-xl flex flex-col gap-3  backdrop-blur-xl rounded-2xl">
            
            <input type="email" id="email" name="email" placeholder="EMail" class="bg-white bg-opacity-10 rounded-full px-6 py-2 placeholder:text-white placeholder:text-opacity-60 font-semibold">
        
            <div class="w-full flex flex-row justify-between items-center pb-8 px-2 text-center">
                    <p class="transition-all duration-300 ease-in-out opacity-50 font-light hover:opacity-100 italic text-sm text-center w-full">
                        A link will be sent to your inbox to reset your password
                    </p>
            </div>


            <Button type="submit" class="rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-[#684FFF] hover:text-white">
                Reset my password
            </Button>
        </form>
    </div>

    <iframe title="spline" src="https://my.spline.design/dwarfgasplanet-14861b24f2e4602aa3dc64436e33ca2a/" frameborder="0" class="w-full h-full flex min-h-screen absolute top-0 z-10"/>
</div>