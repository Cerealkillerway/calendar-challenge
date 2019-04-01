import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';


module('Integration | Component | day-view', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        assert.expect(4);

        this.set('date', '20190325');
        await render(hbs`{{calendar/day-view date=this.date}}`);

        assert.equal(this.element.querySelector('div.day-date').textContent.trim(), '25th Mar', 'day is 25th of March as expected');
        assert.equal(this.element.querySelector('div.day-of-the-week').textContent.trim(), 'Monday', '25th of March 2019 is a Monday as expected');

        this.set('date', '20190330');

        assert.equal(this.element.querySelector('div.day-date').textContent.trim(), '30th Mar', 'day is 30th of March as expected');
        assert.equal(this.element.querySelector('div.day-of-the-week').textContent.trim(), 'Saturday', '30th of March 2019 is a Saturday as expected');
    });

    test('dayOfTheWeek computed formats date correctly', function(assert) {
        assert.expect(2);

        const component = this.owner.factoryFor('component:calendar/day-view').create();
        component.set('date', '20190325');

        assert.equal(component.get('dayOfTheWeek'), 'Monday', 'for 20190325 computed property returns Monday as expected');

        component.set('date', '20190330');

        assert.equal(component.get('dayOfTheWeek'), 'Saturday', 'for 20190330 computed property returns Saturday as expected');
    });

    test('displayedDate computed formats date correctly', function(assert) {
        assert.expect(2);

        const component = this.owner.factoryFor('component:calendar/day-view').create();
        component.set('date', '20190325');

        assert.equal(component.get('displayedDate'), '25th Mar', 'for 20190325 computed property returns 25th Mar as expected');

        component.set('date', '20190330');

        assert.equal(component.get('displayedDate'), '30th Mar', 'for 20190330 computed property returns 30th Mar as expected');
    });
});
