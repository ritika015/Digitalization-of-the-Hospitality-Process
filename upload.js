const express = require('express');
const multer = require('multer');
const path = require('path');
const csv = require('csv-parser');
const fs = require('fs');

const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).fields([{ name: 'csv1', maxCount: 1 }, { name: 'csv2', maxCount: 1 }]);

// Check file type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /csv/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: CSV Files Only!');
    }
}

// Upload route
router.get('/', (req, res) => res.render('index'));

router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('index', {
                msg: err
            });
        } else {
            if (req.files == undefined) {
                res.render('index', {
                    msg: 'Error: No File Selected!'
                });
            } else {
                const groupInfo = [];
                const hostelInfo = [];

                fs.createReadStream(req.files['csv1'][0].path)
                    .pipe(csv())
                    .on('data', (row) => groupInfo.push(row))
                    .on('end', () => {
                        fs.createReadStream(req.files['csv2'][0].path)
                            .pipe(csv())
                            .on('data', (row) => hostelInfo.push(row))
                            .on('end', () => {
                                const allocation = allocateRooms(groupInfo, hostelInfo);
                                res.render('index', {
                                    msg: 'Files Uploaded and Processed!',
                                    allocation: allocation
                                });
                            });
                    });
            }
        }
    });
});

// Room allocation algorithm
function allocateRooms(groups, hostels) {
    // Implement the allocation logic here
    // Example output
    return [
        { GroupID: 101, HostelName: 'Boys Hostel A', RoomNumber: 101, MembersAllocated: 3 },
        { GroupID: 102, HostelName: 'Girls Hostel B', RoomNumber: 202, MembersAllocated: 4 }
    ];
}

module.exports = router;
