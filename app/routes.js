// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.get('/eligible-1-backend', function (req, res) {
    switch (req.session.data['elig-employed']) {
        case "unemployed":
            res.redirect('not-eligible');
            break;
        default:
            //   req.session.data['diversity-parents-completed'] = "true";
            res.redirect('eligible-2');
            break;
    }
});

router.get('/eligible-2-backend', function (req, res) {
    switch (req.session.data['elig-wfh']) {
        case "yes":
            res.redirect('not-eligible');
            break;
        default:
            res.redirect('eligible-3');
            break;
    }
});

router.get('/eligible-3-backend', function (req, res) {
    switch (req.session.data['elig-losing-income']) {
        case "no":
            res.redirect('not-eligible');
            break;
        default:
            res.redirect('eligible-4');
            break;
    }
});

router.get('/eligible-4-backend', function (req, res) {
    if(req.session.data['elig-benefits'].includes('no-benefit')) {
            res.redirect('may-be-discretionary');
    } else {
        res.redirect('may-be-eligible');
    }
});

module.exports = router;
