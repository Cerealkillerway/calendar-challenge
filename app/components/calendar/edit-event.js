import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';


export default Component.extend({
    classNames: ['quake-console'],
    elementId: 'edit-event-form',

    editEvents: service(),

    convertDateForInput: computed('event-startDate', function(date) {
        return moment(date, 'YYYYMMDD').format('YYYY-MM-DD');
    }),


    actions: {
        closeEditor() {
            this.editEvents.closeEventEditor();
        },

        confirmEditor() {
            let data = {
                startDate: moment(this.$('#event-start-date').val(), 'YYYY-MM-DD').format('YYYYMMDD'),
                endDate: moment(this.$('#event-end-date').val(), 'YYYY-MM-DD').format('YYYYMMDD'),
                title: this.$('#event-title').val(),
                description: this.$('#event-description').val(),
                owner: this.$('#event-owner').val()
            }

            if (this.event._id) {
                // updating exisiting event
                this.editEvents.updateEvent(this.event, data);
            }
            else {
                // creating new event
                this.editEvents.createEvent(data, this.weekDays);
            }
        }
    }
});
