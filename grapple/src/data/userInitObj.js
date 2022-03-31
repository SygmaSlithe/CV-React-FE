const userInitObj = {
  fname: "",
  lname: "",
  userId: "",
  password: "",
  confirmPassword: "",
  address: {
    city: "",
    province: "",
    zip: "",
  },
  contact: {
    email: "",
    phone: [],
  },
  eduDetail: {
    school: {
      schoolName: "",
      marks: "",
    },
    uni: {
      uniName: "",
      degree: "",
      gradYear: 0,
    },
  },
  additionalDetail: {
    socialLinks: [],
    interests: [],
    talents: [],
    skills: [],
    about: "",
  },
  isAdmin: false,
  pic: "",
  acceptTerms: false,
};

export default userInitObj;
