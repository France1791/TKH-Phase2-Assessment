import express from "express";
import prisma from "../db/index.js";
const router = express.Router();

// Create the routes here

//- [ ] Able to Get all Active Users
router.get("/", async (req, res) => {
  try {
    const allActiveUsers = await prisma.user.findMany({
      where: {
        isActive: true,
      },
    });
    res.status(200).json({
      success: true,
      users: allActiveUsers,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: "something went wrong",
    });
  }
});


//- [ ] Able to Get all Admin Users
router.get("/admins", async (req, res) => {
    try {
      const allActiveUsers = await prisma.user.findMany({
        where: {
          isAdmin: true,
        },
      });
      res.status(200).json({
        success: true,
        users: allActiveUsers,
      });
    } catch (err) {
      res.status(500).json({
        success: true,
        message: "something went wrong",
      });
    }
  });

//- [ ] Able to Create a User
router.post("/", async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        ...req.body
      },
    });
    res.status(201).json({
      success: true,
      message: "user created",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
    console.log(err);
  }
});


//- [ ] Able to Edit a User
router.put("/:id", async (req, res) => {
    try {
      const newUser = await prisma.user.update({
        where:{
            id:parseInt(req.params.id)
        },
        data:{
            ...req.body
        }
      });
      res.status(200).json({
        success: true,
        message: "edit successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
      console.log(err);
    }
  });



//- [ ] Able to Delete a User

router.delete("/:id", async (req, res) => {
    try {
      const newUser = await prisma.user.delete({
       where:{
        id:parseInt(req.params.id)
       }
      });
      res.status(200).json({
        success: true,
        message: "user deleted",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
      console.log(err);
    }
  });

export default router;