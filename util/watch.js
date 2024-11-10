import { execSync } from "node:child_process"  
import env  from "../.env.json" with {type: "json"};

const code = execSync('sass --watch src:'+ env.DEV_PATH +'stylesheets/skins/user', { stdio: 'inherit' });

console.log(code);

