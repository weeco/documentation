// Fetch the latest release version from GitHub
const { Octokit } = require("@octokit/rest");
const { retry } = require("@octokit/plugin-retry");
const OctokitWithRetries = Octokit.plugin(retry);
const owner = 'redpanda-data';
const repo = 'redpanda';
const github = new OctokitWithRetries({
  userAgent: 'Redpanda Docs',
  baseUrl: 'https://api.github.com',
})

module.exports = (async () => {
  var latestRedpandaReleaseVersion;
  var latestRedpandaReleaseCommitHash;
  github.rest.repos.getLatestRelease({
    owner,
    repo,
  }).then((release => {
    const tag = release.data.tag_name
    latestRedpandaReleaseVersion = tag.replace('v','')
    github.rest.git.getRef({
      owner,
      repo,
      ref: `/tags/${tag}`,
    }).then((tagRef => {
      const releaseSha = tagRef.data.object.sha
      github.rest.git.getTag({
        owner,
        repo,
        tag_sha: releaseSha,
      }).then((tag => latestRedpandaReleaseCommitHash = tag.data.object.sha))
    }))
  })).catch((error => {
    console.log(
    `Failed while getting the latest Redpanda version from GitHub \n
    ========================================= \n
    Using the fallback version defined in docusaurus.config.js \r\n
    ${error}`
    );  
  }))
  return {latestRedpandaReleaseVersion,latestRedpandaReleaseCommitHash}
})();