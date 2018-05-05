<template>
    <div id="new">
        <div class="container">
            <form>
                <fieldset>
                    <legend>Your new custom command :</legend>
                    <div class="form-group">
                        <label for="inputEmail1">Name :</label>
                        <input type="text" class="form-control" placeholder="Enter name">
                        <small class="form-text text-muted">You have to make it one word or multiple words connected with " - "</small>
                        <small class="form-text text-muted">(otherwise, additional words will be ignored)</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleTextarea">Write the code now :</label>
                        <codemirror
                        ref="cm"
                        :value="boiler" 
                        :options="cmOptions"
                        ></codemirror>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputFile">Or select an existing file :</label>
                        <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
                        <small id="fileHelp" class="form-text text-muted">This file must be a bash file.</small>
                    </div>
                    </fieldset>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
    // Codemirror
    // import '../codemirror/lib/codemirror.css'
    // import '../codemirror/lib/codemirror.js'
    // import '../codemirror/mode/javascript/javascript.js'
    // import '../js/init.js'

    // require component
    import { codemirror } from 'vue-codemirror'

    // require styles
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/mode/shell/shell.js'
    import 'codemirror/theme/base16-dark.css'


    export default {
        name: "New",
        data() {
            return {
                boiler: "#! /bin/bash\n#write you code here : \n\n",
                cmOptions: {
                    // codemirror options
                    mode: 'text/x-sh',
                    theme: 'base16-dark',
                    lineNumbers: true,
                }
            }
        },
        components: {
            codemirror
        }
    }
</script>

<style>

</style>