// import React, { useState, useEffect, useCallback } from 'react'
// import moment from 'moment'
// import { SafeAreaView, ScrollView, StyleSheet, ImageBackground, View, Text } from 'react-native'

// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
// import * as Linking from 'expo-linking';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../mainpage/index'
// import { findIdPage } from '../findIdPage/index'
// import { findIdPhoneVerificationPage } from '../findIdPhoneVerification/index'
// import { findIdSuccessPage } from '../findSuccess/index'
// import { findPasswordPage } from '../Findpassword/index'
// import { findPasswordPhoneVerificationPage } from '../findPasswordPhoneVerification/index'
// import { findPasswordSuccessPage } from "../findpasswordsuccess/index"
// import { LoginPage } from '../loginpage/index'
// import { QuestionAnalysisPage1 } from "../questionAnalysis/QuestionAnalysis1"
// import { QuestionAnalysisPage2 } from "../questionAnalysis/QuestionAnalysis2"
// import { diagnosticTestPage0} from "../diagnosticpage/DiagnosticPage0"
// import { diagnosticTestPage1 } from "../diagnosticpage/DiagnosticPage1"
// import { diagnosticTestPage2 } from "../diagnosticpage/DiagnosticPage2"
// import { diagnosticTestPage3 } from "../diagnosticpage/DiagnosticPage3"
// import { diagnosticTestPage4 } from "../diagnosticpage/DiagnosticPage4"
// import { diagnosticTestPage5 } from "../diagnosticpage/DiagnosticPage5"
// import { diagnosticTestPage6 } from "../diagnosticpage/DiagnosticPage6"
// import {DailyLearningPage0} from "../dailyLearningPage/DailyLearningPage0"
// import {DirectSolvePage} from "../directsolvePage/index"
// import { fromLeft } from 'react-navigation-transitions';
// import App from "../mainpage/test"
// import {DailyLearningPage1} from "../dailyLearningPage/DailyLearningPage1"
// import {DailyLearningPage2} from "../dailyLearningPage/DailyLearningPage2"
// import {QuestionAnalysis8} from "../questionAnalysis/QuestionAnalysis8"
// import {QuestionAnalysis7} from "../questionAnalysis/QuestionAnalysis7"
// import {QuestionAnalysis6} from "../questionAnalysis/QuestionAnalysis6"
// import {QuestionAnalysis9} from "../questionAnalysis/QuestionAnalysis9"
// import {QuestionAnalysis10} from "../questionAnalysis/QuestionAnalysis10"
// import {WeakLearningPage1} from "../WeakLearning/WeakLearningPage1"
// import {WeakLearningPage2} from "../WeakLearning/WeakLearningPage2"
// import {GradePage1} from "../Grade/GradePage1"
// import {GradePage2} from "../Grade/GradePage2"
// import {GradePage3} from "../Grade/GradePage3"


// const DrawerScreen = () => {
//     const Drawer = createStackNavigator();
//     const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             flexDirection: "column"
//         },
//         image: {
//             flex: 1,
//             resizeMode: "cover",
//             justifyContent: "center"
//         },
//         text: {
//             color: "white",
//             fontSize: 42,
//             fontWeight: "bold",
//             textAlign: "center",
//             backgroundColor: "#000000a0"
//         }
//     });
//     const config = {
//         animation: 'spring',
//         config: {
//             stiffness: 1000,
//             damping: 500,
//             mass: 3,
//             overshootClamping: true,
//             restDisplacementThreshold: 0.01,
//             restSpeedThreshold: 0.01,
//         },
//     };
//     useEffect

//     return (
//         <Drawer.Navigator screenOptions={{
//             headerShown: false
//         }}>
//             <Drawer.Screen name="Home" component={HomeScreen} options={{
//                 transitionSpec: {
//                     open: config,
//                     close: config,
//                 },
//             }} />
//             <Drawer.Screen name="findId" component={findIdPage} />
//             <Drawer.Screen name="App" component={App} />
//             <Drawer.Screen name="findIdPhoneVerification" component={findIdPhoneVerificationPage} />
//             <Drawer.Screen name="findIdSuccess" component={findIdSuccessPage} />
//             <Drawer.Screen name="findPassword" component={findPasswordPage} />
//             <Drawer.Screen name="findPasswordPhoneVerification" component={findPasswordPhoneVerificationPage} />
//             <Drawer.Screen name="findPasswordSuccess" component={findPasswordSuccessPage} />
//             <Drawer.Screen name="Login" component={LoginPage} />
//             <Drawer.Screen name="QuestionAnalysisPage1" component={QuestionAnalysisPage1} />
//             <Drawer.Screen name="QuestionAnalysisPage2" component={QuestionAnalysisPage2} />
//             <Drawer.Screen name="diagnosticTestPage0" component={diagnosticTestPage0} />
//             <Drawer.Screen name="diagnosticTestPage1" component={diagnosticTestPage1} />
//             <Drawer.Screen name="diagnosticTestPage2" component={diagnosticTestPage2} />
//             <Drawer.Screen name="diagnosticTestPage3" component={diagnosticTestPage3} />
//             <Drawer.Screen name="diagnosticTestPage4" component={diagnosticTestPage4} />
//             <Drawer.Screen name="diagnosticTestPage5" component={diagnosticTestPage5} />
//             <Drawer.Screen name="diagnosticTestPage6" component={diagnosticTestPage6} />
//             <Drawer.Screen name="DirectSolvePage" component={DirectSolvePage} />
//             <Drawer.Screen name="DailyLearningPage0" component={DailyLearningPage0}/>
//             <Drawer.Screen name="DailyLearningPage1" component={DailyLearningPage1}/>
//             <Drawer.Screen name="DailyLearningPage2" component={DailyLearningPage2}/>
//             <Drawer.Screen name="QuestionAnalysis8" component={QuestionAnalysis8}/>
//             <Drawer.Screen name="QuestionAnalysis7" component={QuestionAnalysis7}/>
//             <Drawer.Screen name="QuestionAnalysis6" component={QuestionAnalysis6}/>
//             <Drawer.Screen name="QuestionAnalysis9" component={QuestionAnalysis9}/>
//             <Drawer.Screen name="QuestionAnalysis10" component={QuestionAnalysis10}/>
//             <Drawer.Screen name="WeakLearningPage1" component={WeakLearningPage1}/>
//             <Drawer.Screen name="WeakLearningPage2" component={WeakLearningPage2}/>
//             <Drawer.Screen name="GradePage1" component={GradePage1}/>
//             <Drawer.Screen name="GradePage2" component={GradePage2}/>
//             <Drawer.Screen name="GradePage3" component={GradePage3}/>
//         </Drawer.Navigator>


//     );
// }

// export { DrawerScreen }

//이건 어찌해야 좋을꼬...