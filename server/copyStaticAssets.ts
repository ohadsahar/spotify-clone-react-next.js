import * as shell from "shelljs";

// copy env folder to dist
shell.rm('-rf', 'dist/env'); // make sure old files deleted
shell.cp("-R", "src/env", "dist/env");
shell.cp("-R", "src/config/*.json", "dist/config");
// shell.cp("-R", ".env", "dist");
// make sure upload folder exists
shell.mkdir("-p", "dist/public/uploads");
shell.mkdir("-p", "public/uploads");
