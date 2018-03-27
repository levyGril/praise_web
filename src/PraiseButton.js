/**
 * Created by levy on 2018/3/26.
 */
class PraiseButton{
    /**
     * [constructor description]
     * @param  {Number} num  [初始值]
     * @return {[type]}      [description]
     */
    constructor(num=0){
        this.praise_num = num;
    }
    /**
     * [praise 该方法返回当前实例的点赞次数]
     * @return {[type]} [description]
     */
    addPraise(){
        this.praise_num = this.praise_num+1;
        //return this.praise_num;
    }
}

export default PraiseButton;

/**
 * [create  用于创建PraiseButton类的实例化]
 * @param  {[type]} num [description]
 * @return {[type]}      [description]
 */
// export const create = (num)=>{
//     let p = new PraiseButton(num)
//     return p;
// };




