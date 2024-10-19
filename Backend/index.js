const PORT = 4000;
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import productRoutes from "./Routes/productRoutes.js"
import User from "./Model/UserSchema.js";

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api", productRoutes);

// MongoDB connection
mongoose.connect("mongodb+srv://jha24978:91101%40%23abc@cluster0.lid6o.mongodb.net/e-com", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));


const fetchUser=async(req,res,next)=>{
    const token=req.header('auth-token');
    console.log("Token",token);
    
    if(!token)
    {
    res.status(401).send({
        errors:"Please authenticate using vaild token"
    })
    }
    else
    {
    try{
       const data=jwt.verify(token,'secret_ecom');
       req.user=data.user;
       next();
    }
    catch(error)
    {
        res.status(401).send({
            erorrs:"Please authenticate using vailid token"
        })
    }
    }
    }

app.post ('/addtocart',fetchUser,async (req, res) => {
    let userdata=await User.findOne({
        _id:req.user.id
    });
    userdata.cartData[req.body.itemid]+=1;
    await User.findOneAndUpdate({
        _id:req.user.id
    },
    {
        cartData:userdata.cartData
    }
)  
res.send("Added")
});

app.post ('/removeproduct',fetchUser, async (req, res) => {
    let userdata=await User.findOne({
        _id:req.user.id
    });
    
    if(userdata.cartData[req.body.itemid]>0)

    userdata.cartData[req.body.itemid]-=1;
    await User.findOneAndUpdate({
        _id:req.user.id
    },
    {
        cartData:userdata.cartData
    }
)  
res.send("Removed")
});

app.post ('/getcart',fetchUser, async (req, res) => {
    let userdata=await User.findOne({
        _id:req.user.id
        
    });
    res.json(userdata.cartData)
})

app.get("/", (req, res) => {
  res.send("Express is Running");
});

//multer for image storage 

const storage = multer.diskStorage({
    destination: "./upload/images", // Directory where images will be saved
    filename: (req, file, cb) => {
        // Use file.fieldname to avoid 'undefined'
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage
});

// Serve static images
app.use("/images", express.static('upload/images'));

// Image upload endpoint
app.post("/upload", upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    });
});

app.listen(PORT, (e) => {
    if (!e) {
        console.log(`Server running on port ${PORT}`);
    } else {
        console.log("Error", e);
    }
});
