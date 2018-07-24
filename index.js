import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
import I18n from 'react-native-i18n';
import './shim.js'
// Import all locales
import en from './App/locales/en.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en
};
AppRegistry.registerComponent('reactpress', () => App)
