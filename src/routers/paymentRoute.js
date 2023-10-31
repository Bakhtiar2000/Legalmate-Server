const express = require('express');
// const { ObjectId } = require('bson');
const SSLCommerzPayment = require('sslcommerz-lts');
const { paymentCollection } = require('../collection/collection');

// const baseURL: 'http://localhost:5173/',
// const baseURL: 'https://legalmate-server.vercel.app/',

const store_id = 'hirew6501a99532e47'
const store_passwd = 'hirew6501a99532e47@ssl'
const is_live = false
const paymentRoute = express.Router();
// const tran_id = new ObjectId().toString();

paymentRoute.post('/', async (req, res) => {
    // console.log(req.body)
    try {
        const payment = req.body;
        console.log("payment", payment)
        const data = {
            total_amount: payment.amount,
            currency: 'BDT',
            tran_id: payment.tran_id,
            success_url: `http://localhost:5000/payment/success/${payment.tran_id}`,
            fail_url: 'http://localhost:5000/payment/fail',
            cancel_url: 'http://localhost:5000/payment/fail',
            ipn_url: 'http://localhost:5173/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: 'Customer Name',
            cus_email: 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(apiResponse => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            const paymentHistory = {
                attorneyID: payment.attorneyID,
                attorneyName: payment.attorneyName,
                attorneyEmail: payment.attorneyEmail,
                clintName: payment.clintName,
                clintEmail: payment.clintEmail,
                practiceArea: payment.practiceArea,
                amount: payment.amount,
                tran_id: payment.tran_id,
                isPaid: false
            }
            console.log("paymentHistory", paymentHistory)
            const storePaymentHistory = paymentCollection(paymentHistory).save();
            res.send({ url: GatewayPageURL })
        });

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

paymentRoute.post('/success/:tran_id', async (req, res) => {
    const tran_id = req.params.tran_id;
    console.log(tran_id)
    const updatePaymentData = await paymentCollection.findOneAndUpdate(
        {
            tran_id: tran_id,
        },
        {
            $set: { isPaid: true },
        },
        { new: true }

    )
    console.log("updatePaymentData", updatePaymentData.attorneyID)
    res.redirect(`http://localhost:5173/attorney_details/${updatePaymentData.attorneyID}`)
})

paymentRoute.post('/fail', async (req, res) => {
    console.log("payment fail")
    res.redirect('http://localhost:5173/')
})
paymentRoute.get('/history', async (req, res) => {
    try {
        res.status(200).send(await paymentCollection.find({isPaid: true }).sort({ purchaseDate: -1 }))
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

paymentRoute.get('/history/:email', async (req, res) => {
    console.log("abcd",req.params.email)
    console.log("payment")
    try {
        const payment = await paymentCollection.find(
            {
                clintEmail: req.params.email,
                isPaid: true
            }).sort({ paymentDate: -1 })
        console.log(payment)
        res.status(200).send(payment)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

module.exports = paymentRoute;