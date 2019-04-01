import Service from '@ember/service';
import { set } from '@ember/object';
import $ from 'jquery';


export default Service.extend({
    setCurrentEventInEditor(event) {
        this.set('currentEvent', event);
        $('#edit-event-form').slideDown(300);
    },

    closeEventEditor() {
        $('#edit-event-form').slideUp(200);
    },

    openEmptyEditor() {
        this.set('currentEvent', {});
        $('#edit-event-form').slideDown(300);
    },

    createEvent(data, weekDays) {
        let dayObject = weekDays.findBy('day', data.startDate);

        dayObject.events.pushObject({
            event: data,
            eventIndex: this.eventIndex
        });

        this.incrementProperty('eventIndex');
        this.set('currentEvent', {});
        $('#edit-event-form').slideUp(200);

        // make api call to persist event
        $.ajax({
            type: 'POST',
            url: 'http://localhost:4200/api/events/create',
            data: JSON.stringify(data),
            dataType: 'json',
            contentType: 'application/json'
        });
    },

    updateEvent(event, data) {
        for (const key in data) {
            let value = data[key];

            set(event, key, value);
        }

        this.set('currentEvent', {});
        $('#edit-event-form').slideUp(200);

        // make api call to persist changes
        $.ajax({
            type: 'PUT',
            url: 'http://localhost:4200/api/events/update',
            data: JSON.stringify({
                data: data,
                id: event._id
            }),
            dataType: 'json',
            contentType: 'application/json'
        });
    }
});
