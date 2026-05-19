import { Router } from 'native-document/router';
import HomePage from "@/pages/home/HomePage";
import NotFoundPage from "@/pages/not-found/NotFoundPage";

export default Router.create({ name: 'default', mode: 'history' }, (router) => {

    router.add('/', HomePage);
    router.add('{*}', NotFoundPage);

});