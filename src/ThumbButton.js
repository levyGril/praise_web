/**
 * Created by levy on 2018/3/26.
 */
import PraiseButton from './PraiseButton.js';

class ThumbButton extends PraiseButton{

    constructor(selector){

        super();

        this.thumbNode = $(
            `
            <!--大拇指-->
                <div class="wrapper">
                    <!--手腕-->
                    <div class="wrist"></div>
                    <!--大拇指-->
                    <div class="one"></div>
                    <!--手掌-->
                    <div class="circle"></div>
                </div>
            `
        );

        this.praiseNumNode = $(
            `
                <div>当前点赞<span>${this.praise_num}</span>次</div>
            `
        );

        $(selector).append(this.thumbNode).append(this.praiseNumNode);

        this.thumbNode.on('click', this.onChange.bind(this));

    }

    onChange() {
        this.addPraise(); //触发父类的点赞+1机制
        this.praiseNumNode.find('span').html(`${this.praise_num}`);
    }

}

export default ThumbButton;
