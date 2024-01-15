// request => MIDDLEWARE => response (function)
// next - collback func
const logger = (req, res, next) => {
    console.log('ursl =>', req.url);
    console.log('params =>', req.params);
    console.log('method =>', req.method);
    next(); //without this will bw stuck
};


// this is a middleware


//authorization check
const auth = (req, res, next) => {
    const {admin} = req.query;
    if(admin == 'john'){
        next();
    }else{
        res.send('not authorized')
    }
}
//....3001/products?admin=john ==> autorized


module.exports = {
    logger,
    auth,    
}