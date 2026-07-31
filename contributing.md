# Contribution Guidelines

Thank you for helping keep Awesome Calculators focused, trustworthy, and current.

## Before Suggesting an Application

Please search the list and existing pull requests first. This is a curated list, not a directory, so an application should be something you have used or evaluated carefully enough to recommend.

An application is eligible when it:

- Accepts input and produces calculated results as a primary capability.
- Is reachable, functional, documented, and available with an English interface.
- Is useful, distinctive, authoritative, popular, or a strong open-source implementation.
- Has first-party evidence for its platforms, pricing, license, and source availability.
- Is a user-facing web, desktop, mobile, browser-extension, built-in, launcher, or command-line application.

Do not submit:

- Libraries, APIs, SDKs, code snippets, spreadsheets, templates, articles, tutorials, videos, or communities.
- Thin SEO pages, link collections without their own calculators, or applications dominated by intrusive advertising.
- Dead, deprecated, archived, or undocumented projects.
- Individual pages from a calculator collection that is already listed, unless the standalone calculator is unusually authoritative or capable.
- Multiple near-identical applications in one pull request.

Mature but inactive applications that remain usable may be proposed for [`unmaintained.md`](unmaintained.md), not the main README.

## Entry Format

Add one application per pull request, alphabetically within the best-fitting category:

```markdown
- [Application](https://example.com/) - Objective reason it is useful. `Web` `macOS` · **Price:** [US$10 one-time](https://example.com/pricing) · **License:** Proprietary.
```

For open-source software:

```markdown
- [Application](https://example.com/) - Objective reason it is useful. `Web` `Linux` · **Price:** Free · **License:** [MIT](https://github.com/example/app/blob/main/LICENSE) · **Source:** [GitHub](https://github.com/example/app).
```

Use the product's own currency and exact current price. Use `from` when several exact plans are available. Supported pricing labels include `Free`, `Freemium`, `Free trial`, `one-time`, `month`, and `year`. Link every non-free price to a first-party pricing page; if no exact current price can be verified, the application is not ready to add.

Use SPDX license identifiers for open-source software. Use `Proprietary` when source code is not distributed under an open-source license. A public repository is not enough by itself; verify its license file.

Available platform labels include `Web`, `macOS`, `Windows`, `Linux`, `iOS`, `iPadOS`, `Android`, `Browser extension`, and `CLI`. Add a region label such as `US` or `UK` when formulas depend on local rules.

Descriptions must be concise, objective, start with an uppercase letter, and end with a period. Avoid marketing claims such as “best,” “beautiful,” or “revolutionary.”

## Pull Request

Complete the pull request template, disclose any affiliation, and explain why the application is worth recommending. Keep unrelated changes in separate pull requests.

Run the validation before submitting:

```sh
npm install
npm test
```

By participating, you agree to follow the [Code of Conduct](code-of-conduct.md).
