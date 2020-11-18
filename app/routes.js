// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.get('/eligible-0-backend', function (req, res) {
    switch (req.session.data['elig-england']) {
        case "wales":
            res.redirect('wales-info');
            break;
        default:
            res.redirect('eligible-1');
            break;
    }
});

router.get('/eligible-1-backend', function (req, res) {
    switch (req.session.data['elig-employed']) {
        case "unemployed":
            res.redirect('not-eligible');
            break;
        default:
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
    switch (req.session.data['elig-benefits']) {
        case "no":
            req.session.data['elig-discretionary'] = "true";
            res.redirect('may-be-eligible');
            break;
        default:
            req.session.data['elig-discretionary'] = "false";
            res.redirect('may-be-eligible');
            break;
    }
});

module.exports = router;
