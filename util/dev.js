import { execSync } from "node:child_process"  
import { program } from "commander";
import env  from "../.env.json" with {type: "json"};

program
  .option("-d, --default", "Add default Ao3 stylesheets")
  .option("-c, --clear", "Clear stylesheets from html");
program.parse(process.argv);


if (program.default) {
    const code = execSync('node util/setSkin.js -d && live-server '+ env.DEV_PATH , { stdio: 'inherit' });
    console.log(code);
} else {
    const code = execSync('node util/setSkin.js && live-server '+ env.DEV_PATH , { stdio: 'inherit' });
    console.log(code);
}