<script lang="ts">
    let pastTop = $state(false);
    function onScroll() {
        pastTop = window.scrollY > 80;
    }
    function toTop() {
        window.scrollTo({ top:0, behavior: 'smooth'});
    }
</script>
<svelte:window onscroll={onScroll} />

<button
    onclick={toTop}
    aria-label="Back to Top"
    class="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full text-cream bg-brown shadow-lg transition-[transform,background-color,color,opacity] duration-300 ease-out hover:bg-cream hover:text-rose-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-1 {pastTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'}"
    >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true">
        <path d="M12 19V5 M5 12l7-7 7 7" />
    </svg>

</button>