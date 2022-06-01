(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    '00et': function (e, t, a) {},
    '9AbI': function (e, t, a) {
      var n = a('mp5j');
      e.exports = (n.default || n).template({
        1: function (e, t, a, n, r) {
          var o = e.lambda,
            i = e.escapeExpression,
            s =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="five-days-weather__oneday" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">\r\n    <p  class="five-days-weather__oneday-week" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">' +
            i(o(null != t ? s(t, 'day') : t, t)) +
            '</p>\r\n    <p  class="five-days-weather__oneday-date" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            ' ' +
            i(o(null != t ? s(t, 'month') : t, t)) +
            '</p>\r\n    <div  class="five-days-weather__oneday-sky" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '"><img   data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '" src="http://openweathermap.org/img/wn/' +
            i(o(null != t ? s(t, 'icon') : t, t)) +
            '@2x.png"></div>\r\n    <div class="five-days-weather__oneday-temperature" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">\r\n        <div class="five-days-weather__oneday-temperature-min" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">\r\n            <p class="five-days-weather__oneday-temperature-min--text" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">min</p>\r\n            <p class="five-days-weather__oneday-temperature-min--temp" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">' +
            i(o(null != t ? s(t, 'temp_min') : t, t)) +
            '&#176</p>\r\n        </div>\r\n        <div class="five-days-weather__oneday-temperature-max" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">\r\n            <p class="five-days-weather__oneday-temperature-max--text" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">max</p>\r\n            <p class="five-days-weather__oneday-temperature-max--temp" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">' +
            i(o(null != t ? s(t, 'temp_max') : t, t)) +
            '&#176</p>\r\n        </div>\r\n    </div>\r\n    <button class="five-days-weather__oneday-moreInfo-button" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">more info</button>\r\n</div>\r\n'
          );
        },
        compiler: [8, '>= 4.3.0'],
        main: function (e, t, a, n, r) {
          var o;
          return null !=
            (o = (
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              }
            )(a, 'each').call(null != t ? t : e.nullContext || {}, t, {
              name: 'each',
              hash: {},
              fn: e.program(1, r, 0),
              inverse: e.noop,
              data: r,
              loc: {
                start: { line: 1, column: 0 },
                end: { line: 18, column: 9 },
              },
            }))
            ? o
            : '';
        },
        useData: !0,
      });
    },
    JXZ6: function (e, t, a) {
      var n = a('mp5j');
      e.exports = (n.default || n).template({
        1: function (e, t, a, n, r) {
          var o = e.lambda,
            i = e.escapeExpression,
            s =
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              };
          return (
            '<div class="more-info-card" data-day="' +
            i(o(null != t ? s(t, 'date') : t, t)) +
            '">\r\n    <p class="more-info-card__time">' +
            i(o(null != t ? s(t, 'timeDt') : t, t)) +
            '</p>\r\n    <div class="more-info-card__sky"><img src="http://openweathermap.org/img/wn/' +
            i(o(null != t ? s(t, 'icon') : t, t)) +
            '@2x.png"></div>\r\n    <p class="more-info-card__temperature">' +
            i(o(null != t ? s(t, 'temp') : t, t)) +
            '&#176</p>\r\n    <div class="more-info-card__details">\r\n        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAMAAAC+oj0CAAAAAXNSR0IB2cksfwAAASBQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Q+EZnwAAAGB0Uk5TAARcaWUdA3gXQIomB1JqLIdhHF4zRhqFKFhXLl0hMXYeVHcVH3VvCU04bTRRcAZabBYrhj9JIBE+CwhrYlVjAQUZDWdMPGQbD39ZUxNBc087VmZ7GF81JXQUW3J5Q4IK4T9MmAAAARtJREFUeJxdT2lbgmAQHAS5KgpKSpO8FS9KM0ugwCu7zMzu8///i3pfNHyaDzuz++zO7gJLYCIsy0XxD7wQiYqSvDJPV+e8ppC4vqFqNN3cohSTdcpabHuHcDyBXSCpGAu3vRSJ6QyyuXxhaUsxiCWznK+EVU1AtaYm65a+j4OEnmtQNA9bkI7K7WPxRO7YcdZRKNzghNPIWVKyfu+2LcYDvMDJ7zKhrddrlxbaz7j9ARFD95zrj+bVi8srzWArPJC9vglmANuUx0TeToBJDeLd9F7tQZy5VdrRlVt46PuzR/NJ51EcLDY8v0xReX1L0+R96WfBaNvjoO2jEZY5CWjWeSI/vzSfofCHQgewzG/a0io4LHmZdVKjv7kf/2chULzkz3cAAAAASUVORK5CYII="><span>' +
            i(o(null != t ? s(t, 'pressure') : t, t)) +
            ' mm</span>\r\n    </div>\r\n    <div class="more-info-card__details">\r\n        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAMAAABh7EcdAAAAAXNSR0IB2cksfwAAAPBQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5dXC4QAAAFB0Uk5TAFsjLYVdAXMFTj5KSwtuDXIJTE9BZxJmAkNWWjhtGA9oA0JRRghiVEAwXDQrUjwEihM2Kk1HVVM7H3EiMmB1PShjIRlFLxp5HllrJBEXWCztZj+HAAAAvElEQVR4nEWO1xaCQAxEBwt2sbuKBbsiWFGwF+z1///GZUHNQyY3yZwEYMG58A+3x8v/gPf5A8EfhcKIRCMOCLE4kEg6xKWs7bTAIJMlluTyjMQCE1Is0VyWKrahWqOpnnPsxOtHo1n+Hmq10ZGBbh0CNSsy1B760cGQG9GhCm4MXpuoU2t1At2gMtOV+QLQsVzR19YZY7DBdgeS3sNUYB4IpCNwOl/sA1fm3d60++PZbcp2s6GJ+evrTasP8SMSDC+Q938AAAAASUVORK5CYII="><span>' +
            i(o(null != t ? s(t, 'humidity') : t, t)) +
            '%</span>\r\n    </div>\r\n    <div class="more-info-card__details">\r\n        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAAAXNSR0IB2cksfwAAAO1QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////bAyRTwAAAE90Uk5TAB9ugHcwKopfLkxKb3t2RQFOKw9bVzVHfQgYDEYNeB2EL1VTaWdmeYchUEtdXEQKiEFST2GDbQJacnBkPzQzZXp8bAQkcRYcAyxWJYJ1f4MzuKUAAADRSURBVHicdZDnEoJADIRjjQVUwILYC4qKvffesLz/4wh3Oiri9yObyc5tMgdAsdkdThf84kaP14d+o3UxbCD4moeQ0yuPAkAYI9GYyMapIWHCEDYISUwZnZimRjxDJMsD5ujA8bkoj5DBZ89BoSgTSnJZqYDAP40q1NQwoa42mu/HiZbF6WQbA+1O1wTX7fUHQxiN7WYm09mfIPoZ88U386hEjKXIfrNaK2rIOkRqbf7Eb5E3j3Z7IkzHbBzwqNcTnn9SNLykjgpjka9db3dZ1wdFoxkq8C4QFAAAAABJRU5ErkJggg=="><span>' +
            i(o(null != t ? s(t, 'speed') : t, t)) +
            ' m/s</span>\r\n    </div>\r\n</div>\r\n'
          );
        },
        compiler: [8, '>= 4.3.0'],
        main: function (e, t, a, n, r) {
          var o;
          return null !=
            (o = (
              e.lookupProperty ||
              function (e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
              }
            )(a, 'each').call(null != t ? t : e.nullContext || {}, t, {
              name: 'each',
              hash: {},
              fn: e.program(1, r, 0),
              inverse: e.noop,
              data: r,
              loc: {
                start: { line: 1, column: 0 },
                end: { line: 16, column: 9 },
              },
            }))
            ? o
            : '';
        },
        useData: !0,
      });
    },
    QfWi: function (e, t, a) {
      'use strict';
      a.r(t);
      a('00et'), a('FkYI'), a('bzha'), a('wcNg'), a('JBxO'), a('FdtR');
      var n = a('czhI'),
        r = a.n(n);
      const o = {
        bodyContainer: document.querySelector('body'),
        searchForm: document.querySelector('.search'),
        searchInput: document.querySelector('.search-container-input'),
        addStarCityButton: document.querySelector('.search-container-star'),
        searchStarContainer: document.querySelector('.search-star'),
        nextBtn: document.querySelector('.nextBtn'),
        prevBtn: document.querySelector('.prevBtn'),
        btnLocation: document.querySelector('.search-container-geolocation'),
        todayDayButton: document.querySelector('.today-button__today'),
        fiveDayButton: document.querySelector('.today-button__five-day'),
        todayWeather: document.querySelector('.today-weather'),
        todayDate: document.querySelector('.today-date'),
        todayQuote: document.querySelector('.today-quote'),
        todayButtonContainer: document.querySelector('.today-button'),
        fiveDaysContainer: document.querySelector('.five-days'),
        quoteText: document.querySelector('.today-quote__text'),
        quoteOwner: document.querySelector('.today-quote__owner'),
        todayWeatherCity: document.querySelector('.today-weather__city'),
        todayWeatherSky: document.querySelector('.today-weather__sky img'),
        todayWeatherTemperatureCurrent: document.querySelector(
          '.today-weather__temperature-current',
        ),
        todayWeatherTemperatureDayMinTemp: document.querySelector(
          '.today-weather__temperature-day-min--temp',
        ),
        todayWeatherTemperatureDayMaxTemp: document.querySelector(
          '.today-weather__temperature-day-max--temp',
        ),
        todayDateCurrentDay: document.querySelector(
          '.today-date__current-day-st',
        ),
        todayDateCurrentDaySt: document.querySelector(
          '.today-date__current-day-span',
        ),
        todayDateCurrentWeek: document.querySelector(
          '.today-date__current-day-week',
        ),
        todayDateCurrentMonth: document.querySelector(
          '.today-date__current-month-now',
        ),
        todayDateCurrentTime: document.querySelector(
          '.today-date__current-month-time',
        ),
        todayDateSunset: document.querySelector('.today-date__sun-sunset span'),
        todayDateSunrise: document.querySelector(
          '.today-date__sun-sunrise span',
        ),
        fiveDaysWeather: document.querySelector('.five-days-weather'),
        fiveDaysCity: document.querySelector('.five-days-city'),
        prevBtnFiveDays: document.querySelector('.five-days-button__prev'),
        nextBtnFiveDays: document.querySelector('.five-days-button__next'),
        moreInfo: document.querySelector('.more-info'),
        diagram: document.querySelector('.diagram'),
        diagramButton: document.querySelector('.diagram-button'),
        diagramContainer: document.querySelector('.diagram-container'),
        diagramButtonText: document.querySelector('.diagram-button__text'),
        diagramButtonImg: document.querySelector('.diagram-button__img'),
        spinner: document.querySelector('#spinner'),
      };
      function i(e) {
        let t = 0;
        setInterval(() => {
          t < 49 &&
            ((t += 1),
            e[t].text.length < 150 &&
              ((o.quoteText.textContent = e[t].text),
              (o.quoteOwner.textContent = e[t].author)));
        }, 5e3);
      }
      var s = a('QJ3N');
      function d(e, t, a, n, r, o, i) {
        try {
          var s = e[o](i),
            d = s.value;
        } catch (e) {
          return void a(e);
        }
        s.done ? t(d) : Promise.resolve(d).then(n, r);
      }
      function c(e) {
        return function () {
          var t = this,
            a = arguments;
          return new Promise(function (n, r) {
            var o = e.apply(t, a);
            function i(e) {
              d(o, n, r, i, s, 'next', e);
            }
            function s(e) {
              d(o, n, r, i, s, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      function u() {
        return (u = c(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        r.a.get(
                          'https://goquotes-api.herokuapp.com/api/v1/random?count=50',
                        )
                      );
                    case 3:
                      i(e.sent.data.quotes), (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        Object(s.error)({ text: 'Ooops! ' + e.t0.message });
                    case 10:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]],
            );
          }),
        )).apply(this, arguments);
      }
      !(function () {
        u.apply(this, arguments);
      })();
      a('D/wG'), a('WB5j');
      function l(e) {
        (o.todayWeatherCity.textContent = e.name + ', ' + e.sys.country),
          (o.fiveDaysCity.textContent = e.name + ', ' + e.sys.country),
          (o.todayWeatherSky.src =
            'http://openweathermap.org/img/wn/' +
            e.weather[0].icon +
            '@2x.png'),
          (o.todayWeatherTemperatureCurrent.textContent =
            '' + Math.round(e.main.temp) + String.fromCharCode('0176')),
          (o.todayWeatherTemperatureDayMinTemp.textContent =
            '' + Math.round(e.main.temp_min) + String.fromCharCode('0176')),
          (o.todayWeatherTemperatureDayMaxTemp.textContent =
            '' + Math.round(e.main.temp_max) + String.fromCharCode('0176')),
          (o.todayDateSunset.textContent =
            '' +
            new Date(1e3 * +e.sys.sunrise).toLocaleTimeString().slice(0, -3)),
          (o.todayDateSunrise.textContent =
            '' +
            new Date(1e3 * +e.sys.sunset).toLocaleTimeString().slice(0, -3));
      }
      (o.todayDateCurrentDay.textContent = '' + new Date().getDate()),
        (o.todayDateCurrentDaySt.textContent =
          '' +
          [
            'st',
            'nd',
            'rd',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'st',
            'nd',
            'rd',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'th',
            'st',
          ][new Date().getDate() - 1]),
        (o.todayDateCurrentWeek.textContent =
          '' +
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ][new Date().getDay()].slice(0, 3)),
        (o.todayDateCurrentMonth.textContent =
          '' +
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ][new Date().getMonth()]),
        setInterval(function () {
          o.todayDateCurrentTime.textContent =
            '' + new Date().toLocaleTimeString();
        }, 1e3),
        (o.todayDayButton.disabled = !0),
        (o.todayDayButton.style.backgroundColor = '#f7f7f7'),
        (o.fiveDaysContainer.hidden = !0),
        (o.diagram.hidden = !0),
        o.todayDayButton.addEventListener('click', function (e) {
          (o.fiveDayButton.style.backgroundColor = ''),
            (o.fiveDayButton.disabled = !1),
            (e.target.disabled = !0),
            (o.todayDayButton.style.backgroundColor = '#f7f7f7'),
            o.fiveDaysContainer.classList.remove('opacityOff'),
            o.fiveDaysContainer.classList.add('opacityOn'),
            o.diagram.classList.remove('opacityOff'),
            o.diagram.classList.add('opacityOn'),
            o.todayButtonContainer.classList.add('opacityOn'),
            o.todayButtonContainer.classList.remove('opacityOff'),
            setTimeout(function () {
              (o.todayWeather.hidden = !1),
                (o.todayDate.hidden = !1),
                (o.todayQuote.hidden = !1),
                (o.fiveDaysContainer.hidden = !0),
                (o.diagram.hidden = !0);
            }, 500),
            setTimeout(function () {
              o.todayWeather.classList.remove('opacityOn'),
                o.todayDate.classList.remove('opacityOn'),
                o.todayQuote.classList.remove('opacityOn'),
                o.todayWeather.classList.add('opacityOff'),
                o.todayDate.classList.add('opacityOff'),
                o.todayQuote.classList.add('opacityOff'),
                o.fiveDaysContainer.classList.remove('opacityOn'),
                o.fiveDaysContainer.classList.add('opacityOff'),
                o.diagram.classList.remove('opacityOn'),
                o.diagram.classList.add('opacityOff'),
                o.todayButtonContainer.classList.remove('opacityOn');
            }, 1e3),
            o.todayButtonContainer.removeAttribute('style');
        }),
        o.fiveDayButton.addEventListener('click', function (e) {
          o.todayDayButton.removeAttribute('style'),
            (o.todayDayButton.disabled = !1),
            (e.target.disabled = !0),
            (o.fiveDayButton.style.backgroundColor = '#f7f7f7'),
            o.todayWeather.classList.add('opacityOn'),
            o.todayDate.classList.add('opacityOn'),
            o.todayQuote.classList.add('opacityOn'),
            o.fiveDaysContainer.classList.add('opacityOn'),
            o.diagram.classList.add('opacityOn'),
            o.todayButtonContainer.classList.add('opacityOn'),
            o.todayButtonContainer.classList.remove('opacityOff'),
            setTimeout(function () {
              (o.todayWeather.hidden = !0),
                (o.todayDate.hidden = !0),
                (o.todayQuote.hidden = !0),
                (o.fiveDaysContainer.hidden = !1),
                (o.diagram.hidden = !1);
            }, 500),
            setTimeout(function () {
              o.fiveDaysContainer.classList.remove('opacityOn'),
                o.fiveDaysContainer.classList.add('opacityOff'),
                o.diagram.classList.remove('opacityOn'),
                o.diagram.classList.add('opacityOff'),
                o.todayButtonContainer.classList.remove('opacityOn');
            }, 1e3),
            (o.todayButtonContainer.style.margin = '0 auto 64px');
        });
      a('ZEAQ');
      function m() {
        o.spinner.classList.remove('is-hidden');
      }
      function y() {
        o.spinner.classList.add('is-hidden');
      }
      const f = e => {
          try {
            const t = localStorage.getItem(e);
            return null === t ? void 0 : JSON.parse(t);
          } catch (e) {
            console.error('Get state error: ', e);
          }
        },
        p = (e, t) => {
          try {
            const a = JSON.stringify(t);
            localStorage.setItem(e, a);
          } catch (e) {
            console.error('Set state error: ', e);
          }
        },
        h = async function (e, t) {
          void 0 === e && (e = 'londond'), void 0 === t && (t = 1);
          try {
            const a = await r.a.get(
              `https://pixabay.com/api/?q=${e}&page=${t}&per_page=12&key=15725312-965e6abfe89225a1afd144b44`,
            );
            a.data.hits.length > 0 &&
              (o.bodyContainer.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.45) 100%, rgba(0, 0, 0, 0.05) 0%), url(${a.data.hits[0].largeImageURL})`);
          } catch (e) {
            Object(s.error)({ text: 'Ooops! ' + e.message });
          }
        },
        v = new Date(),
        g = v.getDate(),
        C = new Date(v.getTime() + 864e5).getDate(),
        A = new Date(v.getTime() + 1728e5).getDate(),
        S = new Date(v.getTime() + 2592e5).getDate(),
        D = new Date(v.getTime() + 3456e5).getDate();
      function b(e) {
        const t = e.list.map(t => ({
            day: L(1e3 * +t.dt - 1e3 * +e.city.timezone),
            month: _(1e3 * +t.dt - 1e3 * +e.city.timezone),
            date: new Date(1e3 * +t.dt - 1e3 * +e.city.timezone).getDate(),
            dt: t.dt,
            timeDt: new Date(1e3 * +t.dt - 1e3 * +e.city.timezone)
              .toLocaleTimeString()
              .slice(0, -3),
            icon: t.weather[0].icon,
            pressure: t.main.pressure,
            humidity: t.main.humidity,
            speed: t.wind.speed,
            temp: Math.floor(t.main.temp),
            temp_min: t.main.temp_min,
            temp_max: t.main.temp_max,
          })),
          a = t.filter(e => {
            if (e.date === g) return e;
          }),
          n = t.filter(e => {
            if (e.date === C) return e;
          }),
          r = t.filter(e => {
            if (e.date === A) return e;
          }),
          o = t.filter(e => {
            if (e.date === S) return e;
          }),
          i = t.filter(e => {
            if (e.date === D) return e;
          });
        (a[0].temp_min = x(a)),
          (n[0].temp_min = x(n)),
          (r[0].temp_min = x(r)),
          (o[0].temp_min = x(o)),
          (i[0].temp_min = x(i)),
          (a[0].temp_max = w(a)),
          (n[0].temp_max = w(n)),
          (r[0].temp_max = w(r)),
          (o[0].temp_max = w(o)),
          (i[0].temp_max = w(i));
        return [a[0], n[0], r[0], o[0], i[0]];
      }
      function x(e) {
        return Math.floor(
          e.reduce((e, t) => (t.temp_min < e ? t.temp_min : e), e[0].temp_min),
        );
      }
      function w(e) {
        return Math.floor(
          e.reduce((e, t) => (t.temp_max > e ? t.temp_max : e), e[0].temp_max),
        );
      }
      function L(e) {
        return [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ][new Date(e).getDay()];
      }
      function _(e) {
        return [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ][new Date(e).getMonth()];
      }
      function T(e) {
        const t = e.list.map(t => ({
            day: L(1e3 * +t.dt - 1e3 * +e.city.timezone),
            month: _(1e3 * +t.dt - 1e3 * +e.city.timezone),
            date: new Date(1e3 * +t.dt - 1e3 * +e.city.timezone).getDate(),
            dt: t.dt,
            timeDt: new Date(1e3 * +t.dt - 1e3 * +e.city.timezone)
              .toLocaleTimeString()
              .slice(0, -3),
            icon: t.weather[0].icon,
            pressure: t.main.pressure,
            humidity: t.main.humidity,
            speed: t.wind.speed,
            temp: Math.floor(t.main.temp),
            temp_min: t.main.temp_min,
            temp_max: t.main.temp_max,
          })),
          a = t.filter(e => {
            if (e.date === g) return e;
          }),
          n = t.filter(e => {
            if (e.date === C) return e;
          }),
          r = t.filter(e => {
            if (e.date === A) return e;
          }),
          o = t.filter(e => {
            if (e.date === S) return e;
          }),
          i = t.filter(e => {
            if (e.date === D) return e;
          });
        (a[0].temp_min = x(a)),
          (n[0].temp_min = x(n)),
          (r[0].temp_min = x(r)),
          (o[0].temp_min = x(o)),
          (i[0].temp_min = x(i)),
          (a[0].temp_max = w(a)),
          (n[0].temp_max = w(n)),
          (r[0].temp_max = w(r)),
          (o[0].temp_max = w(o)),
          (i[0].temp_max = w(i));
        return [a, n, r, o, i];
      }
      a('3dw1');
      var B = a('9AbI'),
        I = a.n(B),
        O = a('JXZ6'),
        M = a.n(O);
      function W(e) {
        o.moreInfo.insertAdjacentHTML('beforeend', M()(e));
      }
      o.prevBtnFiveDays.addEventListener('click', function () {
        (o.fiveDaysWeather.style.scrollBehavior = 'smoth'),
          (o.fiveDaysWeather.scrollLeft = o.fiveDaysWeather.scrollLeft - 140);
      }),
        o.nextBtnFiveDays.addEventListener('click', function () {
          (o.fiveDaysWeather.style.scrollBehavior = 'smoth'),
            (o.fiveDaysWeather.scrollLeft = o.fiveDaysWeather.scrollLeft + 140);
        }),
        (o.moreInfo.onmousedown = function () {
          var e = 0;
          (document.onmousemove = function (t) {
            0 !== e &&
              (o.moreInfo.scrollLeft = o.moreInfo.scrollLeft + (e - t.pageX)),
              (e = t.pageX);
          }),
            (window.onmouseup = function () {
              (document.onmousemove = null), (o.moreInfo.onmouseup = null);
            }),
            (o.moreInfo.ondragstart = function () {
              return !1;
            });
        });
      var q = a('Y++z');
      o.diagramButton.addEventListener('click', function () {
        o.diagramContainer.classList.toggle('opacityOn'),
          setTimeout(function () {
            o.diagramContainer.classList.toggle('is-hidden');
          }, 500),
          console.log(o.diagramContainer.classList.contains('opacityOn')),
          o.diagramContainer.classList.contains('opacityOn') &&
            ((o.diagramButtonText.textContent = 'Show Chart'),
            (o.diagramButtonImg.style.transform = 'rotate(90deg)')),
          o.diagramContainer.classList.contains('opacityOn') ||
            ((o.diagramButtonText.textContent = 'Hide Chart'),
            (o.diagramButtonImg.style.transform = 'rotate(-90deg)'));
      });
      var k = new Date(),
        E = [
          k.toLocaleDateString(),
          new Date(k.getTime() + 864e5).toLocaleDateString(),
          new Date(k.getTime() + 1728e5).toLocaleDateString(),
          new Date(k.getTime() + 2592e5).toLocaleDateString(),
          new Date(k.getTime() + 3456e5).toLocaleDateString(),
        ];
      async function H(e) {
        void 0 === e && (e = 'lviv');
        try {
          const a = (
            await r.a.get(`${j}/forecast?q=${e}&appid=${Q}&units=metric`)
          ).data;
          (t = b(a)),
            o.fiveDaysWeather.insertAdjacentHTML('beforeend', I()(t)),
            (function (e) {
              o.diagramContainer.insertAdjacentHTML(
                'beforeend',
                '<canvas id="myChart"></canvas>',
              );
              var t = {
                type: 'line',
                data: {
                  labels: E,
                  datasets: [
                    {
                      label: 'Temperature, C',
                      backgroundColor: '#ff6b08',
                      borderColor: '#ff6b08',
                      data: [
                        e[0].temp_max,
                        e[1].temp_max,
                        e[2].temp_max,
                        e[3].temp_max,
                        e[4].temp_max,
                      ],
                    },
                    {
                      label: 'Humidity, %',
                      backgroundColor: '#0906ea',
                      borderColor: '#0906ea',
                      data: [
                        e[0].humidity,
                        e[1].humidity,
                        e[2].humidity,
                        e[3].humidity,
                        e[4].humidity,
                      ],
                      hidden: !0,
                    },
                    {
                      label: 'Wind Speed, m/s',
                      backgroundColor: '#eb9b05',
                      borderColor: '#eb9b05',
                      data: [
                        e[0].speed,
                        e[1].speed,
                        e[2].speed,
                        e[3].speed,
                        e[4].speed,
                      ],
                      hidden: !0,
                    },
                    {
                      label: 'Atmosphere Pressure, m/m',
                      backgroundColor: '#057806',
                      borderColor: '#057806',
                      data: [
                        e[0].pressure,
                        e[1].pressure,
                        e[2].pressure,
                        e[3].pressure,
                        e[4].pressure,
                      ],
                      hidden: !0,
                    },
                  ],
                },
                options: {
                  responsive: !0,
                  maintainAspectRatio: !1,
                  legend: { position: 'right' },
                },
              };
              new q.a(document.getElementById('myChart'), t);
            })(b(a));
        } catch (e) {
          Object(s.error)({ text: 'Ooops! ' + e.message });
        }
        var t;
      }
      o.fiveDaysWeather.addEventListener('click', async e => {
        try {
          const t = o.fiveDaysCity.textContent.split(',')[0],
            a = await r.a.get(`${j}/forecast?q=${t}&appid=${Q}&units=metric`);
          setTimeout(() => {
            o.moreInfo.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 1e3,
            });
          }, 500),
            (function (e, t) {
              var a = +e.target.dataset.day;
              o.moreInfo.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 1e3,
              });
              var n = document.querySelectorAll(
                '.five-days-weather__oneday-moreInfo-button',
              );
              function r() {
                n.forEach(function (e) {
                  return e.removeAttribute('style');
                });
              }
              if (a === g) {
                var i = document.querySelector(
                  '.five-days-weather__oneday-moreInfo-button[data-day="' +
                    g +
                    '"]',
                );
                o.moreInfo.children.length > 0 &&
                +o.moreInfo.firstChild.dataset.day === g
                  ? (r(),
                    setTimeout(function () {
                      o.moreInfo.innerHTML = '';
                    }, 500))
                  : (r(),
                    (i.style.cssText =
                      'text-decoration: underline; color: #ffffff'),
                    setTimeout(function () {
                      (o.moreInfo.innerHTML = ''), W(T(t)[0]);
                    }, 500));
              }
              if (a === C) {
                var s = document.querySelector(
                  '.five-days-weather__oneday-moreInfo-button[data-day="' +
                    C +
                    '"]',
                );
                o.moreInfo.children.length > 0 &&
                +o.moreInfo.firstChild.dataset.day === C
                  ? (r(),
                    setTimeout(function () {
                      o.moreInfo.innerHTML = '';
                    }, 500))
                  : (r(),
                    (s.style.cssText =
                      'text-decoration: underline; color: #ffffff'),
                    setTimeout(function () {
                      (o.moreInfo.innerHTML = ''), W(T(t)[1]);
                    }, 500));
              }
              if (a === A) {
                var d = document.querySelector(
                  '.five-days-weather__oneday-moreInfo-button[data-day="' +
                    A +
                    '"]',
                );
                o.moreInfo.children.length > 0 &&
                +o.moreInfo.firstChild.dataset.day === A
                  ? (r(),
                    setTimeout(function () {
                      o.moreInfo.innerHTML = '';
                    }, 500))
                  : (r(),
                    (d.style.cssText =
                      'text-decoration: underline; color: #ffffff'),
                    setTimeout(function () {
                      (o.moreInfo.innerHTML = ''), W(T(t)[2]);
                    }, 500));
              }
              if (a === S) {
                var c = document.querySelector(
                  '.five-days-weather__oneday-moreInfo-button[data-day="' +
                    S +
                    '"]',
                );
                o.moreInfo.children.length > 0 &&
                +o.moreInfo.firstChild.dataset.day === S
                  ? (r(),
                    setTimeout(function () {
                      o.moreInfo.innerHTML = '';
                    }, 500))
                  : (r(),
                    (c.style.cssText =
                      'text-decoration: underline; color: #ffffff'),
                    setTimeout(function () {
                      (o.moreInfo.innerHTML = ''), W(T(t)[3]);
                    }, 500));
              }
              if (a === D) {
                var u = document.querySelector(
                  '.five-days-weather__oneday-moreInfo-button[data-day="' +
                    D +
                    '"]',
                );
                o.moreInfo.children.length > 0 &&
                +o.moreInfo.firstChild.dataset.day === D
                  ? (r(),
                    setTimeout(function () {
                      o.moreInfo.innerHTML = '';
                    }, 500))
                  : (r(),
                    (u.style.cssText =
                      'text-decoration: underline; color: #ffffff'),
                    setTimeout(function () {
                      (o.moreInfo.innerHTML = ''), W(T(t)[4]);
                    }, 500));
              }
            })(e, a.data);
        } catch (e) {
          Object(s.error)({ text: 'Ooops! ' + e.message });
        }
      });
      const j = 'https://api.openweathermap.org/data/2.5',
        Q = '3011adb88aa27a1ff044f2f136f6121c';
      async function R(e) {
        void 0 === e && (e = 'krakow');
        try {
          m();
          const t = await r.a.get(
            `${j}/weather?q=${e}&appid=${Q}&units=metric`,
          );
          l(t.data), 'OK' === t.statusText && h(e), y();
        } catch (e) {
          Object(s.error)({ text: 'No city found with this name' }), y();
        }
      }
      function J(e, t, a, n, r, o, i) {
        try {
          var s = e[o](i),
            d = s.value;
        } catch (e) {
          return void a(e);
        }
        s.done ? t(d) : Promise.resolve(d).then(n, r);
      }
      function z(e) {
        return function () {
          var t = this,
            a = arguments;
          return new Promise(function (n, r) {
            var o = e.apply(t, a);
            function i(e) {
              J(o, n, r, i, s, 'next', e);
            }
            function s(e) {
              J(o, n, r, i, s, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      function F() {
        return (F = z(
          regeneratorRuntime.mark(function e() {
            var t, a;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = { timeout: 1e4 }),
                      (e.next = 3),
                      new Promise(function (e, a) {
                        navigator.geolocation.getCurrentPosition(e, a, t);
                      })
                    );
                  case 3:
                    return (a = e.sent), e.abrupt('return', a);
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      void 0 !== f('locationCity')
        ? (R(f('locationCity')), h(f('locationCity')), H(f('locationCity')))
        : (R('london'), h('london'), H('london')),
        o.btnLocation.addEventListener('click', function () {
          try {
            m(),
              (function () {
                return F.apply(this, arguments);
              })().then(function (e) {
                var t = e.coords.latitude.toFixed(4),
                  a = e.coords.longitude.toFixed(4);
                r.a
                  .get(
                    j +
                      '/weather?lat=' +
                      t +
                      '&lon=' +
                      a +
                      '&appid=' +
                      Q +
                      '&units=metric',
                  )
                  .then(function (e) {
                    y(),
                      l(e.data),
                      p('locationCity', e.data.name),
                      (o.moreInfo.innerHTML = ''),
                      (o.fiveDaysWeather.innerHTML = ''),
                      (o.diagramContainer.innerHTML = ''),
                      h(e.data.name),
                      H(e.data.name);
                  });
              });
          } catch (e) {
            y(), Object(s.error)({ text: 'Ooops! ' + e.message });
          }
        });
      a('hi3g'), a('Xlt+'), a('C4nn');
      var U = a('Such'),
        N = a.n(U);
      (o.searchStarContainer.onmousedown = () => {
        let e = 0;
        (document.onmousemove = t => {
          0 !== e &&
            (o.searchStarContainer.scrollLeft =
              o.searchStarContainer.scrollLeft + (e - t.pageX)),
            (e = t.pageX),
            o.searchStarContainer.scrollLeft > 0 &&
              o.prevBtn.classList.remove('invisible'),
            0 === o.searchStarContainer.scrollLeft &&
              o.prevBtn.classList.add('invisible');
        }),
          (window.onmouseup = () => {
            (document.onmousemove = null),
              (o.searchStarContainer.onmouseup = null);
          }),
          (o.searchStarContainer.ondragstart = () => !1);
      }),
        o.searchForm.addEventListener('submit', function (e) {
          e.preventDefault();
          var t = o.searchInput.value;
          0 === t.length &&
            Object(s.notice)({ text: 'Oh no, make a more correct request!' });
          t.length > 0 &&
            (R(t),
            (o.moreInfo.innerHTML = ''),
            (o.fiveDaysWeather.innerHTML = ''),
            (o.diagramContainer.innerHTML = ''),
            H(t));
        }),
        o.addStarCityButton.addEventListener('click', function () {
          var e =
              ((a = o.searchInput.value),
              a ? a[0].toUpperCase() + a.slice(1).toLowerCase() : a),
            t = P.some(function (t) {
              return t == e;
            });
          var a;
          e.length > 0
            ? t
              ? Object(s.notice)({ text: 'This city has already been added' })
              : (o.searchStarContainer.insertAdjacentHTML('beforeend', N()(e)),
                P.push(e),
                p('Star city', P),
                (o.addStarCityButton.firstElementChild.style.fill = 'gold'),
                (o.addStarCityButton.firstElementChild.style.transition =
                  'all 300ms linear'),
                setTimeout(function () {
                  o.addStarCityButton.firstElementChild.style.fill = 'black';
                }, 1e3),
                o.searchStarContainer.scrollWidth >
                  o.searchStarContainer.offsetWidth &&
                  o.nextBtn.classList.remove('invisible'))
            : Object(s.notice)({ text: "You didn't enter anything" });
        }),
        o.searchStarContainer.addEventListener('click', function (e) {
          'svg' === e.target.nodeName &&
            (e.target.parentElement.parentElement.remove(),
            P.forEach(function (t, a) {
              t === e.target.parentElement.previousElementSibling.innerText &&
                (P.splice(a, 1), p('Star city', P));
            }),
            o.searchStarContainer.scrollWidth <=
              o.searchStarContainer.offsetWidth &&
              null !== document.querySelector('.nextBtn') &&
              (o.nextBtn.classList.add('invisible'),
              o.prevBtn.classList.add('invisible')));
        }),
        o.searchStarContainer.addEventListener('click', function (e) {
          'P' === e.target.nodeName &&
            (R(e.target.textContent),
            (o.moreInfo.innerHTML = ''),
            (o.fiveDaysWeather.innerHTML = ''),
            (o.diagramContainer.innerHTML = ''),
            H(e.target.textContent));
        }),
        o.nextBtn.addEventListener('click', function (e) {
          e.preventDefault(),
            (o.searchStarContainer.style.scrollBehavior = 'smoth'),
            (o.searchStarContainer.scrollLeft =
              o.searchStarContainer.scrollLeft + 80);
          const t =
              o.searchStarContainer.scrollWidth -
                Math.round(o.searchStarContainer.scrollLeft) -
                1 ===
              o.searchStarContainer.offsetWidth,
            a =
              o.searchStarContainer.scrollWidth -
                Math.round(o.searchStarContainer.scrollLeft) -
                2 ===
              o.searchStarContainer.offsetWidth,
            n =
              o.searchStarContainer.scrollWidth -
                Math.round(o.searchStarContainer.scrollLeft) ===
              o.searchStarContainer.offsetWidth,
            r =
              o.searchStarContainer.scrollWidth -
                Math.round(o.searchStarContainer.scrollLeft) +
                1 ===
              o.searchStarContainer.offsetWidth;
          (t || a || n || r) && o.nextBtn.classList.add('invisible'),
            o.searchStarContainer.scrollLeft > 0 &&
              o.prevBtn.classList.remove('invisible');
        }),
        o.prevBtn.addEventListener('click', function (e) {
          e.preventDefault(),
            (o.searchStarContainer.style.scrollBehavior = 'smoth'),
            (o.searchStarContainer.scrollLeft =
              o.searchStarContainer.scrollLeft - 80),
            0 === o.searchStarContainer.scrollLeft &&
              o.prevBtn.classList.add('invisible'),
            o.searchStarContainer.scrollLeft > 0 &&
              o.nextBtn.classList.remove('invisible');
        });
      var P = [];
      void 0 !== f('Star city') &&
        f('Star city').length > 0 &&
        (P = [].concat(f('Star city'))).forEach(function (e) {
          o.searchStarContainer.insertAdjacentHTML('beforeend', N()(e));
        }),
        o.searchStarContainer.scrollWidth > o.searchStarContainer.offsetWidth &&
          o.nextBtn.classList.remove('invisible'),
        o.searchStarContainer.scrollWidth < o.searchStarContainer.offsetWidth &&
          (o.nextBtn.classList.add('invisible'),
          o.prevBtn.classList.add('invisible'));
    },
    Such: function (e, t, a) {
      var n = a('mp5j');
      e.exports = (n.default || n).template({
        compiler: [8, '>= 4.3.0'],
        main: function (e, t, a, n, r) {
          return (
            '<div class="search-star-container">\r\n    <p class="search-star-container__city">' +
            e.escapeExpression(e.lambda(t, t)) +
            '</p>\r\n    <div class="search-star-container__delete">\r\n    <svg class="link-wrap__text-btn-clear" xmlns="http://www.w3.org/2000/svg" fill="white"\r\n      viewBox="0 0 21 21">\r\n      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />\r\n      <path d="M0 0h24v24H0z" fill="none" /></svg>\r\n    </div>\r\n</div>'
          );
        },
        useData: !0,
      });
    },
  },
  [['QfWi', 1, 2]],
]);
//# sourceMappingURL=main.3909dc243e625af7b145.js.map
