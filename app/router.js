import EmberRouter from '@ember/routing/router';
import config from './config/environment';


const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});


Router.map(function() {
    this.route('agend', function() {
        this.route('week', {
            path: '/:day'
        })
    });
});


export default Router;
