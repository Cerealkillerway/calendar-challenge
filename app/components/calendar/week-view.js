import Component from '@ember/component';
import { A } from '@ember/array';
import ArrayProxy from '@ember/array/proxy';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';


export default Component.extend({
    editEvents: service(),

    weekDays: computed('day', 'events', function() {
        let weekDays = ArrayProxy.create({content: A([])});
        let startDay = moment(this.day, 'YYYYMMDD').startOf('isoWeek');

        for (let i = 0; i < 7; i++) {
            let j = 0;
            let dayObject = {
                day: moment(startDay).add(i, 'days').format('YYYYMMDD'),
                events: ArrayProxy.create({content: A([])})
            };

            while ((j < this.events.length)) {
                if (this.events[j].startDate === dayObject.day) {
                    let eventObject = {
                        event: this.events[j],
                        eventIndex: j
                    };

                    this.editEvents.set('eventIndex', j)
                    dayObject.events.pushObject(eventObject);
                }
                j++;
            }

            weekDays.pushObject(dayObject);
        }

        return weekDays;
    }),


    actions: {
        setWeek(direction) {
            let startDay;

            if (direction > 0) {
                startDay = moment(this.weekDays.objectAt(this.weekDays.length - 1).day, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
            }
            else {
                startDay = moment(this.weekDays.objectAt(0).day, 'YYYYMMDD').subtract(7, 'days').format('YYYYMMDD');
            }

            this.swapWeek(startDay);
        },

        addEvent() {
            this.editEvents.openEmptyEditor();
        }
    }
});
