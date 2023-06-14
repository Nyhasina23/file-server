const jwt = require('jsonwebtoken');

//Middleware
exports.authenticateToken = async(req, res, next) => {
    const head = await req.headers['authorization'];
    if (!head) {
        // res.status(403).send("you must send token");
    } else {
        const token = head.split(' ')[1];
        jwt.verify(token, process.env.SECRET, (err) => {
            // if (err) {
            //     res.status(403).send("token invalid");
            // } else {
            next();
            // }
        })
    }
}