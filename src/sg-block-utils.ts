export function getVariables(content: string): Set<string> {
	const regex = /{{([\w-]+)}}/g; // Modifié pour inclure des tirets dans les noms de variables
	let match;
	const variables = new Set<string>();

	while ((match = regex.exec(content)) !== null) {
		variables.add(match[1]);
	}
	return variables;
}

export function getSgBlocContent(content: string): string | undefined {
	// Modification de l'expression régulière pour ignorer les espaces avant et après le bloc `sg`
	const regex = /^\s*```sg\n([\s\S]*?)\n```\s*$/;
	const correspondance = content.match(regex);
	if (correspondance) {
		return correspondance[1].trim(); // Retourne le contenu du bloc sg, en retirant les espaces de début et de fin
	}
	return undefined; // Retourne undefined si le texte n'est pas un bloc sg
}

export function removeFrontmatter(content: string) {
	// Cette expression régulière cherche les parties encadrées par "---" au début du texte
	const regex = /^---[\s\S]+?---\n?/;
	// Remplace le frontmatter par une chaîne vide s'il est trouvé
	return content.replace(regex, '');
}

