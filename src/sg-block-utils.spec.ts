import { computePlaceHoldersMarkdownLevel, relevelMarkdownHeaders } from "./markdown-leveler";
import { getCodeBloc, getVariables } from "./sg-block-utils";

describe('sg-block-utils', () => {

	it('getVariables: list variables having dash', () => {
		const content = `
Voici {{bob-dylan}} !
`;

		const result = getVariables(content);
		expect(result).toStrictEqual(new Set<string>(['bob-dylan']));
	});

	it('getCodeBloc: no code block', () => {
		const content = `mon contenu`;
		const result = getCodeBloc(content);
		expect(result).toBeUndefined();
	});

	it('getCodeBloc: normal code block', () => {
		const content = `
\`\`\`javascript
console.log('Hello, world!');
\`\`\`
`;
		const result = getCodeBloc(content);
		expect(result).toEqual({
			content: "console.log('Hello, world!');",
			blocType: 'javascript'
		});
	});

	it('getCodeBloc: sg block', () => {
		const content = `
\`\`\`sg
name: 'StoreGPT'
\`\`\`
`;
		const result = getCodeBloc(content);
		expect(result).toEqual({
			content: "name: 'StoreGPT'",
			blocType: 'sg'
		});
	});

	it('getCodeBloc: no blocktype', () => {
		const content = `
\`\`\`
name: 'StoreGPT'
\`\`\`
`;
		const result = getCodeBloc(content);
		expect(result).toEqual({
			content: "name: 'StoreGPT'",
			blocType: undefined
		});
	});

});
