/*
const nextPageHandler = async () => {
    try {
      const box = [];
      const frontBox = [
        "빈칸추론",
        "어휘추론",
        "순서추론",
        "장문독해",
        "어법추론",
      ];
      const backBox = ["문장삽입", "요약문", "무관문", "주장찾기", "밑줄의미"];
      for (var i = 0; i < 5; i++) {
        if (!activeInfo[i].front) {
          box.push(frontBox[i]);
        }
        if (!activeInfo[i].back) {
          box.push(backBox[i]);
        }
      }
      const params = {
        userId: userName,
        body: {
          weakType: weak,
          strongType: JSON.stringify(box),
        },
      };


//      onPress={() => {
//        navigation.navigate("DiagnosticPage4");
//      }};


      //const diagnosticTestPage5 = ({ navigation, route }) => {
    //  const { weak } = route.params;

    */