import BetterDateTime from './better-datetime.vue';

export default {
	id: 'better-datetime',
	name: 'Better datetime',
	description: 'New and improved! 🎉',
	icon: 'today',
	component: BetterDateTime,
	types: ['dateTime', 'date', 'time', 'timestamp'],
	recommendedDisplays: ['datetime'],
	options: [
		{
			field: 'enableTime',
			name: 'Enable time picker',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
			},
			schema: {
				default_value: false,
			},
		},
		{
			field: 'enableCalendar',
			name: 'Enable date picker',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
			},
			schema: {
				default_value: true,
			},
		},
    {
			field: 'timeFormat',
			name: 'Time format',
			type: 'string',
			meta: {
        width: 'half',
        interface: 'input',
        note: 'https://flatpickr.js.org/formatting/',
      },
      schema: {
        default_value: 'H:i',
      },
		},
    {
			field: 'dateFormat',
			name: 'Date format',
			type: 'string',
			meta: {
        width: 'half',
        interface: 'input',
      },
      schema: {
        default_value: 'd.m.Y',
      },
		},
	],
};