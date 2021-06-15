import { observable } from 'mobx';

class DirectSolveStore {
    @observable answer = []
    @observable currentAnswer = 0

    handleLength = (i) => {
        var box = []
        for (var k = 0; k++; k < i) {
            box.push(0)
        }
        this.answer = box
    }
    handleInput = (i, value) => {
        temp = this.answer
        temp[i] = value
        this.answer = temp
    }
    handleCurrentAnswer = (i)=>{
        this.currentAnswer=i
    }

}


export default new DirectSolveStore();