import {Div, Button, Span, H1, P, Code, Img} from 'native-document/elements';
import { SvgSvg, SvgPath } from 'native-document/src/core/elements/svg';
import { Observable } from 'native-document';

import './home.css';

export default function HomePage() {
    const count = Observable(0);

    const increment = () => count.$value++;
    const decrement = () => count.$value--;

    return Div({ class: 'home' }, [
        Div({ class: 'home__logo' },
            Img('logos/nd-logo-classic.svg', { width: 90 }),
        ),
        H1({ class: 'home__title' }, [
            'Welcome to ',
            Span('NativeDocument'),
        ]),
        P({ class: 'home__subtitle' }, [
            'Edit ',
            Code('src/pages/Home/Home.js'),
            ' to get started.',
        ]),
        Div({ class: 'home__counter' }, [
            Button({ class: 'home__counter-btn' }, '−')
                .nd.onClick(decrement),
            Span({ class: 'home__counter-value' }, count),
            Button({ class: 'home__counter-btn' }, '+')
                .nd.onClick(increment),
        ]),
        P({ class: 'home__hint' }, [
            'count is reactive — powered by ',
            Code('Observable'),
        ]),
    ]);
}