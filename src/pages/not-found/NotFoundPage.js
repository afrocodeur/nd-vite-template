import { Div, H1, P } from 'native-document/elements';
import { Link } from 'native-document/router';
import { tr } from 'native-document/i18n';

import './not-found.css';

export default function NotFoundPage() {
    return Div({ class: 'not-found' }, [
        H1({ class: 'not-found__code' }, '404'),
        P({ class: 'not-found__title' }, tr('Page not found')),
        P({ class: 'not-found__description' }, tr('The page you\'re looking for doesn\'t exist.')),
        Link({ class: 'not-found__link', href: '/' }, ['← ', tr('Back to home')]),
    ]);
}