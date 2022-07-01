// /**
//  * 日/夜间模式控制
//  */
// this.setDayNightControl = function () {
// 		let h = parseInt(new Date().getHours()),head = $('head'), cookieKey = 'cnblogs_config_isNight', exp  =  4 * 3600, daySwitch;

// 		switch (tools.getCookie(cookieKey)) {
// 				case 'day':
// 						daySwitch = 'daySwitch'; break;
// 				case 'night':
// 						daySwitch = ''; break;
// 				default:
// 						daySwitch = window.cnblogsConfig.switchDayNight.auto.enable ?
// 								(h >= window.cnblogsConfig.switchDayNight.auto.nightHour ? '' :
// 												(h >= window.cnblogsConfig.switchDayNight.auto.dayHour ? 'daySwitch' : '')
// 								) : 'daySwitch'; break;
// 		}

// 		let html = '<div id="dayNightSwitch" class="generalWrapper">' +
// 				'    <div class="onOff '+ daySwitch +'">' +
// 				'        <div class="star star1"></div>' +
// 				'        <div class="star star2"></div>' +
// 				'        <div class="star star3"></div>' +
// 				'        <div class="star star4"></div>' +
// 				'        <div class="star star5"></div>' +
// 				'        <div class="star sky"></div>' +
// 				'        <div class="sunMoon">' +
// 				'            <div class="crater crater1"></div>' +
// 				'            <div class="crater crater2"></div>' +
// 				'            <div class="crater crater3"></div>' +
// 				'            <div class="cloud part1"></div>' +
// 				'            <div class="cloud part2"></div>' +
// 				'        </div>' +
// 				'    </div>' +
// 				'</div>';
// 		$('body').prepend(html);

// 		if (!daySwitch) head.append('<link type="text/css" id="baseDarkCss" rel="stylesheet" href="'+getJsDelivrUrl('base.dark.css')+'">');

// 		$('#dayNightSwitch .onOff').click(function () {
// 				if ($(this).hasClass('daySwitch')) { // 夜间
// 						window.cnblogsConfig.hook.dayNightControl(bndongJs, 'night');
// 						tools.setCookie(cookieKey, 'night', exp);
// 						$(this).removeClass('daySwitch');
// 						head.append('<link type="text/css" id="baseDarkCss" rel="stylesheet" href="'+getJsDelivrUrl('base.dark.css')+'">');
// 				} else { // 日间
// 						window.cnblogsConfig.hook.dayNightControl(bndongJs, 'day');
// 						tools.setCookie(cookieKey, 'day', exp);
// 						$(this).addClass('daySwitch');
// 						$('head link#baseDarkCss').remove();
// 				}
// 		});
// };