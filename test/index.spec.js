/**
 * Created by levy on 2018/3/26.
 */
import PraiseButton from '../src/PraiseButton';

describe("test karma", function () {
    it("praise +1 test", function () {
        let praiseButton = new PraiseButton(0);
        praiseButton.addPraise();
        expect(praiseButton.praise_num).toEqual(1);
    });

    it("praise +1+1 test", function () {
        let praiseButton = new PraiseButton(0);
        praiseButton.addPraise();
        praiseButton.addPraise();
        expect(praiseButton.praise_num).toEqual(2);
    });
});
