const express = require( 'express' );
const models = require( '../utils/models' );
// eslint-disable-next-line new-cap
const router = express.Router();
const User = models.User;

router.get( '/getList', function( req, res ) {
  User.find()
    .then( function( doc ) {
      res.json( doc );
    } );
} );

module.exports = router;
