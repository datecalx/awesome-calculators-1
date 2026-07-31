import {readFile} from 'node:fs/promises';

import lint from 'awesome-lint/index.js';
import {createConfig} from 'awesome-lint/config.js';
import {createRules} from 'awesome-lint/rules/index.js';

// Load default awesome-lint rules, but filter out 'awesome-github'.
// The 'awesome-github' rule requires network access to query the GitHub API
// for repository details, metadata, and status, which is skipped for fast local runs.
const localRules = createRules().filter(([rule]) => rule.name !== 'remark-lint:awesome-github');

// Run the localized linter on README.md to catch general awesome-list style violations
await lint.report({
	config: createConfig(localRules),
	filename: 'README.md',
});

// Perform additional custom audits on README.md to ensure the logo is properly aligned and cleared.
// These checks prevent markup rendering issues where markdown horizontal rule extensions intersect with the logo.
const readme = await readFile('README.md', 'utf8');

// Find the index of the right-aligned logo image element
const logoPosition = readme.indexOf('<img src="media/logo.svg" align="right"');

// Find the index of the H1 heading (e.g., "# My Awesome List")
const headingPosition = readme.search(/^# /m);

// Slice the text content starting from the logo element
const contentAfterLogo = readme.slice(logoPosition);

// Find the index of the subsequent H2 heading ("## Some Section") following the logo
const nextHeadingPosition = contentAfterLogo.search(/^## /m);

// Enforce that the right-aligned logo must appear AFTER the H1 heading.
// If the logo precedes the H1, markdown processors might render the heading line crossing through the logo.
if (logoPosition !== -1 && headingPosition !== -1 && logoPosition < headingPosition) {
	throw new Error(
		'Place the right-aligned logo after the H1 so the heading rule cannot cross it.',
	);
}

// Enforce that the right-aligned logo's floating layout is cleared via "<br clear="right">" перед any subsequent H2 headings.
// Without clearing, subsequent structural lines (like H2 dividers) will clip or overlap with the floated logo image.
if (
	logoPosition !== -1
	&& nextHeadingPosition !== -1
	&& !contentAfterLogo
		.slice(0, nextHeadingPosition)
		.includes('<br clear="right">')
) {
	throw new Error(
		'Clear the right-aligned logo before the next heading so its rule cannot cross it.',
	);
}
