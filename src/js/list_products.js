const products = [
    {
        id: 1,
        category: 'Рушники',
        imgMain: 'img/rushniki/1/rushnik.jpg',
        img: [
            'img/rushniki/1/rushnik.jpg',
            'img/rushniki/1/rushnik_2.jpg',
            'img/rushniki/1/rushnik_3.jpg',
            'img/rushniki/1/rushnik_4.jpg',
            'img/rushniki/1/rushnik_5.jpg',
        ],
        title: 'Махрові рушники. Натуралка, люкс котон 100%.',
        pack: true,
        size: {
            size1: {
                s: '70X140',
                inPack: 6,
                packSize: 6, 
                salePack: 3,
                price: 330,
                salePrice: 310
            },
            size2: {
                s: '50X90',
                inPack: 6,
                packSize: 6, 
                salePack: 3,
                price: 170,
                salePrice: 160
            },
        }
    },
    {
        id: 2,
        category: 'Пледи',
        imgMain: 'img/pledy/1/pled_haski.webp',
        img: [
        ],
        title: 'Іграшка з пледиком всередині "Хаскі"',
        pack: true,
        size: {
            size1: {
                s: '110X150',
                inPack: 1,
                packSize: 1, 
                salePack: 4,
                price: 450,
                salePrice: 370
            }
        }
    },
    {
        id: 3,
        category: 'Постільна білизна',
        imgMain: 'img/postil/1/postil.jpg',
        img: [
            'img/postil/1/postil.jpg',
            'img/postil/1/postil_1.jpg',
            'img/postil/1/postil_2.jpg',
            'img/postil/1/postil_3.jpg',
            'img/postil/1/postil_4.jpg',
            'img/postil/1/postil_5.jpg',
        ],
        title: 'Покривала +2 наволочки. 2 слоя тканини, хб',
        pack: true,
        size: {
            size1: {
                s: 'Покривало 200 на 230. Наволочки 50 на 70 (2шт).',
                inPack: 1,
                packSize: 1, 
                salePack: 6,
                price: 690,
                salePrice: 550
            }
        }
    },
    {
        id: 4,
        category: 'Покривала',
        imgMain: 'img/pokrivalo/1/pokrivalo.jpg',
        img: [
            'img/pokrivalo/1/pokrivalo.jpg',
            'img/pokrivalo/1/pokrivalo_1.jpg',
            'img/pokrivalo/1/pokrivalo_2.jpg',
            'img/pokrivalo/1/pokrivalo_3.jpg',
            'img/pokrivalo/1/pokrivalo_4.jpg',
            'img/pokrivalo/1/pokrivalo_5.jpg',
        ],
        title: "Покривала фібра 'іній'. М'якенькі, пухкенькі, приємні на дотик.",
        pack: true,
        size: {
            size1: {
                s: '180X200',
                inPack: 6,
                packSize: 1, 
                salePack: 10,
                price: 245,
                salePrice: 235
            }
        }
    },
    {
        id: 5,
        category: 'Рушники',
        imgMain: 'img/rushniki/2/rushnik.jpg',
        img: [
            'img/rushniki/2/rushnik.jpg',
            'img/rushniki/2/rushnik_2.jpg',
            'img/rushniki/2/rushnik_1.jpg',
        ],
        title: 'Махрові білі рушники. Натуральний котон, чудова якість.',
        pack: true,
        size: {
            size1: {
                s: '70X140',
                inPack: 6,
                packSize: 6, 
                salePack: 3,
                price: 220,
                salePrice: 200
            },
            size2: {
                s: '50X90',
                inPack: 6,
                packSize: 6, 
                salePack: 3,
                price: 115,
                salePrice: 105
            },
        }
    },
    {
        id: 6,
        category: 'Постільна білизна',
        imgMain: 'img/postil/2/postil.jpg',
        img: [
            'img/postil/2/postil.jpg',
            'img/postil/2/postil_1.jpg',
            'img/postil/2/postil_2.jpg',
            'img/postil/2/postil_3.jpg',
            'img/postil/2/postil_4.jpg',
            'img/postil/2/postil_5.jpg',
            'img/postil/2/postil_6.jpg',
            'img/postil/2/postil_7.jpg',
            'img/postil/2/postil_8.jpg',
        ],
        title: 'Постільна білизна сатин з простирадлом на резинці.',
        pack: true,
        size: {
            size1: {
                s: '200*220 підковдра. 180*200 (+25 бока) простирадло на резинці. 50*70 наволочки(2 шт).',
                inPack: 1,
                packSize: 1, 
                salePack: 3,
                price: 990,
                salePrice: 850
            }
        }
    },
    {
        id: 7,
        category: 'Рушники',
        imgMain: 'img/rushniki/3/rushnik.webp',
        img: [
            // 'img/rushniki/3/rushnik.webp',
        ],
        title: 'Рушники лицьові фібра.',
        pack: true,
        size: {
            size1: {
                s: '50X90',
                inPack: 8,
                packSize: 8,
                salePack: 3,
                price: 70,
                salePrice: 65
            },
        }
    },
    {
        id: 8,
        category: 'Пледи',
        imgMain: 'img/pledy/2/pled.webp',
        img: [
        ],
        title: 'Іграшка з пледиком всередині "Їжачок".',
        pack: true,
        size: {
            size1: {
                s: '110X150',
                inPack: 1,
                packSize: 1, 
                salePack: 4,
                price: 450,
                salePrice: 370
            }
        }
    },
    {
        id: 9,
        category: 'Рушники',
        imgMain: 'img/rushniki/4/rushnik.webp',
        img: [
            // 'img/rushniki/3/rushnik.webp',
        ],
        title: 'Кухонні рушники фібра "Кава-мальована".',
        pack: true,
        size: {
            size1: {
                s: '25X50',
                inPack: 20,
                packSize: 20, 
                salePack: 5,
                price: 12,
                salePrice: 10
            },
        }
    },
    {
        id: 10,
        category: 'Постільна білизна',
        imgMain: 'img/postil/3/postil.jpg',
        img: [
            'img/postil/3/postil.jpg',
            'img/postil/3/postil_1.jpg',
            'img/postil/3/postil_2.jpg',
            'img/postil/3/postil_3.jpg',
            'img/postil/3/postil_4.jpg',
            'img/postil/3/postil_5.jpg',
        ],
        title: 'Постільна білизна сатин жатка.',
        pack: true,
        size: {
            size1: {
                s: 'Підковдра 200 на 220. Простирадло 220 на 240. Наволочки 50 на 70 (2шт)',
                inPack: 1,
                packSize: 1, 
                salePack: 3,
                price: 1150,
                salePrice: 1000
            }
        }
    },
    {
        id: 11,
        category: 'Рушники',
        imgMain: 'img/rushniki/5/rushniki.webp',
        img: [
            // 'img/rushniki/3/rushnik.webp',
        ],
        title: 'Рушники махрові."Бамбук"',
        pack: true,
        size: {
            size1: {
                s: '70X140',
                inPack: 8,
                packSize: 8, 
                salePack: 3,
                price: 160,
                salePrice: 150
            },
            size2: {
                s: '50X90',
                inPack: 8,
                packSize: 8, 
                salePack: 3,
                price: 80,
                salePrice: 75
            },
        }
    },
    {
        id: 12,
        category: 'Рушники',
        imgMain: 'img/rushniki/6/rushnik.webp',
        img: [
            // 'img/rushniki/3/rushnik.webp',
        ],
        title: 'Рушники фібра, модель "лаванда".',
        pack: true,
        size: {
            size1: {
                s: '35X70',
                inPack: 5,
                packSize: 5, 
                salePack: 10,
                price: 50,
                salePrice: 40
            },
        }
    },
    {
        id: 34,
        category: 'Рушники',
        imgMain: 'img/rushniki/7/rushnik.webp',
        img: [
            // 'img/rushniki/3/rushnik.webp',
        ],
        title: 'Рушники махра.',
        pack: true,
        size: {
            size1: {
                s: '35X70',
                inPack: 12,
                packSize: 12, 
                salePack: 6,
                price: 65,
                salePrice: 60
            },
        }
    },
    {
        id: 13,
        category: 'Рушники',
        imgMain: 'img/rushniki/8/rushnik.jpg',
        img: [
            'img/rushniki/8/rushnik.jpg',
            'img/rushniki/8/rushnik_1.jpg',
            'img/rushniki/8/rushnik_2.jpg',
            'img/rushniki/8/rushnik_3.jpg',
        ],
        title: 'Рушники льняні.',
        pack: true,
        size: {
            size1: {
                s: '35X70',
                inPack: 50,
                packSize: 50, 
                salePack: 2,
                price: 27,
                salePrice: 25 
            },
        }
    },
    {
        id: 14,
        category: 'Пледи',
        imgMain: 'img/pledy/3/pled.webp',
        img: [
        ],
        title: 'Плєд-ковдра з узором, лазерна стрижка.',
        pack: true,
        size: {
            size1: {
                s: '200X230',
                inPack: 1,
                packSize: 1, 
                salePack: 3,
                price: 1150,
                salePrice: 900
            }
        }
    },
    {
        id: 15,
        category: 'Рушники',
        imgMain: 'img/rushniki/9/rushnik.jpg',
        img: [
            'img/rushniki/9/rushnik.jpg',
            'img/rushniki/9/rushnik_1.jpg',
            'img/rushniki/9/rushnik_2.jpg',
            'img/rushniki/9/rushnik_3.jpg',
            'img/rushniki/9/rushnik_4.jpg',
            'img/rushniki/9/rushnik_5.jpg',
            'img/rushniki/9/rushnik_6.jpg',
        ],
        title: 'Подарункові набори рушників +скатертина.',
        pack: true,
        size: {
            size1: {
                s: 'Рушники 35 на 75 + скатертина 110 на 150 + подарункова коробка',
                inPack: 6,
                packSize: 6, 
                salePack: 0,
                price: 580,
                salePrice: 580
            },
            size2: {
                s: 'Рушники 35 на 75 + скатертина 150 на 180 + подарункова коробка',
                inPack: 6,
                packSize: 6, 
                salePack: 0,
                price: 690,
                salePrice: 690
            },
            size3: {
                s: 'Рушники 35 на 75 + скатертина 150 на 220 + подарункова коробка',
                inPack: 6,
                packSize: 6, 
                salePack: 0,
                price: 850,
                salePrice: 850
            },
        }
    },
    {
        id: 16,
        category: 'Рушники',
        imgMain: 'img/rushniki/10/rushnik.webp',
        img: [
        ],
        title: 'Махрові рушники. "Вензель"',
        pack: true,
        size: {
            size1: {
                s: '50X90',
                inPack: 6,
                packSize: 6, 
                salePack: 3,
                price: 90,
                salePrice: 80
            },
            size2: {
                s: '70X140',
                inPack: 6,
                packSize: 6, 
                salePack: 3,
                price: 180,
                salePrice: 170
            },
        }
    },
    {
        id: 17,
        category: 'Рушники',
        imgMain: 'img/rushniki/11/servetka.webp',
        img: [
            'img/rushniki/11/servetka.webp',
            'img/rushniki/11/servetka_1.jpg',
            'img/rushniki/11/servetka_2.jpg',
            'img/rushniki/11/servetka_3.jpg',
        ],
        title: 'Серветки фібра.',
        pack: true,
        size: {
            size1: {
                s: '30X30',
                inPack: 20,
                packSize: 20, 
                salePack: 5,
                price: 12,
                salePrice: 10
            },
        }
    },
    {
        id: 18,
        category: 'Рушники',
        imgMain: 'img/rushniki/12/rushnik.jpg',
        img: [
            'img/rushniki/12/rushnik.jpg',
            'img/rushniki/12/rushnik_1.jpg',
            'img/rushniki/12/rushnik_2.jpg',
        ],
        title: 'Рушники лицьові фібра.',
        pack: true,
        size: {
            size1: {
                s: '50X90',
                inPack: 6,
                packSize: 6, 
                salePack: 5,
                price: 50,
                salePrice: 47
            },
        }
    },
     {
        id: 19,
        category: 'Покривала',
        imgMain: 'img/pokrivalo/2/kovdra.jpg',
        img: [
            'img/pokrivalo/2/kovdra.jpg',
            'img/pokrivalo/2/kovdra_1.jpg',
            'img/pokrivalo/2/kovdra_2.jpg',
            'img/pokrivalo/2/kovdra_3.jpg',
            'img/pokrivalo/2/kovdra_4.jpg',
            'img/pokrivalo/2/kovdra_5.jpg',
        ],
        title: 'Охолоджуюча шовкова ковдра "Холодок".',
        pack: true,
        size: {
            size1: {
                s: '150X200',
                inPack: 1,
                packSize: 1,
                salePack: 3,
                price: 850,
                salePrice: 740
            },
            size2: {
                s: '200X230',
                inPack: 1,
                packSize: 1,
                salePack: 3,
                price: 1200,
                salePrice: 980
            }
        }
    },
    {
        id: 20,
        category: 'Рушники',
        imgMain: 'img/rushniki/13/rushnik_1.jpg',
        img: [
            'img/rushniki/13/rushnik.webp',
            'img/rushniki/13/rushnik_1.jpg',
            'img/rushniki/13/rushnik_2.jpg',
            'img/rushniki/13/rushnik_3.jpg',
            'img/rushniki/13/rushnik_4.jpg',
            'img/rushniki/13/rushnik_5.jpg',
            'img/rushniki/13/rushnik_6.jpg',
            'img/rushniki/13/rushnik_7.jpg',
            'img/rushniki/13/rushnik_8.jpg',
            'img/rushniki/13/rushnik_9.jpg',
        ],
        title: 'Кухонні рушники фібра. "Фрукти і тістечка"',
        pack: true,
        size: {
            size1: {
                s: '35X70',
                inPack: 5,
                packSize: 5, 
                salePack: 10,
                price: 50,
                salePrice: 40
            },
        }
    },
    {
        id: 21,
        category: 'Рушники',
        imgMain: 'img/rushniki/14/rushnik.webp',
        img: [
        ],
        title: 'Рушники махрові. "Букет"',
        pack: true,
        size: {
            size1: {
                s: '35X70',
                inPack: 12,
                packSize: 12, 
                salePack: 5,
                price: 50,
                salePrice: 45
            },
            size2: {
                s: '50X90',
                inPack: 8,
                packSize: 8, 
                salePack: 3,
                price: 80,
                salePrice: 75
            },
            size1: {
                s: '70X140',
                inPack: 8,
                packSize: 8, 
                salePack: 3,
                price: 160,
                salePrice: 150
            },
        }
    },
    {
        id: 22,
        category: 'Пледи',
        imgMain: 'img/pledy/4/pled_mramor.jpg',
        img: [
            'img/pledy/4/pled_mramor_1.jpg',
            'img/pledy/4/pled_mramor_2.jpg',
            'img/pledy/4/pled_mramor_3.jpg',
            'img/pledy/4/pled_mramor_4.jpg',
            'img/pledy/4/pled_mramor_5.jpg',
            'img/pledy/4/pled_mramor_6.jpg',
            'img/pledy/4/pled_mramor_7.jpg',
            'img/pledy/4/pled_mramor_8.jpg',
            'img/pledy/4/pled_mramor_9.jpg',
        ],
        title: 'Плед-покривало «мрамор».',
        pack: true,
        size: {
            size1: {
                s: '200X230',
                inPack: 1,
                packSize: 1,
                salePack: 3,
                price: 670,
                salePrice: 550
            }
        }
    },
    {
        id: 23,
        category: 'Рушники',
        imgMain: 'img/rushniki/15/rushnik.webp',
        img: [
        ],
        title: 'Кухонні рушники фібра.',
        pack: true,
        size: {
            size1: {
                s: '25X50',
                inPack: 20,
                packSize: 20, 
                salePack: 5,
                price: 16,
                salePrice: 15
            },
        }
    },
    {
        id: 24,
        category: 'Пледи',
        imgMain: 'img/pledy/5/pled.jpg',
        img: [
            'img/pledy/5/pled_1.jpg',
            'img/pledy/5/pled_2.jpg',
            'img/pledy/5/pled_3.jpg',
            'img/pledy/5/pled_4.jpg',
            'img/pledy/5/pled_5.jpg',
            'img/pledy/5/pled_6.jpg',
            'img/pledy/5/pled_7.jpg',
        ],
        title: 'Плед покривало «кролік»',
        pack: true,
        size: {
            size1: {
                s: '200X220',
                inPack: 1,
                packSize: 1,
                salePack: 3,
                price: 670,
                salePrice: 550
            }
        }
    },
    {
        id: 25,
        category: 'Рушники',
        imgMain: 'img/rushniki/16/rushnik.webp',
        img: [
        ],
        title: 'Кухонні рушники фібра. "Авокадо"',
        pack: true,
        size: {
            size1: {
                s: '35X70',
                inPack: 12,
                packSize: 12, 
                salePack: 5,
                price: 50,
                salePrice: 45
            },
        }
    },
    {
        id: 26,
        category: 'Покривала',
        imgMain: 'img/pokrivalo/3/pokrivalo_kids.jpg',
        img: [
            'img/pokrivalo/3/pokrivalo_kids.jpg',
            'img/pokrivalo/3/pokrivalo_kids_1.jpg',
            'img/pokrivalo/3/pokrivalo_kids_2.jpg',
            'img/pokrivalo/3/pokrivalo_kids_3.jpg',
            'img/pokrivalo/3/pokrivalo_kids_4.jpg',
            'img/pokrivalo/3/pokrivalo_kids_5.jpg',
            'img/pokrivalo/3/pokrivalo_kids_6.jpg',
        ],
        title: "Покривало дитяче.",
        pack: true,
        size: {
            size1: {
                s: '120X150',
                inPack: 1,
                packSize: 1,
                salePack: 5,
                price: 590,
                salePrice: 450
            }
        }
    },
    {
        id: 27,
        category: 'Рушники',
        imgMain: 'img/rushniki/17/rushnik.jpg',
        img: [
            'img/rushniki/17/rushnik.jpg',
            'img/rushniki/17/rushnik_1.jpg',
        ],
        title: 'Рушники фібра.',
        pack: true,
        size: {
            size1: {
                s: '35X70',
                inPack: 12,
                packSize: 12, 
                salePack: 10,
                price: 45,
                salePrice: 40
            },
        }
    },
    {
        id: 28,
        category: 'Постільна білизна',
        imgMain: 'img/postil/4/postil_4.jpg',
        img: [
            'img/postil/4/postil.jpg',
            'img/postil/4/postil_1.jpg',
            'img/postil/4/postil_2.jpg',
            'img/postil/4/postil_3.jpg',
            'img/postil/4/postil_4.jpg',
            'img/postil/4/postil_5.jpg',
            'img/postil/4/postil_6.jpg',
            'img/postil/4/postil_7.jpg',
            'img/postil/4/postil_8.jpg',
        ],
        title: 'Постільна білизна "шарпей".',
        pack: true,
        size: {
            size1: {
                s: 'Підковдра 200 на 230. Простирадло 230 на 240. Наволочки 50 на 70 (2шт).',
                inPack: 1,
                packSize: 1,
                salePack: 3,
                price: 1650,
                salePrice: 1520
            }
        }
    },
    {
        id: 29,
        category: 'Рушники',
        imgMain: 'img/rushniki/18/rushnik.jpg',
        img: [
            'img/rushniki/18/rushnik.jpg',
            'img/rushniki/18/rushnik_1.jpg',
        ],
        title: 'Рушник фібра,який одним рухом перетворюється на халатик.',
        pack: false,
        size: {
            size1: {
                s: '70X140',
                inPack: 3,
                packSize: 1, 
                salePack: 10,
                price: 170,
                salePrice: 150
            },
        }
    },
    {
        id: 30,
        category: 'Пледи',
        imgMain: 'img/pledy/6/pled_kids.jpg',
        img: [
            'img/pledy/6/pled_kids.jpg',
            'img/pledy/6/pled_kids_1.jpg',
        ],
        title: 'Пледик дитячий.',
        pack: false,
        size: {
            size1: {
                s: '110X110',
                inPack: 5,
                packSize: 1, 
                salePack: 10,
                price: 200,
                salePrice: 180
            }
        }
    },
    {
        id: 31,
        category: 'Покривала',
        imgMain: 'img/pokrivalo/4/pokrivalo.jpg',
        img: [
            'img/pokrivalo/4/pokrivalo.jpg',
            'img/pokrivalo/4/pokrivalo_1.jpg',
        ],
        title: "Покривало муслін.",
        size: {
            size1: {
                s: '200X220',
                inPack: 3,
                packSize: 1, 
                salePack: 3,
                price: 820,
                salePrice: 750
            }
        }
    },
    {
        id: 32,
        category: 'Рушники',
        imgMain: 'img/rushniki/19/rushnik.webp',
        img: [
        ],
        title: 'Махрові рушники.',
        size: {
            size1: {
                s: '70X140',
                inPack: 6,
                packSize: 6, 
                salePack: 3,
                price: 170,
                salePrice: 160
            },
            size2: {
                s: '50X90',
                inPack: 6,
                packSize: 6, 
                salePack: 3,
                price: 85,
                salePrice: 80
            },
        }
    },
    {
        id: 33,
        category: 'Покривала',
        imgMain: 'img/pokrivalo/5/pokrivalo.jpg',
        img: [
            'img/pokrivalo/5/pokrivalo.jpg',
            'img/pokrivalo/5/pokrivalo_1.jpg',
        ],
        title: "Плед-покривало фібра однотонка, з гарним стриженим малюнком.",
        size: {
            size1: {
                s: '200X220',
                inPack: 6,
                packSize: 1,
                salePack: 10,
                price: 400,
                salePrice: 380
            }
        }
    },

]