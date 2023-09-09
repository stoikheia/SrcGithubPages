# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Push with Deployment by Github Actions

- Just `git push` the commit to repository
- It should be granted by `PAT`
  1. Gneerate a PAT
     - Developer Settings > Personal access tokens > Fine-grained tokens
       - Generate a PAT
       - `Only secret repositories` = your git hub pages repository
       - `Permissions`
         - `Repository permissions`
           - Set `Contents` = `Access: Read and write`
     - or use `classic Token` to simplify
  2. repo Settings > Security > Secrets and variables > Actions
     - Set PAT into Repository secrets

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
