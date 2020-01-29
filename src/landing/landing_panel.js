/**
 * @file Landing page logic
 * @copyright Digital Living Software Corp. 2014-2015
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipLandingPanel', ['ngMaterial']);

    thisModule.directive('pipLandingPanel',
        function () {
            return {
                restrict: 'E',
                replace: true,
                scope: true,
                templateUrl: 'landing/landing_panel.html',
                controller: 'pipLandingPanelController'
            };
        }
    );

    function declareIncidentsResources(pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            en: 'English',
            ru: 'Russian',
            MAIN_TITLE: 'POSITRON ®',
            MAIN_TITLE1: 'Production safety and control made easy!',
            DEMO_WORKSITE: 'Demo workorganization',
            SIGN_UP_NEW_WORKSITE: 'Sign up for new workorganization',
            LOGIN_TO_YOUR_WORSITE: 'Login to your workorganization',
            GET_FULL: 'Get Positron Business Proposal [PDF]',
            WRITE_US: 'Contact us',
            MAIN_SUBHEADER: 'iQuipsys Inc. presents Positron - personnel and equipment tracking system, developed using latest IoT technologies specifically for production organizations. Positron combines real time monitoring, recording and playback functions with rules and alarms system for both outdoor and indoor use. It is easy to buy, easy to deploy, easy to use and raises the bar of production automation, control and safety to the next level.',

            GOALS_HEADER_TEXT: 'What will you get with Positron®?',
            GOALS_TITLE1: 'More control',
            GOALS_CONTENT1_1: 'Visual control of the whole organization in real time, both indoors and out in the open.',
            GOALS_CONTENT1_2: 'Alarms in case of incorrect behavior',
            GOALS_CONTENT1_3: 'Instant search for people, machinery, objects and groups',
            GOALS_CONTENT1_4: 'Automatically record, document, analyze and report on any production data ',
            GOALS_CONTENT1_5: 'Control queues, material movement, equipment availability and utilization, etc.',
            GOALS_CONTENT1_6: 'Monitor the work done by contractors, control visitors movement on your organization',

            GOALS_TITLE2: 'More safety',
            GOALS_CONTENT2_1: 'Identification and alarming of personnel and machinery in dangerous zones (ex. blast zones, warehouses of hazardous materials).',
            GOALS_CONTENT2_2: 'Automatically detect speeding, dangerous driving, emergency brakes, sharp turns, collisions, and other hazards.',
            GOALS_CONTENT2_3: 'Gather and analyze statistics of personnel’s behavior and prevent incidents.',
            GOALS_CONTENT2_4: 'Retrospective playback on the map of event to see what really happened.',
            GOALS_CONTENT2_5: 'Instantly get the last know location of your personnel and machinery.',
            GOALS_CONTENT2_6: 'Alarm workers, groups or all personnel about dangerous conditions.',

            GOALS_TITLE3: 'More production',
            GOALS_CONTENT3_1: 'Automatic alerts of long inactivity and prolonged breaks.',
            GOALS_CONTENT3_2: 'Increase equipment availability and lifespan by detecting improper operation: speeding, sharp turns, etc.',
            GOALS_CONTENT3_3: 'Monitor operators performance: slower motion, longer load and clean up times, etc. Compare performance of different operators and groups.',
            GOALS_CONTENT3_4: 'Ensure the jobs are done right: correct routes, right working patterns working in loading and unloading zones, etc.',
            GOALS_CONTENT3_5: 'Correct payroll and awards, based on the real amount of time spent in various zones, and based on the types of jobs that were completed. ',

            INSTRUMENTS_HEADER_TEXT: 'Positron® main tools:',
            INSTRUMENTS_SECTION_TITLE: 'iQuipsys Positron® is a general purpose real time monitoring and recording system, capable of tracking of all positions, speed, immobility, zone entries and exits, and other movement parameters of all people and equipment at your work organization, both indoors and out in the open.',
            INSTRUMENTS_SECTION_TITLE_1: ' ',

            INSTRUMENTS_TITLE1: 'Real time monitoring and control',
            INSTRUMENTS_CONTENT1: 'See all your equipment and people’s every move and turn, as well as speeding and idling. If something looks bad, you can send a warning signal to the violator or get immediately in touch with other personnel to correct the situation. Keep track of the work process from any place in the world with internet access, from any mobile device.',
            INSTRUMENTS_TITLE2: 'Zones, rules, and notifications',
            INSTRUMENTS_CONTENT2: 'Control your production process in real-time, without having to constantly monitoring the map. Create a geo-zone on the map of any shape and size, and track objects’ time of entry, exit, and time spent inside the zone. Configure rules and triggers, as well as how the system should react and who should be notified.',
            INSTRUMENTS_TITLE3: 'Documenting every move',
            INSTRUMENTS_CONTENT3: 'Positron® constantly records all objects movements and can easily play them back on the map. There are two ways of doing this in Positron: Dot traces can be used to see the static picture of all routes of selected objects in given time, while Retrospective playback can show what happened in the past in motion.',
            INSTRUMENTS_TITLE4: 'Data analysis and reporting',
            INSTRUMENTS_CONTENT4: 'Positron automatically collects its data, so human errors are minimized. Clear and informative reports and graphs can be created on various parameters: speed, distance traveled, immobility time, incident frequency, etc. Positron also allows for quick data import and export to other systems, so you can use your data the way you like.',
            INSTRUMENTS_TITLE5: 'Safety and Emergency response',
            INSTRUMENTS_CONTENT5: 'Positron helps to enforce safety and reduce the accident risks on your workorganization. Recording and analyzing accidents and near misses, sharp turns and emergency breaks, speeding and other incidents allows for immediate reaction and application of correct measures for preventing unsafe behavior in the future. It can be of big help in handling emergencies by providing real time warning to people in danger zones, indicate the last known location of all people and equipment, coordinate rescue equipment actions, etc. Emergency plans automation can help dispatcher handle critical situations in a calm and structured manner. ',

            BUY_HEADER_TEXT: 'YOU CAN AFFORD ALL ',
            BUY_HEADER_TEXT1: 'THIS RIGHT NOW!',
            BUY_TEXT: 'Flexible “cloud” licensing, no contract “pay as you go” plans, and low hardware costs allows for any work organization, big or small to use our system.',

            STEPS_HEADER_TEXT: 'How does it work?',

            STEP_TITLE1: 'Communication: use GSM (mobile internet), if available, or a special IoT LoRaWAN router',
            STEP_SUBTITLE1: 'An IoT base station is installed and connected to the server:',
            STEP_CONTENT1_1: "The base station is simple to install and configure",
            STEP_CONTENT1_2: "One station covers area up to 15 km in radius.",
            STEP_CONTENT1_3: "No radio licensing required",
            STEP_CONTENT1_4: "Choice of cloud based or local server",
            STEP_CONTENT1_5: "Access to the system through the organization’s network.",
            STEP_CONTENT1_6: "Integration with other systems",

            STEP_TITLE2: 'Tracker devices',
            STEP_CONTENT2_1: "For people tracking, we use battery powered, long lasting personnel trackers. They can be carried in the pocket or on the belt. Most models are equipped with buttons for sending signals to the server, as well as buzzers for receiving warning signals from Positron.",
            STEP_CONTENT2_2: "On vehicles, production equipment and other objects that need to be tracked we install special trackers powered by the vehicle’s electrical system as well as the device internal battery. These trackers can be both mounted stationary on a specific vehicle, or with a portable mount, be temporary installed on a visitor’s or contractor’s vehicles.",

            STEP_TITLE3: 'Central server and',
            STEP_TITLE3_1: ' web application',
            STEP_CONTENT3_1: "Movement data, sent from the field trackers, is received and processed by the central server. ",
            STEP_CONTENT3_2: "Authorized users can access Positron through common web browsers, from any computer or mobile device, from any location with internet access. They can see all objects, people and equipment, associated with the field devices. They can also register to receive email or SMS notifications about various events and incidents in the system.",

            DONE_TITLE: 'All Done!',
            DONE_SUBTITLE: 'Now you can:',
            DONE_CONTENT1: "Visually control the situation in any part of the organization. ",
            DONE_CONTENT2: "Setup rules and get notified when they are violated.",
            DONE_CONTENT3: "Signal personnel in case of danger or inactivity ",
            DONE_CONTENT4: "Collect precise data for analysis and future improvement.",

            GUARANTEE_TITLE: 'WE STAND BEHIND ALL OUR SYSTEMS!',
            GUARANTEE_SUBTITLE: 'When the standard warranty is up, we can continue servicing your system and maintain full technical support by signing a maintenance agreement. ',

            CONTACT_TITLE: 'Contact us:',
            CONTACT_NAME: 'Name',
            CONTACT_EMAIL: 'Email',
            CONTACT_MESSAGE: 'Message',
            CONTACT_SENT: 'Send',
            CONTACT_SUCCESS: 'Thank you for your interest in our company. One of our representatives will get in touch with you shortly.',
            
            FOOTER_TITLE: 'Contacts',
            FOOTER_ADDRESS: 'iQuipsys Inc., 780 W. Lost Creek Place, Tucson, AZ 85737 USA',           
            FOOTER_PHONE: 'Phone: +79852599722',
        });
        pipTranslateProvider.translations('ru', {
            en: 'English',
            ru: 'Russian',
            MAIN_TITLE: 'ПОЗИТРОН ®',
            MAIN_TITLE1: 'Система контроля и безопасности производства',
            DEMO_WORKSITE: 'Демо рабочая площадка',
            SIGN_UP_NEW_WORKSITE: 'РЕгистрация площадки',
            LOGIN_TO_YOUR_WORSITE: 'Вход на свою площадку',
            GET_FULL: 'Скачать коммерческое предложение [PDF]',
            WRITE_US: 'Напишите нам',
            MAIN_SUBHEADER: "Компания Айквипсис представляет Позитрон - систему позиционирования персонала и техники, разработанную на основе технологии Интернета Вещей специально для производственных площадок. Система полностью удовлетворяет требованиям Ростехнадзора, проста во внедрении, не требует капитальных затрат, и значительно повышает уровень автоматизации, безопасности и контроля на предприятии.",

            GOALS_HEADER_TEXT: 'Что дает система предприятию?',
            GOALS_TITLE1: 'Контроль',
            GOALS_CONTENT1_1: 'Визуальный контроль всей площадки в режиме реального времени, как в помещении, так и вне его.',
            GOALS_CONTENT1_2: "Сигнализация в случае нештатных событий",
            GOALS_CONTENT1_3: "Мгновенный поиск людей, машин и др. объектов ускоряет управление",
            GOALS_CONTENT1_4: 'Автоматическая запись, документирование, анализ и оповещение о любых производственных данных',
            GOALS_CONTENT1_5: 'Контроль очередей, перемещения материалов, доступность и использование оборудования и т. д.',
            GOALS_CONTENT1_6: "Наблюдение за работой подрядчиков, контроль передвижения посетителей на вашей площадке.",

            GOALS_TITLE2: 'Безопасность',
            GOALS_CONTENT2_1: "Своевременное обнаружение людей и техники в опасных зонах (напр. зона взрыва, склады ГСМ и ВВ) и их оповещение",
            GOALS_CONTENT2_2: "Фиксация превышении скорости, аварийных ситуаций, экстренного торможения, разворотов, ударов и других внештатных происшествий",
            GOALS_CONTENT2_3: "Сбор статистики об опасных действиях персонала, предотвращение происшествий",
            GOALS_CONTENT2_4: "«Разбор полетов» после события, с возможностью «проигрывания» событий на карте",
            GOALS_CONTENT2_5: "Фиксация последнего известного местоположения людей и машин",
            GOALS_CONTENT2_6: "Оповещения сотрудников об опасности и общей тревоге",

            GOALS_TITLE3: 'Производительность',
            GOALS_CONTENT3_1: "Автоматическая сигнализация бездействия, длинных перекуров, затянутой пересмены и др. простоев",
            GOALS_CONTENT3_2: "Увеличение КТГ и срока службы оборудования за счет снижения неправильного использования: резкое вождение, скоростной режим, крутые виражи, удары и т.д.",
            GOALS_CONTENT3_3: "Контроль за интенсивностью работы: низкая скорость, затянутое время погрузки, зачистки и т.п.",
            GOALS_CONTENT3_4: "Контроль правильности работы: маршрутов движения, зарядки скважин, мест разгрузки и других регламентов",
            GOALS_CONTENT3_5: "Возможность сдельной оплаты труда, по реально проведённым работам, с различными тарифами по зонам и типам работ",


            INSTRUMENTS_HEADER_TEXT: 'Пять инструментов системы ПОЗИТРОН®',
            INSTRUMENTS_SECTION_TITLE: 'ПОЗИТРОН® - это система, позволяющая фиксировать в реальном времени и документировать для последующей обработки все позиции и передвижения на рабочей площадке предприятия, на открытом воздухе и в помещениях.',
            INSTRUMENTS_SECTION_TITLE_1: 'Мы оснащаем мобильными устройствами (трекерами) все интересующие нас объекты и обеспечиваем с ними связь (даже в местах, где нет никакой другой связи) для передачи данных на центральный сервер.',

            INSTRUMENTS_TITLE1: 'Мониторинг и контроль в реальном времени',
            INSTRUMENTS_CONTENT1: 'Следите за каждым движением всего своего оборудования и каждого сотрудника. Наблюдайте за скоростью, задержками и простоями. Если что-то происходит не так, вы можете отправить сигнал нарушителю или немедленно связаться с другим персоналом, чтобы исправить ситуацию. Следите за процессом работы из любого места в мире с доступом в Интернет, с любого мобильного устройства.',
            INSTRUMENTS_TITLE2: 'Зоны, правила и сообщения',
            INSTRUMENTS_CONTENT2: 'Правила дают возможность контроля производственного процесса в реальном времени, без постоянного наблюдения за картой. Создаем на карте гео-зоны любой формы, либо зоны вокруг подвижного оборудования. Регистрируем время входа, выхода и пребывания объектов в них. Настраиваем правила и уровни их срабатывания, а также способы регистрации событий и оповещения о них.',
            INSTRUMENTS_TITLE3: 'Документирование движения: Маршруты следования и Ретроспектива',
            INSTRUMENTS_CONTENT3: 'Позитрон постоянно ведет запись всех перемещений и событий и может легко показать на карте, воспроизвести любой момент времени в прошлом. Для этого у нас есть два инструмента: Маршруты Следования показывают статическую картину следов выбранных объектов за заданный интервал времени, а Ретроспектива позволяет посмотреть картину прошлых событий в движении.',
            INSTRUMENTS_TITLE4: 'Анализ производственных параметров и происшествий',
            INSTRUMENTS_CONTENT4: 'Автоматический сбор данных исключает ошибки ручного ввода. Сразу видны простои, пониженная интенсивность работы, превышение скорости. Четко видно пройденное расстояние, частота и время пребывания в различных зонах, количество рейсов. Гибкий экспорт и импорт данных Позитрона в другие системы позволяет использовать ваши данные максимально так, как вам нужно.',
            INSTRUMENTS_TITLE5: 'Повышение безопасности и снижение риска несчастных случаев',
            INSTRUMENTS_CONTENT5: 'Своевременное обнаружение людей и техники в опасных зонах и их оповещение, сбор статистики об опасных действиях персонала, регистрация аварийных ситуаций, экстренного торможения, крутых виражей, ударов и т.п способствует предупреждению происшествий. Посылка сигнала бедствия нажатием кнопки на персональном трекере, сигнализация падений и неподвижности, фиксация последнего известного местоположения людей и машин, дает дополнительные инструменты диспетчеру в случае аварий и чрезвычайных происшествий.',

            BUY_HEADER_TEXT: 'ВЫ МОЖЕТЕ СЕБЕ ЭТО ПОЗВОЛИТЬ',
            BUY_HEADER_TEXT1: 'ПРЯМО СЕГОДНЯ!',
            BUY_TEXT: 'Гибкие схемы лицензирования, не требующие капитальных затрат, безконтрактная абонентская система оплаты, низкая стоимость оборудования позволят предприятию любого размера использовать нашу систему',

            STEPS_HEADER_TEXT: 'Как это работает?',

            STEP_TITLE1: 'Связь: Если есть возможность, используйте мобильный интернет (GSM), если нет – специальную связь IoT LoRaWAN',
            STEP_SUBTITLE1: 'Устанавливается станция радиосети «интернета вещей» и подключается к серверу:',
            STEP_CONTENT1_1: "Станция проста в установке и настройке",
            STEP_CONTENT1_2: "Покрывает площадь радиусом до 15км",
            STEP_CONTENT1_3: "Технология не требует лицензирования частот",
            STEP_CONTENT1_4: "Сервер «в облаке» или локальный",
            STEP_CONTENT1_5: "Доступ в систему из сети предприятия",
            STEP_CONTENT1_6: "Взаимодействие с другими системами",

            STEP_TITLE2: 'Приборы позиционирования',
            STEP_CONTENT2_1: "Для персонала мы используем портативные трекеры, работающие от батареи с длительным сроком службы. Их можно носить в кармане или на поясе. Большинство моделей оснащены кнопками для отправки сигналов на сервер, а также зуммерами для получения предупреждающих сигналов от Позитрона.",
            STEP_CONTENT2_2: "На транспортных средствах, рабочей технике и других мобильных объектах, за которыми необходимо наблюдение, устанавливаются специальные трекеры, работающие как от батареи, так и от бортовой сети машины. Крепление таких приборов может быть как стационарным, так и портативным, позволяющим обеспечить контроль за посетителями и подрядчиками.",

            STEP_TITLE3: 'Центральный сервер ',
            STEP_TITLE3_1: ' и веб-приложения',
            STEP_CONTENT3_1: "Данные с полевых трекеров передаются по сети связи и обрабатываются центральным сервером.",
            STEP_CONTENT3_2: "Авторизованные пользователи получают доступ к своей рабочей площадке с любого компьютера или мобильного устройства, из любого места, где есть доступ в интернет. Они могут видеть на карте все объекты, персонал и оборудование, оснащенные полевыми устройствами. Они также могут менять настройки, создавать правила и получать уведомления по электронной почте и SMS о различных событиях и происшествиях в системе.",

            DONE_TITLE: 'Все готово!',
            DONE_SUBTITLE: 'Теперь мы можем:',
            DONE_CONTENT1: "Визуально контролировать ситуацию в любой точке предприятия",
            DONE_CONTENT2: "Настроить правила и получать уведомления о нарушениях",
            DONE_CONTENT3: "Сигнализировать об опасности и неподвижности",
            DONE_CONTENT4: "Собирать точные данные для анализа и коррекции в будущем.",

            GUARANTEE_TITLE: 'Мы гарантируем качество наших систем!',
            GUARANTEE_SUBTITLE: 'После гарантийного срока, по желанию заказчика, мы заключаем договор на обслуживание и продолжаем полную техническую поддержку системы.',

            CONTACT_TITLE: 'Свяжитесь с нами',
            CONTACT_NAME: 'Ваше имя',
            CONTACT_EMAIL: 'Почта',
            CONTACT_MESSAGE: 'Сообщение',
            CONTACT_SENT: 'Отправить',
            CONTACT_SUCCESS: 'Спасибо за Ваш интерес к нашей компании. Один из наших специалистов свяжется с Вами в ближайшее время',

            FOOTER_TITLE: 'Контакты',
            FOOTER_ADDRESS: 'Айквипсис Евразия г. Москва, 123154 Пр. Маршала Жукова, д.51, 3 этаж, офис 12',           
            FOOTER_PHONE: 'Тел.: +7 985 259 9722',

        });
    }

    thisModule.config(declareIncidentsResources);

    thisModule.controller('pipLandingPanelController',
        function ($scope, $http, $state, $rootScope, $mdMedia, $window, pipTranslate) {

            $scope.showContact = true;
            $scope.showContactThanks = false;
            $scope.contactUs = contactUs;
            $scope.goContact = goContact;
            $scope.changeLn = changeLn;

            $scope.languages = ['en', 'ru'];
            $scope.ln = $scope.ln ? $scope.ln : $window.localStorage.getItem('language') || 'ru';

            // pipTranslate.language = $scope.ln;
            $scope.changeLn($scope.ln);


            $scope.data = {};
            //$scope.goCareers = goCareers;
            //$scope.goBlog = goBlog;

            $scope.instruments = [
                {
                    icon: 'images/icons/rules.svg',
                    title: 'INSTRUMENTS_TITLE1',
                    content: 'INSTRUMENTS_CONTENT1'
                },
                {
                    icon: 'images/icons/monitoring.svg',
                    title: 'INSTRUMENTS_TITLE2',
                    content: 'INSTRUMENTS_CONTENT2'

                }, {
                    icon: 'images/icons/retrospective.svg',
                    title: 'INSTRUMENTS_TITLE3',
                    content: 'INSTRUMENTS_CONTENT3'

                },
                {
                    icon: 'images/icons/analisys.svg',
                    title: 'INSTRUMENTS_TITLE4',
                    content: 'INSTRUMENTS_CONTENT4'

                },
                {
                    icon: 'images/icons/CH-P.svg',
                    title: 'INSTRUMENTS_TITLE5',
                    content: 'INSTRUMENTS_CONTENT5'

                },

            ];


            $scope.goals = [
                {
                    icon: 'images/icons/control.svg',
                    title: 'GOALS_TITLE1',
                    content: [
                        'GOALS_CONTENT1_1',
                        'GOALS_CONTENT1_2',
                        'GOALS_CONTENT1_3',
                        'GOALS_CONTENT1_4',
                        'GOALS_CONTENT1_5',
                        'GOALS_CONTENT1_6'
                    ]
                },
                {
                    icon: 'images/icons/safeness.svg',
                    title: 'GOALS_TITLE2',
                    content: [
                        'GOALS_CONTENT2_1',
                        'GOALS_CONTENT2_2',
                        'GOALS_CONTENT2_3',
                        'GOALS_CONTENT2_4',
                        'GOALS_CONTENT2_5',
                        'GOALS_CONTENT2_6',

                    ]

                },
                {
                    icon: 'images/icons/performance.svg',
                    title: 'GOALS_TITLE3',
                    content: [
                        'GOALS_CONTENT3_1',
                        'GOALS_CONTENT3_2',
                        'GOALS_CONTENT3_3',
                        'GOALS_CONTENT3_4',
                        'GOALS_CONTENT3_5',
                    ]

                }
            ]

            $scope.step1 = [
                'STEP_CONTENT1_1',
                'STEP_CONTENT1_2',
                'STEP_CONTENT1_3',
                'STEP_CONTENT1_4',
                'STEP_CONTENT1_5',
                'STEP_CONTENT1_6',
            ];

            $scope.step2 = [
                'STEP_CONTENT2_1',
                'STEP_CONTENT2_2'
            ];
            $scope.step3 = [
                'STEP_CONTENT3_1',
                'STEP_CONTENT3_2'
            ];

            $scope.doneText = [
                'DONE_CONTENT1',
                'DONE_CONTENT2',
                'DONE_CONTENT3',
                'DONE_CONTENT4'
            ]

            $scope.contact = $state.params.contact;

            if ($state.params.contact) {
                goContact()
            }


            function scrollTo(parentElement, childElement, animationDuration) {
                if (!parentElement || !childElement) return;
                if (animationDuration == undefined) animationDuration = 300;

                setTimeout(function () {
                    if (!$(childElement).position()) return;
                    var modDiff = Math.abs($(parentElement).scrollTop() - $(childElement).position().top);
                    if (modDiff < 20) return;
                    var scrollTo = $(parentElement).scrollTop() + ($(childElement).position().top - 20);
                    if (animationDuration > 0)
                        $(parentElement).animate({
                            scrollTop: scrollTo + 'px'
                        }, animationDuration);
                }, 100);
            };

            function goContact() {
                setTimeout(function () {
                    scrollTo('#input-name');
                    var input = $('#input-name').focus();
                }, 250);

            }

            function changeLn(language) {
                $scope.ln = language;
                pipTranslate.language = $scope.ln;
                // this.$timeout(() => {
                pipTranslate.use($scope.ln);

            }

            function contactUs() {


                var req = {
                    method: 'POST',
                    url: 'http://api.positron.stage.iquipsys.net:30001/api/v1/email',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        to: "info@iquipsys.com",
                        subject: $scope.data.name,
                        text: $scope.data.email + ", " + $scope.data.message
                    }
                };
                console.log(req);

                /*var req = {
                    method: 'POST',
                    url: 'http://api.positron.stage.iquipsys.net:30001/api/v1/feedbacks',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: {
                        "sender": {
                            id: "38a2111099bd41f3b09e8d656b0bb427",
                            name: "Kate Negrienko"
                        },
                        "category": "Feature",
                        "title": $scope.data.email,
                        "content": "name:" + $scope.data.name + ",message" + $scope.data.message
                    }
                };*/
                $http(req).then(
                    function () {
                        $scope.showContact = false;
                        $scope.showContactThanks = true;


                    },
                    function () {
                        // TODO
                    });




            }

        }
    );

})();