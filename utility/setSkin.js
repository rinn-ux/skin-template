import * as fs from "fs";
import { program } from "commander";

program
  .option("-d, --default", "Add default Ao3 stylesheets")
  .option("-c, --clear", "Clear stylesheets from html");
program.parse(process.argv);

const linkStylesheet = (path, options) =>
  `    <link rel="stylesheet" href="/stylesheets/skins/user/${path.replace(
    /\\/,
    "/"
  )}" ${options != undefined ? 'media="' + options + '"' : ""}/>\r\n`;
let files = fs
  .readdirSync("../dev-o3/public", { recursive: true })
  .filter((p) => p.endsWith(".html"));

let imports = "";

if (program.default) {
  imports =
    '    <link rel="stylesheet" type="text/css" media="screen" href="/stylesheets/skins/skin_1_default/1_site_screen_.css" />\r\n' +
    '    <link rel="stylesheet" type="text/css" media="only screen and (max-width: 62em), handheld" href="/stylesheets/skins/skin_1_default/4_site_midsize.handheld_.css" />\r\n' +
    '    <link rel="stylesheet" type="text/css" media="only screen and (max-width: 42em), handheld" href="/stylesheets/skins/skin_1_default/5_site_narrow.handheld_.css" />\r\n' +
    '    <link rel="stylesheet" type="text/css" media="speech" href="/stylesheets/skins/skin_1_default/6_site_speech_.css" />\r\n' +
    '    <link rel="stylesheet" type="text/css" media="print" href="/stylesheets/skins/skin_1_default/7_site_print_.css" />\r\n';
}

let styles = fs
  .readdirSync("../dev-o3/public/stylesheets/skins/user/", {
    recursive: true,
  })
  .filter((p) => p.endsWith(".css"));

styles.forEach((path) => {
  if (path.includes("sm")) {
    imports += linkStylesheet(path, "only screen and (max-width: 42em)");
  } else if (path.includes("md")) {
    imports += linkStylesheet(path, "only screen and (max-width: 62em)");
  } else {
    imports += linkStylesheet(path);
  }
});

files.forEach((file) => {
  let data = fs.readFileSync("../dev-o3/public/" + file, {
    encoding: "utf8",
    flag: "r",
  });

  if (program.clear) {
    data =
      data.split("<!-- SKIN STYLESHEETS -->")[0] +
      "<!-- SKIN STYLESHEETS -->\r\n    <!-- END STYLESHEETS -->" +
      data.split("<!-- END STYLESHEETS -->")[1];
  } else {
    const regex =
      /(?<=    <!-- SKIN STYLESHEETS -->\r\n)((.*\r\n))*(?=    <!-- END STYLESHEETS -->)/gm;

    data = data.replace(regex, imports);
  }

  fs.writeFileSync("../dev-o3/public/" + file, data, {
    encoding: "utf8",
    flag: "w",
  });
});
