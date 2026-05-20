import { Router } from 'native-document/router';
import HomePage from '@/pages/home/HomePage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import DefaultLayout from '@/routes/layouts/default/DefaultLayout';

export default Router.create({ name: 'default', mode: 'history' }, (router) => {

    router.group('', { layout: DefaultLayout }, () => {
        router.add('/', HomePage);
        router.add('{*}', NotFoundPage);
    });

});