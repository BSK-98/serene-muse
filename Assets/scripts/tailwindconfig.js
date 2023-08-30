class Tailwind_Config {
    constructor() {
        this.configur_tailwind()
    }

    configur_tailwind() {
        tailwind.config = {
            theme: {
                fontSize: {
                    13: "13px",
                    12: "12px",
                    11: "11px",
                    10: "10px",
                    9: "9px",
                },
                extend: {
                    gridTemplateColumns: {
                        '13': 'repeat(13, minmax(0, 1fr))',
                        '14': 'repeat(14, minmax(0, 1fr))',
                        '15': 'repeat(15, minmax(0, 1fr))',
                        '16': 'repeat(16, minmax(0, 1fr))',
                        '17': 'repeat(17, minmax(0, 1fr))',
                        '18': 'repeat(18, minmax(0, 1fr))',
                        '19': 'repeat(19, minmax(0, 1fr))',
                    },
                    colors: {
                        default: '#00001a',
                        defaulthover: '#1f1847',
                        primary: 'royalblue',
                        lightgray: '#eeeeee',
                        draftstatus: '#FAA593'
                    },
                    boxShadow: {
                        darker: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                        lighter: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
                    }
                }
            }
        }
    }
}

new Tailwind_Config()