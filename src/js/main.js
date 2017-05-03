import $ from 'jquery'
import { updateTime, displayTime, alarm, hour, minute, second } from './snitch.js'

$(".start").on("click", updateTime);

export{ hour };
export{ minute };
export{ second };
