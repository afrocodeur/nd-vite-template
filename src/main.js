import {I18nService} from "native-document/i18n";
import {default as DefaultRouter} from '@/routes/routes';
import lang from "@/core/lang/lang";

import './index.css';

I18nService.init(lang);

const root = document.getElementById('root');

DefaultRouter.mount(root);