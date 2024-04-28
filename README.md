Turn your Obsidian Vault to a LLM powerhouse: Craft readable and effective LLM prompts by infusing your Obsidian notes into them. Harness new insights, evolve content, reintegrate seamlessly.

StoreGPT promotes a specific way of using LLMs that encourages you to build structured knowledge around your project. This structured approach is beneficial for you, aids in clearer communication with others, and ensures that your content remains usable with any future AI systems.

# How it works
1. Create a prompt using a ```sg``` code block and parameterize it with ```{{mustache placeholders}}```.
2. Define the value of the placeholders in your frontmatter section. These can be either static values or links within your Obsidian vault.
3. Copy the resolved ```sg``` block and paste it into ChatGPT or another LLM.

## Obsidian links content resolution
- You can target a specific section in your file by using ```#```. Example: \[\[my file#header1\]\].
- If the resolved content is another ```sg``` block, this new ```sg``` block is resolved again using the frontmatter of the host note.

## Video
![Texte alternatif](StoreGPT-demo.gif)
## Examples
**Step 1:**

\-\-\-

audio-transcript: \[\[project-x/my-whisper-transcript\]\]

\-\-\-

```sg
# Context
I'm trying to define the essence of my project. I did it by recording a 15 min audio of myself.

# Your task
Transform my AudioTranscript into a structured documentation and produce a markdown document using the following structure: context, problematic, solution, main features.

# AudioTranscript
{{audio-transcript}}
```
Then enrich your Obsidian Vault with the new documentation ```project description.md```.

**Step 2:**

\-\-\-

project-description: \[\[project-x/project description\]\]
cool-names: \[\[project-x/brainstormings#best names\]\]

\-\-\-

```sg
# Context
I'm looking for a name for my project.

## Project description
{{project-description}}

# Your task
Your brainstorm 5 project name proposition, I give you quick feedback for your next propositions, we reiterate in an infinite loop. Inspire your propositions on the ProjectNameIdeas that I've liked so far.

# ProjectNameIdas
{{cool-names}}
```
Then enrich your "best-names.md" files in order to refine your brainstorming for later use.

Continue iterating on your project for:
- **Communications** based on ```project description```
  - metaphor research
  - linkedin posts
  - pitches
- **Specifications** based on ```project description```
  - feature descriptions / stories
  - use cases brainstorming
- **Programming** based on ```project description``` and ```feature descriptions```
  - generate code for a specific feature
  - discuss solution designs

# StoreGPT's approach to LLM usage
- **Avoid repeating yourself when prompting**: Same project, same LLM resources. Keep your LLM assets in a versionable project repository and share them with your team.
- **Future-Proof Knowledge**: Adopt an approach to using LLMs that emphasizes creating structured knowledge and prompts for your projects. Importantly, store this information in an open, sustainable format that will be compatible with any future AI systems.
- **Simplify prompt design**: Utilize placeholders to make the structure of your prompts clutter-free, readable, and reusable.
- **Controlled Context for Better Performance**: Gain precise control over the information you introduce into your LLM context to optimize performance. Automatic methods like Retrieval-Augmented Generation don’t offer the necessary control to fully harness your LLM’s potential.
