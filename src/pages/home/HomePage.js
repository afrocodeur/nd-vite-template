import { Div, Button, Span, H1, P, Code, Img } from 'native-document/elements';
import { Observable } from 'native-document';
import { tr } from 'native-document/i18n';

import './home.css';

export default function HomePage() {
    const count = Observable(0);

    const increment = () => count.$value+=2;
    const decrement = () => count.$value--;

    return Div({ class: 'home' }, [
        Div({ class: 'home__logo' },
            Img('logos/nd-logo.svg', { width: 90 }),
        ),
        H1({ class: 'home__title' }, [
            tr('Welcome to'),
            ' ',
            Span('NativeDocument'),
        ]),
        P({ class: 'home__subtitle' }, [
            tr('Edit'),
            ' ',
            Code('src/pages/home/HomePage.js'),
            tr('to get started.'),
        ]),
        Div({ class: 'home__counter' }, [
            Button({ class: 'home__counter-btn' }, '−')
                .nd.onClick(decrement),
            Span({ class: 'home__counter-value' }, count),
            Button({ class: 'home__counter-btn' }, '+')
                .nd.onClick(increment),
        ]),
        P({ class: 'home__hint' }, [
            tr('count is reactive — powered by'),
            ' ',
            Code('Observable'),
        ]),
    ]);
}