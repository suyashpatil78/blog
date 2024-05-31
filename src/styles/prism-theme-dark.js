export default `
	::selection {
		background: blueviolet;
	}

	kbd {
		padding: 4px 8px;
		border: 1px solid #e3e8ff;
		border-radius: 4px;
		font-size: 1rem;
		margin: 0px 4px;
	}

	code[class*='language-'],
	pre[class*='language-'] {
		color: #e3e8ff;
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
		background: rgba(255, 255, 255, 0.09);
	}

	pre[class*='language-']::selection,
	pre[class*='language-'] ::selection,
	code[class*='language-']::selection,
	code[class*='language-'] ::selection {
		background: rgba(255, 255, 255, 0.09);
	}

	pre[class*='language-'] {
		padding: 1em;
		margin: 0.5em 0 1.5em 0;
		overflow: auto;
		border-radius: 0.3em;
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background-color: rgba(255, 255, 255, 0.05);
	}

	:not(pre) > code[class*='language-'] {
		color: #84ffff;
		padding: 0.1em;
		border-radius: 0.3em;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: rgba(227,232,255,0.5);
	}

	.token.punctuation {
		color: rgba(227,232,255,0.6);

	.namespace {
		opacity: 0.7;
	}

	.token.property,
	.token.tag,
	.token.boolean,
	.token.number {
		color: #82aaff;
	}

	.token.constant,
	.token.symbol,
	.token.deleted {
		color: #c792ea;
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.url,
	.token.inserted {
		color: #c3e88d;
	}

	.token.entity {
		color: rgba(227,232,255,0.7);
		background: rgba(255, 255, 255, 0.05);
	}

	.token.atrule,
	.token.attr-value {
		color: #80cbc4;
	}

	.token.keyword {
		color: #f07178;
		font-family: 'Cascadia Code';
	}

	.token.function,
	.token.class-name {
		color: #ffcb6b;
	}

	.token.regex,
	.token.important,
	.token.variable {
		color: #f78c6c;
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
		background-color: #393939;
		display: block;
		margin-right: -1em;
		margin-left: -1em;
		padding-right: 1em;
		padding-left: 0.75em;
		border-left: 0.25em solid #f78c6c;
	}

	.gatsby-highlight {
		background-color: rgba(255, 255, 255, 0.05);
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
