import App from './containers/App.svelte';



const app = new App({
    target: document.querySelector('main')            /* para empujar nuestra aplicacion dentro del html */
});


export default app;
