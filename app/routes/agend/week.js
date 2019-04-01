import Route from '@ember/routing/route';
import $ from 'jquery';


export default Route.extend({
    model(params) {
        return new Promise((resolve, reject) => {
            $.getJSON(`http://localhost:4200/api/events/${params.day}`)
            .done((data) => {
                let result = {
                    params: params,
                    events: data.events
                };

                resolve(result);
            })
            .fail(() =>  {
                reject('server error');
            });
        });
    }
});
