const express = require('express');
const router = express.Router();
const employee = require('../model/employee');

// Adds new employee
router.post('/employee', function (req, res, next) {
    employee.create(req.body).then(function (employee) {
        res.send(employee);
    }).catch(next);

});
// upadtes the employee
router.put('/employee/:id', function (req, res, next) {
    employee.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        employee.findOne({ _id: req.params.id }).then(function (employee) {
            res.send(employee);
        });
    }).catch(next);

});

// delete a employee from the db
router.delete('/employee/:id', function (req, res, next) {
    employee.findByIdAndRemove({ _id: req.params.id }).then(function (employee) {
        res.send(employee);
    }).catch(next);
});


// get a employee by id from the db
router.get('/employee/:id', function (req, res, next) {
    employee.findOne({ _id: req.params.id }).then(function (employee) {
        res.send(employee);
    }).catch(next);
});

// get all employeefrom the db
router.get('/employee', function (req, res, next) {


    employee.find({}).then(function (employees) {
        res.send(employees);
    }).catch(next);
});

module.exports = router;