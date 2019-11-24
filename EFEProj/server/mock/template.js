/**
 * @file mockResponse.js
 * @author lvhongbin (lvhongbin@baidu.com)
 * @date    2019-08-07 19:54:36
 * @version 1.0.0
 */
let musicBaseTypes = [ // 模拟获取
    {value: 'dianzi', label: '电子'},
    {value: 'jueshi', label: '爵士'},
    {value: 'yaogun', label: '摇滚'},
    {value: 'xiangcun', label: '乡村'},
    {value: 'shuqing', label: '抒情'},
    {value: 'liuxing', label: '流行'},
    {value: 'xiha', label: '嘻哈'},
    {value: 'qita', label: '其他'}
];

let musicItems = [ // 模拟获取
    {
        id: '01',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '02',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '03',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '04',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '05',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '06',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '07',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '08',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '09',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '10',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '11',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '12',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '13',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '14',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '15',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '16',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '17',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '18',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '19',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    },
    {
        id: '20',
        name: '音乐名',
        duration: '02:11',
        src: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201908/11882.mp3'
    }
];

// 获取
let defaultSmartData = {
    data: {
        templateId: 3000,
        videoName: '123333333333',
        source: 16,
        backgroundAudio: 'http://bj.bcebos.com/fcvideo/b7e01c225e1ad874c0ff31bf5ae6ade3.mp3',
        shotList: [{
            index: 1,
            type: 'head',
            aeFileId: 100342,
            textList: [{
                text: '1'
            }],
            mediaList: [{type: 'PIC', mediaUrl: 'https://dummyimage.com/900X900.jpg', enableAudio: 1}]
        }, {
            index: 2,
            type: 'body',
            aeFileId: 100343,
            textList: [{
                text: '2'
            }],
            mediaList: [{type: 'PIC', mediaUrl: 'https://dummyimage.com/600X900.jpg', enableAudio: 1}]
        }, {
            index: 3,
            type: 'body',
            aeFileId: 100344,
            textList: [{
                text: '3'
            }],
            mediaList: [{type: 'PIC', mediaUrl: 'http://bj.bcebos.com/aod-image-material/0/pic/b951653323f9f04c6c3cd1ad92a5ec71.jpg', enableAudio: 1}]
        }, {
            index: 4,
            type: 'body',
            aeFileId: 100342,
            textList: [{
                text: '4'
            }],
            mediaList: [{type: 'PIC', mediaUrl: 'http://bj.bcebos.com/aod-image-material/0/pic/b951653323f9f04c6c3cd1ad92a5ec71.jpg', enableAudio: 1}]
        }, {
            index: 5,
            type: 'body',
            aeFileId: 100343,
            textList: [{
                text: '5'
            }],
            mediaList: [{type: 'PIC', mediaUrl: 'http://bj.bcebos.com/aod-image-material/0/pic/b951653323f9f04c6c3cd1ad92a5ec71.jpg', enableAudio: 1}]
        }]
    },
    status: 0,
    errors: []
};

let defaultSmartData2 = {
    "data": {
      "templateId": 3007,
      "videoName": "hky测试09305",
      "source": 16,
      "backgroundAudio": "http://ecmb.bdimg.com/cc-audio/NoVoice.mp3",
      "shotList": [
        {
          "index": 1,
          "type": "head",
          "aeFileId": 100290,
          "textList": [
            {
              "text": "片段1"
            }
          ],
          "mediaList": [
            {
              "type": "PIC",
              "mediaUrl": "http://imagelib.cdn.bcebos.com/0/pic/9a84dd0189c52d1f9acd765ed73781f2.png",
              "enableAudio": 1
            }
          ]
        },
        {
          "index": 2,
          "type": "body",
          "aeFileId": 100291,
          "textList": [
            {
              "text": "片段2"
            }
          ],
          "mediaList": [
            {
              "type": "PIC",
              "mediaUrl": "http://imagelib.cdn.bcebos.com/0/pic/8e52c7c94e02d4918b6f3b9464b3e3dc.png",
              "enableAudio": 1
            }
          ]
        },
        {
          "index": 3,
          "type": "body",
          "aeFileId": 100292,
          "textList": [
            {
              "text": "片段3哈哈哈哈哈哈哈"
            }
          ],
          "mediaList": [
            {
              "type": "PIC",
              "mediaUrl": "http://imagelib.cdn.bcebos.com/0/pic/3cafadd40d2c782f87d8f1e8e9fcab88.png",
              "enableAudio": 1
            }
          ]
        },
        {
          "index": 4,
          "type": "body",
          "aeFileId": 100290,
          "textList": [
            {
              "text": "片段4"
            }
          ],
          "mediaList": [
            {
              "type": "PIC",
              "mediaUrl": "http://imagelib.cdn.bcebos.com/0/pic/a616a919e26e9a92b1959d8d5eb3a51d.png",
              "enableAudio": 1
            }
          ]
        },
        {
          "index": 5,
          "type": "body",
          "aeFileId": 100291,
          "textList": [
            {
              "text": "片段5"
            }
          ],
          "mediaList": [
            {
              "type": "PIC",
              "mediaUrl": "http://imagelib.cdn.bcebos.com/0/pic/1bc56b4621d5d5d2767d9e1dd5b0ae5a.png",
              "enableAudio": 1
            }
          ]
        }
      ]
    },
    "status": 0,
    "errors": []
  }


let musicBaseList = {status: 200, data: [{label: '电子', value: '1', content: [{name: 'Live To Dreams', playtime: '131.0', url: 'http://bj.bcebos.com/fcvideo/b7e01c225e1ad874c0ff31bf5ae6ade3.mp3', vgcid: 'VCG43673687055'}, {name: 'Promising Success', playtime: '194.0', url: 'http://bj.bcebos.com/fcvideo/9414152d937744fb4ff9080140bed938.mp3', vgcid: 'VCG43662185609'}, {name: 'Broken Glass', playtime: '103.0', url: 'http://bj.bcebos.com/fcvideo/670f150a70ce2a1422b60a06b3c8dcfe.mp3', vgcid: 'VCG43728721917'}, {name: 'The Key', playtime: '225.0', url: 'http://bj.bcebos.com/fcvideo/b2ed1e77b3164e9c3a53f3b1fa3434d7.mp3', vgcid: 'VCG43728725101'}, {name: 'CLOUDY SKIES', playtime: '219.0', url: 'http://bj.bcebos.com/fcvideo/a214e94034cd50379624c34966a8aa92.mp3', vgcid: 'VCG43712901715'}, {name: 'Huelva', playtime: '202.0', url: 'http://bj.bcebos.com/fcvideo/840205f005ea6afa89d7d11df35fdebc.mp3', vgcid: 'VCG43712915389'}, {name: 'Ghetto Boy 2020', playtime: '218.0', url: 'http://bj.bcebos.com/fcvideo/24609103922c95763b8e75cffc80d697.mp3', vgcid: 'VCG43728732235'}, {name: 'Mystic Streets', playtime: '142.0', url: 'http://bj.bcebos.com/fcvideo/a5bd2bc09dcc35c4b4467b0694d9ed05.mp3', vgcid: 'VCG43728733335'}, {name: 'abi-93bpm-BMin-short-', playtime: '76.0', url: 'http://bj.bcebos.com/fcvideo/a2e9f8733d8b4c13557cdcacd31cd572.mp3', vgcid: 'VCG43743633443'}, {name: 'Easybeat', playtime: '144.0', url: 'http://bj.bcebos.com/fcvideo/3161a8dff090ffdc40e9de67c425c467.mp3', vgcid: 'VCG43739694949'}, {name: 'Sandman', playtime: '88.0', url: 'http://bj.bcebos.com/fcvideo/0503ee5701aa603544f233b51f1e8ba4.mp3', vgcid: 'VCG43712934961'}, {name: 'Inspiration Instrumental Ver', playtime: '105.0', url: 'http://bj.bcebos.com/fcvideo/53a8d00f1e289f262d81f853b7eae1a5.mp3', vgcid: 'VCG43712936563'}, {name: 'Inspiration Background Ver', playtime: '228.0', url: 'http://bj.bcebos.com/fcvideo/63db8c3042b966b311f72c0142ae34ff.mp3', vgcid: 'VCG43712936565'}, {name: 'Simple Electronic Beat', playtime: '66.0', url: 'http://bj.bcebos.com/fcvideo/2e8ca8900c1c34bb95a4f2ec9c743b79.mp3', vgcid: 'VCG43795389819'}, {name: 'Calling Home', playtime: '105.0', url: 'http://bj.bcebos.com/fcvideo/1d41d5ff9d2104daaf7516283addf0c1.mp3', vgcid: 'VCG43795388769'}, {name: 'FlyBy', playtime: '238.0', url: 'http://bj.bcebos.com/fcvideo/9c67e5637672aed7a98b1f4b4a4279de.mp3', vgcid: 'VCG43795389683'}, {name: 'Through My Eyes', playtime: '226.0', url: 'http://bj.bcebos.com/fcvideo/e6518912a676368056ac0be28dbbdeff.mp3', vgcid: 'VCG43778305083'}, {name: 'What You Want -Seersha (MVJOR ARCVNA Remix)', playtime: '217.0', url: 'http://bj.bcebos.com/fcvideo/aee955a5afdddeaeea2fe826a47f22f2.mp3', vgcid: 'VCG43795390657'}, {name: 'Stranger At Dawn', playtime: '288.0', url: 'http://bj.bcebos.com/fcvideo/dc970e372e7e2a9e86ee55a3e63dcee4.mp3', vgcid: 'VCG43795389829'}, {name: 'Mechanical Toys (60s edit)', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/7948937ae28688e9a7d51d4c4a943dce.mp3', vgcid: 'VCG43628484079'}, {name: 'Ecplise Theory', playtime: '263.0', url: 'http://bj.bcebos.com/fcvideo/97949cdfb9caa075eff8f658a77ae79f.mp3', vgcid: 'VCG43795388317'}, {name: 'Groovy Thoughts', playtime: '151.0', url: 'http://bj.bcebos.com/fcvideo/923807b881c412ab98d807d4f5271b81.mp3', vgcid: 'VCG43628484053'}, {name: 'She Found Moments In Piano', playtime: '118.0', url: 'http://bj.bcebos.com/fcvideo/3aeaf9e8735d6e7a778c40a2fd027e50.mp3', vgcid: 'VCG43628483971'}, {name: 'Sunny Trashed Pickup Truck', playtime: '138.0', url: 'http://bj.bcebos.com/fcvideo/012897d0ea87a311b86363a3e4c13158.mp3', vgcid: 'VCG43628484029'}, {name: 'Le Voyage Immobile (agent.oh regeneration)', playtime: '185.0', url: 'http://bj.bcebos.com/fcvideo/b30a5b12c25b878c024e924b4f0d4c46.mp3', vgcid: 'VCG43628479081'}, {name: 'do not disturb', playtime: '237.0', url: 'http://bj.bcebos.com/fcvideo/ec01194fcc80c9ef787c6ee26700a356.mp3', vgcid: 'VCG43628471685'}, {name: 'St. Tropez', playtime: '276.0', url: 'http://bj.bcebos.com/fcvideo/402b2d036c60d26b2f39db301cfede66.mp3', vgcid: 'VCG43628479373'}, {name: 'Prague', playtime: '353.0', url: 'http://bj.bcebos.com/fcvideo/7253c3251b71b3da072842a2f9cb769f.mp3', vgcid: 'VCG43628479455'}, {name: 'Endstation 30 (UAC Remix)', playtime: '200.0', url: 'http://bj.bcebos.com/fcvideo/2203b72de11120b85af5be8238defd75.mp3', vgcid: 'VCG43628479037'}, {name: 'Serene autumn sky', playtime: '126.0', url: 'http://bj.bcebos.com/fcvideo/64654e1894ed7bb302208568746ebf70.mp3', vgcid: 'VCG43520065677'}, {name: '(CHILL OUT) Years ago', playtime: '114.0', url: 'http://bj.bcebos.com/fcvideo/07d0c55ca4dcd36c64d534017d36129a.mp3', vgcid: 'VCG43520060105'}, {name: '(CHILL OUT) Veronica (variation II)', playtime: '106.0', url: 'http://bj.bcebos.com/fcvideo/656fd70777651ceb2da4cc66a87cb2f7.mp3', vgcid: 'VCG43520063659'}, {name: 'Trip-no-hope', playtime: '274.0', url: 'http://bj.bcebos.com/fcvideo/b98d01ed0cd91af0ef3d16edc09dc6d4.mp3', vgcid: 'VCG43778303431'}]}, {label: '爵士', value: '2', content: [{name: 'Flight', playtime: '339.0', url: 'http://bj.bcebos.com/fcvideo/edd6392bb7798a5a1425198e96d872a5.mp3', vgcid: 'VCG43728726273'}, {name: 'In the circus', playtime: '68.0', url: 'http://bj.bcebos.com/fcvideo/86cb8af5ee7a8defd246ffda2e478110.mp3', vgcid: 'VCG43673672037'}, {name: '(EASY-FOLK) Just A Guitar (60sec edit)', playtime: '67.0', url: 'http://bj.bcebos.com/fcvideo/fbf32a3493f6c9198f2dd4d81a8ecaed.mp3', vgcid: 'VCG43656918905'}, {name: 'BUSY BOSSA', playtime: '136.0', url: 'http://bj.bcebos.com/fcvideo/ea3214faf31a8d5a4a395805ca511be4.mp3', vgcid: 'VCG43673670169'}, {name: 'Spring Jazz', playtime: '159.0', url: 'http://bj.bcebos.com/fcvideo/5fd7328e76d9e3d8d0becd9d0dcc40ce.mp3', vgcid: 'VCG43673658997'}, {name: 'Sunshine Latino Loop', playtime: '24.0', url: 'http://bj.bcebos.com/fcvideo/4a0c270daada90287352aa4f94a62ad8.mp3', vgcid: 'VCG43728718871'}, {name: 'tearaway', playtime: '233.0', url: 'http://bj.bcebos.com/fcvideo/acf6e4fb38f3abd081524683c2261b45.mp3', vgcid: 'VCG43662139837'}, {name: 'sand chess', playtime: '228.0', url: 'http://bj.bcebos.com/fcvideo/3906fd2f847309c77e0d0a96c3f00849.mp3', vgcid: 'VCG43662139731'}, {name: 'MS104nc aka Ninth Cut', playtime: '323.0', url: 'http://bj.bcebos.com/fcvideo/b57710fbe5473a0584c37bb82f28e83e.mp3', vgcid: 'VCG43728726095'}, {name: 'Interlude', playtime: '262.0', url: 'http://bj.bcebos.com/fcvideo/5dcff9dcc2e7047fc33d8eda3cbb3a13.mp3', vgcid: 'VCG43728721513'}, {name: 'The Entertainer-Scott Joplin-Classic Ragtime Piano (30 seconds)', playtime: '30.0', url: 'http://bj.bcebos.com/fcvideo/5f10500e9b40b3ee077893cfc629b3aa.mp3', vgcid: 'VCG43656893363'}, {name: 'R&B Track', playtime: '218.0', url: 'http://bj.bcebos.com/fcvideo/dbee9ff2d1c6991d2914c770defd4424.mp3', vgcid: 'VCG43712947611'}, {name: '(JAZZ-SWING) Upper Class (30sec edit)', playtime: '36.0', url: 'http://bj.bcebos.com/fcvideo/1ad94b29408b29e574317e3f4d80ba76.mp3', vgcid: 'VCG43656876047'}, {name: 'Smoking lounge LOOP 2', playtime: '48.0', url: 'http://bj.bcebos.com/fcvideo/819366a16fc42dcab5bf0670aaaf351c.mp3', vgcid: 'VCG43656877551'}, {name: 'Seduction Jazz - short loop 2', playtime: '48.0', url: 'http://bj.bcebos.com/fcvideo/5fd11150b3373bb7f3c22db4ca809f36.mp3', vgcid: 'VCG43656871119'}, {name: 'Cheviot in Green-Loop # 4', playtime: '53.0', url: 'http://bj.bcebos.com/fcvideo/b31f019bec452d2ed11af692ad84118d.mp3', vgcid: 'VCG43656860043'}, {name: 'Where You Lovin\' Gone (1930\'s mix)', playtime: '224.0', url: 'http://bj.bcebos.com/fcvideo/786a2c627beb16da28cf6f057b87fa60.mp3', vgcid: 'VCG43712920805'}, {name: '70\'s Chic [loop 3]', playtime: '132.0', url: 'http://bj.bcebos.com/fcvideo/b451531e2aa98baeb16ea6a563153125.mp3', vgcid: 'VCG43656880325'}, {name: 'UNCOMMON ESTEEM', playtime: '64.0', url: 'http://bj.bcebos.com/fcvideo/e6e9660c1845428b4491de06a3b7fcdd.WAV', vgcid: 'VCG43728745233'}, {name: 'Hello [full length]', playtime: '192.0', url: 'http://bj.bcebos.com/fcvideo/a50927d0552bc2b3796013ab194b7083.mp3', vgcid: 'VCG43656859223'}, {name: 'WITHOUT A CARE', playtime: '78.0', url: 'http://bj.bcebos.com/fcvideo/dc2469691c8cc9f9eb9804f58eaa5596.WAV', vgcid: 'VCG43728745541'}, {name: 'Where The Wild Thyme Blows (60 sec Acid Jazz/Trip Hop)', playtime: '59.0', url: 'http://bj.bcebos.com/fcvideo/bb63da00efb99c8d1b6ee4a33118f38d.mp3', vgcid: 'VCG43728736125'}, {name: 'Well You Shouldn\'t', playtime: '93.0', url: 'http://bj.bcebos.com/fcvideo/fd91630b91069925313be835efd0fa1e.mp3', vgcid: 'VCG43728738487'}, {name: 'BAR NONE', playtime: '105.0', url: 'http://bj.bcebos.com/fcvideo/1e8fb551b5ede117f356c6f2aa3fe70f.WAV', vgcid: 'VCG43728744589'}, {name: 'Jazz Times', playtime: '147.0', url: 'http://bj.bcebos.com/fcvideo/be293b1f12b906861bce709183d1ed6e.mp3', vgcid: 'VCG43728742331'}, {name: 'Walking Jazz', playtime: '130.0', url: 'http://bj.bcebos.com/fcvideo/bd49ed3678a722586f2f13e36818a42f.mp3', vgcid: 'VCG43728742347'}, {name: 'JOURNEY', playtime: '461.0', url: 'http://bj.bcebos.com/fcvideo/56cc13ea5517800f9b8790838f56a469.WAV', vgcid: 'VCG43728744565'}, {name: 'Happy Hour', playtime: '103.0', url: 'http://bj.bcebos.com/fcvideo/cd4b04610c3274da485dbe0273333312.mp3', vgcid: 'VCG43739694095'}, {name: 'Drinks At The Savoy', playtime: '166.0', url: 'http://bj.bcebos.com/fcvideo/4ef09a8a9c900f25d53a15a1930a5f6c.mp3', vgcid: 'VCG43739694137'}, {name: 'AZUSARUS', playtime: '564.0', url: 'http://bj.bcebos.com/fcvideo/1ed1ae2a3923dc506dbb90783c39558a.WAV', vgcid: 'VCG43728744559'}, {name: 'We\'ll Get There (Instrumental - Loop Version)', playtime: '72.0', url: 'http://bj.bcebos.com/fcvideo/4438fdafb5b74befc6f75182eaadc7c5.mp3', vgcid: 'VCG43778304771'}, {name: 'Holiday Romance', playtime: '115.0', url: 'http://bj.bcebos.com/fcvideo/f2b3b7b9f1a33656095b939e34fb81b1.mp3', vgcid: 'VCG43778305573'}, {name: 'EXOTIC GETAWAY', playtime: '63.0', url: 'http://bj.bcebos.com/fcvideo/b56c61564fcb5fef8092c79a9d298c16.mp3', vgcid: 'VCG43769147789'}, {name: 'Friday\'s Skyline', playtime: '158.0', url: 'http://bj.bcebos.com/fcvideo/d50ed53e664aacf21e850b31c42ff77d.mp3', vgcid: 'VCG43795388507'}, {name: 'The Dance', playtime: '52.0', url: 'http://bj.bcebos.com/fcvideo/2b1d383a42b2827b53581d09308e40d2.mp3', vgcid: 'VCG43712954269'}, {name: 'Chilled lounge FULL TRACK', playtime: '208.0', url: 'http://bj.bcebos.com/fcvideo/906b930560d72e38913ae2aa52583924.mp3', vgcid: 'VCG43520067107'}, {name: 'root j', playtime: '236.0', url: 'http://bj.bcebos.com/fcvideo/ed521023e80937849b85f763093259d2.mp3', vgcid: 'VCG43520070361'}, {name: 'Jazz On Cruise Liner', playtime: '95.0', url: 'http://bj.bcebos.com/fcvideo/738f54d416bce7602f7c6a1946063455.mp3', vgcid: 'VCG43752845261'}, {name: 'Jazz City', playtime: '100.0', url: 'http://bj.bcebos.com/fcvideo/6bb154368272a27d2b76c9653b2284f9.mp3', vgcid: 'VCG43752845217'}, {name: 'eqlz_63101 17bz (v2)', playtime: '180.0', url: 'http://bj.bcebos.com/fcvideo/e1cadcf4fe74a7667eb1304a2dae90e0.mp3', vgcid: 'VCG43752844007'}, {name: 'Drops of Love', playtime: '237.0', url: 'http://bj.bcebos.com/fcvideo/763620f9560eea18f4f5c4ab196b9d7d.mp3', vgcid: 'VCG43520065015'}, {name: 'Night Rhythm', playtime: '282.0', url: 'http://bj.bcebos.com/fcvideo/d1e08e4efe3b640f29a36fa724b52723.mp3', vgcid: 'VCG43762154815'}]}, {label: '摇滚', value: '3', content: [{name: 'The Road Home (Full Song)', playtime: '70.0', url: 'http://bj.bcebos.com/fcvideo/9b6a23ddb40daa770f9adcfc79bd3911.mp3', vgcid: 'VCG43673670525'}, {name: 'The Road Home- Main (Loop-Ready)', playtime: '10.0', url: 'http://bj.bcebos.com/fcvideo/ce61b3a90220ab4edbdf1f572e5bf7ed.mp3', vgcid: 'VCG43673670529'}, {name: 'The Dawn Will Come (90 sec ver.)', playtime: '97.0', url: 'http://bj.bcebos.com/fcvideo/54afcd6715fefe6f1ba38bb47f284978.mp3', vgcid: 'VCG43673688681'}, {name: 'Raindrops (Full Length - Underscore)', playtime: '120.0', url: 'http://bj.bcebos.com/fcvideo/4488d8dc2da8942c68d0e67617e0df24.mp3', vgcid: 'VCG43662178875'}, {name: 'Doors of Perception', playtime: '114.0', url: 'http://bj.bcebos.com/fcvideo/8ea120331e06055ae4a4d1312d86f836.mp3', vgcid: 'VCG43673674107'}, {name: 'muscle school', playtime: '181.0', url: 'http://bj.bcebos.com/fcvideo/bfc168049b97567836d381082581a7cc.mp3', vgcid: 'VCG43662139497'}, {name: 'Early rock  (Acoustic guitars mix)', playtime: '179.0', url: 'http://bj.bcebos.com/fcvideo/3fc46be46ee82a73eb28208c06e44f54.mp3', vgcid: 'VCG43656920277'}, {name: 'Hope', playtime: '209.0', url: 'http://bj.bcebos.com/fcvideo/59f30b29b923da49d86b9ea2019eb805.mp3', vgcid: 'VCG43752840999'}, {name: 'Spacecat- Remix (instrumental)', playtime: '209.0', url: 'http://bj.bcebos.com/fcvideo/2f3ab97b71b4193160367f0f38c270a9.mp3', vgcid: 'VCG43728727113'}, {name: 'Just Watching', playtime: '122.0', url: 'http://bj.bcebos.com/fcvideo/de31ea4f63251a1a654c93418752cdb8.mp3', vgcid: 'VCG43728723783'}, {name: 'Hog Creek Blues', playtime: '204.0', url: 'http://bj.bcebos.com/fcvideo/bfa0ddea3382868c668959bee429c144.mp3', vgcid: 'VCG43728726407'}, {name: 'Soldier', playtime: '240.0', url: 'http://bj.bcebos.com/fcvideo/f8b00c88b25a0373ca68f177ae78bb1b.mp3', vgcid: 'VCG43728730437'}, {name: 'Hometown B (small mix)', playtime: '132.0', url: 'http://bj.bcebos.com/fcvideo/4fbb1c8a87d58b31f64485c984f82579.mp3', vgcid: 'VCG43728722587'}, {name: 'Tarnsfield Acoustic Only', playtime: '198.0', url: 'http://bj.bcebos.com/fcvideo/bc530634ba9ef7bbf5e5a8b358ca5818.mp3', vgcid: 'VCG43728715939'}, {name: 'Sweetness', playtime: '172.0', url: 'http://bj.bcebos.com/fcvideo/6164ed3700312fc13901661b13b347ef.mp3', vgcid: 'VCG43728722679'}, {name: 'Bright Side of the Line', playtime: '224.0', url: 'http://bj.bcebos.com/fcvideo/213a72ebddb11b28f76362bfb6ba7cec.mp3', vgcid: 'VCG43728718961'}, {name: 'Happy Positive Rock', playtime: '126.0', url: 'http://bj.bcebos.com/fcvideo/66e446b9bec775d325fe6ff4788cf373.mp3', vgcid: 'VCG43728713787'}, {name: 'Sanctuary', playtime: '220.0', url: 'http://bj.bcebos.com/fcvideo/61ed27f317750b7a9929b54b6d67a3db.mp3', vgcid: 'VCG43728718965'}, {name: 'Falling Down (no vox) (Simulated Stereo)', playtime: '310.0', url: 'http://bj.bcebos.com/fcvideo/fa32e0ef7e97d5c1f8ebe8651c4febd6.mp3', vgcid: 'VCG43712925945'}, {name: 'Louise Avenue', playtime: '255.0', url: 'http://bj.bcebos.com/fcvideo/8729d9c9b06ba72554cde60fd4d0bd56.mp3', vgcid: 'VCG43628488505'}, {name: 'Back To My Heart', playtime: '281.0', url: 'http://bj.bcebos.com/fcvideo/481711a8d5f6c2f3c1406802f5db181f.mp3', vgcid: 'VCG43743632349'}, {name: 'Love Is On Your Side (no vox) (Simulated Stereo)', playtime: '253.0', url: 'http://bj.bcebos.com/fcvideo/0bc95254de729fc0ec3596b6de72ea87.mp3', vgcid: 'VCG43712912769'}, {name: 'Out Of Line (drum stem)', playtime: '229.0', url: 'http://bj.bcebos.com/fcvideo/830b14c1935d28b2613c471f4ddf6a89.mp3', vgcid: 'VCG43712914233'}, {name: '(XMAS-ROCK) Jingle Bells Success Stinger#2 (chorus)', playtime: '21.0', url: 'http://bj.bcebos.com/fcvideo/4ea495c17d69682f110feceacce30a21.mp3', vgcid: 'VCG43656878481'}, {name: '(EASY-L) She LOOP4 (Full Mix with pizzicato strings)', playtime: '24.0', url: 'http://bj.bcebos.com/fcvideo/cfb07d6eeee856845e3fa683fa58c88c.mp3', vgcid: 'VCG43656872615'}, {name: 'Newborn Day (1930\'s mix)', playtime: '262.0', url: 'http://bj.bcebos.com/fcvideo/72a3bb949ce5976f0212eb9dd7822dbd.mp3', vgcid: 'VCG43712921379'}, {name: '(AC.GUITAR) Smooth Acoustic Grace (30sec edit)', playtime: '34.0', url: 'http://bj.bcebos.com/fcvideo/57f167b935f7ddd8957fa52e2c86c1eb.mp3', vgcid: 'VCG43656869919'}, {name: 'Sparkles Of Joy (Finale Loop 3)', playtime: '42.0', url: 'http://bj.bcebos.com/fcvideo/830c7148b7d57a353ed5b987992d6182.mp3', vgcid: 'VCG43662169179'}, {name: '(ROCK) Hot And Funky (FULL TRACK)', playtime: '203.0', url: 'http://bj.bcebos.com/fcvideo/e212a3982ac5f6becd8b84531bc6904f.mp3', vgcid: 'VCG43656858125'}, {name: 'Funked', playtime: '190.0', url: 'http://bj.bcebos.com/fcvideo/d63ac6e2e500101bc5dd28ac34f8d410.mp3', vgcid: 'VCG43554162353'}, {name: 'Live Free', playtime: '213.0', url: 'http://bj.bcebos.com/fcvideo/b97e39a74778d385c7891942bd43062d.mp3', vgcid: 'VCG43728732371'}, {name: 'Action Advertising Background', playtime: '43.0', url: 'http://bj.bcebos.com/fcvideo/48246675e308d69fa4e6b8b2218f1c2b.mp3', vgcid: 'VCG43728742961'}, {name: 'Change of Scenery', playtime: '287.0', url: 'http://bj.bcebos.com/fcvideo/47d20939d2408d4ce45a2179fdd1f236.mp3', vgcid: 'VCG43110097653'}, {name: '(ROCK-BLUES) Black And Blue (FULL TRACK, no slide guitar)', playtime: '204.0', url: 'http://bj.bcebos.com/fcvideo/3aa6fe748c2539e302b73eb21895044f.mp3', vgcid: 'VCG43656864915'}, {name: 'Graces (INSTRUMENTAL)', playtime: '196.0', url: 'http://bj.bcebos.com/fcvideo/d2e3574a2e99d7af8fad76e5acc93593.mp3', vgcid: 'VCG43728745311'}, {name: 'Don\'t Be the One (instrumental)', playtime: '213.0', url: 'http://bj.bcebos.com/fcvideo/78d7f7c81b63aa56c839338a7f4a8190.mp3', vgcid: 'VCG43728745077'}, {name: 'The Lay Down (Instrumental)', playtime: '262.0', url: 'http://bj.bcebos.com/fcvideo/7d6a73e613a465001f757eb13782b9ef.mp3', vgcid: 'VCG43554162515'}, {name: 'Sunshine On Blue Eyes', playtime: '98.0', url: 'http://bj.bcebos.com/fcvideo/924c5d6e0177f7b1c8e614a06a7cb595.mp3', vgcid: 'VCG43728738467'}, {name: 'Journey (INSTRUMENTAL)', playtime: '213.0', url: 'http://bj.bcebos.com/fcvideo/3fd23fdf104d88f8be6353a4ad2cb666.mp3', vgcid: 'VCG43728745359'}, {name: '\'Til Morning (INSTRUMENTAL)', playtime: '203.0', url: 'http://bj.bcebos.com/fcvideo/28d1c7324bf057f0d341af6d0d2ab88a.mp3', vgcid: 'VCG43728745341'}, {name: 'The Layover', playtime: '231.0', url: 'http://bj.bcebos.com/fcvideo/39e4ec5624678f174809c6bf89e956d0.mp3', vgcid: 'VCG43728743199'}, {name: 'Flying Through The Sunset', playtime: '114.0', url: 'http://bj.bcebos.com/fcvideo/30eae68b93e855afa32fc7af1a240604.mp3', vgcid: 'VCG43728738425'}, {name: 'Auld Lang Syne', playtime: '148.0', url: 'http://bj.bcebos.com/fcvideo/20b67c5b9774f7342d21873ee3eb2d03.mp3', vgcid: 'VCG43728738247'}, {name: 'Please You', playtime: '206.0', url: 'http://bj.bcebos.com/fcvideo/a21cea973762a4a32a27649caf774086.mp3', vgcid: 'VCG43728743569'}, {name: 'Starbright', playtime: '233.0', url: 'http://bj.bcebos.com/fcvideo/57d767491785b092aa339020dbe3dec4.mp3', vgcid: 'VCG43712923565'}, {name: 'Don\'t Call Me Darlin\'', playtime: '319.0', url: 'http://bj.bcebos.com/fcvideo/bf26715e06844f0e178d7453c8161879.mp3', vgcid: 'VCG43712953749'}, {name: 'Grounded', playtime: '206.0', url: 'http://bj.bcebos.com/fcvideo/5be77d130e8968f640e59eb5a6f63ddb.mp3', vgcid: 'VCG43712935937'}, {name: 'For All I Know', playtime: '238.0', url: 'http://bj.bcebos.com/fcvideo/d2a98e9ceee42a9b11e614362f949cba.mp3', vgcid: 'VCG43712935955'}, {name: 'Soon To Be Mine', playtime: '116.0', url: 'http://bj.bcebos.com/fcvideo/1589b2945b6aa2a50c26352a9cf3cc5c.mp3', vgcid: 'VCG43782352033'}, {name: 'What You Gonna Do - INST', playtime: '204.0', url: 'http://bj.bcebos.com/fcvideo/dab08eb5a83d125dd6ff644e4dd4f03c.mp3', vgcid: 'VCG43795390149'}, {name: 'Cathedral - INST', playtime: '221.0', url: 'http://bj.bcebos.com/fcvideo/d9fb0b454c11aa7e218d70694df45767.mp3', vgcid: 'VCG43795390147'}, {name: 'Acoustic Sunrise', playtime: '223.0', url: 'http://bj.bcebos.com/fcvideo/d907726121e96be8049c7ccf1b587168.mp3', vgcid: 'VCG43712933391'}, {name: 'What Happens When (Instrumental)', playtime: '231.0', url: 'http://bj.bcebos.com/fcvideo/c2df05133c418640491d93ad531e0704.mp3', vgcid: 'VCG43712930037'}, {name: 'Speechless (Instrumental)', playtime: '278.0', url: 'http://bj.bcebos.com/fcvideo/6611fc0ad2e75c5c242364c3e8ad3e99.mp3', vgcid: 'VCG43712930057'}, {name: 'iSong (Full Mix)', playtime: '61.0', url: 'http://bj.bcebos.com/fcvideo/6360261427a9fa1df420932f20614d02.mp3', vgcid: 'VCG43520066393'}, {name: '50\'s retro shooby-doo song (loop)', playtime: '72.0', url: 'http://bj.bcebos.com/fcvideo/1113aedd8f4142f79d465c6b1c460a1a.mp3', vgcid: 'VCG43520066419'}, {name: 'Today\'s pop', playtime: '236.0', url: 'http://bj.bcebos.com/fcvideo/264c0b71366726c1e607b7f0ed25184e.mp3', vgcid: 'VCG43520089185'}, {name: 'My Solitude', playtime: '151.0', url: 'http://bj.bcebos.com/fcvideo/b644bc3694d3c25e8f1bff9865bc2c05.mp3', vgcid: 'VCG43520066317'}, {name: 'Appreciate You - Instrumental', playtime: '218.0', url: 'http://bj.bcebos.com/fcvideo/eefebfd5bc831c801ce7cfad358117be.mp3', vgcid: 'VCG43712372111'}, {name: 'Hurricane\'s Coming - Instrumental', playtime: '192.0', url: 'http://bj.bcebos.com/fcvideo/81f43314b67823298121490caecc6020.mp3', vgcid: 'VCG43712372105'}, {name: 'Polarization', playtime: '138.0', url: 'http://bj.bcebos.com/fcvideo/bf00189e943676f9d9f0b69af35f6752.mp3', vgcid: 'VCG43778302655'}]}, {label: '乡村', value: '4', content: [{name: 'Acoustic Inspiration', playtime: '131.0', url: 'http://bj.bcebos.com/fcvideo/6aef205c92e1374f2ec574dda028c647.mp3', vgcid: 'VCG43728727941'}, {name: 'Country Lady', playtime: '214.0', url: 'http://bj.bcebos.com/fcvideo/c6d99ec98bb2f4ddd80eba10a01b87ae.mp3', vgcid: 'VCG43728717527'}, {name: 'Sweet Eyes', playtime: '199.0', url: 'http://bj.bcebos.com/fcvideo/72b48eb4fd8efd63bfb9a7416e849cea.mp3', vgcid: 'VCG43728715023'}, {name: 'Feelin\' Blue (no vox) (Simulated Stereo)', playtime: '151.0', url: 'http://bj.bcebos.com/fcvideo/4fc3e09f8f4e2fd88cb40137e7048826.mp3', vgcid: 'VCG43712905981'}, {name: 'Girl Out West (no vox) (Simulated Stereo)', playtime: '255.0', url: 'http://bj.bcebos.com/fcvideo/fe6c19d665c7e49bcdefeb97c672bf16.mp3', vgcid: 'VCG43712905983'}, {name: 'All I Had Left (no vox) (Simulated Stereo)', playtime: '365.0', url: 'http://bj.bcebos.com/fcvideo/354eaf9be1ef852c26e92dfbe01ebcd5.mp3', vgcid: 'VCG43712905971'}, {name: 'One For Me (acoustic stem)', playtime: '191.0', url: 'http://bj.bcebos.com/fcvideo/a8ab030ab1117f5c43bcb9792a86b2b2.mp3', vgcid: 'VCG43712908337'}, {name: 'The Sure Thing Myth - Instrumental', playtime: '240.0', url: 'http://bj.bcebos.com/fcvideo/d4cca637505192608aa1eb2d339570f6.mp3', vgcid: 'VCG43728714773'}, {name: 'Roll Roll On (no vox) (Simulated Stereo)', playtime: '210.0', url: 'http://bj.bcebos.com/fcvideo/8fc161aaef6cd44d1623bbabc37e4c2f.mp3', vgcid: 'VCG43712907835'}, {name: 'Roll Roll On (vocal stem)', playtime: '204.0', url: 'http://bj.bcebos.com/fcvideo/4ca06c3acddf8fd971510135a48036fc.mp3', vgcid: 'VCG43712909075'}, {name: 'Roll Roll On (acoustic 2 stem)', playtime: '204.0', url: 'http://bj.bcebos.com/fcvideo/9cc3004116ecb8f5470909dad30e0b31.mp3', vgcid: 'VCG43712909091'}, {name: 'Stay The Night (acoustic stem)', playtime: '241.0', url: 'http://bj.bcebos.com/fcvideo/15c3f6214ae788666f1870e20cc16d53.mp3', vgcid: 'VCG43712907511'}, {name: 'I Would Love You (1930\'s mix)', playtime: '222.0', url: 'http://bj.bcebos.com/fcvideo/e111937c784cb618eae4511dc0fa8fa4.mp3', vgcid: 'VCG43712905885'}, {name: 'She Got Love (instrumental) (1930\'s mix)', playtime: '367.0', url: 'http://bj.bcebos.com/fcvideo/96558ff4b7df96413a68c7c56831e136.mp3', vgcid: 'VCG43712905865'}, {name: 'Out Of Line (1930\'s mix)', playtime: '229.0', url: 'http://bj.bcebos.com/fcvideo/13063b4b1806870f404ed40eb1a56263.mp3', vgcid: 'VCG43712905817'}, {name: 'This Guitar and Me', playtime: '201.0', url: 'http://bj.bcebos.com/fcvideo/33029142004e1960ea9e21e63592d6b5.mp3', vgcid: 'VCG43712928377'}, {name: 'Songs About Carolina', playtime: '227.0', url: 'http://bj.bcebos.com/fcvideo/7b7d0984ddc92f468293c8c584cd708f.mp3', vgcid: 'VCG43712928463'}, {name: 'Some Still Play (1930\'s mix)', playtime: '265.0', url: 'http://bj.bcebos.com/fcvideo/05d1bf6a3b0bb2852cea91185abb3225.mp3', vgcid: 'VCG43712905869'}, {name: 'Meander In Miranda\'s Mind - acoustic guitar only', playtime: '213.0', url: 'http://bj.bcebos.com/fcvideo/5149b33e87568a703a30f504906e7231.mp3', vgcid: 'VCG43728732443'}, {name: '(COUNTRY-POP) Mellow Nice Drive (FULL TRACK)', playtime: '203.0', url: 'http://bj.bcebos.com/fcvideo/c4055c31351a81a1867157a0c55f17ee.mp3', vgcid: 'VCG43656859805'}, {name: 'Maybe not', playtime: '222.0', url: 'http://bj.bcebos.com/fcvideo/b9ea392f242951f8b51ed10d00d556b5.mp3', vgcid: 'VCG43554162337'}, {name: 'Halfway There', playtime: '88.0', url: 'http://bj.bcebos.com/fcvideo/4f3b8dbfe7ac9765aaebce6f9d07cea4.mp3', vgcid: 'VCG43728742355'}, {name: 'waw waw song', playtime: '64.0', url: 'http://bj.bcebos.com/fcvideo/139761f13d9b586e7490e159cc2842a7.mp3', vgcid: 'VCG43596502347'}, {name: 'Hot Southern Night', playtime: '190.0', url: 'http://bj.bcebos.com/fcvideo/2c3ee9fda32605c573ddf7c1d81090ff.mp3', vgcid: 'VCG43728737755'}, {name: 'Sam\'s Song With No Words', playtime: '138.0', url: 'http://bj.bcebos.com/fcvideo/866452f284bcf0f25fd2ff04fca6758c.mp3', vgcid: 'VCG43712945103'}, {name: 'Sunshine City', playtime: '244.0', url: 'http://bj.bcebos.com/fcvideo/c01052eaf44328c722afa363a81a22fe.mp3', vgcid: 'VCG43712916817'}, {name: 'Country Rock Cue Two', playtime: '74.0', url: 'http://bj.bcebos.com/fcvideo/2593affdb1b6e5ba3a01d490172f4511.mp3', vgcid: 'VCG43795388249'}, {name: 'Dirty Funky Slide', playtime: '78.0', url: 'http://bj.bcebos.com/fcvideo/4699c146885893d5518dd4d3b5e77cd3.mp3', vgcid: 'VCG43795388253'}, {name: 'Circus Horses', playtime: '129.0', url: 'http://bj.bcebos.com/fcvideo/67d0aa0fc157059fac93b71ad3543b05.mp3', vgcid: 'VCG43514590915'}, {name: 'Class Reunion Ins', playtime: '91.0', url: 'http://bj.bcebos.com/fcvideo/dc16ba66b3265ffab990b53ea959334a.mp3', vgcid: 'VCG43712947259'}, {name: 'Carefree day', playtime: '124.0', url: 'http://bj.bcebos.com/fcvideo/7d845f686b9f1b3d9807060621b7aa53.mp3', vgcid: 'VCG43520085927'}, {name: 'acoustic country - G maj-93bpm-LOOPABLE', playtime: '82.0', url: 'http://bj.bcebos.com/fcvideo/c2db5121a8e97da8430e56fa6ecaddb8.mp3', vgcid: 'VCG43762155653'}]}, {label: '抒情', value: '5', content: [{name: '(Chill out) Strange question', playtime: '90.0', url: 'http://bj.bcebos.com/fcvideo/35712564db28cb143736bc5e95403a4e.mp3', vgcid: 'VCG43662194413'}, {name: '(BGM) Cool Your Business (LOOP full length)', playtime: '216.0', url: 'http://bj.bcebos.com/fcvideo/acb80cae937613b798d4648dce5de567.mp3', vgcid: 'VCG43656920337'}, {name: 'JungleLady', playtime: '107.0', url: 'http://bj.bcebos.com/fcvideo/4597db07493a986b4d7701f0d1cf6ceb.mp3', vgcid: 'VCG43728712821'}, {name: 'Journey', playtime: '200.0', url: 'http://bj.bcebos.com/fcvideo/099db642aec294f16dc2cddc7f78af57.mp3', vgcid: 'VCG43728733013'}, {name: 'notation', playtime: '307.0', url: 'http://bj.bcebos.com/fcvideo/ad7debab3e59d00125966492de70e3b3.mp3', vgcid: 'VCG43728713297'}, {name: 'Jazzy Jazz 1', playtime: '261.0', url: 'http://bj.bcebos.com/fcvideo/a010db94f4a2f605a46e23d8a603a287.mp3', vgcid: 'VCG43728713343'}, {name: 'Golden Heart', playtime: '280.0', url: 'http://bj.bcebos.com/fcvideo/57818d4c51d69166f9f357873d0dba31.mp3', vgcid: 'VCG43728713117'}, {name: 'Relaxing Modern R&B', playtime: '213.0', url: 'http://bj.bcebos.com/fcvideo/5826e7ab0edd848383bd65caa30064d7.mp3', vgcid: 'VCG43728746025'}, {name: 'Floatin\'', playtime: '192.0', url: 'http://bj.bcebos.com/fcvideo/0525d2dcacfd2241c8f7d04e8d4393c8.mp3', vgcid: 'VCG43712914431'}, {name: '(BGM) Cool Your Business LOOP3 (LITE+bass solo)', playtime: '48.0', url: 'http://bj.bcebos.com/fcvideo/e3d6b38fd180c3b06e2e638805a1bfb8.mp3', vgcid: 'VCG43656879741'}, {name: 'Say It As It Is Drum Loop stem 86 ppm', playtime: '23.0', url: 'http://bj.bcebos.com/fcvideo/c7496a8c41eedcf809799bf11f31ba7e.mp3', vgcid: 'VCG43728738367'}, {name: 'Get Away (Feel Good)', playtime: '189.0', url: 'http://bj.bcebos.com/fcvideo/d95dd3b9d5412f5260d84f912fa80183.mp3', vgcid: 'VCG43728732003'}, {name: 'Reasons', playtime: '122.0', url: 'http://bj.bcebos.com/fcvideo/1cd70b841daa19d299874126958eb01e.mp3', vgcid: 'VCG43743633991'}, {name: 'Steady Eddie', playtime: '153.0', url: 'http://bj.bcebos.com/fcvideo/b9f306ac5276833b6c24c964fb5a5827.mp3', vgcid: 'VCG43739694803'}, {name: 'Harlem\'s Paradise', playtime: '193.0', url: 'http://bj.bcebos.com/fcvideo/bee12aa034bfca9485b9c6acecf845c6.mp3', vgcid: 'VCG43728733923'}, {name: 'Marvel At It', playtime: '158.0', url: 'http://bj.bcebos.com/fcvideo/8a1b4071fe3a4616e9251b411dbcf8ae.mp3', vgcid: 'VCG43739694835'}, {name: 'Olive', playtime: '164.0', url: 'http://bj.bcebos.com/fcvideo/837a0c84d7b7e0c3d7c77e13f1049f73.mp3', vgcid: 'VCG43712932001'}, {name: 'road', playtime: '76.0', url: 'http://bj.bcebos.com/fcvideo/9856c6ba689ba0c0fb7eb361c8b66f8b.mp3', vgcid: 'VCG43795388917'}, {name: 'NeoSoulBeat', playtime: '224.0', url: 'http://bj.bcebos.com/fcvideo/6142b7762b0b947de664ae4c1471ee47.mp3', vgcid: 'VCG43782351997'}, {name: 'Chill', playtime: '260.0', url: 'http://bj.bcebos.com/fcvideo/0a4bd7a70829e524fc91694d9c432b03.mp3', vgcid: 'VCG43795388273'}, {name: 'Feel', playtime: '274.0', url: 'http://bj.bcebos.com/fcvideo/592ee08024b10449248c200abfe6686b.mp3', vgcid: 'VCG43795388279'}, {name: 'Big Man', playtime: '108.0', url: 'http://bj.bcebos.com/fcvideo/67e6dd1801479eefa653d37feb3781a4.mp3', vgcid: 'VCG43712940647'}, {name: 'Sometimes', playtime: '218.0', url: 'http://bj.bcebos.com/fcvideo/ac8a03afe9a058dc11856935b0b8b1de.mp3', vgcid: 'VCG43795388143'}, {name: 'Sunday Eve', playtime: '269.0', url: 'http://bj.bcebos.com/fcvideo/e75c200dd5fb1d8aab6226eb3e49225d.mp3', vgcid: 'VCG43600195233'}, {name: 'Gospel Piano Praise [loop 1]', playtime: '72.0', url: 'http://bj.bcebos.com/fcvideo/67ee8825d399f5c285762f536e30659f.mp3', vgcid: 'VCG43520083787'}, {name: 'Simple Soul', playtime: '149.0', url: 'http://bj.bcebos.com/fcvideo/bfeb84552b8055d14f170734651053d4.mp3', vgcid: 'VCG43712946523'}, {name: 'Evening', playtime: '159.0', url: 'http://bj.bcebos.com/fcvideo/1dcb04705d4cb18640bb1f17ac1d7306.mp3', vgcid: 'VCG43600193919'}]}, {label: '流行', value: '6', content: [{name: 'Dreamer', playtime: '20.0', url: 'http://bj.bcebos.com/fcvideo/c06ba140c98d27299ca1dac2f225faf1.mp3', vgcid: 'VCG43673675825'}, {name: 'Rain Dance', playtime: '10.0', url: 'http://bj.bcebos.com/fcvideo/a96f6e86dc2e0db8aece8053d99e86f9.mp3', vgcid: 'VCG43673675915'}, {name: 'Predator', playtime: '20.0', url: 'http://bj.bcebos.com/fcvideo/1e6dacbaafbb3b97cd17782962d0a4c2.mp3', vgcid: 'VCG43673675911'}, {name: '(LOOP) Happy family', playtime: '21.0', url: 'http://bj.bcebos.com/fcvideo/33bc746602a26dde16f909998987759a.mp3', vgcid: 'VCG43662194589'}, {name: 'Whistling in the shower', playtime: '30.0', url: 'http://bj.bcebos.com/fcvideo/ce74b6522fa44caf4e2161ed4f10f2d2.mp3', vgcid: 'VCG43673673181'}, {name: '(EDM) Chill Out Slow Synth LOOP', playtime: '10.0', url: 'http://bj.bcebos.com/fcvideo/f24f21f324f779a24dbffcb578652f34.mp3', vgcid: 'VCG43656915375'}, {name: 'Bellisima', playtime: '41.0', url: 'http://bj.bcebos.com/fcvideo/12f7b859244615bafa0dee215a6e3391.mp3', vgcid: 'VCG43673675783'}, {name: 'World background two (loopable)', playtime: '42.0', url: 'http://bj.bcebos.com/fcvideo/175f70c71e545932e38869531b2c43c3.mp3', vgcid: 'VCG43662196323'}, {name: '(BGM) Peaceful Bliss LOOP2 (fullmix, w synth)', playtime: '42.0', url: 'http://bj.bcebos.com/fcvideo/8cc45776f5231a9324f3edffae8d1b20.mp3', vgcid: 'VCG43656922487'}, {name: 'Terminal loop', playtime: '48.0', url: 'http://bj.bcebos.com/fcvideo/b638282b6886e74cfe556fdd921135ea.mp3', vgcid: 'VCG43662196109'}, {name: 'Acoustic Positive', playtime: '51.0', url: 'http://bj.bcebos.com/fcvideo/91e73a0576305ae8921fa7f350a38d37.mp3', vgcid: 'VCG43662167257'}, {name: 'Tender fantasy', playtime: '51.0', url: 'http://bj.bcebos.com/fcvideo/bb1c2871b2f6232a83ee97c4dab10520.mp3', vgcid: 'VCG43662168677'}, {name: 'Folk Acoustic', playtime: '62.0', url: 'http://bj.bcebos.com/fcvideo/63d858e4c4e93d8be2a87caa15c03db5.mp3', vgcid: 'VCG43662167459'}, {name: 'Melody', playtime: '65.0', url: 'http://bj.bcebos.com/fcvideo/57c9a624f17a6639c5d0ca37ab2a9bbc.mp3', vgcid: 'VCG43662188453'}, {name: 'Relaxing Intro', playtime: '67.0', url: 'http://bj.bcebos.com/fcvideo/887641f2428dc3a6c23c46833c712c96.mp3', vgcid: 'VCG43662167625'}, {name: 'Acoustic Guitars Strumming (100 sec)', playtime: '80.0', url: 'http://bj.bcebos.com/fcvideo/d10d17e950a812155ed3db2ede2b3a13.mp3', vgcid: 'VCG43662185903'}, {name: '(HIP HOP) Velevet Subways', playtime: '80.0', url: 'http://bj.bcebos.com/fcvideo/b33c3e2e0e2bfb16717b0e945d1ce956.mp3', vgcid: 'VCG43662194489'}, {name: 'End of games- Sports Music', playtime: '76.0', url: 'http://bj.bcebos.com/fcvideo/ea14dbbaecec37e3418d679562b140d8.mp3', vgcid: 'VCG43662195237'}, {name: '(LOUNGE) At the end', playtime: '78.0', url: 'http://bj.bcebos.com/fcvideo/656506f99bd583a44c4cc3e7e60b24be.mp3', vgcid: 'VCG43662194651'}, {name: 'Blues Sketch', playtime: '84.0', url: 'http://bj.bcebos.com/fcvideo/6cd44b5736f0761994dbc9a8078bd376.mp3', vgcid: 'VCG43681742405'}, {name: 'All I Need Is You', playtime: '211.0', url: 'http://bj.bcebos.com/fcvideo/515f1bf86723ed21c864264faceb2bd3.mp3', vgcid: 'VCG43673661615'}, {name: 'Landsky', playtime: '94.0', url: 'http://bj.bcebos.com/fcvideo/43ff5c2e375ef907b8db98bd447239de.mp3', vgcid: 'VCG43662195427'}, {name: 'Dreamy Guitars (Full Verse)', playtime: '105.0', url: 'http://bj.bcebos.com/fcvideo/1c4b7ce7dd95fcb35507acd3c72e145e.mp3', vgcid: 'VCG43662186059'}, {name: 'Background Chillout Loop 1', playtime: '21.0', url: 'http://bj.bcebos.com/fcvideo/2f9903d5c9548b42ae709ee10a0a8116.mp3', vgcid: 'VCG43662167273'}, {name: 'Folk Acoustic Loop', playtime: '24.0', url: 'http://bj.bcebos.com/fcvideo/0794c93a7f4177695749672fd73904ea.mp3', vgcid: 'VCG43662167461'}, {name: 'Life tonight (loopable)', playtime: '42.0', url: 'http://bj.bcebos.com/fcvideo/1aa5c748429401f19719b9be561e7426.mp3', vgcid: 'VCG43662195489'}, {name: 'Landsky (LOOP)', playtime: '42.0', url: 'http://bj.bcebos.com/fcvideo/fac958e2e936e78f83caf6cba06fda1e.mp3', vgcid: 'VCG43662195429'}, {name: 'Happy Family - Guitar Loop', playtime: '32.0', url: 'http://bj.bcebos.com/fcvideo/1ec48b3654f7ede0ca6cf8ef9a3cbebb.mp3', vgcid: 'VCG43656912231'}, {name: '(EASY-MUZAK) Cheesy Elevator LOOP2 (bells melody)', playtime: '48.0', url: 'http://bj.bcebos.com/fcvideo/b609a61af875735cdfcace54c246a8bf.mp3', vgcid: 'VCG43656921871'}, {name: 'Motion Background(loopable)', playtime: '64.0', url: 'http://bj.bcebos.com/fcvideo/fbc74ac63fd68cb610a10ded34c8260d.mp3', vgcid: 'VCG43662195655'}, {name: 'Joy(loopable)', playtime: '65.0', url: 'http://bj.bcebos.com/fcvideo/e9dd9b82416be922c2d4a1eb92fefc8c.mp3', vgcid: 'VCG43662195403'}, {name: '(BGM) Corporate Light (60sec edit)', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/ae3d0117cf200cc35314feb7a2796ada.mp3', vgcid: 'VCG43656921659'}, {name: '(EDM) Uplifting Synthpop (60sec edit)', playtime: '62.0', url: 'http://bj.bcebos.com/fcvideo/8ecb232b8d827b50323af021662afd35.mp3', vgcid: 'VCG43656922469'}, {name: '(BGM) Peaceful Bliss (60sec edit)', playtime: '66.0', url: 'http://bj.bcebos.com/fcvideo/b801fe3e278fff179d53dba1df4f895a.mp3', vgcid: 'VCG43656920665'}, {name: '(XMAS) I Saw Three Ships (15sec outro)', playtime: '15.0', url: 'http://bj.bcebos.com/fcvideo/8137650cc01b11e201ab3f8da156b9ba.mp3', vgcid: 'VCG43656906003'}, {name: '(BALLAD) Everyday Like Sunday (short LOOP)', playtime: '24.0', url: 'http://bj.bcebos.com/fcvideo/8ebece2e9b1c86973aafc71d861890b8.mp3', vgcid: 'VCG43656898473'}, {name: 'SPA Generation(Short version)', playtime: '93.0', url: 'http://bj.bcebos.com/fcvideo/f1c28fc80ec39ef3b99136bb33699743.mp3', vgcid: 'VCG43662196011'}, {name: 'Romantic and Acoustic Autumn', playtime: '103.0', url: 'http://bj.bcebos.com/fcvideo/eebd967ca645d3818f610104c6997908.mp3', vgcid: 'VCG43662184385'}, {name: '(AC.GUITAR) Serene Background Texture (60sec edit)', playtime: '61.0', url: 'http://bj.bcebos.com/fcvideo/18746201a793815bf7901bcb05b12dbc.mp3', vgcid: 'VCG43656918589'}, {name: '(AC.GUITAR) Serene Background Texture LOOP2 (fullmix+string pads)', playtime: '42.0', url: 'http://bj.bcebos.com/fcvideo/3a18a9530ceafc5fff7973ece1cd2326.mp3', vgcid: 'VCG43656921737'}, {name: 'Acoustic Highlights 2', playtime: '115.0', url: 'http://bj.bcebos.com/fcvideo/d01bbba504d2474231a3e39d982342ab.mp3', vgcid: 'VCG43673673229'}, {name: '11. Minimal music piece for piano, classical guitar and glockenspiel', playtime: '137.0', url: 'http://bj.bcebos.com/fcvideo/1126689956f57e5caa2bff027c207d43.mp3', vgcid: 'VCG43673657275'}, {name: 'Wonderful', playtime: '115.0', url: 'http://bj.bcebos.com/fcvideo/122b74ec52ab42b6838e8aa5f7f25bbb.mp3', vgcid: 'VCG43673658647'}, {name: 'At the end', playtime: '110.0', url: 'http://bj.bcebos.com/fcvideo/0b8166138414a99a408c3564b9a2734d.mp3', vgcid: 'VCG43662194835'}, {name: 'Freestyle', playtime: '111.0', url: 'http://bj.bcebos.com/fcvideo/7c52ff14ad03f98175a96490c9daacc8.mp3', vgcid: 'VCG43662195291'}, {name: '(Chill out) LEMON (short version)', playtime: '112.0', url: 'http://bj.bcebos.com/fcvideo/dc4083226162877193a57638c83741b4.mp3', vgcid: 'VCG43662194399'}, {name: 'Cheerful Background music', playtime: '132.0', url: 'http://bj.bcebos.com/fcvideo/e9843a20ebc1ac30ebe6a8f058096ab3.mp3', vgcid: 'VCG43662168609'}, {name: 'Grace And Elegance', playtime: '165.0', url: 'http://bj.bcebos.com/fcvideo/ded7c2c2453f96ec019c2268a8621148.mp3', vgcid: 'VCG43662185277'}, {name: 'Good times (60sec cut)', playtime: '62.0', url: 'http://bj.bcebos.com/fcvideo/202116d1c8dcac4bae2edc8d64c94ed8.mp3', vgcid: 'VCG43656901599'}, {name: 'Eagle', playtime: '142.0', url: 'http://bj.bcebos.com/fcvideo/ceaf6aac9ff4fd8895db92b99c1fbd5e.mp3', vgcid: 'VCG43673673629'}, {name: '(ROCK-POP) Echo 6-String Butterflies (Loopable)', playtime: '42.0', url: 'http://bj.bcebos.com/fcvideo/421b765a2a2d56842db3f540d73ac2f9.mp3', vgcid: 'VCG43656907633'}, {name: 'Story', playtime: '145.0', url: 'http://bj.bcebos.com/fcvideo/6e5ad1d972f730ba6876c89a1d71f14f.mp3', vgcid: 'VCG43662188653'}, {name: 'Happy Hour (60sec cut)', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/8394d2f6ff595b3b6980e04b1ea0a56d.mp3', vgcid: 'VCG43656911081'}, {name: 'Moonshine (Full Length)', playtime: '146.0', url: 'http://bj.bcebos.com/fcvideo/de75ac3fc40f213d18b1f9bec1b16043.mp3', vgcid: 'VCG43662177683'}, {name: '(ACOUSTIC) Happy Tune (60sec edit)', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/5706515ba51d672d388206971b56ccc5.mp3', vgcid: 'VCG43656909057'}, {name: 'Morning Sun', playtime: '30.0', url: 'http://bj.bcebos.com/fcvideo/3400e450cd9e3e684667835976a22f6d.mp3', vgcid: 'VCG43728727803'}, {name: 'Nova', playtime: '142.0', url: 'http://bj.bcebos.com/fcvideo/3b0c656c6fe08360186953c09fc8d956.mp3', vgcid: 'VCG43673663695'}, {name: 'This is life', playtime: '148.0', url: 'http://bj.bcebos.com/fcvideo/933d28142df35e5fa87752396fb33e48.mp3', vgcid: 'VCG43673658635'}, {name: 'Here Comes Success - Reflections', playtime: '158.0', url: 'http://bj.bcebos.com/fcvideo/4891e2b72071bed6b8a164b22f45b706.mp3', vgcid: 'VCG43662188393'}, {name: 'UKE (FULL LENGTH)', playtime: '150.0', url: 'http://bj.bcebos.com/fcvideo/1b947c33999092d6066de1969ab34c77.mp3', vgcid: 'VCG43673662091'}, {name: 'Here Comes Success', playtime: '158.0', url: 'http://bj.bcebos.com/fcvideo/6303511f1a3dd81f531f4a4472d62214.mp3', vgcid: 'VCG43662188391'}, {name: 'Step By Steps', playtime: '156.0', url: 'http://bj.bcebos.com/fcvideo/6fcac4a71872b6132b0d7bc53a4d2097.mp3', vgcid: 'VCG43662184457'}, {name: 'Backyard Memories [Full length]', playtime: '160.0', url: 'http://bj.bcebos.com/fcvideo/d41268d20cae403863dd71f88dd33fab.mp3', vgcid: 'VCG43662186759'}, {name: 'Little Things That Change The World', playtime: '187.0', url: 'http://bj.bcebos.com/fcvideo/d6b1a9ffb90f1d4b6c2771dcfc8f0281.mp3', vgcid: 'VCG43673672369'}, {name: 'Positive Things', playtime: '168.0', url: 'http://bj.bcebos.com/fcvideo/65b4549011fa597d9d481172a2f7797e.mp3', vgcid: 'VCG43662184239'}, {name: 'Floating (slower mix)', playtime: '237.0', url: 'http://bj.bcebos.com/fcvideo/3e0c9edcf3be7edf39b21a09d2641111.mp3', vgcid: 'VCG43656908079'}, {name: 'Sunday break', playtime: '213.0', url: 'http://bj.bcebos.com/fcvideo/18cf03a96b485cab84db4aa6981d2c8b.mp3', vgcid: 'VCG43656913383'}, {name: '(ROCK-BLUES) Ghost Town (FULL TRACK)', playtime: '209.0', url: 'http://bj.bcebos.com/fcvideo/fbadd8a510809bc53adf9b0a6ebb5342.mp3', vgcid: 'VCG43656914147'}, {name: 'Yellow light horizon (Full track loopable)', playtime: '180.0', url: 'http://bj.bcebos.com/fcvideo/a95db4e91957b7701aa0cda923206bcd.mp3', vgcid: 'VCG43656901773'}, {name: '(BALLAD-ROCK) 80\'s Pussy Rock (underscore full length)', playtime: '232.0', url: 'http://bj.bcebos.com/fcvideo/51afb8359428c19c140d54dcd932a58c.mp3', vgcid: 'VCG43656912253'}, {name: 'Eastern fields', playtime: '238.0', url: 'http://bj.bcebos.com/fcvideo/7924f7ca0bde849c37264a299d61a407.mp3', vgcid: 'VCG43662182675'}, {name: '(ACOUSTIC) Sweet Laid Back (FULL TRACK)', playtime: '117.0', url: 'http://bj.bcebos.com/fcvideo/df695b049b16963c890c85811e1ebd6d.mp3', vgcid: 'VCG43656911375'}, {name: '(ACOUSTIC) Springtime Sweetness (full length LOOP)', playtime: '128.0', url: 'http://bj.bcebos.com/fcvideo/66d8c2b7d75bc5a6119d626adcb23be8.mp3', vgcid: 'VCG43656904031'}, {name: '(ACOUSTIC) Relaxed Strumming (full length LOOP)', playtime: '126.0', url: 'http://bj.bcebos.com/fcvideo/1a7f5c70166dc5c13fe71dfb24a2e880.mp3', vgcid: 'VCG43656906575'}, {name: 'Contemplation (Full track)', playtime: '157.0', url: 'http://bj.bcebos.com/fcvideo/72d8050a11df7f7ae43fdcd111a33708.mp3', vgcid: 'VCG43656899059'}, {name: 'Park Bench', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/dd6a9874a9930b0008542fcaac8614bb.mp3', vgcid: 'VCG43728723707'}, {name: 'Could Be Holiday Time', playtime: '88.0', url: 'http://bj.bcebos.com/fcvideo/26008ec03a57f06c2b1c8e012837b36a.mp3', vgcid: 'VCG43752841043'}, {name: 'Charango advertise - minimal vesion', playtime: '58.0', url: 'http://bj.bcebos.com/fcvideo/7c9b1cfba68e584a37a8a3d994af4719.mp3', vgcid: 'VCG43728714491'}, {name: 'Little Things (60 Sec)', playtime: '62.0', url: 'http://bj.bcebos.com/fcvideo/a8ac206cf8160b03922154f6627e494c.mp3', vgcid: 'VCG43728714599'}, {name: 'Acoustic Chill', playtime: '132.0', url: 'http://bj.bcebos.com/fcvideo/0ea128bddc36faa6fda7a611d95221ca.mp3', vgcid: 'VCG43728727827'}, {name: 'Complexities', playtime: '30.0', url: 'http://bj.bcebos.com/fcvideo/cdf3754966316b12467beb89b3890847.mp3', vgcid: 'VCG43712935839'}, {name: 'Dramatic Events (Loop Version)', playtime: '90.0', url: 'http://bj.bcebos.com/fcvideo/3d25b3105a643d477e8780b8e2745838.mp3', vgcid: 'VCG43728723029'}, {name: '492', playtime: '229.0', url: 'http://bj.bcebos.com/fcvideo/b5ff380a3f3dd604eb885c63cbb990a6.mp3', vgcid: 'VCG43762152975'}, {name: 'Quirky Uke Fun', playtime: '119.0', url: 'http://bj.bcebos.com/fcvideo/d6aa1b05ce42c18e3de1637dd49b74dd.mp3', vgcid: 'VCG43728713871'}, {name: 'Ukulele and Acoustic Guitar Inspirational', playtime: '145.0', url: 'http://bj.bcebos.com/fcvideo/5641d9017127016e6cc047faf0b4b613.mp3', vgcid: 'VCG43728715961'}, {name: 'Positive Acoustic', playtime: '80.0', url: 'http://bj.bcebos.com/fcvideo/fcba666f987e599bee83ca06b496abae.mp3', vgcid: 'VCG43728713353'}, {name: 'Get Yer Ukes Out', playtime: '146.0', url: 'http://bj.bcebos.com/fcvideo/77be25b349ac1ddbd3da873f47dcd8c4.mp3', vgcid: 'VCG43728713873'}, {name: 'Crying Rain Loop 1', playtime: '21.0', url: 'http://bj.bcebos.com/fcvideo/cfbd51afe84be883329a9a2bbcbf9e2c.mp3', vgcid: 'VCG43628487425'}, {name: 'You Can Count On Me B (small mix)', playtime: '131.0', url: 'http://bj.bcebos.com/fcvideo/8363a02f21f9670d191ab7abbaec3271.mp3', vgcid: 'VCG43728722611'}, {name: 'Heart On A String B (with pads)', playtime: '139.0', url: 'http://bj.bcebos.com/fcvideo/6a39ea8520ed7f8451a39612d689afa2.mp3', vgcid: 'VCG43728719699'}, {name: 'Hipster Intro [Instrumental]', playtime: '50.0', url: 'http://bj.bcebos.com/fcvideo/3969a77081dd195e7f8fbb7d7924060b.mp3', vgcid: 'VCG43728745999'}, {name: 'Family Road Trip B (no Drms)', playtime: '135.0', url: 'http://bj.bcebos.com/fcvideo/98a2770f8df4d29e7c6e7acec20caba1.mp3', vgcid: 'VCG43728714039'}, {name: 'Dream a Dream B (no Drms)', playtime: '144.0', url: 'http://bj.bcebos.com/fcvideo/d610b8882c5f9876610302626b105eb3.mp3', vgcid: 'VCG43728714043'}, {name: 'Hide and Seek (Full track loopable)', playtime: '165.0', url: 'http://bj.bcebos.com/fcvideo/e9155d12afb05f85529fa666a62bf5a4.mp3', vgcid: 'VCG43656896381'}, {name: 'Corporate Happy People Logo', playtime: '39.0', url: 'http://bj.bcebos.com/fcvideo/e2483fa36eb71a3b7f357bbf9f69d991.mp3', vgcid: 'VCG43628487419'}, {name: 'Family Road Trip A', playtime: '136.0', url: 'http://bj.bcebos.com/fcvideo/d43d1f521589f8d4ba1346aea2a7fbb2.mp3', vgcid: 'VCG43728714019'}, {name: 'machinochiisanahikari', playtime: '304.0', url: 'http://bj.bcebos.com/fcvideo/919cd8a67f7e83fc1537c66cc5d4392b.mp3', vgcid: 'VCG43728712815'}, {name: 'Chalkdust', playtime: '135.0', url: 'http://bj.bcebos.com/fcvideo/b092506189a672d43cae8f04958eb3a7.mp3', vgcid: 'VCG43728714409'}, {name: 'Peace to All', playtime: '223.0', url: 'http://bj.bcebos.com/fcvideo/2071e3f1c8c272b95d2acd4a25774b16.mp3', vgcid: 'VCG43728726365'}, {name: 'Recital Room', playtime: '170.0', url: 'http://bj.bcebos.com/fcvideo/0bc2e7a8be33d5729a767ca22a2c029c.mp3', vgcid: 'VCG43728715035'}, {name: 'Happy', playtime: '153.0', url: 'http://bj.bcebos.com/fcvideo/93550111e420de129049324dffd0d842.mp3', vgcid: 'VCG43728714357'}, {name: 'Love Is On The Way', playtime: '227.0', url: 'http://bj.bcebos.com/fcvideo/ffa9d43c33bed89e34bbf862d8f6d1e2.mp3', vgcid: 'VCG43728733625'}, {name: 'Every Day', playtime: '124.0', url: 'http://bj.bcebos.com/fcvideo/f64d56115cea588dc471ffd3ab20170c.mp3', vgcid: 'VCG43712898327'}, {name: 'Hushed Conversation', playtime: '140.0', url: 'http://bj.bcebos.com/fcvideo/50f726b26cb00dea4aa567fb656a8ee2.mp3', vgcid: 'VCG43728713661'}, {name: 'K\'s Song Cue', playtime: '298.0', url: 'http://bj.bcebos.com/fcvideo/7e8579d5079e86dd34f2324f7faa40d2.mp3', vgcid: 'VCG43728727653'}, {name: 'Front Porch Serenade A', playtime: '156.0', url: 'http://bj.bcebos.com/fcvideo/fc1aef7ae4a1e2d4fc99a3248de56dc0.mp3', vgcid: 'VCG43728713557'}, {name: 'A new morning', playtime: '256.0', url: 'http://bj.bcebos.com/fcvideo/123fe6c7515be111816444fee1cc24d9.mp3', vgcid: 'VCG43628486029'}, {name: 'Evening Shade A', playtime: '169.0', url: 'http://bj.bcebos.com/fcvideo/1d826779f805fb5b4dc43583b1e35771.mp3', vgcid: 'VCG43728713569'}, {name: 'Rock Pop Anthem Swing', playtime: '135.0', url: 'http://bj.bcebos.com/fcvideo/50c11cbe7c8afb1e8ec8b1fc76c0c2d7.mp3', vgcid: 'VCG43728746027'}, {name: 'Soft Melody', playtime: '161.0', url: 'http://bj.bcebos.com/fcvideo/3073de0e353426fcfa1cc9360d8a12f0.mp3', vgcid: 'VCG43712938223'}, {name: 'shoulder shrugg', playtime: '285.0', url: 'http://bj.bcebos.com/fcvideo/531ab635286a0b660138e8d9b4f94f92.mp3', vgcid: 'VCG43728713307'}, {name: 'Dry Heat', playtime: '159.0', url: 'http://bj.bcebos.com/fcvideo/53f63e65b37918c46eac3d586ad3cef9.mp3', vgcid: 'VCG43712937991'}, {name: 'Fantasy waves FULL TRACK', playtime: '176.0', url: 'http://bj.bcebos.com/fcvideo/72f41f98ddb1c32e5c269700c39085aa.mp3', vgcid: 'VCG43520061701'}, {name: 'wayne part 2', playtime: '251.0', url: 'http://bj.bcebos.com/fcvideo/84e388f14ce86d43b7d81a8ca9820703.mp3', vgcid: 'VCG43728713313'}, {name: 'Visionary (30 Second Edit)', playtime: '35.0', url: 'http://bj.bcebos.com/fcvideo/eceb82c6f317046e085456a919823c04.mp3', vgcid: 'VCG43656895831'}, {name: 'I can see future (30sec cut)', playtime: '30.0', url: 'http://bj.bcebos.com/fcvideo/a2f0603ae16416ee0b4d7b604220e8cb.mp3', vgcid: 'VCG43656896937'}, {name: 'Heart Of Life (Short Length)', playtime: '41.0', url: 'http://bj.bcebos.com/fcvideo/0a18bdccaeb4356a4f2976253d80c61d.mp3', vgcid: 'VCG43656896423'}, {name: 'Inspiring flight (Short loop)', playtime: '40.0', url: 'http://bj.bcebos.com/fcvideo/b53b4a3dfe02288fc5b94fa1f9e17564.mp3', vgcid: 'VCG43656890739'}]}, {label: '嘻哈', value: '7', content: [{name: '90s R&B Loop', playtime: '22.0', url: 'http://bj.bcebos.com/fcvideo/74b17d826262b0e27dfa946954c1abc7.mp3', vgcid: 'VCG43673669269'}, {name: 'Pop Paradise', playtime: '67.0', url: 'http://bj.bcebos.com/fcvideo/27eef38406ae601dea5485f2b45ec5f3.mp3', vgcid: 'VCG43673670227'}, {name: 'Indie Surfer (Full Track)', playtime: '114.0', url: 'http://bj.bcebos.com/fcvideo/e95036aaaa1ce40b9831b8a1813b1edb.mp3', vgcid: 'VCG43673669967'}, {name: 'Lonely Child (Full Length)', playtime: '166.0', url: 'http://bj.bcebos.com/fcvideo/8a24facebc1af201807272d88ba3a8f7.mp3', vgcid: 'VCG43662177095'}, {name: 'Lighters', playtime: '181.0', url: 'http://bj.bcebos.com/fcvideo/56f485e9536838cd417f6065e1b6fd0d.mp3', vgcid: 'VCG43728726351'}, {name: 'Relaxation - Cre8tiv3', playtime: '104.0', url: 'http://bj.bcebos.com/fcvideo/0063f4e7932d4136a688471375108b32.mp3', vgcid: 'VCG43712934179'}, {name: 'Life Blood of Soul', playtime: '208.0', url: 'http://bj.bcebos.com/fcvideo/e4dceb54af0da4259af316c848963bc2.mp3', vgcid: 'VCG43728732943'}, {name: 'My Bad -Instrumental', playtime: '287.0', url: 'http://bj.bcebos.com/fcvideo/97d1227972a449d85f0ceb74019170bc.mp3', vgcid: 'VCG43728730819'}, {name: 'Blue song', playtime: '153.0', url: 'http://bj.bcebos.com/fcvideo/7168d91774d510044313fab6ec36a39e.mp3', vgcid: 'VCG43728715457'}, {name: 'Can\'t Slow Me Down instrumental', playtime: '245.0', url: 'http://bj.bcebos.com/fcvideo/911a1f41484dbd40567c91706d511aa2.mp3', vgcid: 'VCG43728713339'}, {name: 'Nick Arara Feat. The 209 Band - Jama', playtime: '275.0', url: 'http://bj.bcebos.com/fcvideo/bdec96546b62b94ab83e9812398a77c8.mp3', vgcid: 'VCG43728725117'}, {name: 'Just The Right Time', playtime: '231.0', url: 'http://bj.bcebos.com/fcvideo/c5ecb1805c56be6f41f63724c814bfba.mp3', vgcid: 'VCG43628489171'}, {name: 'Swarm', playtime: '178.0', url: 'http://bj.bcebos.com/fcvideo/a0525182bdfc40e60b7c955cff48d60d.mp3', vgcid: 'VCG43712922009'}, {name: 'Strangeness', playtime: '213.0', url: 'http://bj.bcebos.com/fcvideo/3d884a01928be1442bb52d0af762c665.mp3', vgcid: 'VCG43712922007'}, {name: 'Something About You', playtime: '275.0', url: 'http://bj.bcebos.com/fcvideo/bb17edd57327e5bef8c1aea44175637b.mp3', vgcid: 'VCG43712942007'}, {name: 'Breakfast in Bed', playtime: '290.0', url: 'http://bj.bcebos.com/fcvideo/2e995315df69e60518e369584ad10032.mp3', vgcid: 'VCG43712942001'}, {name: 'Handcuffed (Instrumental Version)', playtime: '193.0', url: 'http://bj.bcebos.com/fcvideo/73939d9de6b1db58faa433a5790b8eb1.mp3', vgcid: 'VCG43728741297'}, {name: 'The Promise', playtime: '240.0', url: 'http://bj.bcebos.com/fcvideo/5b504ac8d6665282aa85ad16547e8abf.mp3', vgcid: 'VCG43752842543'}, {name: 'Escape From Seagate', playtime: '214.0', url: 'http://bj.bcebos.com/fcvideo/5b649f2d8b05c1f75984f7a3cacdaa43.mp3', vgcid: 'VCG43728733919'}, {name: 'No Lie', playtime: '110.0', url: 'http://bj.bcebos.com/fcvideo/c3ed6c36f403ec816fe695b9373dd309.mp3', vgcid: 'VCG43743633985'}, {name: 'I\'m Sorry', playtime: '120.0', url: 'http://bj.bcebos.com/fcvideo/2bb86c906111a61112d77bd820708352.mp3', vgcid: 'VCG43743633955'}, {name: 'Expired', playtime: '124.0', url: 'http://bj.bcebos.com/fcvideo/cb042c79fe4a42d0d0490ca34896d924.mp3', vgcid: 'VCG43743633939'}, {name: 'Hollywood Beaat', playtime: '110.0', url: 'http://bj.bcebos.com/fcvideo/fed192390da909353e2eb6aabf861ffd.mp3', vgcid: 'VCG43712945107'}, {name: 'jealous', playtime: '221.0', url: 'http://bj.bcebos.com/fcvideo/a09e211f17e6fe191e6fb9918b202390.mp3', vgcid: 'VCG43712929453'}, {name: 'Bubblegum no drums loop', playtime: '46.0', url: 'http://bj.bcebos.com/fcvideo/e387a6d7b36ea27ef583b18cca927bc3.mp3', vgcid: 'VCG43782352257'}, {name: 'Bubblegum 60 sec', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/d9baf002943b968122339b9bd2e3fe32.mp3', vgcid: 'VCG43782352253'}, {name: 'Gems of Wisdom', playtime: '246.0', url: 'http://bj.bcebos.com/fcvideo/a2cec7e17408d8d5baa837dcac4c03ca.mp3', vgcid: 'VCG43712945841'}, {name: 'violins not violence', playtime: '146.0', url: 'http://bj.bcebos.com/fcvideo/6d2907b18c0c624cdabd83d68a5e8b20.mp3', vgcid: 'VCG43712906197'}, {name: 'Leap Year', playtime: '157.0', url: 'http://bj.bcebos.com/fcvideo/38e2b8088bbadfedd2a7c9554d6e9df5.mp3', vgcid: 'VCG43712903317'}, {name: 'Rooftop Chillin 60 sec', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/94226bd5f66fb265c633d36cf6077239.mp3', vgcid: 'VCG43778305337'}, {name: 'Macadoshis', playtime: '198.0', url: 'http://bj.bcebos.com/fcvideo/2a8adb08e67826242621dc333da0d1e2.mp3', vgcid: 'VCG43712934881'}, {name: 'Bubblegum', playtime: '190.0', url: 'http://bj.bcebos.com/fcvideo/15119723c55ae5070da184e1455c919f.mp3', vgcid: 'VCG43782352251'}, {name: 'Rooftop Chillin', playtime: '170.0', url: 'http://bj.bcebos.com/fcvideo/9bf55134dfa9167500e25c4a87136e10.mp3', vgcid: 'VCG43778305335'}, {name: 'Pick It Up', playtime: '182.0', url: 'http://bj.bcebos.com/fcvideo/54d304445da2c9697c7da4976db317d0.mp3', vgcid: 'VCG43795390079'}, {name: 'Happy Piano', playtime: '123.0', url: 'http://bj.bcebos.com/fcvideo/2b094a784fbecfd6665f6dffd23d4ac0.mp3', vgcid: 'VCG43712934275'}, {name: 'Down N Out', playtime: '248.0', url: 'http://bj.bcebos.com/fcvideo/dc66b7c9d29a2951291cef228d7bd060.mp3', vgcid: 'VCG43795388277'}]}, {label: '其它', value: '8', content: [{name: '(REGGAE) Easy Loop (SHORT vers)', playtime: '22.0', url: 'http://bj.bcebos.com/fcvideo/cbf0461857b1d6de0a712616f437c6e5.mp3', vgcid: 'VCG43656915359'}, {name: 'Sounds of Cuba', playtime: '77.0', url: 'http://bj.bcebos.com/fcvideo/25cd5dd50201b58d0e460a1bc2f7c7df.mp3', vgcid: 'VCG43662189361'}, {name: 'Happy walking', playtime: '80.0', url: 'http://bj.bcebos.com/fcvideo/becc6f82dbb1cd1f47aff8d45360a585.mp3', vgcid: 'VCG43673658209'}, {name: 'Loneliness', playtime: '88.0', url: 'http://bj.bcebos.com/fcvideo/6eff07300bc9a82ddf5d21068203d159.mp3', vgcid: 'VCG43662189295'}, {name: 'Chill Reggae', playtime: '99.0', url: 'http://bj.bcebos.com/fcvideo/406843b606b948dca38193d1c7d04fe1.mp3', vgcid: 'VCG43662167313'}, {name: 'Irish Eyes', playtime: '101.0', url: 'http://bj.bcebos.com/fcvideo/fbe4b8bb751489549fccd7c4e010e269.mp3', vgcid: 'VCG43673675383'}, {name: 'Happy Accoustic (Short Track)', playtime: '115.0', url: 'http://bj.bcebos.com/fcvideo/63c11a4bbd4381a7e99d901aee54c09f.mp3', vgcid: 'VCG43662140149'}, {name: 'funny boy', playtime: '35.0', url: 'http://bj.bcebos.com/fcvideo/8855476ae877c4be498c735c48a2bc64.mp3', vgcid: 'VCG43778302963'}, {name: 'Summertime walk(LOOP)', playtime: '21.0', url: 'http://bj.bcebos.com/fcvideo/09bd245fd8163249807834c06da5ead4.mp3', vgcid: 'VCG43662196051'}, {name: 'Children\'s Playground', playtime: '98.0', url: 'http://bj.bcebos.com/fcvideo/870df4fc9ce29e117aaf854012bec6b2.mp3', vgcid: 'VCG43673672065'}, {name: 'Crying Rain Sadness', playtime: '110.0', url: 'http://bj.bcebos.com/fcvideo/43c00a6cea37ac1cc392dfd6243373b2.mp3', vgcid: 'VCG43662167401'}, {name: 'Joyful Reggae', playtime: '111.0', url: 'http://bj.bcebos.com/fcvideo/9a85f401b7b067efa6449703980f7c25.mp3', vgcid: 'VCG43662167553'}, {name: 'Jes', playtime: '135.0', url: 'http://bj.bcebos.com/fcvideo/91bcd5c666f31a29c4eb5e64a5fb2135.mp3', vgcid: 'VCG43662195397'}, {name: 'Blue Moon Red REGGAE', playtime: '194.0', url: 'http://bj.bcebos.com/fcvideo/c09b46c34ff2b1ef773b93cb2db28f6d.mp3', vgcid: 'VCG43673656811'}, {name: '(FUNK-ROCK) Funkadelic Guitars EMBRYO LOOP4, long', playtime: '42.0', url: 'http://bj.bcebos.com/fcvideo/1aea4cde3fcb68481c8b034a995b809d.mp3', vgcid: 'VCG43656908635'}, {name: '(AC.GUITAR) Beautiful FULL-LOOP (acoustic guitar mix long vers)', playtime: '121.0', url: 'http://bj.bcebos.com/fcvideo/0dc52c87563e8d293bef0913c0f2c072.mp3', vgcid: 'VCG43656914355'}, {name: 'Snap Cool Funk [60\'\']', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/18a13669e0eb8068b4b16cad28d38e27.mp3', vgcid: 'VCG43656912305'}, {name: '[Good Vibes] \'Another Day\'', playtime: '178.0', url: 'http://bj.bcebos.com/fcvideo/35599cc0984bde17631c0b153b49a9b8.mp3', vgcid: 'VCG43673688999'}, {name: 'Campfire Song (full length)', playtime: '194.0', url: 'http://bj.bcebos.com/fcvideo/7266e376cb598b38590d21264d1ad0f8.mp3', vgcid: 'VCG43662138367'}, {name: 'Way Home [loop 1]', playtime: '109.0', url: 'http://bj.bcebos.com/fcvideo/53af9186982731711bfc7b50d046b7ad.mp3', vgcid: 'VCG43656894119'}, {name: 'Summertime (slower groovy mix no brass)', playtime: '222.0', url: 'http://bj.bcebos.com/fcvideo/1772a9e1412f089334e9695886bc1e3e.mp3', vgcid: 'VCG43656911011'}, {name: '(EASY-FOLK) Just A Guitar (LOOP full length)', playtime: '234.0', url: 'http://bj.bcebos.com/fcvideo/5f4e4851addf4fe1353ee8636fd2941b.mp3', vgcid: 'VCG43656922379'}, {name: '(ACOUSTIC) Keep Smiling (FULL TRACK)', playtime: '173.0', url: 'http://bj.bcebos.com/fcvideo/41036b586e08529f110e3765c1e1e8b9.mp3', vgcid: 'VCG43656902885'}, {name: 'All The Best (60 Second Version)', playtime: '59.0', url: 'http://bj.bcebos.com/fcvideo/72d1105e3e5537954ee09f5d093aa36f.mp3', vgcid: 'VCG43728714567'}, {name: 'Winterprayer', playtime: '243.0', url: 'http://bj.bcebos.com/fcvideo/88a37b681e0c891d0ead7e147f111efc.mp3', vgcid: 'VCG43728726585'}, {name: 'Acoustic Loop 2', playtime: '12.0', url: 'http://bj.bcebos.com/fcvideo/550a3d8d709b3d5b81688535c250979e.mp3', vgcid: 'VCG43628488123'}, {name: 'Straight from the Heart B (add Ac. Gtr)', playtime: '131.0', url: 'http://bj.bcebos.com/fcvideo/a189cc286e9053010d5d2ab65b7b1140.mp3', vgcid: 'VCG43728715271'}, {name: 'Tentative Feelings B (add Ac. Gtr)', playtime: '134.0', url: 'http://bj.bcebos.com/fcvideo/c750fc63755ebd09eba10c8da06d0f40.mp3', vgcid: 'VCG43728715281'}, {name: 'Love Tender B (no cello)', playtime: '135.0', url: 'http://bj.bcebos.com/fcvideo/44dd84c66d99ecb75634a771c277fd04.mp3', vgcid: 'VCG43728715367'}, {name: 'Grin and Bear It', playtime: '128.0', url: 'http://bj.bcebos.com/fcvideo/bec6e96a72b8b148914deb944de0af7c.mp3', vgcid: 'VCG43728713867'}, {name: 'The Only Thing She Stole Was My Heart (no vox) (Simulated Stereo)', playtime: '192.0', url: 'http://bj.bcebos.com/fcvideo/b93b7f4cfa4aed1486adc5a103f97d88.mp3', vgcid: 'VCG43712927585'}, {name: 'La', playtime: '93.0', url: 'http://bj.bcebos.com/fcvideo/7dbf7dcb7b1bdd84d120a541d5f5dac4.mp3', vgcid: 'VCG43628488735'}, {name: 'Feel it Too', playtime: '192.0', url: 'http://bj.bcebos.com/fcvideo/3b5e802bfbef89739d12ffcb6e5e7184.mp3', vgcid: 'VCG43600196093'}, {name: 'Letting It All Fall Down (no vox) (Simulated Stereo)', playtime: '223.0', url: 'http://bj.bcebos.com/fcvideo/710a1499323446f5046dfcf71381beb5.mp3', vgcid: 'VCG43712927581'}, {name: 'Recipe for Love', playtime: '236.0', url: 'http://bj.bcebos.com/fcvideo/4b01227260cadfb052b135e962a2111b.mp3', vgcid: 'VCG43628486187'}, {name: 'wishing Wells', playtime: '169.0', url: 'http://bj.bcebos.com/fcvideo/ed2cc4ba0d789251756fc78722ef673a.mp3', vgcid: 'VCG43712939719'}, {name: 'Some Still Play (acoustic stem)', playtime: '237.0', url: 'http://bj.bcebos.com/fcvideo/38be3477ca831e4176adae6f7407da7b.mp3', vgcid: 'VCG43712919475'}, {name: 'Time Enough (instrumental)', playtime: '105.0', url: 'http://bj.bcebos.com/fcvideo/a029302da723a8577ac2247d293b9185.mp3', vgcid: 'VCG43712915415'}, {name: 'Another Man (instrumental)', playtime: '114.0', url: 'http://bj.bcebos.com/fcvideo/d135b7ee465f956d682fa7ac5a9bff86.mp3', vgcid: 'VCG43712915063'}, {name: 'Congo [30\'\']', playtime: '30.0', url: 'http://bj.bcebos.com/fcvideo/7d0fb0145738422e4aeee8d69a45d237.mp3', vgcid: 'VCG43656892851'}, {name: 'Walking With You (instrumental)', playtime: '140.0', url: 'http://bj.bcebos.com/fcvideo/9dfa31c7e6bed9062f6f24c3940049dd.mp3', vgcid: 'VCG43712915421'}, {name: 'SUNSET MAGIC', playtime: '219.0', url: 'http://bj.bcebos.com/fcvideo/c9e8e5baafaabaf723815556bb914a03.mp3', vgcid: 'VCG43712901669'}, {name: 'Jazz up samba LOOP 1 without solo', playtime: '20.0', url: 'http://bj.bcebos.com/fcvideo/4af0de282621e1f4ceaf714969ddfe1f.mp3', vgcid: 'VCG43656871529'}, {name: 'Seems \'Bout Time (instrumental) (1930\'s mix)', playtime: '204.0', url: 'http://bj.bcebos.com/fcvideo/58dba3437b15895041538c287a537249.mp3', vgcid: 'VCG43712924619'}, {name: '(EASY-L) Beautiful (30sec edit, Full Mix)', playtime: '42.0', url: 'http://bj.bcebos.com/fcvideo/621e443c6bba7d18a5ce34193cd09d0d.mp3', vgcid: 'VCG43656872877'}, {name: 'I\'m Still In Love With You (1930\'s mix)', playtime: '168.0', url: 'http://bj.bcebos.com/fcvideo/13ad23b0845877c65d1d9be517cf2b7a.mp3', vgcid: 'VCG43712927575'}, {name: 'Summer Palm Beach FULL TRACK loopable', playtime: '160.0', url: 'http://bj.bcebos.com/fcvideo/2a63ef83417da20a59b8f59879696c52.mp3', vgcid: 'VCG43656881369'}, {name: '(AC.GUITAR) Beautiful (60sec edit, Acoustic Guitar mix)', playtime: '79.0', url: 'http://bj.bcebos.com/fcvideo/80bcc49632e330aa634023f8ed46bbc8.mp3', vgcid: 'VCG43656875873'}, {name: 'Tiki Time (60 Seconds) fun and happy island song', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/6ee6987c5ebe4af4058f0a2d3b7d1763.mp3', vgcid: 'VCG43656869213'}, {name: 'She Got Love', playtime: '328.0', url: 'http://bj.bcebos.com/fcvideo/3d06ac27d4aefa161855278c740d27ad.mp3', vgcid: 'VCG43712915661'}, {name: 'Sweet America (Ident 1)', playtime: '30.0', url: 'http://bj.bcebos.com/fcvideo/9a1e95c9fb57e75f027f0a601989ccab.mp3', vgcid: 'VCG23115167'}, {name: 'Intimate Piano', playtime: '53.0', url: 'http://bj.bcebos.com/fcvideo/fcf0f198eb27a1a354fa61dd6fb451f3.mp3', vgcid: 'VCG23115883'}, {name: 'Happy Acoustic Ident', playtime: '23.0', url: 'http://bj.bcebos.com/fcvideo/e4e30a5e6d01437adcac07536fa03e19.mp3', vgcid: 'VCG23115366'}, {name: '(JAZZ-LATIN) Cool Summer Vibes (LOOP full length)', playtime: '237.0', url: 'http://bj.bcebos.com/fcvideo/e876e2c2db1c295c2aad5ddc887eb6e2.mp3', vgcid: 'VCG43656871451'}, {name: 'Playground', playtime: '247.0', url: 'http://bj.bcebos.com/fcvideo/d15269c03cb6db053a21d717659d8fda.mp3', vgcid: 'VCG43728732605'}, {name: 'Seven and the town', playtime: '30.0', url: 'http://bj.bcebos.com/fcvideo/fe63a9b3c4524f2d7ced63641f5e193d.mp3', vgcid: 'VCG43728745399'}, {name: 'Sensual Piano 60 sec Version', playtime: '60.0', url: 'http://bj.bcebos.com/fcvideo/28f47de061220c284ba0e63c9624c5fd.mp3', vgcid: 'VCG23115622'}, {name: 'Picturesque Piano only', playtime: '65.0', url: 'http://bj.bcebos.com/fcvideo/7130f973b70e5c153e51087494f5ea5a.mp3', vgcid: 'VCG23115676'}, {name: 'Romantic Cinematic Piano', playtime: '131.0', url: 'http://bj.bcebos.com/fcvideo/2af7704eb70c398dda5d09f5710074cf.mp3', vgcid: 'VCG23115746'}, {name: 'Amatory Romantic Piano Version', playtime: '90.0', url: 'http://bj.bcebos.com/fcvideo/dc7061dd750446dd02c468b6c2f2f20e.mp3', vgcid: 'VCG23115493'}, {name: '孤单-Ancient Piano', playtime: '102.0', url: 'http://bj.bcebos.com/fcvideo/8d61de934ed661d2016e1130ede66707.mp3', vgcid: 'VCG23115527'}, {name: 'Wedding Piano (Piano only)', playtime: '148.0', url: 'http://bj.bcebos.com/fcvideo/e20fde60cbe9c3d8e652a29dcbe07df1.mp3', vgcid: 'VCG23115821'}, {name: 'Happy Together', playtime: '136.0', url: 'http://bj.bcebos.com/fcvideo/a970833ed5fed69a70b3c5e8feba2df5.mp3', vgcid: 'VCG23115331'}, {name: 'Tranquil Activities', playtime: '135.0', url: 'http://bj.bcebos.com/fcvideo/909bb954d86ada2647f8b871a7b915a4.mp3', vgcid: 'VCG23115391'}, {name: 'Light Cinematic Piano', playtime: '125.0', url: 'http://bj.bcebos.com/fcvideo/4e659c6b133c2ed9e3f64bba8e42dbb4.mp3', vgcid: 'VCG23115582'}, {name: 'Soft Beautiful Piano', playtime: '172.0', url: 'http://bj.bcebos.com/fcvideo/8d5e363ccafbe2634be50c3536b5db12.mp3', vgcid: 'VCG23115639'}, {name: '国家地理', playtime: '187.0', url: 'http://bj.bcebos.com/fcvideo/74846fb69019b6b1a1a36f7998271d90.mp3', vgcid: 'VCG23115886'}, {name: 'Sentimental Wedding Piano', playtime: '128.0', url: 'http://bj.bcebos.com/fcvideo/6777af4a732179785cf4798b2ce29a75.mp3', vgcid: 'VCG23115643'}, {name: 'Tender Wedding Piano', playtime: '137.0', url: 'http://bj.bcebos.com/fcvideo/ed89d680165b0bbf22bc367afdb61b4c.mp3', vgcid: 'VCG23115630'}, {name: '日出', playtime: '169.0', url: 'http://bj.bcebos.com/fcvideo/44baa2dc706c8fad3eb88cfdac8655c0.mp3', vgcid: 'VCG23115228'}, {name: 'Get On (Full Length - Underscore)', playtime: '103.0', url: 'http://bj.bcebos.com/fcvideo/d82854602c285578deca016ff63e891e.mp3', vgcid: 'VCG43728743191'}, {name: 'Emotions', playtime: '169.0', url: 'http://bj.bcebos.com/fcvideo/b3dceabdec612e23445d9158f232f689.mp3', vgcid: 'VCG23115502'}, {name: 'Autumn Walk', playtime: '158.0', url: 'http://bj.bcebos.com/fcvideo/995b609e184eadfc5807e1d4dcc65d7b.mp3', vgcid: 'VCG23115687'}, {name: 'SUAVE', playtime: '171.0', url: 'http://bj.bcebos.com/fcvideo/d432cc8ddb52f09014569b1a1ce48bb5.WAV', vgcid: 'VCG43728745537'}, {name: 'A Father\'s Wish', playtime: '141.0', url: 'http://bj.bcebos.com/fcvideo/d2155923e3d14cf23053146eed601537.mp3', vgcid: 'VCG23115152'}, {name: 'Can You Help?', playtime: '47.0', url: 'http://bj.bcebos.com/fcvideo/510addfef996af6d861e7963cc9b624e.mp3', vgcid: 'VCG43737402673'}, {name: 'What I Meant', playtime: '190.0', url: 'http://bj.bcebos.com/fcvideo/4d09a45af0025c6c05d3a9d16d22c092.mp3', vgcid: 'VCG43728742859'}, {name: 'Funky Inspiration [60sec]', playtime: '59.0', url: 'http://bj.bcebos.com/fcvideo/50b8c3befae24adff55259c31debcf69.mp3', vgcid: 'VCG43752842549'}, {name: 'Wish I Knew', playtime: '166.0', url: 'http://bj.bcebos.com/fcvideo/d54d4ed9dd20639dddb7398b44d3a89b.mp3', vgcid: 'VCG43728742917'}, {name: 'I Am Alright (No Monologue)', playtime: '222.0', url: 'http://bj.bcebos.com/fcvideo/56350254382c772943d8d9065e83e553.mp3', vgcid: 'VCG23115161'}, {name: 'Love Story', playtime: '110.0', url: 'http://bj.bcebos.com/fcvideo/cac2aa5d6ff0e4935a651c42b1d63eb5.mp3', vgcid: 'VCG43728733587'}, {name: 'Find Out', playtime: '160.0', url: 'http://bj.bcebos.com/fcvideo/38708b041a74902ec8294796b6b456f4.mp3', vgcid: 'VCG43739696047'}, {name: 'I\'m over him', playtime: '76.0', url: 'http://bj.bcebos.com/fcvideo/d2d1a0a2f15727c8d9c346f5913ac63b.mp3', vgcid: 'VCG43712902753'}, {name: 'Ambassador\'s Cocktails', playtime: '117.0', url: 'http://bj.bcebos.com/fcvideo/162bdd512751ba86e6ba7085fb452877.mp3', vgcid: 'VCG43739694127'}, {name: '海边漫游', playtime: '45.0', url: 'http://bj.bcebos.com/fcvideo/c6686795f00814d7c2d181865d5ff4e5.mp3', vgcid: 'VCG23114911'}, {name: 'Hearts Of Asia', playtime: '46.0', url: 'http://bj.bcebos.com/fcvideo/094de6a376348a7a25832cbdd33b5692.mp3', vgcid: 'VCG43782352007'}, {name: 'Dearest Piano', playtime: '50.0', url: 'http://bj.bcebos.com/fcvideo/e8d70ea9538f961063fa6925764191b1.mp3', vgcid: 'VCG23115067'}, {name: 'Leading The Pack', playtime: '85.0', url: 'http://bj.bcebos.com/fcvideo/2720ff56e5decae453738f46bd32f445.mp3', vgcid: 'VCG23114860'}, {name: '命运 - Roll The Dice', playtime: '90.0', url: 'http://bj.bcebos.com/fcvideo/fd7dcb44cad322c4b50ad6ad06d13bf7.mp3', vgcid: 'VCG23114744'}, {name: '重新开始 - Ambient', playtime: '88.0', url: 'http://bj.bcebos.com/fcvideo/27b45aa13ad3e379d2bb333a2f2f7c2e.mp3', vgcid: 'VCG23114909'}, {name: 'Smilin\' Tim', playtime: '246.0', url: 'http://bj.bcebos.com/fcvideo/18fd98edd40efbf3bd91766044944eba.mp3', vgcid: 'VCG43554162691'}, {name: '大美无言 - Beyond Words', playtime: '88.0', url: 'http://bj.bcebos.com/fcvideo/f031b6fb14b3d52a7118b90819753f5c.mp3', vgcid: 'VCG23114944'}, {name: 'Rain', playtime: '87.0', url: 'http://bj.bcebos.com/fcvideo/748d6922dfdb006d101f06de392d2916.mp3', vgcid: 'VCG23114977'}, {name: '点燃我心 - Light Me Up', playtime: '116.0', url: 'http://bj.bcebos.com/fcvideo/39db758b161dc5726e831e3e08d2668e.mp3', vgcid: 'VCG23114795'}, {name: '柔光岁月', playtime: '253.0', url: 'http://bj.bcebos.com/fcvideo/dc342f5eb8042116df648d9b3417e924.mp3', vgcid: 'VCG23114670'}, {name: '02 FUNKY DOO', playtime: '281.0', url: 'http://bj.bcebos.com/fcvideo/a5de5f754677e7ecff540de263f1bca2.mp3', vgcid: 'VCG43743633603'}, {name: '一帆风顺 - The Voyage', playtime: '127.0', url: 'http://bj.bcebos.com/fcvideo/191c545d30580caff4369071c6d59928.mp3', vgcid: 'VCG23114841'}, {name: '第5维 - Ambient Atmospheric', playtime: '130.0', url: 'http://bj.bcebos.com/fcvideo/397a7d314ee9c51ea7ead9eeb7819341.mp3', vgcid: 'VCG23114866'}, {name: '民谣之梦 - Acoustic Dreams', playtime: '123.0', url: 'http://bj.bcebos.com/fcvideo/c87eac564adbbb0f9587a923ce480bbc.mp3', vgcid: 'VCG23114998'}, {name: '追忆流年 - Remembering The Past', playtime: '133.0', url: 'http://bj.bcebos.com/fcvideo/eda22123c643813ef09472116bde87e6.mp3', vgcid: 'VCG23114956'}, {name: '海洋之眼 - Ocean eyes', playtime: '178.0', url: 'http://bj.bcebos.com/fcvideo/cbbbcd8db4f3ae91769fa1fd9de6eb0e.mp3', vgcid: 'VCG23114691'}, {name: '极简生活 - Relax(放松)', playtime: '181.0', url: 'http://bj.bcebos.com/fcvideo/cec6b99d82e6346100dd15c2cd27c96a.mp3', vgcid: 'VCG23114898'}, {name: 'The Rainman', playtime: '179.0', url: 'http://bj.bcebos.com/fcvideo/a4446019ea6b5ae1a25485934008397c.mp3', vgcid: 'VCG23114971'}, {name: 'Dating With You', playtime: '113.0', url: 'http://bj.bcebos.com/fcvideo/0b9155fa12ac8bcfb87935eafb1f95ee.mp3', vgcid: 'VCG43782351889'}, {name: 'EGYPTIAN QUEEN', playtime: '73.0', url: 'http://bj.bcebos.com/fcvideo/efac59dcfbb5d60a13c88c2edd3cdc1e.mp3', vgcid: 'VCG43769147785'}, {name: 'India', playtime: '127.0', url: 'http://bj.bcebos.com/fcvideo/81de541762165f795c6935c0332fc869.mp3', vgcid: 'VCG43782351765'}, {name: 'The Bitter Root', playtime: '221.0', url: 'http://bj.bcebos.com/fcvideo/a1b14878ad887ef21af6a80748a13bcf.mp3', vgcid: 'VCG43778305525'}, {name: 'You Never Know', playtime: '101.0', url: 'http://bj.bcebos.com/fcvideo/3032dcbd28270c949d846919a5388a2b.mp3', vgcid: 'VCG43795389921'}, {name: 'SIX', playtime: '273.0', url: 'http://bj.bcebos.com/fcvideo/ef4ba0a1d9b8914838fbdb2002e98e7a.mp3', vgcid: 'VCG23114630'}, {name: 'Tamish - Alt Mix', playtime: '79.0', url: 'http://bj.bcebos.com/fcvideo/9914a5719ced7b6ff3d790408b5bfaf3.mp3', vgcid: 'VCG43712928033'}, {name: 'Funky Junky', playtime: '194.0', url: 'http://bj.bcebos.com/fcvideo/bff2f5ace0237200c272972f52102fe5.mp3', vgcid: 'VCG43795389685'}, {name: 'Ay Carumba - Drums And Bass', playtime: '98.0', url: 'http://bj.bcebos.com/fcvideo/4b5121392fd0d02b1afefa69295f8388.mp3', vgcid: 'VCG43712928117'}, {name: 'Indian Sunrise', playtime: '133.0', url: 'http://bj.bcebos.com/fcvideo/290da9a38d71b8e40af2a9d7d5e26c38.mp3', vgcid: 'VCG43795389953'}, {name: 'Time Enough', playtime: '108.0', url: 'http://bj.bcebos.com/fcvideo/91db6bd2e27068f3647252c598db1cae.mp3', vgcid: 'VCG43712916443'}, {name: 'Highbrow Savages', playtime: '211.0', url: 'http://bj.bcebos.com/fcvideo/e3fd3528505700d62c54ff05908748e2.mp3', vgcid: 'VCG43795389871'}, {name: 'My Turn To Love', playtime: '132.0', url: 'http://bj.bcebos.com/fcvideo/e8f6620dfd4039157a717580ead4844a.mp3', vgcid: 'VCG43712916971'}, {name: 'Full Ensemble 60 sec', playtime: '63.0', url: 'http://bj.bcebos.com/fcvideo/cf5688141d28a7146b3b68ecd231833a.mp3', vgcid: 'VCG43600194313'}, {name: 'The Fire (Instrumental)', playtime: '294.0', url: 'http://bj.bcebos.com/fcvideo/c73130310bc7994ce2f655ffa07db7da.mp3', vgcid: 'VCG43795388763'}, {name: 'Summer Relaxing Reggae (full length)', playtime: '174.0', url: 'http://bj.bcebos.com/fcvideo/1327802b3986ed8ad1086072e046b960.mp3', vgcid: 'VCG43762156305'}, {name: 'White Lies', playtime: '178.0', url: 'http://bj.bcebos.com/fcvideo/57894c5ce6d9f26f13487a3d9fb6370b.mp3', vgcid: 'VCG43712916291'}, {name: 'Imagine Sunshine', playtime: '228.0', url: 'http://bj.bcebos.com/fcvideo/8078bf79fdfbb20a32346cc2dbe03ff9.mp3', vgcid: 'VCG43712941663'}, {name: 'Medieval dream', playtime: '119.0', url: 'http://bj.bcebos.com/fcvideo/aee5a462526a18feda00899a26610c00.mp3', vgcid: 'VCG43520089621'}, {name: 'My Funny Friend', playtime: '87.0', url: 'http://bj.bcebos.com/fcvideo/637c7e27944813ba91955980fe331a02.mp3', vgcid: 'VCG43520070639'}, {name: 'Falling Faster Than The Rain', playtime: '166.0', url: 'http://bj.bcebos.com/fcvideo/a44987eec4087c3bce8b54a358de02db.mp3', vgcid: 'VCG43712915889'}, {name: 'Hawaiian Silent Night', playtime: '69.0', url: 'http://bj.bcebos.com/fcvideo/108b1263398de6f6842425a50a518e39.mp3', vgcid: 'VCG43520084257'}, {name: 'Living On Lies', playtime: '165.0', url: 'http://bj.bcebos.com/fcvideo/8dfc2dffc1f3a8d80ee1613132d0e8d1.mp3', vgcid: 'VCG43712916877'}, {name: 'Tiki Cocktail - Retro Lounge (no drum/perc Mix)', playtime: '73.0', url: 'http://bj.bcebos.com/fcvideo/f6f277c39cddd70952fd322f86764652.mp3', vgcid: 'VCG43520083835'}, {name: 'Summer Reggae Chillin MUSIC', playtime: '105.0', url: 'http://bj.bcebos.com/fcvideo/fd59d6a4ed6e97c98c85dc90e4dc6513.mp3', vgcid: 'VCG43520080133'}, {name: 'Disc doctor', playtime: '53.0', url: 'http://bj.bcebos.com/fcvideo/03d0a7dd24f70c196cf7ac8ef43f1b40.mp3', vgcid: 'VCG43520069875'}, {name: 'Hawaiian Jingle Bells - Loop Ready', playtime: '88.0', url: 'http://bj.bcebos.com/fcvideo/01b31cac84788cc6023c885817d2f2f3.mp3', vgcid: 'VCG43520084259'}, {name: 'Desert Roses', playtime: '294.0', url: 'http://bj.bcebos.com/fcvideo/9b2fff60a52fa598301aebea9d3781d0.mp3', vgcid: 'VCG43712939825'}, {name: 'Hawaiian Jingle Bells', playtime: '94.0', url: 'http://bj.bcebos.com/fcvideo/5c982ff5e20b2e530ed7174c45800332.mp3', vgcid: 'VCG43520084265'}, {name: 'Collins Poe', playtime: '227.0', url: 'http://bj.bcebos.com/fcvideo/d1c9256a62646a82a42ff2f8416c60a4.mp3', vgcid: 'VCG43712922455'}, {name: 'Trench Town', playtime: '152.0', url: 'http://bj.bcebos.com/fcvideo/71e9b9983daa92c3068ad887b3683899.mp3', vgcid: 'VCG43520070505'}, {name: 'Hawaiian Silent Night - Loop Ready', playtime: '125.0', url: 'http://bj.bcebos.com/fcvideo/090d6ca32800e690adca45956387e35c.mp3', vgcid: 'VCG43520084269'}, {name: 'Long kisses in a short beach', playtime: '114.0', url: 'http://bj.bcebos.com/fcvideo/c4c0dfaa667f03c9e770d5ddc56b4789.mp3', vgcid: 'VCG43520068315'}, {name: '(ACOUSTIC) Coming Home On Train (FULL LOOPABLE)', playtime: '185.0', url: 'http://bj.bcebos.com/fcvideo/08dc1057aada2299d7a37ca643a2a969.mp3', vgcid: 'VCG43520083105'}, {name: 'beach bossa', playtime: '35.0', url: 'http://bj.bcebos.com/fcvideo/4c41068f30c2d41c6f373aa1c2a1e7a5.mp3', vgcid: 'VCG43778302953'}, {name: 'hip hop latin', playtime: '35.0', url: 'http://bj.bcebos.com/fcvideo/e2364bbc65a78abab18e49ac398dbc93.mp3', vgcid: 'VCG43778302979'}, {name: 'Latin Lanes', playtime: '99.0', url: 'http://bj.bcebos.com/fcvideo/f119808712d22a6d446ddf772d5069e5.mp3', vgcid: 'VCG43520060541'}, {name: '(WORLD) Ukulele On An Island (FULL TRACK, mellow-dreamy)', playtime: '224.0', url: 'http://bj.bcebos.com/fcvideo/6bd052ac8a7256a5cb1a74e59a822d0e.mp3', vgcid: 'VCG43520070205'}, {name: '(SOUL/BLUES) Chicken and Dumplins', playtime: '94.0', url: 'http://bj.bcebos.com/fcvideo/7f64c040cdd00485eb48b061b682be6b.mp3', vgcid: 'VCG43520061435'}, {name: 'Reggae Organ', playtime: '45.0', url: 'http://bj.bcebos.com/fcvideo/1cc6a81c5178fd93f973b354f7ac9440.mp3', vgcid: 'VCG43752844061'}, {name: 'Distant Shores (Full-length loop-ready version)', playtime: '202.0', url: 'http://bj.bcebos.com/fcvideo/0fd3e252543522da23fb87463b168720.mp3', vgcid: 'VCG43520065821'}, {name: 'Calm Hip Hop Lounge', playtime: '128.0', url: 'http://bj.bcebos.com/fcvideo/f303ca630029699f652decaf696d7207.mp3', vgcid: 'VCG43778303227'}, {name: 'Journey to village (full length)', playtime: '228.0', url: 'http://bj.bcebos.com/fcvideo/aa2e2f068ebb271497f753f2939d37cc.mp3', vgcid: 'VCG43520067665'}, {name: 'Distant Shores', playtime: '202.0', url: 'http://bj.bcebos.com/fcvideo/ad44f3de0410434d0b5d682496fd0303.mp3', vgcid: 'VCG43520064345'}, {name: 'Smooth Tranquil Hip Hop Lounge', playtime: '181.0', url: 'http://bj.bcebos.com/fcvideo/bbe44a54deec198906207a65571d11ed.mp3', vgcid: 'VCG43778303231'}, {name: 'Jazz Bach', playtime: '235.0', url: 'http://bj.bcebos.com/fcvideo/dee0778bb0d3a240fed051e83fe44679.mp3', vgcid: 'VCG43752844187'}, {name: 'Serengeti Nights', playtime: '252.0', url: 'http://bj.bcebos.com/fcvideo/e6c33138c8042aed1789d233be401ff4.mp3', vgcid: 'VCG43752844057'}, {name: 'Entr\'acte!', playtime: '278.0', url: 'http://bj.bcebos.com/fcvideo/da22c0dcd8d21f8fdef8747fd5ec61a3.mp3', vgcid: 'VCG43762155315'}]}], error: null};

let templateStyleResp = {status: 200, data: {styleList: [{styleId: 1, styleName: '装修装饰'}, {styleId: 2, styleName: '旅游出行'}, {styleId: 3, styleName: '摄影摄像'}, {styleId: 5, styleName: '酒店服务'}, {styleId: 6, styleName: '通用模板'}, {styleId: 7, styleName: '文字快闪'}, {styleId: 8, styleName: '图片快闪'}, {styleId: 9, styleName: '图文快闪'}, {styleId: 10, styleName: '商务展示'}, {styleId: 11, styleName: '电商促销'}], typeList: [{typeId: 1, typeName: '品牌宣传'}, {typeId: 2, typeName: '服务展示'}, {typeId: 3, typeName: '服务介绍'}, {typeId: 4, typeName: '导购营销'}, {typeId: 5, typeName: '产品展示'}]}, error: null};

let templateStyleListResp = [];
templateStyleListResp[0] = {
    status: 200,
    data: {
        total: 50,
        list: [{
            templateId: 2000,
            templateName: '纯图快闪',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 5,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 15,
                templateMaxDuration: 25
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 1.12, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 2.26, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 4.17, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 6.12, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 8.05, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 9.28, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 11.27, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 13.17, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 15.1, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 17.16, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 20.1, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [8],
            typeIds: [5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57qv5Zu+5b+r6Zeq_1/57qv5Zu+5b+r6Zeq.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57qv5Zu+5b+r6Zeq_1/57qv5Zu+5b+r6Zeq.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57qv5Zu+5b+r6Zeq_1/57qv5Zu+5b+r6Zeq.jpg'}]
        }, {
            templateId: 2002,
            templateName: '图片横划',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 16,
                templateMaxDuration: 25
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 2.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 4.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 6.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 8.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 10.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 12.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 14.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 16.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 18.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 20.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 22.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 10, 3, 11, 5, 6],
            typeIds: [2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+54mH5qiq5YiS_1/5Zu+54mH5qiq5YiS.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+54mH5qiq5YiS_1/5Zu+54mH5qiq5YiS.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+54mH5qiq5YiS_1/5Zu+54mH5qiq5YiS.jpg'}]
        }, {
            templateId: 2006,
            templateName: '电流效果',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 9,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 17,
                templateMaxDuration: 20
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 2.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 4.05, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 6.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 8.15, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 10.2, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 12.25, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 15.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 17.5, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [2, 10, 3, 11, 6],
            typeIds: [1, 2, 3],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_55S15rWB5pWI5p6c_1/55S15rWB5pWI5p6c.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_55S15rWB5pWI5p6c_1/55S15rWB5pWI5p6c.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_55S15rWB5pWI5p6c_1/55S15rWB5pWI5p6c.jpg'}]
        }, {
            templateId: 2008,
            templateName: '缤纷图形',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 9,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 35,
                templateMaxDuration: 40
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 10.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 20.07, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 24.2, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 30.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 35.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 40.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 11, 5, 6],
            typeIds: [5, 3],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57yk57q35Zu+5b2i_1/57yk57q35Zu+5b2i.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57yk57q35Zu+5b2i_1/57yk57q35Zu+5b2i.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57yk57q35Zu+5b2i_1/57yk57q35Zu+5b2i.jpg'}]
        }, {
            templateId: 2010,
            templateName: '数码变焦',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 16,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 36,
                templateMaxDuration: 74
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 6.26, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 11.11, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.24, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 20.07, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 24.19, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 28.29, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 33.13, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 37.27, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 42.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 46.25, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 51.09, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 13, startTime: 55.21, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 14, startTime: 60.05, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 15, startTime: 64.16, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 16, startTime: 68.03, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pWw56CB5Y+Y54Sm_1/5pWw56CB5Y+Y54Sm.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pWw56CB5Y+Y54Sm_1/5pWw56CB5Y+Y54Sm.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pWw56CB5Y+Y54Sm_1/5pWw56CB5Y+Y54Sm.jpg'}]
        }, {
            templateId: 2011,
            templateName: '优雅幻灯片',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 15,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 21,
                templateMaxDuration: 52
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 8.06, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 11.25, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 14.2, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 17.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 20.07, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 21.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 28.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 31.15, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 35.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 39.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 13, startTime: 40.28, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 14, startTime: 46.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 15, startTime: 50.12, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5LyY6ZuF5bm754Gv54mH_1/5LyY6ZuF5bm754Gv54mH.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5LyY6ZuF5bm754Gv54mH_1/5LyY6ZuF5bm754Gv54mH.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5LyY6ZuF5bm754Gv54mH_1/5LyY6ZuF5bm754Gv54mH.jpg'}]
        }, {
            templateId: 2012,
            templateName: '空气滑道',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 5,
                templateResourceCountMax: 11,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: false,
                templateMinDuration: 16,
                templateMaxDuration: 29
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 3.04, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 6.08, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 9.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 12.06, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 14.28, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 17.29, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 20.23, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 24.14, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 26.04, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 29.02, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_56m65rCU5ruR6YGT_1/56m65rCU5ruR6YGT.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_56m65rCU5ruR6YGT_1/56m65rCU5ruR6YGT.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_56m65rCU5ruR6YGT_1/56m65rCU5ruR6YGT.jpg'}]
        }, {
            templateId: 2013,
            templateName: '毛玻璃效果',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 15,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: false,
                templateMinDuration: 22,
                templateMaxDuration: 49
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 4.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 7.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 10.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 13.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 16.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 19.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 22.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 25.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 28.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 31.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 34.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 13, startTime: 37.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 14, startTime: 40.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 15, startTime: 43.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5q+b546755KD5pWI5p6c_1/5q+b546755KD5pWI5p6c.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5q+b546755KD5pWI5p6c_1/5q+b546755KD5pWI5p6c.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5q+b546755KD5pWI5p6c_1/5q+b546755KD5pWI5p6c.jpg'}]
        }, {
            templateId: 2014,
            templateName: '图文缩放',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 15,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 35,
                templateMaxDuration: 73
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 10.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 20.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 25.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 30.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 35.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 40.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 45.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 50.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 55.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 13, startTime: 60.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 14, startTime: 65.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 15, startTime: 70.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+5paH57yp5pS+_1/5Zu+5paH57yp5pS+.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+5paH57yp5pS+_1/5Zu+5paH57yp5pS+.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+5paH57yp5pS+_1/5Zu+5paH57yp5pS+.jpg'}]
        }, {
            templateId: 2016,
            templateName: '文字漂浮',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 35,
                templateMaxDuration: 60
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 10.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 20.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 25.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 30.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 35.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 40.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 45.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 50.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 55.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5ryC5rWu_1/5paH5a2X5ryC5rWu.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5ryC5rWu_1/5paH5a2X5ryC5rWu.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5ryC5rWu_1/5paH5a2X5ryC5rWu.jpg'}]
        }, {
            templateId: 2018,
            templateName: '杂志翻页',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 44,
                templateMaxDuration: 71
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 4.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 10.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 22.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 30.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 35.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 40.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 47.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 51.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 57.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 64.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5p2C5b+X57+76aG1_1/5p2C5b+X57+76aG1.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5p2C5b+X57+76aG1_1/5p2C5b+X57+76aG1.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5p2C5b+X57+76aG1_1/5p2C5b+X57+76aG1.jpg'}]
        }, {
            templateId: 2020,
            templateName: '绚丽元素',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 10,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 24,
                templateMaxDuration: 30
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 4.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 7.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 11.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 13.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 17.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 20.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 24.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 27.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 30.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57ua5Li95YWD57Sg_1/57ua5Li95YWD57Sg.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57ua5Li95YWD57Sg_1/57ua5Li95YWD57Sg.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57ua5Li95YWD57Sg_1/57ua5Li95YWD57Sg.jpg'}]
        }, {
            templateId: 2022,
            templateName: '文字快闪(长)',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 11,
                templateResourceCountMax: 11,
                templateWordLengthLimit: 0,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 10,
                templateMaxDuration: 10
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 2, startTime: 1.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 3, startTime: 2.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 4, startTime: 3.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 5, startTime: 3.5, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 6, startTime: 4.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 7, startTime: 5.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 8, startTime: 6.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 9, startTime: 7.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 10, startTime: 8.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 11, startTime: 9.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [7],
            typeIds: [2, 3],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5b+r6ZeqKOmVvyk=_1/5paH5a2X5b+r6ZeqKOmVvyk=.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5b+r6ZeqKOmVvyk=_1/5paH5a2X5b+r6ZeqKOmVvyk=.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5b+r6ZeqKOmVvyk=_1/5paH5a2X5b+r6ZeqKOmVvyk=.jpg'}]
        }, {
            templateId: 2024,
            templateName: '图文快闪',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 4,
                templateResourceCountMax: 8,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 17,
                templateMaxDuration: 40
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 2.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 8.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 14.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 18.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 24.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 29.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 36.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [9, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+5paH5b+r6Zeq_1/5Zu+5paH5b+r6Zeq.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+5paH5b+r6Zeq_1/5Zu+5paH5b+r6Zeq.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+5paH5b+r6Zeq_1/5Zu+5paH5b+r6Zeq.jpg'}]
        }, {
            templateId: 2026,
            templateName: '斜线切块',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 6,
                templateResourceCountMax: 10,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 44,
                templateMaxDuration: 56
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 7.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 15.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 23.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 30.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 38.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 44.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 48.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 52.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 56.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pac57q:5YiH5Z2X_1/5pac57q:5YiH5Z2X.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pac57q:5YiH5Z2X_1/5pac57q:5YiH5Z2X.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pac57q:5YiH5Z2X_1/5pac57q:5YiH5Z2X.jpg'}]
        }, {
            templateId: 2028,
            templateName: '文字快闪(短)',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 8,
                templateResourceCountMax: 8,
                templateWordLengthLimit: 0,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 7,
                templateMaxDuration: 7
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 2, startTime: 1.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 3, startTime: 2.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 4, startTime: 3.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 5, startTime: 3.5, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 6, startTime: 4.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 7, startTime: 5.0, textList: [{index: 0, textLength: 12}], mediaList: null, logoList: null}, {index: 8, startTime: 6.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [7],
            typeIds: [2, 3],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5b+r6ZeqKOefrSk=_1/5paH5a2X5b+r6ZeqKOefrSk=.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5b+r6ZeqKOefrSk=_1/5paH5a2X5b+r6ZeqKOefrSk=.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5b+r6ZeqKOefrSk=_1/5paH5a2X5b+r6ZeqKOefrSk=.jpg'}]
        }, {
            templateId: 2030,
            templateName: '滑动浏览',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 3,
                templateResourceCountMax: 7,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 25,
                templateMaxDuration: 62
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}, {index: 5, textLength: 16}, {index: 6, textLength: 16}, {index: 7, textLength: 16}, {index: 8, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 20.0, textList: [{index: 0, textLength: 8}, {index: 1, textLength: 8}, {index: 2, textLength: 8}, {index: 3, textLength: 8}, {index: 4, textLength: 8}, {index: 5, textLength: 8}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 25.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 34.0, textList: [{index: 0, textLength: 8}, {index: 1, textLength: 8}, {index: 2, textLength: 8}, {index: 3, textLength: 8}, {index: 4, textLength: 8}, {index: 5, textLength: 8}, {index: 6, textLength: 8}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 45.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}, {index: 5, textLength: 16}, {index: 6, textLength: 16}, {index: 7, textLength: 16}, {index: 8, textLength: 16}, {index: 9, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}, {index: 3, type: 'PIC', duration: 10.0, orientation: 1}, {index: 4, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 56.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [2, 10, 3, 11, 5, 6],
            typeIds: [4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5ruR5Yqo5rWP6KeI_1/5ruR5Yqo5rWP6KeI.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5ruR5Yqo5rWP6KeI_1/5ruR5Yqo5rWP6KeI.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5ruR5Yqo5rWP6KeI_1/5ruR5Yqo5rWP6KeI.jpg'}]
        }, {
            templateId: 2032,
            templateName: '高端黑金',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 44,
                templateMaxDuration: 78
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 6.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}, {index: 2, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 12.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 18.0, textList: [{index: 0, textLength: 14}, {index: 1, textLength: 14}, {index: 2, textLength: 14}, {index: 3, textLength: 14}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 24.0, textList: [{index: 0, textLength: 14}, {index: 1, textLength: 14}, {index: 2, textLength: 14}, {index: 3, textLength: 14}, {index: 4, textLength: 14}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 31.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}, {index: 5, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 38.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 44.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 50.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 57.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 64.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 72.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 10, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6auY56uv6buR6YeR_1/6auY56uv6buR6YeR.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6auY56uv6buR6YeR_1/6auY56uv6buR6YeR.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6auY56uv6buR6YeR_1/6auY56uv6buR6YeR.jpg'}]
        }, {
            templateId: 2034,
            templateName: '节奏快闪',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 4,
                templateResourceCountMax: 9,
                templateWordLengthLimit: 0,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 12,
                templateMaxDuration: 26
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 2.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}, {index: 2, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 5.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}, {index: 2, textLength: 12}, {index: 3, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 8.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}, {index: 2, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 12.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 14.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 17.0, textList: [{index: 0, textLength: 10}, {index: 1, textLength: 10}, {index: 2, textLength: 10}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 20.0, textList: [{index: 0, textLength: 14}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 23.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 7, 8, 9, 10, 11],
            typeIds: [4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6IqC5aWP5b+r6Zeq_1/6IqC5aWP5b+r6Zeq.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6IqC5aWP5b+r6Zeq_1/6IqC5aWP5b+r6Zeq.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6IqC5aWP5b+r6Zeq_1/6IqC5aWP5b+r6Zeq.jpg'}]
        }, {
            templateId: 2036,
            templateName: '澎湃时尚',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 3,
                templateResourceCountMax: 8,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 19,
                templateMaxDuration: 55
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 7.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 11.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 22.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 28.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 36.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 43.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}, {index: 3, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 50.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 7, 8, 9, 11],
            typeIds: [4, 1, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5r6O5rmD5pe25bCa_1/5r6O5rmD5pe25bCa.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5r6O5rmD5pe25bCa_1/5r6O5rmD5pe25bCa.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5r6O5rmD5pe25bCa_1/5r6O5rmD5pe25bCa.jpg'}]
        }, {
            templateId: 2050,
            templateName: '时尚广告',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 45,
                templateMaxDuration: 74
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 7.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 13.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 19.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 25.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 31.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 37.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 43.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 49.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 55.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 61.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 67.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/5pe25bCa5bm:5ZGK/5pe25bCa5bm:5ZGK.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/5pe25bCa5bm:5ZGK/5pe25bCa5bm:5ZGK.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/5pe25bCa5bm:5ZGK/5pe25bCa5bm:5ZGK.png'}]
        }, {
            templateId: 2051,
            templateName: '朋友圈',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 4,
                templateResourceCountMax: 6,
                templateWordLengthLimit: 20,
                templateHeader: true,
                templateTailer: false,
                templateMinDuration: 20,
                templateMaxDuration: 20
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 1.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 4.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 7.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 8.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 10.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 11, 5],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/5pyL5Y+L5ZyI/5pyL5Y+L5ZyI.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/5pyL5Y+L5ZyI/5pyL5Y+L5ZyI.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/5pyL5Y+L5ZyI/5pyL5Y+L5ZyI.png'}]
        }, {
            templateId: 2052,
            templateName: '纯文混排',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 1,
                templateResourceCountMax: 1,
                templateWordLengthLimit: 0,
                templateHeader: false,
                templateTailer: false,
                templateMinDuration: 30,
                templateMaxDuration: 30
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}, {index: 5, textLength: 16}, {index: 6, textLength: 16}, {index: 7, textLength: 16}, {index: 8, textLength: 16}, {index: 9, textLength: 16}, {index: 10, textLength: 16}, {index: 11, textLength: 16}, {index: 12, textLength: 16}, {index: 13, textLength: 16}, {index: 14, textLength: 16}, {index: 15, textLength: 16}, {index: 16, textLength: 16}, {index: 17, textLength: 16}, {index: 18, textLength: 16}, {index: 19, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 3, 11, 5, 7],
            typeIds: [1, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5paH5re35o6S/57qv5paH5re35o6S.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5paH5re35o6S/57qv5paH5re35o6S.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5paH5re35o6S/57qv5paH5re35o6S.png'}]
        }, {
            templateId: 2054,
            templateName: '纯图片',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 5,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 0,
                templateHeader: false,
                templateTailer: false,
                templateMinDuration: 16,
                templateMaxDuration: 35
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 4.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 7.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 10.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 13.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 15.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 18.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 21.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 24.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 27.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 30.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 33.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5Zu+54mH/57qv5Zu+54mH.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5Zu+54mH/57qv5Zu+54mH.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5Zu+54mH/57qv5Zu+54mH.png'}]
        }]
    },
    error: null
};

templateStyleListResp[1] = {
    status: 200,
    data: {
        total: 31,
        list: [{
            templateId: 2002,
            templateName: '图片横划',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 16,
                templateMaxDuration: 25
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 2.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 4.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 6.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 8.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 10.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 12.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 14.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 16.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 18.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 20.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 22.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 10, 3, 11, 5, 6],
            typeIds: [2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+54mH5qiq5YiS_1/5Zu+54mH5qiq5YiS.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+54mH5qiq5YiS_1/5Zu+54mH5qiq5YiS.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+54mH5qiq5YiS_1/5Zu+54mH5qiq5YiS.jpg'}]
        }, {
            templateId: 2008,
            templateName: '缤纷图形',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 9,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 35,
                templateMaxDuration: 40
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 10.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 20.07, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 24.2, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 30.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 35.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 40.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 11, 5, 6],
            typeIds: [5, 3],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57yk57q35Zu+5b2i_1/57yk57q35Zu+5b2i.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57yk57q35Zu+5b2i_1/57yk57q35Zu+5b2i.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57yk57q35Zu+5b2i_1/57yk57q35Zu+5b2i.jpg'}]
        }, {
            templateId: 2010,
            templateName: '数码变焦',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 16,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 36,
                templateMaxDuration: 74
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 6.26, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 11.11, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.24, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 20.07, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 24.19, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 28.29, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 33.13, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 37.27, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 42.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 46.25, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 51.09, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 13, startTime: 55.21, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 14, startTime: 60.05, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 15, startTime: 64.16, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 16, startTime: 68.03, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pWw56CB5Y+Y54Sm_1/5pWw56CB5Y+Y54Sm.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pWw56CB5Y+Y54Sm_1/5pWw56CB5Y+Y54Sm.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pWw56CB5Y+Y54Sm_1/5pWw56CB5Y+Y54Sm.jpg'}]
        }, {
            templateId: 2011,
            templateName: '优雅幻灯片',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 15,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 21,
                templateMaxDuration: 52
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 8.06, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 11.25, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 14.2, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 17.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 20.07, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 21.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 28.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 31.15, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 35.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 39.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 13, startTime: 40.28, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 14, startTime: 46.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 15, startTime: 50.12, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5LyY6ZuF5bm754Gv54mH_1/5LyY6ZuF5bm754Gv54mH.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5LyY6ZuF5bm754Gv54mH_1/5LyY6ZuF5bm754Gv54mH.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5LyY6ZuF5bm754Gv54mH_1/5LyY6ZuF5bm754Gv54mH.jpg'}]
        }, {
            templateId: 2012,
            templateName: '空气滑道',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 5,
                templateResourceCountMax: 11,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: false,
                templateMinDuration: 16,
                templateMaxDuration: 29
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 3.04, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 6.08, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 9.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 12.06, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 14.28, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 17.29, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 20.23, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 24.14, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 26.04, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 29.02, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_56m65rCU5ruR6YGT_1/56m65rCU5ruR6YGT.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_56m65rCU5ruR6YGT_1/56m65rCU5ruR6YGT.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_56m65rCU5ruR6YGT_1/56m65rCU5ruR6YGT.jpg'}]
        }, {
            templateId: 2013,
            templateName: '毛玻璃效果',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 15,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: false,
                templateMinDuration: 22,
                templateMaxDuration: 49
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 4.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 7.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 10.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 13.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 16.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 19.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 22.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 25.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 28.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 31.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 34.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 13, startTime: 37.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 14, startTime: 40.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 15, startTime: 43.1, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5q+b546755KD5pWI5p6c_1/5q+b546755KD5pWI5p6c.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5q+b546755KD5pWI5p6c_1/5q+b546755KD5pWI5p6c.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5q+b546755KD5pWI5p6c_1/5q+b546755KD5pWI5p6c.jpg'}]
        }, {
            templateId: 2014,
            templateName: '图文缩放',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 15,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 35,
                templateMaxDuration: 73
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 10.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 20.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 25.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 30.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 35.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 40.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 45.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 50.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 55.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 13, startTime: 60.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 14, startTime: 65.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 15, startTime: 70.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+5paH57yp5pS+_1/5Zu+5paH57yp5pS+.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+5paH57yp5pS+_1/5Zu+5paH57yp5pS+.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5Zu+5paH57yp5pS+_1/5Zu+5paH57yp5pS+.jpg'}]
        }, {
            templateId: 2016,
            templateName: '文字漂浮',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 35,
                templateMaxDuration: 60
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 10.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 20.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 25.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 30.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 35.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 40.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 45.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 50.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 55.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5ryC5rWu_1/5paH5a2X5ryC5rWu.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5ryC5rWu_1/5paH5a2X5ryC5rWu.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5paH5a2X5ryC5rWu_1/5paH5a2X5ryC5rWu.jpg'}]
        }, {
            templateId: 2018,
            templateName: '杂志翻页',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 44,
                templateMaxDuration: 71
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 4.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 10.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 22.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 30.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 35.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 40.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 47.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 51.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 57.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 64.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5p2C5b+X57+76aG1_1/5p2C5b+X57+76aG1.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5p2C5b+X57+76aG1_1/5p2C5b+X57+76aG1.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5p2C5b+X57+76aG1_1/5p2C5b+X57+76aG1.jpg'}]
        }, {
            templateId: 2020,
            templateName: '绚丽元素',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 10,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 24,
                templateMaxDuration: 30
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 4.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 7.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 11.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 13.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 17.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 20.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 24.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 27.0, textList: [{index: 0, textLength: 30}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 30.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57ua5Li95YWD57Sg_1/57ua5Li95YWD57Sg.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57ua5Li95YWD57Sg_1/57ua5Li95YWD57Sg.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_57ua5Li95YWD57Sg_1/57ua5Li95YWD57Sg.jpg'}]
        }, {
            templateId: 2026,
            templateName: '斜线切块',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 6,
                templateResourceCountMax: 10,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 44,
                templateMaxDuration: 56
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 7.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 15.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 23.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 30.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 38.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 44.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 48.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 52.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 56.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 10, 3, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pac57q:5YiH5Z2X_1/5pac57q:5YiH5Z2X.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pac57q:5YiH5Z2X_1/5pac57q:5YiH5Z2X.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5pac57q:5YiH5Z2X_1/5pac57q:5YiH5Z2X.jpg'}]
        }, {
            templateId: 2032,
            templateName: '高端黑金',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 44,
                templateMaxDuration: 78
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 6.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}, {index: 2, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 12.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 18.0, textList: [{index: 0, textLength: 14}, {index: 1, textLength: 14}, {index: 2, textLength: 14}, {index: 3, textLength: 14}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 24.0, textList: [{index: 0, textLength: 14}, {index: 1, textLength: 14}, {index: 2, textLength: 14}, {index: 3, textLength: 14}, {index: 4, textLength: 14}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 31.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}, {index: 5, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 38.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 44.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 50.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 57.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 64.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 72.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 10, 5, 6],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6auY56uv6buR6YeR_1/6auY56uv6buR6YeR.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6auY56uv6buR6YeR_1/6auY56uv6buR6YeR.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6auY56uv6buR6YeR_1/6auY56uv6buR6YeR.jpg'}]
        }, {
            templateId: 2034,
            templateName: '节奏快闪',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 4,
                templateResourceCountMax: 9,
                templateWordLengthLimit: 0,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 12,
                templateMaxDuration: 26
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 2.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}, {index: 2, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 5.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}, {index: 2, textLength: 12}, {index: 3, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 8.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}, {index: 2, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 12.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 14.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 17.0, textList: [{index: 0, textLength: 10}, {index: 1, textLength: 10}, {index: 2, textLength: 10}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 20.0, textList: [{index: 0, textLength: 14}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 23.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 7, 8, 9, 10, 11],
            typeIds: [4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6IqC5aWP5b+r6Zeq_1/6IqC5aWP5b+r6Zeq.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6IqC5aWP5b+r6Zeq_1/6IqC5aWP5b+r6Zeq.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_6IqC5aWP5b+r6Zeq_1/6IqC5aWP5b+r6Zeq.jpg'}]
        }, {
            templateId: 2036,
            templateName: '澎湃时尚',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 3,
                templateResourceCountMax: 8,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 19,
                templateMaxDuration: 55
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 7.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 11.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 22.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 28.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 36.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 43.0, textList: [{index: 0, textLength: 12}, {index: 1, textLength: 12}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}, {index: 3, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 50.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 7, 8, 9, 11],
            typeIds: [4, 1, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5r6O5rmD5pe25bCa_1/5r6O5rmD5pe25bCa.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5r6O5rmD5pe25bCa_1/5r6O5rmD5pe25bCa.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/18_5r6O5rmD5pe25bCa_1/5r6O5rmD5pe25bCa.jpg'}]
        }, {
            templateId: 2050,
            templateName: '时尚广告',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 7,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 16,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 45,
                templateMaxDuration: 74
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: null, logoList: null}, {index: 2, startTime: 7.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 13.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 19.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 25.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 31.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 37.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 43.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 49.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 55.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 61.0, textList: [{index: 0, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 67.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/5pe25bCa5bm:5ZGK/5pe25bCa5bm:5ZGK.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/5pe25bCa5bm:5ZGK/5pe25bCa5bm:5ZGK.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/5pe25bCa5bm:5ZGK/5pe25bCa5bm:5ZGK.png'}]
        }, {
            templateId: 2051,
            templateName: '朋友圈',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 4,
                templateResourceCountMax: 6,
                templateWordLengthLimit: 20,
                templateHeader: true,
                templateTailer: false,
                templateMinDuration: 20,
                templateMaxDuration: 20
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 1.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 4.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 7.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 8.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 10.0, textList: [{index: 0, textLength: 20}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 10, 3, 11, 5],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/5pyL5Y+L5ZyI/5pyL5Y+L5ZyI.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/5pyL5Y+L5ZyI/5pyL5Y+L5ZyI.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/5pyL5Y+L5ZyI/5pyL5Y+L5ZyI.png'}]
        }, {
            templateId: 2052,
            templateName: '纯文混排',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 1,
                templateResourceCountMax: 1,
                templateWordLengthLimit: 0,
                templateHeader: false,
                templateTailer: false,
                templateMinDuration: 30,
                templateMaxDuration: 30
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}, {index: 4, textLength: 16}, {index: 5, textLength: 16}, {index: 6, textLength: 16}, {index: 7, textLength: 16}, {index: 8, textLength: 16}, {index: 9, textLength: 16}, {index: 10, textLength: 16}, {index: 11, textLength: 16}, {index: 12, textLength: 16}, {index: 13, textLength: 16}, {index: 14, textLength: 16}, {index: 15, textLength: 16}, {index: 16, textLength: 16}, {index: 17, textLength: 16}, {index: 18, textLength: 16}, {index: 19, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 3, 11, 5, 7],
            typeIds: [1, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5paH5re35o6S/57qv5paH5re35o6S.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5paH5re35o6S/57qv5paH5re35o6S.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5paH5re35o6S/57qv5paH5re35o6S.png'}]
        }, {
            templateId: 2054,
            templateName: '纯图片',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 5,
                templateResourceCountMax: 12,
                templateWordLengthLimit: 0,
                templateHeader: false,
                templateTailer: false,
                templateMinDuration: 16,
                templateMaxDuration: 35
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 4.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 7.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 10.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 13.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 15.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 18.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 21.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 24.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 27.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 30.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 33.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5Zu+54mH/57qv5Zu+54mH.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5Zu+54mH/57qv5Zu+54mH.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/57qv5Zu+54mH/57qv5Zu+54mH.png'}]
        }, {
            templateId: 2055,
            templateName: '网格图片',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 5,
                templateResourceCountMax: 13,
                templateWordLengthLimit: 0,
                templateHeader: false,
                templateTailer: false,
                templateMinDuration: 19,
                templateMaxDuration: 46
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 3.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 7.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 10.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 15.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 20.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 22.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 25.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 9, startTime: 27.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 10, startTime: 31.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 11, startTime: 34.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 12, startTime: 37.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 13, startTime: 41.0, textList: null, mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/572R5qC85Zu+54mH/572R5qC85Zu+54mH.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/572R5qC85Zu+54mH/572R5qC85Zu+54mH.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/572R5qC85Zu+54mH/572R5qC85Zu+54mH.png'}]
        }, {
            templateId: 2059,
            templateName: '3D展示',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 3,
                templateResourceCountMax: 7,
                templateWordLengthLimit: 20,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 18,
                templateMaxDuration: 43
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 6.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 12.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 18.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 24.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 30.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 36.0, textList: [{index: 0, textLength: 20}, {index: 1, textLength: 20}, {index: 2, textLength: 20}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/M0TlsZXnpLo=/M0TlsZXnpLo=.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/M0TlsZXnpLo=/M0TlsZXnpLo=.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/M0TlsZXnpLo=/M0TlsZXnpLo=.png'}]
        }, {
            templateId: 2060,
            templateName: '交互切换',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 5,
                templateResourceCountMax: 8,
                templateWordLengthLimit: 30,
                templateHeader: true,
                templateTailer: true,
                templateMinDuration: 32,
                templateMaxDuration: 55
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}, {index: 2, textLength: 30}], mediaList: null, logoList: null}, {index: 2, startTime: 4.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 10.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 15.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 27.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 32.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}, {index: 3, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}, {index: 2, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 45.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}, {index: 1, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 50.0, textList: [{index: 0, textLength: 30}, {index: 1, textLength: 30}, {index: 2, textLength: 30}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/5Lqk5LqS5YiH5o2i/5Lqk5LqS5YiH5o2i.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/5Lqk5LqS5YiH5o2i/5Lqk5LqS5YiH5o2i.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/5Lqk5LqS5YiH5o2i/5Lqk5LqS5YiH5o2i.png'}]
        }, {
            templateId: 2062,
            templateName: '旋转三角',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 4,
                templateResourceCountMax: 8,
                templateWordLengthLimit: 16,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 16,
                templateMaxDuration: 30
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 3, startTime: 9.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 4, startTime: 12.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 5, startTime: 16.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 6, startTime: 19.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 7, startTime: 23.0, textList: [{index: 0, textLength: 16}, {index: 1, textLength: 16}], mediaList: [{index: 0, type: 'PIC', duration: 10.0, orientation: 1}], logoList: null}, {index: 8, startTime: 26.0, textList: [{index: 0, textLength: 16}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/5peL6L2s5LiJ6KeS/5peL6L2s5LiJ6KeS.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/5peL6L2s5LiJ6KeS/5peL6L2s5LiJ6KeS.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/5peL6L2s5LiJ6KeS/5peL6L2s5LiJ6KeS.png'}]
        }, {
            templateId: 2518,
            templateName: '旋转三角（视频)',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 4,
                templateResourceCountMax: 8,
                templateWordLengthLimit: 10,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 14,
                templateMaxDuration: 27
            },
            shotLimits: [{index: 1, startTime: 2.05, textList: [{index: 0, textLength: 8}, {index: 1, textLength: 24}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 4.0, orientation: 1}], logoList: null}, {index: 2, startTime: 5.17, textList: [{index: 0, textLength: 8}, {index: 1, textLength: 22}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 4.0, orientation: 1}], logoList: null}, {index: 3, startTime: 9.03, textList: [{index: 0, textLength: 8}, {index: 1, textLength: 24}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 4.0, orientation: 1}], logoList: null}, {index: 4, startTime: 12.14, textList: [{index: 0, textLength: 8}, {index: 1, textLength: 24}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 4.0, orientation: 1}], logoList: null}, {index: 5, startTime: 16.0, textList: [{index: 0, textLength: 8}, {index: 1, textLength: 38}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 4.0, orientation: 1}], logoList: null}, {index: 6, startTime: 19.11, textList: [{index: 0, textLength: 8}, {index: 1, textLength: 30}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 4.0, orientation: 1}], logoList: null}, {index: 7, startTime: 22.22, textList: [{index: 0, textLength: 8}, {index: 1, textLength: 24}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 4.0, orientation: 1}], logoList: null}, {index: 8, startTime: 26.08, textList: [{index: 0, textLength: 10}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/5peL6L2s5LiJ6KeS/5peL6L2s5LiJ6KeS.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/5peL6L2s5LiJ6KeS/5peL6L2s5LiJ6KeS.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/5peL6L2s5LiJ6KeS/5peL6L2s5LiJ6KeS.png'}]
        }, {
            templateId: 2519,
            templateName: '3D展示（视频)',
            templateType: 1,
            renderType: 0,
            limits: {
                templateResourceTypeLimit: ['TEXT', 'PIC', 'AUDIO', 'VIDEO'],
                templateResourceCountMin: 3,
                templateResourceCountMax: 7,
                templateWordLengthLimit: 58,
                templateHeader: false,
                templateTailer: true,
                templateMinDuration: 17,
                templateMaxDuration: 43
            },
            shotLimits: [{index: 1, startTime: 0.0, textList: [{index: 0, textLength: 6}, {index: 1, textLength: 14}, {index: 2, textLength: 22}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 6.4, orientation: 1}], logoList: null}, {index: 2, startTime: 5.27, textList: [{index: 0, textLength: 6}, {index: 1, textLength: 13}, {index: 2, textLength: 20}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 6.3, orientation: 1}], logoList: null}, {index: 3, startTime: 11.25, textList: [{index: 0, textLength: 13}, {index: 1, textLength: 20}, {index: 2, textLength: 14}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 6.3, orientation: 1}], logoList: null}, {index: 4, startTime: 17.22, textList: [{index: 0, textLength: 17}, {index: 1, textLength: 22}, {index: 2, textLength: 12}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 6.3, orientation: 1}], logoList: null}, {index: 5, startTime: 23.21, textList: [{index: 0, textLength: 13}, {index: 1, textLength: 21}, {index: 2, textLength: 8}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 6.3, orientation: 1}], logoList: null}, {index: 6, startTime: 29.18, textList: [{index: 0, textLength: 17}, {index: 1, textLength: 20}, {index: 2, textLength: 16}], mediaList: [{index: 0, type: 'VIDEO&PIC', duration: 8.0, orientation: 1}], logoList: null}, {index: 7, startTime: 37.05, textList: [{index: 0, textLength: 14}, {index: 1, textLength: 22}, {index: 2, textLength: 24}], mediaList: null, logoList: null}],
            styleIds: [1, 2, 3, 5, 6, 10, 11],
            typeIds: [1, 2, 3, 4, 5],
            extdata: null,
            demos: [{templateDemo: 'http://bj.bcebos.com/fcvideo/template/zebra/M0TlsZXnpLo=/M0TlsZXnpLo=.mp4', templateDemoBgm: 'http://bj.bcebos.com/fcvideo/template/zebra/M0TlsZXnpLo=/M0TlsZXnpLo=.mp3', templateDemoCover: 'http://bj.bcebos.com/fcvideo/template/zebra/M0TlsZXnpLo=/M0TlsZXnpLo=.png'}]
        }]
    },
    error: null
};

let smartResponse = {
    data: {
        items: [{
            videoId: 10812144,
            url: 'http://bj.bcebos.com/fctestvideo/66fa89656e3ca55d66245a2f19a2df20.mp4',
            videoName: 'ITP_3362207',
            source: 14,
            thumbnailUrl: 'http://bj.bcebos.com/fctestvideo/66fa89656e3ca55d66245a2f19a2df20.png',
            content: '{"thumbnailUrl":"http://bj.bcebos.com/fctestvideo/66fa89656e3ca55d66245a2f19a2df20.png","url":"http://bj.bcebos.com/fctestvideo/66fa89656e3ca55d66245a2f19a2df20.mp4","images":[{"description":"ITP","url":"http://bj.bcebos.com/imagelib/150/share_pic/77910255e26f0f7bd60c33cb56ecdc5f.png"},{"description":"ITP","url":"http://bj.bcebos.com/imagelib/150/share_pic/6e8d8e0073888739cb9b52471b57a616.png"},{"description":"ITP","url":"http://bj.bcebos.com/imagelib/150/share_pic/77910255e26f0f7bd60c33cb56ecdc5f.png"},{"description":"ITP","url":"http://bj.bcebos.com/imagelib/150/share_pic/6e8d8e0073888739cb9b52471b57a616.png"},{"description":"ITP","url":"http://bj.bcebos.com/imagelib/150/share_pic/77910255e26f0f7bd60c33cb56ecdc5f.png"}]}',
            transferVideos: [{
                id: 10812145,
                videoId: 10812144,
                userId: 630152,
                url: 'http://bj.bcebos.com/fctestvideo/66fa89656e3ca55d66245a2f19a2df20.mp4',
                capacity: 6.62,
                format: 'mp4',
                width: 1920,
                height: 1080,
                bitRate: 3732.09,
                frameRate: 23.98,
                transcodeStatus: 0,
                fileMd5: 'e99f8f49f8639ceb3f533dd12dae578f',
                transcodeType: 3,
                audioRate: 126.24,
                videoRate: 3602.91
            }],
            isRawVideo: true,
            id: 10812144
        }],
        countMap: {
            16: 0,
            17: 0,
            27: 0,
            28: 0,
            13: 0,
            14: 1,
            15: 0
        },
        currentCount: 1,
        userTotalCount: 45
    },
    status: 0,
    errors: []
};

let uploadImageResponse = {
    data: [{
        height: 1264,
        width: 1658,
        url: 'https://imagelib.cdn.bcebos.com/0/pic/ad2ba9f60df745bb7d6fd8f272216f55.png',
        signature: 'ad2ba9f60df745bb7d6fd8f272216f55',
        cropImages: [{
            url: 'https://imagelib.cdn.bcebos.com/0/pic/ed0d3a275d1cc5f805bd00ddde03a434.png',
            signature: 'ed0d3a275d1cc5f805bd00ddde03a434',
            height: 932,
            width: 1658,
            type: 11,
            addFrom: 3
        }]
    }],
    status: 0,
    errors: []
};

let cutImageResponse = {
    data: [{
        url: 'https://imagelib.cdn.bcebos.com/0/pic/d477ece5dfe85c739487993dea844262.jpg',
        signature: 'd477ece5dfe85c739487993dea844262',
        height: 540,
        width: 960,
        type: 11,
        source: 19
    }],
    status: 0,
    errors: []
};
let uploadImage = {
    "errors": null,
    "status": 200,
    "data": [
      {
        "imageId": 1508492752,
        "width": 1140,
        "height": 640,
        "size": 666583,
        "url": "http://aod-image.baidu.com/0/pic/86a86c7c8fe3bb591ecc7166b694d22f.jpg",
        "molaUrl": null,
        "signature": "86a86c7c8fe3bb591ecc7166b694d22f",
        "hamming": "000000000000f000f800ff00ffd0ff70fff4fefc78a15cbf3bfc076510000000"
      }
    ]
}

let imageCopyRight = {
        "data": {
            "listData": [
                {
                    "imageId": 1630627937,
                    "userId": 630152,
                    "height": 579,
                    "width": 579,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/1c6fa54ad2f50f8317247bd1c114659f.png",
                    "signature": "1c6fa54ad2f50f8317247bd1c114659f",
                    "source": 19,
                    "outerId": "65924513",
                    "score": 8,
                    "isCollect": false,
                    "id": 1630627937
                },
                {
                    "imageId": 1630627927,
                    "userId": 630152,
                    "height": 4088,
                    "width": 2783,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/608cfd637decee3b891baa9fae496675.png",
                    "signature": "608cfd637decee3b891baa9fae496675",
                    "source": 19,
                    "outerId": "65924509",
                    "score": 0,
                    "isCollect": false,
                    "id": 1630627927
                },
                {
                    "imageId": 1630627899,
                    "userId": 630152,
                    "height": 1669,
                    "width": 1669,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/d344ab3d5de701314fd2124b0d316c5c.png",
                    "signature": "d344ab3d5de701314fd2124b0d316c5c",
                    "source": 19,
                    "outerId": "65924510",
                    "score": 3,
                    "isCollect": false,
                    "id": 1630627899
                },
                {
                    "imageId": 1630627345,
                    "userId": 630152,
                    "height": 480,
                    "width": 480,
                    "url": "http://fc6tn.baidu.com/it/u=2547571295,3947258511&fm=203",
                    "signature": "f90c5e94b67db57f0e5a838f829b6639",
                    "source": 19,
                    "outerId": "65924502",
                    "score": 9,
                    "isCollect": false,
                    "id": 1630627345
                },
                {
                    "imageId": 1630627325,
                    "userId": 630152,
                    "height": 296,
                    "width": 478,
                    "url": "http://fc1tn.baidu.com/it/u=3730158682,733082078&fm=202",
                    "signature": "0f5fe1760ab861cccef05272346ce9b9",
                    "source": 19,
                    "outerId": "65924499",
                    "score": 8,
                    "isCollect": false,
                    "id": 1630627325
                },
                {
                    "imageId": 1630627262,
                    "userId": 630152,
                    "height": 440,
                    "width": 440,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/90cbf6174da8e3084b7244a0622c3c4e.jpg",
                    "signature": "90cbf6174da8e3084b7244a0622c3c4e",
                    "source": 19,
                    "outerId": "65924488",
                    "score": 0,
                    "isCollect": false,
                    "id": 1630627262
                },
                {
                    "imageId": 1630528270,
                    "userId": 630152,
                    "height": 336,
                    "width": 542,
                    "url": "http://fc1tn.baidu.com/it/u=1890656898,636746553&fm=202",
                    "signature": "82b83601a3e0f1e42a5159c71a0304ba",
                    "source": 19,
                    "outerId": "65919389",
                    "score": 6,
                    "isCollect": false,
                    "id": 1630528270
                },
                {
                    "imageId": 1630358321,
                    "userId": 630152,
                    "height": 586,
                    "width": 586,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/04ea2da241685cffd657a6c98e05f854.png",
                    "signature": "04ea2da241685cffd657a6c98e05f854",
                    "source": 19,
                    "outerId": "65904999",
                    "score": 6,
                    "isCollect": false,
                    "id": 1630358321
                },
                {
                    "imageId": 1630358010,
                    "userId": 630152,
                    "height": 474,
                    "width": 474,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/1f104d275da1bfed1acc8b59a606f967.png",
                    "signature": "1f104d275da1bfed1acc8b59a606f967",
                    "source": 19,
                    "outerId": "65904953",
                    "score": 5,
                    "isCollect": false,
                    "id": 1630358010
                },
                {
                    "imageId": 1630353008,
                    "userId": 630152,
                    "height": 700,
                    "width": 700,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/70716b5eba64d77ff68a5c787177ef41.png",
                    "signature": "70716b5eba64d77ff68a5c787177ef41",
                    "source": 19,
                    "outerId": "65904807",
                    "score": 0,
                    "isCollect": false,
                    "id": 1630353008
                },
                {
                    "imageId": 1630352998,
                    "userId": 630152,
                    "height": 260,
                    "width": 420,
                    "url": "http://fc6tn.baidu.com/it/u=1339010141,3562152987&fm=202",
                    "signature": "1d47f606869d77ba4db35321f74658b2",
                    "source": 19,
                    "outerId": "65904808",
                    "score": 7,
                    "isCollect": false,
                    "id": 1630352998
                },
                {
                    "imageId": 1630352321,
                    "userId": 630152,
                    "height": 512,
                    "width": 820,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/d89d025872be9e15a7aa3a960a01a32b.jpg",
                    "signature": "d89d025872be9e15a7aa3a960a01a32b",
                    "source": 19,
                    "outerId": "65904788",
                    "score": 0,
                    "isCollect": false,
                    "id": 1630352321
                },
                {
                    "imageId": 1630352307,
                    "userId": 630152,
                    "height": 307,
                    "width": 307,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/b6265c910816948b971ab2d2fd845f8b.png",
                    "signature": "b6265c910816948b971ab2d2fd845f8b",
                    "source": 19,
                    "outerId": "65904789",
                    "score": 6,
                    "isCollect": false,
                    "id": 1630352307
                },
                {
                    "imageId": 1630351404,
                    "userId": 630152,
                    "height": 1138,
                    "width": 1280,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/ef44cdbcd8ceb325350b03e6e090a571.jpeg",
                    "signature": "ef44cdbcd8ceb325350b03e6e090a571",
                    "source": 19,
                    "outerId": "65904713",
                    "score": 0,
                    "isCollect": false,
                    "id": 1630351404
                },
                {
                    "imageId": 1630351367,
                    "userId": 630152,
                    "height": 682,
                    "width": 682,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/e2110a0ec503bbe4e681ef304bf7182f.png",
                    "signature": "e2110a0ec503bbe4e681ef304bf7182f",
                    "source": 19,
                    "outerId": "65904714",
                    "score": 6,
                    "isCollect": false,
                    "id": 1630351367
                },
                {
                    "imageId": 1619907350,
                    "userId": 630152,
                    "height": 300,
                    "width": 300,
                    "url": "http://imagelib.cdn.bcebos.com/0/pic/9700b339f3365ad5c4379ee7de5a5c31.jpg",
                    "signature": "9700b339f3365ad5c4379ee7de5a5c31",
                    "source": 19,
                    "outerId": "65596640",
                    "score": 0,
                    "isCollect": false,
                    "id": 1619907350
                },
                {
                    "imageId": 1617347659,
                    "userId": 630152,
                    "height": 225,
                    "width": 225,
                    "url": "http://imagelib.cdn.bcebos.com/0/pic/8bb6a4c473397d96d4667502b2334317.jpg",
                    "signature": "8bb6a4c473397d96d4667502b2334317",
                    "source": 19,
                    "outerId": "null",
                    "score": 0,
                    "isCollect": false,
                    "id": 1617347659
                },
                {
                    "imageId": 1616680996,
                    "userId": 630152,
                    "height": 662,
                    "width": 1000,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/e4c1b58022926c97dadfbfeef5eec386.jpg",
                    "signature": "e4c1b58022926c97dadfbfeef5eec386",
                    "source": 19,
                    "outerId": "65474541",
                    "score": 0,
                    "isCollect": false,
                    "id": 1616680996
                },
                {
                    "imageId": 1616680245,
                    "userId": 630152,
                    "height": 540,
                    "width": 960,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/bbccdc665002fe043ccc509d75673482.png",
                    "signature": "bbccdc665002fe043ccc509d75673482",
                    "source": 19,
                    "outerId": "65474542",
                    "score": 8,
                    "isCollect": false,
                    "id": 1616680245
                },
                {
                    "imageId": 1614849496,
                    "userId": 630152,
                    "height": 685,
                    "width": 1024,
                    "url": "http://bj.bcebos.com/imagelib/150/share_pic/be01ae6d084ff7d718d0f7581ff3ca31.jpg",
                    "signature": "be01ae6d084ff7d718d0f7581ff3ca31",
                    "source": 19,
                    "outerId": "65448465",
                    "score": 0,
                    "isCollect": false,
                    "id": 1614849496
                }
            ],
            "countMap": {
                "5": 10000,
                "11": 82221,
                "19": 1761
            },
            "totalCount": 1761,
            "traceId": "4b534c47-98a4-4e2e-98a8-156649685773",
            "reqId": "4b534c47-15e9-4335-ced9-156649686745"
        },
        "status": 0,
        "errors": []
    }

module.exports = {
    musicBaseTypes,
    musicItems,
    defaultSmartData,
    templateStyleResp,
    templateStyleListResp,
    musicBaseList,
    uploadImageResponse,
    cutImageResponse,
    smartResponse,
    uploadImage,
    imageCopyRight,
    defaultSmartData2
};
