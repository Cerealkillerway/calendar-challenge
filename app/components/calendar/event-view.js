import Component from '@ember/component';
import { computed } from '@ember/object';
import { colors } from '../../utils/colors'
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';


export default Component.extend({
    classNames: ['day-event'],

    editEvents: service(),

    duration: computed('event.{startDate,endDate}', function() {
        return moment(this.event.endDate, 'YYYYMMDD').diff(moment(this.event.startDate, 'YYYYMMDD'), 'days') + 1;
    }),

    attributeBindings: ['style'],


    style: computed('duration', function() {
        let styleString = `width: calc(${this.duration * 14.28}% - 30px);`;
        let colorIndex = this.eventIndex % (colors.length);

        styleString = `${styleString} top: ${this.position * 105 + 77}px;`;
        styleString = `${styleString} background-color: ${colors[colorIndex].background};`
        styleString = `${styleString} border-color: ${colors[colorIndex].border};`
        styleString = `${styleString} color: ${colors[colorIndex].text};`

        return htmlSafe(styleString);
    }),


    doubleClick() {
        this.editEvents.setCurrentEventInEditor(this.event);
    }
});
