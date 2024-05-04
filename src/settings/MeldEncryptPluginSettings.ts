import { IFeatureInplaceEncryptSettings } from "src/features/feature-inplace-encrypt/IFeatureInplaceEncryptSettings";
import { IFeatureWholeNoteEncryptSettings } from "src/features/feature-whole-note-encrypt/IFeatureWholeNoteEncryptSettings";

export interface IMeldEncryptPluginSettings {
	confirmPassword: boolean;
	rememberPassword: boolean;
	rememberPasswordTimeout: number;
	rememberPasswordLevel: string;

	featureWholeNoteEncrypt : IFeatureWholeNoteEncryptSettings;
	featureInplaceEncrypt : IFeatureInplaceEncryptSettings;
}

