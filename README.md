# Bundler built with Rollup

Built to support multiple applications

## Setup

1. Install NPM in the project root folder
   - ```npm install```

2. If you're not satisfied with the current ```package.json```
   - Create the ```package.json```, and follow the instructions after entering the command ```npm init```
   - Install rollup using ```npm install rollup --save-dev```
   - Install babel using ```npm install @babel/core @babel/preset-env rollup-plugin-babel --save-dev```

3. Create ```script_name.rollup.js``` in the config folder
    ```
    import babel from 'rollup-plugin-babel';

    export default {
        input: 'main.js',
        output: {
            file: 'bundle.js',
            format: 'iife',
            name: 'bundle'
        },
        plugins: [
            babel({
                exclude: 'node_modules/**'
            })
        ]
    }
    ```

4.  Add the new script to the ```package.json```
    ``` 
    "scripts": {
        "script_name": "rollup -c ./path_to_script/script_name"
    }
    ```
5. To avoid any errors with babel, use ```npm install --save-dev @babel/preset-env```
6. To build the ```bundle.js``` file, use ```npm run script_name ```
7. Your ```index.html``` file should run ```bundle.js``` like so
    ```
     <script src='./bundle.js' type='module'></script>
    ```

## Permissions 

### Windows

If ps1 cannot be loaded because running scripts is disabled on your system, then run the following command

```Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted```

## TODO

- Remove the ESRI dependencies?