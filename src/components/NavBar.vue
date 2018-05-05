<template>
    <div id="NavBar" class="navbar-drag">
        <nav class="navbar fixed-top navbar-expand navbar-light bg-light" style="-webkit-app-region: drag">
            <a class="navbar-brand" href="/">$[Custom]</a>
            <button class="navbar-toggler" type="button" @click="mobileMenu()">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/#/" v-bind:class="{active: tab === 1}" @click="tab = 1">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/new" v-bind:class="{active: tab === 2}" @click="tab = 2">New</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/edit" v-bind:class="{active: tab === 3}" @click="tab = 3">Edit</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/help" v-bind:class="{active: tab === 4}" @click="tab = 4">Help</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <button class="btn btn-sm btn-outline-danger" @click="quit()">X</button>
                    </li>
                </ul>
            </div>
        </nav>



    </div>
</template>

<script>

    export default {
        name: "NavBar",

        data () {
            return {
                tab: 0
            }
        },

        methods: {
            quit: function() {
                window.close();
            },
            collapse: function() {
                // $('.collapse').collapse()
            }
        }

    }
</script>

<style scoped>
</style>