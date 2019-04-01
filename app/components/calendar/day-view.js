import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
    classNames: ['calendar-day'],

    dayOfTheWeek: computed('date', function() {
        return moment(this.date, 'YYYYMMDD').format('dddd');
    }),

    displayedDate: computed('date', function() {
        return moment(this.date, 'YYYYMMDD').format('Do MMM');
    })
});
