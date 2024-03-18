<script>
// @ts-nocheck
    import { animate } from "../../stores";

</script>

<div class="bg-[#1c1c1c] w-full h-full min-h-screen relative flex flex-row justify-start items-center">
    <div class="w-12 h-full bg-[#141414] min-h-screen flex flex-col justify-between items-center py-4">
        <div>
            <a href='/'>
                <img src="/logo_white.png" alt="logo" class="w-6">
            </a>

            <div class="flex flex-col gap-2">
                <!-- Menu -->
            </div>
        </div>


        <div class="">
            <form action="/logout" method="POST" class="">
                <button type="submit" class="flex flex-row opacity-70 hover:opacity-100 {$animate}">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                          </svg>
                    </div>
                </button>
              </form>
        </div>
    </div>

    
    <slot/>

</div>