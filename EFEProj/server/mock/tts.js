/**
 * @file mockResponse.js
 * @author lvhongbin (lvhongbin@baidu.com)
 * @date    2019-08-07 19:54:36
 * @version 1.0.0
 */

let TEXT = "TEXT";
let PIC = "PIC";
let AUDIO = "AUDIO";
let VIDEO = "VIDEO";

let addMaterials = {
    "data": {
        "templateId": 3560,
        "videoName": "你好中国，中国你好",
        "source": 18,
        "backgroundAudio": "http://bj.bcebos.com/fcvideo/0f6b728547a128ac7fe305334fcb4e19.wav",
        "shotList": [
            {
                "index": 1,
                "type": "head",
                "textList": [
                    {
                        "index": 1,
                        "text": "1",
                        "textStartTime": 0,
                        "textLenLimit": 2
                    },
                    {
                        "index": 2,
                        "text": "",
                        "textStartTime": 1,
                        "textLenLimit": 1
                    },
                    {
                        "index": 3,
                        "text": "",
                        "textStartTime": 1.73,
                        "textLenLimit": 1
                    },
                    {
                        "index": 4,
                        "text": "",
                        "textStartTime": 2.3,
                        "textLenLimit": 0
                    },
                    {
                        "index": 5,
                        "text": "",
                        "textStartTime": 2.6,
                        "textLenLimit": 0
                    }
                ],
                "readType": 2
            },
            {
                "index": 2,
                "textList": [
                    {
                        "index": 1,
                        "text": "2",
                        "textStartTime": 3.13,
                        "textLenLimit": 0
                    },
                    {
                        "index": 2,
                        "text": "2",
                        "textStartTime": 3.6,
                        "textLenLimit": 0
                    }
                ],
                "mediaList": [
                    {
                        "type": "PIC",
                        "mediaUrl": "http://shijuezhongguo.cdn.bcebos.com/1/810829957.jpg@s_2,w_1140,h_640"
                    }
                ],
                "logoList": [],
                "readType": 2
            },
            {
                "index": 3,
                "textList": [
                    {
                        "index": 1,
                        "text": "3",
                        "textStartTime": 4.1,
                        "textLenLimit": 1
                    }
                ],
                "mediaList": [
                    {
                        "type": "PIC",
                        "mediaUrl": "http://shijuezhongguo.cdn.bcebos.com/1/810829957.jpg@s_2,w_1140,h_640"
                    }
                ],
                "logoList": [],
                "readType": 2
            },
            {
                "index": 4,
                "textList": [
                    {
                        "index": 1,
                        "text": "4",
                        "textStartTime": 5.1,
                        "textLenLimit": 2
                    }
                ],
                "mediaList": [
                    {
                        "type": "PIC",
                        "mediaUrl": "http://shijuezhongguo.cdn.bcebos.com/1/810829957.jpg@s_2,w_1140,h_640"
                    }
                ],
                "logoList": [],
                "readType": 2
            },
            {
                "index": 5,
                "textList": [
                    {
                        "index": 1,
                        "text": "5",
                        "textStartTime": 6.5,
                        "textLenLimit": 1
                    }
                ],
                "mediaList": [
                    {
                        "type": "PIC",
                        "mediaUrl": "http://shijuezhongguo.cdn.bcebos.com/1/810829957.jpg@s_2,w_1140,h_640"
                    }
                ],
                "logoList": [],
                "readType": 2
            },
            {
                "index": 6,
                "textList": [
                    {
                        "index": 1,
                        "text": "6",
                        "textStartTime": 7.6,
                        "textLenLimit": 1
                    }
                ],
                "mediaList": [
                    {
                        "type": "PIC",
                        "mediaUrl": "http://shijuezhongguo.cdn.bcebos.com/1/810829957.jpg@s_2,w_1140,h_640"
                    }
                ],
                "logoList": [],
                "readType": 2
            },
            {
                "index": 7,
                "textList": [
                    {
                        "index": 1,
                        "text": "7",
                        "textStartTime": 8.76,
                        "textLenLimit": 1
                    },
                    {
                        "textStartTime": 9.3,
                        "textLenLimit": 1
                    },
                    {
                        "textStartTime": 1E+1,
                        "textLenLimit": 2
                    }
                ],
                "mediaList": [],
                "logoList": [],
                "readType": 2
            },
            {
                "index": 8,
                "textList": [
                    {
                        "index": 1,
                        "text": "8",
                        "textStartTime": 11.16,
                        "textLenLimit": 1
                    },
                    {
                        "index": 2,
                        "text": "9",
                        "textStartTime": 12,
                        "textLenLimit": 0
                    }
                ],
                "mediaList": [],
                "logoList": [],
                "readType": 2
            }
        ],
        "template": {
            "templateId": 3560,
            "templateName": "01图文快闪按句朗读",
            "templateType": 1,
            "demos": [
                {
                    "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/2730074f95dfa31ee9a5b2a456f0edbc.mp4",
                    "templateDemoBgm": "ba4a36a096894c04b56dff6855bad1a2",
                    "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/7bb67e48c12516c4c91c8b9e093c94da.jpg"
                }
            ],
            "limits": {
                "templateResourceTypeLimit": [
                    ""
                ],
                "templateResourceCountMin": 8,
                "templateResourceCountMax": 8,
                "templateWordLengthLimit": 30,
                "templateHeader": true,
                "templateTailer": false,
                "templateMinDuration": 8,
                "templateMaxDuration": 12
            },
            "shotLimits": [
                {
                    "index": 1,
                    "startTime": 0.0
                },
                {
                    "index": 2,
                    "startTime": 3.05
                },
                {
                    "index": 3,
                    "startTime": 4.03
                },
                {
                    "index": 4,
                    "startTime": 5.03
                },
                {
                    "index": 5,
                    "startTime": 6.17
                },
                {
                    "index": 6,
                    "startTime": 7.21
                },
                {
                    "index": 7,
                    "startTime": 8.23
                },
                {
                    "index": 8,
                    "startTime": 11.06
                }
            ],
            "styleIds": [
                8,
                9,
                6,
                7
            ],
            "typeIds": []
        }
    },
    "status": 0,
    "errors": []
}
let previewMaterials = {
    template: {
        templateId: 1,
        templateName: 'xxxx',
        templateType: 1,
        renderType: 0,
        limits: {
            templateResourceTypeLimit: [
                'VIDEO',
                'AUDIO',
                'PIC',
                'TEXT'
            ],
            templateResourceCountMin: 3,
            templateResourceCountMax: 30,
            templateWordLengthLimit: 15,
            templateHeader: true,
            templateTailer: false,
            templateMinDuration: 20,
            templateMaxDuration: 2000
        },
        shotLimits: [
            {
                index: 1,
                startTime: 0.5,
                textList: [
                    {
                        index: 1,
                        textLength: 5
                    },
                    {
                        index: 1,
                        textLength: 5
                    }
                ],
                mediaList: [
                    {
                        index: 1,
                        type: 'VIDEO',
                        widthMin: 100,
                        widthMax: 200,
                        heightMin: 100,
                        heightMax: 200,
                        duration: 10.5,
                        orientation: 0
                    },
                    {
                        index: 1,
                        type: 'VIDEO',
                        widthMin: 100,
                        widthMax: 200,
                        heightMin: 100,
                        heightMax: 200,
                        duration: 10.5,
                        orientation: 0
                    }
                ],
                logoList: [
                    {
                        index: 1
                    },
                    {
                        index: 1
                    }
                ]
            },
            {
                index: 1,
                startTime: 0.5,
                textList: [
                    {
                        index: 1,
                        textLength: 5
                    },
                    {
                        index: 1,
                        textLength: 5
                    }
                ],
                mediaList: [
                    {
                        index: 1,
                        type: 'VIDEO',
                        widthMin: 100,
                        widthMax: 200,
                        heightMin: 100,
                        heightMax: 200,
                        duration: 10.5,
                        orientation: 0
                    },
                    {
                        index: 1,
                        type: 'VIDEO',
                        widthMin: 100,
                        widthMax: 200,
                        heightMin: 100,
                        heightMax: 200,
                        duration: 10.5,
                        orientation: 0
                    }
                ],
                logoList: [
                    {
                        index: 1
                    },
                    {
                        index: 1
                    }
                ]
            }
        ]
    },
    formatType: 1,
    source: 31,
    content: {
        shotList: [
            {
                index: 1,
                type: 'head',
                segmentTyoe: 1,
                transitionId: 0,
                textList: [
                    {
                        index: 1,
                        text: '我是第一个文本'
                    },
                    {
                        index: 2,
                        text: '我是第二个'
                    }
                ],
                mediaList: [
                    {
                        index: 1,
                        type: 'VIDEO',
                        startTime: 1.5,
                        endTime: 3.5,
                        mediaUrl: 'http://test.mp4',
                        enableAudio: 0
                    },
                    {
                        index: 2,
                        type: 'PIC',
                        startTime: 0,
                        endTime: 0,
                        mediaUrl: 'http://test.png',
                        enableAudio: 0
                    }
                ],
                logoList: [
                    {
                        index: 1,
                        logoUrl: 'httptestpng'
                    }
                ]
            },
            {
                index: 1,
                type: 'head',
                segmentTyoe: 1,
                transitionId: 0,
                textList: [
                    {
                        index: 1,
                        text: '我是第一个文本'
                    },
                    {
                        index: 2,
                        text: '我是第二个'
                    }
                ],
                mediaList: [
                    {
                        index: 1,
                        type: 'VIDEO',
                        startTime: 1.5,
                        endTime: 3.5,
                        mediaUrl: 'http://test.mp4',
                        enableAudio: 0
                    },
                    {
                        index: 2,
                        type: 'PIC',
                        startTime: 0,
                        endTime: 0,
                        mediaUrl: 'http://test.png',
                        enableAudio: 0
                    }
                ],
                logoList: [
                    {
                        index: 1,
                        logoUrl: 'httptestpng'
                    }
                ]
            }
        ],
        backgroundAudio: 'http://test.mp3'
    },
    videoname: 'my video',
    originvideoid: '87182973',
    vgcid: 1234145
}

let getVideoMaterial = {
    "data": {
        "templateId": 3560,
        "videoName": "11111111111111",
        "source": 18,
        "backgroundAudio": "http://bj.bcebos.com/fcvideo/1478012b4203657ae1a3d423abdd6c22.wav",
        "shotList": [
            {
                "index": 1,
                "type": "head",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "1",
                        "textStartTime": 0,
                        "textLenLimit": 2
                    },
                    {
                        "index": 2,
                        "text": "1",
                        "textStartTime": 1,
                        "textLenLimit": 1
                    },
                    {
                        "index": 3,
                        "text": "1",
                        "textStartTime": 1.73,
                        "textLenLimit": 1
                    },
                    {
                        "index": 4,
                        "text": "",
                        "textStartTime": 2.3,
                        "textLenLimit": 0
                    },
                    {
                        "index": 5,
                        "text": "",
                        "textStartTime": 2.6,
                        "textLenLimit": 0
                    }
                ],
                "readType": 2
            },
            {
                "index": 2,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "",
                        "textStartTime": 3.13,
                        "textLenLimit": 0
                    },
                    {
                        "index": 2,
                        "text": "",
                        "textStartTime": 3.6,
                        "textLenLimit": 0
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "PIC",
                        "mediaUrl": "http://aod-image.baidu.com/0/pic/63cd4de8c006fe59516dc2200a3ccc03.jpg",
                        "enableAudio": 0
                    }
                ],
                "readType": 2
            },
            {
                "index": 3,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "2",
                        "textStartTime": 4.1,
                        "textLenLimit": 1
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "PIC",
                        "mediaUrl": "http://aod-image.baidu.com/0/pic/fa3a231e3308ced129f6bd6bb8174947.jpg",
                        "enableAudio": 0
                    }
                ],
                "readType": 2
            },
            {
                "index": 4,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "1",
                        "textStartTime": 5.1,
                        "textLenLimit": 2
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "PIC",
                        "mediaUrl": "http://aod-image.baidu.com/0/pic/ac0edc724b1580bbc16fc01e67487e59.jpg",
                        "enableAudio": 0
                    }
                ],
                "readType": 2
            },
            {
                "index": 5,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "1",
                        "textStartTime": 6.5,
                        "textLenLimit": 1
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "PIC",
                        "mediaUrl": "http://aod-image.baidu.com/0/pic/fa634a7dbf07b38f6c348bed8120b063.jpg",
                        "enableAudio": 0
                    }
                ],
                "readType": 2
            },
            {
                "index": 6,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "1",
                        "textStartTime": 7.6,
                        "textLenLimit": 1
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "PIC",
                        "mediaUrl": "http://aod-image.baidu.com/0/pic/72ef7592869f9bdf9f5b403998f25b12.jpg",
                        "enableAudio": 0
                    }
                ],
                "readType": 2
            },
            {
                "index": 7,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "1",
                        "textStartTime": 8.76,
                        "textLenLimit": 1
                    },
                    {
                        "index": 2,
                        "text": "1",
                        "textStartTime": 9.3,
                        "textLenLimit": 1
                    },
                    {
                        "index": 3,
                        "text": "1",
                        "textStartTime": 1E+1,
                        "textLenLimit": 2
                    }
                ],
                "readType": 2
            },
            {
                "index": 8,
                "type": "tail",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "1",
                        "textStartTime": 11.16,
                        "textLenLimit": 1
                    },
                    {
                        "index": 2,
                        "text": "",
                        "textStartTime": 12,
                        "textLenLimit": 0
                    }
                ],
                "readType": 2
            }
        ],
        "template": {
            "templateId": 3560,
            "templateName": "01图文快闪按句朗读",
            "templateType": 1,
            "demos": [
                {
                    "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/2730074f95dfa31ee9a5b2a456f0edbc.mp4",
                    "templateDemoBgm": "ba4a36a096894c04b56dff6855bad1a2",
                    "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/7bb67e48c12516c4c91c8b9e093c94da.jpg"
                }
            ],
            "limits": {
                "templateResourceTypeLimit": [
                    ""
                ],
                "templateResourceCountMin": 8,
                "templateResourceCountMax": 8,
                "templateWordLengthLimit": 30,
                "templateHeader": true,
                "templateTailer": false,
                "templateMinDuration": 8,
                "templateMaxDuration": 12
            },
            "shotLimits": [
                {
                    "index": 1,
                    "startTime": 0.0,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 12
                        },
                        {
                            "index": 1,
                            "textLength": 10
                        },
                        {
                            "index": 2,
                            "textLength": 10
                        },
                        {
                            "index": 3,
                            "textLength": 10
                        },
                        {
                            "index": 4,
                            "textLength": 10
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "texts": [
                            {
                                "startTime": 0,
                                "textLimit": 2
                            },
                            {
                                "startTime": 1,
                                "textLimit": 1
                            },
                            {
                                "startTime": 1.73,
                                "textLimit": 1
                            },
                            {
                                "startTime": 2.3,
                                "textLimit": 0
                            },
                            {
                                "startTime": 2.6,
                                "textLimit": 0
                            }
                        ]
                    }
                },
                {
                    "index": 2,
                    "startTime": 3.05,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 6
                        },
                        {
                            "index": 1,
                            "textLength": 6
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "PIC",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "texts": [
                            {
                                "startTime": 3.13,
                                "textLimit": 0
                            },
                            {
                                "startTime": 3.6,
                                "textLimit": 0
                            }
                        ]
                    }
                },
                {
                    "index": 3,
                    "startTime": 4.03,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 10
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "PIC",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "texts": [
                            {
                                "startTime": 4.1,
                                "textLimit": 1
                            }
                        ]
                    }
                },
                {
                    "index": 4,
                    "startTime": 5.03,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 10
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "PIC",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "texts": [
                            {
                                "startTime": 5.1,
                                "textLimit": 2
                            }
                        ]
                    }
                },
                {
                    "index": 5,
                    "startTime": 6.17,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 10
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "PIC",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "texts": [
                            {
                                "startTime": 6.5,
                                "textLimit": 1
                            }
                        ]
                    }
                },
                {
                    "index": 6,
                    "startTime": 7.21,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 10
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "PIC",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "texts": [
                            {
                                "startTime": 7.6,
                                "textLimit": 1
                            }
                        ]
                    }
                },
                {
                    "index": 7,
                    "startTime": 8.23,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 8
                        },
                        {
                            "index": 1,
                            "textLength": 8
                        },
                        {
                            "index": 2,
                            "textLength": 14
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "texts": [
                            {
                                "startTime": 8.76,
                                "textLimit": 1
                            },
                            {
                                "startTime": 9.3,
                                "textLimit": 1
                            },
                            {
                                "startTime": 1E+1,
                                "textLimit": 2
                            }
                        ]
                    }
                },
                {
                    "index": 8,
                    "startTime": 11.06,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 8
                        },
                        {
                            "index": 1,
                            "textLength": 10
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "texts": [
                            {
                                "startTime": 11.16,
                                "textLimit": 1
                            },
                            {
                                "startTime": 12,
                                "textLimit": 0
                            }
                        ]
                    }
                }
            ],
            "styleIds": [
                8,
                9,
                6,
                7
            ],
            "typeIds": [],
            "readType": 2
        },
        "musicId": "",
        "vcgId": "3b31b0224c4047dab414fa39abb20ee1"
    },
    "status": 0,
    "errors": []
}

let getVideoMaterial1 = {
    "data": {
        "templateId": 3536,
        "videoName": "测试合成454555",
        "source": 18,
        "backgroundAudio": "http://bj.bcebos.com/fcvideo/1eea6c3a438804768e897e2ae13cb2d8.wav",
        "shotList": [
            {
                "index": 1,
                "type": "head",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "5"
                    },
                    {
                        "index": 2,
                        "text": "55"
                    },
                    {
                        "index": 3,
                        "text": "555"
                    }
                ],
                "readType": 1,
                "ttsScenceText": "测试",
                "ttsTextLenLimit": 6,
                "ttsText": "测试"
            },
            {
                "index": 2,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "55555"
                    },
                    {
                        "index": 2,
                        "text": "111"
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "VIDEO",
                        "mediaUrl": "https://fc-feed.bj.bcebos.com/cobra/2730074f95dfa31ee9a5b2a456f0edbc.mp4",
                        "enableAudio": 0,
                        "startTime": '1.2',
                        "endTime": '4.2',
                    }
                ],
                "readType": 1,
                "ttsScenceText": "1",
                "ttsTextLenLimit": 1,
                "ttsText": "1"
            },
            {
                "index": 3,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "111111"
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "PIC",
                        "mediaUrl": "http://aod-image.baidu.com/0/pic/b435f51e43222750a57c4584be6487be.jpg",
                        "enableAudio": 0
                    }
                ],
                "readType": 1,
                "ttsScenceText": "3",
                "ttsTextLenLimit": 2,
                "ttsText": "3"
            },
            {
                "index": 4,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "444"
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "PIC",
                        "mediaUrl": "http://aod-image.baidu.com/0/pic/63cd4de8c006fe59516dc2200a3ccc03.jpg",
                        "enableAudio": 0
                    }
                ],
                "readType": 1,
                "ttsScenceText": "朝",
                "ttsTextLenLimit": 2,
                "ttsText": "朝"
            },
            {
                "index": 5,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "4"
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "PIC",
                        "mediaUrl": "http://aod-image.baidu.com/0/pic/9043138cf1f8621896b144c03f6269b5.jpg",
                        "enableAudio": 0
                    }
                ],
                "readType": 1,
                "ttsScenceText": "龙",
                "ttsTextLenLimit": 2,
                "ttsText": "龙"
            },
            {
                "index": 6,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "大"
                    }
                ],
                "mediaList": [
                    {
                        "index": 1,
                        "type": "PIC",
                        "mediaUrl": "http://aod-image.baidu.com/0/pic/a7fdc41e0bba1ac6ff7dce68baf2f5af.jpg",
                        "enableAudio": 0
                    }
                ],
                "readType": 1,
                "ttsScenceText": "田",
                "ttsTextLenLimit": 2,
                "ttsText": "田"
            },
            {
                "index": 7,
                "type": "body",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "朝"
                    },
                    {
                        "index": 2,
                        "text": "龙"
                    },
                    {
                        "index": 3,
                        "text": "王"
                    }
                ],
                "readType": 0,
                "ttsScenceText": "",
                "ttsText": ""
            },
            {
                "index": 8,
                "type": "tail",
                "transitionId": 0,
                "aeFileId": 10010,
                "textList": [
                    {
                        "index": 1,
                        "text": "雪"
                    },
                    {
                        "index": 2,
                        "text": "石"
                    }
                ],
                "readType": 1,
                "ttsScenceText": "l",
                "ttsTextLenLimit": 1,
                "ttsText": "l"
            }
        ],
        "template": {
            "templateId": 3536,
            "templateName": "01图文快闪按镜头",
            "templateType": 1,
            "demos": [
                {
                    "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/2730074f95dfa31ee9a5b2a456f0edbc.mp4",
                    "templateDemoBgm": "ba4a36a096894c04b56dff6855bad1a2",
                    "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/7bb67e48c12516c4c91c8b9e093c94da.jpg"
                }
            ],
            "limits": {
                "templateResourceTypeLimit": [
                    ""
                ],
                "templateResourceCountMin": 8,
                "templateResourceCountMax": 8,
                "templateWordLengthLimit": 30,
                "templateHeader": true,
                "templateTailer": true,
                "templateMinDuration": 8,
                "templateMaxDuration": 12
            },
            "shotLimits": [
                {
                    "index": 1,
                    "startTime": 0.0,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 12
                        },
                        {
                            "index": 1,
                            "textLength": 10
                        },
                        {
                            "index": 2,
                            "textLength": 10
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "textLimit": 6
                    }
                },
                {
                    "index": 2,
                    "startTime": 3.05,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 6
                        },
                        {
                            "index": 1,
                            "textLength": 6
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "VIDEO",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "textLimit": 1
                    }
                },
                {
                    "index": 3,
                    "startTime": 4.03,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 10
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "PIC",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "textLimit": 2
                    }
                },
                {
                    "index": 4,
                    "startTime": 5.03,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 10
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "PIC",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "textLimit": 2
                    }
                },
                {
                    "index": 5,
                    "startTime": 6.17,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 10
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "PIC",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "textLimit": 2
                    }
                },
                {
                    "index": 6,
                    "startTime": 7.21,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 10
                        }
                    ],
                    "mediaList": [
                        {
                            "index": 0,
                            "type": "PIC",
                            "duration": 3.0,
                            "orientation": 1,
                            "widthMin": 1140,
                            "widthMax": 1140,
                            "heightMin": 640,
                            "heightMax": 640
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "textLimit": 2
                    }
                },
                {
                    "index": 7,
                    "startTime": 8.23,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 8
                        },
                        {
                            "index": 1,
                            "textLength": 8
                        },
                        {
                            "index": 2,
                            "textLength": 14
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "textLimit": 5
                    }
                },
                {
                    "index": 8,
                    "startTime": 11.06,
                    "textList": [
                        {
                            "index": 0,
                            "textLength": 8
                        },
                        {
                            "index": 1,
                            "textLength": 10
                        }
                    ],
                    "readType": 0,
                    "tts": {
                        "textLimit": 1
                    }
                }
            ],
            "styleIds": [
                8,
                9,
                6,
                7
            ],
            "typeIds": [],
            "readType": 1
        },
        "musicId": "",
        "vcgId": "3b31b0224c4047dab414fa39abb20ee1"
    },
    "status": 0,
    "errors": []
}

let getVideoMaterialList = {
    status: 200,
    error: null,
    "data": {
        "page": 1,
        "pageSize": 20,
        "total": 20,
        "list": [
            {
                "templateId": 3000,
                "templateName": "层层展现",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1QzQyJXU1QzQyJXU1QzU1JXU3M0Iw.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1QzQyJXU1QzQyJXU1QzU1JXU3M0Iw.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1QzQyJXU1QzQyJXU1QzU1JXU3M0Iw.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100342,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100343,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100344,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100342,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100343,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100342,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100343,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100344,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100342,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100343,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100342,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100343,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100344,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100342,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100343,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100342,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100343,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100344,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100342,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100343,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5,
                    3
                ]
            },
            {
                "templateId": 3001,
                "templateName": "平滑切换",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1RTczJXU2RUQxJXU1MjA3JXU2MzYy.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1RTczJXU2RUQxJXU1MjA3JXU2MzYy.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1RTczJXU2RUQxJXU1MjA3JXU2MzYy.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100338,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100339,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100340,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100341,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100338,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100339,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100340,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100341,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100338,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100339,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100338,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100339,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100340,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100341,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100338,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100339,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100340,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100341,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100338,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100339,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5,
                    3
                ]
            },
            {
                "templateId": 3002,
                "templateName": "左右推拉",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1REU2JXU1M0YzJXU2M0E4JXU2MkM5.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1REU2JXU1M0YzJXU2M0E4JXU2MkM5.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1REU2JXU1M0YzJXU2M0E4JXU2MkM5.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100297,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100298,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100297,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100298,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100297,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100298,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100297,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100298,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100297,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100298,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 8
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100297,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100298,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100297,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100298,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100297,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100298,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100297,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100298,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100297,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100298,\"textList\":[{\"textLength\":8,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3003,
                "templateName": "左右滑动",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1REU2JXU1M0YzJXU2RUQxJXU1MkE4JTBB.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1REU2JXU1M0YzJXU2RUQxJXU1MkE4JTBB.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1REU2JXU1M0YzJXU2RUQxJXU1MkE4JTBB.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100255,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100256,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100257,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100258,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100255,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100256,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100257,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100258,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100255,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100256,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100255,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100256,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100257,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100258,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100255,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100256,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100257,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100258,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100255,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100256,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3004,
                "templateName": "简单切换",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU3QjgwJXU1MzU1JXU1MjA3JXU2MzYy.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU3QjgwJXU1MzU1JXU1MjA3JXU2MzYy.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU3QjgwJXU1MzU1JXU1MjA3JXU2MzYy.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100259,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100260,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100261,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100262,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100259,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100260,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100261,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100262,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100259,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100260,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100259,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100260,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100261,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100262,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100259,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100260,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100261,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100262,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100259,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100260,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3005,
                "templateName": "淡入缩放",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU2REUxJXU1MTY1JXU3RjI5JXU2NTNF.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU2REUxJXU1MTY1JXU3RjI5JXU2NTNF.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU2REUxJXU1MTY1JXU3RjI5JXU2NTNF.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100207,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100208,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100209,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100207,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100208,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100209,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100207,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100208,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100209,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100207,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100207,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100208,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100209,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100207,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100208,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100209,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100207,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100208,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100209,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100207,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3006,
                "templateName": "翻转展示",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU3RkZCJXU4RjZDJXU1QzU1JXU3OTNB.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU3RkZCJXU4RjZDJXU1QzU1JXU3OTNB.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU3RkZCJXU4RjZDJXU1QzU1JXU3OTNB.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100284,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100285,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100286,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100284,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100285,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100286,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100284,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100285,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100286,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100284,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100284,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100285,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100286,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100284,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100285,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100286,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100284,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100285,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100286,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100284,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3007,
                "templateName": "玻璃效果",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU3M0JCJXU3NDgzJXU2NTQ4JXU2NzlD.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU3M0JCJXU3NDgzJXU2NTQ4JXU2NzlD.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU3M0JCJXU3NDgzJXU2NTQ4JXU2NzlD.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100290,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100291,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100292,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100290,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100291,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100292,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100290,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100291,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100292,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100290,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100290,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100291,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100292,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100290,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100291,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100292,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100290,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100291,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100292,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100290,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3008,
                "templateName": "层层进入",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1QzQyJXU1QzQyJXU4RkRCJXU1MTY1JTBB.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1QzQyJXU1QzQyJXU4RkRCJXU1MTY1JTBB.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1QzQyJXU1QzQyJXU4RkRCJXU1MTY1JTBB.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100293,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100294,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100295,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100293,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100294,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100295,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100293,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100294,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100295,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100293,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100293,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100294,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100295,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100293,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100294,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100295,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100293,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100294,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100295,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100293,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3009,
                "templateName": "多样展开",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1OTFBJXU2ODM3JXU1QzU1JXU1RjAw.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1OTFBJXU2ODM3JXU1QzU1JXU1RjAw.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1OTFBJXU2ODM3JXU1QzU1JXU1RjAw.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100330,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100331,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100332,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100330,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100331,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100332,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100330,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100331,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100332,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100330,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100330,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100331,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100332,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100330,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100331,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100332,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100330,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100331,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100332,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100330,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3010,
                "templateName": "花样展示",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4MkIxJXU2ODM3JXU1QzU1JXU3OTNB.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4MkIxJXU2ODM3JXU1QzU1JXU3OTNB.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4MkIxJXU2ODM3JXU1QzU1JXU3OTNB.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100345,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100346,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100347,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100345,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100346,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100347,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100345,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100346,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100347,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100345,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100345,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100346,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100347,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100345,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100346,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100347,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100345,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100346,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100347,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100345,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3011,
                "templateName": "动感折叠",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1MkE4JXU2MTFGJXU2Mjk4JXU1M0UwJTBB.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1MkE4JXU2MTFGJXU2Mjk4JXU1M0UwJTBB.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1MkE4JXU2MTFGJXU2Mjk4JXU1M0UwJTBB.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100402,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100403,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100404,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100402,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100403,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100404,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100402,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100403,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100404,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100402,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100402,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100403,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100404,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100402,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100403,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100404,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100402,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100403,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100404,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100402,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3012,
                "templateName": "色块推动",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4MjcyJXU1NzU3JXU2M0E4JXU1MkE4.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4MjcyJXU1NzU3JXU2M0E4JXU1MkE4.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4MjcyJXU1NzU3JXU2M0E4JXU1MkE4.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100405,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100406,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100407,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100405,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100406,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100407,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100405,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100406,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100407,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100405,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100405,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100406,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100407,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100405,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100406,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100407,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100405,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100406,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100407,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100405,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3013,
                "templateName": "色块平推",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4MjcyJXU1NzU3JXU1RTczJXU2M0E4JTBB.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4MjcyJXU1NzU3JXU1RTczJXU2M0E4JTBB.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4MjcyJXU1NzU3JXU1RTczJXU2M0E4JTBB.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100408,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100409,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100410,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100408,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100409,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100410,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100408,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100409,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100410,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100408,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100408,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100409,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100410,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100408,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100409,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100410,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100408,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100409,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100410,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100408,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3014,
                "templateName": "透明滤镜",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU5MDBGJXU2NjBFJXU2RUU0JXU5NTVD.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU5MDBGJXU2NjBFJXU2RUU0JXU5NTVD.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU5MDBGJXU2NjBFJXU2RUU0JXU5NTVD.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100431,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100432,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100433,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100431,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100432,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100433,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100431,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100432,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100433,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100431,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100431,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100432,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100433,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100431,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100432,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100433,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100431,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100432,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100433,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100431,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3015,
                "templateName": "卡片推移",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1MzYxJXU3MjQ3JXU2M0E4JXU3OUZC.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1MzYxJXU3MjQ3JXU2M0E4JXU3OUZC.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1MzYxJXU3MjQ3JXU2M0E4JXU3OUZC.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100452,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100453,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100454,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100452,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100453,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100454,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100452,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100453,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100454,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100452,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100452,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100453,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100454,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100452,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100453,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100454,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100452,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100453,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100454,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100452,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3016,
                "templateName": "视觉律动",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4OUM2JXU4OUM5JXU1RjhCJXU1MkE4.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4OUM2JXU4OUM5JXU1RjhCJXU1MkE4.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4OUM2JXU4OUM5JXU1RjhCJXU1MkE4.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100458,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100459,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100460,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100458,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100459,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100460,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100458,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100459,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100460,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100458,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100458,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100459,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100460,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100458,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100459,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100460,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100458,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100459,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100460,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100458,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3017,
                "templateName": "三角折叠",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU0RTA5JXU4OUQyJXU2Mjk4JXU1M0Uw.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU0RTA5JXU4OUQyJXU2Mjk4JXU1M0Uw.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU0RTA5JXU4OUQyJXU2Mjk4JXU1M0Uw.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100488,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100489,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100490,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100488,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100489,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100490,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100488,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100489,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100490,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100488,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100488,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100489,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100490,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100488,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100489,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100490,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100488,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100489,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100490,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100488,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3018,
                "templateName": "蒙版滑动",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4NDk5JXU3MjQ4JXU2RUQxJXU1MkE4.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4NDk5JXU3MjQ4JXU2RUQxJXU1MkE4.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU4NDk5JXU3MjQ4JXU2RUQxJXU1MkE4.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100491,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100492,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100493,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100491,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100492,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100493,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100491,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100492,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100493,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100491,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100491,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100492,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100493,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100491,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100492,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100493,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100491,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100492,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100493,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100491,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            },
            {
                "templateId": 3019,
                "templateName": "弹跳卡片",
                "templateType": 1,
                "demos": [
                    {
                        "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1RjM5JXU4REYzJXU1MzYxJXU3MjQ3.mp4",
                        "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1RjM5JXU4REYzJXU1MzYxJXU3MjQ3.mp3",
                        "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/JXU1RjM5JXU4REYzJXU1MzYxJXU3MjQ3.jpg"
                    }
                ],
                "limits": {
                    "templateResourceTypeLimit": [
                        "TEXT",
                        "PIC",
                        "AUDIO",
                        "VIDEO"
                    ],
                    "templateResourceCountMin": 5,
                    "templateResourceCountMax": 12,
                    "templateWordLengthLimit": 30,
                    "templateHeader": false,
                    "templateTailer": false,
                    "templateMinDuration": -1,
                    "templateMaxDuration": 40
                },
                "shotLimits": [
                    {
                        "index": 1,
                        "startTime": 0.0,
                        "aeFileId": 100494,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 2,
                        "startTime": 0.0,
                        "aeFileId": 100495,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 3,
                        "startTime": 0.0,
                        "aeFileId": 100496,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 4,
                        "startTime": 0.0,
                        "aeFileId": 100494,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 5,
                        "startTime": 0.0,
                        "aeFileId": 100495,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 6,
                        "startTime": 0.0,
                        "aeFileId": 100496,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 7,
                        "startTime": 0.0,
                        "aeFileId": 100494,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 8,
                        "startTime": 0.0,
                        "aeFileId": 100495,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 9,
                        "startTime": 0.0,
                        "aeFileId": 100496,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    },
                    {
                        "index": 10,
                        "startTime": 0.0,
                        "aeFileId": 100494,
                        "textList": [
                            {
                                "index": 1,
                                "textLength": 10
                            }
                        ],
                        "mediaList": [
                            {
                                "index": 1,
                                "type": "PIC",
                                "duration": 0.0
                            }
                        ],
                        "logoList": []
                    }
                ],
                "extdata": "[{\"index\":1,\"startTime\":0.0,\"aeFileId\":100494,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":2,\"startTime\":0.0,\"aeFileId\":100495,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":3,\"startTime\":0.0,\"aeFileId\":100496,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":4,\"startTime\":0.0,\"aeFileId\":100494,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":5,\"startTime\":0.0,\"aeFileId\":100495,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":6,\"startTime\":0.0,\"aeFileId\":100496,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":7,\"startTime\":0.0,\"aeFileId\":100494,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":8,\"startTime\":0.0,\"aeFileId\":100495,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":9,\"startTime\":0.0,\"aeFileId\":100496,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]},{\"index\":10,\"startTime\":0.0,\"aeFileId\":100494,\"textList\":[{\"textLength\":10,\"index\":1}],\"mediaList\":[{\"type\":\"PIC\",\"duration\":0.0,\"index\":1}],\"logoList\":[]}]",
                "styleIds": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                "typeIds": [
                    4,
                    5
                ]
            }
        ]
    },
    "status": 0,
    "errors": []
}

let getTemplateLabel = {
    "status": 200,
    error: null,
    data: {
        "styleList": [
            {
                "styleId": 1,
                "styleName": "装修装饰"
            },
            {
                "styleId": 2,
                "styleName": "旅游出行"
            },
            {
                "styleId": 3,
                "styleName": "摄影摄像"
            },
            {
                "styleId": 5,
                "styleName": "酒店服务"
            },
            {
                "styleId": 6,
                "styleName": "通用模板"
            },
            {
                "styleId": 7,
                "styleName": "文字快闪"
            },
            {
                "styleId": 8,
                "styleName": "图片快闪"
            },
            {
                "styleId": 9,
                "styleName": "图文快闪"
            },
            {
                "styleId": 10,
                "styleName": "商务展示"
            },
            {
                "styleId": 11,
                "styleName": "电商促销"
            }
        ],
        "typeList": [
            {
                "typeId": 1,
                "typeName": "品牌宣传"
            },
            {
                "typeId": 2,
                "typeName": "服务展示"
            },
            {
                "typeId": 3,
                "typeName": "服务介绍"
            },
            {
                "typeId": 4,
                "typeName": "导购营销"
            },
            {
                "typeId": 5,
                "typeName": "产品展示"
            }
        ]
    }
}

let getList = {
    "data": {
        "page": 1,
        "pageSize": 24,
        "total": 85,
        "list": [
        {
            "templateId": 3576,
            "templateName": "01图文快闪按句朗读",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/2730074f95dfa31ee9a5b2a456f0edbc.mp4",
                "templateDemoBgm": "ba4a36a096894c04b56dff6855bad1a2",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/7bb67e48c12516c4c91c8b9e093c94da.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 8,
            "templateResourceCountMax": 8,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 8,
            "templateMaxDuration": 12
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 10
                },
                {
                    "index": 2,
                    "textLength": 10
                },
                {
                    "index": 3,
                    "textLength": 10
                },
                {
                    "index": 4,
                    "textLength": 10
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 0,
                    "textLimit": 2
                    },
                    {
                    "startTime": 1,
                    "textLimit": 1
                    },
                    {
                    "startTime": 1.73,
                    "textLimit": 1
                    },
                    {
                    "startTime": 2.3,
                    "textLimit": 0
                    },
                    {
                    "startTime": 2.6,
                    "textLimit": 0
                    }
                ]
                }
            },
            {
                "index": 2,
                "startTime": 3.05,
                "textList": [
                {
                    "index": 0,
                    "textLength": 6
                },
                {
                    "index": 1,
                    "textLength": 6
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 3.13,
                    "textLimit": 0
                    },
                    {
                    "startTime": 3.6,
                    "textLimit": 0
                    }
                ]
                }
            },
            {
                "index": 3,
                "startTime": 4.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 4.1,
                    "textLimit": 1
                    }
                ]
                }
            },
            {
                "index": 4,
                "startTime": 5.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 5.1,
                    "textLimit": 2
                    }
                ]
                }
            },
            {
                "index": 5,
                "startTime": 6.17,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 6.5,
                    "textLimit": 1
                    }
                ]
                }
            },
            {
                "index": 6,
                "startTime": 7.21,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 7.6,
                    "textLimit": 1
                    }
                ]
                }
            },
            {
                "index": 7,
                "startTime": 8.23,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 8
                },
                {
                    "index": 2,
                    "textLength": 14
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 8.76,
                    "textLimit": 1
                    },
                    {
                    "startTime": 9.3,
                    "textLimit": 1
                    },
                    {
                    "startTime": 10,
                    "textLimit": 2
                    }
                ]
                }
            },
            {
                "index": 8,
                "startTime": 11.06,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 10
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 11.16,
                    "textLimit": 1
                    },
                    {
                    "startTime": 12,
                    "textLimit": 0
                    }
                ]
                }
            }
            ],
            "styleIds": [
            8,
            9,
            6,
            7
            ],
            "typeIds": [],
            "readType": 2
        },
        {
            "templateId": 3560,
            "templateName": "01图文快闪按句朗读",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/2730074f95dfa31ee9a5b2a456f0edbc.mp4",
                "templateDemoBgm": "ba4a36a096894c04b56dff6855bad1a2",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/7bb67e48c12516c4c91c8b9e093c94da.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 8,
            "templateResourceCountMax": 8,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 8,
            "templateMaxDuration": 12
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 10
                },
                {
                    "index": 2,
                    "textLength": 10
                },
                {
                    "index": 3,
                    "textLength": 10
                },
                {
                    "index": 4,
                    "textLength": 10
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 0,
                    "textLimit": 2
                    },
                    {
                    "startTime": 1,
                    "textLimit": 1
                    },
                    {
                    "startTime": 1.73,
                    "textLimit": 1
                    },
                    {
                    "startTime": 2.3,
                    "textLimit": 0
                    },
                    {
                    "startTime": 2.6,
                    "textLimit": 0
                    }
                ]
                }
            },
            {
                "index": 2,
                "startTime": 3.05,
                "textList": [
                {
                    "index": 0,
                    "textLength": 6
                },
                {
                    "index": 1,
                    "textLength": 6
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 3.13,
                    "textLimit": 0
                    },
                    {
                    "startTime": 3.6,
                    "textLimit": 0
                    }
                ]
                }
            },
            {
                "index": 3,
                "startTime": 4.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 4.1,
                    "textLimit": 1
                    }
                ]
                }
            },
            {
                "index": 4,
                "startTime": 5.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 5.1,
                    "textLimit": 2
                    }
                ]
                }
            },
            {
                "index": 5,
                "startTime": 6.17,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 6.5,
                    "textLimit": 1
                    }
                ]
                }
            },
            {
                "index": 6,
                "startTime": 7.21,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 7.6,
                    "textLimit": 1
                    }
                ]
                }
            },
            {
                "index": 7,
                "startTime": 8.23,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 8
                },
                {
                    "index": 2,
                    "textLength": 14
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 8.76,
                    "textLimit": 1
                    },
                    {
                    "startTime": 9.3,
                    "textLimit": 1
                    },
                    {
                    "startTime": 10,
                    "textLimit": 2
                    }
                ]
                }
            },
            {
                "index": 8,
                "startTime": 11.06,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 10
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 11.16,
                    "textLimit": 1
                    },
                    {
                    "startTime": 12,
                    "textLimit": 0
                    }
                ]
                }
            }
            ],
            "styleIds": [
            8,
            9,
            6,
            7
            ],
            "typeIds": [],
            "readType": 2
        },
        {
            "templateId": 3560,
            "templateName": "01图文快闪按句朗读",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/2730074f95dfa31ee9a5b2a456f0edbc.mp4",
                "templateDemoBgm": "ba4a36a096894c04b56dff6855bad1a2",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/7bb67e48c12516c4c91c8b9e093c94da.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 8,
            "templateResourceCountMax": 8,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 8,
            "templateMaxDuration": 12
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 10
                },
                {
                    "index": 2,
                    "textLength": 10
                },
                {
                    "index": 3,
                    "textLength": 10
                },
                {
                    "index": 4,
                    "textLength": 10
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 0,
                    "textLimit": 13
                    },
                    {
                    "startTime": 1,
                    "textLimit": 11
                    },
                    {
                    "startTime": 1.73,
                    "textLimit": 1
                    },
                    {
                    "startTime": 2.3,
                    "textLimit": 0
                    },
                    {
                    "startTime": 2.6,
                    "textLimit": 0
                    }
                ]
                }
            },
            {
                "index": 2,
                "startTime": 3.05,
                "textList": [
                {
                    "index": 0,
                    "textLength": 6
                },
                {
                    "index": 1,
                    "textLength": 6
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 3.13,
                    "textLimit": 0
                    },
                    {
                    "startTime": 3.6,
                    "textLimit": 0
                    }
                ]
                }
            },
            {
                "index": 3,
                "startTime": 4.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 4.1,
                    "textLimit": 1
                    }
                ]
                }
            },
            {
                "index": 4,
                "startTime": 5.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 5.1,
                    "textLimit": 2
                    }
                ]
                }
            },
            {
                "index": 5,
                "startTime": 6.17,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 6.5,
                    "textLimit": 1
                    }
                ]
                }
            },
            {
                "index": 6,
                "startTime": 7.21,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 7.6,
                    "textLimit": 1
                    }
                ]
                }
            },
            {
                "index": 7,
                "startTime": 8.23,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 8
                },
                {
                    "index": 2,
                    "textLength": 14
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 8.76,
                    "textLimit": 1
                    },
                    {
                    "startTime": 9.3,
                    "textLimit": 1
                    },
                    {
                    "startTime": 10,
                    "textLimit": 2
                    }
                ]
                }
            },
            {
                "index": 8,
                "startTime": 11.06,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 10
                }
                ],
                "readType": 0,
                "tts": {
                "texts": [
                    {
                    "startTime": 11.16,
                    "textLimit": 1
                    },
                    {
                    "startTime": 12,
                    "textLimit": 0
                    }
                ]
                }
            }
            ],
            "styleIds": [
            8,
            9,
            6,
            7
            ],
            "typeIds": [],
            "readType": 2
        },
        {
            "templateId": 3536,
            "templateName": "01图文快闪按镜头",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/2730074f95dfa31ee9a5b2a456f0edbc.mp4",
                "templateDemoBgm": "ba4a36a096894c04b56dff6855bad1a2",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/7bb67e48c12516c4c91c8b9e093c94da.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 8,
            "templateResourceCountMax": 8,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": true,
            "templateMinDuration": 8,
            "templateMaxDuration": 12
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 10
                },
                {
                    "index": 2,
                    "textLength": 10
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 6
                }
            },
            {
                "index": 2,
                "startTime": 3.05,
                "textList": [
                {
                    "index": 0,
                    "textLength": 6
                },
                {
                    "index": 1,
                    "textLength": 6
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 1
                }
            },
            {
                "index": 3,
                "startTime": 4.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 2
                }
            },
            {
                "index": 4,
                "startTime": 5.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 2
                }
            },
            {
                "index": 5,
                "startTime": 6.17,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 2
                }
            },
            {
                "index": 6,
                "startTime": 7.21,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 2
                }
            },
            {
                "index": 7,
                "startTime": 8.23,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 8
                },
                {
                    "index": 2,
                    "textLength": 14
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 5
                }
            },
            {
                "index": 8,
                "startTime": 11.06,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 10
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 1
                }
            }
            ],
            "styleIds": [
            8,
            9,
            6,
            7
            ],
            "typeIds": [],
            "readType": 1
        },
        {
            "templateId": 3041,
            "templateName": "01图文快闪-tts",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/5b1568e12a9c091f9f34f9592b194526.mp4",
                "templateDemoBgm": "VCG23115465",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/7bb67e48c12516c4c91c8b9e093c94da.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 5,
            "templateResourceCountMax": 8,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": true,
            "templateMinDuration": 8,
            "templateMaxDuration": 12
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 10
                },
                {
                    "index": 2,
                    "textLength": 10
                },
                {
                    "index": 3,
                    "textLength": 10
                },
                {
                    "index": 4,
                    "textLength": 10
                }
                ],
                "readType": 2,
                "tts": {
                "texts": [
                    {
                    "startTime": 0.1,
                    "textLimit": 10
                    },
                    {
                    "startTime": 2,
                    "textLimit": 10
                    },
                    {
                    "startTime": 3,
                    "textLimit": 10
                    },
                    {
                    "startTime": 5,
                    "textLimit": 10
                    },
                    {
                    "startTime": 7,
                    "textLimit": 10
                    }
                ]
                }
            },
            {
                "index": 2,
                "startTime": 3.05,
                "textList": [
                {
                    "index": 0,
                    "textLength": 6
                },
                {
                    "index": 1,
                    "textLength": 6
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 4.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 5.03,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 6.17,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 7.21,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 7,
                "startTime": 8.23,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 8
                },
                {
                    "index": 2,
                    "textLength": 14
                }
                ],
                "readType": 0
            },
            {
                "index": 8,
                "startTime": 11.06,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 10
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            8,
            9,
            6,
            7
            ],
            "typeIds": [],
            "readType": 2
        },
        {
            "templateId": 3040,
            "templateName": "03培训班按镜头",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/eaf5ecb5e6d987fcaf70b1ab75907455.mp4",
                "templateDemoBgm": "VCG43778305463",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/027b401659cf318d16d5ef1cd9aa7c3c.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 3,
            "templateResourceCountMax": 3,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": true,
            "templateMinDuration": 15,
            "templateMaxDuration": 50
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 4,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 10
                }
            },
            {
                "index": 2,
                "startTime": 5.26,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 42,
                    "orientation": 2,
                    "widthMin": 640,
                    "widthMax": 640,
                    "heightMin": 1580,
                    "heightMax": 8000
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 83
                }
            },
            {
                "index": 3,
                "startTime": 47.06,
                "textList": [
                {
                    "index": 0,
                    "textLength": 18
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 5
                }
            }
            ],
            "styleIds": [
            6
            ],
            "typeIds": [],
            "readType": 1
        },
        {
            "templateId": 2590,
            "templateName": "百度看时间好快copy",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/6caf9cb648dc94c69e25494f44194992.mp4",
                "templateDemoBgm": "1",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/59454773768ae9e99a8c6cc57368bc71.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 3,
            "templateResourceCountMax": 3,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 22,
            "templateMaxDuration": 23
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 4,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                },
                {
                    "index": 1,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 5.26,
                "textList": [
                {
                    "index": 0,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 14,
                    "orientation": 2,
                    "widthMin": 640,
                    "widthMax": 640,
                    "heightMin": 1140,
                    "heightMax": 2560
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 20.04,
                "textList": [
                {
                    "index": 0,
                    "textLength": 15
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            2
            ],
            "typeIds": [],
            "readType": 0
        },
        {
            "templateId": 2589,
            "templateName": "百度看时间好快copy",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/6caf9cb648dc94c69e25494f44194992.mp4",
                "templateDemoBgm": "1",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/59454773768ae9e99a8c6cc57368bc71.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 3,
            "templateResourceCountMax": 3,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 22,
            "templateMaxDuration": 23
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 4,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                },
                {
                    "index": 1,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 10
                }
            },
            {
                "index": 2,
                "startTime": 5.26,
                "textList": [
                {
                    "index": 0,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 14,
                    "orientation": 2,
                    "widthMin": 640,
                    "widthMax": 640,
                    "heightMin": 1140,
                    "heightMax": 2560
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 29
                }
            },
            {
                "index": 3,
                "startTime": 20.04,
                "textList": [
                {
                    "index": 0,
                    "textLength": 15
                }
                ],
                "readType": 0,
                "tts": {
                "textLimit": 2
                }
            }
            ],
            "styleIds": [
            2
            ],
            "typeIds": [],
            "readType": 1
        },
        {
            "templateId": 2587,
            "templateName": "联调模板_shiji",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/eaf5ecb5e6d987fcaf70b1ab75907455.mp4",
                "templateDemoBgm": "1",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/027b401659cf318d16d5ef1cd9aa7c3c.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 3,
            "templateResourceCountMax": 3,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 22,
            "templateMaxDuration": 23
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 4,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                },
                {
                    "index": 1,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 5.26,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                },
                {
                    "index": 1,
                    "textLength": 14
                },
                {
                    "index": 2,
                    "textLength": 14
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 14,
                    "orientation": 2,
                    "widthMin": 640,
                    "widthMax": 640,
                    "heightMin": 1140,
                    "heightMax": 2560
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 20.04,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                },
                {
                    "index": 1,
                    "textLength": 18
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            2
            ],
            "typeIds": [],
            "readType": 2
        },
        {
            "templateId": 2586,
            "templateName": "百度看时间好快",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/eaf5ecb5e6d987fcaf70b1ab75907455.mp4",
                "templateDemoBgm": "1",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/027b401659cf318d16d5ef1cd9aa7c3c.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 3,
            "templateResourceCountMax": 3,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 22,
            "templateMaxDuration": 23
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 4,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                },
                {
                    "index": 1,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 5.26,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                },
                {
                    "index": 1,
                    "textLength": 16
                },
                {
                    "index": 2,
                    "textLength": 14
                },
                {
                    "index": 3,
                    "textLength": 14
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 14,
                    "orientation": 2,
                    "widthMin": 640,
                    "widthMax": 640,
                    "heightMin": 1140,
                    "heightMax": 2560
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 20.04,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                },
                {
                    "index": 1,
                    "textLength": 18
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            2
            ],
            "typeIds": [],
            "readType": 0
        },
        {
            "templateId": 2584,
            "templateName": "01培训班",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/eaf5ecb5e6d987fcaf70b1ab75907455.mp4",
                "templateDemoBgm": "1",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/027b401659cf318d16d5ef1cd9aa7c3c.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 3,
            "templateResourceCountMax": 3,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 14,
            "templateMaxDuration": 22
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 4,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                },
                {
                    "index": 1,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1,
                    "widthMin": 1140,
                    "widthMax": 1140,
                    "heightMin": 640,
                    "heightMax": 640
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 5.26,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                },
                {
                    "index": 1,
                    "textLength": 16
                },
                {
                    "index": 2,
                    "textLength": 14
                },
                {
                    "index": 3,
                    "textLength": 14
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 14,
                    "orientation": 2,
                    "widthMin": 640,
                    "widthMax": 640,
                    "heightMin": 1140,
                    "heightMax": 2560
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 20.04,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                },
                {
                    "index": 1,
                    "textLength": 18
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            6
            ],
            "typeIds": [],
            "readType": 0
        },
        {
            "templateId": 2582,
            "templateName": "鹅鹅鹅",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/1be7c92ea4239ddb302ffe55419f6f73.mp4",
                "templateDemoBgm": "VCG43752845451",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/f3a424032da79912c27f55772dbf5858.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 1,
            "templateResourceCountMax": 1,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 3,
            "templateMaxDuration": 15
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 2.05,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3.27,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            2
            ],
            "typeIds": [],
            "readType": 0
        },
        {
            "templateId": 2579,
            "templateName": "劳其筋骨",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/1be7c92ea4239ddb302ffe55419f6f73.mp4",
                "templateDemoBgm": "VCG43752845451",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/1ba164d9033161201b49cdd2d0ed799d.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 3,
            "templateResourceCountMax": 4,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 3,
            "templateMaxDuration": 15
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 2.05,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 24
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC&VIDEO",
                    "duration": 3.27,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 5.17,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 9.03,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.21,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 12.14,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC&VIDEO",
                    "duration": 3.26,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            1
            ],
            "typeIds": [],
            "readType": 0
        },
        {
            "templateId": 2578,
            "templateName": "必先苦其心智",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/1be7c92ea4239ddb302ffe55419f6f73.mp4",
                "templateDemoBgm": "VCG43752845451",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/1ba164d9033161201b49cdd2d0ed799d.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 1,
            "templateResourceCountMax": 1,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 3,
            "templateMaxDuration": 15
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 2.05,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC&VIDEO",
                    "duration": 3.27,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            1
            ],
            "typeIds": [],
            "readType": 0
        },
        {
            "templateId": 2577,
            "templateName": "没成功过",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "https://fc-feed.bj.bcebos.com/cobra/1be7c92ea4239ddb302ffe55419f6f73.mp4",
                "templateDemoBgm": "VCG43752845451",
                "templateDemoCover": "https://fc-feed.bj.bcebos.com/cobra/1ba164d9033161201b49cdd2d0ed799d.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                ""
            ],
            "templateResourceCountMin": 1,
            "templateResourceCountMax": 1,
            "templateWordLengthLimit": 30,
            "templateHeader": true,
            "templateTailer": false,
            "templateMinDuration": 3,
            "templateMaxDuration": 15
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 2.05,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC&VIDEO",
                    "duration": 3.27,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            1
            ],
            "typeIds": [],
            "readType": 0
        },
        {
            "templateId": 2565,
            "templateName": "01图文缩放（横版）",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/MDHlm77mlofnvKnmlL7vvIjmqKrniYjvvIk=/MDHlm77mlofnvKnmlL7vvIjmqKrniYjvvIk=.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/MDHlm77mlofnvKnmlL7vvIjmqKrniYjvvIk=/MDHlm77mlofnvKnmlL7vvIjmqKrniYjvvIk=.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/MDHlm77mlofnvKnmlL7vvIjmqKrniYjvvIk=/MDHlm77mlofnvKnmlL7vvIjmqKrniYjvvIk=.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 6,
            "templateResourceCountMax": 6,
            "templateWordLengthLimit": 0,
            "templateHeader": false,
            "templateTailer": false,
            "templateMinDuration": 25,
            "templateMaxDuration": 25
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 4,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 8,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 12.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 16.17,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 20.23,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            1,
            2,
            3,
            5,
            6,
            10,
            11
            ],
            "typeIds": [
            1,
            2,
            3,
            4,
            5
            ],
            "readType": 0
        },
        {
            "templateId": 2564,
            "templateName": "纯图切换",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/57qv5Zu+5YiH5o2i/57qv5Zu+5YiH5o2i.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/57qv5Zu+5YiH5o2i/57qv5Zu+5YiH5o2i.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/57qv5Zu+5YiH5o2i/57qv5Zu+5YiH5o2i.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 6,
            "templateResourceCountMax": 6,
            "templateWordLengthLimit": 0,
            "templateHeader": false,
            "templateTailer": false,
            "templateMinDuration": 25,
            "templateMaxDuration": 25
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 4,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 8.15,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 12.21,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 16.22,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 21.03,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            1,
            2,
            3,
            5,
            6,
            10,
            11
            ],
            "typeIds": [
            1,
            2,
            3,
            4,
            5
            ],
            "readType": 0
        },
        {
            "templateId": 2557,
            "templateName": "02小说翻页",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/02MDHlsIor7Tnv7vpobU=/02MDHlsIor7Tnv7vpobU=.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/02MDHlsIor7Tnv7vpobU=/02MDHlsIor7Tnv7vpobU=.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/02MDHlsIor7Tnv7vpobU=/02MDHlsIor7Tnv7vpobU=.jpg"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 3,
            "templateResourceCountMax": 3,
            "templateWordLengthLimit": 0,
            "templateHeader": false,
            "templateTailer": false,
            "templateMinDuration": 15,
            "templateMaxDuration": 15
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 6
                },
                {
                    "index": 1,
                    "textLength": 24
                },
                {
                    "index": 2,
                    "textLength": 504
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 13.13,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 2,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            1,
            2,
            3,
            5,
            6,
            7,
            8,
            9,
            10,
            11
            ],
            "typeIds": [
            1,
            2,
            3,
            4,
            5
            ],
            "readType": 0
        },
        {
            "templateId": 2534,
            "templateName": "缤纷图形冷横（视频）",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/57yk57q35Zu+5b2i5Ya35qiq77yI6KeG6aKR77yJ/57yk57q35Zu+5b2i5Ya35qiq77yI6KeG6aKR77yJ.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/57yk57q35Zu+5b2i5Ya35qiq77yI6KeG6aKR77yJ/57yk57q35Zu+5b2i5Ya35qiq77yI6KeG6aKR77yJ.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/57yk57q35Zu+5b2i5Ya35qiq77yI6KeG6aKR77yJ/57yk57q35Zu+5b2i5Ya35qiq77yI6KeG6aKR77yJ.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 7,
            "templateResourceCountMax": 12,
            "templateWordLengthLimit": 18,
            "templateHeader": true,
            "templateTailer": true,
            "templateMinDuration": 35,
            "templateMaxDuration": 60
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 5,
                "textList": [
                {
                    "index": 0,
                    "textLength": 26
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 10,
                "textList": [
                {
                    "index": 0,
                    "textLength": 26
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 15,
                "textList": [
                {
                    "index": 0,
                    "textLength": 26
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 20.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 25,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 7,
                "startTime": 30,
                "textList": [
                {
                    "index": 0,
                    "textLength": 28
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 8,
                "startTime": 35,
                "textList": [
                {
                    "index": 0,
                    "textLength": 32
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 9,
                "startTime": 40,
                "textList": [
                {
                    "index": 0,
                    "textLength": 32
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 10,
                "startTime": 45,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 11,
                "startTime": 50,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 12,
                "startTime": 55,
                "textList": [
                {
                    "index": 0,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            1,
            2,
            10,
            11,
            5,
            6
            ],
            "typeIds": [
            5,
            3
            ],
            "readType": 0
        },
        {
            "templateId": 2531,
            "templateName": "幻灯片",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/5bm754Gv54mH/5bm754Gv54mH.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/5bm754Gv54mH/5bm754Gv54mH.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/5bm754Gv54mH/5bm754Gv54mH.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 5,
            "templateResourceCountMax": 5,
            "templateWordLengthLimit": 9,
            "templateHeader": false,
            "templateTailer": true,
            "templateMinDuration": 28,
            "templateMaxDuration": 28
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 11
                },
                {
                    "index": 2,
                    "textLength": 8
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 4.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 9
                },
                {
                    "index": 1,
                    "textLength": 8
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 9.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                },
                {
                    "index": 1,
                    "textLength": 10
                },
                {
                    "index": 2,
                    "textLength": 7
                },
                {
                    "index": 3,
                    "textLength": 8
                },
                {
                    "index": 4,
                    "textLength": 10
                },
                {
                    "index": 5,
                    "textLength": 5
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 7.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 16.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                },
                {
                    "index": 1,
                    "textLength": 10
                },
                {
                    "index": 2,
                    "textLength": 12
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 6,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 23,
                "textList": [
                {
                    "index": 0,
                    "textLength": 8
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            6,
            10,
            11
            ],
            "typeIds": [
            1,
            2,
            3,
            4,
            5
            ],
            "readType": 0
        },
        {
            "templateId": 2530,
            "templateName": "杂志书",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/5p2C5b+X5Lmm/5p2C5b+X5Lmm.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/5p2C5b+X5Lmm/5p2C5b+X5Lmm.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/5p2C5b+X5Lmm/5p2C5b+X5Lmm.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 5,
            "templateResourceCountMax": 9,
            "templateWordLengthLimit": 0,
            "templateHeader": false,
            "templateTailer": false,
            "templateMinDuration": 25,
            "templateMaxDuration": 45
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                },
                {
                    "index": 1,
                    "textLength": 23
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 4.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 6,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 31
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 10,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 28
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 15,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 29
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 20,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 31
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 25,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                },
                {
                    "index": 1,
                    "textLength": 21
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 7,
                "startTime": 30,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 24
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 8,
                "startTime": 35,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                },
                {
                    "index": 1,
                    "textLength": 26
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 9,
                "startTime": 40,
                "textList": [
                {
                    "index": 0,
                    "textLength": 10
                },
                {
                    "index": 1,
                    "textLength": 32
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 5,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            10,
            11,
            5,
            6
            ],
            "typeIds": [
            1,
            2,
            3,
            4,
            5
            ],
            "readType": 0
        },
        {
            "templateId": 2529,
            "templateName": "旋转切换横",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/5peL6L2s5YiH5o2i5qiq/5peL6L2s5YiH5o2i5qiq.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/5peL6L2s5YiH5o2i5qiq/5peL6L2s5YiH5o2i5qiq.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/5peL6L2s5YiH5o2i5qiq/5peL6L2s5YiH5o2i5qiq.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 7,
            "templateResourceCountMax": 12,
            "templateWordLengthLimit": 16,
            "templateHeader": true,
            "templateTailer": true,
            "templateMinDuration": 16,
            "templateMaxDuration": 23
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 2.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 28
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 4.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 6.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 20
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 8.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 22
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 10.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 27
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 7,
                "startTime": 12,
                "textList": [
                {
                    "index": 0,
                    "textLength": 27
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 8,
                "startTime": 13.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 26
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 9,
                "startTime": 14.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 10,
                "startTime": 16.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 28
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 11,
                "startTime": 17.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 12,
                "startTime": 19.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 4.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            2,
            10,
            3,
            11,
            6
            ],
            "typeIds": [
            1,
            2,
            3
            ],
            "readType": 0
        },
        {
            "templateId": 2527,
            "templateName": "图片横划（视频）",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/5Zu+54mH5qiq5YiS77yI6KeG6aKR77yJ/5Zu+54mH5qiq5YiS77yI6KeG6aKR77yJ.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/5Zu+54mH5qiq5YiS77yI6KeG6aKR77yJ/5Zu+54mH5qiq5YiS77yI6KeG6aKR77yJ.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/5Zu+54mH5qiq5YiS77yI6KeG6aKR77yJ/5Zu+54mH5qiq5YiS77yI6KeG6aKR77yJ.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 7,
            "templateResourceCountMax": 12,
            "templateWordLengthLimit": 16,
            "templateHeader": true,
            "templateTailer": true,
            "templateMinDuration": 15,
            "templateMaxDuration": 25
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 4.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 4,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 6,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 8,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 10,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 7,
                "startTime": 12,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 8,
                "startTime": 14,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 9,
                "startTime": 16,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 10,
                "startTime": 18,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 11,
                "startTime": 20,
                "textList": [
                {
                    "index": 0,
                    "textLength": 30
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 12,
                "startTime": 22,
                "textList": [
                {
                    "index": 0,
                    "textLength": 20
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            1,
            2,
            3,
            5,
            6,
            10,
            11
            ],
            "typeIds": [
            1,
            2,
            3,
            4,
            5
            ],
            "readType": 0
        },
        {
            "templateId": 2526,
            "templateName": "交互切换（视频）",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/5Lqk5LqS5YiH5o2i77yI6KeG6aKR77yJ/5Lqk5LqS5YiH5o2i77yI6KeG6aKR77yJ.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/5Lqk5LqS5YiH5o2i77yI6KeG6aKR77yJ/5Lqk5LqS5YiH5o2i77yI6KeG6aKR77yJ.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/5Lqk5LqS5YiH5o2i77yI6KeG6aKR77yJ/5Lqk5LqS5YiH5o2i77yI6KeG6aKR77yJ.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 5,
            "templateResourceCountMax": 8,
            "templateWordLengthLimit": 14,
            "templateHeader": true,
            "templateTailer": true,
            "templateMinDuration": 32,
            "templateMaxDuration": 55
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 28
                },
                {
                    "index": 2,
                    "textLength": 20
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 4.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 24
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 9.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                },
                {
                    "index": 1,
                    "textLength": 32
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 7.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 15,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 30
                },
                {
                    "index": 2,
                    "textLength": 20
                },
                {
                    "index": 3,
                    "textLength": 32
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 15,
                    "orientation": 1
                },
                {
                    "index": 1,
                    "type": "VIDEO&PIC",
                    "duration": 15,
                    "orientation": 1
                },
                {
                    "index": 2,
                    "type": "VIDEO&PIC",
                    "duration": 15,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 27,
                "textList": [
                {
                    "index": 0,
                    "textLength": 16
                },
                {
                    "index": 1,
                    "textLength": 34
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 6.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 32,
                "textList": [
                {
                    "index": 0,
                    "textLength": 22
                },
                {
                    "index": 1,
                    "textLength": 16
                },
                {
                    "index": 2,
                    "textLength": 16
                },
                {
                    "index": 3,
                    "textLength": 16
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 13.2,
                    "orientation": 1
                },
                {
                    "index": 1,
                    "type": "VIDEO&PIC",
                    "duration": 13.2,
                    "orientation": 1
                },
                {
                    "index": 2,
                    "type": "VIDEO&PIC",
                    "duration": 13.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 7,
                "startTime": 45,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 18
                },
                {
                    "index": 2,
                    "textLength": 18
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "VIDEO&PIC",
                    "duration": 7,
                    "orientation": 1
                },
                {
                    "index": 1,
                    "type": "VIDEO&PIC",
                    "duration": 7,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 8,
                "startTime": 50,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 28
                },
                {
                    "index": 2,
                    "textLength": 20
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            1,
            2,
            3,
            5,
            6,
            10,
            11
            ],
            "typeIds": [
            1,
            2,
            3,
            4,
            5
            ],
            "readType": 0
        },
        {
            "templateId": 2539,
            "templateName": "广分-商务移民视频",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/5bm5YiGLeWVhuWKoeenu+awkeinhumikQ==/5bm5YiGLeWVhuWKoeenu+awkeinhumikQ==.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/5bm5YiGLeWVhuWKoeenu+awkeinhumikQ==/5bm5YiGLeWVhuWKoeenu+awkeinhumikQ==.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/5bm5YiGLeWVhuWKoeenu+awkeinhumikQ==/5bm5YiGLeWVhuWKoeenu+awkeinhumikQ==.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 8,
            "templateResourceCountMax": 8,
            "templateWordLengthLimit": 84,
            "templateHeader": false,
            "templateTailer": true,
            "templateMinDuration": 18,
            "templateMaxDuration": 18
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "textList": [
                {
                    "index": 0,
                    "textLength": 4
                },
                {
                    "index": 1,
                    "textLength": 13
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 1.3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 1.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 14
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 2.3,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 3.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 12
                },
                {
                    "index": 1,
                    "textLength": 2
                },
                {
                    "index": 2,
                    "textLength": 2
                },
                {
                    "index": 3,
                    "textLength": 2
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 6.1,
                "textList": [
                {
                    "index": 0,
                    "textLength": 19
                },
                {
                    "index": 1,
                    "textLength": 9
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 2.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 8,
                "textList": [
                {
                    "index": 0,
                    "textLength": 14
                },
                {
                    "index": 1,
                    "textLength": 14
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 2.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 10,
                "textList": [
                {
                    "index": 0,
                    "textLength": 20
                },
                {
                    "index": 1,
                    "textLength": 3
                },
                {
                    "index": 2,
                    "textLength": 2
                },
                {
                    "index": 3,
                    "textLength": 2
                },
                {
                    "index": 4,
                    "textLength": 2
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 7,
                "startTime": 12.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 13
                },
                {
                    "index": 1,
                    "textLength": 13
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 2.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 8,
                "startTime": 14.2,
                "textList": [
                {
                    "index": 0,
                    "textLength": 32
                },
                {
                    "index": 1,
                    "textLength": 32
                },
                {
                    "index": 2,
                    "textLength": 20
                }
                ],
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            6
            ],
            "typeIds": [
            2
            ],
            "readType": 0
        },
        {
            "templateId": 2537,
            "templateName": "广分-图文轮播",
            "templateType": 1,
            "demos": [
            {
                "templateDemo": "http://bj.bcebos.com/fcvideo/template/zebra/5bm5YiGLeWbvuaWh+i9ruaSrQ==/5bm5YiGLeWbvuaWh+i9ruaSrQ==.mp4",
                "templateDemoBgm": "http://bj.bcebos.com/fcvideo/template/zebra/5bm5YiGLeWbvuaWh+i9ruaSrQ==/5bm5YiGLeWbvuaWh+i9ruaSrQ==.mp3",
                "templateDemoCover": "http://bj.bcebos.com/fcvideo/template/zebra/5bm5YiGLeWbvuaWh+i9ruaSrQ==/5bm5YiGLeWbvuaWh+i9ruaSrQ==.png"
            }
            ],
            "limits": {
            "templateResourceTypeLimit": [
                "TEXT",
                "PIC",
                "AUDIO",
                "VIDEO"
            ],
            "templateResourceCountMin": 8,
            "templateResourceCountMax": 8,
            "templateWordLengthLimit": 0,
            "templateHeader": false,
            "templateTailer": false,
            "templateMinDuration": 22,
            "templateMaxDuration": 22
            },
            "shotLimits": [
            {
                "index": 1,
                "startTime": 0,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.1,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 2,
                "startTime": 2.1,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 3,
                "startTime": 5.1,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 4,
                "startTime": 8.1,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 5,
                "startTime": 11,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 6,
                "startTime": 14,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 7,
                "startTime": 16.2,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3.2,
                    "orientation": 1
                }
                ],
                "readType": 0
            },
            {
                "index": 8,
                "startTime": 19.2,
                "mediaList": [
                {
                    "index": 0,
                    "type": "PIC",
                    "duration": 3,
                    "orientation": 1
                }
                ],
                "readType": 0
            }
            ],
            "styleIds": [
            6
            ],
            "typeIds": [
            2
            ],
            "readType": 0
        }
        ]
    },
    "status": 0,
    "errors": []
}

module.exports = {
    addMaterials,
    previewMaterials,
    getVideoMaterial,
    getVideoMaterialList,
    getTemplateLabel,
    getList
};
