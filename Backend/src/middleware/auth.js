import Users from "../models/user.js";
import jwt from "jsonwebtoken";

const Auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; 

        if (!token) {
            return res.status(403).json({ 
                message: "NO TOKEN PROVIDED" 
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY)
        const user = await Users.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ 
                message: "USER NOT FOUND"
            });
        }

        req.user = user;
        next(); 
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
};

export default Auth;
