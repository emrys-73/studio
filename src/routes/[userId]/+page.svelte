<script>
// @ts-nocheck


    export let data;
</script>

<div class=" px-6 py-4 flex justify-start w-full h-full flex-col items-center">
    <h1 class="text-8xl font-bold text-white">
        Welcome {data?.user?.username}
    </h1>

    <div class="flex flex-wrap justify-center items-center gap-2 py-4">
        {#each data?.assistants.data as a}
            <div class="bg-white bg-opacity-5 px-6 rounded-full py-1 text-center">
                <span>
                    {a.name}
                </span>
            </div>
        {/each}
    </div>
</div>
