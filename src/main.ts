import { Plugin } from 'obsidian';
import SGBlock from "./sgBlock";

// Remember to rename these classes and interfaces!

interface StoreGPTPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: StoreGPTPluginSettings = {
	mySetting: 'default'
}

export default class StoreGPTPlugin extends Plugin {
	settings: StoreGPTPluginSettings;

	async onload() {
		await this.loadSettings();

		new SGBlock(this);
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
