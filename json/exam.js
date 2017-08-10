// exam.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dict:{
            levelOne:[
                {
                    word:'一',
                    pinyin:'yī',
                },
                {
                    word:'二',
                    pinyin:'èr',
                },
                {
                    word:'三',
                    pinyin:'sān',
                },
                {
                    word:'十',
                    pinyin:'shī',
                },
                {
                    word:'人',
                    pinyin:'rēn',
                },
                {
                    word:'八',
                    pinyin:'bā',
                },
                {
                    word:'个',
                    pinyin:'gè',
                },
                {
                    word:'大',
                    pinyin:'dà',
                },
                {
                    word:'口',
                    pinyin:'kǒu',
                },
                {
                    word:'天',
                    pinyin:'tiān',
                },
                {
                    word: '土',
                    pinyin: 'tǔ',
                },
                {
                    word: '小',
                    pinyin: 'xiǎo',
                },
                {
                    word: '头',
                    pinyin: 'tóu',
                },
                {
                    word: '尖',
                    pinyin: 'jiān',
                },
                {
                    word: '只',
                    pinyin: 'zhī',
                },
                {
                    word: '太',
                    pinyin: 'tài',
                },
                {
                    word: '从',
                    pinyin: 'cǒng',
                },
                {
                    word: '出',
                    pinyin: 'chū',
                },
                {
                    word: '山',
                    pinyin: 'shān',
                },
                {
                    word: '叫',
                    pinyin: 'jiào',
                },
                {
                    word: '住',
                    pinyin: 'zhù',
                },
                {
                    word: '月',
                    pinyin: 'yuè',
                },
                {
                    word: '打',
                    pinyin: 'dǎ',
                },
                {
                    word: '上',
                    pinyin: 'shàng',
                },
                {
                    word: '位',
                    pinyin: 'wèi',
                },
                {
                    word: '问',
                    pinyin: 'wèn',
                },
                {
                    word: '为',
                    pinyin: 'wèi',
                },
                {
                    word: '什',
                    pinyin: 'shén',
                },
                {
                    word: '么',
                    pinyin: 'mo',
                },
                {
                    word: '回',
                    pinyin: 'huí',
                },
                {
                    word: '因',
                    pinyin: 'yīn',
                },
                {
                    word: '外',
                    pinyin: 'wài',
                },
                {
                    word: '多',
                    pinyin: 'duō',
                },
                {
                    word: '门',
                    pinyin: 'mén',
                },
                {
                    word: '市',
                    pinyin: 'shì',
                },
                {
                    word: '币',
                    pinyin: 'bì',
                },
                {
                    word: '元',
                    pinyin: 'yuán',
                },
                {
                    word: '角',
                    pinyin: 'jiǎo',
                },
                {
                    word: '分',
                    pinyin: 'fēn',
                },
                {
                    word: '向',
                    pinyin: 'xiàng',
                },
                {
                    word: '白',
                    pinyin: 'bái',
                },
                {
                    word: '毛',
                    pinyin: 'máo',
                },
                {
                    word: '水',
                    pinyin: 'shuǐ',
                },
                {
                    word: '书',
                    pinyin: 'shū',
                },
                {
                    word: '用',
                    pinyin: 'yòng',
                },
                {
                    word: '中',
                    pinyin: 'zhōng',
                },
                {
                    word: '下',
                    pinyin: 'xià',
                },
                {
                    word: '果',
                    pinyin: 'fēng',
                },
                {
                    word: '北',
                    pinyin: 'běi',
                },
                {
                    word: '平',
                    pinyin: 'pīng',
                },
                {
                    word: '户',
                    pinyin: 'hù',
                },
                {
                    word: '开',
                    pinyin: 'kāi',
                },
                {
                    word: '日',
                    pinyin: 'rì',
                },
                {
                    word: '生',
                    pinyin: 'shēng',
                },
                {
                    word: '入',
                    pinyin: 'rù',
                },
                {
                    word: '千',
                    pinyin: 'qiān',
                },
                {
                    word: '里',
                    pinyin: 'lǐ',
                },
                {
                    word: '目',
                    pinyin: 'mù',
                },
                {
                    word: '鱼',
                    pinyin: 'yú',
                },
                {
                    word: '五',
                    pinyin: 'wǔ',
                },
                {
                    word: '巴',
                    pinyin: 'ba',
                },
                {
                    word: '豆',
                    pinyin: 'dòu',
                },
                {
                    word: '儿',
                    pinyin: 'er',
                },
                {
                    word: '在',
                    pinyin: 'zài',
                },
                {
                    word: '早',
                    pinyin: 'zǎo',
                },
                {
                    word: '叶',
                    pinyin: 'yè',
                },
                {
                    word: '飞',
                    pinyin: 'fēi',
                },
                {
                    word: '光',
                    pinyin: 'guǎng',
                },
                {
                    word: '马',
                    pinyin: 'mǎ',
                },
                {
                    word: '行',
                    pinyin: 'xíng',
                },
                {
                    word: '全',
                    pinyin: 'quán',
                },
                {
                    word: '走',
                    pinyin: 'zǒu',
                },
                {
                    word: '万',
                    pinyin: 'wàn',
                },
                {
                    word: '画',
                    pinyin: 'huà',
                },
                {
                    word: '无',
                    pinyin: 'wú',
                },
                {
                    word: '去',
                    pinyin: 'qù',
                },
                {
                    word: '来',
                    pinyin: 'lái',
                },
                {
                    word: '东',
                    pinyin: 'dōng',
                },
                {
                    word: '西',
                    pinyin: 'xī',
                },
                {
                    word: '后',
                    pinyin: 'hòu',
                },
                {
                    word: '少',
                    pinyin: 'shào',
                },
                {
                    word: '女',
                    pinyin: 'nǚ',
                },
                {
                    word: '有',
                    pinyin: 'yǒu',
                },
                {
                    word: '的',
                    pinyin: 'de',
                },
                {
                    word: '鸟',
                    pinyin: 'niǎo',
                },
                {
                    word: '吵',
                    pinyin: 'chǎo',
                },
                {
                    word: '不',
                    pinyin: 'bù',
                },
                {
                    word: '双',
                    pinyin: 'shuāng',
                },
                {
                    word: '手',
                    pinyin: 'shǒu',
                },
                {
                    word: '会',
                    pinyin: 'huì',
                },
                {
                    word: '工',
                    pinyin: 'gōng',
                },
                {
                    word: '又',
                    pinyin: 'yòu',
                },
                {
                    word: '才',
                    pinyin: 'cái',
                },
                {
                    word: '切',
                    pinyin: 'qiè',
                },
                {
                    word: '了',
                    pinyin: 'le',
                },
                {
                    word: '处',
                    pinyin: 'chù',
                },
                {
                    word: '找',
                    pinyin: 'zhǎo',
                },
                {
                    word: '子',
                    pinyin: 'zǐ',
                },
                {
                    word: '可',
                    pinyin: 'kě',
                },
                {
                    word: '办',
                    pinyin: 'bàn',
                },
                {
                    word: '石',
                    pinyin: 'shí',
                },
                {
                    word: '当',
                    pinyin: 'dāng',
                },
                {
                    word: '午',
                    pinyin: 'wǔ',
                },
                {
                    word: '汗',
                    pinyin: 'hàn',
                },
                {
                    word: '知',
                    pinyin: 'zhī',
                },
                {
                    word: '母',
                    pinyin: 'mǔ',
                },
                {
                    word: '和',
                    pinyin: 'hē',
                },
                {
                    word: '自',
                    pinyin: 'zì',
                },
                {
                    word: '己',
                    pinyin: 'jǐ',
                },
                {
                    word: '米',
                    pinyin: 'mǐ',
                },
                {
                    word: '明',
                    pinyin: 'míng',
                },
                {
                    word: '们',
                    pinyin: 'mén',
                },
                {
                    word: '冬',
                    pinyin: 'dōng',
                },
                {
                    word: '他',
                    pinyin: 'tā',
                },
                {
                    word: '吹',
                    pinyin: 'chuī',
                },
                {
                    word: '地',
                    pinyin: 'dì',
                },
                {
                    word: '巾',
                    pinyin: 'jīn',
                },
                {
                    word: '衣',
                    pinyin: 'yī',
                },
                {
                    word: '本',
                    pinyin: 'běn',
                },
                {
                    word: '牙',
                    pinyin: 'yǎ',
                },
                {
                    word: '几',
                    pinyin: 'jǐ',
                },
                {
                    word: '成',
                    pinyin: 'chēng',
                },
                {
                    word: '青',
                    pinyin: 'qīng',
                },
                {
                    word: '它',
                    pinyin: 'tā',
                },
                {
                    word: '我',
                    pinyin: 'wǒ',
                },
                {
                    word: '长',
                    pinyin: 'zhǎng',
                },
                {
                    word: '岁',
                    pinyin: 'suì',
                },
                {
                    word: '见',
                    pinyin: 'jiàn',
                },
                {
                    word: '再',
                    pinyin: 'zài',
                },
                {
                    word: '也',
                    pinyin: 'yě',
                },
                {
                    word: '泪',
                    pinyin: 'lèi',
                },
                {
                    word: '她',
                    pinyin: 'tā',
                },
                {
                    word: '妈',
                    pinyin: 'mā',
                },
                {
                    word: '是',
                    pinyin: 'shì',
                },
                {
                    word: '发',
                    pinyin: 'fā',
                },
                {
                    word: '现',
                    pinyin: 'xiàn',
                },
                {
                    word: '干',
                    pinyin: 'gān',
                },
                {
                    word: '你',
                    pinyin: 'nǐ',
                },
                {
                    word: '班',
                    pinyin: 'bǎn',
                }
            ]
        },
        word:{
            word: '上',
            pinyin: 'shàng',
        }
    },
    //事件处理函数
    bindWordTap: function () {
        var index = Math.floor((Math.random() * this.data.dict.levelOne.length));
        console.log(this.data.dict.levelOne[index]);
        var word = this.data.dict.levelOne[index];
        this.setData({
            word: word
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})