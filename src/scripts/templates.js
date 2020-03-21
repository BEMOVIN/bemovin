import nav from '../templates/00_nav.html';
import carousel from '../templates/01_carousel.html';
import keycopy from '../templates/02_keycopy.html';
import activityTypes from '../templates/03_activity_types.html';
import visitorTypes from '../templates/04_visitor_types.html';
import calendar from '../templates/05_calendar.html';
import team from '../templates/06_team.html';
import prices from '../templates/07_prices.html';
import contacts from '../templates/08_contacts.html';

export class Templates {

  static load() {
    const page =
    `
    ${nav}
    ${carousel}
    ${keycopy}
    ${activityTypes}
    ${visitorTypes}
    ${calendar}
    ${team}
    ${prices}
    ${contacts}
    `;
    document.body.innerHTML = page;
  }
}
