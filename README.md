# adamblake.github.io

Source for my personal website.

## Development notes

### Development Build

To serve the website locally run Hugo server with drafts enabled:

```bash
hugo server -D
```

### Theme

The site uses the [minimal theme](https://github.com/calintat/minimal) for Hugo. The theme is installed as a git submodule and can be updated by running

```bash
git submodule update --remote themes/minimal
```