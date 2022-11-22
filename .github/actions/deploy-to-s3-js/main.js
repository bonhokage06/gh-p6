const core = require("@actions/core")
const github = require("@actions/github")
const exec = require("@actions/exec")
function run() {
  core.notice("Deploying to S3")
  const apikey = core.getInput("api-key")
  core.notice("the apikey is " + apikey)
}
run()
