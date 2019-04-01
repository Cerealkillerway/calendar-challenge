import Controller from '@ember/controller';


export default Controller.extend({    
    actions: {
        swapWeek(date) {
            this.transitionToRoute('agend.week', date);
        }
    }
});
