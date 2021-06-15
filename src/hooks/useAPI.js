import axios from "axios";
import { useCookies } from "react-cookie";
import { login, getSession, signOut, register, confirmRegister, isOverlapUserid, forgotPassword, confirmPassword, updateAttribute, resendConfirmationCode, changePassword, deleteUser } from "../components/API/cognito";

function useAPI() {
  const [cookies, setCookies, removeCookie] = useCookies();

  const API = axios.create({

    baseURL: "http://52.78.60.152:3002",
    // baseURL: "http://localhost:3002",
    headers: {
      Authorization: cookies.UID,
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });

  const user = {
    confirmPassword: async (userInputInfo) => {
      try {
        const result = await confirmPassword(userInputInfo);
        return result;
      } catch (err) {
        throw err;
      }
    },
    forgotPassword: async (userInputInfo) => {
      try {
        const result = await forgotPassword(userInputInfo);
        return result;
      } catch (err) {
        throw err;
      }
    },
    isOverlapUserid: async (userInputInfo) => {
      try {
        const result = await isOverlapUserid(userInputInfo);
        return result;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    register: async (userInputInfo) => {
      try {
        const result = await register(userInputInfo);
        return result;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    confirmRegister: async (cognitoUser, phoneNumberConfirm) => {
      try {
        await confirmRegister(cognitoUser, phoneNumberConfirm);
      } catch (err) {
        throw err;
      }
    },
    resendConfirmationCode: async (cognitoUser) => {
      try {
        const result = await resendConfirmationCode(cognitoUser);
        return result;
      } catch (err) {
        throw err;
      }
    },
    login: async (inputUserInfo) => {
      try {
        const result = await login(inputUserInfo);
        return result;
      } catch (err) {
        throw err;
      }
    },
    getSession: async () => {
      try {
        const result = await getSession();
        setCookies("UID", result.signInUserSession.idToken.jwtToken);
        return result;
      } catch (err) {
        throw err;
      }
    },
    logout: () => {
      signOut();
    },
    updateAttribute: async (attributeData, token) => {
      try {
        const result = await updateAttribute(attributeData, token);
        return result;
      } catch (err) {
        throw err;
      }
    },
    changePassword: async (userInputInfo) => {
      try {
        const result = await changePassword(userInputInfo);
        return result;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    deleteUser: async (userInputInfo) => {
      try {
        const result = await deleteUser(userInputInfo);
        return result;
      } catch (err) {
        console.log("delete Err", err);
        throw err;
      }
    },

  };

  const daily = {
    makeDailyTest: (params) => API.post(`api/daily/${params.userId}/makedailytest`),
    getWeekInfo: (params) => API.post(`/api/daily/${params.userId}/sevendayinfo`, params.body),
    test: (params) => API.post(`api/daily/${params.userId}/test`, params.body),
    makeDailyTest1: (params) => API.post(`api/daily/${params.userId}/makedailytest1`, params.body),
    makeDailyTest2: (params) => API.post(`api/daily/${params.userId}/makedailytest2`, params.body),
    makeDailyTest3: (params) => API.post(`api/daily/${params.userId}/makedailytest3`, params.body),
    makeDailyTest4: (params) => API.post(`api/daily/${params.userId}/makedailytest4`, params.body),
    getHomePageInfo: (params) => API.post(`/api/daily/${params.userId}/getHomePageInfo`, params.body),
    getDailyTested : (params) => API.post(`/api/daily/${params.userId}/getDailyTested`, params.body)
  };
  const weak = {
    makeWeakTest: (params) => API.post(`/api/weak/${params.userId}/makeweaktest`, params.body),
    getweaktestinfo: (params) => API.get(`api/weak/${params.userId}/getweaktestinfo`, params.body),
    getTestName: (params) => API.get(`/api/weak/${params.userId}/gettestname/${params.type}/${params.gradeType}`, params.body),
    getWrongList: (params) => API.get(`/api/weak/${params.userId}/getwronglist/${params.type_of_test}/${params.name_of_test}`, params.body),
    getWeakPageInfo: (params) => API.get(`/api/weak/${params.userId}/getWeakPageInfo`, params.body),
    getWrongProblem: (params) => API.get(`/api/weak/${params.userId}/getWrongProblem`, params.body),
    makeweaktestBeta : (params) => API.post(`api/weak/${params.userId}/makeweaktestBeta`, params.body),
  };
  const progress = {
    progressinfo: (params) => API.get(`api/progress/${params.userId}/progress`, params.body),
    getChartInfo: (params) => API.post(`api/progress/${params.userId}/getchartinfo`, params.body),
    getHeatMapInfo: (params) => API.get(`api/progress/${params.userId}/getHeatMapInfo`, params.body),
    getCommentInfo: (params) => API.post(`/api/progress/${params.userId}/getcommentinfo`, params.body),
    getStatusPageInfo : (params) => API.get(`api/progress/${params.userId}/getStatusPageInfo`,params.body)
  };
  const search = {
    getSearchInfo: (params) => API.get(`api/search/info/${params.code}/${params.userId}`, params.body),
    saveProblem: (params) => API.post(`api/search/${params.userId}/saveproblem`, params.body),
    getSearchTestInfo: (params) => API.get(`api/search/${params.userId}/getsearchtestinfo/`, params.body),
    getNumOfSearchQ: (params) => API.get(`api/search/${params.userId}/getnumofsearchq`, params.body),
    isValid: (params) => API.get(`api/search/valid/${params.code}`),
    makeSearchTest: (params) => API.post(`api/search/${params.userId}/Makesearchtest`, params.body),
    deleteSearchQ: (params) => API.post(`api/search/${params.userId}/deleteSearchQ`, params.body),
    getSearchPageInfo : (params) => API.get(`api/search/${params.userId}/getSearchPageInfo`, params.body),
    getKorea: (params) => API.get(`api/search/${params.code}/getKorea`, params.body)
  };
  const grade = {
    getScoreInfo: (params) => API.post(`/api/grade/${params.userId}/getscoreinfo`, params.body),
    grade: (params) => API.post(`/api/grade/${params.userId}/grade`, params.body),
  };
  const auth = {
    callBack: (params) => API.post(`api/auth/callback`, params.body),
    kakaoAuth: (params) => API.post(`api/auth/kakao`, params.body),
    appleAuth: (params) => API.post(`api/auth/apple`, params.body),
    convertid: (params) => API.post("api/auth/convertid", params),
    defaultinput: (params) => API.post("api/auth/defaultinput", params),
    isValidId: (params) => API.get(`api/auth/${params.userId}/isValidid`, params.body),
    findId: (params) => API.post(`api/auth/${params.userId}/findid`, params.body),
  };
  const test = {
    getWord: (params) => API.post(`api/test/${params.userId}/wordquiz`, params.body),
    getSentence: (params) => API.post(`api/test/${params.userId}/syntaxquiz`, params.body),
    predictScore: (params) => API.post(`api/test/${params.userId}/predictscore`, params.body),
    insertIsTested: (params) => API.post(`api/test/${params.userId}/insertIsTested`, params.body),
    insertSyntaxResult: (params) => API.post(`api/test/${params.userId}/insertSyntaxResult`, params.body),
    insertWordResult: (params) => API.post(`api/test/${params.userId}/insertWordResult`, params.body),
    insertScoreResult: (params) => API.post(`api/test/${params.userId}/insertScoreResult`, params.body),
    insertAdditionalInfo: (params) => API.post(`api/test/${params.userId}/insertAdditionalInfo`, params.body),
    insertType: (params) => API.post(`api/test/${params.userId}/insertType`, params.body),
    insertGrade: (params) => API.post(`api/test/${params.userId}/insertGrade`, params.body),
    isTested: (params) => API.get(`api/test/${params.userId}/istested`, params.body),
    insertProblemInfo : (params) => API.post(`api/test/${params.userId}/insertProblemInfo`, params.body)
  };

  const voca = {
    addVoca: (params) => API.post(`api/voca/${params.userId}/addVoca`, params.body),
    getVocaList: (params) => API.get(`api/voca/${params.userId}/getvocalist`, params.body),
    setMemorized : (params) => API.post(`api/voca/${params.userId}/setMemorized`, params.body),
    setUnMemorized : (params) => API.post(`api/voca/${params.userId}/setUnMemorized`, params.body),
    wordRecommend : (params) => API.post(`api/voca/${params.userId}/wordRecommend`, params.body),
    scrapMemory : (params) => API.post(`api/voca/${params.userId}/scrapMemory`, params.body)
  };

  const directSolve = {
    saveData: (params) => API.post(`api/directsolve/${params.userId}/saveData`, params.body),
    selectList: (params) => API.post(`api/directsolve/selectList`, params.body),
    insertDirectSolveQ : (params) =>API.post(`api/directsolve/${params.userId}/insertDirectSolveQ`, params.body)
  };

  const push = {
    upDateToken: (params) => API.post(`api/push/${params.userId}/upDateToken`, params.body),
  };

  const friend = {
    getFriendList: (params) => API.post(`api/friend/${params.userId}/getFriendList`, params.body),
    getSendList: (params) => API.post(`api/friend/${params.userId}/getSendList`, params.body),
    getReceiveList: (params) => API.post(`api/friend/${params.userId}/getReceiveList`, params.body),
    acceptFriend: (params) => API.post(`api/friend/${params.userId}/${params.sendId}/acceptFriend`, params.body),
    addFriend: (params) => API.post(`api/friend/${params.userId}/addfriend`, params.body),
    makeFeed: (params) => API.post(`api/friend/${params.userId}/makefeed`, params.body),
    getFriendRankData: (params) => API.get(`api/friend/${params.userId}/getFriendRankData`, params.body),
    cancelSend: (params) => API.post(`api/friend/${params.userId}/cancelSend`, params.body),
  };

  const attend = {
    attend: (params) => API.post(`api/attend/${params.userId}/attend`, params.body),
    getAttendInfo: (params) => API.get(`api/attend/${params.userId}/getAttendInfo`, params.body),
  };

  const info = {
    getNotification: (params) => API.get(`api/info/${params.userId}/getNotification`, params.body),
    getAlarmInfo: (params) => API.get(`api/info/${params.userId}/getAlarmInfo`, params.body),
    getCheryLevel: (params) => API.get(`api/info/${params.userId}/getCheryLevel`, params.body),
    getSettingInfo: (params) => API.get(`api/info/${params.userId}/getSettingInfo`, params.body),
    editSettingInfo: (params) => API.post(`api/info/${params.userId}/editSettingInfo`, params.body),
    editFullName: (params) => API.post(`api/info/${params.userId}/editFullName`, params.body),
    editIcon: (params) => API.post(`api/info/${params.userId}/editIcon`, params.body),
    editAlarm: (params) => API.post(`api/info/${params.userId}/editAlarm`, params.body),
  };

  const problemInfo = {
    getWrongProblemWord: (params) => API.post(`api/probleminfo/getWrongProblemWord`, params.body),
    getSelectList : (params)=> API.post(`api/problemInfo/${params.userId}/getSelectList`, params.body),
  };

  const tempSave = {
    saveTempData: (params) => API.post(`api/tempSave/${params.userId}/saveTempData`, params.body),
    getTempData: (params) => API.post(`/api/tempsave/${params.userId}/getTempData`, params.body),
    clearTempData: (params) => API.post(`api/tempSave/${params.userId}/clearTempData`, params.body),
    saveDrawData : (params) => API.post(`api/tempSave/${params.userId}/saveDrawData`,params.body),
    saveTimeData : (params) => API.post(`api/tempSave/${params.userId}/saveTimeData`,params.body),
    getTempDataByDate : (params) => API.get(`api/tempSave/${params.userId}/getTempDataByDate`, params.body),
    tempSave : (params) => API.post(`api/tempsave/${params.userId}/TempSave`,params.body),
    getTempSave : (params) => API.post(`api/tempSave/${params.userId}/getTempSave`, params.body)
  };

  const answerSheet= {
    getAnswerSheetInfo : (params) => API.get(`api/answer/${params.userId}/getAnswerSheetInfo/${params.code}`,params.body)

  }
  return [
    {
      API,
      daily,
      weak,
      progress,
      search,
      grade,
      auth,
      test,
      voca,
      user,
      directSolve,
      answerSheet,
      push,
      friend,
      attend,
      info,
      problemInfo,
      tempSave,
    },
  ];
}

export default useAPI;
