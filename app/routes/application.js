import Route from '@ember/routing/route';


export default Route.extend({
    redirect (model, transition) {
        if (transition.to.params.day === undefined) {
            this.transitionTo('agend.week', moment().format('YYYYMMDD'));
        }
    }
});
