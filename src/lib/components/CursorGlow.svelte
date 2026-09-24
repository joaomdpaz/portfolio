<script lang="ts">
    let x = $state(-500);
    let y = $state(-500);

    function handleMove (e:MouseEvent) {
        x = e.clientX;
        y = e.clientY;
    }

    let glowStyle = $derived(
        `background: 
        radial-gradient(circle 200px at ${x}px ${y}px, rgba(255,188,213,0.4), transparent 100%)`
        );
</script>

<svelte:window onmousemove={handleMove}/>

<div class="pointer-events-none fixed inset-0 z-30" style="{glowStyle}" aria-hidden="true"></div>