import demoModel from "../model/demoModel";
import commonRepository from "../repoitory/commonRepository";


class CommonController {
    get(data:demoModel) {
        if(data && data.id){
            return commonRepository.getById(data.id)
        }
        return commonRepository.get()
    }
    post(data:demoModel){
        return commonRepository.post(data)
    }
}

export default CommonController;