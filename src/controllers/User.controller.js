import { User } from "../models/User.models.js";
import { asyncHandler } from "../utils/asyncHandler.js"


import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    const { email, firstName, lastName, userName, password } = req.body;

    if (
        [email, firstName, lastName, userName, password].some((field) =>
            field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existingUser = await User.findOne({
        $or: [{ email }, { userName }]
    })

    if (existingUser) {
        throw new ApiError(409, "This user is already exists")
    }

    const user = await User.create({
        email,
        firstName,
        lastName,
        userName,
        password,
      
    })
    const createdUser = await User.findById(user._id).select(
        "-password  -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(200).json(
        new ApiResponse(201, createdUser, "User register successfully")
    )
    // try {
    //     const extingEmail = await User.findOne({ email })
    //     const existingUser = await User.findOne({ userName })

    //     if (!existingUser && !extingEmail) {

    //     } else {

    //     }

    // } catch (error) {
    //     console.log(error)

    // }
})

export { registerUser }