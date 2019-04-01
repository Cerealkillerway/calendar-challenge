'use strict';

const moment = require('moment');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodbUri = 'mongodb://localhost:27017/calendar-challenge';
const Schema = mongoose.Schema;

console.log('starting dev api...');


const EventSchema = new Schema({
    startDate: String,
    endDate: String,
    title: String,
    description: String,
    owner: String
});
let Event = mongoose.model('Event', EventSchema);



module.exports = function(app) {
    mongoose.connect(mongodbUri, {useNewUrlParser: true});
    app.use(bodyParser.json());

    app.get('/api/events/:day', function(req, res) {
        // here api is supposing to receive always the first day of the current week as day parameter
        // which is not actually guaranteed...
        let endDate = moment(req.params.day, 'YYYYMMDD').add(7, 'days').format('YYYYMMDD');
        let query = {
            $and: [
                {
                    startDate: {
                        $gte: req.params.day
                    }
                },
                {
                    endDate: {
                        $lt: endDate
                    }
                }
            ]
        }

        // send back events ordered by startDate
        Event.find(query).sort('startDate').exec(function(error, events) {
            if (error) {
                throw error;
            }
            res.json({events: events});
        })
    });

    app.post('/api/events/create', function(req, res) {
        Event.create(req.body, function(error, small)  {
            if (error) {
                throw error
            }
            res.status(200).send('creation ok');
        });
    });

    app.put('/api/events/update', function(req, res) {
        /* data received:
        {
            data: data,
            id: event._id
        }*/

        Event.findOneAndUpdate({_id: req.body.id}, req.body.data, function(error, result) {
            if (error) {
                throw error;
            }
            res.status(200).send('updated ok');
        });
    })
};
