import {onEvent, sendEvent, startServer} from "soquetic"
import { signUp } from "./signupback.js"
import { login } from "./loginback.js"
import { favoritos } from "./favoritos.js"
onEvent("signup", (data) => signUp(data))
onEvent("login", (data)=>login(data))
onEvent("favoritos", (data) => favoritos(data))



startServer()