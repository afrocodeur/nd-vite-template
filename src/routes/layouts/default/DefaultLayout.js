import { Div, Button, Header, Main } from 'native-document/elements';
import { I18nService, tr } from 'native-document/i18n';

import './default-layout.css';

export default function DefaultLayout(children) {
    const setFr = () => I18nService.use('fr');
    const setEn = () => I18nService.use('en');

    return Div({ class: 'layout' }, [
        Header({ class: 'layout__header' }, [
            Div({ class: 'layout__lang' }, [
                Button({ class: { 'layout__lang-btn': true, 'is-active': I18nService.current.is('fr') } },
                    tr('French'),
                ).nd.onClick(setFr),
                Button({ class: { 'layout__lang-btn': true, 'is-active': I18nService.current.is('en') } },
                    tr('English'),
                ).nd.onClick(setEn),
            ]),
        ]),
        Main({ class: 'layout__main' }, children),
    ]);
}