// Import Config

    // Import Express
    const express = require('express')

    // Import Body Parser
        const bodyParser = require('body-parser')

    // Import Firebase Admin
        const admin = require('firebase-admin')

    // Import Firebase Firestore
        const { getFirestore } = require('firebase-admin/firestore')

    // Import Firebase Service Account
        const serviceAccount = require('../db/serviceAccountKey.json')

    // Import CORS
        const cors = require('cors');

// Module Exports

    module.exports = {
        express,
        bodyParser,
        admin,
        getFirestore,
        serviceAccount,
        cors
    }