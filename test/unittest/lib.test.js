/* global chai describe it expect  FileUploadLIB*/
var expect = chai.expect;

describe('toFixed方法测试-直接截取', function() {

    it('正浮点数[Number]-小于1-toFixed', function() {
        expect(toFixed(0.099999,3,false)).to.equal('0.099');
        expect(toFixed(0.09,2,false)).to.equal('0.09');
        expect(toFixed(0.09,1,false)).to.equal('0.0');
        expect(toFixed(0.09,5,false)).to.equal('0.09000');
        expect(toFixed(0.09,0,false)).to.equal('0');
        expect(toFixed(0.99,3,false)).to.equal('0.990');
        expect(toFixed(.99,3,false)).to.equal('0.990');
        expect(toFixed(0.099999,3)).to.equal('0.099');
        expect(toFixed(0.09,2)).to.equal('0.09');
        expect(toFixed(0.09,1)).to.equal('0.0');
        expect(toFixed(0.09,5)).to.equal('0.09000');
        expect(toFixed(0.09,0)).to.equal('0');
        expect(toFixed(0.99,3)).to.equal('0.990');
        expect(toFixed(.99,3)).to.equal('0.990');
    });

    it('正浮点数[Number]-大于1-toFixed', function() {
        expect(toFixed(1.099999,3,false)).to.equal('1.099');
        expect(toFixed(1.09,2,false)).to.equal('1.09');
        expect(toFixed(1.09,1,false)).to.equal('1.0');
        expect(toFixed(1.09,5,false)).to.equal('1.09000');
        expect(toFixed(1.09,0,false)).to.equal('1');
        expect(toFixed(1.01,2,false)).to.equal('1.01');
        expect(toFixed(1.01,2,false)).to.equal('1.01');
        expect(toFixed(1.,2,false)).to.equal('1.00');
    });

    it('负浮点数[Number]-大于-1-toFixed', function() {
        expect(toFixed(-0.09,2,false)).to.equal('-0.09');
        expect(toFixed(-0.09,1,false)).to.equal('-0.0');
        expect(toFixed(-0.09,5,false)).to.equal('-0.09000');
        expect(toFixed(-0.09,0,false)).to.equal('-0');
        expect(toFixed(-.09,1,false)).to.equal('-0.0');
        expect(toFixed(-0.01,2,false)).to.equal('-0.01');
        expect(toFixed(-.01,2,false)).to.equal('-0.01');
    });

    it('负浮点数[Number]-小于-1-toFixed', function() {
        expect(toFixed(-1.09,2,false)).to.equal('-1.09');
        expect(toFixed(-1.09,1,false)).to.equal('-1.0');
        expect(toFixed(-1.09,5,false)).to.equal('-1.09000');
        expect(toFixed(-1.09,0,false)).to.equal('-1');
        expect(toFixed(-1.09,1,false)).to.equal('-1.0');
        expect(toFixed(-1.01,2,false)).to.equal('-1.01');
        expect(toFixed(-1.01,2,false)).to.equal('-1.01');
    });

    it('正整数[Number]-toFixed', function() {
        expect(toFixed(1,3,false)).to.equal('1.000');
        expect(toFixed(19,2,false)).to.equal('19.00');
        expect(toFixed(399,1,false)).to.equal('399.0');
        expect(toFixed(22,5,false)).to.equal('22.00000');
        expect(toFixed(3,0,false)).to.equal('3');
    });

    it('负整数[Number]-toFixed', function() {
        expect(toFixed(-1,3,false)).to.equal('-1.000');
        expect(toFixed(-19,2,false)).to.equal('-19.00');
        expect(toFixed(-399,1,false)).to.equal('-399.0');
        expect(toFixed(-22,5,false)).to.equal('-22.00000');
        expect(toFixed(-3,0,false)).to.equal('-3');
    });

    it('正浮点数[String]-小于1-toFixed', function() {
        expect(toFixed('0.099999',3,false)).to.equal('0.099');
        expect(toFixed('0.09',2,false)).to.equal('0.09');
        expect(toFixed('0.09',1,false)).to.equal('0.0');
        expect(toFixed('0.09',5,false)).to.equal('0.09000');
        expect(toFixed('0.09',0,false)).to.equal('0');
        expect(toFixed('0.99',3,false)).to.equal('0.990');
        expect(toFixed('.99',3,false)).to.equal('0.990');
    });

    it('正浮点数[String]-大于1-toFixed', function() {
        expect(toFixed('1.099999',3,false)).to.equal('1.099');
        expect(toFixed('1.09',2,false)).to.equal('1.09');
        expect(toFixed('1.09',1,false)).to.equal('1.0');
        expect(toFixed('1.09',5,false)).to.equal('1.09000');
        expect(toFixed('1.09',0,false)).to.equal('1');
        expect(toFixed('1.01',2,false)).to.equal('1.01');
        expect(toFixed('1.01',2,false)).to.equal('1.01');
        expect(toFixed('1.',2,false)).to.equal('1.00');
    });

    it('负浮点数[String]-大于-1-toFixed', function() {
        expect(toFixed('-0.09',2,false)).to.equal('-0.09');
        expect(toFixed('-0.09',1,false)).to.equal('-0.0');
        expect(toFixed('-0.09',5,false)).to.equal('-0.09000');
        expect(toFixed('-0.09',0,false)).to.equal('-0');
        expect(toFixed('-.09',1,false)).to.equal('-0.0');
        expect(toFixed('-0.01',2,false)).to.equal('-0.01');
        expect(toFixed('-.01',2,false)).to.equal('-0.01');
    });

    it('负浮点数[String]-小于-1-toFixed', function() {
        expect(toFixed('-1.09',2,false)).to.equal('-1.09');
        expect(toFixed('-1.09',1,false)).to.equal('-1.0');
        expect(toFixed('-1.09',5,false)).to.equal('-1.09000');
        expect(toFixed('-1.09',0,false)).to.equal('-1');
        expect(toFixed('-1.09',1,false)).to.equal('-1.0');
        expect(toFixed('-1.01',2,false)).to.equal('-1.01');
        expect(toFixed('-1.01',2,false)).to.equal('-1.01');
    });

    it('正整数[String]-toFixed', function() {
        expect(toFixed('1',3,false)).to.equal('1.000');
        expect(toFixed('19',2,false)).to.equal('19.00');
        expect(toFixed('399',1,false)).to.equal('399.0');
        expect(toFixed('22',5,false)).to.equal('22.00000');
        expect(toFixed('3',0,false)).to.equal('3');
    });

    it('负整数[String]-toFixed', function() {
        expect(toFixed('-1',3,false)).to.equal('-1.000');
        expect(toFixed('-19',2,false)).to.equal('-19.00');
        expect(toFixed('-399',1,false)).to.equal('-399.0');
        expect(toFixed('-22',5,false)).to.equal('-22.00000');
        expect(toFixed('-3',0,false)).to.equal('-3');
    });

});

describe('toFixed方法测试-四舍五入', function() {

    it('正浮点数[Number]-小于1-toFixed', function() {
        expect(toFixed(0.099999,3,true)).to.equal('0.100');
        expect(toFixed(0.999999,3,true)).to.equal('1.000');
        expect(toFixed(0.09,2,true)).to.equal('0.09');
        expect(toFixed(0.09,1,true)).to.equal('0.1');
        expect(toFixed(0.09,5,true)).to.equal('0.09000');
        expect(toFixed(0.09,0,true)).to.equal('0');
        expect(toFixed(0.99,3,true)).to.equal('0.990');
        expect(toFixed(0.99,1,true)).to.equal('1.0');
        expect(toFixed(.99,3,true)).to.equal('0.990');
    });

    it('正浮点数[Number]-大于1-toFixed', function() {
        expect(toFixed(1.099999,3,true)).to.equal('1.100');
        expect(toFixed(1.999999,3,true)).to.equal('2.000');
        expect(toFixed(1.09,2,true)).to.equal('1.09');
        expect(toFixed(1.09,1,true)).to.equal('1.1');
        expect(toFixed(1.09,5,true)).to.equal('1.09000');
        expect(toFixed(9.09,0,true)).to.equal('9');
        expect(toFixed(9.99,3,true)).to.equal('9.990');
        expect(toFixed(9.99,1,true)).to.equal('10.0');
        expect(toFixed(199.9999,3,true)).to.equal('200.000');
    });

    it('负浮点数[Number]-大于-1-toFixed', function() {
        expect(toFixed(-0.099999,3,true)).to.equal('-0.100');
        expect(toFixed(-0.999999,3,true)).to.equal('-1.000');
        expect(toFixed(-0.09,2,true)).to.equal('-0.09');
        expect(toFixed(-0.09,1,true)).to.equal('-0.1');
        expect(toFixed(-0.09,5,true)).to.equal('-0.09000');
        expect(toFixed(-0.09,0,true)).to.equal('-0');
        expect(toFixed(-0.99,3,true)).to.equal('-0.990');
        expect(toFixed(-0.99,1,true)).to.equal('-1.0');
        expect(toFixed(-.99,3,true)).to.equal('-0.990');
    });

    it('负浮点数[Number]-小于-1-toFixed', function() {
        expect(toFixed(-1.099999,3,true)).to.equal('-1.100');
        expect(toFixed(-1.999999,3,true)).to.equal('-2.000');
        expect(toFixed(-1.09,2,true)).to.equal('-1.09');
        expect(toFixed(-1.09,1,true)).to.equal('-1.1');
        expect(toFixed(-1.09,5,true)).to.equal('-1.09000');
        expect(toFixed(-9.09,0,true)).to.equal('-9');
        expect(toFixed(-9.99,3,true)).to.equal('-9.990');
        expect(toFixed(-9.99,1,true)).to.equal('-10.0');
        expect(toFixed(-199.9999,3,true)).to.equal('-200.000');
    });

    it('正整数[Number]-toFixed', function() {
        expect(toFixed(1,3,true)).to.equal('1.000');
        expect(toFixed(19,2,true)).to.equal('19.00');
        expect(toFixed(399,1,true)).to.equal('399.0');
        expect(toFixed(22,5,true)).to.equal('22.00000');
        expect(toFixed(3,0,true)).to.equal('3');
    });

    it('负整数[Number]-toFixed', function() {
        expect(toFixed(-1,3,true)).to.equal('-1.000');
        expect(toFixed(-19,2,true)).to.equal('-19.00');
        expect(toFixed(-399,1,true)).to.equal('-399.0');
        expect(toFixed(-22,5,true)).to.equal('-22.00000');
        expect(toFixed(-3,0,true)).to.equal('-3');
    });

        it('正浮点数[String]-小于1-toFixed', function() {
        expect(toFixed('0.099999',3,true)).to.equal('0.100');
        expect(toFixed('0.999999',3,true)).to.equal('1.000');
        expect(toFixed('0.09',2,true)).to.equal('0.09');
        expect(toFixed('0.09',1,true)).to.equal('0.1');
        expect(toFixed('0.09',5,true)).to.equal('0.09000');
        expect(toFixed('0.09',0,true)).to.equal('0');
        expect(toFixed('0.99',3,true)).to.equal('0.990');
        expect(toFixed('0.99',1,true)).to.equal('1.0');
        expect(toFixed('.99',3,true)).to.equal('0.990');
    });

    it('正浮点数[String]-大于1-toFixed', function() {
        expect(toFixed('1.099999',3,true)).to.equal('1.100');
        expect(toFixed('1.999999',3,true)).to.equal('2.000');
        expect(toFixed('1.09',2,true)).to.equal('1.09');
        expect(toFixed('1.09',1,true)).to.equal('1.1');
        expect(toFixed('1.09',5,true)).to.equal('1.09000');
        expect(toFixed('9.09',0,true)).to.equal('9');
        expect(toFixed('9.99',3,true)).to.equal('9.990');
        expect(toFixed('9.99',1,true)).to.equal('10.0');
        expect(toFixed('199.9999',3,true)).to.equal('200.000');
    });

    it('负浮点数[String]-大于-1-toFixed', function() {
        expect(toFixed('-0.099999',3,true)).to.equal('-0.100');
        expect(toFixed('-0.999999',3,true)).to.equal('-1.000');
        expect(toFixed('-0.09',2,true)).to.equal('-0.09');
        expect(toFixed('-0.09',1,true)).to.equal('-0.1');
        expect(toFixed('-0.09',5,true)).to.equal('-0.09000');
        expect(toFixed('-0.09',0,true)).to.equal('-0');
        expect(toFixed('-0.99',3,true)).to.equal('-0.990');
        expect(toFixed('-0.99',1,true)).to.equal('-1.0');
        expect(toFixed('-.99',3,true)).to.equal('-0.990');
    });

    it('负浮点数[String]-小于-1-toFixed', function() {
        expect(toFixed('-1.099999',3,true)).to.equal('-1.100');
        expect(toFixed('-1.999999',3,true)).to.equal('-2.000');
        expect(toFixed('-1.09',2,true)).to.equal('-1.09');
        expect(toFixed('-1.09',1,true)).to.equal('-1.1');
        expect(toFixed('-1.09',5,true)).to.equal('-1.09000');
        expect(toFixed('-9.09',0,true)).to.equal('-9');
        expect(toFixed('-9.99',3,true)).to.equal('-9.990');
        expect(toFixed('-9.99',1,true)).to.equal('-10.0');
        expect(toFixed('-199.9999',3,true)).to.equal('-200.000');
    });

    it('正整数[String]-toFixed', function() {
        expect(toFixed('1',3,true)).to.equal('1.000');
        expect(toFixed('19',2,true)).to.equal('19.00');
        expect(toFixed('399',1,true)).to.equal('399.0');
        expect(toFixed('22',5,true)).to.equal('22.00000');
        expect(toFixed('3',0,true)).to.equal('3');
    });

    it('负整数[String]-toFixed', function() {
        expect(toFixed('-1',3,true)).to.equal('-1.000');
        expect(toFixed('-19',2,true)).to.equal('-19.00');
        expect(toFixed('-399',1,true)).to.equal('-399.0');
        expect(toFixed('-22',5,true)).to.equal('-22.00000');
        expect(toFixed('-3',0,true)).to.equal('-3');
    });
});
