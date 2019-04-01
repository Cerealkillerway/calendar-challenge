import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';


module('Integration | Component | event-view', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        assert.expect(3);

        this.set('event', {
            startDate: '20190325',
            endDate: '20190330',
            title: 'aaa',
            description: 'bbb',
            owner: 'ccc'
        });
        this.set('position', 1);
        this.set('eventIndex', 0);
        await render(hbs`{{calendar/event-view event=this.event position=this.position eventIndex=this.eventIndex}}`);

        assert.equal(this.element.querySelector('div.event-title').textContent.trim().substring(0, 3), 'aaa', 'title is aaa as expected');
        assert.equal(this.element.querySelector('div.event-description').textContent.trim().substring(0, 3), 'bbb', 'description is bbb as expected');
        assert.equal(this.element.querySelector('div.event-owner').textContent.trim().substring(0, 3), 'ccc', 'owner is ccc as expected');
    });
});
