import moment from "moment"
const testNameParser = (v)=>{
    v = String(v);
    if(v.length===8 && v.slice(0,4)==="2021"){
        return moment(v).format("MM월 DD일 매일학습");
    }else if(v.slice(0,2)=="21"){
        return moment("20"+v.slice(0,6)).format("DD일 약점학습 ")+v.slice(6)
    }else{
        return v;

    }

}


export default testNameParser;
