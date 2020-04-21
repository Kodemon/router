const { execSync } = require("child_process");

const links = [
  ["/packages/native", "/demo/native/node_modules/router"],
  ["/packages/react", "/demo/native/node_modules/router-react"],
  ["/packages/router", "/demo/web/node_modules/router"],
  ["/packages/react", "/demo/web/node_modules/router-react"],
];

const copy = ["/dist", "/package.json", "/tsconfig.json"];

for (const link of links) {
  const [from, to] = link;

  execSync(`rm -rf ${__dirname}${to}; mkdir ${__dirname}${to}`);
  for (const target of copy) {
    execSync(`cp -Rf ${__dirname}${from}${target} ${__dirname}${to}${target}`);
  }
}
