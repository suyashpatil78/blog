export default `
	::selection {
		background: #feb;
	}

	kbd {
		padding: 4px 8px;
		border: 1px solid #657b83;
		border-radius: 4px;
		font-size: 1rem;
		margin: 0px 4px;
	}

	code[class*='language-'],
	pre[class*='language-'] {
		color: #657b83;
		font-family: 'Cascadia Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		font-size: 16px;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		transition: 0.4s ease;

		line-height: 1.65;

		-moz-tab-size: 2;
		-o-tab-size: 2;
		tab-size: 2;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	pre[class*='language-']::-moz-selection,
	pre[class*='language-'] ::-moz-selection,
	code[class*='language-']::-moz-selection,
	code[class*='language-'] ::-moz-selection {
		background: #eee8d5;
	}

	pre[class*='language-']::selection,
	pre[class*='language-'] ::selection,
	code[class*='language-']::selection,
	code[class*='language-'] ::selection {
		background: #eee8d5;
	}

	pre[class*='language-'] {
		padding: 1em;
		margin: 0.5em 0 1.5em 0;
		overflow: auto;
		border-radius: 0.3em;
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background-color: rgba(253,246,227,0.5);
	}

	body.dark :not(pre) > code[class*='language-'],
	body.dark pre[class*='language-'] {
		background-color: rgba(255, 255, 255, 0.05);
	}

	:not(pre) > code[class*='language-'] {
		color: #6c71c4;
		padding: 0.1em;
		border-radius: 0.3em;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #93a1a1;
	}

	.token.punctuation {
		color: #586e75;
	}

	.namespace {
		opacity: 0.7;
	}

	.token.property,
	.token.tag,
	.token.boolean,
	.token.number,
	.token.constant,
	.token.symbol,
	.token.deleted {
		color: #268bd2;
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.url,
	.token.inserted {
		color: #2aa198;
	}

	.token.entity {
		color: #657b83;
		background: #eee8d5;
	}

	.token.atrule,
	.token.attr-value {
		color: #859900;
	}

	.token.keyword {
		color: #d33682;
		font-family: 'Cascadia Code';
	}

	.token.function,
	.token.class-name {
		color: #b58900;
	}

	.token.regex,
	.token.important,
	.token.variable {
		color: #cb4b16;
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}
	.token.italic {
		font-family: 'Cascadia Code';
	}

	.token.entity {
		cursor: help;
	}

	.gatsby-highlight-code-line {
		background-color: #feb;
		display: block;
		margin-right: -1em;
		margin-left: -1em;
		padding-right: 1em;
		padding-left: 0.75em;
		border-left: 0.25em solid #f99;
	}

	.gatsby-highlight {
		background-color: rgba(253,246,227,0.5);
		border-radius: 0.3em;
		margin: 0.5em 0 1.5em 0;
		padding: 1em;
		overflow: auto;
	}

	.gatsby-highlight pre[class*="language-"] {
		background-color: transparent;
		margin: 0;
		padding: 0;
		overflow: initial;
		float: left;
		min-width: 100%;
	}
`;
