import axios from 'axios'

function useSchoolAPI() {

    // const [cookies, setCookies, removeCookie] = useCookies()

    const API = axios.create({
        baseURL: 'https://www.career.go.kr/cnet/openapi/getOpenApi',
        headers: {
            "Content-Type": "application/json",
            Accept: '*/*'
        },
    })

    const school = {
        highSchool: (params) => API.get(`?apiKey=ed2efe4c9d4a0a12895ef3546c4ef415&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&searchSchulNm=${params.search}`),
        middleSchool: (params) => API.get(`?apiKey=ed2efe4c9d4a0a12895ef3546c4ef415&svcType=api&svcCode=SCHOOL&contentType=json&gubun=midd_list&searchSchulNm=${params.search}`),
    }

    return [{
        API,
        school
    }]

}

export default useSchoolAPI