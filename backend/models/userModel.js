const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AddressSchema = mongoose.Schema({
  city: String,
  province: String,
  zip: String,
});

const ContactSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phone: [String],
});

const SchoolDetailSchema = mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  marks: String,
});

const UniDetailSchema = mongoose.Schema({
  uniName: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  gradYear: {
    type: Number,
    required: true,
  },
});

const EduDetailSchema = mongoose.Schema({
  school: {
    type: SchoolDetailSchema,
    required: true,
  },
  uni: {
    type: UniDetailSchema,
    required: true,
  },
});

const AdditionalDetailSchema = mongoose.Schema({
  socialLinks: [String],
  interests: [String],
  talents: [String],
  skills: [String],
  about: {
    type: String,
  },
});

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: AddressSchema,
    contact: {
      type: ContactSchema,
      required: true,
    },
    eduDetail: {
      type: EduDetailSchema,
      required: true,
    },
    additionalDetail: AdditionalDetailSchema,
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // Possible values: user | admin
    },
    points: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//encrypt passfor
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10); //higher the value, more secure is the crypt
  this.password = await bcrypt.hash(this.password, salt);
});

//for decrypting password:
// this.password comes from DB
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema); //documment name(plural)

module.exports = User;
