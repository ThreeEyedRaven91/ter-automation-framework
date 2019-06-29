import en from './en';
import { TranslateService } from 'ter-localization';

TranslateService.setConfig(require('./config'));
TranslateService.setTranslate({
  en,
});

TranslateService.setLanguage('en');

export default TranslateService;