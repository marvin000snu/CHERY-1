import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import AWS from "aws-sdk";
const cognitoSetting = {
  userPoolID: "ap-northeast-2_4VvuIFWva",
  clientId: "7rfsjp1tu24ckfdh5jh1oeub4g",
  region: "ap-northeast-2",
  identityPoolId: "ap-northeast-2:83c93c98-451a-4ce3-a809-0b339d5dc85a",

  attribute: {
    name: "name",
    birthDate: "custom:birth_date",
    gender: "gender",
    phoneNumber: "phone_number",
    phoneNumberVerified: "phone_number_verified",
    address: "address",
    detailAddress: "custom:detail_address",
    addressType: "custom:address_type",
    postcode: "custom:postcode",
    registerPath: "custom:register_path",
    isRegisterService: "custom:isRegisterService",
    school: "custom:school",
    loginWith: "custom:login_with"
  }
};

const cognitoInfo = {
  poolData: () => ({
    UserPoolId: cognitoSetting.userPoolID,
    ClientId: cognitoSetting.clientId
  }),
  userData: (userName) => ({
    Username: userName,
    Pool: cognitoInfo.userPool()
  }),
  userPool: () =>
    new AmazonCognitoIdentity.CognitoUserPool(cognitoInfo.poolData()),
  currentUser: () => cognitoInfo.userPool().getCurrentUser(),
  cognitoUser: (userId) =>
    new AmazonCognitoIdentity.CognitoUser(cognitoInfo.userData(userId)),
  cognitoAdmin: (data) =>
    new AWS.CognitoIdentityServiceProvider({
      accessKeyId: data.accessKeyId,
      secretAccessKey: data.secretAccessKey,
      sessionToken: data.sessionToken
    })
};

const getCognitoUser = (userId) => {
  return cognitoInfo.cognitoUser(userId);
};

const getCurrentUser = () => {
  return cognitoInfo.currentUser();
};

const register = (inputUserInfo) => {
  return new Promise((resolve, reject) => {
    const userPool = cognitoInfo.userPool();
    let attributeData = [
      {
        name: cognitoSetting.attribute.name,
        value: inputUserInfo.name
      },
      {
        name: cognitoSetting.attribute.phoneNumber,
        value: "+82" + inputUserInfo.phoneNumber
      },
      {
        name: cognitoSetting.attribute.school,
        value: inputUserInfo.school
      },
      {
        name: cognitoSetting.attribute.loginWith,
        value: inputUserInfo.loginWith
      }

    ];
    let attributeList = [];

    attributeData.map((data) => {
      let cognitoUserform = {
        Name: data.name,
        Value: data.value
      };
      let cognitoUserData = new AmazonCognitoIdentity.CognitoUserAttribute(
        cognitoUserform
      );
      attributeList.push(cognitoUserData);
      return true;
    });

    userPool.signUp(
      inputUserInfo.userId,
      inputUserInfo.password,
      attributeList,
      null,
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.user);
        }
      }
    );
  });
};

const isOverlapUserid = (userId) => {
  return new Promise((resolve, reject) => {
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(
      cognitoInfo.userData(userId)
    );
    cognitoUser.confirmRegistration("123456", true, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const forgotPassword = (inputUserInfo) => {
  return new Promise((resolve, reject) => {
    AWS.config.update({ region: cognitoSetting.region });
    const params = {
      ClientId: cognitoSetting.clientId,
      Username: inputUserInfo.userName
    };
    var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    cognitoidentityserviceprovider.forgotPassword(params, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const login = (inputUserInfo) => {
  return new Promise((resolve, reject) => {
    const { userId, password } = inputUserInfo;

    const authenticationData = {
      Username: userId,
      Password: password
    };

    const cognitoUserData = cognitoInfo.userData(userId);

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(cognitoUserData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        resolve([result.idToken.jwtToken, result.accessToken.jwtToken]);
      },
      onFailure: (err) => {
        reject(err);
      },
      mfaRequired: function (codeDeliveryDetails) {
        const verificationCode = prompt("Please input verification code", "");
        cognitoUser.sendMFACode(verificationCode, this);
      },
      newPasswordRequired: function (userAttributes) {
        const formatAttributes = {
          phone_number: userAttributes.phone_number
        };
        cognitoUser.completeNewPasswordChallenge(
          password,
          formatAttributes,
          this
        );
      }
    });
  });
};

const confirmRegister = (cognitoUser, confirmCode) => {
  return new Promise((resolve, reject) => {
    if (cognitoUser === null) {
      reject(null);
    } else {
      cognitoUser.confirmRegistration(
        confirmCode,
        true,
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    }
  });
};

const resendConfirmationCode = (cognitoUser) => {
  return new Promise((resolve, reject) => {
    cognitoUser.resendConfirmationCode(function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const signOut = () => {
  const cognitoUser = cognitoInfo.currentUser();
  if (cognitoUser !== null) {
    cognitoUser.signOut();
  }
};

const getSession = () => {
  return new Promise((resolve, reject) => {
    const cognitoUser = cognitoInfo.currentUser();

    if (cognitoUser === null) {
      reject(null);
    } else {
      cognitoUser.getSession((err, result) => {
        if (err) {
          reject(null);
        } else {
          resolve(cognitoUser);
        }
      });
    }
  });
};

const getAttributes = (cognitoUser) => {
  return new Promise((resolve, reject) => {
    cognitoUser.getUserAttributes((err, result) => {
      if (err === !null) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getSessionAttributes = () => {
  return new Promise((resolve, reject) => {
    getSession()
      .then((res) => {
        getAttributes(res)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {});
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const updateAttribute = (attributeData, token) => {
  return new Promise((resolve, reject) => {
    // const SESConfig = {
    //   apiVersion: "2016-04-18",
    //   accessKeyId: "AKIAJTQK6KKBR6KTHOKA",
    //   accessSecretKey: "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",
    //   region: "ap-northeast-2"
    // };
    // AWS.config = new AWS.Config();
    AWS.config.region = "ap-northeast-2";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-northeast-2:83c93c98-451a-4ce3-a809-0b339d5dc85a"
    });
    let attributeList = [];
    attributeData.map((data) => {
      let cognitoAttributeForm = {
        Name: data.name,
        Value: data.value
      };
      let cognitoAttributeData = new AmazonCognitoIdentity.CognitoUserAttribute(
        cognitoAttributeForm
      );
      attributeList.push(cognitoAttributeData);
      return true;
    });
    const params = {
      AccessToken:token,
      UserAttributes: attributeList,
    };
    var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

    cognitoidentityserviceprovider.updateUserAttributes(
      params,
      function (err, result) {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
};

const changePassword = (inputUserInfo) => {
  return new Promise((resolve, reject) => {
    AWS.config.update({ region: cognitoSetting.region });
    const params = {
      PreviousPassword: inputUserInfo.PreviousPassword,
      ProposedPassword: inputUserInfo.ProposedPassword,
      AccessToken: inputUserInfo.AccessToken
    };
    var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    cognitoidentityserviceprovider.changePassword(
      params,
      function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      }
    );
  });
};

// const forgotPassword = (userid) => {
//     return new Promise((resolve, reject) => {
//         const cognitoUser = cognitoInfo.cognitoUser(userid)
//         cognitoUser.forgotPassword({
//             onSuccess: function (result) {
//                 // swal.fire(registerAlert.passwrodChange).then(() => {
//                 //     window.location.href = '/'
//                 // })
//             },
//             onFailure: function (err) {
//                 reject(err)
//                 if (err.code === 'CodeMismatchException') {
//                     // swal.fire(registerAlert.notConfirmCode)
//                 } else {
//                     // swal.fire(commonAlert.error)
//                 }
//             },
//             inputVerificationCode() {
//                 // const verificationCode = prompt('Please input verification code ' ,'');
//                 // const newPassword = prompt('Enter new password ' ,'');
//                 // cognitoUser.confirmPassword(verificationCode, newPassword, this);
//                 const result = {
//                     cognitoUser: cognitoUser,
//                     obj: this,
//                 }
//                 resolve(result)
//             }
//         });
//     })
// }

const confirmPassword = (inputUserInfo) => {
  return new Promise((resolve, reject) => {
    AWS.config.update({ region: cognitoSetting.region });
    const params = {
      Password: inputUserInfo.Password,
      ClientId: cognitoSetting.clientId,
      ConfirmationCode: inputUserInfo.ConfirmationCode,
      Username: inputUserInfo.Username
    };
    var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    cognitoidentityserviceprovider.confirmForgotPassword(
      params,
      function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      }
    );
  });
};






const deleteUser = (inputUserInfo) => {
  return new Promise((resolve, reject) => {
    AWS.config.update({ region: cognitoSetting.region });
    const params = {
      AccessToken: inputUserInfo.AccessToken
    };
    var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    cognitoidentityserviceprovider.deleteUser(
      params,
      function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      }
    );
  });
};

/*
const deleteUser = (cognitoUser) => {
  return new Promise((resolve, reject) => {
    cognitoUser.deleteUser(function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
*/
const getAttributeVerificationCode = (cognitoUser) => {
  return new Promise((resolve, reject) => {
    cognitoUser.getAttributeVerificationCode(
      cognitoSetting.attribute.phoneNumber,
      {
        onSuccess: function (result) {
        },
        onFailure: (err) => {
          reject(err);
        },
        inputVerificationCode: () => {
          //var verificationCode = prompt('Please input verification code: ' ,'');
          const result = {
            cognitoUser: cognitoUser,
            obj: this
          };
          resolve(result);
          // cognitoUser.verifyAttribute(cognitoSetting.attribute.phoneNumber, verificationCode, this);
        }
      }
    );
  });
};

const getIdentity = (idToken) => {
  const cognitoUserPoolLoginProvider =
    "cognito-idp." +
    cognitoSetting.region +
    ".amazonaws.com/" +
    cognitoSetting.userPoolID;
  let logins = {};
  logins[cognitoUserPoolLoginProvider] = idToken;

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: cognitoSetting.identityPoolId,
    Logins: logins
  });

  AWS.config.update({ region: cognitoSetting.region });
};

export {
  getCognitoUser,
  getCurrentUser,
  register,
  isOverlapUserid,
  login,
  confirmRegister,
  resendConfirmationCode,
  signOut,
  getSession,
  getAttributes,
  getSessionAttributes,
  updateAttribute,
  changePassword,
  forgotPassword,
  confirmPassword,
  deleteUser,
  getAttributeVerificationCode,
  getIdentity
};
