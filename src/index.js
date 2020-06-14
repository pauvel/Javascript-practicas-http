const { init } = require("./js/chistes-page");
const {obtenerUsuarios} = require("./js/http-provider");
// init(); Iniciar pedir chistes

obtenerUsuarios().then(console.log);