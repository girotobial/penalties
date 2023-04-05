<script lang="ts">
    import TickBox from "./TickBox.svelte";

    export let id: number = 1;
    export let contact: boolean;
    export let placesLost: number;
</script>

<form class="container-fluid border border-light p-1">
    <div class="row justify-content-center">
        <div class="col-sm-1">
            <p class="h5">Car {id}</p>
        </div>
        <div class="col-sm-12">
            <TickBox bind:value={contact} label="Contact" />
        </div>
        <div class="col input-group">
            <span class="input-group-text" id="basic-addon1">Places Lost</span>
            <input type="number" class="form-control" bind:value={placesLost} />
        </div>
    </div>
</form>

<style>
    form {
        max-height: 156px;
    }
</style>
