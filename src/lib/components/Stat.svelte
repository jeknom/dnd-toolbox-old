<script lang="ts">
    import type Stat from '$lib/types/Stat'

    export let stat: Stat
    export let value: number

    let colorclass = 'text-orange-400'
    let statPrefix = stat.toUpperCase()

    switch (stat) {
        case 'hp':
            colorclass = 'text-red-500'
            break
        case 'ac':
            colorclass = 'text-gray-300'
            break
        case 'cha':
            colorclass = 'text-pink-400'
            break
        case 'con':
            colorclass = 'text-green-400'
            break
        case 'str':
            colorclass = 'text-orange-400'
            break
        case 'int':
            colorclass = 'text-blue-400'
            break
        case 'wis':
            colorclass = 'text-cyan-400'
            break
        case 'dex':
            colorclass = 'text-yellow-400'
            break
    }
</script>

<div class='text-sm border border-stone-300 rounded-md p-1'>
    <p class={colorclass}>{statPrefix} {value}</p>
</div>