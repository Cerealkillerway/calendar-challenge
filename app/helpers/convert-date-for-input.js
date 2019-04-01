import { helper } from '@ember/component/helper';


export function convertDateForInput(params/*, hash*/) {
    if (params[0] === undefined) {
        return moment().format('YYYY-MM-DD');
    }

    return moment(params[0], 'YYYYMMDD').format('YYYY-MM-DD');
}


export default helper(convertDateForInput);
