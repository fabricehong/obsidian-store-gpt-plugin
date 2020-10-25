import { computePlaceHoldersMarkdownLevel, relevelMarkdownHeaders } from "./markdown-leveler";
import { getSgBlocContent, getVariables, removeFrontmatter } from "./sg-block-utils";

describe('sg-block-utils', () => {

	it('getVariables: list variables having dash', () => {
		const content = `
Voici {{bob-dylan}} !
`;

		const result = getVariables(content);
		expect(result).toStrictEqual(new Set<string>(['bob-dylan']));
	});

	it('getSgBlocContent: get exissting sg bloc', () => {
		const content = `
\`\`\`sg
mon contenu
\`\`\`
`;

		const result = getSgBlocContent(content);
		expect(result).toStrictEqual('mon contenu');
	});

	it('getSgBlocContent: bloc is no sg bloc', () => {
		const content = `
\`\`\`
mon contenu
\`\`\`
`;

		const result = getSgBlocContent(content);
		expect(result).toBeUndefined();
	});

	it('getSgBlocContent: no sg bloc', () => {
		const content = `
mon contenu
`;

		const result = getSgBlocContent(content);
		expect(result).toBeUndefined();
	});

	it('getSgBlocContent: no sg bloc', () => {
		const content = `
---
bla: 'yoyo'
---
Le vrais contenu
`.trim();

		const result = removeFrontmatter(content);
		expect(result).toStrictEqual('Le vrais contenu');
	});


});
