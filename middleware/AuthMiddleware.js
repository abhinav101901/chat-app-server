import jwt from "jsonwebtoken";

const secret = "ab$#@hi&*na@*#&V";
const authMiddleWare = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
       
        if (token) {
            const decoded = jwt.verify(token, secret);
            console.log(decoded)
            req.body._id = decoded?.id;
        }
        next();
    } 
    catch (error) {
        console.log(error);
    }
};

export default authMiddleWare;
