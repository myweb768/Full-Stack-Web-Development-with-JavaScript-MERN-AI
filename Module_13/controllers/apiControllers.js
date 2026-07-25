export const homeController = (req, res)=>{
    return res.status(200).json({
          "success": true,
         "message": "Welcome to Express.js API"
    })
};

export const aboutController = (req, res)=>{
    return res.status(200).json({
          "success": true,
         "message": "This is the About API"
    })
};

export const contactController = (req, res)=>{
    return res.status(200).json({
          "success": true,
         "email": "support@example.com",
        "phone": "+8801700000000" 
    })
};

export const servicesController = (req, res)=>{
    return res.status(200).json({
          "success": true,
         "services": [
            "Web Development",
            "Mobile App Development",
            "UI/UX Design"

  ]
    })
};

export const notFoundController = (req, res)=>{
    return res.status(404).json({
            "success": false,
            "message": "Page not found"
    })
}

export const deshboardController = (req, res)=>{
    return res.status(200).json({
            "success": true,
            "message": "Welcome to the dashboard",
            "user": req.user
    })
};