<template>
    <div id="NavBar">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Custom</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/#/" v-bind:class="{active: isHome}" @click="change('home')">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/new" v-bind:class="{active: isNew}" @click="change('new')">New</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/edit" v-bind:class="{active: isEdit}" @click="change('edit')">Edit</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/help" v-bind:class="{active: isHelp}" @click="change('help')">Help</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "NavBar",

        data () {
            return {
                isHome: false,
                isNew: false,
                isEdit: false,
                isHelp: false
            }
        },

        methods: {
            change: function(name) {
                switch (name) {
                    case 'home':
                        isHome = true;
                        isHelp = false;
                        isNew = false;
                        isEdit = false;
                        break;
                    case 'edit':
                        isHome = false;
                        isHelp = false;
                        isNew = false;
                        isEdit = true;
                        break;
                    case 'new':
                        isHome = false;
                        isHelp = false;
                        isNew = true;
                        isEdit = false;
                        break;
                    case 'help':
                        isHome = false;
                        isHelp = true;
                        isNew = false;
                        isEdit = false;
                        break;
                }
            }
        }

    }
</script>

<style scoped>

</style>