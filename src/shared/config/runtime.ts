import Constants from "expo-constants";
import * as ExpoLinking from "expo-linking";
import * as Updates from "expo-updates";

const appScheme = Constants.expoConfig?.scheme ?? "presentation";
const fallbackEntryUrl = `${appScheme}:///`;

const getEntryUrl = () => {
  try {
    return ExpoLinking.createURL("/");
  } catch {
    return fallbackEntryUrl;
  }
};

export interface RuntimeConfig {
  appName: string;
  appVersion: string;
  updateChannel: string;
  entryUrl: string;
}

export const runtimeConfig: RuntimeConfig = {
  appName: Constants.expoConfig?.name ?? "Sauvvitech Presentation",
  appVersion: Constants.expoConfig?.version ?? "0.1.0",
  updateChannel: Updates.channel ?? "default",
  entryUrl: getEntryUrl()
};