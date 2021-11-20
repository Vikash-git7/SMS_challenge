const Data = require('../model/data')

const catchasync = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

const getDetailsByID = catchasync(async (req, res, next) => {
    let id = req.params.id;
    let responce = null;
    await Data.findOne({ id: id }, (err, data) => {
        responce = data;
    }).clone();
    res.status(200).json({
        status: 'success',
        responce,
    });
});

const getAllDetails = catchasync(async (req, res, next) => {
    let responce = [];
    await Data.find({}, (err, data) => {
        responce = data;
    }).clone();
    res.status(200).json({
        status: 'success',
        responce,
    });
});

const addItem = catchasync(async (req, res, next) => {
    await data.create(req.details);
    res.status(200).json({
        status: 'success',
        responce : 'successfully Added',
    });
});


const deleteItem = catchasync(async (req, res, next) => {
    let id = req.params.id;
    await Data.findOne({ id: id }, (err, data) => {
        data.remove(function (error) { })
    }).clone();
    res.status(200).json({
        status: 'success',
        responce: `${id} is removed`,
    });
});

const updateDetailsByID = catchasync(async (req, res, next) => {
    let id = req.details.id;

    await Data.findOne({ id: id }, (err, data) => {
        if (req.details.city) data.city = req.details.city;
        if (req.details.start_date) data.start_date = req.details.start_date;
        if (req.details.end_date) data.end_date = req.details.end_date;
        if (req.details.price) data.city = req.details.price;
        if (req.details.status) data.city = req.details.status;
        if (req.details.color) data.city = req.details.color;
        data.save()
    }).clone();
    res.status(200).json({
        status: 'success',
        responce: 'Successfully Updated',
    });
});

module.exports = {
    getAllDetails,
    getDetailsByID,
    addItem,
    deleteItem,
    updateDetailsByID
}